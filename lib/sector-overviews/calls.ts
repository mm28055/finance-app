import type { SectorOverview, ValuationBlock } from './types';
import { liveValuation, type PriceCheck } from './live-valuation';

/** The call each note gives a company, read from its "Verdict: …" line on Tab 2. */
export type Call = 'own' | 'follow' | 'wait' | 'pass' | 'avoid';
export const CALLS: Call[] = ['own', 'follow', 'wait', 'pass', 'avoid'];

export interface CallInfo {
    call: Call;
    /** The company's key in its note (valuation inputs are keyed by it). */
    key: string;
    sector: string;
    /** The note (or group tab) the call is in. */
    noteTitle: string;
    valuation?: ValuationBlock;
    /** The quarter the note's research covers (e.g. "Q1 FY27") and the date it was last written. */
    asOfQuarter: string;
    lastUpdated: string;
}

/** Company name (lower case) → the note's call and where it lives, across every note and group tab. */
export function companyCallInfo(overviews: SectorOverview[]): Map<string, CallInfo> {
    const out = new Map<string, CallInfo>();
    const read = (note: SectorOverview, sector: string) => {
        for (const p of note.businesses?.profiles || []) {
            const m = (p.inShort || []).join(' ').match(/Verdict:\s*(own|follow|wait|pass|avoid)\b/i);
            if (m) out.set(p.company.trim().toLowerCase(), {
                call: m[1].toLowerCase() as Call, key: p.company, sector, noteTitle: note.title, valuation: note.valuation,
                asOfQuarter: note.asOfQuarter, lastUpdated: note.lastUpdated,
            });
        }
    };
    for (const ov of overviews) {
        if (ov.buckets?.length) ov.buckets.forEach(b => read(b.note, ov.sector));
        else read(ov, ov.sector);
    }
    return out;
}

/** Company name (lower case) → the note's call. */
export function companyCalls(overviews: SectorOverview[]): Map<string, Call> {
    return new Map([...companyCallInfo(overviews)].map(([k, v]) => [k, v.call]));
}

/** Today's price check for a company under its note's valuation inputs ('n/a' when not measured live). */
/** Change in market value since the note was written, as a fraction (0.12 = +12%). */
export function movedSinceNote(info: CallInfo | undefined, live: { marketCap?: number | null; peRatio?: number | null } | undefined): number | null {
    if (!info) return null;
    return liveValuation(info.key, info.valuation, live)?.moved ?? null;
}

export function livePriceCheck(info: Pick<CallInfo, 'key' | 'valuation'> | undefined, live: { marketCap?: number | null; peRatio?: number | null } | undefined): PriceCheck {
    if (!info) return 'n/a';
    return liveValuation(info.key, info.valuation, live)?.check ?? 'n/a';
}

/** Smallest change in market value since the note (as a fraction) that can count as drift. */
export const DRIFT_MOVE = 0.10;

/** The price check on the day the note was written (its fixed inputs, no live prices). */
export function writtenPriceCheck(info: CallInfo | undefined): PriceCheck {
    if (!info) return 'n/a';
    return liveValuation(info.key, info.valuation, undefined)?.check ?? 'n/a';
}

/**
 * Extreme drift: the price check has moved since the note was written, and against the
 * call — an "own" that has become stretched, or a "wait"/"pass" that has come to fit.
 * A call written knowing the price already fitted ("the price fits, but wait for the
 * FDA") is not drift. Returns the reason, or null.
 */
export function extremeDrift(call: Call, then: PriceCheck, now: PriceCheck, moved?: number | null): string | null {
    if (then === now || now === 'n/a' || then === 'n/a') return null;
    // A company sitting on the line flips on a small move; only a real move (10%+ in
    // market value since the note) counts as drift.
    if (moved !== undefined && (moved === null || Math.abs(moved) < DRIFT_MOVE)) return null;
    if (call === 'own' && now === 'Stretched') return `Call is own; the price check has moved from ${then.toLowerCase()} to stretched since the note`;
    if ((call === 'wait' || call === 'pass') && now === 'Fits') return `Call is ${call}; the price check has moved from ${then.toLowerCase()} to fits since the note`;
    // A follow waiting for a better price that now has it: a candidate for own.
    if (call === 'follow' && now === 'Fits') return `Call is follow; the price check has moved from ${then.toLowerCase()} to fits since the note — a possible upgrade to own`;
    return null;
}
