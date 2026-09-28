
// MUST stay the first import. `import` statements are hoisted and run before any
// top-level require(), so a mid-file require('dotenv').config() executes AFTER
// lib/gemini has already read process.env — meaning the API keys would load as an
// accident of import order (lib/prisma happens to pull .env in first today). One
// reorder and Gemini would silently start with zero keys.
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import https from 'https';
// Shared client, NOT a second `new PrismaClient()` — lib/sync-service.ts and
// lib/rag-ingest.ts use the singleton, and an extra connected client keeps the
// Node process alive after the sync finishes (the script appears to hang).
import { prisma } from '../lib/prisma';
import { processTranscript } from '../lib/sync-service';
import { updateCompanyProfile } from '../lib/profile-service';
import { pruneCompany, TRANSCRIPT_WINDOW, ANALYSIS_WINDOW, FINANCIALS_WINDOW } from '../lib/retention';
import { supabaseAdmin as supabase, uploadTranscriptPdf, deleteStoredPdf } from '../lib/transcript-storage';
import { generalQuarterName, fiscalYearOf, GENERAL_Q } from '../lib/quarters';
import { classifyTranscript, isRelatedEntityCall } from '../lib/doc-type';
// @ts-ignore - pdf-parse ships no types
import pdfParse from 'pdf-parse';

const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const BASE_URL = "https://www.tijoristack.ai/api/v1";
const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

// How many companies are processed at once. Companies are independent, so this is
// safe; the practical ceiling is the Gemini rate limit, not the code — budget
// roughly 3 companies per API key. Override with --concurrency=N.
const DEFAULT_CONCURRENCY = 6;

// Helper for sleep
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Supabase client and PDF upload/delete live in lib/transcript-storage.ts (shared
// with scripts/sync-exchange-transcripts.ts); env is already loaded by the
// dotenv/config import at the top.

// Updated Download Helper: Supports Local OR Supabase
async function handleFileDownload(url: string, localPath: string, subPath: string): Promise<{ success: boolean, finalPath: string, buffer: Buffer }> {
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
            const publicUrl = await uploadTranscriptPdf(cloudKey, buffer);
            return { success: true, finalPath: publicUrl, buffer };
        } catch (e: any) {
            console.error(`   ⚠️ Supabase Upload Failed (${e.message}). Falling back to local.`);
        }
    }

    // 3. Fallback to Local Disk
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(localPath, buffer);
    return { success: true, finalPath: localPath, buffer };
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

