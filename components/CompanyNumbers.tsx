"use client";
import React from 'react';
import { ValuationHistory } from './ValuationHistory';

// One card on the opened company row: price & valuation history, and five years of
// P&L, balance sheet, cash flow and working-capital ratios — all read from the
// company's Screener page when opened (see /api/companies/[id]/history and /financials).

type Tab = 'history' | 'quarters' | 'profit-loss' | 'balance-sheet' | 'cash-flow' | 'ratios';
type Table = { columns: string[]; rows: { label: string; values: (string | null)[] }[] };
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

function DataTable({ table }: { table: Table }) {
    const negative = (v: string | null) => !!v && /^-/.test(v.trim());
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
                        return (
                            <tr key={r.label} className={`border-t border-gray-50 ${key ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
                                <td className="py-1 pr-2 whitespace-nowrap sticky left-0 bg-white">{r.label}</td>
                                {r.values.map((v, i) => (
                                    <td key={i} className={`py-1 px-1.5 text-right whitespace-nowrap ${negative(v) ? 'text-rose-400' : ''} ${table.columns[i] === 'TTM' || table.columns[i] === 'YoY' ? 'bg-gray-50' : ''}`}>{v ?? '–'}</td>
                                ))}
                            </tr>
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
        fetch(`/api/companies/${companyId}/financials${view ? `?view=${view}` : ''}`)
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
                            {table ? <DataTable table={table} /> : <div className="text-[11px] text-gray-400 py-4 text-center">Not reported for this company.</div>}
                            {tab === 'profit-loss' && growthLine(fin.growth)}
                            <p className="text-[9px] text-gray-400 mt-1.5">{NOTES[tab]} Filed figures from Screener ({fin.view}).</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
