"use client";
import React from 'react';
import { displayCase, shortName } from '@/lib/display-name';
import type { CompanyFigures } from '@/lib/peers';

// The company card's "Price assumes" and "Peers" tabs, both fed by /api/companies/[id]/peers.

type PeerData = { self: CompanyFigures; peers: CompanyFigures[]; fromNote: boolean };

// One request per company per page view, shared by both tabs.
const cache = new Map<string, Promise<PeerData>>();
/** Starts loading a company's peers (called when its card opens, so the tabs are ready when clicked). */
export function prefetchPeers(companyId: string) {
    if (!cache.has(companyId)) {
        const p = fetch(`/api/companies/${companyId}/peers`).then(r => (r.ok ? r.json() : Promise.reject()))
            .then((d: PeerData) => { if ([d.self, ...d.peers].some(c => c.unread)) cache.delete(companyId); return d; });
        p.catch(() => cache.delete(companyId));
        cache.set(companyId, p);
    }
    return cache.get(companyId)!;
}
function usePeers(companyId: string) {
    const [data, setData] = React.useState<PeerData | 'error' | null>(null);
    React.useEffect(() => {
        let alive = true;
        prefetchPeers(companyId)
            .then(d => { if (alive) setData(d); })
            .catch(() => { if (alive) setData('error'); });
        return () => { alive = false; };
    }, [companyId]);
    return data;
}

const YEARS = 10;
/** Yearly profit growth needed for `r` a year over ten years, if the P/E ends at `exitPe`. */
const impliedGrowth = (pe: number, r: number, exitPe: number) => Math.pow((pe * Math.pow(1 + r, YEARS)) / exitPe, 1 / YEARS) - 1;
/** Yearly return over ten years if profit grows at `g` and the P/E ends at `exitPe`. */
const returnAt = (pe: number, g: number, exitPe: number) => (1 + g <= 0 ? null : Math.pow((Math.pow(1 + g, YEARS) * exitPe) / pe, 1 / YEARS) - 1);

const pct = (v: number | null | undefined) => (v === null || v === undefined ? '–' : `${Math.round(v)}%`);
const times = (v: number | null | undefined) => (v === null || v === undefined ? '–' : `${v >= 10 ? Math.round(v) : v.toFixed(1)}x`);
const rupees = (v: number | null | undefined) => (v === null || v === undefined ? '–' : `₹${v.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`);

function Loading({ data }: { data: PeerData | 'error' | null }) {
    if (data === 'error') return <div className="h-16 flex items-center justify-center text-[11px] text-gray-400">Figures unavailable right now.</div>;
    return <div className="h-40 bg-gray-50 rounded animate-pulse" />;
}

