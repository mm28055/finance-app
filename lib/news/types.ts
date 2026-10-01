// "Why it moved" and market/policy news per company, written each evening by
// scripts/sync-market-news.ts. Three kinds of entry:
//   move   - the share moved sharply that day (7% or more, or pinned at its price limit), with the
//            reason found for it (its own filing, a bulk/block deal, news, a sector or policy event);
//   policy - a regulator, government or market event that directly changes this company's sales or
//            profit (a duty, a ban, a commission cap), whether or not the price has moved yet;
//   holder - a fund, institution or large investor changing its stake, as reported by the papers
//            before the exchange disclosure is on record (the filings job records the disclosure).
// Deliberately strict: an entry only shows the dot (`dot: true`) when a specific cause was found
// (move) or the effect is direct and meaningful (policy). A move with no clear reason is recorded
// quietly.
export type NewsTone = 'good' | 'watch' | 'info';

export interface NewsItem {
    /** Stable id: date|company|kind|short key. */
    id: string;
    /** Company name exactly as stored in the database. */
    company: string;
    sector: string;
    /** Trading day (move) or the day the event was reported (policy), ISO yyyy-mm-dd. */
    date: string;
    kind: 'move' | 'policy' | 'holder';
    /** good = helps the company, watch = hurts it, info = neutral or unexplained. */
    tone: NewsTone;
    /** One line: what happened. */
    headline: string;
    /** One or two sentences: why it matters for this company. */
    summary: string;
    /** The day's price change in percent (moves only). */
    pct?: number;
    /** Where the reason came from. */
    reason?: 'filing' | 'deal' | 'news' | 'policy' | 'sector' | 'none';
    /** The article, filing or exchange page behind it. */
    url?: string;
    /** Publisher or source name, e.g. "Economic Times", "NSE bulk deals". */
    source?: string;
    /** Whether the company card shows the "something new" dot for it. */
    dot: boolean;
}

/** What the homepage carries per company: the newest dot-worthy entry of the last week, for the row marker. */
export interface NewsFlag { id: string; date: string; headline: string; tone: NewsTone }

/** Entries stay a year, like the filings. */
export const NEWS_KEEP_DAYS = 366;
/** An entry counts as "new" (dot, row marker) for this many days, until opened on that device. */
export const NEWS_NEW_DAYS = 7;

/** A day's move that calls for a reason. */
export const MOVE_PCT = 7;
