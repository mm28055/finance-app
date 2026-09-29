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
        const { find, points } = got;
        const medianRaw = m.median ? find(m.median)?.values?.[0]?.[1] : null;

        return NextResponse.json({
            metric,
            consolidated,
            points,
            median: medianRaw === null || medianRaw === undefined ? null : Number(medianRaw),
        }, { headers: { 'Cache-Control': 'private, max-age=600' } });
    } catch {
        return NextResponse.json({ error: 'Price history unavailable' }, { status: 502 });
    }
}
