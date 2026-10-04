import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { resolveScreenerUrl } from '@/lib/sync-service';

// GET /api/companies/[id]/history?metric=price|pe|pb|ps|ev
// Ten years of weekly price or valuation history for one company, read from
// Screener's own chart data when the company card is opened. Nothing is stored:
// Screener answers are cached (company page 30 days, chart 12 hours), so a card
// opened again the same day costs no further request.

const METRICS = {
    price: { q: 'Price-DMA50-DMA200-Volume', series: 'Price', median: null },
    pe: { q: 'Price to Earning-Median PE-EPS', series: 'Price to Earning', median: 'Median PE' },
    pb: { q: 'Price to book value-Median PBV-Book value', series: 'Price to book value', median: 'Median PBV' },
    ps: { q: 'Market Cap to Sales-Median Market Cap to Sales-Sales', series: 'Market Cap to Sales', median: 'Median Market Cap to Sales' },
    ev: { q: 'EV Multiple-Median EV Multiple-EBITDA', series: 'EV Multiple', median: 'Median EV Multiple' },
} as const;
type Metric = keyof typeof METRICS;

const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36' };
const cached = (seconds: number) => (url: string, init?: RequestInit) =>
    fetch(url, { ...init, headers: { ...UA, ...(init?.headers || {}) }, next: { revalidate: seconds } } as RequestInit);

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    // ?warm=1: the home page wakes this function (and its database connection) so the first card opens fast.
    if (req.nextUrl.searchParams.has('warm')) { await prisma.$queryRaw`SELECT 1`; return new NextResponse(null, { status: 204 }); }
    const { id } = await params;
    const metric = (req.nextUrl.searchParams.get('metric') || 'price') as Metric;
    if (!METRICS[metric]) return NextResponse.json({ error: 'Unknown metric' }, { status: 400 });

    const co = await prisma.company.findUnique({ where: { id }, select: { isin: true, ticker: true, name: true, aliases: true } });
    if (!co) return NextResponse.json({ error: 'Company not found' }, { status: 404 });

    try {
        // The company's Screener page, for its internal id and whether it reports consolidated.
        const url = await resolveScreenerUrl(co.isin, co.ticker, co.name, cached(30 * 86400), co.aliases);
        if (!url) return NextResponse.json({ error: 'No Screener page for this company' }, { status: 404 });
        const page = await (await cached(30 * 86400)(url)).text();
        const screenerId = page.match(/data-company-id="(\d+)"/)?.[1];
        if (!screenerId) return NextResponse.json({ error: 'Screener page not readable' }, { status: 502 });
        let consolidated = /\/consolidated\/?$/.test(url);

        const m = METRICS[metric];
        const load = async (cons: boolean) => {
            const chartUrl = `https://www.screener.in/api/company/${screenerId}/chart/?q=${encodeURIComponent(m.q)}&days=3650${cons ? '&consolidated=true' : ''}`;
            const res = await cached(12 * 3600)(chartUrl);
            if (!res.ok) return null;
            const data = await res.json();
            const find = (name: string | null) => (data.datasets || []).find((d: any) => d.metric === name);
            const points = (find(m.series)?.values || [])
                .map((v: any[]) => ({ date: String(v[0]), value: v[1] === null || v[1] === undefined ? null : Number(v[1]) }))
                .filter((p: { value: number | null }) => p.value !== null && Number.isFinite(p.value));
            return { find, points };
        };
        let got = await load(consolidated);
        // A company that only recently began filing group accounts (Bajaj Healthcare) has no
        // multiples on the consolidated basis; its standalone history is the whole record.
        if (consolidated && (!got || got.points.length === 0)) {
            const standalone = await load(false);
            if (standalone && standalone.points.length) { got = standalone; consolidated = false; }
        }
        if (!got) return NextResponse.json({ error: 'Screener chart unavailable' }, { status: 502 });
        const { find } = got;
        let points: { date: string; value: number | null }[] = got.points;
        const medianRaw = m.median ? find(m.median)?.values?.[0]?.[1] : null;
        let median = medianRaw === null || medianRaw === undefined ? null : Number(medianRaw);

        // Screener's P/E line now and then runs on an earnings figure that is not the one in its own
        // tables (Deep Industries: 64.8 a share from July 2026 against 32.3 trailing, so P/E read 10x
        // instead of 23x). When its latest earnings figure is more than a quarter off the trailing
        // EPS in the profit table, the line is rebuilt as price over trailing EPS from the quarterly
        // table, for the span that table covers.
        if (metric === 'pe') {
            const chartEps = find('EPS')?.values?.at(-1)?.[1];
            const fixed = await rebuiltPe(url, screenerId, consolidated, chartEps === undefined || chartEps === null ? null : Number(chartEps));
            if (fixed) {
                const from = fixed[0].date;
                points = [...points.filter(p => p.date < from), ...fixed];
                const vals = points.map(p => p.value as number).filter(v => v > 0).sort((a, b) => a - b);
                median = vals.length ? Math.round(vals[Math.floor(vals.length / 2)] * 10) / 10 : median;
            }
        }

        return NextResponse.json({
            metric,
            consolidated,
            points,
            median,
        }, { headers: { 'Cache-Control': 'private, max-age=600' } });
    } catch {
        return NextResponse.json({ error: 'Price history unavailable' }, { status: 502 });
    }
}