// Numeric ordering score for "Q3 FY26" — higher means newer.
function quarterScore(name: string): number {
    const parts = name.split(' ');
    if (parts.length < 2) return 0;
    const q = parseInt(parts[0].replace('Q', '')) || 0;
    const fy = parseInt(parts[1].replace('FY', '')) || 0;
    return fy * 10 + q;
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
// Windows live in lib/retention.ts:
//   Transcripts/PDFs/Chunks: latest 2 quarters.
//   Analysis: latest 4 quarters (outlives the transcript it was written from).
//   deltaAnalysis: newest quarter only.
//   Financials: latest 5 quarters (need 5 to compute YoY = same quarter last year).
async function cleanupOldQuarters(companyId: string, companyName: string, jobId: string) {
    try {
        const result = await pruneCompany(prisma, companyId, {
            onTranscriptEvict: async (t) => {
                await deleteStoredPdf(t.fileUrl, companyName, t.quarterName);
                await logToDB(jobId, 'CLEANUP', `Deleted old ${t.quarterName} transcript/PDF/chunks (analysis kept)`, companyName, t.quarterName);
            },
            onAnalysisEvict: async (a) => {
                await logToDB(jobId, 'CLEANUP', `Deleted old ${a.quarterName} analysis`, companyName, a.quarterName);
            }
        });

        if (result.deltasCleared > 0) {
            console.log(`   🧽 Cleared ${result.deltasCleared} superseded delta report(s) for ${companyName}.`);
        }
    } catch (e: any) {
        console.error(`   ⚠️ Cleanup failed for ${companyName}: ${e.message}`);
        // Non-blocking: don't let cleanup errors break the sync
    }
}

function parseArgs() {
    const args = process.argv.slice(2);
    let companyFilter: string | null = null;
    let sweep = false;
    let withProfiles = false;
    let concurrency = DEFAULT_CONCURRENCY;
    for (let i = 0; i < args.length; i++) {
        if ((args[i] === '--company' || args[i] === '-c') && args[i + 1]) {
            companyFilter = args[i + 1].trim();
            i++;
        } else if (args[i] === '--sweep') {
            sweep = true;
        } else if (args[i] === '--with-profiles') {
            withProfiles = true;
        } else if (args[i].startsWith('--concurrency=')) {
            concurrency = parseInt(args[i].split('=')[1]) || DEFAULT_CONCURRENCY;
        } else if (args[i] === '--concurrency' && args[i + 1]) {
            concurrency = parseInt(args[i + 1]) || DEFAULT_CONCURRENCY;
            i++;
        }
    }
    return { companyFilter, sweep, withProfiles, concurrency: Math.max(1, concurrency) };
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
    const { companyFilter, sweep, withProfiles, concurrency } = parseArgs();
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

    // --- RULE 2: Pre-Sync Stale Data Sweep (opt-in via --sweep) ---
    // Deletes data that has fallen more than its retention window behind the
    // global latest quarter: transcripts/PDFs/chunks at TRANSCRIPT_WINDOW,
    // analyses at the wider ANALYSIS_WINDOW. Delta reports are never touched
    // here — they are only replaced by a newer delta. Normally redundant because
    // the per-company rolling window runs after each analysis. Only run this
    // when --sweep is passed (e.g. once at the start of a fresh results cycle,
    // or after suspected data drift).
    if (!sweep) {
        console.log(`\n⏭️  Skipping stale data sweep (pass --sweep to run it).`);
    } else {
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

                    if (gap > TRANSCRIPT_WINDOW) {
                        const qName = t.quarter.name;

                        await deleteStoredPdf(t.fileUrl, co.name, qName);

                        // Analysis is NOT deleted here — it has its own, wider
                        // window and is swept separately below.
                        await prisma.transcriptChunk.deleteMany({ where: { companyId: co.id, quarterId: t.quarterId } });
                        await prisma.transcript.delete({ where: { id: t.id } });
                        await logToDB(jobId, 'CLEANUP', `[Stale] Deleted ${qName} transcript/PDF/chunks (gap: ${gap})`, co.name, qName);
                        cleanedCount++;
                    }
                }
            }
            console.log(`   Stale sweep done: cleaned ${cleanedCount} old transcripts.`);
            await logToDB(jobId, 'INFO', `Pre-sync stale sweep: deleted ${cleanedCount} transcripts with gap >${TRANSCRIPT_WINDOW}`);

            // Analysis stale sweep — wider window, so written analysis survives
            // the transcript it came from.
            //
            // Deliberately does NOT touch deltaAnalysis: a delta is only ever
            // replaced by a newer one (see pruneCompany), never purged on its
            // own. Clearing deltas here would strip them before the replacement
            // quarter has been analyzed.
            let analysisCleanedCount = 0;
            for (const co of companies) {
                const coAnalyses = await prisma.analysis.findMany({
                    where: { companyId: co.id },
                    include: { quarter: true },
                    orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }]
                });
                if (coAnalyses.length === 0) continue;

                for (const a of coAnalyses) {
                    const gap = latestPos - qPos(a.quarter.year, a.quarter.q);
                    if (gap > ANALYSIS_WINDOW) {
                        await prisma.analysis.delete({ where: { id: a.id } });
                        await logToDB(jobId, 'CLEANUP', `[Stale] Deleted ${a.quarter.name} analysis (gap: ${gap})`, co.name, a.quarter.name);
                        analysisCleanedCount++;
                    }
                }
            }
            if (analysisCleanedCount > 0) {
                console.log(`   Analysis stale sweep done: deleted ${analysisCleanedCount} analyses.`);
                await logToDB(jobId, 'INFO', `Pre-sync analysis sweep: deleted ${analysisCleanedCount} analyses (gap >${ANALYSIS_WINDOW})`);
            }

            // Separate Financials stale sweep — keep 5 quarters per company
            let financialsCleanedCount = 0;
            for (const co of companies) {
                const coFinancials = await prisma.financials.findMany({
                    where: { companyId: co.id },
                    include: { quarter: true },
                    orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }]
                });
                if (coFinancials.length > FINANCIALS_WINDOW) {
                    for (const f of coFinancials.slice(FINANCIALS_WINDOW)) {
                        const fPos = qPos(f.quarter.year, f.quarter.q);
                        const gap = latestPos - fPos;
                        if (gap > FINANCIALS_WINDOW) {
                            await prisma.financials.delete({ where: { id: f.id } });
                            financialsCleanedCount++;
                        }
                    }
                }
            }
            if (financialsCleanedCount > 0) {
                console.log(`   Financials stale sweep done: cleaned ${financialsCleanedCount} old records.`);
            }
        } else {
            console.log(`   Only ${allQuarters.length} quarter(s) in DB — no stale sweep needed.`);
        }
    }

    console.log(`\n🎯 Syncing ${companies.length} companies (${concurrency} at a time)${withProfiles ? ', refreshing profiles as they report' : ''}...`);
    if (!withProfiles) {
        console.log(`   (profiles NOT refreshed — pass --with-profiles to include them)`);
    }
    let downloadedCount = 0;
    let analyzedCount = 0;
    let completedCount = 0;
    let profileCount = 0;

    // One company end-to-end: fetch its concall list, download + analyze + index
    // each eligible quarter, then prune. Quarters WITHIN a company stay strictly
    // sequential oldest -> newest, because the delta analysis for a quarter needs
    // the previous quarter already stored.
    async function syncOneCompany(co: typeof companies[number]) {
        if (!co.isin) return;
        // Newest quarter this company got analyzed in this run, if any.
        let newestAnalyzedQuarter: string | null = null;
        try {
            const response: any = await fetchFromTijori(co.isin);
            const list = Array.isArray(response) ? response : (response?.data || []);

            // Sort oldest -> newest so delta analysis has prior quarter in DB when current quarter is processed.
            list.sort((a: any, b: any) => {
                const ta = new Date(a.concall_event_time || 0).getTime();
                const tb = new Date(b.concall_event_time || 0).getTime();
                return ta - tb;
            });

            // Staleness gate: if this company's newest concall is older than 6
            // months, skip the whole company. Prevents downloading ancient
            // transcripts for companies that have stopped filing (e.g. Timken
            // India whose latest is Q1 FY26 from Aug 2025).
            const STALENESS_MS = 1000 * 60 * 60 * 24 * 30 * 6; // ~6 months
            const newestDateMs = list.reduce((max: number, it: any) => {
                if (!it.transcript || typeof it.transcript !== 'string' || !it.transcript.startsWith('http')) return max;
                const t = new Date(it.concall_event_time || 0).getTime();
                return Number.isFinite(t) && t > max ? t : max;
            }, 0);
            if (newestDateMs === 0) {
                await logToDB(jobId, 'SKIPPED', 'No usable concall from Tijori', co.name);
                return;
            }
            if (Date.now() - newestDateMs > STALENESS_MS) {
                const ageMonths = ((Date.now() - newestDateMs) / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
                await logToDB(jobId, 'SKIPPED', `Stale data — newest concall is ${ageMonths} months old`, co.name);
                return;
            }

            // Rolling-window inbound filter: only the latest TRANSCRIPT_WINDOW
            // quarters Tijori has for THIS company are eligible. Prevents wasted
            // Q1/Q2 work for brand-new companies and stops re-downloading old
            // quarters once newer ones have arrived — including quarters whose
            // transcript was pruned but whose analysis we still keep.
            const allScores: number[] = list
                .filter((it: any) => it.transcript && typeof it.transcript === 'string' && it.transcript.startsWith('http') && it.concall_event_time)
                .map((it: any) => quarterScore(getFinancialQuarter(it.concall_event_time)));
            const uniqueDesc: number[] = Array.from(new Set(allScores)).sort((a, b) => b - a);
            const top2Scores: Set<number> = new Set(uniqueDesc.slice(0, TRANSCRIPT_WINDOW));

            // How many eligible documents we've already seen for each quarter in
            // this pass. Tijori files investor meets, analyst days and business
            // updates under the quarter their event date falls in, so a quarter can
            // carry more than one document. The first is the candidate earnings
            // call; everything after it is an extra and goes to a General slot,
            // instead of being silently dropped by the one-transcript-per-quarter
            // unique constraint (which is what used to happen).
            const seenPerQuarter = new Map<string, number>();

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

                // Skip anything outside the latest 2 quarters Tijori reports
                // for this company.
                if (!top2Scores.has(quarterScore(fyq))) continue;

                const seq = seenPerQuarter.get(fyq) || 0;
                seenPerQuarter.set(fyq, seq + 1);
                const isFirstOfQuarter = seq === 0;

                const eventDate = new Date(item.concall_event_time);
                // The General slot this document would occupy if it turns out not
                // to be this company's earnings call for the quarter. Keyed by
                // event date, so two documents inside one quarter never collide.
                const genName = generalQuarterName(item.concall_event_time);

                const existingByName = async (name: string) => {
                    const q = await prisma.quarter.findUnique({ where: { name } });
                    if (!q) return null;
                    return prisma.transcript.findUnique({
                        where: { companyId_quarterId: { companyId: co.id, quarterId: q.id } },
                        include: { quarter: true }
                    });
                };

                // --- Which slot does this document belong in? ---
                // Identity first: sourceEventDate says exactly which document a
                // stored row came from, so "already have this one" never has to be
                // inferred from list position. Rows written before that column
                // existed have it null and fall back to the old assumption — the
                // first document listed for a quarter is the one sitting in it.
                // Matched by DAY, not by exact timestamp. The stored value can come
                // from Tijori (which carries a time) or from the transcript's own
                // stated date (which does not), and an exact comparison between the
                // two silently fails — re-downloading a document already held.
                const dayStart = new Date(Date.UTC(
                    eventDate.getUTCFullYear(), eventDate.getUTCMonth(), eventDate.getUTCDate()
                ));
                const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);

                let targetName = fyq;
                let existingTranscript = await prisma.transcript.findFirst({
                    where: { companyId: co.id, sourceEventDate: { gte: dayStart, lt: dayEnd } },
                    include: { quarter: true }
                });

                if (existingTranscript) {
                    targetName = existingTranscript.quarter.name;
                } else {
                    const genExisting = await existingByName(genName);
                    if (genExisting) {
                        existingTranscript = genExisting;
                        targetName = genName;
                    } else {
                        const qExisting = await existingByName(fyq);
                        if (qExisting && !qExisting.sourceEventDate && isFirstOfQuarter) {
                            // Legacy row, no event date recorded: assume it is this
                            // document. Backfilled below so the guess is made once.
                            existingTranscript = qExisting;
                            targetName = fyq;
                        } else if (qExisting) {
                            // The quarter is already held by a different document.
                            targetName = genName;
                        }
                    }
                }

                // Record the event date on a legacy row so the next run matches it
                // by identity instead of position.
                if (existingTranscript && existingTranscript.sourceEventDate?.getTime() !== eventDate.getTime()) {
                    await prisma.transcript.update({
                        where: { id: existingTranscript.id },
                        data: { sourceEventDate: eventDate }
                    });
                }

                // Setup Paths (folder follows whichever slot we land in)
                const sectorFolder = (co.sector || 'Unsorted');
                const safeName = co.name.replace(/[^a-z0-9]/gi, '_').trim();

                const pathsFor = (slotName: string) => {
                    const dirPath = path.join(CONCALLS_DIR, sectorFolder, slotName);
                    const fileName = `${safeName}_${slotName.replace(/\s+/g, '_')}.pdf`;
                    return { dirPath, fileName, finalPath: path.join(dirPath, fileName) };
                };

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
                    try {
                        // Download once to a temporary location, then decide the
                        // slot from what the document actually is. Extras skip the
                        // classification: being the second document in a quarter is
                        // already enough to keep them out of the quarter slot.
                        const originalTarget = targetName;
                        const probe = pathsFor(targetName);
                        const result = await handleFileDownload(
                            link, probe.finalPath, path.join(sectorFolder, targetName, probe.fileName)
                        );
                        if (!result.success) throw new Error('download reported failure');

                        if (targetName === fyq) {
                            let text = '';
                            try {
                                text = (await pdfParse(result.buffer)).text || '';
                            } catch {
                                // Unparseable PDF: leave it in the quarter slot and
                                // let processTranscript surface the problem.
                            }
                            const verdict = classifyTranscript(text);
                            const related = isRelatedEntityCall(text, co.name);
                            if (verdict.type === 'GENERAL' || related) {
                                targetName = genName;
                                const why = related
                                    ? "a related entity's call, not this company's"
                                    : 'not an earnings call';
                                console.log(`  📄 ${co.name.trim()}: ${fyq} document is ${why} — filing as "${genName}".`);
                                await logToDB(jobId, 'INFO', `${why} — filed as ${genName}`, co.name, fyq);
                            }
                        }

                        // Re-upload under the final slot when classification moved
                        // it, so the stored path matches the slot it belongs to.
                        if (targetName !== originalTarget) {
                            const dest = pathsFor(targetName);
                            const moved = await handleFileDownload(
                                link, dest.finalPath, path.join(sectorFolder, targetName, dest.fileName)
                            );
                            finalDownloadUrl = moved.finalPath;
                        } else {
                            finalDownloadUrl = result.finalPath;
                        }

                        downloadSuccess = true;
                        downloadedCount++;
                        const statusMsg = finalDownloadUrl?.startsWith('http') ? 'Uploaded to Cloud' : 'Saved Locally';
                        await logToDB(jobId, 'DOWNLOADED', statusMsg, co.name, targetName);
                    } catch (err: any) {
                        console.error(`  ❌ Download/Upload failed: ${err.message}`);
                        await logToDB(jobId, 'ERROR', `Download failed: ${err.message}`, co.name, fyq);
                        continue;
                    }
                }

                // The slot is settled — create its Quarter row now.
                const isGeneralSlot = targetName !== fyq;
                const quarter = await prisma.quarter.upsert({
                    where: { name: targetName },
                    update: {},
                    create: isGeneralSlot
                        ? { name: targetName, year: fiscalYearOf(item.concall_event_time), q: GENERAL_Q }
                        : { name: targetName, year: qYear, q: qType }
                });

                if (downloadSuccess && finalDownloadUrl) {
                    // Update/Create DB Record
                    let transcriptId = existingTranscript?.id;

                    if (!existingTranscript) {
                        transcriptId = `real-${(co.ticker || co.id).toUpperCase()}-${targetName.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');
                        // Ids used to be derived from the quarter alone, so rows that
                        // have since moved slots can already own the name we just
                        // built. Fall back to a unique one rather than aborting the
                        // whole company on a constraint error.
                        if (await prisma.transcript.findUnique({ where: { id: transcriptId } })) {
                            transcriptId = `${transcriptId}-${eventDate.toISOString().slice(0, 10)}`;
                        }
                        await prisma.transcript.create({
                            data: {
                                id: transcriptId,
                                companyId: co.id,
                                quarterId: quarter.id,
                                fileUrl: finalDownloadUrl, // Use the new URL (Cloud or Local)
                                hasAnalysis: false,
                                rawText: '',
                                sourceEventDate: eventDate
                            }
                        });
                        await logToDB(jobId, 'INFO', `Created Transcript Record`, co.name, targetName);
                    } else if (existingTranscript.fileUrl !== finalDownloadUrl) {
                        // Only update if path changed (e.g. migrating local -> cloud manually?)
                        // Usually won't happen here, but good for safety.
                    }

                    // --- TRIGGER ANALYSIS AUTOMATICALLY ---
                    const needsAnalysis = !existingTranscript?.hasAnalysis;

                    if (needsAnalysis && transcriptId) {
                        // console.log(`  🤖 Triggering AI Analysis for ${co.name}...`);
                        await logToDB(jobId, 'ANALYZING', `Analysis Started`, co.name, targetName);
                        try {
                            // processTranscript REPORTS a refusal, it does not throw one:
                            // a placeholder PDF (Tijori sometimes files a press release or
                            // an exchange intimation in the transcript field), an
                            // extraction failure or an empty document all come back as
                            // { success: false, error }. Ignoring that return counted them
                            // as analysed and logged "Analysis Finished", so a quarter with
                            // no Analysis row looked done — Alembic Pharma Q1 FY27 read as
                            // analysed while its "transcript" was a 4-page press release.
                            // hasAnalysis stays false either way, so a later sync retries.
                            const result = await processTranscript(transcriptId);

                            if (!result?.success) {
                                const reason = (result as any)?.error || 'UNKNOWN';
                                console.warn(`  ⏭️ Analysis skipped for ${co.name.trim()} ${targetName}: ${reason}`);
                                await logToDB(jobId, 'SKIPPED', `Analysis skipped: ${reason}`, co.name, targetName);
                                await sleep(2000);
                                continue;
                            }

                            analyzedCount++;
                            await logToDB(jobId, 'COMPLETED', `Analysis Finished`, co.name, targetName);

                            // Remember the newest quarter analyzed so the profile is
                            // refreshed ONCE per company after the loop, even when two
                            // quarters land together.
                            // General documents are deliberately excluded: the
                            // profile is stamped with a quarter, and stamping it
                            // "General 06 Jul 2026" would both read wrong and make
                            // the company look permanently stale to --stale runs.
                            if (!isGeneralSlot && (!newestAnalyzedQuarter || quarterScore(fyq) > quarterScore(newestAnalyzedQuarter))) {
                                newestAnalyzedQuarter = fyq;
                            }

                            // RULE 1: Per-company rolling window cleanup
                            await cleanupOldQuarters(co.id, co.name, jobId);

                            // Rate Limit Helper
                            // Small breather only — lib/gemini.ts already rotates keys
                            // and retries on a 429, which is what the old 10s sleep was
                            // crudely standing in for. At 79 analyses that sleep alone
                            // cost 13 minutes of the run.
                            await sleep(2000);

                        } catch (aiErr: any) {
                            console.error(`  ⚠️ AI Failed: ${aiErr.message}`);
                            await logToDB(jobId, 'ERROR', `Analysis Failed: ${aiErr.message}`, co.name, targetName);
                        }
                    }
                }
            }

            // Profile refresh is OPT-IN (--with-profiles). Without the flag sync
            // stamps nothing profile-related, so profiles stay entirely manual via
            // `scripts/batch-profile-generator.ts --stale`. Either way this runs only
            // after every quarter the company reported has been analyzed, indexed and
            // pruned, and a failure here never invalidates a good analysis — the next
            // run retries it, since profileQuarter stays unstamped.
            if (withProfiles && newestAnalyzedQuarter) {
                try {
                    const res = await updateCompanyProfile(co.id, newestAnalyzedQuarter);
                    if (res.updated) {
                        profileCount++;
                        console.log(`  📝 Profile ${res.mode === 'revise' ? 'revised' : 'created'} for ${co.name.trim()} ${newestAnalyzedQuarter} (${res.chars} chars)`);
                        await logToDB(jobId, 'PROFILE', `Profile ${res.mode === 'revise' ? 'revised' : 'created'} for ${newestAnalyzedQuarter}`, co.name, newestAnalyzedQuarter);
                    } else {
                        console.log(`  ⏭️ Profile skipped for ${co.name.trim()}: ${res.reason}`);
                    }
                } catch (profErr: any) {
                    console.error(`  ⚠️ Profile update failed for ${co.name.trim()}: ${profErr.message}`);
                    await logToDB(jobId, 'ERROR', `Profile update failed: ${profErr.message}`, co.name, newestAnalyzedQuarter);
                }
            }
        } catch (e: any) {
            console.error(`Error processing ${co.name}: ${e.message}`);
            await logToDB(jobId, 'ERROR', `Error processing company: ${e.message}`, co.name);
        }
    }

    // Shared-cursor worker pool: each worker takes the next company as soon as it
    // finishes, so one slow company never stalls the rest. A crash in one company
    // is already contained by syncOneCompany's own try/catch.
    let cursor = 0;
    async function syncWorker(slot: number) {
        // Stagger starts so N workers don't hit Tijori/Gemini in the same instant.
        await sleep(slot * 2000);

        while (true) {
            const idx = cursor++;
            if (idx >= companies.length) return;
            const co = companies[idx];
            if (!co.isin) continue;

            await syncOneCompany(co);

            completedCount++;
            if (completedCount % 10 === 0) {
                console.log(`   …${completedCount}/${companies.length} companies done (downloaded ${downloadedCount}, analyzed ${analyzedCount})`);
            }
            await sleep(1000);
        }
    }

    const startedAt = Date.now();
    await Promise.all(
        Array.from({ length: Math.min(concurrency, companies.length) }, (_, i) => syncWorker(i))
    );
    console.log(`\n⏱️  Sync loop took ${((Date.now() - startedAt) / 60000).toFixed(1)} min.`);

    console.log(`\n✨ Smart Sync Complete!`);
    await logToDB(jobId, 'INFO', `Sync Finished. Downloaded: ${downloadedCount}, Analyzed: ${analyzedCount}${withProfiles ? `, Profiles: ${profileCount}` : ''}`);

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
