// Upcoming result dates and earnings-call dates, written each evening by scripts/sync-events.ts.
//   results - the board meeting called to approve the quarter's results (from the exchange's
//             board-meetings calendar; the results are filed that day);
//   call    - the earnings call, from the "schedule of meet" notice the company files.
export interface CompanyEvent {
    /** Company name exactly as stored in the database. */
    company: string;
    sector: string;
    kind: 'results' | 'call';
    /** The day it happens, ISO yyyy-mm-dd (India time). */
    date: string;
    /** For calls, the start time as the notice gives it, e.g. "4:00 pm". */
    time?: string;
    /** The period covered, e.g. "Q2 FY27", when the notice says. */
    quarter?: string;
    /** The exchange notice. */
    url?: string;
}

/** What the homepage carries per company: its upcoming dates, soonest first. */
export type EventChip = Pick<CompanyEvent, 'kind' | 'date' | 'time'>;

/** Past events are kept this long, so the calendar can show the last few weeks. */
export const EVENTS_KEEP_DAYS = 45;
/** The row marker shows a date this many days ahead. */
export const EVENT_CHIP_DAYS = 21;
