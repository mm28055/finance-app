// Changes in the notes' calls, recorded nightly by scripts/track-call-changes.ts.
import type { Call } from '../sector-overviews/calls';

export interface CallChange {
    /** The night the change was seen, ISO date (India). */
    date: string;
    /** Company name as the note keys it. */
    company: string;
    sector: string;
    /** null = newly covered (from) or no longer covered (to). */
    from: Call | null;
    to: Call | null;
    /** Closing price that day, ₹. */
    price: number | null;
    /** The note's verdict line; a review may replace it with a sharper one-line reason. */
    why?: string;
}

export interface CallSnapshot { date: string; calls: Record<string, { call: Call; sector: string }> }
export interface CallChangesStore { changes: CallChange[] }

/** Best to worst, for telling an upgrade from a downgrade. */
export const CALL_RANK: Record<Call, number> = { own: 0, follow: 1, wait: 2, pass: 3, avoid: 4 };
