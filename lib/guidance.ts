// -----------------------------------------------------------------------------
// Forward revenue guidance: one place for the threshold and the midpoint rule.
//
// Managements guide in ranges ("15-20% for FY27"), so a single number is the
// wrong shape to store. We keep both ends and score the MIDPOINT against the
// threshold — 15-20% midpoints to 17.5% and does NOT clear a 20% bar, which is
// the deliberate, conservative reading.
//
// Both STATED and IMPLIED guidance count towards the threshold. Implied numbers
// are an inference, so `guidanceQuote` is always carried alongside: a company
// that goes green should be traceable back to the sentence that made it green.
// -----------------------------------------------------------------------------

/** Growth at or above this (in %) marks a company as guiding for high growth. */
export const GUIDANCE_GROWTH_THRESHOLD = 20;

export type GuidanceBasis = 'STATED' | 'IMPLIED' | 'NONE';

export interface GuidanceRange {
    min: number | null;
    max: number | null;
    basis?: string | null;
}

/**
 * Midpoint of a guided range, or null when there is no usable number.
 *
 * A single figure ("25% growth") arrives with min === max and midpoints to
 * itself. A one-sided guide ("at least 20%") is stored with only one end set,
 * and that end is used as-is rather than being averaged against nothing.
 */
export function guidanceMidpoint(g: GuidanceRange | null | undefined): number | null {
    if (!g) return null;
    if (g.basis === 'NONE') return null;
    const { min, max } = g;
    if (min !== null && min !== undefined && max !== null && max !== undefined) {
        return (min + max) / 2;
    }
    // `?? null` rather than `|| null`: a guided 0% is a real answer, not a miss.
    return min ?? max ?? null;
}

/** True when the guided midpoint clears the threshold. */
export function meetsGuidanceThreshold(g: GuidanceRange | null | undefined): boolean {
    const mid = guidanceMidpoint(g);
    return mid !== null && mid >= GUIDANCE_GROWTH_THRESHOLD;
}

/** "15–20%" / "25%" / null — for tooltips and the review table. */
export function formatGuidanceRange(g: GuidanceRange | null | undefined): string | null {
    if (!g || g.basis === 'NONE') return null;
    const { min, max } = g;
    if (min === null || min === undefined) return max !== null && max !== undefined ? `${max}%` : null;
    if (max === null || max === undefined || max === min) return `${min}%`;
    return `${min}–${max}%`;
}
