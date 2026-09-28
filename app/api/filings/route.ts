import { NextResponse } from 'next/server';
import { getSectorFilings, getCompanyFilings } from '@/lib/filings/server';

// GET /api/filings?sector=Aerospace%20defence  -> last month for the sector panel
// GET /api/filings?company=Avantel             -> last three months for one company
export async function GET(req: Request) {
    const url = new URL(req.url);
    const sector = url.searchParams.get('sector');
    const company = url.searchParams.get('company');
    if (sector) return NextResponse.json(getSectorFilings(sector));
    if (company) return NextResponse.json({ company, filings: getCompanyFilings(company) });
    return NextResponse.json({ error: 'Pass ?sector= or ?company=' }, { status: 400 });
}