const MONTHS: Record<string, number> = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

/** A table row's cells from a Screener page section, as text ("" for blanks). */
function rowCells(section: string, label: RegExp): string[] | null {
    const row = (section.match(/<tr[\s\S]*?<\/tr>/g) || []).find(r => label.test(r));
    return row ? [...row.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map(x => x[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').trim()) : null;
}

/** Price over trailing EPS from the quarterly table, when Screener's P/E line has drifted from its own
 *  trailing EPS; null when the line agrees (the usual case) or the tables cannot be read. */
async function rebuiltPe(url: string, screenerId: string, consolidated: boolean, chartEps: number | null) {
    if (chartEps === null) return null;
    // Today's page, not the month-old copy kept for the company id, so a quarter just reported counts.
    const page = await (await cached(12 * 3600)(url)).text();
    const num = (s: string) => (s === '' ? NaN : Number(s.replace(/,/g, '')));
    const pl = page.split('id="profit-loss"')[1]?.split('</section>')[0];
    const ttm = pl ? num(rowCells(pl, /EPS in Rs/)?.at(-1) ?? '') : NaN;
    if (!Number.isFinite(ttm) || ttm <= 0) return null;
    if (Math.abs(chartEps - ttm) / ttm <= 0.25) return null;

    const qs = page.split('id="quarters"')[1]?.split('</section>')[0];
    if (!qs) return null;
    const head = (qs.match(/<thead>[\s\S]*?<\/thead>/)?.[0].match(/<th[^>]*>[\s\S]*?<\/th>/g) || [])
        .map(t => t.replace(/<[^>]+>/g, '').trim());
    const eps = rowCells(qs, /EPS in Rs/);
    if (!eps || eps.length !== head.length) return null;
    // Each quarter's trailing EPS takes effect when its results are out: about six weeks after the
    // quarter ends, eight for the March quarter (the year's audited results come later).
    const steps: { from: string; eps: number }[] = [];
    for (let i = 4; i < head.length; i++) {
        const [mon, yr] = head[i].split(' ');
        const four = eps.slice(i - 3, i + 1).map(num);
        if (!MONTHS[mon] || four.some(v => !Number.isFinite(v))) continue;
        const d = new Date(Date.UTC(Number(yr), MONTHS[mon], 0) + (MONTHS[mon] === 3 ? 60 : 45) * 86400000);
        steps.push({ from: d.toISOString().slice(0, 10), eps: four.reduce((a, b) => a + b, 0) });
    }
    if (!steps.length) return null;

    const res = await cached(12 * 3600)(`https://www.screener.in/api/company/${screenerId}/chart/?q=${encodeURIComponent(METRICS.price.q)}&days=3650${consolidated ? '&consolidated=true' : ''}`);
    if (!res.ok) return null;
    const prices = ((await res.json()).datasets || []).find((d: any) => d.metric === 'Price')?.values || [];
    const out: { date: string; value: number | null }[] = [];
    for (const [date, price] of prices as [string, number][]) {
        const step = [...steps].reverse().find(s => s.from <= date);
        if (!step || price === null) continue;
        // A loss-making year has no meaningful P/E, so it is left out.
        if (step.eps > 0) out.push({ date, value: Math.round((Number(price) / step.eps) * 10) / 10 });
    }
    return out.length ? out : null;
}
