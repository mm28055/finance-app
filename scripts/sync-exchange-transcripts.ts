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
 *   nse       NSE's corporate-announcements feed: our companies' filings whose
 *             subject mentions a transcript, plus vague call/meet updates
 *             ("General Updates", "Updates", con-call updates that are not
 *             schedules, audio links or presentations) kept only if the text
 *             reads as a transcript. A cover letter that links to the
 *             transcript PDF is followed to it.
 *   screener  (a) companies NSE does not list (BSE-only, mostly SME): their
 *             Screener "Concalls" list for the window; (b) the backstop: every
 *             visible company whose newest quarter with filed results has no
 *             transcript yet (results at least 3 days old) — Screener lists
 *             transcripts from both exchanges, a few days after NSE. Paced at
 *             least 3 s apart, one at a time, at most --screener-cap companies
 *             (default 250) per run; the rest are deferred to later runs.
 *
 *   --measure        dry run that also sends companies already holding their
 *                    newest quarter to the backstop (coverage measurement)
 *   --json-out=FILE  every document's outcome as JSON
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
import fs from 'fs';
// @ts-ignore - pdf-parse ships no types
import pdfParse from 'pdf-parse';
import { prisma } from '../lib/prisma';
import { processTranscript, resolveScreenerUrl } from '../lib/sync-service';
import { pruneCompany } from '../lib/retention';
import { updateCompanyProfile } from '../lib/profile-service';
import { classifyTranscript, isRelatedEntityCall, isAgmDocument, detectCallDate, detectStatedQuarter, looksLikeCallTranscript, quarterEndDate } from '../lib/doc-type';
import { getFinancialQuarter, generalQuarterName, fiscalYearOf, getAcceptanceCutoff, quarterScore, GENERAL_Q } from '../lib/quarters';
import { generalSlotDate } from '../lib/doc-label';
import { notAResultsQuarter, screenerShowsCall, tooEarlyForResults } from '../lib/reporting';
import { nseAnnouncements, nseListedIsins, parseNseDate, NSE_UA } from '../lib/filings/nse';
import { nseSymbolForIsin } from '../lib/corporate-actions/nse-lists';
import { supabaseAdmin, transcriptCloudKey, uploadTranscriptPdf, deleteStoredPdf } from '../lib/transcript-storage';

const DAY = 86400000;
const IST = 330 * 60000;
const MIN_TRANSCRIPT_CHARS = 5000; // same floor processTranscript applies
const SCREENER_GAP_MS = 3000;
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

type DocType = 'RESULTS' | 'AGM' | 'SPECIAL';
const TYPE_LABEL: Record<DocType, string> = { RESULTS: 'results call', AGM: 'AGM', SPECIAL: 'special call' };

