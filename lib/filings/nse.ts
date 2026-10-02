// -----------------------------------------------------------------------------
// NSE corporate-announcements and insider-trading feeds — shared by the daily
// filings digest (scripts/sync-filings.ts) and the exchange transcript sync
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

// -----------------------------------------------------------------------------
// Insider-trading disclosures (SEBI PIT Reg 7(2)): promoters, directors and
// officers must report their trades within two trading days. Since May 2026 NSE
// publishes these only as XBRL filings: `corporates-pit-gg` lists the filings
// and each one's XBRL file carries the numbers. (The older `corporates-pit`
// feed, with the numbers inline, stopped on 2 May 2026.)
// -----------------------------------------------------------------------------

/** One insider-trading filing in NSE's list. */
export interface NsePitFiling {
    appId: string;
    /** "28-Sep-2026 12:23:20" (IST). */
    broadcastDateTime: string;
    companyName: string;
    symbol: string;
    /** "Regulation 7 (2)" for trades; other PIT regulations also appear. */
    regulation: string;
    /** "Original" or "Revision". */
    typeOfSubmission?: string;
    /** Human-readable copy of the filing. */
    ixbrl?: string;
    /** Machine-readable XBRL file with the numbers. */
    xmlFileName?: string;
    [key: string]: any;
}

/** Every insider-trading filing (main board and SME) between two DD-MM-YYYY dates, inclusive. */
export async function nseInsiderFilings(from: string, to: string): Promise<NsePitFiling[]> {
    const cookie = await nseCookie();
    const out: NsePitFiling[] = [];
    for (const index of ['equities', 'sme']) {
        const res = await fetch(`https://www.nseindia.com/api/corporates-pit-gg?index=${index}&from_date=${from}&to_date=${to}`, {
            headers: { 'User-Agent': NSE_UA, Cookie: cookie, Referer: 'https://www.nseindia.com/companies-listing/corporate-filings-insider-trading' },
        });
        if (!res.ok) throw new Error(`NSE insider-trading ${index} feed returned ${res.status}`);
        const data = await res.json();
        const rows = Array.isArray(data) ? data : data?.data;
        if (Array.isArray(rows)) out.push(...rows);
        await sleep(1500);
    }
    return out;
}

/** One person's trade inside an insider-trading filing. Percentages are of the company's shares (0-100). */
export interface PitTrade {
    /** "Promoters", "Promoter Group", "Director", "Key Managerial Personnel", "Other", ... */
    category: string;
    person: string;
    /** "Equity", "Warrants", ... */
    instrument: string;
    /** "Buy", "Sell", "Pledge", "Pledge Revoke", "Invocation of pledge", ... as filed. */
    transactionType: string;
    /** "Market Sale", "Pledge Creation", "Inter-se-Transfer", "Gift", "ESOP", ... as filed. */
    mode: string;
    sharesBefore: number | null;
    pctBefore: number | null;
    shares: number | null;
    /** Rupees, as filed (may be 0 or missing for pledges). */
    value: number | null;
    sharesAfter: number | null;
    pctAfter: number | null;
    /** yyyy-mm-dd */
    fromDate: string;
    toDate: string;
}

export interface PitDisclosure {
    isin: string;
    symbol: string;
    company: string;
    regulation: string;
    revised: boolean;
    trades: PitTrade[];
}

/**
 * Reads the numbers out of one insider-trading XBRL file. Returns null if the
 * file cannot be fetched. The XBRL states holdings as fractions (0.0065 = 0.65%);
 * they are returned here as percentages. A few filers type the percentage itself,
 * so callers should sanity-check against the company's share count.
 */
