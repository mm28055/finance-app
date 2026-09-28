import { prisma } from '@/lib/prisma';
import { pruneCompany, TRANSCRIPT_WINDOW, GENERAL_Q } from '@/lib/retention';
import { generalSlotName, isGeneralSlotName, type GeneralKind } from '@/lib/doc-label';

// Maps a concall event date to its reported fiscal quarter (Indian FY: Apr-Mar).
// Concalls are filed AFTER quarter-end, so the event-date month determines
// which quarter is being reported on:
//   Apr-Jun -> Q4 of the FY that just ended
//   Jul-Sep -> Q1
//   Oct-Dec -> Q2
//   Jan-Mar -> Q3
export function getFinancialQuarter(dateStr: string): string {
    const d = new Date(dateStr);
    const month = d.getMonth();
    const year = d.getFullYear();
    const fy = (month <= 5) ? year : (year + 1);

    let q = '';
    if (month >= 6 && month <= 8) q = 'Q1';
    else if (month >= 9 && month <= 11) q = 'Q2';
    else if (month >= 0 && month <= 2) q = 'Q3';
    else q = 'Q4';

    return `${q} FY${fy.toString().slice(-2)}`;
}

// Numeric ordering score for a quarter name like "Q3 FY26". Higher = newer.
export function quarterScore(name: string): number {
    const parts = name.split(' ');
    if (parts.length < 2) return 0;
    const q = parseInt(parts[0].replace('Q', '')) || 0;
    const fy = parseInt(parts[1].replace('FY', '')) || 0;
    return fy * 10 + q;
}

// Returns the cutoff quarter score for accepting inbound concalls for a company.
// Policy: accept anything at or newer than the OLDEST transcript still inside
// the transcript window. If fewer exist, fall back to "anything newer than what
// we have" (or accept everything if the company has no transcripts yet).
export async function getAcceptanceCutoff(companyId: string): Promise<number> {
    const latest = await prisma.transcript.findMany({
        // General slots are excluded: they are not quarters, so letting one into
        // the window would drag the cutoff down to its score (~0) and make the
        // company accept every ancient concall Tijori still lists.
        where: { companyId, quarter: { q: { not: GENERAL_Q } } },
        include: { quarter: true },
        orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }],
        take: TRANSCRIPT_WINDOW
    });
    if (latest.length === 0) return 0;
    const scores = latest.map(t => quarterScore(t.quarter.name));
    return Math.min(...scores);
}

// True if the given quarter name should be accepted for this company given
// what's already stored. Newer-or-equal-to the cutoff = accept.
export async function shouldAcceptQuarter(companyId: string, quarterName: string): Promise<boolean> {
    const cutoff = await getAcceptanceCutoff(companyId);
    return quarterScore(quarterName) >= cutoff;
}

// Rolling-window cleanup for a single company — see lib/retention.ts for the
// windows (transcripts/PDF/chunks 2, analysis 4, delta 1, financials 5). Safe
// to call after any insert. PDF storage cleanup is handled separately by the
// main smart-sync script — this DB-only version is sufficient to prevent stale
// tabs from showing up in the UI.
export async function pruneCompanyToWindow(companyId: string) {
    await pruneCompany(prisma, companyId);
}

// -----------------------------------------------------------------------------
// "General" slots — non-quarterly documents (investor meets, analyst days, AGMs)
// and any extra document filed inside a quarter that already has an earnings
// call. See lib/doc-type.ts for why these are separated.
//
// They live in the Quarter table like any other row (Transcript/Analysis both
// require a quarterId) but are marked with q = 'GEN' and named after the event
// date, so two meets in one quarter never collide. Every ordering/retention path
// filters them out via isGeneralQuarter — a General slot must never displace a
// real quarter in a rolling window, nor act as the "latest quarter".
// -----------------------------------------------------------------------------

/** Sentinel stored in Quarter.q for non-quarterly documents (defined in
 *  lib/retention.ts, which this module already depends on, and re-exported
 *  here so quarter-shaped callers have one import). */
export { GENERAL_Q };

/** True for a Quarter row (or name) representing a non-quarterly document. */
export function isGeneralQuarter(quarter: { q: string } | string): boolean {
    if (typeof quarter === 'string') return isGeneralSlotName(quarter);
    return quarter.q === GENERAL_Q;
}

/**
 * Slot name for a non-quarterly document, e.g. "General 06 Jul 2026".
 * Keyed by event date so a company can hold several in the same quarter.
 * With a kind the prefix records what the document is ("AGM 23 Sep 2026",
 * "Special call 05 Sep 2026") — see lib/doc-label.ts.
 */
export function generalQuarterName(eventDate: string | Date, kind?: GeneralKind): string {
    return generalSlotName(eventDate, kind);
}

/** Fiscal year (Indian FY, Apr-Mar) an event date belongs to — for Quarter.year. */
export function fiscalYearOf(eventDate: string | Date): number {
    const d = new Date(eventDate);
    return d.getMonth() <= 2 ? d.getFullYear() : d.getFullYear() + 1;
}
