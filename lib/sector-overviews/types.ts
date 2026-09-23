/**
 * Hand-written, long-form sector overviews.
 *
 * These are deliberately NOT generated per page load. An overview is a research
 * note: it is written once against the company profiles plus outside reading,
 * committed to the repo, and carries its own `lastUpdated` so the reader can see
 * how stale it is. The numbers on the page come from the live company records —
 * only the judgement lives here.
 */

/** How a long-term investor should hold the name. Drives colour across the tab. */
export type Stance =
    | 'COMPOUNDER'   // structurally advantaged; the business improves with time
    | 'PRICED'       // good business, valuation is doing the work against you
    | 'SCALEUP'      // sound execution, ordinary economics; pay for delivery
    | 'TURNAROUND'   // numbers are broken but fixable; needs evidence first
    | 'CYCLICAL'     // earnings set by prices, not contracts
    | 'HARVEST'      // high returns, no growth; own for the cash, not the compounding
    | 'AVOID'        // structural problem, not a timing problem
    | 'DELISTED';    // no longer trades (merged or acquired); kept only while the dashboard still lists it

export const STANCE_CONFIG: Record<Stance, { label: string; blurb: string; pill: string; dot: string; hex: string }> = {
    COMPOUNDER: {
        label: 'Compounder',
        blurb: 'Structurally advantaged. Own it through the lumpy quarters.',
        pill: 'bg-emerald-100 text-emerald-700',
        dot: 'bg-emerald-500',
        hex: '#059669',
    },
    PRICED: {
        label: 'Quality, priced',
        blurb: 'The business is good. The price already knows.',
        pill: 'bg-[#D4E5F7] text-[#4A7AAF]',
        dot: 'bg-[#6B9FCC]',
        hex: '#4A7AAF',
    },
    SCALEUP: {
        label: 'Scale-up',
        blurb: 'Real execution, ordinary economics. Pay for delivery, not promise.',
        pill: 'bg-violet-100 text-violet-700',
        dot: 'bg-violet-500',
        hex: '#7C3AED',
    },
    TURNAROUND: {
        label: 'Turnaround',
        blurb: 'Broken numbers, fixable business. Wants proof before size.',
        pill: 'bg-amber-100 text-amber-700',
        dot: 'bg-amber-500',
        hex: '#D97706',
    },
    CYCLICAL: {
        label: 'Cyclical',
        blurb: 'Earnings are set by the cycle, not by the contract. Mind the entry price.',
        pill: 'bg-slate-200 text-slate-600',
        dot: 'bg-slate-400',
        hex: '#64748B',
    },
    HARVEST: {
        label: 'Harvest',
        blurb: 'High returns, no growth. Own it for the cash, not the compounding.',
        pill: 'bg-teal-100 text-teal-700',
        dot: 'bg-teal-500',
        hex: '#0D9488',
    },
    AVOID: {
        label: 'Avoid',
        blurb: 'The record is the record. Needs a different company, not a better quarter.',
        pill: 'bg-rose-100 text-rose-600',
        dot: 'bg-rose-400',
        hex: '#E11D48',
    },
    DELISTED: {
        label: 'Delisted',
        blurb: 'No longer trades. Listed here only because the dashboard still carries it.',
        pill: 'bg-gray-100 text-gray-500',
        dot: 'bg-gray-300',
        hex: '#9CA3AF',
    },
};

/**
 * A structured block rendered inside a section, after its prose.
 *  - `ranking`   the ranked company table plus `takeaways`
 *  - `metrics`   the quarter-by-quarter grid built from `metrics`
 *  - `snapshots` short company cards, grouped by `CompanyVerdict.segment`
 *  - `moat`      the comparative grading table built from `moat`
 *  - `scatter`   return on capital against P/E, from live figures
 */
export type SectionEmbed = 'ranking' | 'metrics' | 'snapshots' | 'moat' | 'scatter';

/** A plain comparison table. Cells honour `**bold**`; the first column is the row label. */
export interface DataTable {
    caption?: string;
    columns: string[];
    rows: string[][];
    note?: string;
}

export interface OverviewSection {
    heading: string;
    /** Paragraphs. `**bold**` is the only markup honoured. */
    body: string[];
    /** Optional labelled points rendered under the paragraphs. */
    points?: { label: string; text: string }[];
    /** Comparison tables, rendered after the points. */
    tables?: DataTable[];
    /** A structured block, rendered last in the section unless `embedFirst`. */
    embed?: SectionEmbed;
    /** Render the embed straight after the opening paragraphs, before points and tables. */
    embedFirst?: boolean;
}

