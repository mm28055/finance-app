import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/help — the "How this site works" guide, for the signed-in owner only (the "?" in the
// header). Kept here rather than in the page code so visitors never receive it.
// Keep it short: one screen, plain words. Update it when a feature or a schedule changes.

const GUIDE: { title: string; items: [string, string][] }[] = [
    {
        title: 'Who does what',
        items: [
            ['Claude', 'Writes the sector notes and the calls (own, follow, wait, pass, avoid). Reviews the week twice: updates notes, management and expectations, and checks Gemini’s work.'],
            ['Gemini Pro', 'Every evening: analyses each new earnings call (score, highlights, guidance), summarises important filings, finds why a share moved 7%+, reads call dates from notices, writes the first view on new results. Also answers the sector chat.'],
            ['Gemini Flash', 'Only sorts the evening’s filings and news into routine or worth a look, before Gemini Pro reads them.'],
            ['No AI', 'Prices (NSE), financial figures and shareholding (Screener).'],
        ],
    },
    {
        title: 'Weekdays, 6pm',
        items: [
            ['Prices', 'NSE closing prices; market cap, P/E, P/B and P/S worked out from them.'],
        ],
    },
    {
        title: 'Every evening (Mon–Sat), 8pm',
        items: [
            ['1. Filings', 'New NSE filings: Flash sorts, Pro summarises the important ones. They appear in Filings and on the row.'],
            ['2. News', 'Business papers and big price moves: Pro finds the reason. Shown as "news".'],
            ['3. Calendar', 'New results and call dates.'],
            ['4. Calls', 'New call transcripts are fetched and analysed by Pro. The guidance sets the name colour.'],
            ['5. Results', 'Numbers from Screener, then Pro’s first view (ahead, in line, behind) in the calendar.'],
        ],
    },
    {
        title: 'Sun and Wed, 9am (also Fri until 15 Nov)',
        items: [
            ['Claude’s review', 'Reads what came in since the last review: new calls, filings, news, results. Updates the notes and calls where needed, checks and corrects Gemini’s result views, and logs every change.'],
        ],
    },
    {
        title: 'A company row',
        items: [
            ['Name colour', 'Blue: last results call guided 20%+ revenue growth. Grey: below 20%. Black: no number.'],
            ['Markers', '"filings" and "news" open them in the Filings panel; "Results Oct 14" opens the calendar.'],
            ['Figures', 'Price, % below the 52-week high, market cap, P/E, P/B, P/S, ROCE, and Gemini’s score of the latest call.'],
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
