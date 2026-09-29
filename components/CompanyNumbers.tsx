"use client";
import React from 'react';
import { ValuationHistory } from './ValuationHistory';

// One card on the opened company row: price & valuation history, and five years of
// P&L, balance sheet, cash flow and working-capital ratios — all read from the
// company's Screener page when opened (see /api/companies/[id]/history and /financials).

// Bump when the shape of /financials changes, so browsers never reuse an older copy.
const DATA_VERSION = 3;

type Tab = 'history' | 'quarters' | 'profit-loss' | 'balance-sheet' | 'cash-flow' | 'ratios';
type Row = { label: string; src: string; expandable: boolean; values: (string | null)[] };
type Table = { columns: string[]; raw: (string | null)[]; rows: Row[] };
type Financials = { view: 'consolidated' | 'standalone'; empty: boolean; tables: Record<string, Table>; growth: Record<string, Record<string, string>> };

const TABS: { key: Tab; label: string }[] = [
    { key: 'history', label: 'Price & valuation' },
    { key: 'quarters', label: 'Quarterly' },
    { key: 'profit-loss', label: 'P&L' },
    { key: 'balance-sheet', label: 'Balance sheet' },
    { key: 'cash-flow', label: 'Cash flow' },
    { key: 'ratios', label: 'Ratios' },
];
// Rows drawn in bold: the ones a reader looks for first.
const KEY_ROWS = new Set(['Sales', 'Revenue', 'Operating profit', 'Financing profit', 'Net profit', 'Total', 'Free cash', 'ROCE', 'Operating cash']);
const NOTES: Partial<Record<Tab, string>> = {
    quarters: '₹ crore. YoY = the latest quarter against the same quarter a year earlier.',
    'profit-loss': '₹ crore, years to March. TTM = the last four quarters.',
    'balance-sheet': '₹ crore at 31 March.',
    'cash-flow': '₹ crore, years to March. Free cash = operating cash less capital spending.',
    ratios: 'Days of sales (debtors), of materials (inventory, payables). A shorter cash conversion cycle is better.',
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

function DataTable({ table, companyId, section, view }: { table: Table; companyId: string; section: string; view: string }) {
    const negative = (v: string | null) => !!v && /^-/.test(v.trim());
    // Rows with a "+" open Screener's breakdown underneath (fetched once, then kept).
    const [open, setOpen] = React.useState<Record<string, Record<string, Record<string, string>> | 'loading' | 'error'>>({});
    const toggle = (r: Row) => {
        if (open[r.src]) { setOpen(o => { const n = { ...o }; delete n[r.src]; return n; }); return; }
        setOpen(o => ({ ...o, [r.src]: 'loading' }));
        fetch(`/api/companies/${companyId}/schedule?section=${section}&parent=${encodeURIComponent(r.src)}&view=${view}`)
            .then(res => (res.ok ? res.json() : Promise.reject()))
            .then(d => setOpen(o => ({ ...o, [r.src]: d })))
            .catch(() => setOpen(o => ({ ...o, [r.src]: 'error' })));
    };
    const cellClass = (v: string | null, i: number) =>
        `py-1 px-1.5 text-right whitespace-nowrap ${negative(v) ? 'text-rose-400' : ''} ${table.columns[i] === 'TTM' || table.columns[i] === 'YoY' ? 'bg-gray-50' : ''}`;
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-[11px] tabular-nums">
                <thead>
                    <tr className="text-gray-400">
                        <th className="text-left font-medium py-1 pr-2 sticky left-0 bg-white" />
                        {table.columns.map(c => <th key={c} className="text-right font-medium py-1 px-1.5 whitespace-nowrap">{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {table.rows.map(r => {
                        const key = KEY_ROWS.has(r.label);
                        const sub = open[r.src];
                        return (
                            <React.Fragment key={r.label}>
                                <tr className={`border-t border-gray-50 ${key ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
                                    <td className="py-1 pr-2 whitespace-nowrap sticky left-0 bg-white">
                                        {r.label}
                                        {r.expandable && (
                                            <button onClick={() => toggle(r)} title={sub ? 'Hide breakdown' : 'Show breakdown'}
                                                className="ml-1 inline-flex items-center justify-center w-3.5 h-3.5 rounded text-[10px] leading-none text-[#4A7AAF] hover:bg-[#D4E5F7]">
                                                {sub ? '−' : '+'}
                                            </button>
                                        )}
                                    </td>
                                    {r.values.map((v, i) => <td key={i} className={cellClass(v, i)}>{v ?? '–'}</td>)}
                                </tr>
                                {sub === 'loading' && (
                                    <tr><td colSpan={table.columns.length + 1} className="py-1 pl-4 text-[10px] text-gray-400">Loading…</td></tr>
                                )}
                                {sub === 'error' && (
                                    <tr><td colSpan={table.columns.length + 1} className="py-1 pl-4 text-[10px] text-gray-400">Breakdown unavailable.</td></tr>
                                )}
                                {sub && sub !== 'loading' && sub !== 'error' && Object.entries(sub).map(([item, byCol]) => (
                                    <tr key={r.label + item} className="text-[10px] text-gray-500 bg-[#F8FAFC]">
                                        <td className="py-0.5 pr-2 pl-4 whitespace-nowrap sticky left-0 bg-[#F8FAFC]">{item}</td>
                                        {table.raw.map((c, i) => {
                                            const v = c ? (byCol[c] ?? null) : null;
                                            return <td key={i} className={`py-0.5 px-1.5 text-right whitespace-nowrap ${negative(v) ? 'text-rose-400' : ''}`}>{v === null || v === '' ? '–' : v}</td>;
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
    const [view, setView] = React.useState<'consolidated' | 'standalone' | null>(null);
    const [data, setData] = React.useState<Record<string, Financials | 'error'>>({});
    const key = view || 'default';
    const current = data[key];

    React.useEffect(() => {
        if (tab === 'history' || data[key] !== undefined) return;
        let alive = true;
        fetch(`/api/companies/${companyId}/financials?v=${DATA_VERSION}${view ? `&view=${view}` : ''}`)
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then((d: Financials) => { if (alive) { setData(m => ({ ...m, [key]: d, [d.view]: d })); if (!view) setView(d.view); } })
            .catch(() => { if (alive) setData(m => ({ ...m, [key]: 'error' })); });
        return () => { alive = false; };
    }, [companyId, tab, view, key, data]);

    const fin = current && current !== 'error' ? current : null;
    const table = fin && tab !== 'history' ? fin.tables[tab] : null;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap gap-1">
                    {TABS.map(t => (
                        <button key={t.key} onClick={() => setTab(t.key)}
                            className={`px-2 py-0.5 text-[10px] font-semibold rounded ${tab === t.key ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}>{t.label}</button>
                    ))}
                </div>
                {tab !== 'history' && fin && (
                    <div className="flex gap-0.5 bg-gray-100 p-0.5 rounded-md text-[10px] font-medium">
                        {(['consolidated', 'standalone'] as const).map(v => (
                            <button key={v} onClick={() => setView(v)}
                                className={`px-2 py-0.5 rounded capitalize ${fin.view === v ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>{v}</button>
                        ))}
                    </div>
                )}
            </div>

            {tab === 'history' && <ValuationHistory companyId={companyId} embedded />}

            {tab !== 'history' && (
                <>
                    {current === undefined && <div className="h-40 bg-gray-50 rounded animate-pulse" />}
                    {current === 'error' && <div className="h-16 flex items-center justify-center text-[11px] text-gray-400">Financials unavailable right now.</div>}
                    {fin && fin.empty && <div className="h-16 flex items-center justify-center text-[11px] text-gray-400">No {fin.view} figures for this company — try the other view.</div>}
                    {fin && !fin.empty && (
                        <>
                            {table ? <DataTable key={`${tab}-${fin.view}`} table={table} companyId={companyId} section={tab} view={fin.view} /> : <div className="text-[11px] text-gray-400 py-4 text-center">Not reported for this company.</div>}
                            {tab === 'profit-loss' && growthLine(fin.growth)}
                            <p className="text-[9px] text-gray-400 mt-1.5">{NOTES[tab]} Filed figures from Screener ({fin.view}).</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
