/**
 * Market news and "why it moved", run each evening after the filings digest.
 *
 *   npx tsx scripts/sync-market-news.ts                     (today's news; the latest trading day's moves)
 *   npx tsx scripts/sync-market-news.ts --date=2026-09-25   (moves for one past day; no news scan)
 *   npx tsx scripts/sync-market-news.ts --no-news | --no-moves | --dry
 *
 * 1. Policy and market news: reads the headline feeds of Economic Times, Moneycontrol and Business
 *    Line and ScanX's policy, trade and commodity sections, keeps only outside events that change an industry's or a company's sales or profit (a
 *    regulator's rule, a duty, a ban, a scheme), and lists the dashboard companies each one directly
 *    and meaningfully helps or hurts. Deliberately strict: no market wraps, tips, opinion, company
 *    results, or economy-wide effects.
 * 2. Big moves: every company that moved 7% or more on the latest trading day, or closed pinned at a
 *    10% or 20% limit, or at a 5% (or lower) limit two days running. For each it gathers the
 *    evidence (the company's own filings, bulk and block deals, news naming it, the day's policy
 *    events, peers that moved with it) and asks for the cause strictly from that evidence. With no
 *    A mover still unexplained gets one web search for what news reports gave as the cause. With no
 *    clear cause the entry says so and is recorded quietly (no dot).
 *
 * Writes lib/news/news.json (kept a year) and lib/news/seen.json (links already screened). Screening uses Gemini Flash; the judgements use Pro.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { geminiPro, geminiScreen, geminiSearch } from '../lib/gemini';
import { businessFor } from '../lib/sector-overviews';
import { nseDay, nseDeals, dailyHeadlines, companyHeadlines, TRUSTED, type DayRow, type Headline } from '../lib/news/sources';
import { MOVE_PCT, NEWS_KEEP_DAYS, type NewsItem } from '../lib/news/types';
import type { MaterialFiling } from '../lib/filings/types';

const FILE = path.join(__dirname, '..', 'lib', 'news', 'news.json');
// Links already screened, kept apart from the store so the site does not load them.
const SEEN = path.join(__dirname, '..', 'lib', 'news', 'seen.json');
const FILINGS = path.join(__dirname, '..', 'lib', 'filings', 'filings.json');
const DEALS_URL = 'https://www.nseindia.com/report-detail/display-bulk-and-block-deals';

interface Store { updated: string; movesDate: string; items: NewsItem[] }
interface Co { name: string; sector: string; isin: string | null; marketCap: number | null }

const arg = (k: string) => process.argv.find(a => a.startsWith(`--${k}=`))?.split('=')[1];
const flag = (k: string) => process.argv.includes(`--${k}`);
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const istDay = (back = 0) => new Date(Date.now() + 5.5 * 3600000 - back * 86400000).toISOString().slice(0, 10);
const dayBefore = (iso: string, n = 1) => { const d = new Date(iso + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10); };
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
const jsonArray = (raw: string) => JSON.parse(raw.slice(raw.indexOf('['), raw.lastIndexOf(']') + 1));

async function ask(model: { generateContent(p: string): Promise<any> }, prompt: string): Promise<any[]> {
    for (let attempt = 1; attempt <= 2; attempt++) {
        try {
            const res = await model.generateContent(prompt);
            return jsonArray(res.response.text());
        } catch (e: any) {
            console.warn(`  AI call failed (attempt ${attempt}): ${e.message}`);
            await sleep(3000);
        }
    }
    return [];
}

// ---------------------------------------------------------------------------------------------
// 1. Policy and market news
// ---------------------------------------------------------------------------------------------
const SCREEN = `You screen Indian business news headlines for a long-term stock investor. Pick ONLY headlines about an OUTSIDE
decision or shock that changes the sales, costs or profit of a whole industry or of specific listed companies:
- a regulator's rule, cap, ban or formal draft (IRDAI, RBI, SEBI, TRAI, NPPA, FSSAI, power and telecom regulators, drug regulators);
- a customs duty, anti-dumping duty, GST or excise change; import or export curbs; quality-control orders;
- a government scheme, subsidy, incentive, price control or procurement decision aimed at an industry;
- a court or tribunal ruling with industry-wide effect;
- a foreign government's action on Indian exports (tariffs, bans, US FDA policy), or a sharp, sudden move in a key commodity.
Be strict. EXCLUDE: one company's own results, orders, deals, fund-raises or management news; stock tips, broker views, target
prices, market wraps, index moves, IPO news, fund flows; opinion, analysis, interviews, explainers; macro data (GDP, inflation,
PMI, trade data); routine central-bank operations; politics with no economic decision; and anything only speculated ("may",
"mulls", "likely to") unless a formal draft, proposal or notification has been published.
Reply with JSON only: an array of the numbers of the headlines you picked (often empty, rarely more than a few).`;

async function policyNews(store: Store, cos: Co[], today: string): Promise<NewsItem[]> {
    const seen: string[] = fs.existsSync(SEEN) ? JSON.parse(fs.readFileSync(SEEN, 'utf8')) : [];
    // --rescan reads the day's headlines again even if already screened (for testing a rule change).
    const known = new Set(flag('rescan') ? [] : seen);
    const fresh = (await dailyHeadlines()).filter(h => (!h.date || h.date >= dayBefore(today)) && !known.has(h.url));
    console.log(`News: ${fresh.length} new headlines to screen`);
    if (!flag('dry')) fs.writeFileSync(SEEN, JSON.stringify([...seen, ...fresh.map(h => h.url)].slice(-4000)) + '\n');
    if (!fresh.length) return [];
    const holders = await holderNews(fresh, store, cos, today);

    // First pass (Flash): which headlines are outside events at all.
    const kept: Headline[] = [];
    for (let i = 0; i < fresh.length; i += 60) {
        const chunk = fresh.slice(i, i + 60);
        const picked = await ask(geminiScreen, `${SCREEN}\n\n${chunk.map((h, j) => `${j}. ${h.title}${h.summary ? ` — ${h.summary.slice(0, 200)}` : ''}`).join('\n')}`);
        for (const j of picked) if (chunk[Number(j)]) kept.push(chunk[Number(j)]);
    }
    console.log(`News: ${kept.length} possible events after screening`);
    kept.forEach(h => console.log(`   · ${h.title} (${h.source})`));
    if (!kept.length) return holders;

    // Second pass (Pro): which of our companies each event directly and meaningfully affects.
    const recent = store.items.filter(n => n.kind === 'policy' && n.date >= dayBefore(today, 14));
    const already = [...new Set(recent.map(n => n.headline))];
    const list = cos.map(c => `${c.name} | ${c.sector} | ${businessFor(c.name)?.profile.tagline || ''}`).join('\n');
    const prompt = `You work for a long-term investor in Indian listed companies. Below are today's possible market and policy
events (from Economic Times, Moneycontrol, Business Line and ScanX) and the investor's companies with what each does.

For each event that is DECIDED (notified, approved, ordered) or a formally published draft or proposal, list the companies it
DIRECTLY and MEANINGFULLY affects. You may search the web for the details of an event (which products, what rate, from when).
Be very strict; the investor wants few entries, each one worth reading:
- Leave out events that are only remarks, observations, demands, requests for a probe, or plans under discussion.
- Include a company only when the effect on it is VERY MATERIAL: the affected product is a large part of its sales (roughly 20%
  or more), or the affected input is a large part of its raw-material cost (roughly 20% or more), AND the change itself is big
  enough to move the company's profit noticeably within about a year. A small duty change, or a big change on a small product
  line, is not enough. Use what the company does; do not assume. If you are not sure of a company's exposure, search for it; if
  still unsure, leave the company out.
- Get the DIRECTION right from how the company earns its money, not from its sector. A duty or curb on imports helps a company
  that MAKES the product in India; it hurts a company that IMPORTS, trades, repacks or blends the imported product, or that
  buys it as a raw material. A rise in a commodity's price helps its makers and hurts its heavy users. If you cannot tell which
  side a company is on, search; if still unclear, leave it out.
- The effect must be DIRECT and NEAR-TERM. Leave out slow shifts and knock-on effects: a technology or fuel transition playing
  out over years, "more capex will mean more orders some day" for companies that do not bid for or supply that work directly,
  a rival's loss, or a customer's customer being affected.
- The "why" must be concrete: which product or input, roughly what share of the company's sales or costs, and what changes for
  it (a price, a volume, a cost, a rule). If all you could write is that it "will benefit" or "will see demand", leave the
  company out.
- Skip economy-wide effects (interest rates, fuel prices, the rupee, general demand, sentiment).
- Include companies that GAIN as well as those hurt (e.g. a curb on imports helps local makers).
- A sharp, sudden move in the price of a specific commodity or chemical counts as an event: list the companies for which it is a
  main product or a main raw material.
- At most 6 companies per event, the most exposed only. Most events affect none of these companies: then leave the event out.
- If several headlines are the same story, use one. Leave out stories already recorded (listed at the end) unless something
  material is new (e.g. the draft became final).
Write for a non-technical reader: plain English, short sentences, ₹ and crore, no jargon.

Reply with JSON only:
[{"event": <number>, "key": "<3-5 word slug>", "what": "<at most 22 words: who decided what>",
  "companies": [{"name": "<exact name from the list>", "effect": "helps" | "hurts", "why": "<1-2 sentences: which part of its business, roughly how big, what changes>"}]}]

EVENTS
${kept.map((h, j) => `${j}. ${h.title}${h.summary ? ` — ${h.summary}` : ''} (${h.source}, ${h.date || today})`).join('\n')}

COMPANIES (name | sector | what it does)
${list}

ALREADY RECORDED IN THE LAST TWO WEEKS
${already.join('\n') || '(none)'}`;
    const events = await ask(geminiSearch, prompt);
    const byName = new Map(cos.map(c => [c.name.trim().toLowerCase(), c]));
    const out: NewsItem[] = [];
    for (const e of events) {
        const h = kept[Number(e.event)];
        if (!h || !Array.isArray(e.companies) || !e.what) continue;
        for (const c of e.companies.slice(0, 6)) {
            const co = byName.get(String(c.name || '').trim().toLowerCase());
            if (!co || !c.why) continue;
            out.push({
                id: `${h.date || today}|${co.name}|policy|${slug(e.key || e.what)}`,
                company: co.name, sector: co.sector, date: h.date || today, kind: 'policy',
                tone: c.effect === 'helps' ? 'good' : 'watch',
                headline: String(e.what).slice(0, 220), summary: String(c.why).slice(0, 500),
                reason: 'policy', url: h.url, source: h.source, dot: true,
            });
        }
    }
    console.log(`News: ${events.length} events kept, ${out.length} company entries`);
    out.forEach(n => console.log(`   ● ${n.company} (${n.tone === 'good' ? 'helps' : 'hurts'}): ${n.headline} — ${n.summary}`));
    return [...holders, ...out];
}

// ---------------------------------------------------------------------------------------------
// 1b. Fund and large-holder stake changes reported by the papers
// ---------------------------------------------------------------------------------------------
// The filings job records these from the exchange disclosure. A disclosure can arrive a day or
// more after the papers report the trade, so the papers are read as a backstop: an entry is added
// only when no such filing is on record for the company yet.
const HOLDER_SCREEN = `You screen Indian business news headlines. Pick ONLY headlines reporting that a NAMED fund, institution, large
investor or promoter has changed its stake in a NAMED listed Indian company: its holding crossed 5% or 10%, fell below 5%, or
it bought or sold about 1% or more of the company (including a named party's block or bulk deal).
EXCLUDE: money flowing into the market or a sector in general, fund-scheme news, index changes, IPO anchor allotments, broker
views, "stocks to watch" lists, results, and plans or talks to sell that have not happened.
Reply with JSON only: an array of the numbers of the headlines you picked (often empty).`;

async function holderNews(fresh: Headline[], store: Store, cos: Co[], today: string): Promise<NewsItem[]> {
    const kept: Headline[] = [];
    for (let i = 0; i < fresh.length; i += 60) {
        const chunk = fresh.slice(i, i + 60);
        const picked = await ask(geminiScreen, `${HOLDER_SCREEN}\n\n${chunk.map((h, j) => `${j}. ${h.title}${h.summary ? ` — ${h.summary.slice(0, 200)}` : ''}`).join('\n')}`);
        for (const j of picked) if (chunk[Number(j)]) kept.push(chunk[Number(j)]);
    }
    console.log(`Stakes: ${kept.length} possible stake-change stories`);
    if (!kept.length) return [];

    const answers = await ask(geminiPro, `Below are news headlines about a fund, institution, large investor or promoter changing its stake in a listed
Indian company, and the list of companies an investor follows. For each headline about a company ON THE LIST, report it. Leave
out headlines about other companies, and use the exact name from the list. Say only what the headline and its summary say; do
not add figures. If two headlines are the same story, use one. Plain English for a non-technical reader, ₹ and crore.

Reply with JSON only:
[{"story": <number>, "company": "<exact name from the list>", "action": "bought" | "sold",
  "headline": "<at most 20 words: who did what, e.g. SBI Mutual Fund's stake crosses 5% after buying shares worth ₹300 crore>",
  "summary": "<1-2 sentences: the stake before and after, the value and the price if given, and who the party is>"}]

HEADLINES
${kept.map((h, j) => `${j}. ${h.title}${h.summary ? ` — ${h.summary}` : ''} (${h.source}, ${h.date || today})`).join('\n')}

COMPANIES
${cos.map(c => c.name).join('\n')}`);

    const filings: MaterialFiling[] = JSON.parse(fs.readFileSync(FILINGS, 'utf8')).filings;
    const byName = new Map(cos.map(c => [c.name.trim().toLowerCase(), c]));
    const out: NewsItem[] = [];
    for (const a of answers) {
        const h = kept[Number(a.story)];
        const co = byName.get(String(a.company || '').trim().toLowerCase());
        if (!h || !co || !a.headline || !TRUSTED.test(h.source) || out.some(n => n.company === co.name)) continue;
        const date = h.date || today;
        // Already on record from the exchange disclosure, or reported here in the last few days.
        const filed = filings.some(f => f.company === co.name && f.date >= dayBefore(date, 3) && /large holder|promoter trade|pledge/i.test(f.category));
        const reported = store.items.some(n => n.company === co.name && n.kind === 'holder' && n.date >= dayBefore(date, 5));
        if (filed || reported) continue;
        out.push({
            id: `${date}|${co.name}|holder`,
            company: co.name, sector: co.sector, date, kind: 'holder',
            tone: a.action === 'sold' ? 'watch' : 'good',
            headline: String(a.headline).slice(0, 220),
            summary: `${String(a.summary || '').slice(0, 400)} Reported by the press; the exchange disclosure was not yet on record.`.trim(),
            reason: 'news', url: h.url, source: h.source, dot: true,
        });
    }
    console.log(`Stakes: ${out.length} entries for our companies`);
    out.forEach(n => console.log(`   ● ${n.company}: ${n.headline}`));
    return out;
}

// ---------------------------------------------------------------------------------------------
// 2. Big moves
// ---------------------------------------------------------------------------------------------
interface Evidence { text: string; url?: string; source?: string; cause: NewsItem['reason'] }

const MOVE_RULES = `You explain sharp one-day share-price moves for a long-term investor in Indian companies. For each company
you get the move and the ONLY evidence available. Decide the cause strictly from that evidence.
- Name a cause only when one piece of evidence clearly explains a move of that size and direction and is dated the same day or
  the day before: results, an order, a deal, a rating change, a fund-raise, a regulator or policy decision, a named party's
  bulk or block deal, or a sector-wide move with a known cause.
- A bulk or block deal: say who bought or sold, how much of the company and at what price. A small trade by an unknown
  individual or a trading firm does not explain a move.
- Peers moving the same way is not a cause by itself; it only supports a sector or policy cause found in the evidence.
- If nothing clearly explains it, answer cause "none". Never guess, and never cite market sentiment, momentum, "technical
  breakout", "profit booking" or broker views.
Plain English for a non-technical reader: short sentences, ₹ and crore, no jargon. Do not repeat the percentage move.

Reply with JSON only:
[{"i": <company number>, "cause": "filing" | "deal" | "news" | "policy" | "sector" | "none", "evidence": <number of the evidence
  item used, or null>, "headline": "<at most 18 words: what happened>", "summary": "<1-2 sentences: why it moved the price and
  what it means for the company>", "tone": "good" | "watch" | "info"}]`;

/** Second step for a mover the evidence could not explain: what news reports gave as the cause, found by web search. */
async function searchedCause(name: string, pct: number, date: string): Promise<{ cause: string; source: string } | null> {
    const day = new Date(date + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    try {
        const res = await geminiSearch.generateContent(`Search the news: why did the share price of ${name} (India) move ${pct > 0 ? '+' : ''}${pct}% on ${day}?
Answer in exactly this form, nothing else:
CAUSE: <the specific cause that news reports give, in at most 25 plain words> | or the single word NONE
SOURCE: <the outlet that reported it>
Rules: use only established news outlets (Economic Times, Moneycontrol, Business Line, Business Standard, Mint, Reuters, Bloomberg, NDTV Profit, CNBC-TV18, Financial Express, Business Today, PTI); ignore stock-screener and auto-written pages. A cause must be a specific event reported by such an outlet for that day (results, an order, a deal, a named investor's block or bulk deal, a regulator or government decision, a sector-wide trigger). If reports only describe the move itself (volumes, "upper circuit", technical signals, momentum, "no clear trigger"), or give only a broker's rating, target price or coverage note, answer NONE. The report must itself link the event to the share move ("shares rose after ...") and the event must be from that day or the day before; routine housekeeping (setting up a subsidiary, a dividend record date, a meeting notice) or results from an earlier quarter are not a cause unless the report says the shares moved because of it. If unsure, answer NONE. Never guess. Plain English, no jargon.`);
        const text: string = res.response.text();
        const clean = (v?: string) => (v || '').replace(/[*_`"]/g, '').trim();
        const cause = clean(text.match(/CAUSE:\s*(.+)/i)?.[1]);
        const source = clean(text.match(/SOURCE:\s*(.+)/i)?.[1]);
        // "NONE" in any dressing, or too short to be a real cause, means nothing was found.
        if (cause.length < 20 || /\bnone\b/i.test(cause.slice(0, 25)) || !source || /\bnone\b/i.test(source) || !TRUSTED.test(source)) return null;
        return { cause: cause.slice(0, 220), source: source.slice(0, 60) };
    } catch (e: any) {
        console.warn(`  web search failed for ${name}: ${e.message}`);
        return null;
    }
}

async function bigMoves(store: Store, cos: Co[], policyToday: NewsItem[]): Promise<{ date: string; items: NewsItem[] } | null> {
    // The day: the one asked for, else the latest with a price file.
    let date = arg('date') || '';
    let rows: Map<string, DayRow> | null = null;
    if (date) rows = await nseDay(date);
    else for (let back = 0; back < 6 && !rows; back++) { date = istDay(back); rows = await nseDay(date); }
    if (!rows) { console.log('Moves: no NSE price file found'); return null; }
    if (!arg('date') && date === store.movesDate) { console.log(`Moves: ${date} already done`); return null; }

    // The trading day before, for "at its 5% limit two days running".
    let prevRows: Map<string, DayRow> | null = null;
    for (let back = 1; back < 7 && !prevRows; back++) prevRows = await nseDay(dayBefore(date, back));

    const movers = cos.flatMap(co => {
        const r = co.isin ? rows!.get(co.isin) : undefined;
        if (!r) return [];
        const big = Math.abs(r.pct) >= MOVE_PCT;
        const pinned = r.atLimit !== 0 && (r.band ?? 0) >= 10;
        const pinnedTwice = r.atLimit !== 0 && (r.band ?? 99) <= 5 && prevRows?.get(r.isin)?.atLimit === r.atLimit;
        return big || pinned || pinnedTwice ? [{ co, r, why: big ? '' : pinnedTwice ? `at its ${r.band}% limit two days running` : `at its ${r.band}% limit` }] : [];
    });
    console.log(`Moves on ${date}: ${movers.length} of ${cos.length} companies`);
    if (!movers.length) return { date, items: [] };

    const filings: MaterialFiling[] = JSON.parse(fs.readFileSync(FILINGS, 'utf8')).filings;
    const deals = (await nseDeals()).filter(d => d.date === date);
    const bySector = new Map<string, typeof movers>();
    for (const m of movers) bySector.set(m.co.sector, [...(bySector.get(m.co.sector) || []), m]);

    // Evidence per mover.
    const evidence: Evidence[][] = [];
    for (const m of movers) {
        const ev: Evidence[] = [];
        for (const f of filings.filter(f => f.company === m.co.name && f.date >= dayBefore(date) && f.date <= date))
            ev.push({ text: `Company filing (${f.date}, ${f.category}): ${f.headline}. ${f.summary}`, url: f.url, source: 'Exchange filing', cause: 'filing' });
        const shares = m.co.marketCap ? (m.co.marketCap * 1e7) / m.r.close : null;
        for (const d of deals.filter(d => d.symbol === m.r.symbol))
            ev.push({ text: `${d.kind === 'bulk' ? 'Bulk' : 'Block'} deal: ${d.client} ${d.side === 'BUY' ? 'bought' : 'sold'} ${d.qty.toLocaleString('en-IN')} shares${shares ? ` (${((d.qty / shares) * 100).toFixed(2)}% of the company)` : ''} at ₹${d.price}`, url: DEALS_URL, source: `NSE ${d.kind} deals`, cause: 'deal' });
        for (const p of policyToday.filter(p => p.company === m.co.name))
            ev.push({ text: `Policy event (${p.date}): ${p.headline}. ${p.summary}`, url: p.url, source: p.source, cause: 'policy' });
        const name = m.r.name.replace(/\b(LIMITED|LTD\.?)\b/gi, '').replace(/\s+/g, ' ').trim() || m.co.name;
        for (const h of (await companyHeadlines(name)).filter(h => !h.date || (h.date >= dayBefore(date) && h.date <= dayBefore(date, -1))))
            ev.push({ text: `News (${h.source}, ${h.date}): ${h.title}`, url: h.url, source: h.source, cause: 'news' });
        const peers = (bySector.get(m.co.sector) || []).filter(x => x !== m && Math.sign(x.r.pct) === Math.sign(m.r.pct));
        if (peers.length >= 2) ev.push({ text: `Also moved the same way in ${m.co.sector} today: ${peers.slice(0, 6).map(x => `${x.co.name} ${x.r.pct > 0 ? '+' : ''}${x.r.pct}%`).join(', ')}`, cause: 'sector' });
        evidence.push(ev);
        await sleep(1200);
    }

    const items: NewsItem[] = [];
    for (let i = 0; i < movers.length; i += 5) {
        const chunk = movers.slice(i, i + 5);
        const body = chunk.map((m, j) => {
            const ev = evidence[i + j];
            return `COMPANY ${j}: ${m.co.name} (${m.co.sector}; ${businessFor(m.co.name)?.profile.tagline || 'no description'}). Moved ${m.r.pct > 0 ? '+' : ''}${m.r.pct}% on ${date}${m.why ? `, ${m.why}` : ''}.\n` +
                (ev.length ? ev.map((e, k) => `  [${k}] ${e.text}`).join('\n') : '  (no evidence found)');
        }).join('\n\n');
        const answers = await ask(geminiPro, `${MOVE_RULES}\n\n${body}`);
        for (const [j, m] of chunk.entries()) {
            const a = answers.find(x => Number(x.i) === j);
            const ev = a && a.evidence !== null && a.evidence !== undefined ? evidence[i + j][Number(a.evidence)] : undefined;
            const found = !!a && a.cause !== 'none' && !!ev && !!a.headline;
            const move = `${m.r.pct > 0 ? 'Up' : 'Down'} ${Math.abs(m.r.pct)}%`;
            const name = m.r.name.replace(/\b(LIMITED|LTD\.?)\b/gi, '').replace(/\s+/g, ' ').trim() || m.co.name;
            const web = found ? null : await searchedCause(name, m.r.pct, date);
            if (web) {
                items.push({
                    id: `${date}|${m.co.name}|move`,
                    company: m.co.name, sector: m.co.sector, date, kind: 'move', pct: m.r.pct,
                    tone: m.r.pct > 0 ? 'good' : 'watch',
                    headline: `${move}: ${web.cause}`,
                    summary: `As reported by ${web.source}. Found by a news search, not from the company's own filings.`,
                    reason: 'news', source: web.source,
                    url: `https://www.google.com/search?tbm=nws&q=${encodeURIComponent(`${name} shares ${date}`)}`,
                    dot: true,
                });
                continue;
            }
            items.push({
                id: `${date}|${m.co.name}|move`,
                company: m.co.name, sector: m.co.sector, date, kind: 'move', pct: m.r.pct,
                tone: found ? (a.tone === 'good' || a.tone === 'watch' ? a.tone : m.r.pct > 0 ? 'good' : 'watch') : 'info',
                headline: found ? `${move}: ${String(a.headline).slice(0, 200)}` : `${move}${m.why ? ` (${m.why})` : ''}: no clear reason found`,
                summary: found ? String(a.summary || '').slice(0, 500) : 'No filing, bulk or block deal, or news that day explains the move.',
                reason: found ? ev!.cause : 'none', url: found ? ev!.url : undefined, source: found ? ev!.source : undefined,
                dot: found,
            });
        }
    }
    console.log(`Moves: ${items.filter(n => n.dot).length} explained, ${items.filter(n => !n.dot).length} with no clear reason`);
    items.forEach(n => console.log(`   ${n.dot ? '●' : '○'} ${n.company}: ${n.headline}`));
    return { date, items };
}

