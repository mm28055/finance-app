import { NextRequest, NextResponse } from 'next/server';
import { getSectorCharts, businessFor } from '@/lib/sector-overviews';

// GET /api/sector-notes?sector=Auto Related   → that sector's charts and valuation (all its group tabs)
// GET /api/sector-notes?company=Sona BLW ...  → the company's "what the company does" card
//
// The notes are part of the code, so they change only with a new release. The browser asks with
// ?v=<release> (lib/sector-notes-client.ts), so the answer can be kept at the edge and in the
// browser until the next release changes the address.
export async function GET(req: NextRequest) {
    const sp = req.nextUrl.searchParams;
    const sector = sp.get('sector');
    const company = sp.get('company');
    const body = sector ? getSectorCharts(sector) : company ? businessFor(company) ?? null : undefined;
    if (body === undefined) return NextResponse.json({ error: 'No such note' }, { status: sector ? 404 : 400 });
    return NextResponse.json(body, {
        headers: { 'Cache-Control': sp.get('v') ? 'public, max-age=86400, s-maxage=31536000, immutable' : 'no-store' },
    });
}
