// Tracked expectations from the sector notes ("Q2 margin back to 14–15%", "pledge released"),
// each settled when its quarter's results arrive: numeric ones by the daily job
// (scripts/check-checkpoints.ts) from filed results, the rest by the weekly Claude review.
// Stored in lib/checkpoints/checkpoints.json so both can update it and the site can read it.
import store from './checkpoints.json';
import type { Checkpoint } from './types';

export * from './types';

export const CHECKPOINTS = (store as { checkpoints: Checkpoint[] }).checkpoints;

export function checkpointsFor(company: string): Checkpoint[] {
    const key = company.trim().toLowerCase();
    return CHECKPOINTS.filter(c => c.company.trim().toLowerCase() === key);
}
