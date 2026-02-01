
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

// Helper for download with Redirect Support
async function downloadPdf(url: string, outputPath: string): Promise<boolean> {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        const fetch = (currentUrl: string) => {
            https.get(currentUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, response => {
                // Handle Redirects
                if ([301, 302, 307].includes(response.statusCode || 0) && response.headers.location) {
                    fetch(response.headers.location);
                    return;
                }

                if (response.statusCode !== 200) {
                    file.close();
                    if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath); // Sync unlink for safety
                    reject(new Error(`Status ${response.statusCode}`));
                    return;
                }

                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            }).on('error', err => {
                if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
                reject(err);
            });
        };
        fetch(url);
    });
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

async function main() {
    console.log("🚀 Starting Unified Smart Sync (Download + Analyze)...");

    // 1. Create Sync Job
    const job = await prisma.syncJob.create({
        data: { status: 'RUNNING' }
    });
    const jobId = job.id;
    console.log(`Processing Job ID: ${jobId}`);

    // 1. Get Active Companies
    const companies = await prisma.company.findMany({
        where: { status: 'ACTIVE' },
        select: { id: true, name: true, isin: true, sector: true, ticker: true }
    });

    await logToDB(jobId, 'INFO', `Starting sync for ${companies.length} companies...`);

    console.log(`🎯 Syncing ${companies.length} companies...`);
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
                // 1. If file missing locally -> Download
                // 2. If DB missing or new file -> Update DB
                // 3. If Analysis missing -> Analyze

                let fileExists = fs.existsSync(finalPath);

                if (!fileExists) {
                    // console.log(`  ⬇️  Downloading ${fyq} for ${co.name}...`);
                    try {
                        await downloadPdf(link, finalPath);
                        fileExists = true;
                        downloadedCount++;
                        await logToDB(jobId, 'DOWNLOADED', `Downloaded PDF`, co.name, fyq);
                    } catch (err: any) {
                        console.error(`  ❌ Download failed: ${err.message}`);
                        await logToDB(jobId, 'ERROR', `Download failed: ${err.message}`, co.name, fyq);
                        continue; // Skip if download fails
                    }
                }

                if (fileExists) {
                    // Update/Create DB Record
                    let transcriptId = existingTranscript?.id;

                    if (!existingTranscript) {
                        transcriptId = `real-${(co.ticker || co.id).toUpperCase()}-${fyq.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');
                        await prisma.transcript.create({
                            data: {
                                id: transcriptId,
                                companyId: co.id,
                                quarterId: quarter.id,
                                fileUrl: finalPath,
                                hasAnalysis: false,
                                rawText: ''
                            }
                        });
                        // console.log(`  📝 Created Transcript Record: ${co.name} (${fyq})`);
                        await logToDB(jobId, 'INFO', `Created Transcript Record`, co.name, fyq);
                    } else if (existingTranscript.fileUrl !== finalPath) {
                        // Update path if changed
                        await prisma.transcript.update({
                            where: { id: existingTranscript.id },
                            data: { fileUrl: finalPath }
                        });
                        await logToDB(jobId, 'INFO', `Updated Transcript File Path`, co.name, fyq);
                    }

                    // --- TRIGGER ANALYSIS AUTOMATICALLY ---
                    const needsAnalysis = !existingTranscript?.hasAnalysis;

                    if (needsAnalysis && transcriptId) {
                        // console.log(`  🤖 Triggering AI Analysis for ${co.name}...`);
                        await logToDB(jobId, 'ANALYZING', `Analysis Started`, co.name, fyq);
                        try {
                            await processTranscript(transcriptId);
                            analyzedCount++;
                            // console.log(`  ✅ Analysis Complete: ${co.name}`);
                            await logToDB(jobId, 'COMPLETED', `Analysis Finished`, co.name, fyq);

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
