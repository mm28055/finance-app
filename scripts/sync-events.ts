/**
 * Result dates and earnings-call dates for the dashboard's companies, run each evening.
 *
 *   npx tsx scripts/sync-events.ts              (the next 75 days of result dates; call notices of the last 3 days)
 *   npx tsx scripts/sync-events.ts --days=14    (call notices of the last 14 days, e.g. for a first fill)
 *   npx tsx scripts/sync-events.ts --dry
 *
 * 1. Result dates: NSE's board-meetings calendar lists every meeting called to approve results.
 *    These are taken as they stand each night, so a company that moves its meeting is followed.
 * 2. Call dates: companies file a "schedule of meet" notice before an earnings call (and before
 *    investor meets, plant visits and roadshows, which are not wanted). Each new notice is read and
 *    kept only when it announces the earnings call for a quarter's results, with its date and time.
 *
 * Writes lib/events/events.json (past events kept 45 days) and lib/events/seen.json (notices read).
 * Companies listed only on BSE are not covered. Reading the notices uses Gemini Pro on short text.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';
import { prisma } from '../lib/prisma';
import { geminiPro } from '../lib/gemini';
import { nseAnnouncements, nseBoardMeetings, NSE_UA } from '../lib/filings/nse';
import { EVENTS_KEEP_DAYS, type CompanyEvent } from '../lib/events/types';

const FILE = path.join(__dirname, '..', 'lib', 'events', 'events.json');
const SEEN = path.join(__dirname, '..', 'lib', 'events', 'seen.json');
const arg = (k: string) => process.argv.find(a => a.startsWith(`--${k}=`))?.split('=')[1];
const DRY = process.argv.includes('--dry');
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// India's date `offset` days from today, as a Date at midnight UTC.
const istDay = (offset = 0) => { const t = new Date(Date.now() + 5.5 * 3600000); return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + offset)); };
const iso = (d: Date) => d.toISOString().slice(0, 10);
const ddmmyyyy = (d: Date) => `${String(d.getUTCDate()).padStart(2, '0')}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${d.getUTCFullYear()}`;
// "13-Nov-2026" -> "2026-11-13"
const fromNse = (s: string) => { const m = (s || '').match(/^(\d{2})-([A-Za-z]{3})-(\d{4})/); const i = m ? MONTHS.findIndex(x => x.toLowerCase() === m[2].toLowerCase()) : -1; return m && i >= 0 ? `${m[3]}-${String(i + 1).padStart(2, '0')}-${m[1]}` : null; };
// "quarter ended September 2026" -> "Q2 FY27" (Indian financial year, April to March).
function quarterOf(text: string): string | undefined {
    const m = (text || '').match(/(?:ended|ending)\s+(?:on\s+)?(?:\d{1,2}(?:st|nd|rd|th)?\s+)?(June|September|December|March)\s*(?:\d{1,2},?\s*)?(\d{4})/i);
    if (!m) return undefined;
    const month = m[1].toLowerCase(), y = Number(m[2]);
    const [q, fy] = month === 'june' ? [1, y + 1] : month === 'september' ? [2, y + 1] : month === 'december' ? [3, y + 1] : [4, y];
    return `Q${q} FY${String(fy % 100).padStart(2, '0')}`;
}

// "4.00 p.m." / "7:00 PM" / "8:00 AM IST" -> "4:00 pm"; "Q2FY27" -> "Q2 FY27".
const tidyTime = (t: string) => { const m = String(t).match(/(\d{1,2})[:.](\d{2})\s*([ap])\.?\s*m/i); return m ? `${Number(m[1])}:${m[2]} ${m[3].toLowerCase()}m` : String(t).slice(0, 20); };
const tidyQuarter = (q: string) => { const m = String(q).match(/Q([1-4])\s*FY\s*'?(\d{2})(\d{2})?/i); return m ? `Q${m[1]} FY${m[3] || m[2]}` : undefined; };

async function pdfText(url: string): Promise<string> {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': NSE_UA }, signal: AbortSignal.timeout(45000) });
        if (!res.ok) return '';
        const parsed = await pdfParse(Buffer.from(await res.arrayBuffer()));
        return (parsed.text || '').replace(/\s+/g, ' ').slice(0, 3500);
    } catch {
        return '';
    }
}

async function main() {
    const store: { updated: string; events: CompanyEvent[] } = JSON.parse(fs.readFileSync(FILE, 'utf8'));
    const seen: string[] = fs.existsSync(SEEN) ? JSON.parse(fs.readFileSync(SEEN, 'utf8')) : [];
    const cos = await prisma.company.findMany({ where: { isVisible: true, status: 'ACTIVE', isin: { not: null } }, select: { name: true, sector: true, isin: true } });
    const byIsin = new Map(cos.map(c => [c.isin!, c]));
    const today = iso(istDay());

    // ---- 1. Result dates: the calendar as it stands tonight replaces the future dates we held.
    const meetings = await nseBoardMeetings(ddmmyyyy(istDay(-3)), ddmmyyyy(istDay(75)));
    const results: CompanyEvent[] = [];
    for (const m of meetings) {
        const co = byIsin.get(m.sm_isin);
        const date = fromNse(m.bm_date);
        const text = `${m.bm_purpose || ''} ${m.bm_desc || ''}`;
        if (!co || !date || !/financial results?|quarterly results?|audited results?/i.test(text)) continue;
        if (results.some(r => r.company === co.name && r.date === date)) continue;
        results.push({ company: co.name, sector: co.sector, kind: 'results', date, ...(quarterOf(text) ? { quarter: quarterOf(text) } : {}), ...(m.attachment ? { url: m.attachment } : {}) });
    }
    console.log(`Result dates: ${results.length} for our companies (of ${meetings.length} board meetings listed)`);

    // ---- 2. Call dates: new "schedule of meet" notices, read one batch at a time.
    const back = Number(arg('days') || 3);
    const notices = (await nseAnnouncements(ddmmyyyy(istDay(-back)), ddmmyyyy(istDay())))
        .filter(a => byIsin.has(a.sm_isin) && /Analysts\/Institutional Investor Meet\/Con\. Call Updates/i.test(a.desc || '')
            && /schedule|conference call|con\.? ?call|earnings/i.test(String(a.attchmntText || '')) && !/outcome|transcript|recording|presentation/i.test(String(a.attchmntText || ''))
            && a.attchmntFile && !seen.includes(a.attchmntFile));
    console.log(`Call notices: ${notices.length} new to read`);
    const calls: CompanyEvent[] = [];
    for (let i = 0; i < notices.length; i += 8) {
        const chunk = notices.slice(i, i + 8);
        const texts: string[] = [];
        for (const a of chunk) { texts.push(await pdfText(a.attchmntFile!)); await sleep(700); }
        const prompt = `Each notice below was filed by an Indian listed company about a meeting with analysts or investors. Pick out
ONLY the notices that announce the company's EARNINGS CALL: the conference call to discuss its quarterly or annual financial
results. Leave out investor meets, one-on-one or group meetings, conferences hosted by brokers, plant visits, roadshows, analyst
days and anything already held. Use only what the notice says; if the date is unclear, leave the notice out.

Reply with JSON only: [{"i": <notice number>, "date": "YYYY-MM-DD", "time": "<start time in India time as written, e.g. 4:00 pm>" or null,
"quarter": "<e.g. Q2 FY27>" or null}]  (Indian financial year: July–September 2026 is Q2 FY27.)

${chunk.map((a, j) => `NOTICE ${j} — ${a.sm_name}, filed ${a.an_dt}\n${texts[j] || '(the notice could not be read)'}`).join('\n\n')}`;
        let found: any[] = [];
        try {
            const raw: string = (await geminiPro.generateContent(prompt)).response.text();
            found = JSON.parse(raw.slice(raw.indexOf('['), raw.lastIndexOf(']') + 1));
        } catch (e: any) { console.warn(`  batch ${i / 8 + 1} failed: ${e.message}`); continue; } // left unread; tried again tomorrow
        for (const f of found) {
            const a = chunk[Number(f.i)];
            const co = a && byIsin.get(a.sm_isin);
            if (!co || !/^\d{4}-\d{2}-\d{2}$/.test(String(f.date || ''))) continue;
            // A call is held within a few weeks of its notice; anything else is a misread date.
            if (f.date < iso(istDay(-back - 2)) || f.date > iso(istDay(60))) continue;
            calls.push({ company: co.name, sector: co.sector, kind: 'call', date: f.date, ...(f.time ? { time: tidyTime(f.time) } : {}), ...(f.quarter && tidyQuarter(f.quarter) ? { quarter: tidyQuarter(f.quarter) } : {}), url: a.attchmntFile });
            console.log(`   ${co.name}: call ${f.date}${f.time ? ` ${f.time}` : ''}${f.quarter ? ` (${f.quarter})` : ''}`);
        }
        for (const a of chunk) seen.push(a.attchmntFile!);
    }

    // ---- Merge: tonight's result dates replace the future ones held; calls add to (or correct) those held.
    const cutoff = iso(istDay(-EVENTS_KEEP_DAYS));
    const kept = store.events.filter(e => e.date >= cutoff
        && !(e.kind === 'results' && e.date >= today)
        && !(e.kind === 'call' && calls.some(c => c.company === e.company && Math.abs(Date.parse(c.date) - Date.parse(e.date)) <= 10 * 86400000)));
    const all = [...kept, ...results.filter(r => r.date >= today || !kept.some(k => k.kind === 'results' && k.company === r.company && k.date === r.date)), ...calls];
    const uniq = new Map<string, CompanyEvent>();
    for (const e of all) uniq.set(`${e.company}|${e.kind}|${e.date}`, e);
    store.events = [...uniq.values()].sort((a, b) => a.date.localeCompare(b.date) || a.company.localeCompare(b.company));
    store.updated = new Date().toISOString();

    const ahead = store.events.filter(e => e.date >= today);
    console.log(`${store.events.length} events held: ${ahead.filter(e => e.kind === 'results').length} result dates and ${ahead.filter(e => e.kind === 'call').length} calls ahead`);
    if (!DRY) {
        fs.writeFileSync(FILE, JSON.stringify(store, null, 1) + '\n');
        fs.writeFileSync(SEEN, JSON.stringify(seen.slice(-3000)) + '\n');
    }
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
