// A quarter's results as read the night they come out, with a short view on them, written by
// scripts/sync-results.ts and shown in the calendar under the company's results date.

export interface ResultRow {
    /** 'Revenue', 'Operating profit', 'Operating margin', 'Net profit' (lenders: financing profit and margin). */
    label: string;
    /** ₹cr, or % for the margin row. */
    now: number | null;
    yearAgo: number | null;
    prev: number | null;
    /** Growth in %, or the change in percentage points for the margin row; null when not meaningful. */
    yoy: number | null;
    qoq: number | null;
    unit: 'cr' | '%';
}

export type ResultVerdict = 'ahead' | 'in line' | 'behind' | 'mixed';

export interface ResultCheck {
    /** The expectation, as the note or the last call put it. */
    text: string;
    status: 'met' | 'missed' | 'unclear';
    why: string;
}

export interface QuarterResult {
    /** Company name exactly as stored in the database. */
    company: string;
    sector: string;
    /** e.g. "Q2 FY27" (or "H1 FY27" for half-yearly reporters). */
    quarter: string;
    /** The results date from the calendar, ISO yyyy-mm-dd. */
    resultsDate: string;
    /** When the figures were read, ISO date. */
    readOn: string;
    view: 'consolidated' | 'standalone';
    /** Screener's column labels for the three periods compared. */
    periods: { now: string; yearAgo: string | null; prev: string | null };
    rows: ResultRow[];
    /** Set when other income makes up a large part of profit before tax, so profit growth overstates the business. */
    oneOff?: string;
    /** The overnight view (Gemini), judged against guidance, the note and the tracked expectations. */
    take?: { verdict: ResultVerdict; text: string; checks: ResultCheck[]; on: string };
    /** What the earnings call added, once it has been analysed. */
    call?: { text: string; on: string };
    /** Set in the weekly review once Claude has read the result (and changed the note if needed). */
    reviewed?: { on: string; text?: string };
}

export interface ResultsStore {
    updated: string;
    results: QuarterResult[];
}

/** Results are kept this long. */
export const RESULTS_KEEP_DAYS = 120;
