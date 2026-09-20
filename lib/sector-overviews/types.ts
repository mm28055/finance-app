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
    | 'AVOID';       // structural problem, not a timing problem

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
};

export interface OverviewSection {
    heading: string;
    /** Paragraphs. `**bold**` is the only markup honoured. */
    body: string[];
    /** Optional labelled points rendered under the paragraphs. */
    points?: { label: string; text: string }[];
}

export interface CompanyVerdict {
    /** Must match `Company.name` exactly so the card can bind to live financials. */
    company: string;
    stance: Stance;
    /** One line: what the business actually is, stripped of the pitch. */
    what: string;
    /** The long-term view, in two or three sentences. */
    view: string;
    /** The single thing that would break — or make — the case. */
    watch: string;
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
