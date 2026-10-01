// Where the evening news job reads from. Everything here is public and needs no login:
//   - NSE's end-of-day files: the bhavcopy (close and previous close of every share), the price-band
//     list (each share's daily limit) and the day's bulk and block deals (who bought and sold);
//   - the headline feeds of Economic Times, Moneycontrol and Business Line;
//   - ScanX's policy, trade and commodity news sections;
//   - a news search for one company's name, for the "why did it move" check.
import zlib from 'zlib';

export const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function download(url: string): Promise<Buffer | null> {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) });
        if (!res.ok) return null;
        return Buffer.from(await res.arrayBuffer());
    } catch {
        return null;
    }
}

// Minimal zip reader (NSE's files are plain deflate zips): name -> contents.
function unzip(buf: Buffer): Record<string, Buffer> {
    const out: Record<string, Buffer> = {};
    const eocd = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
    if (eocd < 0) return out;
    const count = buf.readUInt16LE(eocd + 10);
    let off = buf.readUInt32LE(eocd + 16);
    for (let i = 0; i < count && buf.readUInt32LE(off) === 0x02014b50; i++) {
        const method = buf.readUInt16LE(off + 10);
        const size = buf.readUInt32LE(off + 20);
        const nameLen = buf.readUInt16LE(off + 28), extraLen = buf.readUInt16LE(off + 30), commentLen = buf.readUInt16LE(off + 32);
        const local = buf.readUInt32LE(off + 42);
        const name = buf.toString('utf8', off + 46, off + 46 + nameLen);
        const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
        const data = buf.subarray(start, start + size);
        out[name] = method === 0 ? data : zlib.inflateRawSync(data);
        off += 46 + nameLen + extraLen + commentLen;
    }
    return out;
}

// One CSV line, honouring double quotes; cells trimmed.
function csvCells(line: string): string[] {
    const out: string[] = [];
    let cur = '', quoted = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') { if (quoted && line[i + 1] === '"') { cur += '"'; i++; } else quoted = !quoted; }
        else if (ch === ',' && !quoted) { out.push(cur.trim()); cur = ''; }
        else cur += ch;
    }
    out.push(cur.trim());
    return out;
}
const num = (s: string | undefined) => { const v = parseFloat(String(s ?? '').replace(/,/g, '')); return Number.isFinite(v) ? v : null; };

// ---------------------------------------------------------------------------------------------
// NSE end-of-day prices
// ---------------------------------------------------------------------------------------------
const SERIES = ['EQ', 'BE', 'BZ', 'SM', 'ST', 'SZ'];

export interface DayRow {
    isin: string; symbol: string; series: string; name: string;
    close: number; prev: number; high: number; low: number;
    /** Change on the previous close, percent. */
    pct: number;
    /** Daily price limit in percent (2, 5, 10, 20), or null when the share has none. */
    band: number | null;
    /** Closed pinned at its upper (1) or lower (-1) limit; 0 otherwise. */
    atLimit: 1 | 0 | -1;
}

/** One trading day's prices by ISIN, or null when NSE has no file for that day (holiday, weekend, not out yet). */
export async function nseDay(date: string): Promise<Map<string, DayRow> | null> {
    const [y, m, d] = date.split('-');
    const zip = await download(`https://nsearchives.nseindia.com/content/cm/BhavCopy_NSE_CM_0_0_0_${y}${m}${d}_F_0000.csv.zip`);
    if (!zip) return null;
    const file = Object.entries(unzip(zip)).find(([n]) => /\.csv$/i.test(n));
    if (!file) return null;
    const [head, ...lines] = file[1].toString('utf8').split(/\r?\n/).filter(l => l.trim());
    const h = csvCells(head);
    const col = (n: string) => h.indexOf(n);
    const iIsin = col('ISIN'), iSym = col('TckrSymb'), iSer = col('SctySrs'), iName = col('FinInstrmNm'), iClose = col('ClsPric'),
        iPrev = col('PrvsClsgPric'), iHigh = col('HghPric'), iLow = col('LwPric'), iType = col('FinInstrmTp');
    if ([iIsin, iSym, iSer, iClose, iPrev, iHigh, iLow].some(i => i < 0)) throw new Error(`NSE bhavcopy header changed: ${head}`);

    const bands = await priceBands();
    const out = new Map<string, DayRow>();
    for (const line of lines) {
        const c = csvCells(line);
        if (iType >= 0 && c[iType] !== 'STK') continue;
        if (!SERIES.includes(c[iSer])) continue;
        const close = num(c[iClose]), prev = num(c[iPrev]), high = num(c[iHigh]), low = num(c[iLow]);
        if (!close || !prev || close <= 0 || prev <= 0) continue;
        const symbol = (c[iSym] || '').toUpperCase();
        const pct = Math.round(((close - prev) / prev) * 1000) / 10;
        let band = bands.get(symbol) ?? null;
        // NSE publishes no band list for SME shares; one that closes at the day's extreme about 5% away is at its limit.
        if (band === null && /^S[MTZ]$/.test(c[iSer]) && Math.abs(pct) >= 4.65 && Math.abs(pct) <= 5.05) band = 5;
        // Pinned at the limit: the close is the day's extreme and the move is the whole band (NSE rounds
        // the limit price to the tick, so allow a little slack).
        const atLimit = band && Math.abs(pct) >= band - 0.35
            ? (pct > 0 && high !== null && close >= high ? 1 : pct < 0 && low !== null && close <= low ? -1 : 0)
            : 0;
        const row: DayRow = { isin: c[iIsin], symbol, series: c[iSer], name: c[iName] || '', close, prev, high: high ?? close, low: low ?? close, pct, band, atLimit };
        const had = out.get(row.isin);
        if (!had || SERIES.indexOf(row.series) < SERIES.indexOf(had.series)) out.set(row.isin, row);
    }
    return out;
}