interface Company { id: string; name: string; isin: string | null; sector: string; ticker: string; aliases: string | null; isVisible?: boolean }
interface Doc {
    co: Company;
    source: 'NSE' | 'SCREENER';
    url: string;
    filedOn: Date;          // upper bound for the call date
    subject: string;
    windowCheck: boolean;   // Screener entries are dated by month only: re-check the call date
    /** Subject did not say "transcript": kept only if the text reads as one. */
    probe?: boolean;
    /** The PDF actually read, when the filing was a cover letter linking to it. */
    via?: string;
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

// Categories a transcript is filed under when its subject does not say so.
const PROBE_CATEGORIES = new Set(['analysts/institutional investor meet/con. call updates', 'updates', 'general updates']);
// Obviously not a transcript: meeting schedules and intimations, audio links,
// presentations and routine paperwork.
const NOT_A_TRANSCRIPT = /\bschedul|\bintimation\s+of\s+(?:the\s+)?(?:analyst|investor|meet|call|con)|\bpre-?\s*intimation|\binvit|\baudio|\brecording|\blink\s+of|\bweb\s*-?link|\bpresentation|\bbrsr\b|business\s+responsibility|\besg\b|\bnewspaper|\ballot|\besops?\b|\besos\b|regulation\s+(?:29|31|7|74)\b|\bsast\b|\bpledge|trading\s+window|record\s+date|book\s+closure|\bre-?lodg|\bcertificate|postal\s+ballot|\bscrutini|\be-?voting|\bdividend|credit\s+rating|press\s+release|annual\s+report|\bnotice\s+of|board\s+meeting|financial\s+results|\bresign|\bappoint|\border\b|\bl-?1\b|\bbidder|\busfda|\binspection|\bacquisition|\bincorporat|\bpenalty|fine\s+levied|\bdispatch|letter\s+to\s+shareholders|loss\s+of\s+share|\bduplicate/i;
// For the two catch-all categories the subject must be vague or about a call/meeting.
const CALLISH = /\b(call|con-?call|conference|earnings|analyst|investor|meet|agm|annual\s+general|proceedings|q&a|webinar)\b/i;
const VAGUE = (subject: string, company: string) => {
    const rest = subject.replace(company, '').replace(/has\s+(?:informed|submitted\s+to)\s+the\s+exchange\s+(?:about|regarding)/i, '')
        .replace(/[^a-z ]/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    return rest === '' || rest === 'updates' || rest === 'general updates' || rest === 'general update' || rest === 'update';
};

/** Our companies' likely transcripts in the feed, plus which companies filed results recently. */
async function nseDocs(from: string, to: string, companies: Company[]): Promise<{ docs: Doc[]; resultsFiledOn: Map<string, Date> }> {
    // Matched by ISIN or by NSE symbol: the feed often carries a company's OLD
    // ISIN after a split or face-value change (Ajanta Pharma files as
    // INE031B01015, its current ISIN is INE031B01049), so the ISIN alone missed
    // many companies. The symbol is read from NSE's current list by our ISIN.
    const byIsin = new Map(companies.map(c => [c.isin!, c]));
    const bySymbol = new Map<string, Company>();
    for (const c of companies) {
        const sym = await nseSymbolForIsin(c.isin);
        if (sym) bySymbol.set(sym, c);
    }
    // The feed is read in week-long pieces so a long back-fill never hits a cap.
    const start = parseDdMmYyyy(from), end = parseDdMmYyyy(to);
    const rows: any[] = [];
    for (let s = start; s <= end; s = new Date(s.getTime() + 7 * DAY)) {
        const e = new Date(Math.min(s.getTime() + 6 * DAY, end.getTime()));
        rows.push(...await nseAnnouncements(ddmmyyyy(s), ddmmyyyy(e)));
    }
    const seen = new Set<string>();
    const docs: Doc[] = [];
    const resultsFiledOn = new Map<string, Date>();
    for (const a of rows) {
        const co = byIsin.get(a.sm_isin) || (a.symbol ? bySymbol.get(String(a.symbol).toUpperCase()) : undefined);
        if (!co || !a.attchmntFile) continue;
        const subject = String(a.attchmntText || '');
        const category = String(a.desc || '').toLowerCase();
        const filedOn = parseNseDate(a.an_dt) || new Date();
        if (/financial\s+result/i.test(category) || /financial\s+results?\s+for/i.test(subject)) {
            const prev = resultsFiledOn.get(co.id);
            if (!prev || filedOn > prev) resultsFiledOn.set(co.id, filedOn);
        }
        if (seen.has(a.attchmntFile)) continue;
        let probe = false;
        if (!/transcript/i.test(subject)) {
            if (!PROBE_CATEGORIES.has(category) || NOT_A_TRANSCRIPT.test(subject)) continue;
            if (category !== 'analysts/institutional investor meet/con. call updates' && !CALLISH.test(subject) && !VAGUE(subject, a.sm_name || co.name)) continue;
            probe = true;
        }
        seen.add(a.attchmntFile);
        docs.push({ co, source: 'NSE', url: a.attchmntFile, filedOn, subject, windowCheck: false, probe });
    }
    return { docs, resultsFiledOn };
}

/**
 * Links a cover letter gives to the transcript itself ("the transcript is
 * available at https://.../Q1-FY27-Transcript.pdf"). PDF text breaks long URLs
 * across lines, so those are rejoined first; link annotations are read too.
 */
function transcriptLinks(text: string, buf: Buffer): string[] {
    const found = [
        ...(text.replace(/([\/_\-.])\s*\n\s*/g, '$1').match(/https?:\/\/[^\s)"'<>]+/g) || []),
        ...[...buf.toString('latin1').matchAll(/\/URI\s*\(([^)]+)\)/g)].map(m => m[1]),
    ].map(u => u.replace(/[.,;]+$/, ''));
    const pdfs = Array.from(new Set(found)).filter(u => /\.pdf(?:$|\?)/i.test(u));
    // Transcript-looking names first.
    return pdfs.sort((a, b) => Number(/transcript|concall|con-call|earning/i.test(b)) - Number(/transcript|concall|con-call|earning/i.test(a))).slice(0, 3);
}

/** Downloads and reads a document; follows a cover letter's link to the transcript PDF. */
async function readDoc(d: Doc, keepBuffer: boolean) {
    const buf = await fetchPdf(d.url);
    if (!buf) { d.error = 'download failed'; return; }
    let text = '';
    try { text = String((await pdfParse(buf)).text || '').replace(/\u0000/g, ''); } catch { d.error = 'unreadable PDF'; return; }
    let body = buf;
    if (text.replace(/\s+/g, ' ').trim().length < MIN_TRANSCRIPT_CHARS) {
        for (const link of transcriptLinks(text, buf)) {
            const b2 = await fetchPdf(link);
            if (!b2 || b2.subarray(0, 5).toString('latin1') !== '%PDF-') continue;
            try {
                const t2 = String((await pdfParse(b2)).text || '').replace(/\u0000/g, '');
                if (t2.replace(/\s+/g, ' ').trim().length >= MIN_TRANSCRIPT_CHARS) { text = t2; body = b2; d.via = link; break; }
            } catch { /* try the next link */ }
        }
    }
    d.text = text;
    if (keepBuffer) d.buffer = body;
}

// Screener requests are paced and run one at a time. Company pages are
// remembered briefly, so the page resolveScreenerUrl just fetched to confirm
// the company is not downloaded a second time for its Concalls list.
let lastScreener = 0;
let screenerRequests = 0;
const screenerPages = new Map<string, string>();
async function screenerFetch(url: string, init?: RequestInit): Promise<Response> {
    const cached = screenerPages.get(url);
    if (cached !== undefined) return new Response(cached, { status: 200 });
    const wait = lastScreener + SCREENER_GAP_MS - Date.now();
    if (wait > 0) await sleep(wait);
    try {
        screenerRequests++;
        const res = await fetch(url, { ...init, headers: { 'User-Agent': 'Mozilla/5.0', ...(init?.headers || {}) } });
        if (res.ok && /\/company\//.test(url)) {
            const html = await res.text();
            screenerPages.set(url, html);
            while (screenerPages.size > 4) screenerPages.delete(screenerPages.keys().next().value!);
            return new Response(html, { status: 200 });
        }
        return res;
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

/**
 * What to look for on a company's Screener page: transcripts listed in a range
 * of months — the run's window (BSE-only companies), or the months after a
 * quarter's close (the backstop for a quarter with results but no transcript).
 */
interface ScreenerTarget { co: Company; ranges: { from: Date; to: Date; windowCheck: boolean; quarter?: string }[] }

async function screenerDocs(targets: ScreenerTarget[], note: (co: Company, action: string) => void): Promise<Doc[]> {
    const docs: Doc[] = [];
    for (const t of targets) {
        const co = t.co;
        try {
            const url = await resolveScreenerUrl(co.isin, co.ticker, co.name, screenerFetch, co.aliases);
            if (!url) { note(co, 'Screener page not found'); continue; }
            const res = await screenerFetch(url);
            if (!res.ok) { note(co, `Screener page returned ${res.status}`); continue; }
            const listed = screenerConcalls(await res.text());
            for (const r of t.ranges) {
                const hits = listed.filter(c => c.month.getTime() <= r.to.getTime()
                    && Date.UTC(c.month.getUTCFullYear(), c.month.getUTCMonth() + 1, 0, 23, 59) >= r.from.getTime());
                if (!hits.length && r.quarter) note(co, `Screener lists no transcript for ${r.quarter} yet`);
                for (const c of hits) {
                    const monthEnd = Date.UTC(c.month.getUTCFullYear(), c.month.getUTCMonth() + 1, 0, 23, 59);
                    const filedOn = new Date(Math.min(monthEnd, r.to.getTime(), Date.now()));
                    docs.push({ co, source: 'SCREENER', url: c.url, filedOn, subject: 'Screener concall transcript', windowCheck: r.windowCheck });
                }
            }
        } catch (e: any) {
            note(co, `Screener read failed (${e.message})`);
        }
    }
    return docs;
}

/** Reads documents a few at a time. */
async function readAll(docs: Doc[], keepBuffer: boolean) {
    let cursor = 0;
    await Promise.all(Array.from({ length: 4 }, async () => {
        while (cursor < docs.length) await readDoc(docs[cursor++], keepBuffer);
    }));
}

/** Stable per-day shuffle, so a capped backstop defers different companies each day. */
const dayHash = (s: string) => {
    let h = 2166136261;
    for (const ch of s + new Date().toISOString().slice(0, 10)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return h >>> 0;
};

// ---------------------------------------------------------------- main

async function main() {
    // --measure: dry run that also sends companies which already hold the
    // quarter to the Screener backstop, to measure what this route alone finds.
    const measure = process.argv.includes('--measure');
    const dryRun = measure || process.argv.includes('--dry-run');
    const noPrune = process.argv.includes('--no-prune');
    const verbose = process.argv.includes('--verbose'); // adds the source file to each line
    const source = (arg('source') || 'both').toLowerCase();
    const limit = arg('limit') ? parseInt(arg('limit')!, 10) : Infinity;
    const screenerCap = arg('screener-cap') ? parseInt(arg('screener-cap')!, 10) : 250;
    const jsonOut = arg('json-out');
    const to = arg('to') || ddmmyyyy(new Date());
    const from = arg('from') || ddmmyyyy(new Date(Date.now() - 3 * DAY));
    const fromDate = parseDdMmYyyy(from), toDate = parseDdMmYyyy(to, true);
    const only = (arg('only') || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

    if (!dryRun && !supabaseAdmin) throw new Error('Supabase storage is not configured (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY) — refusing to store transcripts on local disk.');

    let companies: Company[] = (await prisma.company.findMany({
        where: { status: 'ACTIVE', isin: { not: null } },
        select: { id: true, name: true, isin: true, sector: true, ticker: true, aliases: true, isVisible: true },
    }));
    if (only.length) {
        companies = companies.filter(c => only.some(o => c.name.toLowerCase().includes(o) || c.ticker.toLowerCase() === o || c.isin?.toLowerCase() === o));
    }
    console.log(`Exchange transcripts ${from} → ${to}${dryRun ? ' (DRY RUN)' : ''}${measure ? ' (MEASURE)' : ''}; ${companies.length} companies; source ${source}`);

    const byType: Record<string, number> = {};
    const byAction: Record<string, number> = {};
    const records: any[] = [];
    let stored = 0;
    // Documents accepted earlier in this run, so a dry run judges the second of
    // two filings (a transcript and its revision) the way a live run would.
    const accepted = new Map<string, { day: string; slot: string; text: string; url: string }[]>();
    // "<companyId>|<quarter>" for every results call seen this run (stored or already held).
    const resultsFound = new Set<string>();
    const log = (d: Doc, type: string, slot: string, action: string, extra: Record<string, any> = {}) => {
        byType[type] = (byType[type] || 0) + 1;
        const key = action.replace(/\s*\(.*\)$/, '');
        byAction[key] = (byAction[key] || 0) + 1;
        records.push({ company: d.co.name.trim(), companyId: d.co.id, source: d.source, type, slot, action, url: d.url, via: d.via, ...extra });
        if (key === 'not a transcript' && !verbose) return; // routine updates, counted only
        console.log(`${d.co.name.trim()} | ${type} | ${slot} | ${action}${verbose ? ` | ${d.via || d.url}` : ''}`);
    };
    const note = (co: Company, action: string) => {
        records.push({ company: co.name.trim(), companyId: co.id, source: 'SCREENER', type: '-', slot: '-', action });
        console.log(`${co.name.trim()} | - | - | ${action}`);
    };

    const handle = async (d: Doc) => {
        if (d.error || !d.text) { log(d, '?', '-', `skipped (${d.error || 'no text'})`); return; }
        const text = d.text;
        if (d.probe && !looksLikeCallTranscript(text)) { log(d, '?', '-', 'not a transcript'); return; }
        const chars = text.replace(/\s+/g, ' ').trim().length;
        if (chars < MIN_TRANSCRIPT_CHARS) { log(d, '?', '-', `skipped (too short, ${chars} chars — not a transcript)`); return; }

        // --- What is it, and when was it held? ---
        const callDate = istNoon(detectCallDate(text, d.filedOn) || d.filedOn);
        if (d.windowCheck && (callDate.getTime() < fromDate.getTime() - DAY || callDate.getTime() > toDate.getTime() + DAY)) {
            log(d, '?', '-', `skipped (held ${istDayKey(callDate)}, outside the window)`);
            return;
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
            // ...unless Screener lists a call with a transcript or recording that month (lib/reporting.ts).
            if (type === 'RESULTS' && /defaulted/.test(verdict.reason) && !detectStatedQuarter(text, callDate)
                && (await screenerShowsCall(d.co.id, callDate)) !== true) type = 'SPECIAL';
        }
        const stated = type === 'RESULTS' ? detectStatedQuarter(text, callDate) : null;
        const fyq = stated || getFinancialQuarter(callDate.toISOString());
        // A company that reports only half-yearly has no Q1 or Q3 results: such a call is a
        // conference talk or business update, never the results call (lib/reporting.ts).
        if (type === 'RESULTS' && await notAResultsQuarter(d.co.id, fyq)) {
            type = 'SPECIAL';
            why = `half-yearly reporter, no ${fyq} results`;
        }
        // Held within two weeks of the quarter's end (quarter read from the date): too early for its results.
        if (type === 'RESULTS' && !stated && tooEarlyForResults(fyq, callDate)) {
            type = 'SPECIAL';
            why = `held too soon after the quarter ended to discuss ${fyq} results`;
        }
        const extra = { fyq: type === 'RESULTS' ? fyq : null, day: istDayKey(callDate) };
        if (type === 'RESULTS') resultsFound.add(`${d.co.id}|${fyq}`);

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
        if (earlier) { log(d, TYPE_LABEL[type], earlier.slot, 'skipped (same as an earlier filing in this run)', extra); return; }
        if (same) {
            // A row this feed stored earlier whose analysis did not finish is retried.
            if (!same.hasAnalysis && same.filePath === d.url && !dryRun) {
                const r = await processTranscript(same.id);
                log(d, TYPE_LABEL[type], same.quarter.name, r?.success ? 'analysis retried' : `analysis retry failed (${(r as any)?.error})`, extra);
            } else {
                const readAs = type === 'RESULTS' && same.quarter.name !== fyq ? `, read as ${fyq}` : '';
                log(d, TYPE_LABEL[type], same.quarter.name, `skipped (already held${readAs})`, extra);
            }
            return;
        }

        // --- Which slot? ---
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
                log(d, TYPE_LABEL[type], fyq, 'skipped (older than the quarters kept)', extra);
                return;
            }
        }
        const slot = kind ? generalQuarterName(callDate, kind) : fyq;
        const typeLabel = TYPE_LABEL[type] + (stated ? '' : type === 'RESULTS' ? ' (quarter from date)' : '');
        accepted.set(d.co.id, [...(accepted.get(d.co.id) || []), { day: istDayKey(callDate), slot, text, url: d.url }]);

        if (dryRun) { log(d, typeLabel, slot, `would store${why ? ` (${why})` : ''}`, extra); return; }
        if (stored >= limit) { log(d, typeLabel, slot, 'not stored (--limit reached)', extra); return; }

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
                    // The exchange/Screener filing it came from — identity for later runs.
                    filePath: d.url,
                },
            });
            stored++;
            const r = await processTranscript(id);
            if (!r?.success) { log(d, typeLabel, slot, `stored, analysis failed (${(r as any)?.error})`, extra); return; }
            if (!noPrune) await pruneCompany(prisma, d.co.id, {
                onTranscriptEvict: async t => {
                    await deleteStoredPdf(t.fileUrl, d.co.name, t.quarterName);
                    console.log(`   ${d.co.name.trim()}: rolled off ${t.quarterName} transcript`);
                },
                onAnalysisEvict: async a => { console.log(`   ${d.co.name.trim()}: rolled off ${a.quarterName} analysis`); },
            });
            // A new results call also refreshes the PROFILE tab, but only when it is newer than the
            // quarter the profile was written from (a late, older call never rolls it back).
            // Special calls and AGMs leave it alone. A failure here never undoes the analysis.
            let profileNote = '';
            if (!kind) {
                try {
                    const co = await prisma.company.findUnique({ where: { id: d.co.id }, select: { profileQuarter: true } });
                    if (!co?.profileQuarter || quarterScore(slot) > quarterScore(co.profileQuarter)) {
                        const p = await updateCompanyProfile(d.co.id, slot);
                        profileNote = p.updated ? ', profile refreshed' : `, profile not refreshed (${p.reason})`;
                    }
                } catch (e: any) {
                    profileNote = `, profile refresh failed (${e.message})`;
                }
            }
            log(d, typeLabel, slot, `stored and analysed${why ? ` (${why})` : ''}${profileNote}`, extra);
        } catch (e: any) {
            log(d, typeLabel, slot, `failed (${e.message})`, extra);
        }
        await sleep(1000);
    };

    // --- 1. NSE: fast, same day the transcript is filed. ---
    let resultsFiledOn = new Map<string, Date>();
    if (source === 'nse' || source === 'both') {
        const r = await nseDocs(from, to, companies);
        resultsFiledOn = r.resultsFiledOn;
        const docs = r.docs.sort((a, b) => a.filedOn.getTime() - b.filedOn.getTime());
        console.log(`NSE: ${docs.length} possible transcript filings from our companies (${docs.filter(d => !d.probe).length} say "transcript")`);
        await readAll(docs, !dryRun);
        for (const d of docs) { await handle(d); d.text = undefined; d.buffer = undefined; }
    }

    // --- 2. Screener: BSE-only companies, and the backstop for any company whose
    //        newest quarter with results still has no transcript. ---
    if (source === 'screener' || source === 'both') {
        const targets = new Map<string, ScreenerTarget>();
        const add = (co: Company, r: ScreenerTarget['ranges'][number]) => {
            const t = targets.get(co.id) || { co, ranges: [] };
            t.ranges.push(r);
            targets.set(co.id, t);
        };

        let listed: Set<string> | null = null;
        try { listed = await nseListedIsins(); } catch (e: any) { console.warn(`NSE equity lists unavailable (${e.message}) — BSE-only read skipped`); }
        if (listed) {
            const bseOnly = companies.filter(c => c.isin && !listed!.has(c.isin));
            for (const co of bseOnly) add(co, { from: fromDate, to: toDate, windowCheck: true });
            console.log(`Screener: ${bseOnly.length} companies not listed on NSE`);
        }

        // Newest quarter with filed results (non-blank figures) per visible company.
        const visible = companies.filter(c => c.isVisible !== false);
        const fin = await prisma.financials.findMany({
            where: { companyId: { in: visible.map(c => c.id) }, revenue: { not: null }, quarter: { q: { not: GENERAL_Q } } },
            select: { companyId: true, quarter: { select: { name: true } } },
        });
        const newest = new Map<string, string>();
        for (const f of fin) {
            const cur = newest.get(f.companyId);
            if (!cur || quarterScore(f.quarter.name) > quarterScore(cur)) newest.set(f.companyId, f.quarter.name);
        }
        const held = new Set((await prisma.transcript.findMany({
            where: { companyId: { in: visible.map(c => c.id) } },
            select: { companyId: true, quarter: { select: { name: true } } },
        })).map(t => `${t.companyId}|${t.quarter.name}`));
        const recentCutoff = Date.now() - 3 * DAY;
        let tooFresh = 0;
        const backstop: Company[] = [];
        for (const co of visible) {
            const q = newest.get(co.id);
            if (!q) continue;
            const key = `${co.id}|${q}`;
            if (resultsFound.has(key) || (!measure && held.has(key))) continue;
            const filed = resultsFiledOn.get(co.id);
            if (filed && filed.getTime() > recentCutoff) { tooFresh++; continue; }
            backstop.push(co);
        }
        backstop.sort((a, b) => dayHash(a.id) - dayHash(b.id));
        const taken = backstop.slice(0, screenerCap);
        for (const co of taken) {
            const q = newest.get(co.id)!;
            const end = quarterEndDate(q)!;
            // Calls come in the months after the quarter closes (SMEs' half-year calls up to ~5 months).
            add(co, {
                from: new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() + 1, 1)),
                to: new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() + 6, 0, 23, 59)),
                windowCheck: false, quarter: q,
            });
        }
        console.log(`Screener backstop: ${backstop.length} companies whose newest results quarter has no transcript`
            + ` — reading ${taken.length}, deferred ${backstop.length - taken.length} to later runs`
            + (tooFresh ? `; ${tooFresh} more wait until their results are 3 days old` : ''));

        const before = screenerRequests;
        const docs = await screenerDocs(Array.from(targets.values()), note);
        console.log(`Screener: ${docs.length} transcripts listed for those (${screenerRequests - before} Screener requests)`);
        await readAll(docs, !dryRun);
        for (const d of docs) { await handle(d); d.text = undefined; d.buffer = undefined; }
    }

    if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(records, null, 1));

    console.log('\nBy type:');
    for (const [k, v] of Object.entries(byType).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(34)} ${v}`);
    console.log('By action:');
    for (const [k, v] of Object.entries(byAction).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(34)} ${v}`);
}

main()
    .catch(e => { console.error(e); process.exitCode = 1; })
    .finally(async () => { await prisma.$disconnect(); });
