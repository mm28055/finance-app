"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// Ten years of price and valuation history for one company, loaded from Screener
// when the card is opened (see /api/companies/[id]/history). Each valuation tab
// compares today's multiple with the company's own range over the chosen period.

type Metric = 'price' | 'pe' | 'pb' | 'ps' | 'ev';
type Point = { date: string; value: number };

const TABS: { key: Metric; label: string; unit: string; what: string }[] = [
    { key: 'price', label: 'Price', unit: '₹', what: 'Share price' },
    { key: 'pe', label: 'P/E', unit: 'x', what: 'Price ÷ earnings' },
    { key: 'pb', label: 'P/B', unit: 'x', what: 'Price ÷ book value' },
    { key: 'ps', label: 'P/Sales', unit: 'x', what: 'Market value ÷ sales' },
    { key: 'ev', label: 'EV/EBITDA', unit: 'x', what: 'Enterprise value ÷ operating profit' },
];
const RANGES = [{ label: '1Y', years: 1 }, { label: '3Y', years: 3 }, { label: '5Y', years: 5 }, { label: '10Y', years: 10 }];

const median = (xs: number[]) => {
    const s = [...xs].sort((a, b) => a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const fmt = (v: number, metric: Metric) =>
    metric === 'price' ? `₹${v >= 1000 ? Math.round(v).toLocaleString('en-IN') : v.toFixed(v >= 100 ? 0 : 1)}` : `${v.toFixed(1)}x`;
const monthYear = (d: string) => new Date(d).toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });

export function ValuationHistory({ companyId, embedded = false }: { companyId: string; embedded?: boolean }) {
    const [metric, setMetric] = React.useState<Metric>('price');
    const [years, setYears] = React.useState(10);
    const [cache, setCache] = React.useState<Record<string, Point[] | 'error' | undefined>>({});

    React.useEffect(() => {
        if (cache[metric] !== undefined) return;
        let alive = true;
        fetch(`/api/companies/${companyId}/history?metric=${metric}`)
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then(d => { if (alive) setCache(c => ({ ...c, [metric]: d.points as Point[] })); })
            .catch(() => { if (alive) setCache(c => ({ ...c, [metric]: 'error' })); });
        return () => { alive = false; };
    }, [companyId, metric, cache]);

    const all = cache[metric];
    const tab = TABS.find(t => t.key === metric)!;
    const points = Array.isArray(all)
        ? all.filter(p => new Date(p.date).getTime() >= Date.now() - years * 365.25 * 86400000)
        : [];
    const values = points.map(p => p.value);
    const latest = points[points.length - 1]?.value ?? null;
    const lo = values.length ? Math.min(...values) : null;
    const hi = values.length ? Math.max(...values) : null;
    const med = values.length ? median(values) : null;
    // Share of the period's readings at or below today's: 0.9 = dearer than 90% of the time.
    const rank = latest !== null && values.length ? values.filter(v => v <= latest).length / values.length : null;
    const spanYears = points.length ? (Date.now() - new Date(points[0].date).getTime()) / (365.25 * 86400000) : 0;

    let verdict = '';
    if (rank !== null && metric !== 'price') {
        verdict = rank >= 0.8 ? 'in the top fifth of its own range — dear for itself'
            : rank <= 0.2 ? 'in the bottom fifth of its own range — cheap for itself'
            : rank >= 0.6 ? 'above its usual level' : rank <= 0.4 ? 'below its usual level' : 'close to its usual level';
    }
    let priceLine = '';
    if (metric === 'price' && latest !== null && points.length > 1) {
        const first = points[0].value;
        const cagr = spanYears >= 1 ? (Math.pow(latest / first, 1 / spanYears) - 1) * 100 : null;
        priceLine = `${fmt(first, 'price')} → ${fmt(latest, 'price')}${cagr !== null ? ` · about ${cagr >= 0 ? '+' : ''}${cagr.toFixed(0)}% a year` : ''}${hi ? ` · ${Math.round((latest / hi - 1) * 100)}% from the period high` : ''}`;
    }

    return (
        <div className={embedded ? '' : 'bg-white border border-gray-200 rounded-lg p-3'}>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide">{embedded ? '' : 'Price & valuation history'}</div>
                <div className="flex gap-0.5 bg-gray-100 p-0.5 rounded-md text-[10px] font-medium">
                    {RANGES.map(r => (
                        <button key={r.label} onClick={() => setYears(r.years)}
                            className={`px-2 py-0.5 rounded ${years === r.years ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>{r.label}</button>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
                {TABS.map(t => (
                    <button key={t.key} onClick={() => setMetric(t.key)} title={t.what}
                        className={`px-2 py-0.5 text-[10px] font-medium rounded border ${metric === t.key ? 'bg-[#4A7AAF] text-white border-[#4A7AAF]' : 'bg-white text-gray-500 border-gray-200 hover:text-gray-700'}`}>{t.label}</button>
                ))}
            </div>

            {all === undefined && <div className="h-44 bg-gray-50 rounded animate-pulse" />}
            {all === 'error' && <div className="h-20 flex items-center justify-center text-[11px] text-gray-400">History unavailable right now.</div>}
            {Array.isArray(all) && points.length < 2 && <div className="h-20 flex items-center justify-center text-[11px] text-gray-400">Not enough history for this period.</div>}
            {Array.isArray(all) && points.length >= 2 && (
                <>
                    <div className="h-44">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={points} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                                <XAxis dataKey="date" tickFormatter={monthYear} tick={{ fontSize: 9, fill: '#9CA3AF' }} minTickGap={40} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 9, fill: '#9CA3AF' }} width={44} axisLine={false} tickLine={false}
                                    tickFormatter={(v: number) => (metric === 'price' ? (v >= 1000 ? `${Math.round(v / 1000)}k` : String(Math.round(v))) : `${v}x`)}
                                    domain={['auto', 'auto']} />
                                <Tooltip formatter={(v) => [fmt(Number(v), metric), tab.label]} labelFormatter={(d) => new Date(String(d)).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #E5E7EB' }} />
                                {metric !== 'price' && med !== null && (
                                    <ReferenceLine y={med} stroke="#9CA3AF" strokeDasharray="4 4"
                                        label={{ value: `median ${med.toFixed(1)}x`, position: 'insideTopLeft', fontSize: 9, fill: '#6B7280' }} />
                                )}
                                <Line type="monotone" dataKey="value" stroke="#4A7AAF" strokeWidth={1.8} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">
                        {metric === 'price'
                            ? priceLine
                            : <>{tab.label} today <b className="text-gray-800">{fmt(latest!, metric)}</b> · median {fmt(med!, metric)} · range {fmt(lo!, metric)}–{fmt(hi!, metric)} → <b className="text-gray-800">{verdict}</b></>}
                        {spanYears < years - 0.5 && <span className="text-gray-400"> (history since {monthYear(points[0].date)})</span>}
                    </p>
                </>
            )}
            <p className="text-[9px] text-gray-400 mt-1">Weekly figures from Screener; valuation multiples use trailing earnings, book value and sales.</p>
        </div>
    );
}
