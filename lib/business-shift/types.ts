// Companies whose business will look different in three years: what each is today, what it was three years
// ago, and what it could be by FY29, from management commentary and capex (research/business-shift/BRIEF.md).

export interface ShiftMixPart { segment: string; revenue: number; pct: number }
export interface ShiftMix { year: string; basis: string; total: number; parts: ShiftMixPart[] }

export interface BusinessShift {
    company: string;
    headline: string;
    now: string;
    future: string;
    segments: { name: string; plain: string }[];
    /** Three years ago, the last full year and my FY29 projection, on the same segments. */
    mix: ShiftMix[];
    assumptions: { segment: string; growth: string; why: string }[];
    managementAim: string | null;
    drivers: { kind: string; text: string; source: string }[];
    risks: string[];
    shift: 'transformational' | 'meaningful' | 'modest';
    confidence: 'high' | 'medium' | 'low';
    confidenceWhy: string;
    watch: { text: string; due: string }[];
    sources: { label: string; url: string }[];
    /** When this write-up was made (YYYY-MM-DD). */
    asOf?: string;
}

/** What a company row needs: the line that is growing, from its share now to its share in FY29. */
export interface ShiftChip { segment: string; from: number; to: number; shift: BusinessShift['shift']; headline: string }
