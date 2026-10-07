// Server-only access to the business-shift write-ups (lib/business-shift/shifts.json, merged from
// research/business-shift/out by scripts/merge-business-shift.ts).
import store from './shifts.json';
import type { BusinessShift, ShiftChip } from './types';

const ALL = (store as unknown as { shifts: BusinessShift[] }).shifts;
const BY_COMPANY = new Map(ALL.map(s => [s.company, s]));

export function shiftFor(company: string): BusinessShift | undefined {
    return BY_COMPANY.get(company);
}

export function allShifts(): BusinessShift[] {
    return ALL;
}

/** The line whose share grows most between the last full year and FY29, for the row's marker. */
export function shiftChipFor(company: string): ShiftChip | undefined {
    const s = BY_COMPANY.get(company);
    if (!s || s.shift === 'modest') return undefined;
    const now = s.mix.filter(m => !/E$/.test(m.year)).pop();
    const later = s.mix.find(m => /E$/.test(m.year));
    if (!now || !later) return undefined;
    let best: ShiftChip | undefined;
    for (const p of later.parts) {
        const from = now.parts.find(q => q.segment === p.segment)?.pct ?? 0;
        if (!best || p.pct - from > best.to - best.from) best = { segment: p.segment, from, to: p.pct, shift: s.shift, headline: s.headline };
    }
    return best;
}
