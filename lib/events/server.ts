// Server-only access to the results and earnings-call calendar written by scripts/sync-events.ts.
import store from './events.json';
import type { CompanyEvent, EventChip } from './types';
import { EVENT_CHIP_DAYS } from './types';

const ALL = (store as unknown as { events: CompanyEvent[] }).events;
const byDate = (a: CompanyEvent, b: CompanyEvent) => a.date.localeCompare(b.date) || a.company.localeCompare(b.company);
// India's date today.
const today = () => new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);

/** A company's dates from today to three weeks ahead, soonest first, for the marker on its row. */
export function getCompanyEventChips(company: string): EventChip[] | undefined {
    const from = today();
    const d = new Date(from + 'T00:00:00Z');
    d.setUTCDate(d.getUTCDate() + EVENT_CHIP_DAYS);
    const to = d.toISOString().slice(0, 10);
    const list = ALL.filter(e => e.company === company && e.date >= from && e.date <= to).sort(byDate)
        .map(({ kind, date, time }) => ({ kind, date, ...(time ? { time } : {}) }));
    return list.length ? list : undefined;
}

export function getAllEvents(): { updated: string; events: CompanyEvent[] } {
    return { updated: (store as { updated?: string }).updated || '', events: [...ALL].sort(byDate) };
}
