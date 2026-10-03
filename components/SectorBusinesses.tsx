"use client";
/**
 * Tab 2 of a ranked sector note: one business-model profile per company —
 * what it sells, where the revenue comes from, who buys, how hard the product
 * is to make, and why customers stay. Grouped by segment in ranking order.
 */
import React from 'react';
import { BusinessProfile, CompanyVerdict, LiveValuation, MixPart, MOVE_FLAG, ProfileCharts, STANCE_CONFIG, ValuationBlock, liveValuation } from '@/lib/sector-overviews';
import { PriceCheckBadge, RichText, StancePill, byRank } from './SectorOverviewBlocks';
import type { EnrichedCompany } from './SectorList';

// Categorical slices for a stacked bar, dark to light so adjacent parts separate.
const SLICE = ['#184f95', '#3987e5', '#6da7ec', '#9ec5f4', '#cde2fb', '#94a3b8', '#cbd5e1', '#e2e8f0'];

const LEVEL_STYLE: Record<BusinessProfile['difficulty']['level'], string> = {
    'Very high': 'bg-[#184f95] text-white',
    High: 'bg-[#3987e5] text-white',
    Medium: 'bg-[#cde2fb] text-[#184f95]',
    Low: 'bg-gray-100 text-gray-600',
};

const anchorId = (company: string) => `biz-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

/**
 * The same split drawn as an upright column: one slice per row, top to bottom,
 * each slice's height proportional to its share (with a floor so small slices
 * stay readable) and its label and share beside it.
 */
function VerticalMix({ caption, parts, note, height = 150 }: { caption: string; parts: MixPart[]; note?: string; height?: number }) {
    const total = parts.reduce((a, p) => a + p.share, 0) || 1;
    return (
        <div className="mt-2 min-w-0">
            {caption && <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{caption}</div>}
            <div role="img" aria-label={`${caption}: ${parts.map(p => `${p.label} ${p.share}%`).join(', ')}`}>
                {parts.map((p, i) => (
                    <div key={p.label} className="flex items-stretch gap-2" title={`${p.label}: ${p.share}%`}>
                        <div
                            className={`w-7 flex-shrink-0 ${i === 0 ? 'rounded-t' : ''} ${i === parts.length - 1 ? 'rounded-b' : ''} ${i > 0 ? 'border-t border-white' : ''}`}
                            style={{ height: Math.max(16, (p.share / total) * height), background: SLICE[i % SLICE.length] }}
                        />
                        <div className="flex items-center text-[11px] text-gray-600 leading-tight">
                            <span className="tabular-nums font-semibold text-gray-800 w-9 flex-shrink-0">{p.share}%</span>
                            <span>{p.label}</span>
                        </div>
                    </div>
                ))}
            </div>
            {note && <p className="text-[10px] text-gray-400 mt-1 leading-snug">{note}</p>}
        </div>
    );
}

/** Debtor, stock and supplier days (first year → latest) and where five years of working capital went. */
function WorkingCapital({ wc }: { wc: NonNullable<ProfileCharts['workingCapital']> }) {
    const rows: [string, [number | null, number | null], string][] = [
        ['Customers pay in', wc.debtorDays, ''],
        ['Stock is held for', wc.inventoryDays, ''],
        ['Suppliers are paid in', wc.payableDays, ''],
        ['Cash is tied up for (cycle)', wc.cycleDays, ''],
    ];
    const arrow = (a: number | null, b: number | null) => {
        if (a === null || b === null) return '';
        return b > a + 5 ? '↑' : b < a - 5 ? '↓' : '→';
    };
    const cr = (v: number) => `₹${Math.abs(v).toLocaleString('en-IN')}cr`;
    const drains = ([['customer bills', wc.receivables5y], ['stock', wc.inventory5y]] as [string, number | null][])
        .filter(([, v]) => v !== null && v < 0)
        .sort((a, b) => (a[1] as number) - (b[1] as number));
    return (
        <div>
            <table className="text-[11.5px] text-gray-600 border-collapse">
                <thead>
                    <tr className="text-[9.5px] uppercase tracking-wide text-gray-400">
                        <th className="text-left font-semibold pr-3 pb-0.5">Days</th>
                        <th className="text-right font-semibold pr-2 pb-0.5">{wc.fromYear}</th>
                        <th className="text-right font-semibold pb-0.5">{wc.toYear}</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([label, [a, b], tail]) => (
                        <tr key={label}>
                            <td className="pr-3 py-[1px]">{label}{tail ? ` ${tail}` : ''}</td>
                            <td className="text-right tabular-nums pr-2">{a ?? '—'}</td>
                            <td className="text-right tabular-nums font-semibold text-gray-800">{b ?? '—'}</td>
                            <td className="pl-1.5 text-gray-400">{arrow(a, b)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {wc.absorbed5y !== null && (
                <p className="text-[12px] text-gray-600 leading-relaxed mt-1">
                    Over five years, working capital {wc.absorbed5y < 0 ? 'absorbed' : 'released'}{' '}
                    <span className="font-semibold text-gray-800">{cr(wc.absorbed5y)}</span> of cash in total
                    {drains.length > 0 && wc.absorbed5y < 0 && (
                        <>: {drains.map(([k, v]) => `${k} took ${cr(v as number)}`).join(' and ')}</>
                    )}
                    {drains.length > 0 && wc.absorbed5y < 0 && wc.payables5y !== null && wc.payables5y > 0 && (
                        <>, partly offset by paying suppliers more slowly ({cr(wc.payables5y)})</>
                    )}
                    {wc.absorbed5y >= 0 && wc.receivables5y !== null && wc.receivables5y > 0 && <>, mostly by collecting old bills</>}.
                </p>
            )}
        </div>
    );
}

function Label({ children }: { children: React.ReactNode }) {
    return <div className="text-[10px] font-semibold uppercase tracking-wide text-[#4A7AAF] mb-1">{children}</div>;
}

// ── The card's short version: description, good/bad/watch and the verdict ────

const CALL_STYLE: Record<string, { chip: string; box: string }> = {
    own: { chip: 'bg-emerald-600 text-white', box: 'bg-emerald-50 border-emerald-200' },
    follow: { chip: 'bg-[#4A7AAF] text-white', box: 'bg-[#F3F7FC] border-[#DCE8F6]' },
    wait: { chip: 'bg-amber-500 text-white', box: 'bg-amber-50 border-amber-200' },
    pass: { chip: 'bg-gray-400 text-white', box: 'bg-gray-50 border-gray-200' },
    avoid: { chip: 'bg-rose-500 text-white', box: 'bg-rose-50 border-rose-200' },
};

const SIDE_STYLE: Record<string, { head: string }> = {
    Good: { head: 'text-emerald-700' },
    Bad: { head: 'text-rose-600' },
    Watch: { head: 'text-amber-700' },
};

interface ShortVersion {
    description?: string;
    sides: { label: string; points: string[] }[];
    call?: string;
    reason?: string;
}

// Words that start a clause rather than a new item, so a comma before them is not a list break.
const CLAUSE_WORDS = /^(though|although|but|which|while|whose|who|where|when|so|as|because|since|including|mainly|mostly|largely|partly|chiefly|up|down|from|against|after|before|with|without|then|or|nor|yet|even|until|than|if|both|each|about|roughly|nearly|almost|only|just|now|still|led|helped|driven|funded|paid|priced|held|backed|at|in|on|to|by|for|of|taking|making|leaving|putting|meaning|pushing|cutting|lifting|adding|raising|bringing|helping|giving|keeping|turning|using|beating|missing|thanks|well|far)\b/i;

// A Good/Bad/Watch run is written as one sentence; split it on semicolons and on list commas
// (not inside brackets, not inside numbers like ₹1,352cr, not before a clause word).
function splitPoints(text: string): string[] {
    const out: string[] = [];
    let depth = 0, start = 0;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '(') depth++;
        else if (c === ')') depth = Math.max(0, depth - 1);
        else if (depth === 0 && (c === ';' || c === ',') && text[i + 1] === ' ') {
            const rest = text.slice(i + 2);
            if (c === ',' && CLAUSE_WORDS.test(rest)) continue;
            out.push(text.slice(start, i));
            start = i + 2;
        }
    }
    out.push(text.slice(start));
    // Very short fragments read better joined back to the point before them.
    return out.reduce<string[]>((acc, s) => {
        if (acc.length && s.trim().split(/\s+/).length < 4) acc[acc.length - 1] += `, ${s}`;
        else acc.push(s);
        return acc;
    }, []);
}

// Splits inShort's three bullets (a description; Good plus Bad or Watch; the Verdict) into parts.
function parseInShort(items: string[]): ShortVersion | null {
    const verdictAt = items.findIndex(x => /\*\*Verdict:/i.test(x));
    const sidesAt = items.findIndex(x => /\*\*(Good|Bad|Watch):\*\*/.test(x));
    if (verdictAt < 0 || sidesAt < 0) return null;

    const v = items[verdictAt].match(/^\s*\*\*Verdict:\s*(own|follow|wait|pass|avoid)\b([^*]*)\*\*\s*([\s\S]*)$/i);
    if (!v) return null;
    let reason = `${v[2].replace(/^[\s.,;:]+/, '')} ${v[3].replace(/^[\s.,;:]+/, '')}`.trim();
    reason = reason.charAt(0).toUpperCase() + reason.slice(1);

    const sides: ShortVersion['sides'] = [];
    const parts = items[sidesAt].split(/\*\*(Good|Bad|Watch):\*\*/);
    for (let i = 1; i < parts.length; i += 2) {
        const points = splitPoints(parts[i + 1])
            .map(s => s.trim().replace(/^and\s+/, '').replace(/[.;,]\s*$/, ''))
            .filter(Boolean)
            .map(s => s.charAt(0).toUpperCase() + s.slice(1));
        if (points.length) sides.push({ label: parts[i], points });
    }
    const description = items.find((_, i) => i !== verdictAt && i !== sidesAt);
    return { description, sides, call: v[1].toLowerCase(), reason };
}

function ShortVersionBlock({ sv }: { sv: ShortVersion }) {
    const style = CALL_STYLE[sv.call ?? ''] ?? CALL_STYLE.pass;
    return (
        <div className="mt-2.5 space-y-2">
            <div className={`rounded-md border px-3 py-2 flex flex-wrap sm:flex-nowrap items-start gap-2.5 ${style.box}`}>
                <span className={`text-[11px] font-bold uppercase tracking-wide rounded px-2 py-0.5 flex-shrink-0 ${style.chip}`}>{sv.call}</span>
                <p className="text-[12.5px] text-gray-700 leading-relaxed"><RichText text={sv.reason ?? ''} /></p>
            </div>
            {sv.sides.length > 0 && (
                <div className="space-y-2">
                    {sv.sides.map(side => {
                        const s = SIDE_STYLE[side.label] ?? SIDE_STYLE.Watch;
                        return (
                            <div key={side.label} className="rounded-md border border-gray-200 bg-white px-3 py-2">
                                <div className={`text-[10px] font-semibold uppercase tracking-wide mb-1 ${s.head}`}>{side.label}</div>
                                <ul className="space-y-1">
                                    {side.points.map((pt, i) => (
                                        <li key={i} className="flex gap-2 text-[12px] text-gray-600 leading-relaxed">
                                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0" />
                                            <span><RichText text={pt} /></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

// Key numbers in two rows: what the price says, and what the business does.
const PRICE_STATS = ['P/E', 'EV/EBITDA', 'P/B'];

function StatTile({ label, value, note, extra }: { label: string; value: React.ReactNode; note?: string; extra?: React.ReactNode }) {
    return (
        <div title={note} className="border border-gray-200 rounded-md px-2.5 py-1.5 bg-white min-w-0">
            <div className="text-[9.5px] text-gray-400 uppercase tracking-wide leading-tight">{label}</div>
            <div className="text-[13.5px] font-semibold text-gray-800 tabular-nums leading-snug flex flex-wrap items-center gap-1.5">{value}{extra}</div>
        </div>
    );
}

function Row({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-1">{title}</div>
            <div className="grid grid-cols-3 gap-1.5">{children}</div>
        </div>
    );
}

function KeyNumbers({ p, lv }: { p: BusinessProfile; lv?: LiveValuation | null }) {
    const stats = p.charts?.stats ?? [];
    const live = (s: { label: string; value: string; note?: string }) => {
        if (!lv) return s;
        if (s.label === 'P/E') return { ...s, label: 'P/E (live)', value: lv.pe === null ? 'Loss-making' : `${lv.pe.toFixed(1)}x` };
        if (s.label === 'P/B') return { ...s, label: 'Price ÷ book (live)', value: lv.pb === null ? 'n/m' : `${lv.pb.toFixed(1)}x` };
        if (s.label === 'EV/EBITDA') return { ...s, label: 'EV/EBITDA (live)', value: lv.evEbitda === null ? 'n/m' : `${lv.evEbitda.toFixed(1)}x` };
        return s;
    };
    const price = stats.filter(s => PRICE_STATS.includes(s.label)).map(live);
    const business = stats.filter(s => !PRICE_STATS.includes(s.label));
    const needs = lv && lv.needed !== null;
    if (!price.length && !business.length && !needs) return null;
    return (
        <div className="mt-2.5 space-y-1.5" aria-label="Key numbers">
            {(price.length > 0 || needs) && (
                <Row title="Price">
                    {price.map(s => <StatTile key={s.label} label={s.label} value={s.value} note={s.note} />)}
                    {needs && (
                        <StatTile
                            label="Price needs / I expect"
                            note="Earnings growth a year the live price needs, against my own estimate"
                            value={`${Math.round(lv!.needed!)}% / ${lv!.mine === null ? '—' : `${Math.round(lv!.mine)}%`}`}
                            extra={<PriceCheckBadge check={lv!.check} />}
                        />
                    )}
                </Row>
            )}
            {business.length > 0 && (
                <Row title="Business">
                    {business.map(s => <StatTile key={s.label} label={s.label} value={s.value} note={s.note} />)}
                </Row>
            )}
            {p.charts?.statsAsOf && (
                <div className="text-[9.5px] text-gray-400">Price figures are live; business figures as of {p.charts.statsAsOf}.</div>
            )}
        </div>
    );
}

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="space-y-1">
            {items.map((c, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-gray-600 leading-relaxed">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#A5C4E2] flex-shrink-0" />
                    <span><RichText text={c} /></span>
                </li>
            ))}
        </ul>
    );
}

// ── Card charts ──────────────────────────────────────────────────────────────

const MARGIN_C = '#184f95';
const INPUT_C = '#d97706';
const BAR_C = { ebitda: '#184f95', ocf: '#6da7ec', fcf: '#94a3b8' };

function ChartFrame({ title, children, legend, note }: {
    title: string; children: React.ReactNode; legend?: React.ReactNode; note?: string;
}) {
    return (
        <figure className="border border-gray-100 rounded-md bg-[#FAFBFD] px-2.5 py-2 m-0 min-w-0">
            <figcaption className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">{title}</figcaption>
            {children}
            {legend && <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-[10px] text-gray-600">{legend}</div>}
            {note && <p className="text-[9.5px] text-gray-400 mt-0.5 leading-snug">{note}</p>}
        </figure>
    );
}

function LineKey({ color, label, dashed }: { color: string; label: string; dashed?: boolean }) {
    return (
        <span className="flex items-center gap-1">
            <span className="inline-block w-3" style={{ borderTop: `2px ${dashed ? 'dashed' : 'solid'} ${color}` }} />
            {label}
        </span>
    );
}

function Swatch({ color, label }: { color: string; label: string }) {
    return <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-[2px]" style={{ background: color }} />{label}</span>;
}

function CostSplit({ data }: { data: NonNullable<ProfileCharts['costSplit']> }) {
    return (
        <ChartFrame title={`Where each ₹100 of ${data.base ?? 'sales'} goes, ${data.year}`} note={data.note}>
            <VerticalMix caption="" parts={data.parts} height={130} />
        </ChartFrame>
    );
}

/** Quarterly operating margin (left axis) against an input price index (right axis). */
function MarginVsInput({ data }: { data: NonNullable<ProfileCharts['marginVsInput']> }) {
    const W = 300, H = 120, L = 26, R = 28, T = 8, B = 18;
    const n = data.periods.length;
    const x = (i: number) => L + (n <= 1 ? 0 : (i * (W - L - R)) / (n - 1));
    const range = (vals: (number | null)[]) => {
        const v = vals.filter((a): a is number => a !== null);
        if (!v.length) return [0, 1];
        const lo = Math.min(...v), hi = Math.max(...v);
        const pad = Math.max((hi - lo) * 0.15, 1);
        return [lo - pad, hi + pad];
    };
    const [m0, m1] = range(data.margin);
    const [i0, i1] = range(data.index);
    const ym = (v: number) => T + (1 - (v - m0) / (m1 - m0)) * (H - T - B);
    const yi = (v: number) => T + (1 - (v - i0) / (i1 - i0)) * (H - T - B);
    const path = (vals: (number | null)[], y: (v: number) => number) => {
        let d = '';
        let pen = false;
        vals.forEach((v, i) => {
            if (v === null) { pen = false; return; }
            d += `${pen ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)} `;
            pen = true;
        });
        return d;
    };
    const ticks = Array.from(new Set([0, Math.floor((n - 1) / 2), n - 1]));
    const mv = data.margin.filter((a): a is number => a !== null);
    return (
        <ChartFrame
            title="Margin against its main input price"
            note={data.note}
            legend={<>
                <LineKey color={MARGIN_C} label="Operating margin (left)" />
                <LineKey color={INPUT_C} label={`${data.input} (right, first = 100)`} dashed />
            </>}
        >
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
                aria-label={`Operating margin from ${mv[0] ?? '–'}% to ${mv[mv.length - 1] ?? '–'}%, against ${data.input}`}>
                {[m0 + (m1 - m0) * 0.25, m0 + (m1 - m0) * 0.75].map(v => (
                    <g key={v}>
                        <line x1={L} x2={W - R} y1={ym(v)} y2={ym(v)} stroke="#EEF1F5" />
                        <text x={L - 3} y={ym(v) + 3} fontSize="8" textAnchor="end" fill={MARGIN_C}>{Math.round(v)}%</text>
                    </g>
                ))}
                {[i0 + (i1 - i0) * 0.25, i0 + (i1 - i0) * 0.75].map(v => (
                    <text key={v} x={W - R + 3} y={yi(v) + 3} fontSize="8" fill={INPUT_C}>{Math.round(v)}</text>
                ))}
                <path d={path(data.index, yi)} fill="none" stroke={INPUT_C} strokeWidth="1.5" strokeDasharray="4 3" />
                <path d={path(data.margin, ym)} fill="none" stroke={MARGIN_C} strokeWidth="2" />
                {data.margin.map((v, i) => v === null ? null : (
                    <circle key={i} cx={x(i)} cy={ym(v)} r="1.8" fill={MARGIN_C}>
                        <title>{`${data.periods[i]}: margin ${v}%${data.index[i] != null ? `; ${data.input} ${data.index[i]}` : ''}`}</title>
                    </circle>
                ))}
                {ticks.map(i => (
                    <text key={i} x={x(i)} y={H - 5} fontSize="8" fill="#6B7280"
                        textAnchor={i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'}>{data.periods[i]}</text>
                ))}
            </svg>
        </ChartFrame>
    );
}

/** Operating profit, operating cash and free cash, grouped by year. */
function ProfitVsCash({ data }: { data: NonNullable<ProfileCharts['profitVsCash']> }) {
    const W = 300, H = 120, L = 30, R = 4, T = 8, B = 18;
    const all = [...data.ebitda, ...data.ocf, ...data.fcf].filter((a): a is number => a !== null);
    const hi = Math.max(0, ...all), lo = Math.min(0, ...all);
    const span = hi - lo || 1;
    const y = (v: number) => T + ((hi - v) / span) * (H - T - B);
    const gw = (W - L - R) / Math.max(1, data.years.length);
    const bw = Math.min(10, (gw - 6) / 3);
    const series: [keyof typeof BAR_C, (number | null)[], string][] = [
        ['ebitda', data.ebitda, 'Operating profit'],
        ['ocf', data.ocf, 'Operating cash'],
        ['fcf', data.fcf, 'Free cash after capex'],
    ];
    const fmt = (v: number) => Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(1)}k` : `${Math.round(v)}`;
    const list = (vals: (number | null)[]) => vals.map(v => v ?? '–').join(', ');
    return (
        <ChartFrame
            title="Profit against cash, ₹cr"
            note={data.note}
            legend={<>{series.map(([k, , label]) => <Swatch key={k} color={BAR_C[k]} label={label} />)}</>}
        >
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
                aria-label={`By year (${data.years.join(', ')}): operating profit ${list(data.ebitda)}; operating cash ${list(data.ocf)}; free cash ${list(data.fcf)} (₹cr)`}>
                <text x={L - 3} y={y(hi) + 3} fontSize="8" textAnchor="end" fill="#6B7280">{fmt(hi)}</text>
                {lo < 0 && <text x={L - 3} y={y(lo) + 3} fontSize="8" textAnchor="end" fill="#6B7280">{fmt(lo)}</text>}
                <line x1={L} x2={W - R} y1={y(0)} y2={y(0)} stroke="#CBD5E1" />
                {data.years.map((yr, gi) => (
                    <g key={yr}>
                        {series.map(([k, vals, label], si) => {
                            const v = vals[gi];
                            if (v === null || v === undefined) return null;
                            const x0 = L + gi * gw + (gw - bw * 3 - 2) / 2 + si * (bw + 1);
                            const top = Math.min(y(v), y(0));
                            const h = Math.max(0.8, Math.abs(y(v) - y(0)));
                            return (
                                <rect key={k} x={x0} y={top} width={bw} height={h} fill={BAR_C[k]} rx="1">
                                    <title>{`${yr}: ${label} ₹${Math.round(v)}cr`}</title>
                                </rect>
                            );
                        })}
                        <text x={L + gi * gw + gw / 2} y={H - 5} fontSize="8" textAnchor="middle" fill="#6B7280">{yr}</text>
                    </g>
                ))}
            </svg>
        </ChartFrame>
    );
}