function Choice<T extends number>({ label, value, options, format, onChange }: { label: string; value: T; options: T[]; format: (v: T) => string; onChange: (v: T) => void }) {
    return (
        <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-gray-400">{label}</span>
            <div className="flex gap-0.5 bg-gray-100 p-0.5 rounded-md text-[10px] font-medium">
                {options.map(o => (
                    <button key={o} onClick={() => onChange(o)}
                        className={`px-1.5 py-0.5 rounded ${value === o ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>{format(o)}</button>
                ))}
            </div>
        </div>
    );
}

export function PriceAssumes({ companyId }: { companyId: string }) {
    const data = usePeers(companyId);
    const [want, setWant] = React.useState(0.12);
    const [exitPe, setExitPe] = React.useState(20);
    if (!data || data === 'error') return <Loading data={data} />;
    const c = data.self;

    const controls = (
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3">
            <Choice label="Return you want" value={want} options={[0.10, 0.12, 0.15]} format={v => `${Math.round(v * 100)}%`} onChange={setWant} />
            <Choice label="P/E in 10 years" value={exitPe} options={[15, 20, 25]} format={v => `${v}`} onChange={setExitPe} />
        </div>
    );

    if (!c.pe) {
        return (
            <div>
                {controls}
                <p className="text-[11px] text-gray-500 py-3">
                    {c.eps !== null && c.eps <= 0
                        ? 'The company lost money over the last 12 months, so there is no profit to measure the price against. Look at the business card and the note for when profit is expected.'
                        : c.unread ? 'Screener could not be read just now; reopen the card in a minute.'
                            : 'No earnings figure is available for this company yet.'}
                </p>
            </div>
        );
    }

    const needed = impliedGrowth(c.pe, want, exitPe) * 100;
    const compare: { label: string; hint: string; g: number | null; note?: boolean }[] = [
        { label: "Note's growth estimate", hint: "The sector note's base case for yearly profit growth over the next 3–5 years", g: c.noteGrowth, note: true },
        { label: 'Profit growth, last 3 yrs', hint: 'Compounded yearly growth in net profit over the last three years', g: c.profitGrowth3 },
        { label: 'Profit growth, last 5 yrs', hint: 'Compounded yearly growth in net profit over the last five years', g: c.profitGrowth5 },
        { label: 'Profit growth, last 10 yrs', hint: 'Compounded yearly growth in net profit over the last ten years', g: c.profitGrowth10 },
        { label: 'Sales growth, last 5 yrs', hint: 'Compounded yearly growth in sales over the last five years', g: c.salesGrowth5 },
    ].filter(x => x.g !== null);
    const scale = Math.max(needed, ...compare.map(x => x.g as number), 10);
    const width = (g: number) => `${Math.max(0, Math.min(100, (g / scale) * 100))}%`;

    // A plain reading: is the price asking for more or less than the note and the record?
    const yardsticks = [c.noteGrowth, c.profitGrowth5].filter((v): v is number => v !== null);
    let reading = '';
    if (yardsticks.length) {
        const hi = Math.max(...yardsticks), lo = Math.min(...yardsticks);
        const what = c.noteGrowth !== null && c.profitGrowth5 !== null ? "both the note's estimate and the last five years" : c.noteGrowth !== null ? "the note's estimate" : 'the last five years';
        reading = needed > hi + 3 ? `The price asks for faster growth than ${what}.`
            : needed < lo - 3 ? `The price asks for slower growth than ${what}.`
                : `The price asks for roughly what ${what} ${c.noteGrowth !== null && c.profitGrowth5 !== null ? 'show' : 'shows'}.`;
    }

    return (
        <div>
            {controls}
            <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-gray-800 tabular-nums">{Math.round(needed)}%</span>
                <span className="text-[11px] text-gray-500">profit growth a year, for 10 years</span>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-1">
                That is what a buyer at {rupees(c.price)} needs to earn {Math.round(want * 100)}% a year, if the shares trade at {exitPe} times profit in ten years&apos; time.
            </p>
            {reading && <p className="text-[11px] font-medium text-gray-800 mb-3">{reading}</p>}

            <div className="flex flex-col gap-1.5">
                <div className="grid grid-cols-[minmax(0,1fr)_44px_64px] gap-2 text-[9px] text-gray-400 font-medium uppercase tracking-wide">
                    <span />
                    <span className="text-right">Growth</span>
                    <span className="text-right" title={`Yearly return over ten years at this growth, with the P/E ending at ${exitPe}`}>Your return</span>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_44px_64px] gap-2 items-center">
                    <div className="min-w-0">
                        <div className="text-[11px] font-semibold text-gray-800">Price assumes</div>
                        <div className="h-1.5 rounded-full bg-gray-100 mt-0.5"><div className="h-full rounded-full bg-gray-800" style={{ width: width(needed) }} /></div>
                    </div>
                    <span className="text-[11px] font-semibold text-right tabular-nums">{pct(needed)}</span>
                    <span className="text-[11px] text-right tabular-nums text-gray-500">{pct(want * 100)}</span>
                </div>
                {compare.map(x => {
                    const g = x.g as number;
                    const r = returnAt(c.pe!, g / 100, exitPe);
                    const enough = g >= needed;
                    return (
                        <div key={x.label} className="grid grid-cols-[minmax(0,1fr)_44px_64px] gap-2 items-center">
                            <div className="min-w-0">
                                <div className="text-[11px] text-gray-600 cursor-help" title={x.hint}>{x.label}</div>
                                <div className="h-1.5 rounded-full bg-gray-100 mt-0.5"><div className={`h-full rounded-full ${enough ? 'bg-emerald-400' : 'bg-[#A5C4E2]'}`} style={{ width: width(g) }} /></div>
                            </div>
                            <span className="text-[11px] text-right tabular-nums text-gray-700">{pct(g)}</span>
                            <span className={`text-[11px] text-right tabular-nums ${r === null ? 'text-gray-400' : r * 100 >= want * 100 ? 'text-emerald-600' : r < 0 ? 'text-rose-500' : 'text-gray-700'}`}>{r === null ? '–' : pct(r * 100)}</span>
                        </div>
                    );
                })}
            </div>

            <p className="text-[10px] text-gray-400 mt-3 leading-relaxed">
                Based on the P/E on the company&apos;s row, {times(c.pe)} (Screener&apos;s, on the last 12 months&apos; profit). Each growth rate is applied for all ten years; dividends are left out.
                {c.stance === 'CYCLICAL' || c.stance === 'TURNAROUND' ? ' The note calls this business ' + (c.stance === 'CYCLICAL' ? 'cyclical' : 'a turnaround') + ', so the last 12 months may not be a fair base for profit.' : ''}
            </p>
        </div>
    );
}

type Better = 'high' | 'low';
const CALL_STYLE: Record<string, string> = {
    own: 'bg-emerald-50 text-emerald-700', follow: 'bg-[#D4E5F7] text-[#4A7AAF]', wait: 'bg-amber-50 text-amber-700',
    pass: 'bg-gray-100 text-gray-500', avoid: 'bg-rose-50 text-rose-600',
};

export function PeerTable({ companyId }: { companyId: string }) {
    const data = usePeers(companyId);
    if (!data || data === 'error') return <Loading data={data} />;
    const cos = [data.self, ...data.peers];
    if (cos.length < 2) return <div className="text-[11px] text-gray-400 py-4 text-center">No listed rivals in the dashboard for this company.</div>;
    const anyLender = cos.some(c => c.lender);
    const assumes = (c: CompanyFigures) => (c.pe ? impliedGrowth(c.pe, 0.12, 20) * 100 : null);

    const rows: { heading?: string; label: string; hint: string; get: (c: CompanyFigures) => number | null; fmt: (v: number | null) => string; better?: Better }[] = [
        { heading: 'Size and growth', label: 'Market cap (₹cr)', hint: 'Market value today', get: c => c.marketCap, fmt: v => (v === null ? '–' : Math.round(v).toLocaleString('en-IN')) },
        { label: 'Sales growth, 3 yrs', hint: 'Compounded yearly sales growth, last three years', get: c => c.salesGrowth3, fmt: pct, better: 'high' },
        { label: 'Profit growth, 3 yrs', hint: 'Compounded yearly net profit growth, last three years', get: c => c.profitGrowth3, fmt: pct, better: 'high' },
        { label: 'Profit growth, 5 yrs', hint: 'Compounded yearly net profit growth, last five years', get: c => c.profitGrowth5, fmt: pct, better: 'high' },
        { heading: 'Quality', label: 'Operating margin', hint: 'Operating profit ÷ sales, last 12 months (not shown for lenders)', get: c => c.margin, fmt: pct, better: 'high' },
        { label: 'ROCE', hint: 'Return on capital employed, latest year', get: c => c.roce, fmt: pct, better: 'high' },
        { label: 'Return on equity', hint: 'Net profit ÷ shareholders’ money, last year', get: c => c.roe, fmt: pct, better: 'high' },
        { label: 'Free cash ÷ profit, 5 yrs', hint: 'Free cash flow ÷ net profit, summed over five years. Below zero: growth or slow collections are eating more cash than the business makes', get: c => (c.cashConversion === null ? null : c.cashConversion * 100), fmt: pct, better: 'high' },
        { label: 'Debt ÷ equity', hint: 'Borrowings ÷ shareholders’ money, latest balance sheet (not shown for lenders)', get: c => c.debtToEquity, fmt: v => (v === null ? '–' : v.toFixed(2)), better: 'low' },
        { heading: 'Price', label: 'P/E', hint: 'Price ÷ last 12 months’ earnings, as on the company’s row (Screener’s figure)', get: c => c.pe, fmt: times, better: 'low' },
        { label: 'EV/EBITDA', hint: 'Market value plus debt less cash, ÷ last 12 months’ operating profit (not shown for lenders)', get: c => c.evEbitda, fmt: times, better: 'low' },
        ...(anyLender ? [{ label: 'Price ÷ book', hint: 'Market value ÷ shareholders’ money', get: (c: CompanyFigures) => c.pb, fmt: times, better: 'low' as Better }] : []),
        { label: 'Price assumes', hint: 'Yearly profit growth needed for 10 years to earn 12% a year, if the P/E ends at 20 (the "Price assumes" tab lets you change both)', get: assumes, fmt: pct, better: 'low' },
        { heading: 'The notes', label: 'Growth estimate', hint: 'The sector note’s base case for yearly profit growth, 3–5 years', get: c => c.noteGrowth, fmt: pct, better: 'high' },
    ];
    const best = (r: typeof rows[number]) => {
        if (!r.better) return null;
        const vals = cos.map(r.get).filter((v): v is number => v !== null);
        if (vals.length < 2) return null;
        // A "best" that is still below zero (all rivals burning cash, say) is not worth marking.
        const top = r.better === 'high' ? Math.max(...vals) : Math.min(...vals);
        return top > 0 ? top : null;
    };

    return (
        <div>
            <div className="overflow-x-auto">
                {/* Fixed layout: the label column has a set width and the companies share the rest equally,
                    so a long name never widens its column (or the card). Phones scroll sideways. */}
                <table className="w-full table-fixed max-md:min-w-[460px] text-[11px] max-md:text-[10px] tabular-nums">
                    <colgroup>
                        <col className="w-[112px] max-md:w-[92px]" />
                        {cos.map(c => <col key={c.id} />)}
                    </colgroup>
                    <thead>
                        <tr className="text-gray-500 align-bottom">
                            <th className="sticky left-0 bg-white" />
                            {cos.map(c => (
                                <th key={c.id} title={displayCase(c.name)} className={`text-right text-[10px] font-semibold py-1.5 px-1 max-md:px-0.5 leading-tight break-words overflow-hidden ${c.self ? 'bg-[#F0F7FF] text-gray-800 rounded-t' : ''}`}>{shortName(c.name)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(r => {
                            const top = best(r);
                            return (
                                <React.Fragment key={r.label}>
                                    {r.heading && (
                                        <tr><td colSpan={cos.length + 1} className="pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{r.heading}</td></tr>
                                    )}
                                    <tr className="border-t border-gray-50">
                                        <td title={r.hint} className="py-1 pr-1 text-gray-600 leading-tight sticky left-0 bg-white cursor-help">{r.label}</td>
                                        {cos.map(c => {
                                            const v = r.get(c);
                                            return (
                                                <td key={c.id} className={`py-1 px-1 max-md:px-0.5 text-right whitespace-nowrap ${c.self ? 'bg-[#F0F7FF]' : ''} ${v !== null && v === top ? 'text-emerald-600 font-semibold' : v !== null && v < 0 ? 'text-rose-400' : 'text-gray-700'}`}>{r.fmt(v)}</td>
                                            );
                                        })}
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                        <tr className="border-t border-gray-50">
                            <td title="The sector note’s verdict" className="py-1 pr-1 text-gray-600 whitespace-nowrap sticky left-0 bg-white cursor-help">Call</td>
                            {cos.map(c => (
                                <td key={c.id} className={`py-1 px-0.5 text-right ${c.self ? 'bg-[#F0F7FF] rounded-b' : ''}`}>
                                    {c.call ? <span className={`px-1 py-px rounded text-[9px] font-semibold capitalize ${CALL_STYLE[c.call]}`}>{c.call}</span> : <span className="text-gray-400">–</span>}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">
                {cos.some(c => c.unread) && <span className="text-amber-600">Screener could not be read for {cos.filter(c => c.unread).map(c => displayCase(c.name)).join(', ')} just now; reopen the card in a minute. </span>}
                {data.fromNote ? 'Rivals from the same group in the sector note, the same segment first, then closest in size.' : 'Rivals from the same sector, closest in size.'} Green marks the best in each row. Figures from each company&apos;s filings via Screener.
            </p>
        </div>
    );
}
