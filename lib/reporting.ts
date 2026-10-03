import { prisma } from '@/lib/prisma';
import { screenerPageUrl, fetchScreenerPage, screenerTable } from '@/lib/screener-page';
import { quarterEndDate } from '@/lib/doc-type';

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

// -----------------------------------------------------------------------------
// Screener's "Concalls" list as a second witness. A call goes into a results slot when its own
// opening says it is a results call, OR Screener lists a call with a transcript or recording in
// that month (or the next: Screener files a call under the month its transcript was filed). When
// neither holds, it is filed as a special call — a deal call, a special event or an investor meet
// whose copy opens mid-conversation (RPG's 3 Sep 2026 Actis call, NBCC's 1 Jun 2026 event).
// Screener alone is not enough: it sometimes shows only a presentation for a genuine call.
// -----------------------------------------------------------------------------

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export interface ConcallEntry { month: string; transcript: boolean; rec: boolean; ppt: boolean }

/** Screener's Concalls list from a company page: one entry per month, with which documents it links. */
export function screenerConcalls(html: string): ConcallEntry[] | null {
    const i = html.indexOf('>Concalls</h3>');
    if (i < 0) return null;
    const end = html.indexOf('</ul>', i);
    const seg = html.slice(i, end > 0 ? end : i + 40000);
    return [...seg.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map(m => {
        const li = m[1];
        return {
            month: li.match(/>\s*([A-Z][a-z]{2} \d{4})\s*</)?.[1] || '',
            transcript: /<a[^>]*>\s*Transcript\s*<\/a>/.test(li),
            rec: /<a[^>]*>\s*REC\s*<\/a>/.test(li),
            ppt: /<a[^>]*>\s*PPT\s*<\/a>/.test(li),
        };
    }).filter(e => e.month);
}

const concallCache = new Map<string, ConcallEntry[] | null>();

/**
 * True when Screener lists a call with a transcript or recording in the month of `date` or the
 * next; null when Screener could not be read (the caller then keeps its own reading).
 */
export async function screenerShowsCall(companyId: string, date: Date): Promise<boolean | null> {
    if (!concallCache.has(companyId)) {
        let list: ConcallEntry[] | null = null;
        try {
            const page = await screenerPageUrl(companyId);
            const html = page ? await fetchScreenerPage(page.url.replace(/consolidated\/?$/, ''), 0) : null;
            list = html ? screenerConcalls(html) : null;
        } catch { /* unreadable */ }
        concallCache.set(companyId, list);
    }
    const list = concallCache.get(companyId);
    if (!list) return null;
    const key = (plus: number) => { const x = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + plus, 1)); return `${MONTHS[x.getUTCMonth()]} ${x.getUTCFullYear()}`; };
    const window = [key(0), key(1)];
    return list.some(e => window.includes(e.month) && (e.transcript || e.rec));
}

// -----------------------------------------------------------------------------
// Too early to be the results call. Results come out weeks after a quarter ends (the earliest
// filers take about two weeks), so a call held within 14 days of the quarter's end cannot discuss
// that quarter's results — Basilic Fly Studio's 2 Jul 2026 investor meeting was filed as its Q1 FY27
// call. Applies only when the quarter was read from the call's date, not named in the transcript.
// -----------------------------------------------------------------------------
export const RESULTS_EARLIEST_DAYS = 14;

export function tooEarlyForResults(quarter: string, callDate: Date): boolean {
    const end = quarterEndDate(quarter);
    return !!end && callDate.getTime() < end.getTime() + RESULTS_EARLIEST_DAYS * 86400000;
}
