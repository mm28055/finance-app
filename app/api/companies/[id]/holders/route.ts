import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { screenerPageUrl, fetchScreenerPage, screenerCompanyId, cachedFetch } from '@/lib/screener-page';

// GET /api/companies/[id]/holders
// Who the named shareholders are: every holder above 1% in each group (promoters, foreign
// institutions, domestic institutions, public), as filed in the quarterly shareholding
// pattern and shown on Screener. Holdings change quarterly, so cached for a day; nothing stored.
//   { periods: ["Mar 2025", …], groups: { promoters: [{ name, values: { "Jun 2026": 12.3, … } }], … } }

const GROUPS = ['promoters', 'foreign_institutions', 'domestic_institutions', 'public'] as const;

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    // ?warm=1: the home page wakes this function (and its database connection) so the first card opens fast.
    if (req.nextUrl.searchParams.has('warm')) { await prisma.$queryRaw`SELECT 1`; return new NextResponse(null, { status: 204 }); }
    const { id } = await params;
    try {
        const page = await screenerPageUrl(id);
        if (!page) return NextResponse.json({ error: 'No Screener page' }, { status: 404 });
        const html = await fetchScreenerPage(page.url, 86400);
        const sid = html ? screenerCompanyId(html) : null;
        if (!sid) return NextResponse.json({ error: 'Screener page unavailable' }, { status: 502 });

        const periods = new Set<string>();
        const groups: Record<string, { name: string; values: Record<string, number> }[]> = {};
        for (const g of GROUPS) {
            const res = await cachedFetch(86400)(`https://www.screener.in/api/3/${sid}/investors/${g}/quarterly/`);
            const data = res.ok ? await res.json() : {};
            groups[g] = Object.entries(data as Record<string, Record<string, unknown>>).map(([name, byPeriod]) => {
                const values: Record<string, number> = {};
                for (const [p, v] of Object.entries(byPeriod)) {
                    if (p === 'setAttributes' || v === null || v === '') continue;
                    const n = Number(String(v).replace(/,/g, ''));
                    if (Number.isFinite(n) && n > 0) { values[p] = n; periods.add(p); }
                }
                return { name: name.trim(), values };
            }).filter(h => Object.keys(h.values).length > 0);
        }
        const toDate = (p: string) => new Date(`1 ${p}`).getTime();
        return NextResponse.json(
            { periods: [...periods].sort((a, b) => toDate(a) - toDate(b)), groups },
            { headers: { 'Cache-Control': 'private, max-age=600' } },
        );
    } catch {
        return NextResponse.json({ error: 'Shareholders unavailable' }, { status: 502 });
    }
}
