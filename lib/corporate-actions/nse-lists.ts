// -----------------------------------------------------------------------------
// NSE's published reference files — who is listed under which symbol and ISIN,
// which symbols and names changed, and the corporate-actions calendar.
//
// Used by scripts/sync-corporate-actions.ts (identity repair, splits, bonuses,
// demergers) and by lib/sync-service.ts (the Screener lookup reads a company's
// current NSE symbol from its ISIN). scripts/sync-finance.js is plain JS and
// keeps a small twin of loadNseListings — change both together.
//
// The CSVs on nsearchives.nseindia.com need only a browser User-Agent; the
// corporate-actions API needs the cookies nseindia.com's home page sets.
// -----------------------------------------------------------------------------

export const NSE_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const LISTS = [
    { url: 'https://nsearchives.nseindia.com/content/equities/EQUITY_L.csv', sme: false },
    { url: 'https://nsearchives.nseindia.com/emerge/corporates/content/SME_EQUITY_L.csv', sme: true },
];
const SYMBOL_CHANGES = 'https://nsearchives.nseindia.com/content/equities/symbolchange.csv';
const NAME_CHANGES = 'https://nsearchives.nseindia.com/content/equities/namechange.csv';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export interface NseListing {
    symbol: string;
    name: string;
    isin: string;
    listedOn: Date | null;
    faceValue: number | null;
    sme: boolean;
}

export interface SymbolChange { name: string; from: string; to: string; on: Date | null }
export interface NameChange { symbol: string; from: string; to: string; on: Date | null }

export interface NseCorporateAction {
    symbol: string;
    comp: string;
    /** An ISIN on the main board; SME rows carry a numeric scrip code here instead. */
    isin: string;
    subject: string;
    exDate: string;
    series?: string;
    [key: string]: any;
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** "06-OCT-2008", "25-Sep-26" or "31-Jul-2026" -> Date (UTC midnight), or null. */
export function parseNseDay(s: string): Date | null {
    const m = (s || '').trim().match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2}|\d{4})$/);
    if (!m) return null;
    const mon = MONTHS.indexOf(m[2].toLowerCase());
    if (mon < 0) return null;
    const year = m[3].length === 2 ? 2000 + parseInt(m[3], 10) : parseInt(m[3], 10);
    return new Date(Date.UTC(year, mon, parseInt(m[1], 10)));
}

async function getText(url: string): Promise<string> {
    const res = await fetch(url, { headers: { 'User-Agent': NSE_UA }, signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(`${url} returned ${res.status}`);
    return res.text();
}

const lines = (text: string) => text.split(/\r?\n/).filter(l => l.trim());

/** Every company on the NSE main board and on Emerge (SME). */
export async function loadNseListings(): Promise<NseListing[]> {
    const out: NseListing[] = [];
    for (const list of LISTS) {
        const [head, ...rows] = lines(await getText(list.url));
        const header = head.split(',').map(h => h.trim().toUpperCase().replace(/\s+/g, '_'));
        const col = (name: string) => header.indexOf(name);
        for (const line of rows) {
            let cells = line.split(',').map(c => c.trim());
            // A company name with a comma in it (the files are unquoted): fold
            // the extra cells back into the name column.
            const extra = cells.length - header.length;
            if (extra > 0) cells = [cells[0], cells.slice(1, 2 + extra).join(','), ...cells.slice(2 + extra)];
            const isin = cells[col('ISIN_NUMBER')];
            if (!cells[0] || !isin || !/^IN[A-Z0-9]{10}$/.test(isin)) continue;
            const fv = parseFloat(cells[col('FACE_VALUE')]);
            out.push({
                symbol: cells[0].toUpperCase(),
                name: cells[col('NAME_OF_COMPANY')] || '',
                isin,
                listedOn: parseNseDay(cells[col('DATE_OF_LISTING')]),
                faceValue: Number.isFinite(fv) ? fv : null,
                sme: list.sme,
            });
        }
    }
    return out;
}

/** symbolchange.csv: "name,old symbol,new symbol,date", no header row. */
export async function loadSymbolChanges(): Promise<SymbolChange[]> {
    const out: SymbolChange[] = [];
    for (const line of lines(await getText(SYMBOL_CHANGES))) {
        const cells = line.split(',').map(c => c.trim());
        if (cells.length < 4) continue;
        const [from, to, on] = cells.slice(-3);
        if (!from || !to || /^SM_KEY_SYMBOL$/i.test(from)) continue;
        out.push({ name: cells.slice(0, -3).join(','), from: from.toUpperCase(), to: to.toUpperCase(), on: parseNseDay(on) });
    }
    return out;
}

/** namechange.csv: NCH_SYMBOL, NCH_PREV_NAME, NCH_NEW_NAME, NCH_DT. */
export async function loadNameChanges(): Promise<NameChange[]> {
    const out: NameChange[] = [];
    for (const line of lines(await getText(NAME_CHANGES)).slice(1)) {
        const cells = line.split(',').map(c => c.trim());
        // Unquoted file: a name containing a comma makes the split ambiguous, so skip it.
        if (cells.length !== 4 || !cells[0]) continue;
        out.push({ symbol: cells[0].toUpperCase(), from: cells[1], to: cells[2], on: parseNseDay(cells[3]) });
    }
    return out;
}

const ddmmyyyy = (d: Date) =>
    `${String(d.getUTCDate()).padStart(2, '0')}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${d.getUTCFullYear()}`;

/** Corporate actions (main board and SME) with ex-dates between two days, inclusive. */
export async function nseCorporateActions(from: Date, to: Date): Promise<NseCorporateAction[]> {
    const home = await fetch('https://www.nseindia.com/', { headers: { 'User-Agent': NSE_UA, 'Accept-Language': 'en-US,en;q=0.9' } });
    const cookie = (home.headers.getSetCookie?.() || []).map(c => c.split(';')[0]).join('; ');
    const out: NseCorporateAction[] = [];
    for (const index of ['equities', 'sme']) {
        const res = await fetch(`https://www.nseindia.com/api/corporates-corporateActions?index=${index}&from_date=${ddmmyyyy(from)}&to_date=${ddmmyyyy(to)}`, {
            headers: {
                'User-Agent': NSE_UA, Cookie: cookie, Accept: 'application/json',
                Referer: 'https://www.nseindia.com/companies-listing/corporate-filings-actions',
            },
        });
        if (!res.ok) throw new Error(`NSE corporate actions (${index}) returned ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) out.push(...data.map((a: any) => ({ ...a, index })));
        await sleep(1500);
    }
    return out;
}

// ── Symbol by ISIN, for the Screener lookup ────────────────────────────────
// Loaded once per process. A failure is remembered as an empty map so a
// Screener sweep never retries the download for every company.
let symbolByIsin: Promise<Map<string, string>> | null = null;

export async function nseSymbolForIsin(isin: string | null | undefined): Promise<string | null> {
    if (!isin) return null;
    if (!symbolByIsin) {
        symbolByIsin = loadNseListings()
            .then(rows => new Map(rows.map(r => [r.isin, r.symbol])))
            .catch(() => new Map<string, string>());
    }
    return (await symbolByIsin).get(isin) || null;
}
