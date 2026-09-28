"use client";
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { EnrichedCompany } from './SectorList';

// The sector's results in one ranked table: every company's latest quarter
// against the same quarter a year earlier, or its last twelve months. Figures
// are the filed results (Screener). Click a column heading to sort by it.

interface SectorSnapshotProps {
    sectorName: string;
    companies: EnrichedCompany[];
}

type Mode = 'QUARTER' | 'TTM';
type Row = {
    id: string;
    name: string;
    quarter: string;
    older: boolean;
    revenue: number | null;
    revenueYoY: number | null;
    ebitda: number | null;
    margin: number | null;
    marginChange: number | null;
    pat: number | null;
    patYoY: number | null;
    patMargin: number | null;
};
type Col = { key: keyof Row; label: string; hint: string; kind: 'money' | 'growth' | 'pct' | 'pts' };

const QUARTER_COLS: Col[] = [
    { key: 'revenue', label: 'Sales', hint: 'Revenue for the quarter, ₹ crore', kind: 'money' },
    { key: 'revenueYoY', label: 'Sales growth', hint: 'Against the same quarter last year', kind: 'growth' },
    { key: 'margin', label: 'EBITDA margin', hint: 'Operating profit as a share of sales', kind: 'pct' },
    { key: 'marginChange', label: 'Margin change', hint: 'Percentage points against the same quarter last year', kind: 'pts' },
    { key: 'pat', label: 'Net profit', hint: 'Profit after tax for the quarter, ₹ crore', kind: 'money' },
    { key: 'patYoY', label: 'Profit growth', hint: 'Against the same quarter last year (blank when last year was a loss)', kind: 'growth' },
];
const TTM_COLS: Col[] = [
    { key: 'revenue', label: 'Sales', hint: 'Last four quarters, ₹ crore', kind: 'money' },
    { key: 'ebitda', label: 'EBITDA', hint: 'Operating profit, last four quarters, ₹ crore', kind: 'money' },
    { key: 'margin', label: 'EBITDA margin', hint: 'Operating profit as a share of sales', kind: 'pct' },
    { key: 'pat', label: 'Net profit', hint: 'Profit after tax, last four quarters, ₹ crore', kind: 'money' },
    { key: 'patMargin', label: 'Net margin', hint: 'Profit after tax as a share of sales', kind: 'pct' },
];

const quarterRank = (q?: string) => {
    const m = q?.match(/^Q([1-4]) FY(\d{2})$/);
    return m ? Number(m[2]) * 10 + Number(m[1]) : -1;
};
const shortName = (s: string) => s.replace(/ (Limited|Ltd|Corporation|Corp)\.?$/i, '').trim();
const inr = (v: number) => `₹${Math.round(Math.abs(v)).toLocaleString('en-IN')}`;
const median = (xs: number[]) => {
    if (!xs.length) return null;
    const s = [...xs].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
};

const UP = 'text-emerald-600';
const DOWN = 'text-rose-400';

