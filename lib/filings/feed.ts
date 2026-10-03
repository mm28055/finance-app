// The cross-company Filings list, as both the Filings page and the slide-in panel show it: every
// material filing, and (in their own tab) the market and policy events and price moves, each with
// the note's call and whether the company is in the portfolio. Server-only.
import { getAllFilings } from './server';
import { getAllNews } from '../news/server';
import { allSectorOverviews, companyCallInfo } from '../sector-overviews';
import { prisma } from '../prisma';
import store from '../results/results.json';
import type { ResultsStore } from '../results/types';
import { generalDocLabel } from '../doc-label';
import changesStore from '../calls-log/changes.json';
import type { CallChangesStore } from '../calls-log/types';
import readsStore from '../calls-read/reads.json';
import type { CallReadsStore } from '../calls-read/types';
import { getAllEvents } from '../events/server';
import checkpointsStore from '../checkpoints/checkpoints.json';

/** The "Top Takeaways" of a call analysis (up to four; most analyses list three to five), as plain one-liners. */
function takeaways(summary: string | null, n = 4): string[] {
    if (!summary) return [];
    // The points listed under "Top Takeaways", bold heading or not; failing that, any list points.
    const all = summary.split('\n').map(l => l.trim());
    const start = all.findIndex(l => /top takeaways/i.test(l));
    // A list point: "- ...", "* ...", "• ..." or "1. ...".
    const MARK = /^([-*•]|\d{1,2}[.)])\s+/;
    const bullet = (l: string) => MARK.test(l) && !/top takeaways/i.test(l) && l.replace(MARK, '').replace(/\*\*/g, '').trim().length > 25;
    let lines: string[] = [];
    if (start >= 0) {
        for (const l of all.slice(start + 1)) {
            if (bullet(l)) lines.push(l);
            else if (lines.length && (/^#/.test(l) || /^[-*•]\s+\*\*[^*]+\*\*:?\s*$/.test(l))) break;
        }
    }
    if (!lines.length) lines = all.filter(bullet);
    return lines.slice(0, n).map(l => {
        const t = l.replace(MARK, '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
        return t.length > 220 ? `${t.slice(0, 217).replace(/\s+\S*$/, '')}…` : t;
    });
}

export async function filingsFeed() {
    const { to, filings } = getAllFilings();
    const calls = companyCallInfo(allSectorOverviews());
    const portfolio = new Set((await prisma.company.findMany({ where: { inPortfolio: true }, select: { name: true } })).map(c => c.name));
    const withCall = <T extends { company: string }>(f: T) => ({ ...f, call: calls.get(f.company.trim().toLowerCase())?.call, inPortfolio: portfolio.has(f.company) });
    const news = getAllNews().map(n => withCall({
        company: n.company, sector: n.sector, date: n.date, tone: n.tone, headline: n.headline, summary: n.summary,
        category: n.kind === 'move' ? 'Price move' : n.kind === 'holder' ? 'Large holder' : 'Market and policy',
        url: n.url || '', source: n.source, impact: (n.dot ? 'high' : 'normal') as 'high' | 'normal',
    }));
    // Results read the night they came out (lib/results), newest first.
    const results = (store as unknown as ResultsStore).results.map(withCall);

    // Earnings calls analysed in the last 45 days: score, guidance and the top two takeaways.
    const since = new Date(Date.now() - 45 * 86400000);
    const ts = await prisma.transcript.findMany({
        where: { OR: [{ sourceEventDate: { gte: since } }, { sourceEventDate: null, createdAt: { gte: since } }], company: { isVisible: true } },
        select: { companyId: true, quarterId: true, sourceEventDate: true, createdAt: true, fileUrl: true, filePath: true, company: { select: { name: true, sector: true } }, quarter: { select: { name: true, q: true } } },
    });
    const analyses = ts.length ? await prisma.analysis.findMany({
        where: { OR: ts.map(t => ({ companyId: t.companyId, quarterId: t.quarterId })) },
        select: { companyId: true, quarterId: true, summary: true, investorBrief: true, investibilityScore: true, guidanceGrowthMin: true, guidanceGrowthMax: true, guidanceFy: true, guidanceBasis: true },
    }) : [];
    const byKey = new Map(analyses.map(a => [`${a.companyId}|${a.quarterId}`, a]));
    const callsList = ts.flatMap(t => {
        const a = byKey.get(`${t.companyId}|${t.quarterId}`);
        if (!a) return [];
        const g = a.guidanceBasis && a.guidanceBasis !== 'NONE' && (a.guidanceGrowthMin !== null || a.guidanceGrowthMax !== null)
            ? { min: a.guidanceGrowthMin !== null ? Number(a.guidanceGrowthMin) : null, max: a.guidanceGrowthMax !== null ? Number(a.guidanceGrowthMax) : null, fy: a.guidanceFy || undefined }
            : null;
        return [withCall({
            company: t.company.name, sector: t.company.sector, general: t.quarter.q === 'GEN',
            // "General 17 Sep 2026" reads as "Special call · 17 Sep 2026", as on the company card.
            quarter: t.quarter.q === 'GEN' ? generalDocLabel(t.quarter.name, a.summary) : t.quarter.name,
            date: (t.sourceEventDate || t.createdAt).toISOString().slice(0, 10),
            // Results calls carry Gemini's score; AGMs and special calls a three-way read instead (lib/calls-read).
            score: t.quarter.q === 'GEN' ? null : a.investibilityScore ?? null,
            read: t.quarter.q === 'GEN' ? (readsStore as unknown as CallReadsStore).reads[`${t.company.name}|${t.quarter.name}`] ?? null : null,
            // The transcript: the exchange filing when the call came from it, else our stored PDF copy.
            source: t.filePath && /nseindia\.com|bseindia\.com/.test(t.filePath)
                ? { url: t.filePath, label: /bseindia/.test(t.filePath) ? 'BSE filing' : 'NSE filing' }
                : t.fileUrl && /^https?:/.test(t.fileUrl) ? { url: t.fileUrl, label: 'Transcript PDF' } : null,
            guidance: g, points: takeaways(a.summary && a.summary.trim().length > 20 ? a.summary : a.investorBrief),
        })];
    }).sort((x, y) => y.date.localeCompare(x.date) || x.company.localeCompare(y.company));

    // Changes in the notes' calls (lib/calls-log), with today's price for "since the change".
    const changesRaw = (changesStore as unknown as CallChangesStore).changes;
    const prices = changesRaw.length ? new Map((await prisma.company.findMany({
        where: { name: { in: [...new Set(changesRaw.map(c => c.company))] } }, select: { name: true, currentPrice: true },
    })).map(c => [c.name, c.currentPrice ? Number(c.currentPrice) : null])) : new Map<string, number | null>();
    const callChanges = changesRaw.map(c => ({ ...c, priceNow: prices.get(c.company) ?? null, inPortfolio: portfolio.has(c.company) }));

    // The portfolio tab: per holding, its dates in the next 30 days and its expectations (the ones due
    // next, and any marked met or missed in the last 90 days). The other lists carry inPortfolio already.
    const today = new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);
    const in30 = new Date(Date.now() + (5.5 + 30 * 24) * 3600000).toISOString().slice(0, 10);
    const ago90 = new Date(Date.now() - 90 * 86400000).toISOString().slice(0, 10);
    const events = getAllEvents().events;
    type Cp = { company: string; text: string; due: string; status: string; actual?: string; resolvedOn?: string };
    const cps = (checkpointsStore as unknown as { checkpoints: Cp[] }).checkpoints;
    const quarterKey = (q: string) => { const m = q.match(/^([QH])([1-4]) FY(\d{2})$/); return m ? Number(m[3]) * 10 + Number(m[2]) * (m[1] === 'H' ? 2 : 1) : 999; };
    const holdings = (await prisma.company.findMany({ where: { inPortfolio: true }, select: { name: true, sector: true } }))
        .map(c => {
            const pending = cps.filter(x => x.company === c.name && x.status === 'pending');
            const next = pending.length ? Math.min(...pending.map(x => quarterKey(x.due))) : null;
            return {
                company: c.name, sector: c.sector, call: calls.get(c.name.trim().toLowerCase())?.call,
                upcoming: events.filter(e => e.company === c.name && e.date >= today && e.date <= in30).map(e => ({ kind: e.kind, date: e.date, time: e.time })),
                watching: pending.filter(x => quarterKey(x.due) === next).slice(0, 6).map(x => ({ text: x.text, due: x.due })),
                settled: cps.filter(x => x.company === c.name && x.status !== 'pending' && (x.resolvedOn || '') >= ago90)
                    .map(x => ({ text: x.text, status: x.status, actual: x.actual, on: x.resolvedOn })),
            };
        });

    return { to, filings: filings.map(withCall), news, results, calls: callsList, callChanges, holdings };
}
