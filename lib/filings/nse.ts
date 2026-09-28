// -----------------------------------------------------------------------------
// NSE corporate-announcements feed — shared by the daily filings digest
// (scripts/sync-filings.ts) and the exchange transcript sync
// (scripts/sync-exchange-transcripts.ts).
//
// NSE's API refuses requests without the cookies its home page sets, so the
// home page is fetched first and its cookies are replayed on every feed call.
// Our companies are matched on `sm_isin` (= Company.isin), never on name.
// -----------------------------------------------------------------------------

export const NSE_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

/** One row of the feed. Only the fields we read are typed. */
export interface NseAnnouncement {
    /** NSE category, e.g. "Analysts/Institutional Investor Meet/Con. Call Updates". */
    desc: string;
    /** Subject line — often just "... has informed the Exchange about Transcript". */
    attchmntText?: string;
    /** Link to the filed PDF on nsearchives.nseindia.com. */
    attchmntFile?: string;
    /** Filing time, "25-Sep-2026 18:23:48" (IST). */
    an_dt: string;
    sm_name: string;
    sm_isin: string;
    symbol?: string;
    [key: string]: any;
}

async function nseCookie(): Promise<string> {
    const home = await fetch('https://www.nseindia.com/', { headers: { 'User-Agent': NSE_UA, 'Accept-Language': 'en-US,en;q=0.9' } });
    return (home.headers.getSetCookie?.() || []).map(c => c.split(';')[0]).join('; ');
}

/** Every announcement (main board and SME) filed between two DD-MM-YYYY dates, inclusive. */
export async function nseAnnouncements(from: string, to: string): Promise<NseAnnouncement[]> {
    const cookie = await nseCookie();
    const out: NseAnnouncement[] = [];
    for (const index of ['equities', 'sme']) {
        const res = await fetch(`https://www.nseindia.com/api/corporate-announcements?index=${index}&from_date=${from}&to_date=${to}`, {
            headers: { 'User-Agent': NSE_UA, Cookie: cookie, Referer: 'https://www.nseindia.com/companies-listing/corporate-filings-announcements' },
        });
        if (!res.ok) throw new Error(`NSE ${index} feed returned ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) out.push(...data);
        await sleep(1500);
    }
    return out;
}

/**
 * ISINs of every company listed on NSE (main board and Emerge SME), from NSE's
 * own published equity lists. Used to tell which of our companies will never
 * appear in the announcements feed (BSE-only listings).
 */
export async function nseListedIsins(): Promise<Set<string>> {
    const lists = [
        'https://nsearchives.nseindia.com/content/equities/EQUITY_L.csv',
        'https://nsearchives.nseindia.com/emerge/corporates/content/SME_EQUITY_L.csv',
    ];
    const isins = new Set<string>();
    for (const url of lists) {
        const res = await fetch(url, { headers: { 'User-Agent': NSE_UA } });
        if (!res.ok) throw new Error(`NSE equity list ${url} returned ${res.status}`);
        for (const m of (await res.text()).matchAll(/\bIN[A-Z0-9]{10}\b/g)) isins.add(m[0]);
    }
    return isins;
}

/** "25-Sep-2026 18:23:48" (IST) -> Date, or null. */
export function parseNseDate(s: string): Date | null {
    const m = (s || '').match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
    if (!m) return null;
    const mon = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].indexOf(m[2].toLowerCase());
    if (mon < 0) return null;
    // IST is UTC+5:30.
    const utc = Date.UTC(+m[3], mon, +m[1], +(m[4] || 12), +(m[5] || 0), +(m[6] || 0)) - 330 * 60000;
    return new Date(utc);
}