export interface CompanyVerdict {
    /** Must match `Company.name` exactly so the card can bind to live financials. */
    company: string;
    stance: Stance;
    /**
     * What the business is and where it sits in the value chain. One line in the
     * original format; three or four lines in a ranked (`format: 'ranked'`) note,
     * where it is the company snapshot.
     */
    what: string;
    /** The long-term view. In a ranked note, the one-paragraph reason for its rank. */
    view: string;
    /** The single thing that would break — or make — the case. */
    watch: string;
    /** Position in the ranking, 1 = most attractive. Ranked notes only. */
    rank?: number;
    /** Which part of the sector it belongs to; snapshots are grouped by this. */
    segment?: string;
}

/**
 * One metric across periods for every company, e.g. operating margin by quarter.
 * Only figures stated in filings or calls go in; anything not stated is `null`
 * and shows as a gap. Nothing is estimated.
 */
export interface MetricSeries {
    key: string;
    label: string;
    unit: '%' | 'cr' | 'days';
    /** Column labels, oldest first — "Q1 FY26" or "FY24". */
    periods: string[];
    /** `sequential` shades by size; `diverging` centres on zero (growth rates). */
    scale: 'sequential' | 'diverging';
    /** Shown beside the legend so a reader knows which direction is good. */
    lowerIsBetter?: boolean;
    /** Where the figures come from. */
    source: string;
    /** Caveats specific to this metric, shown under the grid. */
    note?: string;
    /** Company name → one value per period (null = not stated). */
    values: Record<string, (number | null)[]>;
    /** Company name → why a gap or odd value exists, shown on hover. */
    cellNotes?: Record<string, string>;
}

export type MoatGrade = 'A' | 'B' | 'C' | 'D' | '-';

export interface MoatSource {
    key: string;
    label: string;
    /** What the grade measures, in one line. */
    description: string;
}

export interface MoatRow {
    company: string;
    /** Source key → grade plus a few words of justification. */
    grades: Record<string, { grade: MoatGrade; note: string }>;
    trend: 'widening' | 'stable' | 'narrowing';
    /** The evidence for the trend, ideally from the call. */
    trendNote: string;
}

/** One slice of a revenue or order-book split, as a percentage of the whole. */
export interface MixPart {
    label: string;
    share: number;
}

/**
 * A company's business model, for the "what the companies do" tab: what it
 * sells, where the money comes from, who buys, how hard it is to make, and
 * why customers stay. Figures come from filings, presentations and calls.
 */
export interface BusinessProfile {
    /** Must match `Company.name` exactly. */
    company: string;
    /** One line: what the business is. */
    tagline: string;
    /** Latest full-year revenue as filed (Screener), e.g. "₹3,951cr (FY26, consolidated)". */
    revenue: string;
    products: { name: string; text: string }[];
    /** Where the revenue comes from, in words. */
    revenueText: string;
    /** Up to two stacked bars, e.g. by business and by geography. */
    mixes?: { caption: string; parts: MixPart[]; note?: string }[];
    customers: string[];
    difficulty: { level: 'Very high' | 'High' | 'Medium' | 'Low'; text: string };
    moat: string;
}

export interface SectorOverview {
    /** Must match `Company.sector`. */
    sector: string;
    title: string;
    standfirst: string;
    /** ISO date the note was last rewritten. */
    lastUpdated: string;
    /** The reporting quarter the judgement was formed against. */
    asOfQuarter: string;
    /**
     * `ranked` notes follow the ten-part structure: recommendation, charts,
     * sector, snapshots, moat, margins, growth, risks, valuation, summary. The
     * page then draws the ranking, grid and moat table from the fields below
     * and does not render the older company cards.
     */
    format?: 'ranked';
    /** The five to seven points that matter most. Rendered with the `ranking` embed. */
    takeaways?: string[];
    metrics?: MetricSeries[];
    moat?: { sources: MoatSource[]; rows: MoatRow[] };
    /** Show the moat grid as letters only; the reasons live in the business tab. */
    moatCompact?: boolean;
    /**
     * The second tab, "What the companies do": a primer on the products and
     * how each business sells, then one business-model profile per company.
     * When present, the ranking drops its "what it does" line.
     */
    businesses?: { intro: OverviewSection[]; profiles: BusinessProfile[] };
    sections: OverviewSection[];
    verdicts: CompanyVerdict[];
    /** The closing opinion. Rendered after the company cards, set apart from the note. */
    closing?: {
        heading: string;
        body: string[];
        /** Pulled out and shown large — the one line to remember. */
        bottomLine: string;
    };
    sources: { label: string; url: string }[];
}
