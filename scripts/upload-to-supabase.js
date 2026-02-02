const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const prisma = new PrismaClient();
const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

// Config
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL; // Or SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; // MUST use Service Role for bypassing RLS if needed, or Anon if public allowed.
// Note: Usually service role key is needed for unlimited writes from backend.

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
    console.error("   (Please add SUPABASE_SERVICE_ROLE_KEY from your Supabase Dashboard -> Settings -> API)");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const BUCKET_NAME = 'Conf Call Pdfs';

async function uploadFile(filePath, subPath) {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        // Clean subpath for storage key (Unix style)
        const storageKey = subPath.split(path.sep).join('/');

        console.log(`   ⬆️ Uploading: ${storageKey}`);

        const { data, error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .upload(storageKey, fileBuffer, {
                contentType: 'application/pdf',
                upsert: true
            });

        if (error) throw error;

        // Get Public URL
        const { data: { publicUrl } } = supabase
            .storage
            .from(BUCKET_NAME)
            .getPublicUrl(storageKey);

        return publicUrl;
    } catch (e) {
        console.error(`      ❌ Upload Failed: ${e.message}`);
        return null;
    }
}

async function main() {
    console.log("🚀 Starting Bulk PDF Migration to Supabase...");

    // Safety check for bucket
    const { data: buckets, error } = await supabase.storage.listBuckets();
    if (error) {
        console.error("❌ Could not list buckets. Check credentials.", error.message);
        return;
    }

    const bucketExists = buckets.find(b => b.name === BUCKET_NAME);
    if (!bucketExists) {
        console.log(`   ⚠️ Bucket '${BUCKET_NAME}' not found. Attempting creation...`);
        const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, { public: true });
        if (createError) {
            console.error(`   ❌ Failed to create bucket: ${createError.message}`);
            console.error("      Please create 'pdfs' bucket manually in Supabase Dashboard (Public Access).");
            return;
        }
        console.log("   ✅ Bucket created.");
    }

    if (!fs.existsSync(CONCALLS_DIR)) {
        console.log("❌ Concalls directory not found.");
        return;
    }

    const sectors = fs.readdirSync(CONCALLS_DIR);
    let successCount = 0;

    for (const sector of sectors) {
        const sectorPath = path.join(CONCALLS_DIR, sector);
        if (!fs.statSync(sectorPath).isDirectory()) continue;

        const quarters = fs.readdirSync(sectorPath);
        for (const qFolder of quarters) {
            const qPath = path.join(sectorPath, qFolder);
            if (!fs.statSync(qPath).isDirectory()) continue;

            const files = fs.readdirSync(qPath);
            for (const file of files) {
                if (!file.toLowerCase().endsWith('.pdf')) continue;

                const fullPath = path.join(qPath, file);

                // Construct cloud path: Sector/Quarter/Filename
                // e.g. "Tyres/Q2 FY26/MRF.pdf"
                const cloudPath = path.join(sector, qFolder, file);

                // 1. Upload
                const publicUrl = await uploadFile(fullPath, cloudPath);

                if (publicUrl) {
                    // 2. Update DB
                    // Find transcript by Filename or fileUrl match
                    // We try to match by filename "contains" because DB might have "C:/.../MRF.pdf"

                    // Specific logic: find db record where fileUrl contains filename
                    // OR if we stored just relative path before? 
                    // Let's assume absolute path was stored.

                    const transcripts = await prisma.transcript.findMany({
                        where: {
                            fileUrl: { contains: file }
                        }
                    });

                    if (transcripts.length > 0) {
                        for (const t of transcripts) {
                            await prisma.transcript.update({
                                where: { id: t.id },
                                data: { fileUrl: publicUrl }
                            });
                            console.log(`      ✅ DB Updated: ${file} -> ${publicUrl}`);
                            successCount++;
                        }
                    } else {
                        console.log(`      ⚠️ Uploaded but NO DB Record found for: ${file}`);
                    }
                }
            }
        }
    }

    console.log(`\n✨ Migration Complete! PDFs uploaded and DB records updated: ${successCount}`);
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
