import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/help — the "How this site works" guide, for the signed-in owner only (the "?" in the
// header). Kept here rather than in the page code so visitors never receive it.
// Keep it short: one screen, plain words. Update it when a feature or a schedule changes.

const GUIDE: { title: string; items: [string, string][] }[] = [
    {
        title: 'Every weekday, 6pm',
        items: [
            ['Prices (no AI)', 'NSE closing prices; market cap, P/E, P/B and P/S worked out from them.'],
            ['Financials (no AI)', 'Each company’s figures re-read from Screener once a week, on its own day.'],
            ['What we were watching (no AI)', 'Number-based expectations (a margin, growth, order book) are marked met or missed once that quarter’s results are filed.'],
        ],
    },
    {
        title: 'Every evening, Mon–Sat, 8pm',
        items: [
            ['Filings', 'New NSE filings. Gemini Flash sorts out the routine ones; Gemini Pro summarises the rest. Shown in Filings and on the row.'],
            ['News', 'Business papers and 7%+ price moves. Gemini Pro finds the reason. Shown as "news".'],
            ['Calendar', 'New results and call dates. Gemini Pro reads call dates from the notices.'],
            ['Calls', 'New call transcripts fetched and analysed by Gemini Pro: score, highlights, guidance (which sets the name colour).'],
            ['Results', 'Numbers from Screener; Gemini Pro writes the first view (ahead, in line, behind) in the calendar.'],
        ],
    },
    {
        title: 'Sunday and Wednesday, 9am',
        items: [
            ['Claude’s review', 'Goes through everything since the last review: calls, filings, news, results. Updates the notes, the calls (own, follow, wait, pass, avoid) and management; checks and corrects Gemini’s result views.'],
            ['What we were watching', 'Claude settles the expectations that need judgement (a plant start, an order, a promise), weighs the settled ones in the call, and adds new ones from new calls.'],
        ],
    },
    {
        title: 'Friday, 9am (results season, until 15 Nov)',
        items: [
            ['Claude’s review', 'An extra review, the same as Sunday and Wednesday, while results come in fast.'],
        ],
    },
    {
        title: 'Every quarter',
        items: [
            ['Results season', 'About six weeks of results and calls, handled each evening and in the reviews.'],
            ['Note refresh', 'Once most of a sector’s calls are in, Claude refreshes that sector note (in a session with you).'],
        ],
    },
    {
        title: 'A company row',
        items: [
            ['Name colour', 'Blue: last results call guided 20%+ revenue growth. Grey: below 20%. Black: no number.'],
            ['Markers', '"filings" and "news" open them in the Filings panel; "Results Oct 14" opens the calendar.'],
            ['Figures', 'Price, % below the 52-week high, market cap, P/E, P/B, P/S, ROCE, and Gemini Pro’s score of the latest call.'],
        ],
    },
    {
        title: 'The company card',
        items: [
            ['Valuation', 'Price and valuation history.'],
            ['Price assumes', 'The yearly profit growth today’s price needs to give your chosen return.'],
            ['Peers', 'The company against its closest rivals from the sector note.'],
            ['Qtrly to Ratio', 'Screener’s figures: read at most once a week, and again the day after results.'],
        ],
    },
];

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Sign in to see this' }, { status: 401 });
    return NextResponse.json({ sections: GUIDE }, { headers: { 'Cache-Control': 'private, no-store' } });
}
