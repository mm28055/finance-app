const fs = require('fs');
const path = require('path');
const https = require('https');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const DB_PATH = path.join(__dirname, '../data/db.json');
const BASE_URL = "https://www.tijoristack.ai/api/v1";

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;
const BUCKET_NAME = 'Conf Call Pdfs';

// Updated Download Helper: Supports Local OR Supabase
async function handleFileDownload(url, localPath, subPath) {
    // 1. Download Buffer
    const buffer = await new Promise((resolve) => {
        const fetch = (currentUrl) => {
            https.get(currentUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
                if ([301, 302, 307].includes(res.statusCode) && res.headers.location) {
                    fetch(res.headers.location);
                    return;
                }
                if (res.statusCode !== 200) { resolve(null); return; }

                const chunks = [];
                res.on('data', c => chunks.push(c));
                res.on('end', () => resolve(Buffer.concat(chunks)));
            }).on('error', () => resolve(null));
        };
        fetch(url);
    });

    if (!buffer) throw new Error("Failed to download file buffer");

    // 2. Upload to Supabase (Priority)
    if (supabase) {
        try {
            const cloudKey = subPath.split(path.sep).join('/');

            const { error: uploadError } = await supabase.storage
                .from(BUCKET_NAME)
                .upload(cloudKey, buffer, { contentType: 'application/pdf', upsert: true });

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage.from(BUCKET_NAME).getPublicUrl(cloudKey);
            return { success: true, finalPath: publicUrl };
        } catch (e) {
            console.error(`   ⚠️ Supabase Upload Failed (${e.message}). Falling back to local.`);
        }
    }

    // 3. Fallback to Local Disk
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(localPath, buffer);
    return { success: true, finalPath: localPath };
}

async function fetchFromTijori(isin) {
    if (!isin) return null;
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}/concalls/list/?isin=${isin}`;
        const options = { headers: { 'Authorization': `Bearer ${TIJORI_API_KEY}` } };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => { try { resolve(JSON.parse(data)); } catch (e) { resolve(null); } });
        }).on('error', reject);
    });
}

function getFinancialQuarter(dateStr) {
    const d = new Date(dateStr);
    const m = d.getMonth();
    const y = d.getFullYear();
    const fy = (m <= 5) ? y : (y + 1);
    let q = '';
    if (m >= 6 && m <= 8) q = 'Q1';
    else if (m >= 9 && m <= 11) q = 'Q2';
    else if (m >= 0 && m <= 2) q = 'Q3';
    else q = 'Q4';
    return `${q} FY${fy.toString().slice(-2)}`;
}

async function main() {
    console.log("🚀 Starting Smart Universal Sync...");
    if (!fs.existsSync(DB_PATH)) return;
    const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

    const sectorArg = process.argv.find(arg => arg.startsWith('--sector='))?.split('=')[1];

    let successCount = 0;
    for (let i = 0; i < db.companies.length; i++) {
        const co = db.companies[i];

        // Robust Sector Filter
        if (sectorArg) {
            const coSector = (co.sector || "").toLowerCase().trim();
            const targetSector = sectorArg.toLowerCase().trim();
            if (coSector !== targetSector) continue;
        }

        if (!co.isin) continue;

        console.log(`[${i + 1}/${db.companies.length}] Syncing ${co.name}...`);

        try {
            const response = await fetchFromTijori(co.isin);
            const list = Array.isArray(response) ? response : (response?.data || []);

            for (const item of list) {
                let link = item.transcript;
                if (!link || !link.startsWith('http')) continue;

                if (link.includes('stockdiscovery.s3.amazonaws.com')) {
                    link = link.replace('stockdiscovery.s3.amazonaws.com', 'files.tijorifinance.com');
                }
                link = encodeURI(link);

                const fyq = getFinancialQuarter(item.concall_event_time);
                const qType = fyq.split(' ')[0];
                const qYear = 2000 + parseInt(fyq.split('FY')[1]);

                // STRICT FILTER: Q2 FY26 or later
                const isFY26OrLater = qYear > 2026 || (qYear === 2026 && (qType === 'Q2' || qType === 'Q3' || qType === 'Q4'));

                if (isFY26OrLater) {
                    const sectorFolder = (co.sector || 'Unsorted');
                    const safeName = co.name.replace(/[^a-z0-9]/gi, '_').trim();
                    const quarterDirNew = path.join(process.cwd(), 'Concalls', sectorFolder, fyq);
                    const quarterDirLegacy = path.join(process.cwd(), 'Concalls', sectorFolder, `${qType.toLowerCase()} ${qYear}`);

                    const cleanPath = path.join(quarterDirNew, `${safeName}_${fyq.replace(/\s+/g, '_')}.pdf`);
                    const legacyPath1 = path.join(quarterDirLegacy, `${safeName}.pdf`);
                    const legacyPath2 = path.join(quarterDirNew, `${safeName}.pdf`);

                    const syncToDb = async (finalUrl) => {
                        try {
                            const dbCompany = await prisma.company.findUnique({ where: { isin: co.isin } });
                            if (!dbCompany) return;

                            const dbQuarter = await prisma.quarter.upsert({
                                where: { name: fyq },
                                update: {},
                                create: { name: fyq, year: qYear, q: qType }
                            });

                            // FIND EXISTING TO AVOID UNIQUE CONSTRAINT ERROR
                            const existing = await prisma.transcript.findFirst({
                                where: {
                                    companyId: dbCompany.id,
                                    quarterId: dbQuarter.id
                                }
                            });

                            if (existing) {
                                if (existing.fileUrl !== finalUrl) {
                                    await prisma.transcript.update({
                                        where: { id: existing.id },
                                        data: { fileUrl: finalUrl }
                                    });
                                    console.log(`    [DB] Updated Link: ${dbCompany.name} (${fyq})`);
                                }
                            } else {
                                const transcriptId = `real-${(dbCompany.ticker || dbCompany.id).toUpperCase()}-${fyq.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');
                                await prisma.transcript.create({
                                    data: {
                                        id: transcriptId,
                                        companyId: dbCompany.id,
                                        quarterId: dbQuarter.id,
                                        fileUrl: finalUrl,
                                        hasAnalysis: false
                                    }
                                });
                                console.log(`    [DB] Created Link: ${dbCompany.name} (${fyq})`);
                            }
                        } catch (err) { console.error(`    [DB Error] ${err.message}`); }
                    };

                    // Check if file exists locally or if DB has it (Legacy local check preserved but largely redundant if cloud-first)
                    if (fs.existsSync(cleanPath)) { await syncToDb(cleanPath); continue; }

                    // New Cloud-First Logic
                    console.log(`  -> Downloading ${fyq}...`);
                    try {
                        const cloudSubPath = path.join(sectorFolder, fyq, `${safeName}_${fyq.replace(/\s+/g, '_')}.pdf`);
                        const result = await handleFileDownload(link, cleanPath, cloudSubPath);

                        if (result && result.success) {
                            await syncToDb(result.finalPath);
                            successCount++;
                        }
                    } catch (e) {
                        console.error(`      Download failed: ${e.message}`);
                    }
                }
            }
            await new Promise(r => setTimeout(r, 2000));
        } catch (e) { console.error(`  Error: ${e.message}`); }
    }
    console.log(`✅ Success: ${successCount} new files.`);
}

main().catch(e => console.error(e)).finally(async () => { await prisma.$disconnect(); });
