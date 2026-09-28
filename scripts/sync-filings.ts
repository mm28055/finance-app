/**
 * Daily material-filings digest.
 *
 *   npx tsx scripts/sync-filings.ts                       (last 2 days)
 *   npx tsx scripts/sync-filings.ts --from=21-09-2026 --to=28-09-2026
 *   npx tsx scripts/sync-filings.ts --dry-run
 *   npx tsx scripts/sync-filings.ts --promoter-only      (only promoter trades, pledges and takeover-code filings)
 *
 * 1. Promoter trades and pledges: reads NSE's insider-trading filings (SEBI PIT
 *    Reg 7(2)) for the period, takes the numbers from each filing's XBRL and
 *    keeps promoter sales, pledges, invocations and purchases above the size
 *    rules below (plus anyone crossing 5% or 10%). Several trades by the same
 *    promoter group within a few days are summed into one event.
 * 2. Reads NSE's corporate-announcements feed (main board and SME) for the period
 *    and keeps filings from companies on the dashboard (matched by ISIN or symbol).
 *    Takeover-code disclosures (SAST Reg 29 and Reg 31 pledges) are included.
 * 3. Drops routine filings with simple rules (trading-window closures, newspaper
 *    notices, AGM paperwork, ESOP allotments, investor-meet schedules, ...).
 * 4. For each remaining filing, reads the PDF and asks Gemini whether it is
 *    material; if so it writes a category, a tone and a two-to-three-sentence
 *    summary. Share issues must state the dilution and the price vs the market.
 * 5. Merges the results into lib/filings/filings.json (kept for FILINGS_KEEP_DAYS),
 *    which the website reads. Only the summary and the link to the official
 *    filing are stored, not the document. A dry run writes nothing.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
// @ts-ignore - pdf-parse ships no types
import pdfParse from 'pdf-parse';
import { prisma } from '../lib/prisma';
import { geminiPro } from '../lib/gemini';
import { nseAnnouncements, nseInsiderFilings, nsePitDisclosure, parseNseDate, NSE_UA, type PitTrade } from '../lib/filings/nse';
import { nseSymbolForIsin } from '../lib/corporate-actions/nse-lists';

const DATA_FILE = path.join(process.cwd(), 'lib', 'filings', 'filings.json');
const FILINGS_KEEP_DAYS = 92; // about three months for the company card
const UA = NSE_UA;
const DAY = 86400000;
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

// Promoter trades: what counts as "major" (agreed with the owner).
const SELL_PLEDGE_MIN_PCT = 0.5, SELL_PLEDGE_MIN_CR = 10; // promoter sale or pledge
const BUY_MIN_PCT = 0.25, BUY_MIN_CR = 5;                 // promoter purchase
const RELEASE_MIN_PCT = 2;                                 // pledge release worth reporting (as good news)
const EVENT_GAP_DAYS = 3;                                  // trades closer than this are one event

// Routine filings, by NSE category ("desc") or by words in the subject line.
const SKIP_CATEGORIES = [
    'Trading Window', 'Copy of Newspaper Publication', 'Newspaper Publication', 'Closure of Trading Window',
    'Analysts/Institutional Investor Meet/Con. Call Updates', 'Certificate under SEBI (Depositories and Participants) Regulations, 2018',
    'Loss of Share Certificates', 'Duplicate Share Certificate', 'ESOP/ESOS/ESPS', 'Investor Presentation',
    'Record Date', 'Book Closure', 'Compliances-Reg. 74 (5) of SEBI (DP) Regulations, 2018', 'Change in RTA',
    'Updates on Buy back', 'Spurt in Volume', 'Clarification - Financial Results', 'Statement of deviation(s) or variation(s) under Reg. 32',
    'Monitoring Agency Report', 'Business Responsibility and Sustainability Reporting (BRSR)',
    'Annual Report', 'Notice Of Shareholders Meetings-XBRL', 'Integrated Filing- Financial', 'Integrated Filing- Governance',
];
// Takeover-code filings that are routine by nature: the yearly Reg 30 / Reg 31(4)
// declarations, and Reg 10 exemption reports (almost always inter-se transfers
// between promoter-group members). Only skipped when the subject names no
// Reg 29 or Reg 31(1)/(2) disclosure alongside.
const TAKEOVER_CATEGORY = 'disclosure under sebi takeover regulations';
const TAKEOVER_ROUTINE = /regulation\s*10\s*\(\s*[5-7]\s*\)|\b31\s*\(\s*4\s*\)|regulation\s*30\s*\(\s*[12]\s*\)/i;
const TAKEOVER_REAL = /\b29\s*\(\s*[1-3]\s*\)|\b31\s*\(\s*[12]\s*\)/i;
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

const parseDdMmYyyy = (s: string) => { const [d, m, y] = s.split('-').map(Number); return new Date(y, m - 1, d); };
/** Reads a feed in week-long pieces so a long back-fill never hits a cap. */
async function byWeek<T>(from: string, to: string, read: (f: string, t: string) => Promise<T[]>): Promise<T[]> {
    const end = parseDdMmYyyy(to);
    const out: T[] = [];
    for (let s = parseDdMmYyyy(from); s <= end; s = new Date(s.getTime() + 7 * DAY)) {
        const e = new Date(Math.min(s.getTime() + 6 * DAY, end.getTime()));
        out.push(...await read(ddmmyyyy(s), ddmmyyyy(e)));
    }
    return out;
}
const isoDay = (d: Date) => new Date(d.getTime() + 330 * 60000).toISOString().slice(0, 10); // IST calendar day

