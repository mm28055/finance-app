import { prisma } from '@/lib/prisma';
import { allSectorOverviews } from '@/lib/sector-overviews';
import { companyCallInfo, type Call } from '@/lib/sector-overviews/calls';
import type { SectorOverview } from '@/lib/sector-overviews/types';
import { screenerPageUrl, fetchScreenerPage, screenerTable, screenerGrowth, screenerCompanyId, cachedFetch, keyed, FILED, type ScreenerTable } from '@/lib/screener-page';

// A company's closest rivals and the figures that compare them, for the company card's
// "Price assumes" and "Peers" tabs. Rivals come from the company's own group in its sector
// note (same segment first, then nearest in size); figures come from each company's
// Screener page, cached for a week (refreshed after results) like the rest of the card. Nothing is stored.

const PEERS = 5;

export interface CompanyFigures {
    id: string;
    name: string;
    self: boolean;
    marketCap: number | null;
    price: number | null;
    /** Last twelve months' earnings per share (latest year when Screener shows no TTM). */
    eps: number | null;
    /** The P/E on the company's dashboard row (Screener's, refreshed daily); null when the company lost money. */
    pe: number | null;
    evEbitda: number | null;
    pb: number | null;
    salesGrowth3: number | null;
    salesGrowth5: number | null;
    profitGrowth3: number | null;
    profitGrowth5: number | null;
    profitGrowth10: number | null;
    /** Operating margin, last twelve months. */
    margin: number | null;
    roce: number | null;
    roe: number | null;
    /** Free cash flow ÷ net profit, summed over the last five years. */
    cashConversion: number | null;
    debtToEquity: number | null;
    lender: boolean;
    /** The note's base-case earnings growth, % a year over 3–5 years. */
    noteGrowth: number | null;
    call: Call | null;
    stance: string | null;
    /** Screener could not be read this time (figures blank). */
    unread?: boolean;
}

const num = (v: string | null | undefined) => {
    // Screener shows a bare "%" where it has no figure (a 10-year growth for a young listing).
    const t = v?.replace(/,/g, '').replace('%', '').trim();
    if (!t) return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
};
const row = (t: ScreenerTable | null, ...labels: string[]) => t?.rows.find(r => labels.includes(r.label)) ?? null;
const last = (t: ScreenerTable | null, ...labels: string[]) => {
    const vals = row(t, ...labels)?.values ?? [];
    for (let i = vals.length - 1; i >= 0; i--) { const n = num(vals[i]); if (n !== null) return n; }
    return null;
};

/** The note (or group tab) a company is written up in, and its segment and stance there. */
function noteFor(name: string): { note: SectorOverview; segment?: string } | null {
    const key = name.trim().toLowerCase();
    const search = (o: SectorOverview): { note: SectorOverview; segment?: string } | null => {
        for (const b of o.buckets || []) { const hit = search(b.note); if (hit) return hit; }
        const v = o.verdicts.find(x => x.company.trim().toLowerCase() === key);
        const p = o.businesses?.profiles.find(x => x.company.trim().toLowerCase() === key);
        return v || p ? { note: o, segment: v?.segment } : null;
    };
    for (const o of allSectorOverviews()) { const hit = search(o); if (hit) return hit; }
    return null;
}

/** The company and up to five rivals: same segment of the same note first, then the nearest in market value. */
export async function peerSet(companyId: string) {
    const self = await prisma.company.findUnique({ where: { id: companyId }, select: { id: true, name: true, sector: true, marketCap: true } });
    if (!self) return null;
    const found = noteFor(self.name);
    const companiesIn = (o: SectorOverview) => new Map([
        ...(o.businesses?.profiles || []).map(p => [p.company.trim().toLowerCase(), undefined as string | undefined] as const),
        ...o.verdicts.filter(v => v.stance !== 'DELISTED').map(v => [v.company.trim().toLowerCase(), v.segment] as const),
    ]);
    const inNote = found ? companiesIn(found.note) : new Map<string, string | undefined>();
    const delisted = new Set(found?.note.verdicts.filter(v => v.stance === 'DELISTED').map(v => v.company.trim().toLowerCase()) || []);

    const sectorCos = await prisma.company.findMany({
        where: { sector: self.sector, isVisible: true, status: 'ACTIVE', id: { not: self.id } },
        select: { id: true, name: true, marketCap: true },
    });
    const noteNames = [...inNote.keys()];
    const noteCos = noteNames.length ? await prisma.company.findMany({
        where: { isVisible: true, status: 'ACTIVE', id: { not: self.id }, OR: noteNames.map(n => ({ name: { equals: n, mode: 'insensitive' as const } })) },
        select: { id: true, name: true, marketCap: true },
    }) : [];

    const size = (m: unknown) => (m ? Number(m) : null);
    const selfCap = size(self.marketCap);
    const distance = (m: number | null) => (selfCap && m ? Math.abs(Math.log(m / selfCap)) : 99);
    const pool = new Map<string, { id: string; name: string; marketCap: number | null; rank: number }>();
    for (const c of noteCos) {
        const seg = inNote.get(c.name.trim().toLowerCase());
        pool.set(c.id, { ...c, marketCap: size(c.marketCap), rank: found?.segment && seg === found.segment ? 0 : 1 });
    }
    // Too few rivals in the note's group: fill from the rest of the sector.
    if (pool.size < PEERS) for (const c of sectorCos) {
        if (!pool.has(c.id) && !delisted.has(c.name.trim().toLowerCase())) pool.set(c.id, { ...c, marketCap: size(c.marketCap), rank: 2 });
    }
    const peers = [...pool.values()]
        .sort((a, b) => a.rank - b.rank || distance(a.marketCap) - distance(b.marketCap))
        .slice(0, PEERS);
    return { self, peers, fromNote: !!found };
}

