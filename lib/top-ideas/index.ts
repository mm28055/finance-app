import data from './top-ideas.json';
import type { TopIdeas, IdeaCase } from './types';

export * from './types';

export const TOP_IDEAS = data as TopIdeas;

/** Years from `today` to the planned sale date (never under half a year, so a late reading stays sensible). */
export function yearsLeft(sellBy: string, today = new Date()): number {
    return Math.max(0.5, (new Date(sellBy).getTime() - today.getTime()) / (365.25 * 24 * 3600 * 1000));
}

/**
 * Return a year, %, from buying at `mcap` (₹cr) today and selling at FY30 profit × exit P/E on the
 * sale date. New shares issued before then shrink a holder's slice; dividends are added on top.
 */
export function caseReturn(c: IdeaCase, mcap: number | null | undefined, dilution: number, divYield: number, years: number): number | null {
    if (!mcap || mcap <= 0) return null;
    const exitValue = (c.fy30Profit * c.exitPe) / (1 + dilution);
    return (Math.pow(exitValue / mcap, 1 / years) - 1) * 100 + divYield;
}

/** Return a year, %, for a reserve-list company from its normal-case value at the sale date. */
export function exitValueReturn(exitValue: number, mcap: number | null | undefined, divYield: number, years: number): number | null {
    if (!mcap || mcap <= 0) return null;
    return (Math.pow(exitValue / mcap, 1 / years) - 1) * 100 + divYield;
}

/** Market value at which a normal-case value at the sale date earns `target`% a year (₹cr). */
export function valueForTarget(exitValue: number, divYield: number, years: number, target: number): number {
    return exitValue / Math.pow(1 + (target - divYield) / 100, years);
}
