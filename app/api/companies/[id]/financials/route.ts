import { NextRequest, NextResponse } from 'next/server';
import { screenerPageUrl, fetchScreenerPage, screenerTable, screenerGrowth, screenerCompanyId, cachedFetch, keyed, FILED, type ScreenerView } from '@/lib/screener-page';

// GET /api/companies/[id]/financials?view=consolidated|standalone
// The last five quarters and the last five years of P&L, balance sheet, cash flow and working-capital ratios,
// plus Screener's growth summary, read from the company's Screener page when its
// card is opened. The page is cached for a week (refreshed after results); nothing is stored.

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
        ['Cash Conversion Cycle', 'Cash conversion cycle'], ['Working Capital Days', 'Working capital days'],
    ],
};

/**
 * Debt and cash ratios for the "Ratio 1" tab, per financial year, from Screener's P&L, balance sheet
 * and cash-flow tables (and the cash line inside "Other Assets", one extra cached request):
 * debt to equity, net debt to EBITDA, interest cover, cash conversion, free cash flow and its share
 * of profit, asset turnover, capex against sales and depreciation, dividend payout.
 * Lenders (no "Sales" row) get only the ratios that mean something for them.
 */
async function debtAndCashRatios(html: string, consolidated: boolean, key: string): Promise<{ columns: string[]; raw: (string | null)[]; rows: { label: string; src: string; expandable: boolean; values: (string | null)[]; parts?: { label: string; values: (string | null)[] }[]; heading?: string }[] } | null> {
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
            const res = await cachedFetch(FILED)(keyed(`https://www.screener.in/api/company/${sid}/schedules/?parent=${encodeURIComponent('Other Assets')}&section=balance-sheet${consolidated ? '&consolidated=' : ''}`, key));
            if (res.ok) cash = (await res.json())['Cash Equivalents'] ?? null;
        }
    } catch { /* net debt is left out */ }

    // Tax paid, from the operating cash-flow breakdown: Screener's cash conversion (CFO/OP) is measured
    // on operating cash flow BEFORE tax, so the figure shown beside it must be before tax too.
    let taxPaid: Record<string, string> | null = null;
    try {
        const sid = screenerCompanyId(html);
        if (sid && cf) {
            const res = await cachedFetch(FILED)(keyed(`https://www.screener.in/api/company/${sid}/schedules/?parent=${encodeURIComponent('Cash from Operating Activity')}&section=cash-flow${consolidated ? '&consolidated=' : ''}`, key));
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

    // Returns, from Screener's own ratios table.
    const rt = screenerTable(html, 'ratios');
    rows.push(
        ['ROCE', per(y => { const v = cell(rt, 'ROCE %', y); return v === null ? null : pct(v); })],
        // Screener tabulates ROE only for lenders; for the rest it is net profit on year-end shareholders' funds.
        ['ROE', per(y => {
            const v = cell(rt, 'ROE %', y);
            if (v !== null) return pct(v);
            const np = cell(pl, 'Net Profit', y), eq = (cell(bs, 'Equity Capital', y) ?? 0) + (cell(bs, 'Reserves', y) ?? 0);
            return np === null || eq <= 0 ? null : pct((np / eq) * 100);
        })],
    );

    // Valuation at each year-end: the multiple on the last trading day up to 31 March, from the
    // same weekly history Screener draws its valuation charts from (cached for 12 hours).
    const sid = screenerCompanyId(html);
    const multiples: [string, string, string, boolean][] = [
        ['P/E', 'Price to Earning-Median PE-EPS', 'Price to Earning', false],
        ['EV/EBITDA', 'EV Multiple-Median EV Multiple-EBITDA', 'EV Multiple', true],
        ['P/B', 'Price to book value-Median PBV-Book value', 'Price to book value', false],
        ['P/Sales', 'Market Cap to Sales-Median Market Cap to Sales-Sales', 'Market Cap to Sales', true],
    ];
    const months: Record<string, string> = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
    const yearEnd = (y: string) => { const m = y.match(/^([A-Z][a-z]{2}) (\d{4})$/); return m ? `${m[2]}-${months[m[1]]}-31` : null; };
    if (sid) {
        const series = await Promise.all(multiples.map(async ([, q, name]) => {
            try {
                const res = await cachedFetch(12 * 3600)(`https://www.screener.in/api/company/${sid}/chart/?q=${encodeURIComponent(q)}&days=3650${consolidated ? '&consolidated=true' : ''}`);
                if (!res.ok) return [] as [string, number][];
                const values: any[][] = ((await res.json()).datasets || []).find((d: any) => d.metric === name)?.values || [];
                return values.map(v => [String(v[0]), Number(v[1])] as [string, number]).filter(v => Number.isFinite(v[1]));
            } catch { return [] as [string, number][]; }
        }));
        multiples.forEach(([label, , , notForLenders], i) => {
            if (lender && notForLenders) return;
            rows.push([label, per(y => {
                const end = yearEnd(y);
                if (!end) return null;
                // The last reading in the six weeks up to the year-end.
                const from = `${end.slice(0, 5)}${String(Number(end.slice(5, 7)) - 1).padStart(2, '0')}-15`;
                const hit = series[i].filter(([d]) => d <= end && d >= from).pop();
                return hit ? `${hit[1].toFixed(1)}x` : null;
            })]);
        });
    }
    const kept = rows.filter(([, v]) => v.some(c => c !== null));
    if (!kept.length) return null;
    return {
        columns: years.map(c => c.replace(/^Mar /, 'FY').replace(/^FY20(\d\d)$/, 'FY$1')),
        raw: years,
        rows: kept.map(([label, values]) => ({ label, src: label, expandable: false, values, ...(label === 'Cash conversion' && conversionParts ? { parts: conversionParts } : {}),
            // "Valuation" heads the returns and year-end multiples at the bottom of the table.
            ...(label === (kept.some(([l]) => l === 'ROCE') ? 'ROCE' : 'ROE') ? { heading: 'Valuation' } : {}) })),
    };
}

/**
 * Two sections added under the WC tab's day counts, per financial year:
 *  1. "Working capital against sales": sales, receivables, inventory and payables (₹cr, from the
 *     balance-sheet breakdowns), receivables + stock − payables, its growth beside sales growth, and
 *     its days of sales — did working capital grow in step with the business?
 *  2. "Where the operating cash went": the filed cash-flow breakdown from profit from operations,
 *     through receivables, inventory, payables and other items, to operating cash before and after
 *     tax, with a total over the years shown.
 * Screener's "other assets" line is left out on purpose: it mixes unbilled work with deposits.
 * Lenders (no "Sales" row) get nothing. `raw` holds the table's year labels ("Mar 2026").
 */
async function workingCapitalRows(html: string, consolidated: boolean, key: string, raw: (string | null)[]) {
    const pl = screenerTable(html, 'profit-loss');
    const sid = screenerCompanyId(html);
    if (!pl || !sid || !pl.rows.some(r => r.label === 'Sales')) return null;
    const schedule = async (parent: string, section: string): Promise<Record<string, Record<string, string>>> => {
        try {
            const res = await cachedFetch(FILED)(keyed(`https://www.screener.in/api/company/${sid}/schedules/?parent=${encodeURIComponent(parent)}&section=${section}${consolidated ? '&consolidated=' : ''}`, key));
            return res.ok ? await res.json() : {};
        } catch { return {}; }
    };
    const [assets, liabilities, opCash, investing, financing] = await Promise.all([
        schedule('Other Assets', 'balance-sheet'), schedule('Other Liabilities', 'balance-sheet'), schedule('Cash from Operating Activity', 'cash-flow'),
        schedule('Cash from Investing Activity', 'cash-flow'), schedule('Cash from Financing Activity', 'cash-flow'),
    ]);
    const n = (v: string | null | undefined) => { const t = v?.replace(/,/g, '').trim(); if (!t) return null; const x = Number(t); return Number.isFinite(x) ? x : null; };
    const plCell = (label: string, y: string | null) => { const i = y ? pl.columns.indexOf(y) : -1; return i < 0 ? null : n(pl.rows.find(r => r.label === label)?.values[i]); };
    const sch = (o: Record<string, Record<string, string>>, label: string, y: string | null) => (y ? n(o[label]?.[y]) : null);
    const cr = (v: number | null) => (v === null ? null : Math.round(v).toLocaleString('en-IN'));
    const pct = (v: number | null) => (v === null || !Number.isFinite(v) ? null : `${v > 0 ? '+' : ''}${Math.round(v)}%`);

    const sales = raw.map(y => plCell('Sales', y));
    const recv = raw.map(y => sch(assets, 'Trade receivables', y));
    const inv = raw.map(y => sch(assets, 'Inventories', y));
    const pay = raw.map(y => sch(liabilities, 'Trade Payables', y));
    const wc = raw.map((_, i) => (recv[i] === null && inv[i] === null ? null : (recv[i] ?? 0) + (inv[i] ?? 0) - (pay[i] ?? 0)));
    const growth = (a: (number | null)[]) => a.map((v, i) => (i === 0 || v === null || a[i - 1] === null || !(a[i - 1]! > 0) ? null : ((v - a[i - 1]!) / a[i - 1]!) * 100));
    const haveWc = wc.some(v => v !== null);

    const fromOps = raw.map(y => sch(opCash, 'Profit from operations', y));
    const wcChanges = raw.map(y => sch(opCash, 'Working capital changes', y));
    const taxes = raw.map(y => sch(opCash, 'Direct taxes', y));
    const beforeTax = raw.map((_, i) => (fromOps[i] === null || wcChanges[i] === null ? null : fromOps[i]! + wcChanges[i]!));
    // After tax as filed (the cash-flow table's own line), so it matches the rest of the card to the crore.
    const cf = screenerTable(html, 'cash-flow');
    const filed = (y: string | null) => { const i = y && cf ? cf.columns.indexOf(y) : -1; return i < 0 ? null : n(cf!.rows.find(r => r.label === 'Cash from Operating Activity')?.values[i]); };
    const afterTax = raw.map((y, i) => filed(y) ?? (beforeTax[i] === null ? null : beforeTax[i]! + (taxes[i] ?? 0)));
    const haveBridge = fromOps.some(v => v !== null);
    const total = (a: (number | null)[]) => (a.some(v => v !== null) ? a.reduce<number>((s, v) => s + (v ?? 0), 0) : null);

    type R = { label: string; src: string; expandable: boolean; values: (string | null)[]; heading?: string };
    const out: R[] = [];
    const add = (label: string, values: (string | null)[], heading?: string, totalValue?: string | null) =>
        out.push({ label, src: label, expandable: false, values: [...values, totalValue ?? null], ...(heading ? { heading } : {}) });
    if (haveWc) {
        add('Sales (₹cr)', sales.map(cr), 'Working capital against sales');
        add('Receivables (₹cr)', recv.map(cr));
        add('Inventory (₹cr)', inv.map(cr));
        add('Payables (₹cr)', pay.map(cr));
        add('Working capital (₹cr)', wc.map(cr));
        add('Sales growth', growth(sales).map(pct));
        add('Working capital growth', growth(wc).map(pct));
        add('Working capital, days of sales', wc.map((v, i) => (v === null || !sales[i] ? null : String(Math.round((v / sales[i]!) * 365)))));
    }
    if (haveBridge) {
        const bridge = (label: string, a: (number | null)[], heading?: string) => add(label, a.map(cr), heading, cr(total(a)));
        bridge('Profit from operations', fromOps, 'Where the operating cash went (₹cr)');
        bridge('Receivables', raw.map(y => sch(opCash, 'Receivables', y)));
        bridge('Inventory', raw.map(y => sch(opCash, 'Inventory', y)));
        bridge('Payables', raw.map(y => sch(opCash, 'Payables', y)));
        bridge('Other items', raw.map(y => sch(opCash, 'Other WC items', y)));
        bridge('Operating cash before tax', beforeTax);
        bridge('Tax paid', taxes);
        bridge('Operating cash after tax', afterTax);
        // Then what lenders and plants take: interest is reported under financing (most companies add it back
        // before operating cash), capex under investing. Interest paid inside operating cash is not taken twice.
        const interest = raw.map(y => { const inOps = sch(opCash, 'Interest paid', y); return inOps ? null : sch(financing, 'Interest paid fin', y); });
        const capex = raw.map(y => { const buy = sch(investing, 'Fixed assets purchased', y), sold = sch(investing, 'Fixed assets sold', y); return buy === null && sold === null ? null : (buy ?? 0) + (sold ?? 0); });
        if (interest.some(v => v !== null) || capex.some(v => v !== null)) {
            bridge('Interest paid', interest);
            bridge('Capex (net of assets sold)', capex);
            bridge('Cash left for shareholders', afterTax.map((v, i) => (v === null ? null : v + (interest[i] ?? 0) + (capex[i] ?? 0))));
        }
    }
    return out.length ? out : null;
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const asked = req.nextUrl.searchParams.get('view') as ScreenerView | null;
    try {
        const page = await screenerPageUrl(id, asked === 'consolidated' || asked === 'standalone' ? asked : undefined);
        if (!page) return NextResponse.json({ error: 'No Screener page for this company' }, { status: 404 });
        const html = await fetchScreenerPage(page.url, FILED, page.key);
        if (!html) return NextResponse.json({ error: 'Screener page unavailable' }, { status: 502 });

type Row = { label: string; src: string; expandable: boolean; values: (string | null)[]; heading?: string };
        // Net profit as a share of sales (income, for a lender), worked out per column and placed under net profit.
        // `skipLast` leaves the quarterly table's YoY column empty.
        const withNetMargin = (rows: Row[], skipLast: boolean): Row[] => {
            const np = rows.findIndex(r => r.src === 'Net Profit'), sales = rows.find(r => r.src === 'Sales' || r.src === 'Revenue');
            if (np < 0 || !sales) return rows;
            const n = (v: string | null) => (v === null || v === '' ? null : Number(v.replace(/,/g, '')));
            const values = rows[np].values.map((v, i) => {
                if (skipLast && i === rows[np].values.length - 1) return null;
                const p = n(v), s = n(sales.values[i]);
                return p === null || s === null || !isFinite(p) || !isFinite(s) || s <= 0 ? null : `${Math.round((p / s) * 100)}%`;
            });
            if (!values.some(v => v !== null)) return rows;
            return [...rows.slice(0, np + 1), { label: 'Net profit margin', src: 'Net profit margin', expandable: false, values }, ...rows.slice(np + 1)];
        };
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
                rows: section === 'profit-loss' ? withNetMargin(rows, false) : rows,
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
            if (rows.length) tables['quarters'] = { columns: [...qCols.map(i => fq(q.columns[i])), 'YoY'], raw: [...qCols.map(i => q.columns[i]), null], rows: withNetMargin(rows, true) };
        }
        // "Ratio 1": debt and cash measures worked out from the same filed tables, last five years.
        const ratio1 = await debtAndCashRatios(html, page.view === 'consolidated', page.key);
        if (ratio1) tables['ratios-1'] = ratio1;
        // WC tab: working capital against sales, and where the operating cash went (a "Total" column for the bridge).
        if (tables['ratios']) {
            const extra = await workingCapitalRows(html, page.view === 'consolidated', page.key, tables['ratios'].raw);
            if (extra) {
                const t = tables['ratios'];
                tables['ratios'] = { columns: [...t.columns, 'Total'], raw: [...t.raw, null], rows: [...t.rows.map(r => ({ ...r, values: [...r.values, null] })), ...extra] };
            }
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
