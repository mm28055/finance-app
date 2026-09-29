// The dashboard's own research for the chat, as plain text: each company's call and price check,
// the note's view and watch item, capacity, projects, expectations, management and shareholding.
// Compact and already checked, so a whole sector (or, trimmed, the whole book) fits in one prompt.
import { prisma } from './prisma';
import { allSectorOverviews, companyCallInfo, livePriceCheck, type CompanyVerdict } from './sector-overviews';
import { CHECKPOINTS } from './checkpoints';
import { PROJECTS, capacityFor, PROJECT_STATUS_LABEL } from './projects';
import { managementFor } from './management';

export const ALL_SECTORS = 'All sectors';

const lc = (s: string) => s.trim().toLowerCase();
// Live placeholders in the notes ({need:KEY|19}, {label|Label:KEY|fits}) read as their written value.
const plain = (s: string) => s.replace(/\{[^{}]*\|([^{}|]*)\}/g, '$1');
const cut = (s: string | undefined, n: number) => { if (!s) return ''; const t = plain(s); return t.length > n ? t.slice(0, n - 1) + '…' : t; };

function verdictMap(): Map<string, CompanyVerdict> {
    const out = new Map<string, CompanyVerdict>();
    for (const ov of allSectorOverviews()) {
        const notes = ov.buckets?.length ? ov.buckets.map(b => b.note) : [ov];
        for (const n of notes) for (const v of n.verdicts || []) out.set(lc(v.company), v);
    }
    return out;
}

/** Sectors a question names ("auto", "pharma", "chemicals" …); none means the whole book. */
export function sectorsInQuestion(message: string, sectors: string[]): string[] {
    const q = message.toLowerCase();
    return sectors.filter(s => {
        const first = s.toLowerCase().split(/[^a-z]+/).find(w => w.length >= 3);
        return !!first && new RegExp(`\\b${first.slice(0, Math.max(4, Math.min(first.length, 6)))}`).test(q);
    });
}

/**
 * The research block for a set of companies. `compact` drops the longer fields so the whole
 * book (~650 companies) stays a reasonable prompt.
 */
export async function researchContext(where: { sectors?: string[]; ids?: string[] }, compact: boolean): Promise<{ text: string; count: number }> {
    const companies = await prisma.company.findMany({
        where: { isVisible: true, status: 'ACTIVE', ...(where.sectors ? { sector: { in: where.sectors } } : {}), ...(where.ids ? { id: { in: where.ids } } : {}) },
        select: { id: true, name: true, sector: true, marketCap: true, peRatio: true, ttmSales: true, roce: true },
        orderBy: [{ sector: 'asc' }, { name: 'asc' }],
    });
    const ids = companies.map(c => c.id);
    const holding = ids.length ? await prisma.$queryRaw<{ companyId: string; period: string; promoter: number | null; fii: number | null; dii: number | null }[]>`
        SELECT DISTINCT ON ("companyId") "companyId", "period", "promoter", "fii", "dii"
        FROM "ShareholdingQuarter" WHERE "companyId" = ANY(${ids}) ORDER BY "companyId", "periodEnd" DESC` : [];
    const holdBy = new Map(holding.map(h => [h.companyId, h]));
    const calls = companyCallInfo(allSectorOverviews());
    const verdicts = verdictMap();
    const num = (v: unknown) => (v === null || v === undefined ? null : Number(v));

    const blocks = companies.map(c => {
        const key = lc(c.name);
        const info = calls.get(key);
        const v = verdicts.get(key);
        const mcap = num(c.marketCap), pe = num(c.peRatio), sales = num(c.ttmSales), roce = num(c.roce);
        const check = livePriceCheck(info, { marketCap: mcap, peRatio: pe });
        const h = holdBy.get(c.id);
        const lines: string[] = [];
        lines.push(`### ${c.name} (${c.sector})` +
            ` | call: ${info?.call ?? 'none'}${check !== 'n/a' ? `, price ${check}` : ''}` +
            `${mcap ? ` | mcap ₹${Math.round(mcap).toLocaleString('en-IN')}cr` : ''}${pe ? ` | P/E ${pe}` : ''}` +
            `${sales ? ` | sales 12m ₹${Math.round(sales).toLocaleString('en-IN')}cr` : ''}${roce ? ` | ROCE ${roce}%` : ''}` +
            `${h ? ` | holders ${h.period}: promoter ${h.promoter ?? '–'}%, FII ${h.fii ?? '–'}%, DII ${h.dii ?? '–'}%` : ''}`);
        if (v) lines.push(`View: ${cut(v.view, compact ? 170 : 700)}`, `Watch: ${cut(v.watch, compact ? 100 : 400)}`);
        const cap = capacityFor(c.name);
        if (cap) lines.push(`Capacity: ${[cap.today && `today ${cut(cap.today, compact ? 90 : 300)}`, cap.utilisation && `running at ${cut(cap.utilisation, compact ? 70 : 120)}`,
            !compact && cap.fullUse && `full use ${cut(cap.fullUse, 160)}`, !compact && cap.capexStatus && `capex ${cut(cap.capexStatus, 260)}`].filter(Boolean).join('; ')}`);
        for (const p of PROJECTS.filter(p => lc(p.company) === key).slice(0, compact ? 2 : 5)) {
            lines.push(compact
                ? `Project: ${p.name} [${PROJECT_STATUS_LABEL[p.status]}${p.expectedStart ? `, ${p.expectedStart}` : ''}]${p.capacityAdd ? ` adds ${cut(p.capacityAdd, 80)}` : p.adds ? ` sales ${cut(p.adds, 80)}` : ''}`
                : `Project: ${p.name} [${PROJECT_STATUS_LABEL[p.status]}${p.expectedStart ? `, start ${p.expectedStart}` : ''}]` +
                  `${p.cost ? ` cost ${p.cost};` : ''}${p.capacityAdd ? ` adds ${cut(p.capacityAdd, 140)};` : ''}${p.adds ? ` sales ${cut(p.adds, 120)}` : ''}` +
                  `${p.revisions?.length ? ` (changed: ${cut(p.revisions[p.revisions.length - 1].text, 100)})` : ''}`);
        }
        const cps = CHECKPOINTS.filter(x => lc(x.company) === key && !x.project);
        const shown = compact ? cps.filter(x => x.status !== 'pending') : cps;
        for (const x of shown) lines.push(`Expectation: ${cut(x.text, 140)} [${x.status}, ${x.due}${x.actual ? `, actual ${x.actual}` : ''}]`);
        const m = managementFor(c.name);
        if (m) {
            lines.push(compact ? `Management: ${m.style}` : `Management: ${m.style}. ${cut(m.styleNote, 400)}`);
            const people = m.people.slice(0, compact ? 1 : 5).map(p => `${p.name} (${p.role}${p.family ? ', promoter family' : ''}${p.stake ? `, owns ${cut(p.stake, 50)}` : ''})`);
            lines.push(`Executives: ${people.join('; ')}${!compact && m.changes ? `. Recent change: ${cut(m.changes, 160)}` : ''}`);
        }
        return lines.join('\n');
    });
    return { text: blocks.join('\n\n'), count: companies.length };
}
