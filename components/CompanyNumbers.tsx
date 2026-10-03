"use client";
import React from 'react';
import { ValuationHistory } from './ValuationHistory';
import { PriceAssumes, PeerTable, prefetchPeers } from './PeerTabs';
import { useHoverOpen } from '@/lib/hover-open';

// One card on the opened company row: price & valuation history, and five years of
// P&L, balance sheet, cash flow and working-capital ratios — all read from the
// company's Screener page when opened (see /api/companies/[id]/history and /financials).

// Bump when the shape of /financials changes, so browsers never reuse an older copy.
const DATA_VERSION = 15;

type Tab = 'history' | 'assumes' | 'peers' | 'quarters' | 'profit-loss' | 'balance-sheet' | 'cash-flow' | 'ratios' | 'ratios-1';
type Row = { label: string; src: string; expandable: boolean; values: (string | null)[]; /** The figures a ratio is made from, shown above it (open by default, can be closed). */ parts?: { label: string; values: (string | null)[] }[]; /** A section heading shown above this row. */ heading?: string };
type Table = { columns: string[]; raw: (string | null)[]; rows: Row[] };
type Financials = { view: 'consolidated' | 'standalone'; empty: boolean; tables: Record<string, Table>; growth: Record<string, Record<string, string>> };

const TABS: { key: Tab; label: string; title?: string }[] = [
    { key: 'history', label: 'Valuation', title: 'Price & valuation history' },
    { key: 'assumes', label: 'Price assumes' },
    { key: 'peers', label: 'Peers' },
    { key: 'quarters', label: 'Qtrly', title: 'Quarterly results' },
    { key: 'profit-loss', label: 'P&L' },
    { key: 'balance-sheet', label: 'BS', title: 'Balance sheet' },
    { key: 'cash-flow', label: 'CF', title: 'Cash flow' },
    { key: 'ratios', label: 'WC' },
    { key: 'ratios-1', label: 'Ratio' },
];
// Tabs that load their own figures rather than the /financials tables.
const OWN_DATA = new Set<Tab>(['history', 'assumes', 'peers']);
// Rows drawn in bold: the ones a reader looks for first.
const KEY_ROWS = new Set(['Sales', 'Revenue', 'Operating profit', 'Financing profit', 'Net profit', 'Total', 'Free cash', 'ROCE', 'Operating cash']);
// What each row means, shown when the pointer rests on its label (no footnotes under the tables).
const HINTS: Record<string, string> = {
    'Working capital (₹cr)': 'Receivables plus inventory less payables, at the year end. Unbilled work and deposits are left out (Screener mixes them in one line).',
    'Working capital growth': 'Growth in receivables + inventory − payables against the year before; compare it with sales growth.',
    'Working capital, days of sales': 'Working capital as days of the year\'s sales: rising means it is growing faster than the business.',
    'Profit from operations': 'Operating profit as the filed cash-flow statement starts from it (before working-capital changes and tax).',
    'Operating cash before tax': 'Profit from operations plus the working-capital changes above: the cash the business itself produced.',
    'Operating cash after tax': 'Operating cash after tax paid, as filed.',
    'Interest paid': 'Interest actually paid, from the financing section of the cash flow (most companies add it back before operating cash).',
    'Capex (net of assets sold)': 'Spending on plants and equipment, less assets sold, from the investing section.',
    'Cash left for shareholders': 'Operating cash after tax, less interest paid and net capex: what the business produced for its owners.',
    'Net profit margin': 'Net profit ÷ sales (income, for a lender): how much of each ₹100 of sales is left as profit after all costs, interest and tax.',
    // Ratio tab
    'Debt to equity': 'Borrowings ÷ shareholders\' equity. Under 1 is comfortable for most businesses.',
    'Net debt to EBITDA': 'Borrowings less cash and bank balances (investments not deducted), ÷ operating profit: years of operating profit needed to repay debt. Under 2x is comfortable; above 3–4x is stretched.',
    'Interest cover': 'Operating profit ÷ interest. Above 3x is comfortable.',
    'Operating cash flow before tax (₹cr)': 'Cash from operations before tax paid. The Cash flow tab shows it after tax.',
    'Operating profit (₹cr)': 'Sales less operating expenses, before depreciation, interest and tax.',
    'Cash conversion': 'Operating cash flow before tax ÷ operating profit. Staying above about 70% means profits turn into cash.',
    'Free cash flow (₹cr)': 'Operating cash flow less capital spending.',
    'Free cash ÷ net profit': 'How much of net profit is left as cash after capital spending.',
    'Asset turnover': 'Sales ÷ total assets: sales earned per rupee of assets.',
    'Capex ÷ sales': 'Capital spending (operating cash less free cash) as a share of sales.',
    'Capex ÷ depreciation': 'Capital spending ÷ depreciation. Well above 1x means investing to grow, near 1x means maintaining.',
    'Dividend payout': 'Share of net profit paid out as dividends.',
    'ROCE': 'Return on capital employed: profit before interest and tax ÷ capital employed.',
    'ROE': 'Net profit ÷ year-end shareholders\' equity.',
    'P/E': 'Price ÷ earnings as it stood at 31 March of that year, on the last twelve months of profit.',
    'EV/EBITDA': 'Company value including debt ÷ operating profit, as it stood at 31 March of that year.',
    'P/B': 'Price ÷ book value, as it stood at 31 March of that year.',
    'P/Sales': 'Market value ÷ sales, as it stood at 31 March of that year.',
    // WC tab
    'Debtor days': 'Days of sales owed by customers.',
    'Inventory days': 'Days of materials and goods held in stock.',
    'Payable days': 'Days of purchases owed to suppliers.',
    'Cash conversion cycle': 'Debtor days + inventory days − payable days. Shorter is better.',
    'Working capital days': 'Days of sales tied up in working capital.',
    // Cash flow tab
    'Free cash': 'Operating cash flow less capital spending.',
    'Operating cash ÷ operating profit': 'Operating cash flow before tax ÷ operating profit.',
};
// The same for column headings.
const COLUMN_HINTS: Record<string, string> = {
    YoY: 'The latest period against the same period a year earlier (half-years for companies that report every six months).',
    TTM: 'The last four quarters.',
};

