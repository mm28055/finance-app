/**
 * Call transcripts straight from the exchange — the second source next to the
 * Tijori sync (scripts/smart-sync.ts), run daily after the filings digest.
 *
 *   npx tsx scripts/sync-exchange-transcripts.ts                       (last 3 days)
 *   npx tsx scripts/sync-exchange-transcripts.ts --from=21-07-2026 --to=28-09-2026 --dry-run
 *   npx tsx scripts/sync-exchange-transcripts.ts --only="Metro Brands,Quess" --source=nse
 *   npx tsx scripts/sync-exchange-transcripts.ts --limit=2              (store at most 2 documents)
 *   --no-prune   skip the rolling-window cleanup after storing (for test runs
 *                that must not touch existing rows; the next normal run prunes)
 *
 * Sources:
 *   nse       NSE's corporate-announcements feed; our companies' filings whose
 *             subject mentions a transcript (audio links and call schedules
 *             never do, so they are left out).
 *   screener  Only for companies NSE does not list (BSE-only, mostly SME):
 *             the "Concalls" list on their Screener page. Requests are paced
 *             at least 3 s apart, one at a time.
 *
 * Every document is read, and its own opening decides what it is:
 *   AGM           an Annual General Meeting transcript    -> "AGM <date>" slot
 *   results call  the quarter's earnings call              -> "Q1 FY27" slot
 *   special call  anything else (investor/analyst day,     -> "Special call <date>"
 *                 business-update or acquisition call, ...)
 * AGM and special-call slots are General slots (Quarter.q = 'GEN'): analysed in
 * full, kept out of scores and quarter tabs, labelled by kind on the site.
 *
 * Nothing already held is touched: a document is skipped when the company
 * already has a transcript from the same day, the same file, or the same text,
 * and a results call whose quarter is already filled (by Tijori or anyone) goes
 * to a General slot instead of overwriting it.
 *
 * Output: one line per document — `company | type | slot | action`.
 */
import 'dotenv/config';
// @ts-ignore - pdf-parse ships no types
import pdfParse from 'pdf-parse';
import { prisma } from '../lib/prisma';
import { processTranscript, resolveScreenerUrl } from '../lib/sync-service';
import { pruneCompany } from '../lib/retention';
import { classifyTranscript, isRelatedEntityCall, isAgmDocument, detectCallDate, detectStatedQuarter } from '../lib/doc-type';
import { getFinancialQuarter, generalQuarterName, fiscalYearOf, getAcceptanceCutoff, quarterScore, GENERAL_Q } from '../lib/quarters';
import { generalSlotDate } from '../lib/doc-label';
import { nseAnnouncements, nseListedIsins, parseNseDate, NSE_UA } from '../lib/filings/nse';
import { supabaseAdmin, transcriptCloudKey, uploadTranscriptPdf, deleteStoredPdf } from '../lib/transcript-storage';

const DAY = 86400000;
const IST = 330 * 60000;
const MIN_TRANSCRIPT_CHARS = 5000; // same floor processTranscript applies
const SCREENER_GAP_MS = 3000;
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

type DocType = 'RESULTS' | 'AGM' | 'SPECIAL';
const TYPE_LABEL: Record<DocType, string> = { RESULTS: 'results call', AGM: 'AGM', SPECIAL: 'special call' };

interface Company { id: string; name: string; isin: string | null; sector: string; ticker: string }
interface Doc {
    co: Company;
    source: 'NSE' | 'SCREENER';
    url: string;
    filedOn: Date;          // upper bound for the call date
    subject: string;
    windowCheck: boolean;   // Screener entries are dated by month only: re-check the call date
    text?: string;
    buffer?: Buffer;
    error?: string;
}

// ---------------------------------------------------------------- arguments

