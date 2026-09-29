import { NextRequest, NextResponse } from 'next/server';
import { screenerPageUrl, fetchScreenerPage, screenerTable, screenerGrowth, type ScreenerView } from '@/lib/screener-page';

// GET /api/companies/[id]/financials?view=consolidated|standalone
// The last four quarters and the last five years of P&L, balance sheet, cash flow and working-capital ratios,
// plus Screener's growth summary, read from the company's Screener page when its
// card is opened. The page is cached for a day; nothing is stored.

const YEARS = 5;

// Rows shown, in order, with plain-English labels. Anything else on Screener is left out.
const ROWS: Record<string, [string, string][]> = {
    'profit-loss': [
        ['Sales', 'Sales'], ['Revenue', 'Revenue'], ['Expenses', 'Expenses'], ['Operating Profit', 'Operating profit'], ['Financing Profit', 'Financing profit'],
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

type Row = { label: string; src: string; expandable: boolean; values: (string | null)[] };
        const tables: Record<string, { columns: string[]; raw: (string | null)[]; rows: Row[] }> = {};
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
                    return r ? { label, src, expandable: r.expandable, values: keep.map(k => r.values[k.i] ?? null) } : null;
                })
                .filter((r): r is Row => !!r && r.values.some(v => v !== null));
            if (rows.length) tables[section] = {
                columns: keep.map(k => k.c.replace(/^Mar /, 'FY').replace(/^FY20(\d\d)$/, 'FY$1')),
                raw: keep.map(k => (k.c === 'TTM' ? null : k.c)),
                rows,
            };
        }
        // Last four quarters, plus the latest quarter's growth on the same quarter a year earlier.
        const q = screenerTable(html, 'quarters');
        if (q && q.columns.length >= 1) {
            const n = q.columns.length;
            const last4 = [...Array(Math.min(4, n)).keys()].map(k => n - Math.min(4, n) + k);
            // Half-yearly reporters (SMEs) have only Mar/Sep columns: a year back is two columns, not four.
            const halfYearly = q.columns.slice(-3).every(c => /^(Mar|Sep) /.test(c));
            const back = halfYearly ? 2 : 4;
            const yearAgo = n > back ? n - 1 - back : -1;
            const num = (v: string | null | undefined) => (v === null || v === undefined || v === '' ? null : Number(v.replace(/,/g, '').replace('%', '')));
            const growthRows = new Set(['Sales', 'Revenue', 'Operating Profit', 'Financing Profit', 'Net Profit', 'EPS in Rs']);
            const rows = ROWS['profit-loss']
                .filter(([src]) => src !== 'Dividend Payout %')
                .map(([src, label]) => {
                    const r = q.rows.find(x => x.label === src);
                    if (!r) return null;
                    const values: (string | null)[] = last4.map(i => r.values[i] ?? null);
                    let yoy: string | null = null;
                    if (growthRows.has(src) && yearAgo >= 0) {
                        const now = num(r.values[n - 1]), then = num(r.values[yearAgo]);
                        if (now !== null && then !== null && then > 0) yoy = `${now >= then ? '+' : ''}${Math.round(((now - then) / then) * 100)}%`;
                    }
                    return { label, src, expandable: r.expandable, values: [...values, yoy] };
                })
                .filter((r): r is Row => !!r && r.values.some(v => v !== null));
            // "Jun 2026" → "Q1 FY27" (Indian financial year, April–March), as the rest of the site labels quarters.
            const fq = (c: string) => {
                const m = c.match(/^(Mar|Jun|Sep|Dec) (\d{4})$/);
                if (!m) return c;
                const y = Number(m[2]);
                const [qn, fy] = m[1] === 'Jun' ? [1, y + 1] : m[1] === 'Sep' ? [2, y + 1] : m[1] === 'Dec' ? [3, y + 1] : [4, y];
                const fyLabel = `FY${String(fy % 100).padStart(2, '0')}`;
                return halfYearly ? `${qn === 2 ? 'H1' : 'H2'} ${fyLabel}` : `Q${qn} ${fyLabel}`;
            };
            if (rows.length) tables['quarters'] = { columns: [...last4.map(i => fq(q.columns[i])), 'YoY'], raw: [...last4.map(i => q.columns[i]), null], rows };
        }
        const empty = !tables['profit-loss']?.rows.some(r => r.values.some(v => v !== null && v !== '0'));
        return NextResponse.json({
            view: page.view,
            empty,
            tables,
            growth: screenerGrowth(html),
        }, { headers: { 'Cache-Control': 'private, max-age=600' } });
    } catch {
        return NextResponse.json({ error: 'Financials unavailable' }, { status: 502 });
    }
}