/** Each main-board share's daily price limit, by NSE symbol. Shares in derivatives have none. */
async function priceBands(): Promise<Map<string, number>> {
    const out = new Map<string, number>();
    for (const url of ['https://nsearchives.nseindia.com/content/equities/sec_list.csv']) {
        const buf = await download(url);
        if (!buf) continue;
        for (const line of buf.toString('utf8').split(/\r?\n/).slice(1)) {
            const c = csvCells(line);
            const band = num(c[3]);
            if (c[0] && band) out.set(c[0].toUpperCase(), band);
        }
    }
    return out;
}

export interface Deal { date: string; symbol: string; client: string; side: 'BUY' | 'SELL'; qty: number; price: number; kind: 'bulk' | 'block' }

/** The latest day's bulk deals (0.5% or more of a company's shares) and block deals, with the buyer or seller named. */
export async function nseDeals(): Promise<Deal[]> {
    const out: Deal[] = [];
    const months: Record<string, string> = { JAN: '01', FEB: '02', MAR: '03', APR: '04', MAY: '05', JUN: '06', JUL: '07', AUG: '08', SEP: '09', OCT: '10', NOV: '11', DEC: '12' };
    for (const kind of ['bulk', 'block'] as const) {
        const buf = await download(`https://nsearchives.nseindia.com/content/equities/${kind}.csv`);
        if (!buf) continue;
        for (const line of buf.toString('utf8').split(/\r?\n/).slice(1)) {
            const c = csvCells(line);
            const dm = (c[0] || '').match(/^(\d{2})-([A-Z]{3})-(\d{4})$/i);
            const qty = num(c[5]), price = num(c[6]);
            if (!dm || !qty || !price || !/^(BUY|SELL)$/i.test(c[4] || '')) continue;
            out.push({ date: `${dm[3]}-${months[dm[2].toUpperCase()]}-${dm[1]}`, symbol: (c[1] || '').toUpperCase(), client: c[3], side: c[4].toUpperCase() as 'BUY' | 'SELL', qty, price, kind });
        }
    }
    return out;
}

// ---------------------------------------------------------------------------------------------
// News headlines
// ---------------------------------------------------------------------------------------------
export interface Headline { title: string; summary: string; url: string; source: string; date: string }