// ---------------------------------------------------------------------------
// Promoter trades and pledges from insider-trading (PIT Reg 7(2)) filings
// ---------------------------------------------------------------------------

type Company = { name: string; sector: string; isin: string | null; marketCap: any; currentPrice: any; ttmSales: any };
type Kind = 'sell' | 'buy' | 'pledge' | 'invoke' | 'release';
interface PitRow extends PitTrade { company: Company; filed: Date; url: string; kind: Kind | null; promoter: boolean }
interface PitEvent {
    company: Company;
    kind: Kind | 'enter' | 'exit';
    date: string;
    url: string;
    urls: string[];
    people: string[];
    categories: string[];
    modes: string[];
    shares: number;
    pct: number | null;          // of the company's total shares
    valueCr: number | null;      // as filed, or shares x current price when not filed
    valueEstimated: boolean;
    price: number | null;        // average price paid or received, from filed values
    before: number | null;       // those persons' holding before, % of company
    after: number | null;
    rows: number;
}

/** Sale, purchase, pledge, invocation, release — or null for trades the owner does not want (gifts, inter-se, ESOP ...). */
function kindOf(t: PitTrade): Kind | null {
    const s = `${t.transactionType} ${t.mode}`.toLowerCase();
    if (/invo/.test(s)) return 'invoke';
    if (/revo|release/.test(s)) return 'release';
    if (/pledge|encumb/.test(s)) return 'pledge';
    if (/inter-?\s*se|gift|esop|esos|esps|employee|transmission|inherit|bonus|split|scheme|demerger|amalgamation|merger/.test(s)) return null;
    if (/\bsell\b|\bsale\b|dispos/.test(s)) return 'sell';
    if (/\bbuy\b|purchase|acqui|allot|subscri|conversion|preferential|rights/.test(s)) return 'buy';
    return null;
}

/**
 * The company's share count. Taken from the filings themselves (shares held ÷
 * % held) when that agrees with market value ÷ price; the XBRL states holdings
 * as fractions but a few filers type the percentage, which is 100x off.
 */
