"use client";
import React from 'react';
import { useHoverOpen } from '@/lib/hover-open';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';

// Ten years of price and valuation history for one company, loaded from Screener
// when the card is opened (see /api/companies/[id]/history). Each valuation tab
// compares today's multiple with the company's own range over the chosen period.

type Metric = 'price' | 'pe' | 'pb' | 'ps' | 'ev';
type Point = { date: string; value: number };

// `short`: the label on a phone, where the measures and the periods share one line.
const TABS: { key: Metric; label: string; short?: string; unit: string; what: string }[] = [
    { key: 'price', label: 'Price', unit: '₹', what: 'Share price' },
    { key: 'pe', label: 'P/E', unit: 'x', what: 'Price ÷ earnings' },
    { key: 'pb', label: 'P/B', unit: 'x', what: 'Price ÷ book value' },
    { key: 'ps', label: 'P/Sales', short: 'P/S', unit: 'x', what: 'Market value ÷ sales' },
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

// `marketCap` and `price`: today's figures from the company row. On the Price tab the hover box
// also shows the market value on that day (today's value scaled by the price, so later share
// issues are ignored) and the move from that day to today's price.
export function ValuationHistory({ companyId, embedded = false, marketCap = null, price = null }: { companyId: string; embedded?: boolean; marketCap?: number | null; price?: number | null }) {
    const [metric, setMetric] = React.useState<Metric>('price');
    // The measure and the period also switch when the pointer rests on them.
    const hover = useHoverOpen();
    const [years, setYears] = React.useState(1);
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

    // Drag across the chart to measure the change between two dates (as on Google Finance).
    // A plain click, or changing the measure or period, clears it.
    const [sel, setSel] = React.useState<{ from: string; to: string } | null>(null);
    const dragging = React.useRef(false);
    React.useEffect(() => { setSel(null); dragging.current = false; }, [metric, years]);

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

    // The selected stretch, earlier date first, with the change across it.
    let picked: { a: Point; b: Point; pct: number } | null = null;
    if (sel && sel.from !== sel.to) {
        const [d1, d2] = sel.from < sel.to ? [sel.from, sel.to] : [sel.to, sel.from];
        const a = points.find(p => p.date === d1), b = points.find(p => p.date === d2);
        if (a && b && a.value !== 0) picked = { a, b, pct: ((b.value - a.value) / Math.abs(a.value)) * 100 };
    }
    const shortDate = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: '2-digit' });

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
            {!embedded && <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide mb-2">Price & valuation history</div>}
            {/* Measures on the left, period on the right, on one line. */}
            <div className="flex flex-wrap max-md:flex-nowrap items-center justify-between gap-2 max-md:gap-1 mb-2">
                <div className="flex flex-wrap max-md:flex-nowrap gap-1 max-md:gap-0.5">
                    {TABS.map(t => (
                        <button key={t.key} onClick={() => setMetric(t.key)} {...hover(() => setMetric(t.key))} title={t.what}
                            className={`px-2 max-md:px-1 py-0.5 text-[10px] font-medium rounded border whitespace-nowrap ${metric === t.key ? 'bg-[#4A7AAF] text-white border-[#4A7AAF]' : 'bg-white text-gray-500 border-gray-200 hover:text-gray-700'}`}>
                            {t.short ? <><span className="max-md:hidden">{t.label}</span><span className="md:hidden">{t.short}</span></> : t.label}
                        </button>
                    ))}
                </div>
                <div className="flex gap-0.5 bg-gray-100 p-0.5 rounded-md text-[10px] font-medium shrink-0">
                    {RANGES.map(r => (
                        <button key={r.label} onClick={() => setYears(r.years)} {...hover(() => setYears(r.years))}
                            className={`px-2 max-md:px-1 py-0.5 rounded ${years === r.years ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>{r.label}</button>
                    ))}
                </div>
            </div>

            {all === undefined && <div className="h-44 bg-gray-50 rounded animate-pulse" />}
            {all === 'error' && <div className="h-20 flex items-center justify-center text-[11px] text-gray-400">History unavailable right now.</div>}
            {Array.isArray(all) && points.length < 2 && <div className="h-20 flex items-center justify-center text-[11px] text-gray-400">Not enough history for this period.</div>}
            {Array.isArray(all) && points.length >= 2 && (
                <>
                    <div className="h-44 select-none cursor-crosshair [&_*]:outline-none" title="Drag across the chart to see the change between two dates">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={points} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                                onMouseDown={(e: any) => { if (e?.activeLabel) { dragging.current = true; setSel({ from: String(e.activeLabel), to: String(e.activeLabel) }); } }}
                                onMouseMove={(e: any) => { if (dragging.current && e?.activeLabel) setSel(s => (s ? { ...s, to: String(e.activeLabel) } : s)); }}
                                onMouseUp={() => { dragging.current = false; setSel(s => (s && s.from === s.to ? null : s)); }}
                                onMouseLeave={() => { dragging.current = false; }}>
                                <XAxis dataKey="date" tickFormatter={monthYear} tick={{ fontSize: 9, fill: '#9CA3AF' }} minTickGap={40} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 9, fill: '#9CA3AF' }} width={44} axisLine={false} tickLine={false}
                                    tickFormatter={(v: number) => (metric === 'price' ? (v >= 1000 ? `${Number((v / 1000).toFixed(1))}k` : String(Math.round(v))) : `${v}x`)}
                                    domain={['auto', 'auto']} />
                                <Tooltip content={({ active, payload, label }: any) => {
                                    if (!active || !payload?.length) return null;
                                    const v = Number(payload[0].value);
                                    const now = price && price > 0 ? price : latest;
                                    const showMore = metric === 'price' && v > 0 && now;
                                    const pct = showMore ? (now! / v - 1) * 100 : null;
                                    const mcap = showMore && marketCap && marketCap > 0 ? marketCap * v / now! : null;
                                    return (
                                        <div className="bg-white rounded-lg border border-gray-200 px-2 py-1 text-[11px] leading-snug shadow-sm">
                                            <div className="text-gray-700">{new Date(String(label)).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                                            {/* Price · market cap · move since that day, on one line. */}
                                            <div className="whitespace-nowrap">
                                                <span className="text-[#4A7AAF]">{metric === 'price' ? '' : `${tab.label} `}{fmt(v, metric)}</span>
                                                {mcap !== null && <span className="text-gray-600"> · ₹{Math.round(mcap).toLocaleString('en-IN')}cr</span>}
                                                {pct !== null && <span className={pct >= 0 ? 'text-[#1F7A45]' : 'text-[#6B3FA0]'}> · {pct >= 0 ? '+' : ''}{Math.abs(pct) >= 100 ? pct.toFixed(0) : pct.toFixed(1)}%</span>}
                                            </div>
                                        </div>
                                    );
                                }} />
                                {metric !== 'price' && med !== null && (
                                    <ReferenceLine y={med} stroke="#9CA3AF" strokeDasharray="4 4"
                                        label={{ value: `median ${med.toFixed(1)}x`, position: 'insideTopLeft', fontSize: 9, fill: '#6B7280' }} />
                                )}
                                {sel && sel.from !== sel.to && (
                                    <ReferenceArea x1={sel.from < sel.to ? sel.from : sel.to} x2={sel.from < sel.to ? sel.to : sel.from}
                                        fill={picked && picked.pct < 0 ? '#F3EEFC' : '#E7F5EC'} fillOpacity={0.7} strokeOpacity={0} />
                                )}
                                <Line type="monotone" dataKey="value" stroke="#4A7AAF" strokeWidth={1.8} dot={false} isAnimationActive={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    {picked && (
                        <p className="text-[11px] mt-1.5 leading-relaxed">
                            <b className={picked.pct >= 0 ? 'text-[#1F7A45]' : 'text-[#6B3FA0]'}>{picked.pct >= 0 ? '+' : ''}{picked.pct.toFixed(1)}%</b>
                            <span className="text-gray-600"> · {fmt(picked.a.value, metric)} → {fmt(picked.b.value, metric)} · {shortDate(picked.a.date)} to {shortDate(picked.b.date)}</span>
                            <button onClick={() => setSel(null)} className="ml-2 text-[10px] text-gray-400 hover:text-gray-600 underline">clear</button>
                        </p>
                    )}
                    <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">
                        {metric === 'price'
                            ? priceLine
                            : <>{tab.label} today <b className="text-gray-800">{fmt(latest!, metric)}</b> · median {fmt(med!, metric)} · range {fmt(lo!, metric)}–{fmt(hi!, metric)} → <b className="text-gray-800">{verdict}</b></>}
                        {spanYears < years - 0.5 && <span className="text-gray-400"> (history since {monthYear(points[0].date)})</span>}
                    </p>
                </>
            )}
        </div>
    );
}