// Screener's growth summary as one quiet line under the P&L table.
const growthLine = (g: Financials['growth']) => {
    const pick = (title: string, key: string) => {
        const v = g[title]?.[key];
        return v && v !== '%' ? v : null;
    };
    const parts = [
        ['Sales', pick('Compounded Sales Growth', '5 Years'), pick('Compounded Sales Growth', '3 Years')],
        ['profit', pick('Compounded Profit Growth', '5 Years'), pick('Compounded Profit Growth', '3 Years')],
    ].filter(([, a, b]) => a || b).map(([l, a, b]) => `${l} ${a ?? '–'} / ${b ?? '–'}`);
    const roe = pick('Return on Equity', 'Last Year');
    if (!parts.length && !roe) return null;
    return (
        <p className="text-[10px] text-gray-400 mt-1.5">
            Yearly growth, 5 yrs / 3 yrs: {parts.join(' · ')}{roe ? ` · return on equity ${roe} last year` : ''}
        </p>
    );
};

const ALWAYS_OPEN = new Set(['Expenses', 'Borrowings', 'Other Assets']);

function DataTable({ table, companyId, section, view }: { table: Table; companyId: string; section: string; view: string }) {
    const negative = (v: string | null) => !!v && /^-/.test(v.trim());
    // Figures are shown to one decimal at most ("54.87%" → "54.9%", "30.57" → "30.6"); whole numbers stay as they are.
    // On hover: the figure as Screener files it, to two decimals at most (Screener gives some
    // companies' percentages only as whole numbers, so those show no decimals even here).
    const exact = (v: string | null) => {
        if (!v) return undefined;
        const m = v.trim().match(/^(-?[\d,]+)\.(\d+)(%?)$/);
        return m ? `${m[1]}.${m[2].slice(0, 2).padEnd(2, '0')}${m[3]}` : v;
    };
    const oneDp = (v: string) => {
        const m = v.trim().match(/^(-?)([\d,]+)\.(\d{2,})(%?)$/);
        if (!m) return v;
        const n = Number(`${m[2].replace(/,/g, '')}.${m[3]}`);
        const r = (Math.round(n * 10) / 10).toFixed(1);
        const [int, dec] = r.split('.');
        return `${m[1]}${m[2].includes(',') ? Number(int).toLocaleString('en-IN') : int}.${dec}${m[4]}`;
    };
    // Rows with a "+" open Screener's breakdown underneath (fetched once, then kept).
    const [open, setOpen] = React.useState<Record<string, Record<string, Record<string, string>> | 'loading' | 'error'>>({});
    const load = React.useCallback((r: Row) => {
        setOpen(o => ({ ...o, [r.src]: 'loading' }));
        fetch(`/api/companies/${companyId}/schedule?section=${section}&parent=${encodeURIComponent(r.src)}&view=${view}`)
            .then(res => (res.ok ? res.json() : Promise.reject()))
            .then(d => setOpen(o => ({ ...o, [r.src]: d })))
            .catch(() => setOpen(o => ({ ...o, [r.src]: 'error' })));
    }, [companyId, section, view]);
    const toggle = (r: Row) => {
        if (open[r.src]) { setOpen(o => { const n = { ...o }; delete n[r.src]; return n; }); return; }
        load(r);
    };
    // Expenses, borrowings and other assets open by themselves; the rest on a click.
    React.useEffect(() => {
        for (const r of table.rows) if (r.expandable && ALWAYS_OPEN.has(r.src)) load(r);
    }, [table, load]);
    // A ratio's own figures (e.g. operating cash flow and operating profit above cash conversion): open until closed.
    const [partsClosed, setPartsClosed] = React.useState<Record<string, boolean>>({});
    const cellClass = (v: string | null, i: number) =>
        `py-1 px-1.5 max-md:px-0.5 text-right whitespace-nowrap ${negative(v) ? 'text-rose-400' : ''} ${table.columns[i] === 'TTM' || table.columns[i] === 'YoY' ? 'bg-gray-50' : ''}`;
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-[11px] max-md:text-[10px] tabular-nums">
                <thead>
                    <tr className="text-gray-400">
                        <th className="text-left font-medium py-1 pr-2 sticky left-0 bg-white" />
                        {table.columns.map(c => <th key={c} title={COLUMN_HINTS[c]} className={`text-right font-medium py-1 px-1.5 max-md:px-0.5 whitespace-nowrap max-md:whitespace-normal max-md:leading-tight ${COLUMN_HINTS[c] ? 'cursor-help' : ''}`}>{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {table.rows.map(r => {
                        const key = KEY_ROWS.has(r.label);
                        const sub = open[r.src];
                        return (
                            <React.Fragment key={r.label}>
                                {r.heading && (
                                    <tr><td colSpan={table.columns.length + 1} className="pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 border-t border-gray-100">{r.heading}</td></tr>
                                )}
                                {r.parts && !partsClosed[r.label] && r.parts.map(p => (
                                    <tr key={r.label + p.label} className="text-[10px] text-gray-500 bg-[#F8FAFC]">
                                        <td title={HINTS[p.label]} className={`py-0.5 pr-2 pl-4 max-md:pl-2 max-md:pr-1 whitespace-nowrap max-md:whitespace-normal max-md:leading-tight sticky left-0 bg-[#F8FAFC] ${HINTS[p.label] ? 'cursor-help' : ''}`}>{p.label}</td>
                                        {p.values.map((v, i) => <td key={i} title={exact(v)} className={`py-0.5 px-1.5 max-md:px-0.5 text-right whitespace-nowrap ${negative(v) ? 'text-rose-400' : ''}`}>{v === null ? '–' : oneDp(v)}</td>)}
                                    </tr>
                                ))}
                                <tr className={`border-t border-gray-50 ${key ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
                                    <td className="py-1 pr-2 max-md:pr-1 whitespace-nowrap max-md:whitespace-normal max-md:leading-tight sticky left-0 bg-white">
                                        <span title={HINTS[r.label]} className={HINTS[r.label] ? 'cursor-help' : undefined}>{r.label}</span>
                                        {r.parts && (
                                            <button onClick={() => setPartsClosed(c => ({ ...c, [r.label]: !c[r.label] }))} title={partsClosed[r.label] ? 'Show the figures behind it' : 'Hide the figures behind it'}
                                                className="ml-1 inline-flex items-center justify-center w-3.5 h-3.5 rounded text-[10px] leading-none text-[#4A7AAF] hover:bg-[#D4E5F7]">
                                                {partsClosed[r.label] ? '+' : '−'}
                                            </button>
                                        )}
                                        {r.expandable && (
                                            <button onClick={() => toggle(r)} title={sub ? 'Hide breakdown' : 'Show breakdown'}
                                                className="ml-1 inline-flex items-center justify-center w-3.5 h-3.5 rounded text-[10px] leading-none text-[#4A7AAF] hover:bg-[#D4E5F7]">
                                                {sub ? '−' : '+'}
                                            </button>
                                        )}
                                    </td>
                                    {r.values.map((v, i) => <td key={i} title={exact(v)} className={cellClass(v, i)}>{v === null ? '–' : oneDp(v)}</td>)}
                                </tr>
                                {sub === 'loading' && (
                                    <tr><td colSpan={table.columns.length + 1} className="py-1 pl-4 text-[10px] text-gray-400">Loading…</td></tr>
                                )}
                                {sub === 'error' && (
                                    <tr><td colSpan={table.columns.length + 1} className="py-1 pl-4 text-[10px] text-gray-400">Breakdown unavailable.</td></tr>
                                )}
                                {sub && sub !== 'loading' && sub !== 'error' && Object.entries(sub).map(([item, byCol]) => (
                                    <tr key={r.label + item} className="text-[10px] text-gray-500 bg-[#F8FAFC]">
                                        <td className="py-0.5 pr-2 pl-4 max-md:pl-2 max-md:pr-1 whitespace-nowrap max-md:whitespace-normal max-md:leading-tight sticky left-0 bg-[#F8FAFC]">{item}</td>
                                        {table.raw.map((c, i) => {
                                            const v = c ? (byCol[c] ?? null) : null;
                                            return <td key={i} title={exact(v)} className={`py-0.5 px-1.5 max-md:px-0.5 text-right whitespace-nowrap ${negative(v) ? 'text-rose-400' : ''}`}>{v === null || v === '' ? '–' : oneDp(v)}</td>;
                                        })}
                                    </tr>
                                ))}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export function CompanyNumbers({ companyId }: { companyId: string }) {
    const [tab, setTab] = React.useState<Tab>('history');
    // Tabs also open when the pointer rests on them.
    const hover = useHoverOpen();
    const [view, setView] = React.useState<'consolidated' | 'standalone' | null>(null);
    const [data, setData] = React.useState<Record<string, Financials | 'error'>>({});
    const key = view || 'default';
    const current = data[key];

    React.useEffect(() => {
        if (OWN_DATA.has(tab) || data[key] !== undefined) return;
        let alive = true;
        fetch(`/api/companies/${companyId}/financials?v=${DATA_VERSION}${view ? `&view=${view}` : ''}`)
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then((d: Financials) => { if (alive) { setData(m => ({ ...m, [key]: d, [d.view]: d })); if (!view) setView(d.view); } })
            .catch(() => { if (alive) setData(m => ({ ...m, [key]: 'error' })); });
        return () => { alive = false; };
    }, [companyId, tab, view, key, data]);

    // The Price assumes and Peers tabs read several Screener pages; start as soon as the card opens.
    React.useEffect(() => { prefetchPeers(companyId).catch(() => {}); }, [companyId]);

    const fin = current && current !== 'error' ? current : null;
    const table = fin && !OWN_DATA.has(tab) ? fin.tables[tab] : null;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 max-md:p-2">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap gap-0.5">
                    {TABS.map(t => (
                        <button key={t.key} title={t.title} onClick={() => setTab(t.key)} {...hover(() => setTab(t.key))}
                            className={`px-1.5 py-0.5 text-[10px] font-semibold rounded whitespace-nowrap ${tab === t.key ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}>{t.label}</button>
                    ))}
                </div>
                {!OWN_DATA.has(tab) && fin && (
                    <div className="flex gap-0.5 bg-gray-100 p-0.5 rounded-md text-[10px] font-medium">
                        {(['consolidated', 'standalone'] as const).map(v => (
                            <button key={v} onClick={() => setView(v)}
                                className={`px-2 py-0.5 rounded capitalize ${fin.view === v ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>{v}</button>
                        ))}
                    </div>
                )}
            </div>

            {tab === 'history' && <ValuationHistory companyId={companyId} embedded />}
            {tab === 'assumes' && <PriceAssumes companyId={companyId} />}
            {tab === 'peers' && <PeerTable companyId={companyId} />}

            {!OWN_DATA.has(tab) && (
                <>
                    {current === undefined && <div className="h-40 bg-gray-50 rounded animate-pulse" />}
                    {current === 'error' && <div className="h-16 flex items-center justify-center text-[11px] text-gray-400">Financials unavailable right now.</div>}
                    {fin && fin.empty && <div className="h-16 flex items-center justify-center text-[11px] text-gray-400">No {fin.view} figures for this company — try the other view.</div>}
                    {fin && !fin.empty && (
                        <>
                            {table ? <DataTable key={`${tab}-${fin.view}`} table={table} companyId={companyId} section={tab} view={fin.view} /> : <div className="text-[11px] text-gray-400 py-4 text-center">Not reported for this company.</div>}
                            {tab === 'profit-loss' && growthLine(fin.growth)}
                        </>
                    )}
                </>
            )}
        </div>
    );
}