function shareCount(c: Company, rows: PitTrade[]): number | null {
    const est = c.marketCap && c.currentPrice ? Number(c.marketCap) * 1e7 / Number(c.currentPrice) : null;
    const implied: number[] = [];
    for (const r of rows) {
        for (const [n, p] of [[r.sharesBefore, r.pctBefore], [r.sharesAfter, r.pctAfter]] as const) {
            if (!n || !p || n <= 0 || p <= 0) continue;
            for (const v of [n / p * 100, n / p]) { // fraction as filed, or percentage typed in
                if (!est || (v / est > 0.33 && v / est < 3)) { implied.push(v); break; }
            }
        }
    }
    if (implied.length) return implied.sort((a, b) => a - b)[Math.floor(implied.length / 2)];
    return est;
}

async function promoterEvents(from: string, to: string, bySymbol: Map<string, Company>, byIsin: Map<string, Company>) {
    const list = await byWeek(from, to, nseInsiderFilings);
    const ours = list.filter(f => bySymbol.has(String(f.symbol || '').toUpperCase()) && f.xmlFileName);
    console.log(`PIT ${from}→${to}: ${list.length} insider-trading filings, ${ours.length} from our companies — reading their XBRL`);

    const rows: PitRow[] = [];
    const modes: Record<string, number> = {};
    for (const f of ours) {
        const d = await nsePitDisclosure(f.xmlFileName!);
        await sleep(250);
        if (!d) { console.log(`  ${f.companyName}: XBRL unreadable — skipped`); continue; }
        const c = byIsin.get(d.isin) || bySymbol.get(String(f.symbol).toUpperCase())!;
        const filed = parseNseDate(f.broadcastDateTime) || new Date();
        for (const t of d.trades) {
            modes[`${t.category} | ${t.transactionType} | ${t.mode} | ${t.instrument}`] = (modes[`${t.category} | ${t.transactionType} | ${t.mode} | ${t.instrument}`] || 0) + 1;
            if (!/equity/i.test(t.instrument || 'equity')) continue;
            rows.push({ ...t, company: c, filed, url: f.ixbrl || f.xmlFileName!, kind: kindOf(t), promoter: /promoter/i.test(t.category) });
        }
    }
    if (process.argv.includes('--verbose')) console.log('  PIT row types:', modes);

    // Revised filings repeat the original's trades: keep one copy (the latest filed).
    rows.sort((a, b) => b.filed.getTime() - a.filed.getTime());
    const uniq = new Map<string, PitRow>();
    for (const r of rows) {
        const k = [r.company.name, r.person.toLowerCase(), r.transactionType, r.mode, r.shares, r.fromDate, r.toDate].join('|');
        if (!uniq.has(k)) uniq.set(k, r);
    }
    let kept = [...uniq.values()];
    // Transfers inside the promoter group that were not labelled inter-se: one
    // promoter sells and another buys the same number of shares within a few
    // days (e.g. a parent moving shares to a family trust off-market). Drop both.
    const interSe = new Set<PitRow>();
    for (const s of kept) {
        if (!s.promoter || s.kind !== 'sell' || !s.shares) continue;
        const b = kept.find(r => r.promoter && r.kind === 'buy' && r.company === s.company && !interSe.has(r) && r.shares
            && Math.abs(r.shares - s.shares!) <= 0.01 * s.shares!
            && Math.abs(new Date(r.fromDate || r.filed).getTime() - new Date(s.fromDate || s.filed).getTime()) <= EVENT_GAP_DAYS * DAY);
        if (b) { interSe.add(s); interSe.add(b); }
    }
    if (interSe.size) console.log(`  ${interSe.size} promoter rows are matched transfers within the group — ignored`);
    kept = kept.filter(r => !interSe.has(r));

    const events: PitEvent[] = [];
    const build = (c: Company, kind: PitEvent['kind'], group: PitRow[]): PitEvent => {
        const total = shareCount(c, group);
        const shares = group.reduce((s, r) => s + (r.shares || 0), 0);
        const filedVal = group.filter(r => r.value && r.value > 0 && r.shares);
        const valueRs = filedVal.reduce((s, r) => s + r.value!, 0);
        const price = filedVal.length ? valueRs / filedVal.reduce((s, r) => s + r.shares!, 0) : null;
        const cur = Number(c.currentPrice || 0);
        const valueEstimated = filedVal.length === 0;
        const valueCr = !valueEstimated ? (price! * shares) / 1e7 : cur ? shares * cur / 1e7 : null;
        // Holding before -> after, per person: earliest "before" and latest "after", summed.
        const byPerson = new Map<string, PitRow[]>();
        for (const r of group) byPerson.set(r.person.toLowerCase(), [...(byPerson.get(r.person.toLowerCase()) || []), r]);
        let before: number | null = 0, after: number | null = 0;
        for (const rs of byPerson.values()) {
            rs.sort((a, b) => (a.fromDate + a.filed.toISOString()).localeCompare(b.fromDate + b.filed.toISOString()));
            const b0 = rs[0].sharesBefore, a1 = rs[rs.length - 1].sharesAfter;
            if (before !== null) before = total && b0 != null ? before + b0 / total * 100 : null;
            if (after !== null) after = total && a1 != null ? after + a1 / total * 100 : null;
        }
        const biggest = [...group].sort((a, b) => (b.shares || 0) - (a.shares || 0))[0];
        const latest = group.reduce((m, r) => r.filed > m ? r.filed : m, group[0].filed);
        return {
            company: c, kind, date: isoDay(latest), url: biggest.url, urls: [...new Set(group.map(r => r.url))],
            people: [...new Set(group.map(r => r.person))], categories: [...new Set(group.map(r => r.category))],
            modes: [...new Set(group.map(r => r.mode).filter(Boolean))],
            shares, pct: total ? shares / total * 100 : null, valueCr, valueEstimated, price,
            before, after, rows: group.length,
        };
    };
    /** Splits rows into events: filings more than EVENT_GAP_DAYS apart are separate events. */
    const clusters = (rs: PitRow[]) => {
        const sorted = [...rs].sort((a, b) => a.filed.getTime() - b.filed.getTime());
        const out: PitRow[][] = [];
        for (const r of sorted) {
            const last = out[out.length - 1];
            if (last && r.filed.getTime() - last[last.length - 1].filed.getTime() <= EVENT_GAP_DAYS * DAY) last.push(r);
            else out.push([r]);
        }
        return out;
    };

    // Promoter and promoter-group trades: one event per company, kind and cluster.
    const promoterGroups = new Map<string, PitRow[]>();
    for (const r of kept) {
        if (!r.promoter || !r.kind || !r.shares) continue;
        const k = `${r.company.name}|${r.kind}`;
        promoterGroups.set(k, [...(promoterGroups.get(k) || []), r]);
    }
    for (const rs of promoterGroups.values())
        for (const g of clusters(rs)) events.push(build(g[0].company, g[0].kind!, g));

    // Anyone else crossing 5% or 10%, or falling below 5%: per person.
    const others = new Map<string, PitRow[]>();
    for (const r of kept) {
        if (r.promoter || !r.kind || r.kind === 'pledge' || r.kind === 'release') continue;
        const k = `${r.company.name}|${r.person.toLowerCase()}`;
        others.set(k, [...(others.get(k) || []), r]);
    }
    for (const rs of others.values()) {
        for (const g of clusters(rs)) {
            const e = build(g[0].company, 'enter', g);
            if (e.before == null || e.after == null) continue;
            if ((e.before < 5 && e.after >= 5) || (e.before < 10 && e.after >= 10)) events.push(e);
            else if (e.before >= 5 && e.after < 5) events.push({ ...e, kind: 'exit' });
        }
    }

    const material = events.filter(e => {
        const pct = e.pct ?? 0, cr = e.valueCr ?? 0;
        switch (e.kind) {
            case 'sell': case 'pledge': return pct >= SELL_PLEDGE_MIN_PCT || cr >= SELL_PLEDGE_MIN_CR;
            case 'invoke': return e.shares > 0;
            case 'buy': return pct >= BUY_MIN_PCT || cr >= BUY_MIN_CR;
            case 'release': return pct >= RELEASE_MIN_PCT;
            default: return true; // crossings
        }
    });
    console.log(`PIT: ${rows.length} trade rows (${kept.length} after removing revisions), ${kept.filter(r => r.promoter).length} by promoters; `
        + `${events.length} candidate events, ${material.length} above the size rules`);
    return material;
}