export async function nsePitDisclosure(xmlUrl: string): Promise<PitDisclosure | null> {
    let xml: string;
    try {
        const res = await fetch(xmlUrl, { headers: { 'User-Agent': NSE_UA } });
        if (!res.ok) return null;
        xml = await res.text();
    } catch {
        return null;
    }
    const byCtx = new Map<string, Record<string, string>>();
    for (const m of xml.matchAll(/<in-bse-co:(\w+)\s+contextRef="([^"]+)"[^>]*>([^<]*)<\/in-bse-co:\1>/g)) {
        const ctx = byCtx.get(m[2]) || {};
        ctx[m[1]] = m[3].trim();
        byCtx.set(m[2], ctx);
    }
    const head = byCtx.get('MainI') || {};
    const num = (s?: string) => { const n = parseFloat(String(s ?? '').replace(/,/g, '')); return Number.isFinite(n) ? n : null; };
    const pct = (s?: string) => { const n = num(s); return n === null ? null : n * 100; };
    const trades: PitTrade[] = [];
    for (const [ctx, f] of byCtx) {
        if (ctx === 'MainI' || !f.NameOfThePerson) continue;
        trades.push({
            category: f.CategoryOfPerson || '',
            person: f.NameOfThePerson,
            instrument: f.TypeOfInstrument || '',
            transactionType: f.SecuritiesAcquiredOrDisposedTransactionType || '',
            mode: f.ModeOfAcquisitionOrDisposal || '',
            sharesBefore: num(f.SecuritiesHeldPriorToAcquisitionOrDisposalNumberOfSecurity),
            pctBefore: pct(f.SecuritiesHeldPriorToAcquisitionOrDisposalPercentageOfShareholding),
            shares: num(f.SecuritiesAcquiredOrDisposedNumberOfSecurity),
            value: num(f.SecuritiesAcquiredOrDisposedValueOfSecurity),
            sharesAfter: num(f.SecuritiesHeldPostAcquistionOrDisposalNumberOfSecurity),
            pctAfter: pct(f.SecuritiesHeldPostAcquistionOrDisposalPercentageOfShareholding),
            fromDate: f.DateOfAllotmentAdviceOrAcquisitionOfSharesOrSaleOfSharesSpecifyFromDate || '',
            toDate: f.DateOfAllotmentAdviceOrAcquisitionOfSharesOrSaleOfSharesSpecifyToDate || '',
        });
    }
    return {
        isin: head.ISINCode || '',
        symbol: head.Symbol || '',
        company: head.NameOfTheCompany || '',
        regulation: head.DisclosureUnderRegulation || '',
        revised: /^true$/i.test(head.RevisedFilling || ''),
        trades,
    };
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

// -----------------------------------------------------------------------------
// Board-meetings calendar: every listed company must tell the exchange in advance
// when its board will meet, and why. The meetings called to approve results give
// each company's result date (scripts/sync-events.ts).
// -----------------------------------------------------------------------------

/** One row of the board-meetings calendar. Only the fields we read are typed. */
export interface NseBoardMeeting {
    bm_symbol: string;
    /** Meeting date, "13-Nov-2026". */
    bm_date: string;
    bm_purpose: string;
    /** "... to consider and approve the Unaudited Financial results ... Quarterly ended September 2026." */
    bm_desc: string;
    sm_name: string;
    sm_isin: string;
    attachment?: string;
    [key: string]: any;
}

/** Board meetings (main board and SME) dated between two DD-MM-YYYY dates, inclusive. */
export async function nseBoardMeetings(from: string, to: string): Promise<NseBoardMeeting[]> {
    const cookie = await nseCookie();
    const out: NseBoardMeeting[] = [];
    for (const index of ['equities', 'sme']) {
        const res = await fetch(`https://www.nseindia.com/api/corporate-board-meetings?index=${index}&from_date=${from}&to_date=${to}`, {
            headers: { 'User-Agent': NSE_UA, Cookie: cookie, Referer: 'https://www.nseindia.com/companies-listing/corporate-filings-board-meetings' },
        });
        if (!res.ok) throw new Error(`NSE ${index} board-meetings feed returned ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) out.push(...data);
        await sleep(1500);
    }
    return out;
}
