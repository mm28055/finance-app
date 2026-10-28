import { NextResponse } from 'next/server';
import { getSectorFilings, getCompanyFilings } from '@/lib/filings/server';
import { filingsFeed } from '@/lib/filings/feed';
import { shownFilter } from '@/lib/hidden';

export const dynamic = 'force-dynamic';

// GET /api/filings?sector=Aerospace%20defence  -> last month for the sector panel
// GET /api/filings?company=Avantel             -> last six months for one company
// GET /api/filings?all=1                       -> every company's filings and news, for the slide-in panel (calls: holdings only)
// GET /api/filings?calls=1                     -> every company's calls of the last two months, loaded in the background for the panel's Calls tab
// Hidden companies (lib/hidden) are left out of the lists unless "Show hidden" is on; a single company's own filings always show.
export async function GET(req: Request) {
    const url = new URL(req.url);
    const sector = url.searchParams.get('sector');
    const company = url.searchParams.get('company');
    if (url.searchParams.has('calls')) return NextResponse.json({ calls: (await filingsFeed({ calls: 'all', shown: await shownFilter() })).calls });
    if (url.searchParams.has('all')) return NextResponse.json(await filingsFeed({ calls: 'portfolio', shown: await shownFilter() }));
    if (sector) {
        const shown = await shownFilter();
        const res = getSectorFilings(sector);
        return NextResponse.json({ ...res, filings: res.filings.filter(f => shown(f.company)) });
    }
    if (company) return NextResponse.json({ company, filings: getCompanyFilings(company) });
    return NextResponse.json({ error: 'Pass ?sector= or ?company=' }, { status: 400 });
}