const fmtPct = (p: number | null) => p == null ? '?' : p >= 10 ? p.toFixed(1) : p >= 1 ? p.toFixed(1) : p.toFixed(2);
const fmtCr = (cr: number | null) => cr == null ? '' : cr >= 100 ? `₹${Math.round(cr).toLocaleString('en-IN')}cr` : cr >= 1 ? `₹${cr.toFixed(1)}cr` : `₹${Math.round(cr * 100)} lakh`;
const fmtRs = (n: number) => `₹${n >= 100 ? Math.round(n).toLocaleString('en-IN') : n.toFixed(1)}`;

function headlineFor(e: PitEvent): { category: string; tone: 'good' | 'watch' | 'info'; headline: string } {
    const group = e.people.length > 1 || e.categories.some(c => /group/i.test(c));
    const who = group ? 'Promoter group' : 'Promoter';
    const val = e.valueCr != null ? `${fmtCr(e.valueCr)}${e.valueEstimated ? ' at today\'s price' : ''}` : '';
    const at = e.price ? ` at about ${fmtRs(e.price)}` : '';
    switch (e.kind) {
        case 'sell': return { category: 'Promoter trade', tone: 'watch', headline: `${who} sold ${fmtPct(e.pct)}%${val ? ` (${val})` : ''}${at}` };
        case 'buy': return { category: 'Promoter trade', tone: 'good', headline: `${who} bought ${fmtPct(e.pct)}%${val ? ` (${val})` : ''}${at}` };
        case 'pledge': return { category: 'Pledge', tone: 'watch', headline: `${who} pledged ${fmtPct(e.pct)}% of shares${val ? ` (${val})` : ''}` };
        case 'invoke': return { category: 'Pledge', tone: 'watch', headline: `Lenders invoked pledge on ${fmtPct(e.pct)}% of promoter shares${val ? ` (${val})` : ''}` };
        case 'release': return { category: 'Pledge', tone: 'good', headline: `${who} freed ${fmtPct(e.pct)}% of shares from pledge` };
        case 'enter': return { category: 'Large holder', tone: 'info', headline: `${e.people[0]} now holds ${fmtPct(e.after)}% (was ${fmtPct(e.before)}%)` };
        case 'exit': return { category: 'Large holder', tone: 'info', headline: `${e.people[0]} cut stake below 5% (${fmtPct(e.before)}% → ${fmtPct(e.after)}%)` };
    }
}

