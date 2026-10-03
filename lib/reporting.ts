import { prisma } from '@/lib/prisma';
import { screenerPageUrl, fetchScreenerPage, screenerTable } from '@/lib/screener-page';

// Whether a company files results only every six months (most SME listings): such a company has no
// Q1 or Q3 results, so a call dated in those quarters is never its results call — it is an investor
// conference, a business update or a deal call, and belongs in a special-call slot. (On 25 Sep 2026
// four SME companies' talks at a broker conference were filed as their "Q1 FY27" results calls.)
// Only SME listings are checked; the answer is read from Screener's quarterly table once per run.

const known = new Map<string, boolean>();

export async function reportsHalfYearly(companyId: string): Promise<boolean> {
    if (known.has(companyId)) return known.get(companyId)!;
    let half = false;
    const co = await prisma.company.findUnique({ where: { id: companyId }, select: { isSme: true } });
    if (co?.isSme) {
        try {
            const page = await screenerPageUrl(companyId);
            const html = page ? await fetchScreenerPage(page.url, 0) : null;
            const q = html ? screenerTable(html, 'quarters') : null;
            half = !!q && q.columns.length >= 3 && q.columns.slice(-3).every(c => /^(Mar|Sep) /.test(c));
        } catch { /* unknown: treat as quarterly */ }
    }
    known.set(companyId, half);
    return half;
}

/** True when `quarter` ("Q1 FY27") cannot be a results quarter for this company. */
export async function notAResultsQuarter(companyId: string, quarter: string): Promise<boolean> {
    return /^Q[13] /.test(quarter) && await reportsHalfYearly(companyId);
}
