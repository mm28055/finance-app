import { ValuationBlock } from './types';

/** How far the price may move since the note was written before the card asks for a fresh look. */
export const MOVE_FLAG = 0.15;

export type PriceCheck = 'Fits' | 'Full' | 'Stretched' | 'n/a';

export interface LiveValuation {
    pe: number | null;
    evEbitda: number | null;
    netDebtToEbitda: number | null;
    /** Live market value ÷ net worth (lenders). */
    pb: number | null;
    /** Growth a year the live P/E needs, %. */
    needed: number | null;
    /** My base-case growth, %. */
    mine: number | null;
    check: PriceCheck;
    /** Change in market value since the note was written, as a fraction (0.18 = +18%). */
    moved: number | null;
}

/**
 * Earnings growth a year needed to earn about 12% a year while the P/E drifts to 18x over ten
 * years: (1 + g)^10 = P/E × 0.1726.
 */
export function growthNeeded(pe: number | null | undefined): number | null {
    if (!pe || pe <= 0) return null;
    return (Math.pow(pe * 0.1726, 0.1) - 1) * 100;
}

/**
 * Today's valuation from the live market value and P/E plus the note's fixed inputs.
 * The check judges the price only: green when my estimate is within two points of what the
 * price needs (or above it), amber when it falls short by up to six points, red beyond that.
 * A loss-making company (trailing operating profit not positive) gets no P/E and no check.
 */
export function liveValuation(
    company: string,
    block: ValuationBlock | undefined,
    live: { marketCap?: number | null; peRatio?: number | null } | undefined,
): LiveValuation | null {
    const input = block?.inputs[company];
    if (!block || !input) return null;
    const mcap = live?.marketCap ?? input.mcapAtWriting;
    const lossMaking = !!input.lossMaking || (input.ttmEbitda !== null && input.ttmEbitda <= 0);
    const pe = lossMaking ? null : (live?.peRatio ?? input.peAtWriting);
    const ev = mcap !== null && mcap !== undefined ? mcap + (input.netDebt ?? 0) : null;
    const evEbitda = ev !== null && input.ttmEbitda && input.ttmEbitda > 0 ? ev / input.ttmEbitda : null;
    const needed = growthNeeded(pe);
    const mine = block.myGrowth[company] ?? null;
    let check: PriceCheck = 'n/a';
    if (needed !== null && mine !== null) {
        const gap = mine - needed;
        check = gap >= -2 ? 'Fits' : gap >= -6 ? 'Full' : 'Stretched';
    }
    const moved = mcap && input.mcapAtWriting ? mcap / input.mcapAtWriting - 1 : null;
    return {
        pe: pe && pe > 0 ? pe : null,
        evEbitda,
        netDebtToEbitda: input.netDebt !== null && input.ttmEbitda && input.ttmEbitda > 0 ? input.netDebt / input.ttmEbitda : null,
        pb: mcap && input.bookValue && input.bookValue > 0 ? mcap / input.bookValue : null,
        needed,
        mine,
        check,
        moved,
    };
}
