/**
 * Daily material-filings digest.
 *
 *   npx tsx scripts/sync-filings.ts                       (last 2 days)
 *   npx tsx scripts/sync-filings.ts --from=21-09-2026 --to=28-09-2026
 *   npx tsx scripts/sync-filings.ts --dry-run
 *
 * 1. Reads NSE's corporate-announcements feed (main board and SME) for the period
 *    and keeps filings from companies on the dashboard (matched by ISIN).
 * 2. Drops routine filings with simple rules (trading-window closures, newspaper
 *    notices, AGM paperwork, ESOP allotments, investor-meet schedules, ...).
 * 3. For each remaining filing, reads the PDF and asks Gemini whether it is
 *    material; if so it writes a category, a tone and a two-to-three-sentence
 *    summary. Share issues must state the dilution and the price vs the market.
 * 4. Merges the results into lib/filings/filings.json (kept for FILINGS_KEEP_DAYS),
 *    which the website reads. Only the summary and the link to the official
 *    filing are stored, not the document.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
// @ts-ignore - pdf-parse ships no types
import pdfParse from 'pdf-parse';
import { prisma } from '../lib/prisma';
import { geminiPro } from '../lib/gemini';

const DATA_FILE = path.join(process.cwd(), 'lib', 'filings', 'filings.json');
const FILINGS_KEEP_DAYS = 92; // about three months for the company card
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

// Routine filings, by NSE category ("desc") or by words in the subject line.
const SKIP_CATEGORIES = [
    'Trading Window', 'Copy of Newspaper Publication', 'Newspaper Publication', 'Closure of Trading Window',
    'Analysts/Institutional Investor Meet/Con. Call Updates', 'Certificate under SEBI (Depositories and Participants) Regulations, 2018',
    'Loss of Share Certificates', 'Duplicate Share Certificate', 'ESOP/ESOS/ESPS', 'Investor Presentation',
    'Record Date', 'Book Closure', 'Compliances-Reg. 74 (5) of SEBI (DP) Regulations, 2018', 'Change in RTA',
    'Updates on Buy back', 'Spurt in Volume', 'Clarification - Financial Results', 'Statement of deviation(s) or variation(s) under Reg. 32',
    'Disclosure under SEBI Takeover Regulations', 'Monitoring Agency Report', 'Business Responsibility and Sustainability Reporting (BRSR)',
    'Annual Report', 'Notice Of Shareholders Meetings-XBRL', 'Integrated Filing- Financial', 'Integrated Filing- Governance',
];
const SKIP_WORDS = /newspaper|trading window|scrutini[sz]er|e-voting|book closure|record date|loss of share|duplicate share|share certificate|esop|esos|esps|investor meet|analyst meet|schedule of meet|con\. call|conference call|audio recording|transcript|postal ballot notice|intimation of agm|annual report|brsr|reg\. 74|regulation 74|compliance certificate|secretarial compliance|link of|web[- ]?link/i;

interface Filing {
    company: string;
    sector: string;
    date: string;      // yyyy-mm-dd
    category: string;
    tone: 'good' | 'watch' | 'info';
    headline: string;
    summary: string;
    url: string;
}
interface Store {
    updated: string;
    from: string;
    to: string;
    companiesBySector: Record<string, number>;
    filings: Filing[];
}

function argDate(name: string): string | null {
    const a = process.argv.find(x => x.startsWith(`--${name}=`));
    return a ? a.split('=')[1] : null;
}
const ddmmyyyy = (d: Date) => `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
const isoFromNse = (s: string) => { // "25-Sep-2026 18:23:48"
    const d = new Date(s.replace(/-/g, ' '));
    return isNaN(d.getTime()) ? s.slice(0, 11) : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

async function nseAnnouncements(from: string, to: string): Promise<any[]> {
    const home = await fetch('https://www.nseindia.com/', { headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' } });
    const cookie = (home.headers.getSetCookie?.() || []).map(c => c.split(';')[0]).join('; ');
    const out: any[] = [];
    for (const index of ['equities', 'sme']) {
        const res = await fetch(`https://www.nseindia.com/api/corporate-announcements?index=${index}&from_date=${from}&to_date=${to}`, {
            headers: { 'User-Agent': UA, Cookie: cookie, Referer: 'https://www.nseindia.com/companies-listing/corporate-filings-announcements' },
        });
        if (!res.ok) throw new Error(`NSE ${index} feed returned ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) out.push(...data);
        await sleep(1500);
    }
    return out;
}

async function pdfText(url: string): Promise<string> {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': UA } });
        if (!res.ok) return '';
        const buf = Buffer.from(await res.arrayBuffer());
        const parsed = await pdfParse(buf);
        return (parsed.text || '').replace(/\s+/g, ' ').slice(0, 9000);
    } catch {
        return '';
    }
}

const PROMPT = (c: any, a: any, text: string) => `You screen Indian stock-exchange filings for a private investor.
Company: ${c.name} (sector: ${c.sector}). Market value about ₹${Math.round(Number(c.marketCap || 0))}cr; share price about ₹${Number(c.currentPrice || 0)}; last 12 months' sales about ₹${Math.round(Number(c.ttmSales || 0))}cr.
Shares in issue ≈ market value ÷ price = ${c.marketCap && c.currentPrice ? (Number(c.marketCap) * 1e7 / Number(c.currentPrice) / 1e7).toFixed(2) + ' crore' : 'unknown'}.
Filing category: ${a.desc}. Subject: ${a.attchmntText || ''}
Filing text (may be cut off):
"""${text}"""

Decide whether this filing is MATERIAL to an investor. Material examples: orders or contracts (judge size against yearly sales), fund-raises, preferential issues, warrants, QIPs, debt raises, acquisitions or disposals, resignations or appointments of the CEO, MD, CFO, auditor or independent directors, credit-rating changes, pledges, tax demands, penalties, litigation outcomes, plant shutdowns or fires, capacity starts, guidance changes, mergers and demergers, related-party deals, changes in business objects. NOT material: routine compliance, meeting notices without new substance, share allotments under employee schemes, investor-meet schedules, press coverage of past results, routine re-appointments of directors or auditors, AGM outcomes where every resolution passed, incorporation or purchase of shell or project SPVs for nominal sums, and orders or contracts smaller than about 5% of yearly sales (unless the filing says they open a new business line). Also NOT material: any event the filing itself says has no material or financial impact and no lasting disruption (for example a small fire or accident put out quickly with operations back to normal, a minor tax or penalty order the company expects to have no material effect, a routine inspection with no findings). Only mark such an event material if the filing gives a figure large against yearly sales or a real disruption to production. Also NOT material, however the filing is worded: credit ratings reaffirmed or assigned with no change in grade or outlook; tax, GST or penalty notices, demands or appeals below about 2% of yearly sales (unless the company itself calls them material or there is a search, seizure or criminal case); appointments, re-appointments or completed terms of independent or non-executive directors; appointment or rotation of statutory, secretarial or internal auditors (an auditor RESIGNING is material); resignations or appointments below the level of MD, CEO, CFO, business-unit CEO or chief operating/revenue officer; routine commercial paper, NCD or bank-loan issues and guarantees; loans, equity infusions, mergers, demergers or stake sales between a company and its own wholly owned subsidiaries or project SPVs; procedural steps in schemes already announced (exchange no-objection letters, NCLT meeting dates, trading approvals); single hotel, office, store or showroom openings; and shareholder approvals that merely confirm a deal already reported.
Tone rules: "good" only for clearly positive news (large orders, rating upgrades, capacity starting, guidance raised, clean regulatory inspections). Acquisitions, fund-raises and share issues are "info" unless the filing shows a clear red flag. "watch" for resignations of senior managers or auditors, downgrades, penalties, tax demands, pledges, failed resolutions, related-party deals, plant shutdowns, missed guidance.

Reply with JSON only:
{"material": true|false,
 "category": "short label such as Order win, Fund-raise, Debt, Management change, Credit rating, Acquisition, Governance, Legal, Strategy, Operations",
 "tone": "good" (helps the investment case) | "watch" (a risk or red flag) | "info" (worth knowing),
 "headline": "one plain-English line, under 90 characters, with the key number",
 "summary": "two or three short sentences: what happened, with exact figures from the filing, and why it matters (for example, size versus yearly sales). For ANY share issue, warrant or preferential allotment, state the dilution (percent more shares and percent dilution to existing holders, using the share count above) and the issue price versus the current share price. Never invent numbers; if a figure is not in the text, leave it out."}`;

async function judge(c: any, a: any, text: string) {
    const res = await geminiPro.generateContent(PROMPT(c, a, text));
    const raw = res.response.text();
    const json = raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1);
    return JSON.parse(json);
}

async function main() {
    const dryRun = process.argv.includes('--dry-run');
    const today = new Date();
    const twoDaysAgo = new Date(Date.now() - 2 * 86400000);
    const from = argDate('from') || ddmmyyyy(twoDaysAgo);
    const to = argDate('to') || ddmmyyyy(today);

    const companies = await prisma.company.findMany({
        where: { isVisible: true, isin: { not: null } },
        select: { name: true, sector: true, isin: true, marketCap: true, currentPrice: true, ttmSales: true },
    });
    const byIsin = new Map(companies.map(c => [c.isin!, c]));
    const companiesBySector: Record<string, number> = {};
    for (const c of companies) companiesBySector[c.sector] = (companiesBySector[c.sector] || 0) + 1;

    const store: Store = fs.existsSync(DATA_FILE)
        ? JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
        : { updated: '', from: '', to: '', companiesBySector: {}, filings: [] };
    const seen = new Set(store.filings.map(f => f.url));

    const all = await nseAnnouncements(from, to);
    const ours = all.filter(a => byIsin.has(a.sm_isin));
    const candidates = ours.filter(a =>
        !SKIP_CATEGORIES.some(s => (a.desc || '').toLowerCase() === s.toLowerCase())
        && !SKIP_WORDS.test(`${a.desc || ''} ${a.attchmntText || ''}`)
        && a.attchmntFile && !seen.has(a.attchmntFile));
    console.log(`NSE ${from}→${to}: ${all.length} filings, ${ours.length} from our companies, ${candidates.length} to read`);

    let added = 0;
    for (const [i, a] of candidates.entries()) {
        const c = byIsin.get(a.sm_isin)!;
        const text = await pdfText(a.attchmntFile);
        if (!text) { console.log(`  [${i + 1}] ${c.name}: no readable text — skipped`); continue; }
        try {
            const v = await judge(c, a, text);
            if (!v.material) { console.log(`  [${i + 1}] ${c.name}: not material (${a.desc})`); continue; }
            const tone = ['good', 'watch', 'info'].includes(v.tone) ? v.tone : 'info';
            const day = isoFromNse(a.an_dt);
            const category = String(v.category || a.desc).slice(0, 40);
            const dup = store.filings.find(f => f.company === c.name && f.category.toLowerCase() === category.toLowerCase()
                && Math.abs(new Date(f.date).getTime() - new Date(day).getTime()) <= 3 * 86400000);
            if (dup) { console.log(`  [${i + 1}] ${c.name}: same event already recorded (${dup.headline}) — skipped`); seen.add(a.attchmntFile); continue; }
            store.filings.push({
                company: c.name, sector: c.sector, date: day, category,
                tone, headline: String(v.headline || '').slice(0, 140), summary: String(v.summary || ''), url: a.attchmntFile,
            });
            seen.add(a.attchmntFile);
            added++;
            console.log(`  [${i + 1}] ${c.name}: ${tone.toUpperCase()} — ${v.headline}`);
        } catch (e: any) {
            console.warn(`  [${i + 1}] ${c.name}: AI step failed (${e.message})`);
        }
        await sleep(500);
    }

    // Keep a rolling window and record the period covered.
    const cutoff = new Date(Date.now() - FILINGS_KEEP_DAYS * 86400000).toISOString().slice(0, 10);
    store.filings = store.filings.filter(f => f.date >= cutoff).sort((x, y) => y.date.localeCompare(x.date));
    const iso = (s: string) => { const [d, m, y] = s.split('-'); return `${y}-${m}-${d}`; };
    store.to = iso(to) > (store.to || '') ? iso(to) : store.to;
    store.from = store.filings.length ? store.filings[store.filings.length - 1].date : iso(from);
    store.companiesBySector = companiesBySector;
    store.updated = new Date().toISOString();

    if (dryRun) {
        console.log(`DRY RUN — would add ${added} filings (store would hold ${store.filings.length}).`);
    } else {
        fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
        fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 1));
        console.log(`Added ${added} material filings; lib/filings/filings.json now holds ${store.filings.length}.`);
    }
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
