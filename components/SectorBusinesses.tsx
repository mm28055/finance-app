"use client";
/**
 * Tab 2 of a ranked sector note: one business-model profile per company —
 * what it sells, where the revenue comes from, who buys, how hard the product
 * is to make, and why customers stay. Grouped by segment in ranking order.
 */
import React from 'react';
import { BusinessProfile, CompanyVerdict, MixPart, ProfileCharts, STANCE_CONFIG } from '@/lib/sector-overviews';
import { RichText, StancePill, byRank } from './SectorOverviewBlocks';

// Categorical slices for a stacked bar, dark to light so adjacent parts separate.
const SLICE = ['#184f95', '#3987e5', '#6da7ec', '#9ec5f4', '#cde2fb', '#94a3b8', '#cbd5e1', '#e2e8f0'];
const DARK_TEXT_FROM = 3;

const LEVEL_STYLE: Record<BusinessProfile['difficulty']['level'], string> = {
    'Very high': 'bg-[#184f95] text-white',
    High: 'bg-[#3987e5] text-white',
    Medium: 'bg-[#cde2fb] text-[#184f95]',
    Low: 'bg-gray-100 text-gray-600',
};

const anchorId = (company: string) => `biz-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

function MixBar({ caption, parts, note }: { caption: string; parts: MixPart[]; note?: string }) {
    const total = parts.reduce((a, p) => a + p.share, 0) || 1;
    return (
        <div className="mt-2">
            {caption && <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">{caption}</div>}
            <div className="flex h-3.5 rounded overflow-hidden border border-gray-200" role="img" aria-label={`${caption}: ${parts.map(p => `${p.label} ${p.share}%`).join(', ')}`}>
                {parts.map((p, i) => (
                    <div
                        key={p.label}
                        title={`${p.label}: ${p.share}%`}
                        style={{ width: `${(p.share / total) * 100}%`, background: SLICE[i % SLICE.length] }}
                        className={i > 0 ? 'border-l border-white' : ''}
                    />
                ))}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                {parts.map((p, i) => (
                    <span key={p.label} className="flex items-center gap-1 text-[10.5px] text-gray-600">
                        <span
                            className="w-2.5 h-2.5 rounded-[2px] flex-shrink-0"
                            style={{ background: SLICE[i % SLICE.length], border: i >= DARK_TEXT_FROM ? '1px solid #CBD5E1' : undefined }}
                        />
                        {p.label} <span className="tabular-nums text-gray-800 font-medium">{p.share}%</span>
                    </span>
                ))}
            </div>
            {note && <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">{note}</p>}
        </div>
    );
}

function Label({ children }: { children: React.ReactNode }) {
    return <div className="text-[10px] font-semibold uppercase tracking-wide text-[#4A7AAF] mb-1">{children}</div>;
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
        <ChartFrame title={`Where each ₹100 of sales goes, ${data.year}`} note={data.note}>
            <MixBar caption="" parts={data.parts} />
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

function ProfileCard({ p, verdict }: { p: BusinessProfile; verdict?: CompanyVerdict }) {
    return (
        <article
            id={anchorId(p.company)}
            className="border border-gray-200 rounded-lg bg-white px-4 py-3 scroll-mt-4"
            style={verdict ? { borderLeftWidth: 3, borderLeftColor: STANCE_CONFIG[verdict.stance].hex } : undefined}
        >
            <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                    <h4 className="text-[14px] font-semibold text-gray-800 leading-tight">{p.company}</h4>
                    <p className="text-[12px] text-gray-500 mt-0.5 leading-relaxed">{p.tagline}</p>
                </div>
                <div className="text-right flex-shrink-0">
                    {verdict && <StancePill stance={verdict.stance} />}
                    <div className="text-[10.5px] text-gray-400 mt-1">Revenue <span className="text-gray-700 font-medium">{p.revenue}</span></div>
                </div>
            </div>

            <div className="grid gap-x-6 gap-y-3 md:grid-cols-2 mt-3">
                <div className="space-y-3">
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
                        <Label>Who buys, and how</Label>
                        <ul className="space-y-1">
                            {p.customers.map((c, i) => (
                                <li key={i} className="flex gap-2 text-[12px] text-gray-600 leading-relaxed">
                                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#A5C4E2] flex-shrink-0" />
                                    <span><RichText text={c} /></span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className="space-y-3">
                    <section>
                        <Label>Where the money comes from</Label>
                        <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.revenueText} /></p>
                        {p.mixes?.map(m => <MixBar key={m.caption} {...m} />)}
                    </section>
                    <section>
                        <Label>How hard it is to make</Label>
                        <p className="text-[12px] text-gray-600 leading-relaxed">
                            <span className={`inline-block mr-1.5 px-1.5 py-0.5 rounded text-[9.5px] font-semibold uppercase tracking-wide align-[1px] ${LEVEL_STYLE[p.difficulty.level]}`}>
                                {p.difficulty.level}
                            </span>
                            <RichText text={p.difficulty.text} />
                        </p>
                    </section>
                    <section>
                        <Label>Why customers stay</Label>
                        <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.moat} /></p>
                    </section>
                </div>
            </div>

            {p.charts && (p.charts.costSplit || p.charts.marginVsInput || p.charts.profitVsCash) && (
                <div className="grid gap-2 md:grid-cols-3 mt-3">
                    {p.charts.costSplit && <CostSplit data={p.charts.costSplit} />}
                    {p.charts.marginVsInput && <MarginVsInput data={p.charts.marginVsInput} />}
                    {p.charts.profitVsCash && <ProfitVsCash data={p.charts.profitVsCash} />}
                </div>
            )}

            {(p.salesDrivers || p.inputs || p.costEffect || p.competitors || p.position || p.money || p.watch) && (
                <div className="grid gap-x-6 gap-y-3 md:grid-cols-2 mt-3">
                    <div className="space-y-3">
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
                    </div>
                    <div className="space-y-3">
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
            )}
        </article>
    );
}

export function BusinessProfiles({ profiles, verdicts }: {
    profiles: BusinessProfile[];
    verdicts: CompanyVerdict[];
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
                    <div className="space-y-3">
                        {g.rows.map(p => <ProfileCard key={p.company} p={p} verdict={verdictOf.get(p.company)} />)}
                    </div>
                </div>
            ))}
        </div>
    );
}