function ProfileCard({ p, verdict, lv, writtenOn }: { p: BusinessProfile; verdict?: CompanyVerdict; lv?: LiveValuation | null; writtenOn?: string }) {
    // P/E, EV/EBITDA and price-to-book follow today's price; the other key numbers come from the latest filed results.
    const stats = p.charts?.stats?.map(s => {
        if (!lv) return s;
        if (s.label === 'P/E') return { ...s, label: 'P/E (live)', value: lv.pe === null ? 'Loss-making' : `${lv.pe.toFixed(1)}x` };
        if (s.label === 'P/B') return { ...s, label: 'Price ÷ book (live)', value: lv.pb === null ? 'n/m' : `${lv.pb.toFixed(1)}x` };
        if (s.label === 'EV/EBITDA') return { ...s, label: 'EV/EBITDA (live)', value: lv.evEbitda === null ? 'n/m' : `${lv.evEbitda.toFixed(1)}x` };
        return s;
    });
    const sv = p.inShort ? parseInShort(p.inShort) : null;
    const moved = lv?.moved ?? null;
    const hasCharts = !!(p.charts && (p.charts.costSplit || p.charts.marginVsInput || p.charts.profitVsCash));
    return (
        <article
            id={anchorId(p.company)}
            className="border border-gray-200 rounded-lg bg-white px-4 py-3 scroll-mt-4 min-w-0"
            style={verdict ? { borderLeftWidth: 3, borderLeftColor: STANCE_CONFIG[verdict.stance].hex } : undefined}
        >
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <h4 className="text-[15px] font-semibold text-gray-800 leading-tight min-w-0">{p.company}</h4>
                {verdict && <StancePill stance={verdict.stance} />}
            </div>
            <div className="text-[10.5px] text-gray-400 mt-0.5">Revenue <span className="text-gray-700 font-medium">{p.revenue}</span></div>
            <p className="text-[12px] text-gray-500 mt-1.5 leading-relaxed"><RichText text={sv?.description ?? p.tagline} /></p>

            {/* Layer 1: the short version */}
            {sv ? <ShortVersionBlock sv={sv} /> : p.inShort && (
                <div className="mt-2.5 rounded-md bg-[#F3F7FC] border border-[#DCE8F6] px-3 py-2">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-[#4A7AAF] mb-1">In short</div>
                    <Bullets items={p.inShort} />
                </div>
            )}

            {sv ? <KeyNumbers p={p} lv={lv} /> : stats && stats.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5" aria-label="Key numbers">
                    {stats.map(s => (
                        <div key={s.label} title={s.note} className="border border-gray-200 rounded-md px-2 py-1 bg-white min-w-[92px]">
                            <div className="text-[9.5px] text-gray-400 uppercase tracking-wide leading-tight">{s.label}</div>
                            <div className="text-[13px] font-semibold text-gray-800 tabular-nums leading-snug">{s.value}</div>
                        </div>
                    ))}
                    {lv && lv.needed !== null && (
                        <div title="Earnings growth a year the live price needs, against my own estimate" className="border border-gray-200 rounded-md px-2 py-1 bg-white min-w-[92px]">
                            <div className="text-[9.5px] text-gray-400 uppercase tracking-wide leading-tight">Price needs / I expect</div>
                            <div className="text-[13px] font-semibold text-gray-800 tabular-nums leading-snug flex items-center gap-1.5">
                                {Math.round(lv.needed)}% / {lv.mine === null ? '—' : `${Math.round(lv.mine)}%`}
                                <PriceCheckBadge check={lv.check} />
                            </div>
                        </div>
                    )}
                    {p.charts?.statsAsOf && <div className="self-end text-[9.5px] text-gray-400 pb-1">other figures as of {p.charts.statsAsOf}</div>}
                </div>
            )}
            {moved !== null && Math.abs(moved) > MOVE_FLAG && (
                <p className="mt-1.5 text-[11px] text-[#9A5B00]">
                    The price has moved {moved >= 0 ? 'up' : 'down'} {Math.abs(Math.round(moved * 100))}% since this note was written{writtenOn ? ` (${writtenOn})` : ''}; the verdict may need a fresh look.
                </p>
            )}

            {/* Layer 2: what it sells, where the money comes from, and the charts */}
            <div className="space-y-3 mt-3">
                <section>
                    <Label>What it sells</Label>
                    <ul className="space-y-1.5">
                        {p.products.map(pr => (
                            <li key={pr.name} className="text-[12px] text-gray-600 leading-relaxed">
                                <span className="font-semibold text-gray-800">{pr.name}.</span> <RichText text={pr.text} />
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <Label>Where the money comes from</Label>
                    <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.revenueText} /></p>
                    {p.mixes && p.mixes.length > 0 && (
                        <div className={`grid gap-4 ${p.mixes.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                            {p.mixes.map(m => <VerticalMix key={m.caption} {...m} />)}
                        </div>
                    )}
                </section>
                {p.shares?.map(block => (
                    <section key={block.title}>
                        <Label>{block.title}</Label>
                        <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                            {block.groups.map((g, gi) => (
                                <div key={g.label ?? gi}>
                                    {g.label && <div className="text-[10.5px] font-semibold text-gray-500 mb-1">{g.label}</div>}
                                    <ul className="space-y-1">
                                        {g.rows.map(r => (
                                            <li key={r.name} className="grid grid-cols-[minmax(0,9rem)_1fr_2.5rem] items-center gap-2 text-[11.5px]">
                                                <span className="text-gray-700 truncate" title={r.name}>{r.name}</span>
                                                <span className="h-1.5 rounded-full bg-gray-100 overflow-hidden"><span className="block h-full rounded-full bg-[#6B9FCC]" style={{ width: `${Math.max(0, Math.min(100, r.share))}%` }} /></span>
                                                <span className="text-right tabular-nums font-semibold text-gray-800">{r.share}%</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {block.source && <p className="text-[10px] text-gray-400 mt-1.5">{block.source}</p>}
                    </section>
                ))}
            </div>

            {hasCharts && (
                <div className="grid gap-2 sm:grid-cols-2 mt-3">
                    {p.charts!.costSplit && <CostSplit data={p.charts!.costSplit} />}
                    {p.charts!.marginVsInput && <MarginVsInput data={p.charts!.marginVsInput} />}
                    {p.charts!.profitVsCash && <ProfitVsCash data={p.charts!.profitVsCash} />}
                </div>
            )}

            {/* Layer 3: everything else, folded away */}
            <details className="mt-3 group">
                <summary className="cursor-pointer select-none text-[11px] font-semibold text-[#4A7AAF] hover:underline list-none flex items-center gap-1">
                    <span className="inline-block transition-transform group-open:rotate-90">▸</span>
                    More detail: customers, sales drivers, costs, competitors, ownership
                </summary>
                <div className="space-y-3 mt-2.5">
                    <div className="space-y-3">
                        <section>
                            <Label>Who buys, and how</Label>
                            <Bullets items={p.customers} />
                        </section>
                        {p.salesDrivers && (
                            <section>
                                <Label>What drives its sales</Label>
                                <Bullets items={p.salesDrivers} />
                            </section>
                        )}
                        {p.inputs && (
                            <section>
                                <Label>What goes into it</Label>
                                <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.inputs} /></p>
                            </section>
                        )}
                        {p.costEffect && (
                            <section>
                                <Label>How input prices hit its margin</Label>
                                <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.costEffect} /></p>
                            </section>
                        )}
                        {p.charts?.workingCapital && (
                            <section>
                                <Label>Where its cash is tied up</Label>
                                <WorkingCapital wc={p.charts.workingCapital} />
                            </section>
                        )}
                        <section>
                            <Label>How hard it is to make</Label>
                            <p className="text-[12px] text-gray-600 leading-relaxed">
                                <span className={`inline-block mr-1.5 px-1.5 py-0.5 rounded text-[9.5px] font-semibold uppercase tracking-wide align-[1px] ${LEVEL_STYLE[p.difficulty.level]}`}>
                                    {p.difficulty.level}
                                </span>
                                <RichText text={p.difficulty.text} />
                            </p>
                        </section>
                    </div>
                    <div className="space-y-3">
                        <section>
                            <Label>Why customers stay</Label>
                            <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.moat} /></p>
                        </section>
                        {p.competitors && (
                            <section>
                                <Label>Competitors</Label>
                                <ul className="space-y-1">
                                    {p.competitors.map(c => (
                                        <li key={c.name} className="text-[12px] text-gray-600 leading-relaxed">
                                            <span className="font-semibold text-gray-800">{c.name}.</span> <RichText text={c.note} />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                        {p.position && (
                            <section>
                                <Label>Market position</Label>
                                <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.position} /></p>
                            </section>
                        )}
                        {p.money && (
                            <section>
                                <Label>Money and ownership</Label>
                                <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.money} /></p>
                            </section>
                        )}
                        {p.watch && (
                            <section>
                                <Label>What to watch</Label>
                                <Bullets items={p.watch} />
                            </section>
                        )}
                    </div>
                </div>
            </details>
        </article>
    );
}

/** One company's card from its sector note, for the Business tab on the company card. */
export function CompanyBusinessCard({ found, company }: {
    found: { profile: BusinessProfile; verdict?: CompanyVerdict; valuation?: ValuationBlock };
    company?: EnrichedCompany;
}) {
    return (
        <ProfileCard
            p={found.profile}
            verdict={found.verdict}
            lv={liveValuation(found.profile.company, found.valuation, company)}
            writtenOn={found.valuation?.writtenOn}
        />
    );
}

export function BusinessProfiles({ profiles, verdicts, valuation, byName }: {
    profiles: BusinessProfile[];
    verdicts: CompanyVerdict[];
    /** Fixed valuation inputs; with `byName`, the cards show live P/E, EV/EBITDA and a price check. */
    valuation?: ValuationBlock;
    byName?: Map<string, EnrichedCompany>;
}) {
    const byCompany = new Map(profiles.map(p => [p.company, p]));
    const verdictOf = new Map(verdicts.map(v => [v.company, v]));

    // Same grouping as the charts in Tab 1: segment by segment, best-ranked first.
    const groups: { segment: string; rows: BusinessProfile[] }[] = [];
    byRank(verdicts).forEach(v => {
        const p = byCompany.get(v.company);
        if (!p) return;
        const seg = v.segment ?? 'Other';
        let g = groups.find(x => x.segment === seg);
        if (!g) { g = { segment: seg, rows: [] }; groups.push(g); }
        g.rows.push(p);
    });
    profiles.filter(p => !verdictOf.has(p.company)).forEach(p => {
        let g = groups.find(x => x.segment === 'Other');
        if (!g) { g = { segment: 'Other', rows: [] }; groups.push(g); }
        g.rows.push(p);
    });

    return (
        <div className="space-y-5">
            {/* Jump list */}
            <nav className="flex flex-wrap gap-1.5" aria-label="Jump to a company">
                {groups.flatMap(g => g.rows).map(p => (
                    <a
                        key={p.company}
                        href={`#${anchorId(p.company)}`}
                        className="text-[10.5px] px-2 py-0.5 rounded-md border border-gray-200 text-gray-600 hover:border-[#A5C4E2] hover:text-[#4A7AAF] bg-white"
                    >
                        {p.company}
                    </a>
                ))}
            </nav>
            {groups.map(g => (
                <div key={g.segment}>
                    <div className="text-[10.5px] font-semibold uppercase tracking-wide text-[#6B9FCC] mb-2">{g.segment}</div>
                    <div className="grid gap-3 lg:grid-cols-2 items-start">
                        {g.rows.map(p => (
                            <ProfileCard
                                key={p.company}
                                p={p}
                                verdict={verdictOf.get(p.company)}
                                lv={liveValuation(p.company, valuation, byName?.get(p.company.trim().toLowerCase()))}
                                writtenOn={valuation?.writtenOn}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