/** One company's comparison figures, from its Screener page (default view, as on its card). */
export async function companyFigures(companyId: string, isSelf: boolean): Promise<CompanyFigures | null> {
    const co = await prisma.company.findUnique({
        where: { id: companyId },
        select: { id: true, name: true, marketCap: true, currentPrice: true, roce: true, peRatio: true },
    });
    if (!co) return null;
    const base: CompanyFigures = {
        id: co.id, name: co.name, self: isSelf,
        marketCap: co.marketCap ? Number(co.marketCap) : null, price: co.currentPrice ? Number(co.currentPrice) : null,
        eps: null, pe: null, evEbitda: null, pb: null,
        salesGrowth3: null, salesGrowth5: null, profitGrowth3: null, profitGrowth5: null, profitGrowth10: null,
        margin: null, roce: co.roce ? Number(co.roce) : null, roe: null, cashConversion: null, debtToEquity: null,
        lender: false, noteGrowth: null, call: null, stance: null,
    };

    // The note's call, base-case growth and stance.
    const info = companyCallInfo(allSectorOverviews()).get(co.name.trim().toLowerCase());
    if (info) {
        base.call = info.call;
        const g = info.valuation?.myGrowth?.[info.key];
        base.noteGrowth = typeof g === 'number' ? g : null;
    }
    base.stance = noteFor(co.name)?.note.verdicts.find(v => v.company.trim().toLowerCase() === co.name.trim().toLowerCase())?.stance ?? null;

    try {
        // Screener turns away bursts of requests; one retry after a pause gets most of them.
        let page = await screenerPageUrl(companyId).catch(() => null);
        let html = page ? await fetchScreenerPage(page.url, FILED, page.key).catch(() => null) : null;
        if (!html) {
            await new Promise(r => setTimeout(r, 1500));
            page = await screenerPageUrl(companyId).catch(() => null);
            html = page ? await fetchScreenerPage(page.url, FILED, page.key).catch(() => null) : null;
        }
        if (!html) { base.unread = true; return base; }
        const pl = screenerTable(html, 'profit-loss'), bs = screenerTable(html, 'balance-sheet'), cf = screenerTable(html, 'cash-flow');
        const growth = screenerGrowth(html);
        const g = (title: string, period: string) => num(growth[title]?.[period]);
        base.lender = !row(pl, 'Sales');
        base.salesGrowth3 = g('Compounded Sales Growth', '3 Years');
        base.salesGrowth5 = g('Compounded Sales Growth', '5 Years');
        base.profitGrowth3 = g('Compounded Profit Growth', '3 Years');
        base.profitGrowth5 = g('Compounded Profit Growth', '5 Years');
        base.profitGrowth10 = g('Compounded Profit Growth', '10 Years');
        base.roe = g('Return on Equity', 'Last Year');

        base.eps = last(pl, 'EPS in Rs');
        // The row's P/E, so card and row agree (Screener's own figure copes better with one-off
        // items than price ÷ EPS); none for a company that lost money, whatever the row shows.
        const rowPe = co.peRatio ? Number(co.peRatio) : null;
        if (base.eps !== null && base.eps <= 0) base.pe = null;
        else if (rowPe && rowPe > 0) base.pe = rowPe;
        else if (base.price && base.eps && base.eps > 0) base.pe = base.price / base.eps;
        // A lender's financing margin is not comparable to an operating margin; left blank.
        if (!base.lender) base.margin = last(pl, 'OPM %');

        const equity = (last(bs, 'Equity Capital') ?? 0) + (last(bs, 'Reserves') ?? 0);
        const debt = last(bs, 'Borrowings');
        if (base.marketCap && equity > 0) base.pb = base.marketCap / equity;
        if (!base.lender && debt !== null && equity > 0) base.debtToEquity = debt / equity;

        // Five years of free cash against five years of profit, on the same years.
        if (!base.lender && pl && cf) {
            const years = cf.columns.filter(c => pl.columns.includes(c) && c !== 'TTM').slice(-5);
            const at = (t: ScreenerTable, label: string, y: string) => num(row(t, label)?.values[t.columns.indexOf(y)]);
            const fcf = years.map(y => at(cf, 'Free Cash Flow', y)), np = years.map(y => at(pl, 'Net Profit', y));
            if (years.length >= 3 && fcf.every(v => v !== null) && np.every(v => v !== null)) {
                const f = (fcf as number[]).reduce((a, b) => a + b, 0), p = (np as number[]).reduce((a, b) => a + b, 0);
                if (p > 0) base.cashConversion = f / p;
            }
        }

        // EV/EBITDA needs the cash inside "Other Assets" (one more cached request).
        const ebitda = last(pl, 'Operating Profit');
        if (!base.lender && base.marketCap && ebitda && ebitda > 0 && debt !== null) {
            let cash = 0;
            try {
                const sid = screenerCompanyId(html);
                if (sid) {
                    const res = await cachedFetch(FILED)(keyed(`https://www.screener.in/api/company/${sid}/schedules/?parent=${encodeURIComponent('Other Assets')}&section=balance-sheet${page!.view === 'consolidated' ? '&consolidated=' : ''}`, page!.key));
                    if (res.ok) {
                        const byYear: Record<string, string> = (await res.json())['Cash Equivalents'] ?? {};
                        const latest = Object.keys(byYear).pop();
                        cash = latest ? num(byYear[latest]) ?? 0 : 0;
                    }
                }
            } catch { /* EV without cash */ }
            base.evEbitda = (base.marketCap + debt - cash) / ebitda;
        }
    } catch { /* figures left blank */ }
    return base;
}
