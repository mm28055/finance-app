import { NextRequest, NextResponse } from 'next/server';
import { screenerPageUrl, fetchScreenerPage, screenerTable, screenerGrowth, screenerCompanyId, cachedFetch, type ScreenerView } from '@/lib/screener-page';

// GET /api/companies/[id]/financials?view=consolidated|standalone
// The last five quarters and the last five years of P&L, balance sheet, cash flow and working-capital ratios,
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

/**
 * Debt and cash ratios for the "Ratio 1" tab, per financial year, from Screener's P&L, balance sheet
 * and cash-flow tables (and the cash line inside "Other Assets", one extra cached request):
 * debt to equity, net debt to EBITDA, interest cover, cash conversion, free cash flow and its share
 * of profit, asset turnover, capex against sales and depreciation, dividend payout.
 * Lenders (no "Sales" row) get only the ratios that mean something for them.
 */
async function debtAndCashRatios(html: string, consolidated: boolean): Promise<{ columns: string[]; raw: (string | null)[]; rows: { label: string; src: string; expandable: boolean; values: (string | null)[]; parts?: { label: string; values: (string | null)[] }[] }[] } | null> {
    const pl = screenerTable(html, 'profit-loss'), bs = screenerTable(html, 'balance-sheet'), cf = screenerTable(html, 'cash-flow');
    if (!pl || !bs) return null;
    const years = pl.columns.filter(c => c !== 'TTM' && bs.columns.includes(c)).slice(-YEARS);
    if (!years.length) return null;
    const num = (v: string | null | undefined) => {
        if (v === null || v === undefined || v === '') return null;
        const n = Number(v.replace(/,/g, '').replace('%', ''));
        return Number.isFinite(n) ? n : null;
    };
    const cell = (t: typeof pl | null, label: string, year: string) => {
        const i = t ? t.columns.indexOf(year) : -1;
        return i < 0 ? null : num(t!.rows.find(r => r.label === label)?.values[i]);
    };

    // Cash and bank balances sit inside "Other Assets"; without them net debt cannot be shown.
    let cash: Record<string, string> | null = null;
    try {
        const sid = screenerCompanyId(html);
        if (sid) {
            const res = await cachedFetch(86400)(`https://www.screener.in/api/company/${sid}/schedules/?parent=${encodeURIComponent('Other Assets')}&section=balance-sheet${consolidated ? '&consolidated=' : ''}`);
            if (res.ok) cash = (await res.json())['Cash Equivalents'] ?? null;
        }
    } catch { /* net debt is left out */ }

    // Tax paid, from the operating cash-flow breakdown: Screener's cash conversion (CFO/OP) is measured
    // on operating cash flow BEFORE tax, so the figure shown beside it must be before tax too.
    let taxPaid: Record<string, string> | null = null;
    try {
        const sid = screenerCompanyId(html);
        if (sid && cf) {
            const res = await cachedFetch(86400)(`https://www.screener.in/api/company/${sid}/schedules/?parent=${encodeURIComponent('Cash from Operating Activity')}&section=cash-flow${consolidated ? '&consolidated=' : ''}`);
            if (res.ok) taxPaid = (await res.json())['Direct taxes'] ?? null;
        }
    } catch { /* falls back to the figure implied by the ratio */ }

    const lender = !pl.rows.some(r => r.label === 'Sales');
    const x = (v: number) => `${v.toFixed(v >= 10 ? 0 : 1)}x`;
    const pct = (v: number) => `${Math.round(v)}%`;
    const per = (fn: (y: string) => string | null) => years.map(fn);

    const crore = (v: number | null) => (v === null ? null : Math.round(v).toLocaleString('en-IN'));
    // The two figures cash conversion is made from, shown above it on the card.
    const conversionParts = lender ? undefined : [
        {
            label: 'Operating cash flow before tax (₹cr)',
            values: per(y => {
                const o = cell(cf, 'Cash from Operating Activity', y), t = num(taxPaid?.[y]);
                if (o !== null && t !== null) return crore(o - t); // tax paid is a negative figure
                // No breakdown: the figure the ratio implies.
                const r = cell(cf, 'CFO/OP', y), op = cell(pl, 'Operating Profit', y);
                return r === null || op === null ? null : crore((r / 100) * op);
            }),
        },
        { label: 'Operating profit (₹cr)', values: per(y => crore(cell(pl, 'Operating Profit', y))) },
    ];
    const rows: [string, (string | null)[]][] = [
        ['Debt to equity', per(y => {
            const debt = cell(bs, 'Borrowings', y), eq = (cell(bs, 'Equity Capital', y) ?? 0) + (cell(bs, 'Reserves', y) ?? 0);
            return debt === null || eq <= 0 ? null : x(debt / eq);
        })],
        ['Net debt to EBITDA', per(y => {
            const debt = cell(bs, 'Borrowings', y), c = num(cash?.[y]), op = cell(pl, 'Operating Profit', y);
            if (lender || debt === null || c === null || op === null) return null;
            if (debt - c <= 0) return 'Net cash';
            return op <= 0 ? 'Loss' : x((debt - c) / op);
        })],
        ['Interest cover', per(y => {
            const op = cell(pl, 'Operating Profit', y), int = cell(pl, 'Interest', y);
            if (lender || op === null || int === null) return null;
            return int <= 0 ? 'No interest' : op <= 0 ? 'Loss' : x(op / int);
        })],
        // A lender's cash flows are its lending, so cash conversion, free cash and capex say nothing about it.
        ['Cash conversion', per(y => { const v = cell(cf, 'CFO/OP', y); return lender || v === null ? null : pct(v); })],
        ['Free cash flow (₹cr)', per(y => { const v = cell(cf, 'Free Cash Flow', y); return lender || v === null ? null : Math.round(v).toLocaleString('en-IN'); })],
        ['Free cash ÷ net profit', per(y => {
            const f = cell(cf, 'Free Cash Flow', y), np = cell(pl, 'Net Profit', y);
            return lender || f === null || np === null || np <= 0 ? null : pct((f / np) * 100);
        })],
        ['Asset turnover', per(y => {
            const s = cell(pl, 'Sales', y), a = cell(bs, 'Total Assets', y) ?? cell(bs, 'Total Liabilities', y);
            return s === null || !a ? null : `${(s / a).toFixed(2)}x`;
        })],
        // Capex = operating cash flow less free cash flow (Screener's free cash flow is after capex).
        ['Capex ÷ sales', per(y => {
            const o = cell(cf, 'Cash from Operating Activity', y), f = cell(cf, 'Free Cash Flow', y), s = cell(pl, 'Sales', y);
            return o === null || f === null || !s ? null : pct(((o - f) / s) * 100);
        })],
        ['Capex ÷ depreciation', per(y => {
            const o = cell(cf, 'Cash from Operating Activity', y), f = cell(cf, 'Free Cash Flow', y), d = cell(pl, 'Depreciation', y);
            return lender || o === null || f === null || !d ? null : x((o - f) / d);
        })],
        ['Dividend payout', per(y => { const v = cell(pl, 'Dividend Payout %', y); return v === null ? null : pct(v); })],
    ];
    const kept = rows.filter(([, v]) => v.some(c => c !== null));
    if (!kept.length) return null;
    return {
        columns: years.map(c => c.replace(/^Mar /, 'FY').replace(/^FY20(\d\d)$/, 'FY$1')),
        raw: years,
        rows: kept.map(([label, values]) => ({ label, src: label, expandable: false, values, ...(label === 'Cash conversion' && conversionParts ? { parts: conversionParts } : {}) })),
    };
}

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
        // Last five quarters, so the latest sits beside the same quarter a year earlier, plus that growth.
        const q = screenerTable(html, 'quarters');
        if (q && q.columns.length >= 1) {
            const n = q.columns.length;
            // Half-yearly reporters (SMEs) have only Mar/Sep columns: a year back is two columns, not four.
            const halfYearly = q.columns.slice(-3).every(c => /^(Mar|Sep) /.test(c));
            const show = Math.min(halfYearly ? 3 : 5, n);
            const qCols = [...Array(show).keys()].map(k => n - show + k);
            const back = halfYearly ? 2 : 4;
            const yearAgo = n > back ? n - 1 - back : -1;
            const num = (v: string | null | undefined) => (v === null || v === undefined || v === '' ? null : Number(v.replace(/,/g, '').replace('%', '')));
            const growthRows = new Set(['Sales', 'Revenue', 'Operating Profit', 'Financing Profit', 'Net Profit', 'EPS in Rs']);
            const rows = ROWS['profit-loss']
                .filter(([src]) => src !== 'Dividend Payout %')
                .map(([src, label]) => {
                    const r = q.rows.find(x => x.label === src);
                    if (!r) return null;
                    const values: (string | null)[] = qCols.map(i => r.values[i] ?? null);
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
            if (rows.length) tables['quarters'] = { columns: [...qCols.map(i => fq(q.columns[i])), 'YoY'], raw: [...qCols.map(i => q.columns[i]), null], rows };
        }
        // "Ratio 1": debt and cash measures worked out from the same filed tables, last five years.
        const ratio1 = await debtAndCashRatios(html, page.view === 'consolidated');
        if (ratio1) tables['ratios-1'] = ratio1;

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