function Cell({ v, kind, max }: { v: number | null; kind: Col['kind']; max?: number }) {
    if (v === null || v === undefined || Number.isNaN(v)) return <span className="text-gray-300">–</span>;
    if (kind === 'money') {
        const share = max && v > 0 ? Math.max(2, (v / max) * 100) : 0;
        return (
            <div className="flex items-center justify-end gap-2">
                {max !== undefined && (
                    <div className="hidden sm:block w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#A5C4E2] rounded-full" style={{ width: `${share}%` }} />
                    </div>
                )}
                <span className={v < 0 ? DOWN : 'text-gray-800'}>{v < 0 ? `−${inr(v)}` : inr(v)}</span>
            </div>
        );
    }
    if (kind === 'pct') return <span className={v < 0 ? DOWN : 'text-gray-700'}>{v.toFixed(1)}%</span>;
    if (kind === 'pts') {
        if (Math.abs(v) < 0.05) return <span className="text-gray-400">0.0 pts</span>;
        return <span className={v > 0 ? UP : DOWN}>{v > 0 ? '+' : '−'}{Math.abs(v).toFixed(1)} pts</span>;
    }
    // growth
    return (
        <span className={`inline-flex items-center gap-0.5 ${v >= 0 ? UP : DOWN}`}>
            {v >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            {Math.abs(v) >= 1000 ? '999%+' : `${Math.abs(v).toFixed(1)}%`}
        </span>
    );
}

export function SectorSnapshot({ sectorName, companies }: SectorSnapshotProps) {
    const [mode, setMode] = React.useState<Mode>('QUARTER');
    const [sort, setSort] = React.useState<{ key: keyof Row; desc: boolean }>({ key: 'revenue', desc: true });

    const withBoard = (companies || []).filter(co => co.board);
    const newestQ = withBoard.reduce<string | undefined>(
        (best, co) => (quarterRank(co.board!.quarter) > quarterRank(best) ? co.board!.quarter : best), undefined);

    const rows: Row[] = withBoard.map(co => {
        const b = co.board!;
        const ttm = mode === 'TTM';
        const revenue = ttm ? b.ttmRevenue : b.revenue;
        const ebitda = ttm ? b.ttmEbitda : b.ebitda;
        const pat = ttm ? b.ttmPat : b.pat;
        return {
            id: co.id,
            name: shortName(co.name),
            quarter: b.quarter,
            older: b.quarter !== newestQ,
            revenue,
            revenueYoY: ttm ? null : b.revenueYoY,
            ebitda,
            margin: ttm ? (revenue && ebitda !== null ? (ebitda / revenue) * 100 : null) : b.margin,
            marginChange: ttm ? null : b.marginChange,
            pat,
            patYoY: ttm ? null : b.patYoY,
            patMargin: revenue && pat !== null ? (pat / revenue) * 100 : null,
        };
    }).filter(r => r.revenue !== null);

    const sorted = [...rows].sort((a, b) => {
        const x = a[sort.key] as number | null, y = b[sort.key] as number | null;
        if (x === null && y === null) return 0;
        if (x === null) return 1;
        if (y === null) return -1;
        return sort.desc ? y - x : x - y;
    });
    const missing = (companies || []).filter(co => !rows.some(r => r.id === co.id));
    const cols = mode === 'QUARTER' ? QUARTER_COLS : TTM_COLS;
    const maxRevenue = Math.max(0, ...rows.map(r => r.revenue ?? 0));

    // Summary line. Growth for the sector is total sales against total sales a
    // year earlier, over the companies where both are known.
    const current = rows.filter(r => !r.older);
    const paired = current.filter(r => r.revenue !== null && r.revenueYoY !== null);
    const salesNow = paired.reduce((a, r) => a + r.revenue!, 0);
    const salesThen = paired.reduce((a, r) => a + r.revenue! / (1 + r.revenueYoY! / 100), 0);
    const sectorGrowth = salesThen > 0 ? ((salesNow - salesThen) / salesThen) * 100 : null;
    const medMargin = median(rows.map(r => r.margin).filter((m): m is number => m !== null));
    const profitUp = current.filter(r => (r.patYoY ?? 0) > 0).length;
    const profitDown = current.filter(r => r.patYoY !== null && r.patYoY < 0).length;

    const header = (c: Col) => {
        const active = sort.key === c.key;
        return (
            <th key={c.key} title={c.hint}
                onClick={() => setSort(s => ({ key: c.key, desc: s.key === c.key ? !s.desc : true }))}
                className={`px-3 py-2 text-right font-medium cursor-pointer select-none whitespace-nowrap ${active ? 'text-[#4A7AAF]' : 'text-gray-400 hover:text-gray-600'}`}>
                {c.label}{active ? (sort.desc ? ' ↓' : ' ↑') : ''}
            </th>
        );
    };

    return (
        <div className="mb-3 ml-5 bg-white border border-gray-200 rounded-xl overflow-hidden animate-in slide-in-from-top-1 duration-200 shadow-sm">
            <div className="px-4 pt-3 pb-2 flex flex-wrap items-start justify-between gap-2 border-b border-gray-100">
                <div>
                    <h3 className="text-[11px] font-semibold text-gray-700 uppercase tracking-wide">{sectorName} · results table</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                        {mode === 'QUARTER'
                            ? `Latest quarter (${newestQ ?? '–'}) against the same quarter last year. Filed figures. Click a column to sort.`
                            : 'Last four quarters added up. Filed figures. Click a column to sort.'}
                    </p>
                </div>
                <div className="flex bg-gray-100 p-0.5 rounded-lg text-[10px] font-medium">
                    {(['QUARTER', 'TTM'] as Mode[]).map(m => (
                        <button key={m} onClick={() => { setMode(m); setSort({ key: 'revenue', desc: true }); }}
                            className={`px-2.5 py-1 rounded-md transition-all ${mode === m ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
                            {m === 'QUARTER' ? 'Latest quarter' : 'Last 12 months'}
                        </button>
                    ))}
                </div>
            </div>

            {mode === 'QUARTER' && rows.length > 0 && (
                <div className="px-4 py-2 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-gray-500 bg-[#F8FAFC] border-b border-gray-100">
                    <span><b className="text-gray-700 font-semibold">{current.length}</b> of {(companies || []).length} reported {newestQ}</span>
                    {sectorGrowth !== null && (
                        <span>Sector sales <b className={`font-semibold ${sectorGrowth >= 0 ? UP : DOWN}`}>{sectorGrowth >= 0 ? '+' : '−'}{Math.abs(sectorGrowth).toFixed(1)}%</b> on last year</span>
                    )}
                    {medMargin !== null && <span>Typical EBITDA margin <b className="text-gray-700 font-semibold">{medMargin.toFixed(1)}%</b></span>}
                    <span>Profit up at <b className={`font-semibold ${UP}`}>{profitUp}</b>, down at <b className={`font-semibold ${DOWN}`}>{profitDown}</b></span>
                </div>
            )}

            <div className="overflow-x-auto max-h-[560px] overflow-y-auto">
                <table className="w-full min-w-[680px] text-[11px] tabular-nums">
                    <thead className="sticky top-0 bg-white z-10 shadow-[0_1px_0_#F3F4F6]">
                        <tr>
                            <th className="pl-4 pr-1 py-2 text-left font-medium text-gray-300 w-6">#</th>
                            <th className="px-2 py-2 text-left font-medium text-gray-400">Company</th>
                            {cols.map(header)}
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map((r, i) => (
                            <tr key={r.id} className="border-t border-gray-50 hover:bg-[#F8FAFC]">
                                <td className="pl-4 pr-1 py-1.5 text-gray-300">{i + 1}</td>
                                <td className="px-2 py-1.5 text-gray-800 font-medium whitespace-nowrap">
                                    {r.name}
                                    {r.older && (
                                        <span title={`Has not reported ${newestQ} yet; showing ${r.quarter}`}
                                            className="ml-1.5 px-1 py-px rounded bg-gray-100 text-gray-400 text-[9px] font-normal">{r.quarter}</span>
                                    )}
                                </td>
                                {cols.map(c => (
                                    <td key={c.key} className="px-3 py-1.5 text-right whitespace-nowrap">
                                        <Cell v={r[c.key] as number | null} kind={c.kind} max={c.key === 'revenue' ? maxRevenue : undefined} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {missing.length > 0 && (
                <div className="px-4 py-2 text-[10px] text-gray-400 border-t border-gray-100">
                    No {mode === 'QUARTER' ? 'quarterly results' : 'full year of quarters'} stored for {missing.length === 1 ? '' : `${missing.length} companies: `}
                    {missing.map(c => shortName(c.name)).join(', ')}.
                </div>
            )}
        </div>
    );
}
