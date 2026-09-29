// "Needs a session": things only a session with Claude can do, shown on the dashboard.
// Two sources: the hand-kept list in todos.json (added and cleared by Claude and the
// weekly review), and sectors whose calls for the new quarter are mostly in, so the
// season refresh of that note is due (computed live).
import { prisma } from '../prisma';
import { GENERAL_Q } from '../quarters';
import { allSectorOverviews } from '../sector-overviews';
import store from './todos.json';

export interface SessionTodo { id: string; text: string; addedOn?: string; notBefore?: string }

/** Share of a sector's companies with the new quarter's call before its note is due a refresh. */
export const REFRESH_SHARE = 0.9;

export async function sessionTodos(): Promise<SessionTodo[]> {
    const today = new Date().toISOString().slice(0, 10);
    const listed = (store as { items: SessionTodo[] }).items.filter(t => !t.notBefore || t.notBefore <= today);

    const refresh: SessionTodo[] = [];
    try {
        const latest = await prisma.quarter.findFirst({ where: { q: { not: GENERAL_Q } }, orderBy: [{ year: 'desc' }, { q: 'desc' }] });
        if (latest) {
            const due = allSectorOverviews().filter(o => o.asOfQuarter !== latest.name);
            const companies = await prisma.company.findMany({
                where: { sector: { in: due.map(o => o.sector) } },
                select: { sector: true, _count: { select: { transcripts: { where: { quarterId: latest.id } } } } },
            });
            for (const o of due) {
                const cos = companies.filter(c => c.sector === o.sector);
                const withCall = cos.filter(c => c._count.transcripts > 0).length;
                if (cos.length && withCall / cos.length >= REFRESH_SHARE) {
                    refresh.push({
                        id: `refresh-${o.sector}`,
                        text: `${o.title}: ${withCall} of ${cos.length} ${latest.name} calls are in. Time for the season refresh.`,
                    });
                }
            }
        }
    } catch (e) {
        console.error('Season-refresh check unavailable', e);
    }
    return [...refresh, ...listed];
}
