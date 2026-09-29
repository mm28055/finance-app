import { NextRequest, NextResponse } from 'next/server';
import { screenerPageUrl, fetchScreenerPage, screenerTable, screenerGrowth, type ScreenerView } from '@/lib/screener-page';

// GET /api/companies/[id]/financials?view=consolidated|standalone
// The last five years of P&L, balance sheet, cash flow and working-capital ratios,
// plus Screener's growth summary, read from the company's Screener page when its
// card is opened. The page is cached for a day; nothing is stored.

const YEARS = 5;

// Rows shown, in order, with plain-English labels. Anything else on Screener is left out.
const ROWS: Record<string, [string, string][]> = {
    'profit-loss': [
        ['Sales', 'Sales'], ['Revenue', 'Revenue'], ['Operating Profit', 'Operating profit'], ['Financing Profit', 'Financing profit'],
        ['OPM %', 'Operating margin'], ['Financing Margin %', 'Financing margin'], ['Other Income', 'Other income'],
        ['Interest', 'Interest'], ['Depreciation', 'Depreciation'], ['Profit before tax', 'Profit before tax'], ['Tax %', 'Tax rate'],
        ['Net Profit', 'Net profit'], ['EPS in Rs', 'EPS (₹)'], ['Dividend Payout %', 'Dividend payout'],
    ],
    'balance-sheet': [
        ['Equity Capital', 'Share capital'], ['Reserves', 'Reserves'], ['Deposits', 'Deposits'], ['Borrowings', 'Borrowings'],
        ['Other Liabilities', 'Other liabilities'], ['Total Liabilities', 'Total'], ['Fixed Assets', 'Fixed assets'],
        ['CWIP', 'Work in progress'], ['Investments', 'Investments'], ['Other Assets', 'Other assets'],
    ],
    'cash-flow': [
        ['Cash from Operating Activity', 'Operating cash'], ['Cash from Investing Activity', 'Investing'],
        ['Cash from Financing Activity', 'Financing'], ['Net Cash Flow', 'Net cash flow'], ['Free Cash Flow', 'Free cash'],
        ['CFO/OP', 'Operating cash ÷ operating profit'],
    ],
    ratios: [
        ['Debtor Days', 'Debtor days'], ['Inventory Days', 'Inventory days'], ['Days Payable', 'Payable days'],
        ['Cash Conversion Cycle', 'Cash conversion cycle'], ['Working Capital Days', 'Working capital days'], ['ROCE %', 'ROCE'], ['ROE %', 'ROE'],
    ],
};

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const asked = req.nextUrl.searchParams.get('view') as ScreenerView | null;
    try {
        const page = await screenerPageUrl(id, asked === 'consolidated' || asked === 'standalone' ? asked : undefined);
        if (!page) return NextResponse.json({ error: 'No Screener page for this company' }, { status: 404 });
        const html = await fetchScreenerPage(page.url, 86400);
        if (!html) return NextResponse.json({ error: 'Screener page unavailable' }, { status: 502 });

        const tables: Record<string, { columns: string[]; rows: { label: string; values: (string | null)[] }[] }> = {};
        for (const [section, wanted] of Object.entries(ROWS)) {
            const t = screenerTable(html, section);
            if (!t) continue;
            // Last five years; the P&L also keeps its trailing-twelve-months column.
            const ttm = t.columns[t.columns.length - 1] === 'TTM';
            const yearCols = t.columns.map((c, i) => ({ c, i })).filter(x => x.c !== 'TTM').slice(-YEARS);
            const keep = ttm ? [...yearCols, { c: 'TTM', i: t.columns.length - 1 }] : yearCols;
            const rows = wanted
                .map(([src, label]) => {
                    const r = t.rows.find(x => x.label === src);
                    return r ? { label, values: keep.map(k => r.values[k.i] ?? null) } : null;
                })
                .filter((r): r is { label: string; values: (string | null)[] } => !!r && r.values.some(v => v !== null));
            if (rows.length) tables[section] = { columns: keep.map(k => k.c.replace(/^Mar /, 'FY').replace(/^FY20(\d\d)$/, 'FY$1')), rows };
        }
        const empty = !tables['profit-loss']?.rows.some(r => r.values.some(v => v !== null && v !== '0'));
        return NextResponse.json({
            view: page.view,
            empty,
            tables,
            growth: screenerGrowth(html),
        }, { headers: { 'Cache-Control': 'private, max-age=3600' } });
    } catch {
        return NextResponse.json({ error: 'Financials unavailable' }, { status: 502 });
    }
}