const FEEDS: { source: string; url: string }[] = [
    { source: 'Economic Times', url: 'https://economictimes.indiatimes.com/news/economy/policy/rssfeeds/1106944246.cms' },
    { source: 'Economic Times', url: 'https://economictimes.indiatimes.com/industry/rssfeeds/13352306.cms' },
    { source: 'Economic Times', url: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms' },
    { source: 'Moneycontrol', url: 'https://www.moneycontrol.com/rss/business.xml' },
    { source: 'Moneycontrol', url: 'https://www.moneycontrol.com/rss/economy.xml' },
    { source: 'Moneycontrol', url: 'https://www.moneycontrol.com/rss/marketreports.xml' },
    { source: 'Business Line', url: 'https://www.thehindubusinessline.com/economy/feeder/default.rss' },
    { source: 'Business Line', url: 'https://www.thehindubusinessline.com/markets/feeder/default.rss' },
    { source: 'Business Line', url: 'https://www.thehindubusinessline.com/companies/feeder/default.rss' },
];

// The feeds hold only the latest 50 or so stories each, so the day's policy stories are also searched
// for by subject on the same three sites.
const SITES = '(site:economictimes.indiatimes.com OR site:moneycontrol.com OR site:thehindubusinessline.com)';
const POLICY_SEARCHES = [
    'duty OR tariff OR "anti-dumping" OR "import curbs" OR "export ban"',
    'IRDAI OR RBI OR SEBI OR TRAI OR NPPA OR FSSAI OR CERC circular OR norms OR draft OR caps',
    'ban OR restriction OR "price control" OR "price cap" government industry',
    'GST rate OR cess OR "excise duty" OR subsidy OR "PLI scheme" OR "incentive scheme"',
    'cabinet approves OR ministry notifies OR "new policy" sector',
];

const decode = (s: string) => s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

function parseRss(xml: string, source: string): Headline[] {
    const out: Headline[] = [];
    for (const m of xml.matchAll(/<item\b[\s\S]*?<\/item>/g)) {
        const tag = (t: string) => decode(m[0].match(new RegExp(`<${t}\\b[^>]*>([\\s\\S]*?)</${t}>`))?.[1] || '');
        const title = tag('title'), url = tag('link');
        const when = Date.parse(tag('pubDate'));
        if (!title || !url) continue;
        // News-search results carry their publisher after a dash and in <source>.
        const publisher = tag('source');
        out.push({
            title: publisher ? title.replace(new RegExp(`\\s+[-–]\\s+${publisher.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`), '') : title,
            summary: publisher ? '' : tag('description').slice(0, 400),
            url, source: publisher || source,
            date: Number.isFinite(when) ? new Date(when + 5.5 * 3600000).toISOString().slice(0, 10) : '',
        });
    }
    return out;
}

async function fetchRss(url: string, source: string): Promise<Headline[]> {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) });
        if (!res.ok) return [];
        return parseRss(await res.text(), source);
    } catch {
        return [];
    }
}

const searchUrl = (q: string) => `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-IN&gl=IN&ceid=IN:en`;

// ScanX (Dhan) files its news by subject. These sections carry the regulator, duty and trade stories
// (DGTR anti-dumping findings, import probes, industry rules) that the papers' feeds often skip.
const SCANX_SECTIONS = ['government-policy-and-regulation', 'international-trade', 'commodities'];

/** The latest 20 stories of one ScanX news section, read from the data its public page carries. */
async function scanxSection(section: string): Promise<Headline[]> {
    try {
        const res = await fetch(`https://scanx.trade/stock-market-news/${section}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(40000) });
        if (!res.ok) return [];
        const state = (await res.text()).match(/<script id="ng-state"[^>]*>([\s\S]*?)<\/script>/)?.[1];
        if (!state) return [];
        const out: Headline[] = [];
        for (const v of Object.values(JSON.parse(state)) as any[]) {
            if (!/articlenavbardetails/.test(v?.u || '')) continue;
            for (const s of v.b?.data?.sections_data || []) for (const a of s.articles || []) {
                const when = Date.parse(a.pubdate);
                if (!a.articletitle || !a.slug || !a.id) continue;
                out.push({
                    title: String(a.articletitle), summary: String(a.summary || '').slice(0, 400),
                    url: `https://scanx.trade/stock-market-news/${a.category || section}/${a.slug}/${a.id}`, source: 'ScanX',
                    date: Number.isFinite(when) ? new Date(when + 5.5 * 3600000).toISOString().slice(0, 10) : '',
                });
            }
        }
        return out;
    } catch {
        return [];
    }
}

/** The day's stories: the three papers' feeds, a subject search for policy news on their sites, and ScanX's policy and trade sections. Deduplicated by title. */
export async function dailyHeadlines(): Promise<Headline[]> {
    const all: Headline[] = [];
    for (const f of FEEDS) { all.push(...await fetchRss(f.url, f.source)); await sleep(500); }
    for (const q of POLICY_SEARCHES) { all.push(...await fetchRss(searchUrl(`${q} ${SITES} when:1d`), 'News search')); await sleep(1500); }
    for (const s of SCANX_SECTIONS) { all.push(...await scanxSection(s)); await sleep(1500); }
    const seen = new Set<string>();
    return all.filter(h => {
        const key = h.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().slice(0, 80);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

// Only established newsrooms count as evidence. Screener sites and auto-written stock pages
// (Univest, MarketsMojo, ScanX and the like) describe the move itself and are often wrong on the cause.
// (ScanX's policy sections are still read for policy events: there each event is checked before it is kept.)
export const TRUSTED = /economic times|et now|moneycontrol|business ?line|business standard|live ?mint|^mint$|reuters|bloomberg|ndtv profit|cnbc|financial express|business today|the hindu|press trust|^pti$|zee business|fortune india|informist|cogencis/i;

/** Recent news naming one company, from established outlets, newest first, for the "why did it move" check. */
export async function companyHeadlines(name: string, days = 3): Promise<Headline[]> {
    const list = (await fetchRss(searchUrl(`"${name}" when:${days}d`), 'News search')).filter(h => TRUSTED.test(h.source));
    return list.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10);
}
