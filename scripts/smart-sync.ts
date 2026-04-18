
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { processTranscript } from '../lib/sync-service';

const prisma = new PrismaClient();
const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const BASE_URL = "https://www.tijoristack.ai/api/v1";
const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

// Helper for sleep
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Supabase Setup
import { createClient } from '@supabase/supabase-js';
require('dotenv').config();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;
const BUCKET_NAME = 'Conf Call Pdfs';

// Updated Download Helper: Supports Local OR Supabase
async function handleFileDownload(url: string, localPath: string, subPath: string): Promise<{ success: boolean, finalPath: string }> {
    // 1. Download Buffer
    const buffer = await new Promise<Buffer | null>((resolve) => {
        const fetch = (currentUrl: string) => {
            https.get(currentUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
                if ([301, 302, 307].includes(res.statusCode || 0) && res.headers.location) {
                    fetch(res.headers.location);
                    return;
                }
                if (res.statusCode !== 200) { resolve(null); return; }

                const chunks: any[] = [];
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
            // Path: "Tyres/Q2 FY26/MRF.pdf" -> Standardize separators
            const cloudKey = subPath.split(path.sep).join('/');

            const { error: uploadError } = await supabase.storage
                .from(BUCKET_NAME)
                .upload(cloudKey, buffer, { contentType: 'application/pdf', upsert: true });

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage.from(BUCKET_NAME).getPublicUrl(cloudKey);
            return { success: true, finalPath: publicUrl };
        } catch (e: any) {
            console.error(`   ⚠️ Supabase Upload Failed (${e.message}). Falling back to local.`);
        }
    }

    // 3. Fallback to Local Disk
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(localPath, buffer);
    return { success: true, finalPath: localPath };
}

async function fetchFromTijori(isin: string) {
    if (!isin) return null;
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}/concalls/list/?isin=${isin}`;
        const options = { headers: { 'Authorization': `Bearer ${TIJORI_API_KEY}` } };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

function getFinancialQuarter(dateStr: string) {
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


// Helper for DB Logging
async function logToDB(jobId: string, status: string, message: string, companyName?: string, quarter?: string) {
    console.log(`[${status}] ${companyName || ''} ${message}`);
    try {
        await prisma.syncLog.create({
            data: {
                jobId,
                status,
                message,
                companyName,
                quarter
            }
        });
    } catch (e) {
        // Ignore logging errors to not break sync
    }
}

// --- RULE 1 & 2: Rolling Window Cleanup ---
// Keeps only the latest 2 quarters per company.
// Deletes old Supabase PDFs + DB records (Analysis, Financials, TranscriptChunk, Transcript).
async function cleanupOldQuarters(companyId: string, companyName: string, jobId: string) {
    try {
        // Get all transcripts for this company, sorted newest first
        const allTranscripts = await prisma.transcript.findMany({
            where: { companyId },
            include: { quarter: true },
            orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }]
        });

        if (allTranscripts.length <= 2) return; // Nothing to clean

        // Keep the latest 2, delete the rest
        const toDelete = allTranscripts.slice(2);

        for (const old of toDelete) {
            const qName = old.quarter.name;

            // 1. Delete PDF from Supabase
            if (old.fileUrl && old.fileUrl.startsWith('http') && supabase) {
                try {
                    // Extract storage path from public URL
                    // URL format: https://xxx.supabase.co/storage/v1/object/public/Conf Call Pdfs/Sector/Quarter/File.pdf
                    const urlParts = old.fileUrl.split(`/storage/v1/object/public/${BUCKET_NAME}/`);
                    if (urlParts.length === 2) {
                        const storagePath = decodeURIComponent(urlParts[1]);
                        const { error } = await supabase.storage.from(BUCKET_NAME).remove([storagePath]);
                        if (error) {
                            console.error(`   ⚠️ Supabase delete failed for ${companyName} ${qName}: ${error.message}`);
                        } else {
                            console.log(`   🗑️ Deleted Supabase PDF: ${storagePath}`);
                        }
                    }
                } catch (e: any) {
                    console.error(`   ⚠️ Supabase cleanup error: ${e.message}`);
                }
            }

            // 2. Delete DB records (order matters for FK constraints)
            await prisma.transcriptChunk.deleteMany({
                where: { companyId, quarterId: old.quarterId }
            });
            await prisma.analysis.deleteMany({
                where: { companyId, quarterId: old.quarterId }
            });
            await prisma.financials.deleteMany({
                where: { companyId, quarterId: old.quarterId }
            });
            await prisma.transcript.delete({
                where: { id: old.id }
            });

            await logToDB(jobId, 'CLEANUP', `Deleted old ${qName} data (PDF + DB)`, companyName, qName);
        }
    } catch (e: any) {
        console.error(`   ⚠️ Cleanup failed for ${companyName}: ${e.message}`);
        // Non-blocking: don't let cleanup errors break the sync
    }
}

function parseArgs() {
    const args = process.argv.slice(2);
    let companyFilter: string | null = null;
    for (let i = 0; i < args.length; i++) {
        if ((args[i] === '--company' || args[i] === '-c') && args[i + 1]) {
            companyFilter = args[i + 1].trim();
            i++;
        }
    }
    return { companyFilter };
}

async function resolveSingleCompany(filter: string) {
    // Match by ISIN (exact), ticker (ci exact), or name (ci contains)
    const companies = await prisma.company.findMany({
        where: {
            status: 'ACTIVE',
            OR: [
                { isin: filter },
                { ticker: { equals: filter, mode: 'insensitive' } },
                { name: { contains: filter, mode: 'insensitive' } },
            ],
        },
        select: { id: true, name: true, isin: true, sector: true, ticker: true },
    });

    if (companies.length === 0) {
        throw new Error(`No ACTIVE company matches "${filter}" (by ISIN, ticker, or name).`);
    }
    if (companies.length > 1) {
        const list = companies.map(c => `  - ${c.name.trim()} (${c.ticker || 'no-ticker'}, ${c.isin || 'no-isin'})`).join('\n');
        throw new Error(`Multiple matches for "${filter}":\n${list}\nRe-run with ticker or ISIN to disambiguate.`);
    }
    return companies;
}

async function main() {
    const { companyFilter } = parseArgs();
    const singleMode = !!companyFilter;

    console.log(singleMode
        ? `🚀 Starting Smart Sync (single company: "${companyFilter}")...`
        : "🚀 Starting Unified Smart Sync (Download + Analyze)...");

    // 1. Create Sync Job
    const job = await prisma.syncJob.create({
        data: { status: 'RUNNING' }
    });
    const jobId = job.id;
    console.log(`Processing Job ID: ${jobId}`);

    // 1. Get Active Companies (filtered if --company flag given)
    const companies = singleMode
        ? await resolveSingleCompany(companyFilter!)
        : await prisma.company.findMany({
            where: { status: 'ACTIVE' },
            select: { id: true, name: true, isin: true, sector: true, ticker: true }
        });

    if (singleMode) {
        const c = companies[0];
        console.log(`   Resolved to: ${c.name.trim()} (ticker=${c.ticker}, isin=${c.isin})`);
    }

    await logToDB(jobId, 'INFO', `Starting sync for ${companies.length} companies...`);

    // --- RULE 2: Pre-Sync Stale Data Sweep ---
    // If a company's oldest transcript is more than 2 quarters behind the
    // global latest quarter, delete it — frees Supabase space before new downloads.
    console.log(`\n🧹 Running stale data sweep before downloads...`);

    const qNum = (q: string) => parseInt(q.replace('Q', '')) || 0;
    const qPos = (year: number, q: string) => year * 4 + qNum(q);

    const allQuarters = await prisma.quarter.findMany({
        orderBy: [{ year: 'desc' }, { q: 'desc' }]
    });

    if (allQuarters.length >= 2) {
        const latestPos = qPos(allQuarters[0].year, allQuarters[0].q);
        let cleanedCount = 0;

        for (const co of companies) {
            const coTranscripts = await prisma.transcript.findMany({
                where: { companyId: co.id },
                include: { quarter: true },
                orderBy: [{ quarter: { year: 'asc' } }, { quarter: { q: 'asc' } }]
            });

            if (coTranscripts.length === 0) continue;

            for (const t of coTranscripts) {
                const tPos = qPos(t.quarter.year, t.quarter.q);
                const gap = latestPos - tPos;

                if (gap > 2) {
                    const qName = t.quarter.name;

                    if (t.fileUrl && t.fileUrl.startsWith('http') && supabase) {
                        try {
                            const urlParts = t.fileUrl.split(`/storage/v1/object/public/${BUCKET_NAME}/`);
                            if (urlParts.length === 2) {
                                const storagePath = decodeURIComponent(urlParts[1]);
                                await supabase.storage.from(BUCKET_NAME).remove([storagePath]);
                                console.log(`   🗑️ [Stale] Deleted PDF: ${storagePath}`);
                            }
                        } catch (e: any) {
                            console.error(`   ⚠️ Supabase stale cleanup error: ${e.message}`);
                        }
                    }

                    await prisma.transcriptChunk.deleteMany({ where: { companyId: co.id, quarterId: t.quarterId } });
                    await prisma.analysis.deleteMany({ where: { companyId: co.id, quarterId: t.quarterId } });
                    await prisma.financials.deleteMany({ where: { companyId: co.id, quarterId: t.quarterId } });
                    await prisma.transcript.delete({ where: { id: t.id } });

                    await logToDB(jobId, 'CLEANUP', `[Stale] Deleted ${qName} (gap: ${gap} quarters)`, co.name, qName);
                    cleanedCount++;
                }
            }
        }
        console.log(`   Stale sweep done: cleaned ${cleanedCount} old transcripts.`);
        await logToDB(jobId, 'INFO', `Pre-sync stale sweep: deleted ${cleanedCount} transcripts with gap >2`);
    } else {
        console.log(`   Only ${allQuarters.length} quarter(s) in DB — no stale sweep needed.`);
    }

    console.log(`\n🎯 Syncing ${companies.length} companies...`);
    let downloadedCount = 0;
    let analyzedCount = 0;

    for (let i = 0; i < companies.length; i++) {
        const co = companies[i];
        if (!co.isin) continue;

        // Log progress every 10 companies
        if (i % 10 === 0) console.log(`[${i + 1}/${companies.length}] Scanning ${co.name}...`);

        try {
            const response: any = await fetchFromTijori(co.isin);
            const list = Array.isArray(response) ? response : (response?.data || []);

            // Sort oldest -> newest so delta analysis has prior quarter in DB when current quarter is processed.
            list.sort((a: any, b: any) => {
                const ta = new Date(a.concall_event_time || 0).getTime();
                const tb = new Date(b.concall_event_time || 0).getTime();
                return ta - tb;
            });

            for (const item of list) {
                let link = item.transcript;
                if (!link || !link.startsWith('http')) continue;

                // Fix Tijori S3 links
                if (link.includes('stockdiscovery.s3.amazonaws.com')) {
                    link = link.replace('stockdiscovery.s3.amazonaws.com', 'files.tijorifinance.com');
                }
                link = encodeURI(link);

                const fyq = getFinancialQuarter(item.concall_event_time);
                const qType = fyq.split(' ')[0];
                const rawYear = parseInt(fyq.split('FY')[1]);
                const qYear = 2000 + rawYear;

                // STRICT FILTER: Q2 FY26 or later (As per user logic)
                // FY26 = 2026.
                // qYear is the Calendar Year of the FY end? No, getFinancialQuarter returns FY end year.
                // Ex: Oct 2025 -> Q3 FY26. getFinancialQuarter logic: m=9 (Oct), fy=2026. Correct.

                const isFY26OrLater = qYear > 2026 || (qYear === 2026 && (qType === 'Q2' || qType === 'Q3' || qType === 'Q4'));

                if (!isFY26OrLater) continue;

                // Setup Paths
                const sectorFolder = (co.sector || 'Unsorted');
                const safeName = co.name.replace(/[^a-z0-9]/gi, '_').trim();
                const dirPath = path.join(CONCALLS_DIR, sectorFolder, fyq);
                // Standardize filename: Company_Name_Q3_FY26.pdf
                const fileName = `${safeName}_${fyq.replace(/\s+/g, '_')}.pdf`;
                const finalPath = path.join(dirPath, fileName);

                // --- CHECK DB STATUS ---
                // First ensure Quarter exists
                const quarter = await prisma.quarter.upsert({
                    where: { name: fyq },
                    update: {},
                    create: { name: fyq, year: qYear, q: qType }
                });

                // Find existing transcript
                const existingTranscript = await prisma.transcript.findUnique({
                    where: {
                        companyId_quarterId: { companyId: co.id, quarterId: quarter.id }
                    }
                });

                // Logic:
                // 1. If file missing locally (AND we aren't using Supabase check) -> Download
                // Actually, if using Supabase, we should check if DB has a URL first?
                // The current logic checks `fileExists = fs.existsSync(finalPath)`.
                // With Supabase, "file exists" means "DB has a valid URL".

                // Let's rely on DB record check primarily.
                // If DB record exists and has a URL, we assume it's good.
                // If NOT, we try to download.

                let finalDownloadUrl = existingTranscript?.fileUrl;
                let downloadSuccess = !!existingTranscript;

                // If we don't have a transcript, OR the file path is local but missing on disk (and we are in local mode)
                // Actually simpler: If !existingTranscript, we definitely need to download.

                if (!existingTranscript) {
                    // console.log(`  ⬇️  Downloading ${fyq} for ${co.name}...`);
                    try {
                        // Construct relative cloud path: "Tyres/Q2 FY26/MRF.pdf"
                        // sectorFolder might have spaces, replace with underscores? No, S3/Storage handles spaces usually, but safer to match logic
                        const cloudSubPath = path.join(sectorFolder, fyq, fileName);

                        const result = await handleFileDownload(link, finalPath, cloudSubPath);
                        if (result.success) {
                            finalDownloadUrl = result.finalPath;
                            downloadSuccess = true;
                            downloadedCount++;
                            const statusMsg = finalDownloadUrl?.startsWith('http') ? 'Uploaded to Cloud' : 'Saved Locally';
                            await logToDB(jobId, 'DOWNLOADED', statusMsg, co.name, fyq);
                        }
                    } catch (err: any) {
                        console.error(`  ❌ Download/Upload failed: ${err.message}`);
                        await logToDB(jobId, 'ERROR', `Download failed: ${err.message}`, co.name, fyq);
                        continue;
                    }
                }

                if (downloadSuccess && finalDownloadUrl) {
                    // Update/Create DB Record
                    let transcriptId = existingTranscript?.id;

                    if (!existingTranscript) {
                        transcriptId = `real-${(co.ticker || co.id).toUpperCase()}-${fyq.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');
                        await prisma.transcript.create({
                            data: {
                                id: transcriptId,
                                companyId: co.id,
                                quarterId: quarter.id,
                                fileUrl: finalDownloadUrl, // Use the new URL (Cloud or Local)
                                hasAnalysis: false,
                                rawText: ''
                            }
                        });
                        await logToDB(jobId, 'INFO', `Created Transcript Record`, co.name, fyq);
                    } else if (existingTranscript.fileUrl !== finalDownloadUrl) {
                        // Only update if path changed (e.g. migrating local -> cloud manually?)
                        // Usually won't happen here, but good for safety.
                    }

                    // --- TRIGGER ANALYSIS AUTOMATICALLY ---
                    const needsAnalysis = !existingTranscript?.hasAnalysis;

                    if (needsAnalysis && transcriptId) {
                        // console.log(`  🤖 Triggering AI Analysis for ${co.name}...`);
                        await logToDB(jobId, 'ANALYZING', `Analysis Started`, co.name, fyq);
                        try {
                            await processTranscript(transcriptId);
                            analyzedCount++;
                            await logToDB(jobId, 'COMPLETED', `Analysis Finished`, co.name, fyq);

                            // RULE 1: Per-company rolling window cleanup
                            await cleanupOldQuarters(co.id, co.name, jobId);

                            // Rate Limit Helper
                            console.log(`  ⏳ Cooling down (10s)...`);
                            await sleep(10000);

                        } catch (aiErr: any) {
                            console.error(`  ⚠️ AI Failed: ${aiErr.message}`);
                            await logToDB(jobId, 'ERROR', `Analysis Failed: ${aiErr.message}`, co.name, fyq);
                        }
                    }
                }
            }
            // Small polite delay between companies
            await sleep(1000);
        } catch (e: any) {
            console.error(`Error processing ${co.name}: ${e.message}`);
            await logToDB(jobId, 'ERROR', `Error processing company: ${e.message}`, co.name);
        }
    }


    console.log(`\n✨ Smart Sync Complete!`);
    await logToDB(jobId, 'INFO', `Sync Finished. Downloaded: ${downloadedCount}, Analyzed: ${analyzedCount}`);

    await prisma.syncJob.update({
        where: { id: jobId },
        data: { status: 'COMPLETED', endTime: new Date() }
    });
}

main()
    .catch(async e => {
        console.error(e);
        // Try to update job status if it exists (requires jobId scope or separate error handler)
        // For now, we'll just log the error and exit.
        // A more robust solution would pass jobId to the catch block or use a global error handler.
        process.exit(1);
    })
    .finally(async () => { await prisma.$disconnect(); });
