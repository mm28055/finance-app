import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/help — the "How this site works" guide, for the signed-in owner only (the "?" in the
// header). Kept here rather than in the page code so visitors never receive it.
// Keep it short: one screen, plain words. Update it when a feature or a schedule changes.

const GUIDE: { title: string; items: [string, string][] }[] = [
    {
        title: 'A company row',
        items: [
            ['Name colour', 'Blue: the last results call guided 20%+ revenue growth. Grey: guided below 20%. Black: no number given.'],
            ['Markers', '"filings" and "news" open the Filings panel on that company. "Results Oct 14" opens the calendar.'],
            ['Figures', 'Price, % below the 52-week high, market cap, P/E, P/B, P/S, ROCE, and the AI score of the latest call.'],
            ['Q1 27, Q4 26', 'The calls on record; the page icon opens the transcript.'],
        ],
    },
    {
        title: 'The company card',
        items: [
            ['Valuation', 'Price and P/E, P/B, EV/EBITDA history.'],
            ['Price assumes', 'The yearly profit growth today’s price needs to give your chosen return.'],
            ['Peers', 'The company against its closest rivals from the sector note.'],
            ['Qtrly to Ratio', 'Results, P&L, balance sheet, cash flow and ratios from Screener.'],
            ['The rest', 'Call analysis, business, management, holders, plants and projects, what we were watching, filings and news.'],
        ],
    },
    {
        title: 'Where the numbers come from',
        items: [
            ['Prices', 'NSE closing prices.'],
            ['Financials', 'Screener: read at most once a week, and again the day after results.'],
            ['Calls, filings, news', 'NSE filings and the business papers.'],
            ['Notes and calls', 'Own, follow, wait, pass, avoid, and the sector notes, are Claude’s.'],
        ],
    },
    {
        title: 'What updates when (India time)',
        items: [
            ['Weekdays, 6pm', 'Prices, market caps and ratios.'],
            ['Mon–Sat, 8pm', 'Filings, news, calendar, new calls (analysed) and results with the overnight view.'],
            ['Sun and Wed, 9am', 'Claude’s review: notes, calls, management changes, results checked. Also Fridays until 15 Nov.'],
        ],
    },
];

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Sign in to see this' }, { status: 401 });
    return NextResponse.json({ sections: GUIDE }, { headers: { 'Cache-Control': 'private, no-store' } });
}
