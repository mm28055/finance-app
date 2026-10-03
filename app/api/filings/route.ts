import { NextResponse } from 'next/server';
import { getSectorFilings, getCompanyFilings } from '@/lib/filings/server';
import { filingsFeed } from '@/lib/filings/feed';

export const dynamic = 'force-dynamic';

// GET /api/filings?sector=Aerospace%20defence  -> last month for the sector panel
// GET /api/filings?company=Avantel             -> last six months for one company
// GET /api/filings?all=1                       -> every company's filings and news, for the slide-in panel (calls: holdings only)
// GET /api/filings?calls=1                     -> every company's calls of six months, loaded when the panel's Calls tab opens
export async function GET(req: Request) {
    const url = new URL(req.url);
    const sector = url.searchParams.get('sector');
    const company = url.searchParams.get('company');
    if (url.searchParams.has('calls')) return NextResponse.json({ calls: (await filingsFeed({ calls: 'all' })).calls });
    if (url.searchParams.has('all')) return NextResponse.json(await filingsFeed({ calls: 'portfolio' }));
    if (sector) return NextResponse.json(getSectorFilings(sector));
    if (company) return NextResponse.json({ company, filings: getCompanyFilings(company) });
    return NextResponse.json({ error: 'Pass ?sector= or ?company=' }, { status: 400 });
}
