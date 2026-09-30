// A material exchange filing, summarised in plain words. Routine filings
// (trading-window closures, newspaper notices, AGM paperwork, ESOP allotments,
// investor-meet schedules) are filtered out before anything lands here.
export type FilingTone = 'good' | 'watch' | 'info';

export interface MaterialFiling {
    /** Company name exactly as stored in the database. */
    company: string;
    sector: string;
    /** Filing date, ISO yyyy-mm-dd. */
    date: string;
    /** Short category, e.g. 'Order win', 'Fund-raise', 'Governance'. */
    category: string;
    /** good = helps the case, watch = a risk or red flag, info = worth knowing. */
    tone: FilingTone;
    headline: string;
    /** Two or three sentences: what happened and why it matters. */
    summary: string;
    /** The official filing on NSE or BSE. */
    url: string;
    /** Whether it can move the share price (lib/filings/impact.ts), and why in a few words. */
    impact?: 'high' | 'normal';
    impactWhy?: string;
}

/** What the homepage carries per company: enough for the chip and its hover. */
export type FilingHeadline = Pick<MaterialFiling, 'date' | 'tone' | 'headline'>;

export interface SectorFilingsResponse {
    sector: string;
    from: string;
    to: string;
    companiesInSector: number;
    filings: MaterialFiling[];
}

/** Windows agreed with the owner: chip, hover and company card show three months; the sector panel one month. */
export const COMPANY_FILING_DAYS = 92;
export const SECTOR_FILING_DAYS = 31;