function arg(name: string): string | null {
    const a = process.argv.find(x => x.startsWith(`--${name}=`));
    return a ? a.slice(name.length + 3).replace(/^"|"$/g, '') : null;
}
const ddmmyyyy = (d: Date) => {
    const x = new Date(d.getTime() + IST);
    return `${String(x.getUTCDate()).padStart(2, '0')}-${String(x.getUTCMonth() + 1).padStart(2, '0')}-${x.getUTCFullYear()}`;
};
const parseDdMmYyyy = (s: string, endOfDay = false) => {
    const [d, m, y] = s.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, d, endOfDay ? 23 : 0, endOfDay ? 59 : 0) - IST);
};
/** Noon UTC on the IST calendar day of `d` — the stored form of a call date. */
const istNoon = (d: Date) => {
    const x = new Date(d.getTime() + IST);
    return new Date(Date.UTC(x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDate(), 12));
};
const istDayKey = (d: Date) => new Date(d.getTime() + IST).toISOString().slice(0, 10);

// ---------------------------------------------------------------- text helpers

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

/** Same document? Samples 40-character pieces of one text and looks for them in the other. */
function sameText(a: string, b: string): boolean {
    const A = norm(a), B = norm(b);
    if (A.length < 3000 || B.length < 3000) return false;
    let n = 0, hits = 0;
    for (let i = 1; i <= 20; i++) {
        const at = Math.floor((A.length * i) / 22);
        const piece = A.slice(at, at + 40);
        if (piece.length < 40) continue;
        n++;
        if (B.includes(piece)) hits++;
    }
    return n > 0 && hits / n >= 0.5;
}

async function fetchPdf(url: string): Promise<Buffer | null> {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': NSE_UA }, redirect: 'follow' });
        if (!res.ok) return null;
        return Buffer.from(await res.arrayBuffer());
    } catch {
        return null;
    }
}

// ---------------------------------------------------------------- sources

async function nseDocs(from: string, to: string, byIsin: Map<string, Company>): Promise<Doc[]> {
    // The feed is read in week-long pieces so a long back-fill never hits a cap.
    const start = parseDdMmYyyy(from), end = parseDdMmYyyy(to);
    const rows: any[] = [];
    for (let s = start; s <= end; s = new Date(s.getTime() + 7 * DAY)) {
        const e = new Date(Math.min(s.getTime() + 6 * DAY, end.getTime()));
        rows.push(...await nseAnnouncements(ddmmyyyy(s), ddmmyyyy(e)));
    }
    const seen = new Set<string>();
    const docs: Doc[] = [];
    for (const a of rows) {
        const co = byIsin.get(a.sm_isin);
        const subject = String(a.attchmntText || '');
        if (!co || !a.attchmntFile || !/transcript/i.test(subject) || seen.has(a.attchmntFile)) continue;
        seen.add(a.attchmntFile);
        docs.push({ co, source: 'NSE', url: a.attchmntFile, filedOn: parseNseDate(a.an_dt) || new Date(), subject, windowCheck: false });
    }
    return docs;
}

let lastScreener = 0;
async function screenerFetch(url: string, init?: RequestInit): Promise<Response> {
    const wait = lastScreener + SCREENER_GAP_MS - Date.now();
    if (wait > 0) await sleep(wait);
    try {
        return await fetch(url, { ...init, headers: { 'User-Agent': 'Mozilla/5.0', ...(init?.headers || {}) } });
    } finally {
        lastScreener = Date.now();
    }
}

const MON = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** Transcript links in a Screener company page's Concalls list, with the month they are filed under. */
function screenerConcalls(html: string): { month: Date; url: string }[] {
    const at = html.indexOf('documents concalls');
    if (at === -1) return [];
    const section = html.slice(at, at + 200000);
    const out: { month: Date; url: string }[] = [];
    for (const li of section.match(/<li[\s\S]*?<\/li>/g) || []) {
        const label = li.match(/>\s*([A-Z][a-z]{2})\s+(\d{4})\s*</);
        const link = li.match(/<a[^>]+href="([^"]+)"[^>]*>\s*Transcript\s*<\/a>/i);
        if (!label || !link) continue;
        const mon = MON.indexOf(label[1].toLowerCase());
        if (mon < 0) continue;
        let url = link[1].replace(/&amp;/g, '&');
        // BSE's viewer redirects to the archived file; store the file itself.
        const bse = url.match(/AnnPdfOpen\.aspx\?Pname=([^&]+\.pdf)/i);
        if (bse) url = `https://www.bseindia.com/xml-data/corpfiling/AttachHis/${bse[1]}`;
        out.push({ month: new Date(Date.UTC(+label[2], mon, 1)), url });
    }
    return out;
}