// ---------------------------------------------------------------------------------------------
async function main() {
    const store: Store = JSON.parse(fs.readFileSync(FILE, 'utf8'));
    const today = istDay();
    const seenCo = new Set<string>();
    const cos: Co[] = (await prisma.company.findMany({ where: { isVisible: true, status: 'ACTIVE' }, select: { name: true, sector: true, isin: true, marketCap: true }, orderBy: { sector: 'asc' } }))
        .filter(c => !seenCo.has(c.name) && !!seenCo.add(c.name))
        .map(c => ({ name: c.name, sector: c.sector, isin: c.isin, marketCap: c.marketCap === null ? null : Number(c.marketCap) }));

    const policy = flag('no-news') || arg('date') ? [] : await policyNews(store, cos, today);
    const moves = flag('no-moves') ? null : await bigMoves(store, cos, policy);

    // A move explained by a policy event already says it: keep the move (it carries the price change).
    const explained = new Set((moves?.items || []).filter(n => n.reason === 'policy').map(n => n.company));
    const add = [...policy.filter(p => !explained.has(p.company)), ...(moves?.items || [])];
    const ids = new Set(add.map(n => n.id));
    const cutoff = dayBefore(today, NEWS_KEEP_DAYS);
    store.items = [...store.items.filter(n => !ids.has(n.id) && n.date >= cutoff), ...add]
        .sort((a, b) => b.date.localeCompare(a.date) || a.company.localeCompare(b.company));
    if (moves && !arg('date')) store.movesDate = moves.date;
    store.updated = new Date().toISOString();

    console.log(`${add.length} entries (${add.filter(n => n.dot).length} with a dot); ${store.items.length} in the store`);
    if (!flag('dry')) fs.writeFileSync(FILE, JSON.stringify(store, null, 2) + '\n');
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
