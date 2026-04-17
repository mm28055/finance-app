import { NextRequest, NextResponse } from 'next/server';
import { getCompanyDetail } from '@/lib/data-service';

// Always fetch fresh detail — no caching. The payload is small (one company)
// so the egress cost is negligible.
export const dynamic = 'force-dynamic';

// GET /api/companies/[id]/detail
// Returns the full EnrichedCompany object (financials, analyses, history,
// profile, transcript PDF links) for a single company. Called on-demand by
// the client when a user expands a company row on the dashboard.
export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: 'Missing company id' }, { status: 400 });
    }

    const detail = await getCompanyDetail(id);

    if (!detail) {
        return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    return NextResponse.json(detail);
}
