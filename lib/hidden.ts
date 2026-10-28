// Hidden companies: kept out of the everyday view (dashboard, calendar, filings, scorecard,
// shifts) but still tracked in full every night. The "Show hidden" switch in the sidebar sets a
// cookie that brings them all back. A company in the portfolio always shows. Server-only.
import { cookies } from 'next/headers';
import { prisma } from './prisma';

export const SHOW_HIDDEN_COOKIE = 'showHidden';

/** True while the viewer has "Show hidden" switched on. */
export async function showingHidden(): Promise<boolean> {
    try {
        return (await cookies()).get(SHOW_HIDDEN_COOKIE)?.value === '1';
    } catch {
        return false;
    }
}

/** Is this company kept out of the everyday view? Holdings never are. */
export const isHiddenCo = (c: { hidden?: boolean | null; inPortfolio?: boolean | null }) => !!c.hidden && !c.inPortfolio;

/**
 * A test for lists keyed by company name: true when the company should be listed.
 * With "Show hidden" on, everything is listed.
 */
export async function shownFilter(): Promise<(company: string) => boolean> {
    if (await showingHidden()) return () => true;
    const hidden = new Set((await prisma.company.findMany({ where: { hidden: true, inPortfolio: false }, select: { name: true } })).map(c => c.name));
    return (company: string) => !hidden.has(company);
}
