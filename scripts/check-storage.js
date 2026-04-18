require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function main() {
    const BUCKET = 'Conf Call Pdfs';

    // List all files in the bucket
    const { data: folders, error } = await supabase.storage.from(BUCKET).list('', { limit: 1000 });
    if (error) { console.error('Error:', error.message); return; }

    let totalSize = 0;
    let totalFiles = 0;

    for (const folder of folders) {
        if (folder.id) { // It's a file at root
            totalSize += folder.metadata?.size || 0;
            totalFiles++;
            continue;
        }
        // It's a folder (sector) - list subfolders (quarters)
        const { data: qFolders } = await supabase.storage.from(BUCKET).list(folder.name, { limit: 1000 });
        if (!qFolders) continue;

        for (const qf of qFolders) {
            if (qf.id) {
                totalSize += qf.metadata?.size || 0;
                totalFiles++;
                continue;
            }
            // Quarter folder - list PDFs
            const { data: files } = await supabase.storage.from(BUCKET).list(`${folder.name}/${qf.name}`, { limit: 1000 });
            if (!files) continue;
            for (const f of files) {
                totalSize += f.metadata?.size || 0;
                totalFiles++;
            }
        }
    }

    console.log(`\nBucket: "${BUCKET}"`);
    console.log(`Total Files: ${totalFiles}`);
    console.log(`Total Size: ${(totalSize / 1024 / 1024).toFixed(1)} MB`);
    console.log(`Total Size: ${(totalSize / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Free tier limit: 1.00 GB`);
    console.log(`Usage: ${((totalSize / 1024 / 1024 / 1024) * 100).toFixed(1)}%`);
}

main();
