import { NextRequest, NextResponse } from 'next/server';
import { screenerPageUrl, fetchScreenerPage, screenerCompanyId, cachedFetch, keyed, FILED, type ScreenerView } from '@/lib/screener-page';

// GET /api/companies/[id]/schedule?section=balance-sheet&parent=Other%20Assets&view=consolidated
// The breakdown behind a "+" row on Screener (e.g. Other Assets → inventories, receivables,
// cash …), as { "<item>": { "<column>": "<value>" } } keyed by Screener's column labels.
// Cached for a week (refreshed after results); nothing stored.

const SECTIONS = new Set(['quarters', 'profit-loss', 'balance-sheet', 'cash-flow']);

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const section = req.nextUrl.searchParams.get('section') || '';
    const parent = req.nextUrl.searchParams.get('parent') || '';
    const view = req.nextUrl.searchParams.get('view') as ScreenerView | null;
    if (!SECTIONS.has(section) || !parent) return NextResponse.json({ error: 'Bad request' }, { status: 400 });
    try {
        const page = await screenerPageUrl(id, view === 'consolidated' || view === 'standalone' ? view : undefined);
        if (!page) return NextResponse.json({ error: 'No Screener page' }, { status: 404 });
        const html = await fetchScreenerPage(page.url, FILED, page.key);
        const sid = html ? screenerCompanyId(html) : null;
        if (!sid) return NextResponse.json({ error: 'Screener page unavailable' }, { status: 502 });
        const url = `https://www.screener.in/api/company/${sid}/schedules/?parent=${encodeURIComponent(parent)}&section=${section}${page.view === 'consolidated' ? '&consolidated=' : ''}`;
        const res = await cachedFetch(FILED)(keyed(url, page.key));
        if (!res.ok) return NextResponse.json({ error: 'Breakdown unavailable' }, { status: 502 });
        return NextResponse.json(await res.json(), { headers: { 'Cache-Control': 'private, max-age=600' } });
    } catch {
        return NextResponse.json({ error: 'Breakdown unavailable' }, { status: 502 });
    }
}
