// The Top 12 page: twelve researched ideas for a 25%-a-year, 3–4 year portfolio, plus a short
// reserve list. Written by hand (by Claude) from a deep dive of 52 companies; the page
// recomputes each return from today's market value, so the numbers move with the price.

/** High, Medium and Starter clear or nearly clear the target today; 'On a dip' is a business worth owning whose
 *  normal case falls short at today's price, so it is bought only below the value the page shows. */
export type Conviction = 'High' | 'Medium' | 'Starter' | 'On a dip';

export interface Scores {
    balanceSheet: number;
    earningsQuality: number;
    management: number;
    moatRunway: number;
}

export interface IdeaCase {
    /** Profit after tax in FY30, ₹cr. */
    fy30Profit: number;
    /** P/E the market pays on FY30 profit when we sell (March 2030). */
    exitPe: number;
    /** Return a year when picked, %, at the market value on the pick date. */
    annualReturn: number;
}

export interface Idea {
    company: string;
    sector: string;
    /** Broad group used for the 40% limit (several site sectors can share one theme). */
    theme: string;
    conviction: Conviction;
    /** Market value on the pick date, ₹cr. */
    mcapAtPick: number;
    /** Today's clean profit base the path starts from. */
    profitBase: { label: string; value: number; note?: string };
    base: IdeaCase & { profitCagr: number; growthAfterFy30: number; exitPeWhy: string };
    bad: IdeaCase & { what: string };
    /** New shares expected before the sale, as a fraction of today's (0.1 = 10% more shares). */
    dilution: number;
    /** Dividend yield, % a year. */
    divYield: number;
    tailRisk?: string;
    scores: Scores;
    scoreWhy: Record<keyof Scores, string>;
    oneLine: string;
    whyOwn: string[];
    mustGoRight: string[];
    breaksIt: string[];
    worstFacts: string[];
    nextChecks: string[];
}

export interface BenchIdea {
    company: string;
    sector: string;
    theme: string;
    /** Why it is not in the twelve today. */
    why: string;
    mcapAtPick: number;
    /** Normal-case return a year when picked, %. */
    baseReturn: number;
    /** Normal-case value of today's shares at the sale date (FY30 profit × exit P/E, net of new shares), ₹cr. */
    exitValue: number;
    divYield: number;
    /** Set when price is the main obstacle: the page then shows the market value at which it would qualify. */
    priceIsTheIssue?: boolean;
}

export interface TopIdeas {
    /** Date the list was last chosen or changed. */
    asOf: string;
    /** The holding period the returns assume. */
    sellBy: string;
    target: number;
    limits: { stock: number; theme: number };
    /** How the list was built, in plain words. */
    method: string[];
    ideas: Idea[];
    bench: BenchIdea[];
    /** Dated log of every change to the list, newest first. */
    changes: { date: string; text: string }[];
}