async function screenerDocs(companies: Company[], from: Date, to: Date): Promise<Doc[]> {
    const docs: Doc[] = [];
    for (const co of companies) {
        try {
            const url = await resolveScreenerUrl(co.isin, co.ticker, co.name, screenerFetch);
            if (!url) { console.log(`${co.name.trim()} | - | - | Screener page not found`); continue; }
            const res = await screenerFetch(url.replace(/consolidated\/?$/, ''));
            if (!res.ok) { console.log(`${co.name.trim()} | - | - | Screener page returned ${res.status}`); continue; }
            for (const c of screenerConcalls(await res.text())) {
                const monthEnd = new Date(Date.UTC(c.month.getUTCFullYear(), c.month.getUTCMonth() + 1, 0, 23, 59));
                if (monthEnd < from || c.month > to) continue;
                const filedOn = new Date(Math.min(monthEnd.getTime(), to.getTime(), Date.now()));
                docs.push({ co, source: 'SCREENER', url: c.url, filedOn, subject: 'Screener concall transcript', windowCheck: true });
            }
        } catch (e: any) {
            console.log(`${co.name.trim()} | - | - | Screener read failed (${e.message})`);
        }
    }
    return docs;
}

// ---------------------------------------------------------------- main

async function main() {
    const dryRun = process.argv.includes('--dry-run');
    const noPrune = process.argv.includes('--no-prune');
    const verbose = process.argv.includes('--verbose'); // adds the source file to each line
    const source = (arg('source') || 'both').toLowerCase();
    const limit = arg('limit') ? parseInt(arg('limit')!, 10) : Infinity;
    const to = arg('to') || ddmmyyyy(new Date());
    const from = arg('from') || ddmmyyyy(new Date(Date.now() - 3 * DAY));
    const fromDate = parseDdMmYyyy(from), toDate = parseDdMmYyyy(to, true);
    const only = (arg('only') || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

    if (!dryRun && !supabaseAdmin) throw new Error('Supabase storage is not configured (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY) — refusing to store transcripts on local disk.');

    let companies: Company[] = (await prisma.company.findMany({
        where: { status: 'ACTIVE', isin: { not: null } },
        select: { id: true, name: true, isin: true, sector: true, ticker: true },
    }));
    if (only.length) {
        companies = companies.filter(c => only.some(o => c.name.toLowerCase().includes(o) || c.ticker.toLowerCase() === o || c.isin?.toLowerCase() === o));
    }
    const byIsin = new Map(companies.map(c => [c.isin!, c]));
    console.log(`Exchange transcripts ${from} → ${to}${dryRun ? ' (DRY RUN)' : ''}; ${companies.length} companies; source ${source}`);

    const docs: Doc[] = [];
    if (source === 'nse' || source === 'both') {
        const d = await nseDocs(from, to, byIsin);
        console.log(`NSE: ${d.length} transcript filings from our companies`);
        docs.push(...d);
    }
    if (source === 'screener' || source === 'both') {
        let listed: Set<string> | null = null;
        try { listed = await nseListedIsins(); } catch (e: any) { console.warn(`NSE equity lists unavailable (${e.message}) — Screener fallback skipped`); }
        if (listed) {
            const bseOnly = companies.filter(c => c.isin && !listed!.has(c.isin));
            console.log(`Screener: ${bseOnly.length} companies not listed on NSE`);
            const d = await screenerDocs(bseOnly, fromDate, toDate);
            console.log(`Screener: ${d.length} transcripts in the window`);
            docs.push(...d);
        }
    }
    docs.sort((a, b) => a.filedOn.getTime() - b.filedOn.getTime());

    // Read every document (a few at a time), keeping the file only when it may be stored.
    let cursor = 0;
    await Promise.all(Array.from({ length: 4 }, async () => {
        while (cursor < docs.length) {
            const d = docs[cursor++];
            const buf = await fetchPdf(d.url);
            if (!buf) { d.error = 'download failed'; continue; }
            try {
                d.text = String((await pdfParse(buf)).text || '').replace(/\u0000/g, '');
            } catch {
                d.error = 'unreadable PDF';
                continue;
            }
            if (!dryRun) d.buffer = buf;
        }
    }));

    const byType: Record<string, number> = {};
    const byAction: Record<string, number> = {};
    let stored = 0;
    // Documents accepted earlier in this run, so a dry run judges the second of
    // two filings (a transcript and its revision) the way a live run would.
    const accepted = new Map<string, { day: string; slot: string; text: string; url: string }[]>();
    const log = (d: Doc, type: string, slot: string, action: string) => {
        byType[type] = (byType[type] || 0) + 1;
        const key = action.replace(/\s*\(.*\)$/, '');
        byAction[key] = (byAction[key] || 0) + 1;
        console.log(`${d.co.name.trim()} | ${type} | ${slot} | ${action}${verbose ? ` | ${d.url}` : ''}`);
    };

    for (const d of docs) {
        if (d.error || !d.text) { log(d, '?', '-', `skipped (${d.error || 'no text'})`); continue; }
        const text = d.text;
        const chars = text.replace(/\s+/g, ' ').trim().length;
        if (chars < MIN_TRANSCRIPT_CHARS) { log(d, '?', '-', `skipped (too short, ${chars} chars — not a transcript)`); continue; }

        // --- What is it, and when was it held? ---
        const callDate = istNoon(detectCallDate(text, d.filedOn) || d.filedOn);
        if (d.windowCheck && (callDate.getTime() < fromDate.getTime() - DAY || callDate.getTime() > toDate.getTime() + DAY)) {
            log(d, '?', '-', `skipped (held ${istDayKey(callDate)}, outside the window)`);
            continue;
        }
        let type: DocType;
        let why = '';
        if (isAgmDocument(text, d.subject)) {
            type = 'AGM';
        } else {
            const verdict = classifyTranscript(text);
            const related = isRelatedEntityCall(text, d.co.name);
            type = verdict.type === 'GENERAL' || related ? 'SPECIAL' : 'RESULTS';
            if (related) why = "a related entity's call";
            // No earnings marker and no quarter named in the opening pages is
            // no evidence of a results call ("Special Purpose Conference Call",
            // "Investor/Analyst Call"). A results call names its quarter; this
            // keeps other calls out of an empty quarter slot.
            if (type === 'RESULTS' && /defaulted/.test(verdict.reason) && !detectStatedQuarter(text, callDate)) type = 'SPECIAL';
        }
        const stated = type === 'RESULTS' ? detectStatedQuarter(text, callDate) : null;
        const fyq = stated || getFinancialQuarter(callDate.toISOString());

        // --- Already held? Same file, same day, or same text. ---
        const existing = await prisma.transcript.findMany({
            where: { companyId: d.co.id },
            select: { id: true, sourceEventDate: true, filePath: true, rawText: true, hasAnalysis: true, quarter: { select: { name: true, q: true } } },
        });
        const eventDay = (t: typeof existing[number]) => {
            const when = t.sourceEventDate || generalSlotDate(t.quarter.name);
            return when ? istDayKey(when) : null;
        };
        const same = existing.find(t => t.filePath === d.url)
            || existing.find(t => eventDay(t) === istDayKey(callDate))
            || existing.find(t => t.rawText && sameText(text, t.rawText));
        const earlier = (accepted.get(d.co.id) || []).find(p =>
            p.url === d.url || p.day === istDayKey(callDate) || sameText(text, p.text));
        if (earlier) { log(d, TYPE_LABEL[type], earlier.slot, 'skipped (same as an earlier filing in this run)'); continue; }
        if (same) {
            // A row this feed stored earlier whose analysis did not finish is retried.
            if (!same.hasAnalysis && same.filePath === d.url && !dryRun) {
                const r = await processTranscript(same.id);
                log(d, TYPE_LABEL[type], same.quarter.name, r?.success ? 'analysis retried' : `analysis retry failed (${(r as any)?.error})`);
            } else {
                const readAs = type === 'RESULTS' && same.quarter.name !== fyq ? `, read as ${fyq}` : '';
                log(d, TYPE_LABEL[type], same.quarter.name, `skipped (already held${readAs})`);
            }
            continue;
        }

        // --- Which slot? ---
        let slot: string;
        let kind: 'AGM' | 'SPECIAL' | null = type === 'RESULTS' ? null : type;
        if (type === 'RESULTS') {
            const q = await prisma.quarter.findUnique({ where: { name: fyq } });
            const taken = (accepted.get(d.co.id) || []).some(p => p.slot === fyq) || q && (
                existing.some(t => t.quarter.name === fyq)
                || await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: d.co.id, quarterId: q.id } }, select: { id: true } })
            );
            if (taken) {
                // Never overwrite a filled quarter: a different call for it is kept as a special call.
                kind = 'SPECIAL';
                why = `${fyq} already filled`;
            } else if (quarterScore(fyq) < await getAcceptanceCutoff(d.co.id)) {
                log(d, TYPE_LABEL[type], fyq, 'skipped (older than the quarters kept)');
                continue;
            }
        }
        slot = kind ? generalQuarterName(callDate, kind) : fyq;
        const typeLabel = TYPE_LABEL[type] + (stated ? '' : type === 'RESULTS' ? ' (quarter from date)' : '');
        accepted.set(d.co.id, [...(accepted.get(d.co.id) || []), { day: istDayKey(callDate), slot, text, url: d.url }]);

        if (dryRun) { log(d, typeLabel, slot, `would store${why ? ` (${why})` : ''}`); continue; }
        if (stored >= limit) { log(d, typeLabel, slot, 'not stored (--limit reached)'); continue; }

        // --- Store exactly as smart-sync does, then analyse. ---
        try {
            const fileUrl = await uploadTranscriptPdf(transcriptCloudKey(d.co.sector, d.co.name, slot), d.buffer!);
            const [qName, qYear] = kind
                ? [GENERAL_Q, fiscalYearOf(callDate)]
                : [fyq.split(' ')[0], 2000 + parseInt(fyq.split('FY')[1], 10)];
            const quarter = await prisma.quarter.upsert({ where: { name: slot }, update: {}, create: { name: slot, year: qYear, q: qName } });
            let id = `real-${(d.co.ticker || d.co.id).toUpperCase()}-${slot.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');
            if (await prisma.transcript.findUnique({ where: { id } })) id = `${id}-${callDate.toISOString().slice(0, 10)}`;
            await prisma.transcript.create({
                data: {
                    id, companyId: d.co.id, quarterId: quarter.id, fileUrl, hasAnalysis: false,
                    rawText: text, sourceEventDate: callDate,
                    // The exchange/Screener file it came from — identity for later runs.
                    filePath: d.url,
                },
            });
            stored++;
            const r = await processTranscript(id);
            if (!r?.success) { log(d, typeLabel, slot, `stored, analysis failed (${(r as any)?.error})`); continue; }
            if (!noPrune) await pruneCompany(prisma, d.co.id, {
                onTranscriptEvict: async t => {
                    await deleteStoredPdf(t.fileUrl, d.co.name, t.quarterName);
                    console.log(`   ${d.co.name.trim()}: rolled off ${t.quarterName} transcript`);
                },
                onAnalysisEvict: async a => { console.log(`   ${d.co.name.trim()}: rolled off ${a.quarterName} analysis`); },
            });
            log(d, typeLabel, slot, `stored and analysed${why ? ` (${why})` : ''}`);
        } catch (e: any) {
            log(d, typeLabel, slot, `failed (${e.message})`);
        }
        await sleep(1000);
    }

    console.log('\nBy type:');
    for (const [k, v] of Object.entries(byType).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(34)} ${v}`);
    console.log('By action:');
    for (const [k, v] of Object.entries(byAction).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(34)} ${v}`);
}

main()
    .catch(e => { console.error(e); process.exitCode = 1; })
    .finally(async () => { await prisma.$disconnect(); });