function factsFor(e: PitEvent): string {
    const cur = Number(e.company.currentPrice || 0);
    return [
        `Event: ${e.kind === 'enter' || e.kind === 'exit' ? 'non-promoter holding change' : e.kind}`,
        `People: ${e.people.slice(0, 6).join(', ')}${e.people.length > 6 ? ` and ${e.people.length - 6} more` : ''} (${e.categories.join(', ')})`,
        `How: ${e.modes.join(', ') || 'not stated'}`,
        `Shares: ${Math.round(e.shares).toLocaleString('en-IN')} = ${fmtPct(e.pct)}% of the company`,
        e.valueCr != null ? `Value: ${fmtCr(e.valueCr)}${e.valueEstimated ? ' (estimated at today\'s price; no value filed)' : ''}` : '',
        e.price ? `Average price: ${fmtRs(e.price)}; current price ${cur ? fmtRs(cur) : 'unknown'}` : cur ? `Current price ${fmtRs(cur)}` : '',
        e.before != null && e.after != null ? `Their holding: ${fmtPct(e.before)}% before → ${fmtPct(e.after)}% after` : '',
        `Filings summed: ${e.rows} trade line(s) in ${e.urls.length} filing(s)`,
    ].filter(Boolean).join('\n');
}

async function summariseTrade(e: PitEvent, headline: string): Promise<string> {
    const prompt = `You write for a private investor in Indian stocks. Company: ${e.company.name} (sector: ${e.company.sector}).
An insider-trading disclosure (SEBI PIT Regulation 7(2)) shows:
${factsFor(e)}
Headline already written: "${headline}"
Write ONE or TWO short plain-English sentences: who did what, the % of the company and value, the price versus today's price, and the holding before → after when given. Say "pledged" plainly (shares given to lenders as security) and, for an invocation, that lenders took or sold pledged shares. Use only the figures above; never invent any. Reply with the sentences only.`;
    try {
        const res = await geminiPro.generateContent(prompt);
        const s = res.response.text().trim().replace(/^["']|["']$/g, '');
        if (s && s.length < 600) return s;
    } catch { /* fall back below */ }
    const cur = Number(e.company.currentPrice || 0);
    return `${e.people.slice(0, 3).join(', ')}${e.people.length > 3 ? ' and others' : ''} (${e.modes.join(', ') || e.kind}): ${fmtPct(e.pct)}% of the company`
        + `${e.valueCr != null ? `, ${fmtCr(e.valueCr)}` : ''}${e.price ? ` at about ${fmtRs(e.price)}${cur ? ` vs ${fmtRs(cur)} now` : ''}` : ''}.`
        + `${e.before != null && e.after != null ? ` Holding ${fmtPct(e.before)}% → ${fmtPct(e.after)}%.` : ''}`;
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
Promoter and large-holder rules (takeover-code disclosures under SEBI SAST Regulation 29 or 31, and insider-trading disclosures): MATERIAL only when (a) a promoter or promoter-group member SELLS or PLEDGES (creates an encumbrance on) at least ${SELL_PLEDGE_MIN_PCT}% of the company's shares or at least ₹${SELL_PLEDGE_MIN_CR}cr in value; (b) lenders INVOKE a pledge (sell or take pledged promoter shares), whatever the size; (c) a promoter BUYS at least ${BUY_MIN_PCT}% of the shares or at least ₹${BUY_MIN_CR}cr; or (d) a non-promoter crosses 5% or 10% of the company (a new large holder) or falls below 5%. Several trades by the same person or promoter group in one filing are one event: add them up. NOT material: trades below those sizes; pledge releases on repayment (unless at least ${RELEASE_MIN_PCT}% of the shares, then tone "good"); transfers between promoter-group members (inter-se); gifts within the family; employee ESOP trades; yearly Regulation 30 or 31(4) declarations; non-disposal undertakings that only restate an existing arrangement. For these filings use category exactly "Promoter trade" (promoter sales or purchases), "Pledge" (pledges, invocations, releases) or "Large holder" (non-promoters crossing 5% or 10%, or exiting below 5%). Tone: promoter sale, pledge or invocation "watch"; promoter buying or a large pledge release "good"; a large holder entering or exiting "info". Headline style: "Promoter sold 1.8% (₹212cr) at about ₹1,640", "Promoter group pledged 3.2% of shares", "Lenders invoked pledge on 1.1% of promoter shares". In the summary give the % of the company's total shares, the value, the price versus the current share price, and the holding before → after when the filing gives them.
Tone rules: "good" only for clearly positive news (large orders, rating upgrades, capacity starting, guidance raised, clean regulatory inspections). Acquisitions, fund-raises and share issues are "info" unless the filing shows a clear red flag. "watch" for resignations of senior managers or auditors, downgrades, penalties, tax demands, pledges, failed resolutions, related-party deals, plant shutdowns, missed guidance.

Reply with JSON only:
{"material": true|false,
 "category": "short label such as Order win, Fund-raise, Debt, Management change, Credit rating, Acquisition, Governance, Legal, Strategy, Operations, Promoter trade, Pledge, Large holder",
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
    const promoterOnly = process.argv.includes('--promoter-only');
    const today = new Date();
    const twoDaysAgo = new Date(Date.now() - 2 * 86400000);
    const from = argDate('from') || ddmmyyyy(twoDaysAgo);
    const to = argDate('to') || ddmmyyyy(today);

    const companies = await prisma.company.findMany({
        where: { isVisible: true, isin: { not: null } },
        select: { name: true, sector: true, isin: true, marketCap: true, currentPrice: true, ttmSales: true },
    });
    const byIsin = new Map(companies.map(c => [c.isin!, c]));
    // Matched by NSE symbol too: filings often carry a company's old ISIN after a
    // split or face-value change. The symbol is read from NSE's list by our ISIN.
    const bySymbol = new Map<string, Company>();
    for (const c of companies) {
        const sym = await nseSymbolForIsin(c.isin);
        if (sym) bySymbol.set(sym.toUpperCase(), c);
    }
    const companiesBySector: Record<string, number> = {};
    for (const c of companies) companiesBySector[c.sector] = (companiesBySector[c.sector] || 0) + 1;

    const store: Store = fs.existsSync(DATA_FILE)
        ? JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
        : { updated: '', from: '', to: '', companiesBySector: {}, filings: [] };
    const seen = new Set(store.filings.map(f => f.url));
    const sameEvent = (company: string, category: string, day: string) => store.filings.find(f => f.company === company
        && f.category.toLowerCase() === category.toLowerCase()
        && Math.abs(new Date(f.date).getTime() - new Date(day).getTime()) <= EVENT_GAP_DAYS * DAY);
    const addedFrom: Record<'pit' | 'sast' | 'other', Filing[]> = { pit: [], sast: [], other: [] };

    // 1. Promoter trades and pledges, straight from the insider-trading numbers.
    try {
        const events = await promoterEvents(from, to, bySymbol, byIsin);
        for (const e of events.sort((a, b) => a.date.localeCompare(b.date))) {
            const { category, tone, headline } = headlineFor(e);
            if (e.urls.some(u => seen.has(u))) { console.log(`  ${e.company.name}: already recorded — skipped`); continue; }
            const dup = sameEvent(e.company.name, category, e.date);
            if (dup) { console.log(`  ${e.company.name}: same event already recorded (${dup.headline}) — skipped`); continue; }
            const summary = await summariseTrade(e, headline);
            const f: Filing = { company: e.company.name, sector: e.company.sector, date: e.date, category, tone, headline: headline.slice(0, 140), summary, url: e.url };
            store.filings.push(f);
            e.urls.forEach(u => seen.add(u));
            addedFrom.pit.push(f);
            console.log(`  PIT ${e.company.name} (${e.date}): ${tone.toUpperCase()} — ${headline}`);
        }
    } catch (err: any) {
        console.warn(`Insider-trading step failed (${err.message}) — carrying on with announcements`);
    }

    // 2. Everything else, including takeover-code (SAST) disclosures, judged by Gemini from the PDF.
    const all = await byWeek(from, to, nseAnnouncements);
    const matchOf = (a: any) => byIsin.get(a.sm_isin) || (a.symbol ? bySymbol.get(String(a.symbol).toUpperCase()) : undefined);
    const ours = all.filter(a => matchOf(a));
    const candidates = ours.filter(a => {
        const cat = (a.desc || '').toLowerCase();
        const subject = `${a.desc || ''} ${a.attchmntText || ''}`;
        if (cat === TAKEOVER_CATEGORY) return a.attchmntFile && !seen.has(a.attchmntFile) && (TAKEOVER_REAL.test(subject) || !TAKEOVER_ROUTINE.test(subject));
        if (promoterOnly) return false;
        return !SKIP_CATEGORIES.some(s => cat === s.toLowerCase())
            && !SKIP_WORDS.test(subject)
            && a.attchmntFile && !seen.has(a.attchmntFile);
    });
    const takeover = ours.filter(a => (a.desc || '').toLowerCase() === TAKEOVER_CATEGORY);
    if (process.argv.includes('--verbose'))
        for (const a of takeover) console.log(`  takeover ${candidates.includes(a) ? 'READ' : 'skip'}: ${matchOf(a)!.name} — ${String(a.attchmntText || '').slice(0, 110)}`);
    console.log(`NSE ${from}→${to}: ${all.length} filings, ${ours.length} from our companies (${takeover.length} takeover-code), ${candidates.length} to read`);

    for (const [i, a] of candidates.entries()) {
        const c = matchOf(a)!;
        const isSast = (a.desc || '').toLowerCase() === TAKEOVER_CATEGORY;
        const text = await pdfText(a.attchmntFile!);
        if (!text) { console.log(`  [${i + 1}] ${c.name}: no readable text — skipped`); continue; }
        try {
            const v = await judge(c, a, text);
            if (!v.material) { console.log(`  [${i + 1}] ${c.name}: not material (${a.desc})`); continue; }
            const tone = ['good', 'watch', 'info'].includes(v.tone) ? v.tone : 'info';
            const day = isoFromNse(a.an_dt);
            const category = String(v.category || a.desc).slice(0, 40);
            const dup = sameEvent(c.name, category, day);
            if (dup) { console.log(`  [${i + 1}] ${c.name}: same event already recorded (${dup.headline}) — skipped`); seen.add(a.attchmntFile!); continue; }
            const f: Filing = {
                company: c.name, sector: c.sector, date: day, category,
                tone, headline: String(v.headline || '').slice(0, 140), summary: String(v.summary || ''), url: a.attchmntFile!,
            };
            store.filings.push(f);
            seen.add(a.attchmntFile!);
            addedFrom[isSast ? 'sast' : 'other'].push(f);
            console.log(`  [${i + 1}] ${isSast ? 'SAST ' : ''}${c.name}: ${tone.toUpperCase()} — ${v.headline}`);
        } catch (e: any) {
            console.warn(`  [${i + 1}] ${c.name}: AI step failed (${e.message})`);
        }
        await sleep(500);
    }
    const added = addedFrom.pit.length + addedFrom.sast.length + addedFrom.other.length;

    // Keep a rolling window and record the period covered.
    const cutoff = new Date(Date.now() - FILINGS_KEEP_DAYS * 86400000).toISOString().slice(0, 10);
    store.filings = store.filings.filter(f => f.date >= cutoff).sort((x, y) => y.date.localeCompare(x.date));
    const iso = (s: string) => { const [d, m, y] = s.split('-'); return `${y}-${m}-${d}`; };
    store.to = iso(to) > (store.to || '') ? iso(to) : store.to;
    store.from = store.filings.length ? store.filings[store.filings.length - 1].date : iso(from);
    store.companiesBySector = companiesBySector;
    store.updated = new Date().toISOString();

    if (dryRun) {
        console.log(`DRY RUN — would add ${added} filings (${addedFrom.pit.length} promoter trades/pledges from PIT, ${addedFrom.sast.length} takeover-code, ${addedFrom.other.length} other); store would hold ${store.filings.length}. Nothing written.`);
        for (const f of [...addedFrom.pit, ...addedFrom.sast]) console.log(`  ${f.date} ${f.company} [${f.category}, ${f.tone}] ${f.headline}\n      ${f.summary}\n      ${f.url}`);
    } else {
        fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
        fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 1));
        console.log(`Added ${added} material filings; lib/filings/filings.json now holds ${store.filings.length}.`);
    }
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
