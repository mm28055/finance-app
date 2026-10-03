// Server-only access to the results written each night by scripts/sync-results.ts.
import store from './results.json';
import type { QuarterResult, ResultsStore } from './types';

const ALL = (store as unknown as ResultsStore).results;

/** Results by "<company>|<results date>", for the calendar's results rows. */
export function resultsByCompanyDate(): Map<string, QuarterResult> {
    return new Map(ALL.map(r => [`${r.company}|${r.resultsDate}`, r]));
}
