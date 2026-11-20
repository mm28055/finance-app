// "Needs a session": things only a session with Claude can do, shown on the dashboard.
// Two sources: the hand-kept list in todos.json (added and cleared by Claude and the
// weekly review), and warnings when a scheduled job has not run. (The per-sector
// "time for the season refresh" items were dropped on 20 Nov 2026: the sector page is
// charts only now, so there is no write-up to refresh.)
import { prisma } from '../prisma';
import store from './todos.json';
import filingsStore from '../filings/filings.json';
import newsStore from '../news/news.json';
import attention from '../corporate-actions/needs-attention.json';

export interface SessionTodo { id: string; text: string; addedOn?: string; notBefore?: string }

const IST = 5.5 * 3600000;
const HOUR = 3600000;
const fmt = (t: number) => new Date(t + IST).toISOString().slice(0, 16).replace('T', ' ') + ' IST';

/**
 * The most recent scheduled start (IST hour on one of `days`, 0 = Sunday) whose grace period has
 * passed, as a UTC timestamp. GitHub starts scheduled jobs late (often 2–6 hours), hence the grace.
 */
function lastDue(days: number[], hourIst: number, graceHours: number, now = Date.now()): number | null {
    const istNow = new Date(now + IST);
    for (let back = 0; back < 10; back++) {
        const d = new Date(Date.UTC(istNow.getUTCFullYear(), istNow.getUTCMonth(), istNow.getUTCDate() - back));
        if (!days.includes(d.getUTCDay())) continue;
        const start = d.getTime() + hourIst * HOUR - IST;
        if (start + graceHours * HOUR <= now) return start;
    }
    return null;
}

/** Warnings when a scheduled job has not run: the evening price job, the filings job, the reviews. */
async function jobHealth(): Promise<SessionTodo[]> {
    const out: SessionTodo[] = [];
    try {
        const due = lastDue([1, 2, 3, 4, 5], 18, 10);
        const last = await prisma.company.aggregate({ _max: { lastFinanceSync: true } });
        const ran = last._max.lastFinanceSync?.getTime() ?? 0;
        if (due && ran < due) out.push({ id: 'health-finance', text: `⚠ The 6pm price job has not run since ${ran ? fmt(ran) : 'ever'}: prices, flags and checkpoints are out of date. Check "Daily Finance Sync" on GitHub Actions (or run it by hand).` });
    } catch (e) { console.error('Price-job check failed', e); }

    const dueFilings = lastDue([1, 2, 3, 4, 5, 6], 20, 10);
    const filed = Date.parse((filingsStore as { updated?: string }).updated || '') || 0;
    if (dueFilings && filed < dueFilings) out.push({ id: 'health-filings', text: `⚠ The 8pm filings job has not saved since ${filed ? fmt(filed) : 'ever'}: new filings and call transcripts are not coming in. Check "Daily Filings Digest" on GitHub Actions.` });

    // Market news and "why it moved" run inside the filings job (first run 1 Oct 2026).
    const newsRan = Date.parse((newsStore as { updated?: string }).updated || '') || 0;
    if (dueFilings && dueFilings >= Date.parse('2026-10-01T14:30:00Z') && newsRan < dueFilings) out.push({ id: 'health-news', text: `⚠ The evening news check has not saved since ${newsRan ? fmt(newsRan) : 'ever'}: price moves and market or policy news are not coming in. Check the "Market news" step of "Daily Filings Digest" on GitHub Actions.` });

    // The review runs Sunday and Wednesday 9am IST (first run 30 Sep 2026). It should have handled
    // something by then if flags were waiting from before it.
    const dueReview = lastDue([0, 3], 9, 12);
    if (dueReview && dueReview >= Date.parse('2026-09-30T03:30:00Z')) {
        // Entries that deliberately wait for an event ("Waiting: …") stay open by design.
        const entries = (attention as { addedOn?: string; handled?: string; subject?: string }[]).filter(e => !/^Waiting:/.test(e.subject || ''));
        const reviewDay = new Date(dueReview + IST).toISOString().slice(0, 10);
        const waiting = entries.some(e => !e.handled && (e.addedOn || '') < reviewDay);
        const lastHandled = entries.map(e => (e.handled || '').slice(0, 10)).filter(Boolean).sort().pop() || '';
        if (waiting && lastHandled < reviewDay) out.push({ id: 'health-review', text: `⚠ The ${new Date(dueReview + IST).getUTCDay() === 0 ? 'Sunday' : 'Wednesday'} note review (${reviewDay}) did not deal with the waiting flags${lastHandled ? `; last handled ${lastHandled}` : ''}. Check the "Weekly note review" routine on claude.ai.` });
    }
    return out;
}

export async function sessionTodos(): Promise<SessionTodo[]> {
    const today = new Date().toISOString().slice(0, 10);
    const listed = (store as { items: SessionTodo[] }).items.filter(t => !t.notBefore || t.notBefore <= today);
    return [...(await jobHealth()), ...listed];
}
