// A three-way read on each AGM and special call, written nightly by scripts/sync-call-reads.ts and
// shown only in the Filings panel's Calls tab.
export interface CallRead {
    read: 'positive' | 'neutral' | 'concerning';
    /** One sentence: what changed since the last results call. */
    change: string;
    /** When it was written, ISO date. */
    on: string;
}
export interface CallReadsStore { reads: Record<string, CallRead> }
