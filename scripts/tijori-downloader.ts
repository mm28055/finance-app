
import fs from 'fs';
import path from 'path';
import https from 'https';
import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Import the centralized processing logic (includes AI Analysis + RAG Ingestion)
import { processTranscript } from '../lib/sync-service';

dotenv.config();

const prisma = new PrismaClient();

const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const DB_PATH = path.join(process.cwd(), 'data/db.json');
const BASE_URL = "https://www.tijoristack.ai/api/v1";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;
const BUCKET_NAME = 'Conf Call Pdfs';

// Global Job ID for logging
let CURRENT_JOB_ID: string | null = null;

async function logToDb(status: string, message: string, companyName: string = 'System', quarter: string = '-') {
    if (!CURRENT_JOB_ID) return;
    try {
        await prisma.syncLog.create({
            data: {
                jobId: CURRENT_JOB_ID,
                status,
                message: message.substring(0, 190), // truncate to fit
                companyName,
                quarter
            }
        });
    } catch (e) { console.error("Logging failed", e); }
}

// Helper to trigger analysis/ingestion
async function triggerIngestion(transcriptId: string, companyName: string, quarter: string = '-') {
    console.log(`    [Trigger] Starting AI Analysis & RAG for ${companyName}...`);
    try {
        await processTranscript(transcriptId);
        await logToDb('COMPLETED', 'Analysis & RAG Ingestion Done', companyName, quarter);
    } catch (e: any) {
        console.error(`    [Error] Analysis failed: ${e.message}`);
        await logToDb('ERROR', `Analysis Failed: ${e.message}`, companyName, quarter);
    }
}

async function handleFileDownload(url: string, localPath: string, subPath: string) {
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
            // Unify separators to forward slash for cloud storage
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
    return new Promise<any>((resolve, reject) => {
        const url = `${BASE_URL}/concalls/list/?isin=${isin}`;
        const options = { headers: { 'Authorization': `Bearer ${TIJORI_API_KEY}` } };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => { try { resolve(JSON.parse(data)); } catch (e) { resolve(null); } });
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

async function main() {
    console.log("🚀 Starting Smart Universal Sync (TS)...");

    // Create SyncJob
    const job = await prisma.syncJob.create({ data: { status: 'RUNNING' } });
    CURRENT_JOB_ID = job.id;
    console.log(`[Job ID] ${job.id}`);

    if (!fs.existsSync(DB_PATH)) {
        console.error("DB File not found:", DB_PATH);
        return;
    }
    const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

    const sectorArg = process.argv.find(arg => arg.startsWith('--sector='))?.split('=')[1];

    let successCount = 0;
    // Iterate Companies
    const companies: any[] = db.companies;
    for (let i = 0; i < companies.length; i++) {
        const co = companies[i];

        // Robust Sector Filter
        if (sectorArg) {
            const coSector = (co.sector || "").toLowerCase().trim();
            const targetSector = sectorArg.toLowerCase().trim();
            if (coSector !== targetSector) continue;
        }

        if (!co.isin) continue;

        console.log(`[${i + 1}/${companies.length}] Syncing ${co.name}...`);

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

                    // We only care about the new/clean path logic for syncing
                    const cleanPath = path.join(quarterDirNew, `${safeName}_${fyq.replace(/\s+/g, '_')}.pdf`);

                    const syncToDb = async (finalUrl: string, isNewDownload: boolean) => {
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

                            let realTranscriptId = '';

                            if (existing) {
                                realTranscriptId = existing.id;
                                if (existing.fileUrl !== finalUrl) {
                                    await prisma.transcript.update({
                                        where: { id: existing.id },
                                        data: { fileUrl: finalUrl }
                                    });
                                    console.log(`    [DB] Updated Link: ${dbCompany.name} (${fyq})`);
                                    await logToDb('DOWNLOADED', 'Updated Link from Tijori', dbCompany.name, fyq);
                                    // Trigger Ingestion on update
                                    await triggerIngestion(realTranscriptId, dbCompany.name, fyq);
                                }
                            } else {
                                const transcriptId = `real-${(dbCompany.ticker || dbCompany.id).toUpperCase()}-${fyq.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');
                                realTranscriptId = transcriptId;
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
                                if (isNewDownload) {
                                    await logToDb('DOWNLOADED', 'New Transcript Found', dbCompany.name, fyq);
                                }
                                // Trigger Ingestion on create
                                await triggerIngestion(realTranscriptId, dbCompany.name, fyq);
                            }
                        } catch (err: any) {
                            console.error(`    [DB Error] ${err.message}`);
                            await logToDb('ERROR', `DB Sync Error: ${err.message}`, co.name, fyq);
                        }
                    };

                    // Check if file exists locally or if DB has it
                    if (fs.existsSync(cleanPath)) { await syncToDb(cleanPath, false); continue; }

                    // New Cloud-First Logic
                    console.log(`  -> Downloading ${fyq}...`);
                    try {
                        const cloudSubPath = path.join(sectorFolder, fyq, `${safeName}_${fyq.replace(/\s+/g, '_')}.pdf`);
                        const result = await handleFileDownload(link, cleanPath, cloudSubPath);

                        if (result && result.success) {
                            await syncToDb(result.finalPath, true);
                            successCount++;
                        }
                    } catch (e: any) {
                        console.error(`      Download failed: ${e.message}`);
                        await logToDb('ERROR', `Download Failed: ${e.message}`, co.name, fyq);
                    }
                }
            }
            // await new Promise(r => setTimeout(r, 2000));
        } catch (e: any) { console.error(`  Error: ${e.message}`); }
    }
    console.log(`✅ Success: ${successCount} new files.`);
    await prisma.syncJob.update({ where: { id: job.id }, data: { status: 'COMPLETED', endTime: new Date() } });
}

main().catch(e => console.error(e)).finally(async () => { await prisma.$disconnect(); });
