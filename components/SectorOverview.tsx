"use client";
import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList,
    ScatterChart, Scatter, ZAxis, ReferenceLine, CartesianGrid
} from 'recharts';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';
import {
    SectorOverview as SectorOverviewData,
    CompanyVerdict,
    Stance,
    STANCE_CONFIG,
} from '@/lib/sector-overviews';
import { EnrichedCompany } from './SectorList';

/** Renders `**bold**` and nothing else. Overview copy is plain prose by design. */
function RichText({ text }: { text: string }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <>
            {parts.map((p, i) =>
                p.startsWith('**') && p.endsWith('**')
                    ? <strong key={i} className="font-semibold text-gray-800">{p.slice(2, -2)}</strong>
                    : <React.Fragment key={i}>{p}</React.Fragment>
            )}
        </>
    );
}

const SUFFIXES = /\s+(Limited|Ltd|Laboratories|Lifesciences|Life Sciences|Industries|Pharmaceutic|Biosciences|Specialty|Biotech|Drugs|Pharmalabs|Pharmova|Pharma|Captab|Ingrevia)\.?$/i;

const shortName = (name: string) =>
    name.replace(/\s*\(.*\)$/, '').replace(SUFFIXES, '').trim();

/**
 * Chart labels, shortened but never ambiguous. "Jubilant Pharmova" and
 * "Jubilant Ingrevia" both shorten to "Jubilant", so any name that collides
 * keeps its full form instead.
 */
function buildLabels(names: string[]): Map<string, string> {
    const short = new Map(names.map(n => [n, shortName(n)]));
    const counts = new Map<string, number>();
    short.forEach(s => counts.set(s, (counts.get(s) || 0) + 1));
    const out = new Map<string, string>();
    short.forEach((s, full) => {
        out.set(full, (counts.get(s) || 0) > 1 ? full.replace(/\s*\(.*\)$/, '').trim() : s);
    });
    return out;
}

const fmtCr = (v?: number | null) => {
    if (v === null || v === undefined) return '—';
    if (Math.abs(v) >= 1000) return `₹${(v / 1000).toFixed(1)}k cr`;
    return `₹${Math.round(v)} cr`;
};
const fmtNum = (v?: number | null, suffix = '') =>
    v === null || v === undefined ? '—' : `${Number(v).toFixed(1)}${suffix}`;

interface Row {
    verdict: CompanyVerdict;
    company?: EnrichedCompany;
    label: string;
    margin: number | null;
    roce: number | null;
    pe: number | null;
    marketCap: number | null;
    growth: number | null;
    orderBook: number | null;
    ttmSales: number | null;
    /** Scatter only: draw the label under the bubble to dodge a neighbour. */
    labelBelow?: boolean;
}

function StancePill({ stance, className = '' }: { stance: Stance; className?: string }) {
    const cfg = STANCE_CONFIG[stance];
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wide ${cfg.pill} ${className}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
        </span>
    );
}

function ChartCard({ title, subtitle, children, height }: {
    title: string; subtitle: string; children: React.ReactNode; height: number;
}) {
    return (
        <div className="flex-1 min-w-0 bg-[#FAFBFC] border border-gray-200 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide">{title}</div>
            <div className="text-[10px] text-gray-400 mb-2">{subtitle}</div>
            <div style={{ height }}>{children}</div>
        </div>
    );
}

export function SectorOverview({ overview, companies }: {
    overview: SectorOverviewData;
    companies: EnrichedCompany[];
}) {
    const byName = React.useMemo(() => {
        const m = new Map<string, EnrichedCompany>();
        (companies || []).forEach(c => m.set(c.name.trim().toLowerCase(), c));
        return m;
    }, [companies]);

    const labels = React.useMemo(
        () => buildLabels(overview.verdicts.map(v => v.company)),
        [overview.verdicts]
    );

    const rows: Row[] = React.useMemo(() => overview.verdicts.map(v => {
        const co = byName.get(v.company.trim().toLowerCase());
        return {
            verdict: v,
            company: co,
            label: labels.get(v.company) ?? shortName(v.company),
            margin: co?.financials?.ebitdaMargin?.currentQ ?? null,
            roce: co?.roce ?? null,
            pe: co?.peRatio ?? null,
            marketCap: co?.marketCap ?? null,
            growth: co?.financials?.revenue?.deltaYoY ?? null,
            orderBook: co?.financials?.orderBook ?? null,
            ttmSales: co?.ttmSales ?? null,
        };
    }), [overview.verdicts, byName, labels]);

    const marginData = rows
        .filter(r => r.margin !== null)
        .sort((a, b) => (b.margin! - a.margin!));

    // Several names sit almost on top of each other around 15% ROCE / 40x, so
    // labels are flipped below the bubble when a near neighbour already took the
    // space above it.
    const scatterData = React.useMemo(() => {
        const pts = rows
            .filter(r => r.roce !== null && r.pe !== null && r.pe > 0)
            .sort((a, b) => a.roce! - b.roce!);
        const placed: Row[] = [];
        return pts.map(p => {
            const crowded = placed.some(q =>
                !q.labelBelow &&
                Math.abs(q.roce! - p.roce!) < 3.2 &&
                Math.max(q.pe!, p.pe!) / Math.min(q.pe!, p.pe!) < 1.45
            );
            const row = { ...p, labelBelow: crowded };
            placed.push(row);
            return row;
        });
    }, [rows]);

    const median = (xs: number[]) => {
        if (!xs.length) return null;
        const s = [...xs].sort((a, b) => a - b);
        const m = Math.floor(s.length / 2);
        return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
    };
    const medRoce = median(scatterData.map(r => r.roce!));
    const medPe = median(scatterData.map(r => r.pe!));

    // The P/E axis follows the data: sectors run from single-digit cyclicals to
    // triple-digit stories, and a fixed range leaves one end unlabelled.
    const peValues = scatterData.map(r => r.pe!);
    const peDomain: [number, number] = peValues.length
        // Extra headroom on top: the highest bubble carries its label above it.
        ? [Math.max(1, Math.min(...peValues) * 0.8), Math.max(...peValues) * 1.6]
        : [10, 100];
    const peTicks = [5, 10, 15, 20, 30, 45, 60, 90, 120, 250, 500, 800]
        .filter(t => t >= peDomain[0] && t <= peDomain[1]);

    // Order book cover, in months of trailing revenue. Only meaningful for
    // project businesses, so the chart appears only when enough of the sector
    // reports a book to compare.
    const coverData = rows
        .filter(r => (r.orderBook ?? 0) > 0 && (r.ttmSales ?? 0) > 0)
        .map(r => ({ ...r, cover: (r.orderBook! / r.ttmSales!) * 12 }))
        .sort((a, b) => b.cover - a.cover);
    const noBook = rows.filter(r => !((r.orderBook ?? 0) > 0)).map(r => r.label);

    // Companies in the sector that the note does not yet cover.
    const covered = new Set(overview.verdicts.map(v => v.company.trim().toLowerCase()));
    const uncovered = (companies || []).filter(c => !covered.has(c.name.trim().toLowerCase()));

    const usedStances = Array.from(new Set(overview.verdicts.map(v => v.stance)));

    return (
        <div className="ml-5 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-in slide-in-from-top-1 duration-150">

            {/* ── Masthead ─────────────────────────────────────────────── */}
            <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#F4F9FE] to-white">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-[#6B9FCC]" />
                            <h2 className="text-base font-semibold text-gray-800 tracking-tight">
                                {overview.title} — Sector Overview
                            </h2>
                        </div>
                        <p className="text-xs text-gray-500 mt-1.5 max-w-2xl leading-relaxed">
                            {overview.standfirst}
                        </p>
                    </div>
                    <div className="text-[10px] text-gray-400 text-right flex-shrink-0 leading-relaxed">
                        <div>As of <span className="text-gray-600 font-medium">{overview.asOfQuarter}</span></div>
                        <div>Written {new Date(overview.lastUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                        <div>{overview.verdicts.length} companies covered</div>
                    </div>
                </div>

                {/* Stance legend */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-gray-100">
                    {usedStances.map(s => (
                        <div key={s} className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${STANCE_CONFIG[s].dot}`} />
                            <span className="text-[10px] font-semibold text-gray-600">{STANCE_CONFIG[s].label}</span>
                            <span className="text-[10px] text-gray-400">{STANCE_CONFIG[s].blurb}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Charts ───────────────────────────────────────────────── */}
            <div className="px-5 py-4 border-b border-gray-100 flex gap-3 flex-col lg:flex-row">

                <ChartCard
                    title="Where the margins are"
                    subtitle={`EBITDA margin, latest reported quarter (${overview.asOfQuarter} for most).`}
                    height={Math.max(220, marginData.length * 24 + 30)}
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={marginData} layout="vertical" margin={{ top: 0, right: 34, left: 0, bottom: 0 }}>
                            <XAxis type="number" hide domain={[0, 'dataMax + 8']} />
                            <YAxis
                                type="category"
                                dataKey="label"
                                width={104}
                                tick={{ fontSize: 9, fill: '#6B7280' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                cursor={{ fill: '#F3F4F6' }}
                                contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #E5E7EB' }}
                                formatter={(v: any) => [`${Number(v).toFixed(1)}%`, 'EBITDA margin']}
                            />
                            <Bar dataKey="margin" radius={[0, 3, 3, 0]} barSize={13} isAnimationActive={false}>
                                {marginData.map((r, i) => (
                                    <Cell key={i} fill={STANCE_CONFIG[r.verdict.stance].hex} fillOpacity={0.85} />
                                ))}
                                <LabelList
                                    dataKey="margin"
                                    position="right"
                                    formatter={(v: any) => `${Number(v).toFixed(0)}%`}
                                    style={{ fontSize: 9, fill: '#9CA3AF' }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard
                    title="Quality vs price"
                    subtitle="Return on capital against P/E (log scale). Bubble size is market cap. Bottom-right is where you want to be."
                    height={Math.max(220, marginData.length * 24 + 30)}
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 8, right: 16, left: -6, bottom: 18 }}>
                            <CartesianGrid stroke="#F3F4F6" />
                            <XAxis
                                type="number" dataKey="roce" name="ROCE"
                                domain={[0, 'dataMax + 4']}
                                tick={{ fontSize: 9, fill: '#9CA3AF' }}
                                tickLine={false}
                                label={{ value: 'Return on capital %', position: 'insideBottom', offset: -10, style: { fontSize: 9, fill: '#9CA3AF' } }}
                            />
                            <YAxis
                                type="number" dataKey="pe" name="P/E"
                                scale="log" domain={peDomain}
                                ticks={peTicks}
                                tick={{ fontSize: 9, fill: '#9CA3AF' }}
                                tickLine={false}
                                width={38}
                                label={{ value: 'P/E', angle: -90, position: 'insideLeft', offset: 14, style: { fontSize: 9, fill: '#9CA3AF' } }}
                            />
                            <ZAxis type="number" dataKey="marketCap" range={[36, 460]} />
                            {medRoce !== null && (
                                <ReferenceLine x={medRoce} stroke="#D1D5DB" strokeDasharray="3 3" />
                            )}
                            {medPe !== null && (
                                <ReferenceLine y={medPe} stroke="#D1D5DB" strokeDasharray="3 3" />
                            )}
                            <Tooltip
                                cursor={{ strokeDasharray: '3 3' }}
                                contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #E5E7EB' }}
                                content={({ payload }: any) => {
                                    const p = payload?.[0]?.payload as Row | undefined;
                                    if (!p) return null;
                                    return (
                                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-2.5 py-2">
                                            <div className="text-[11px] font-semibold text-gray-800">{p.verdict.company}</div>
                                            <div className="text-[10px] text-gray-500 mt-0.5">
                                                ROCE {fmtNum(p.roce, '%')} · P/E {fmtNum(p.pe)} · {fmtCr(p.marketCap)}
                                            </div>
                                            <div className="mt-1"><StancePill stance={p.verdict.stance} /></div>
                                        </div>
                                    );
                                }}
                            />
                            <Scatter data={scatterData} isAnimationActive={false}>
                                {scatterData.map((r, i) => (
                                    <Cell
                                        key={i}
                                        fill={STANCE_CONFIG[r.verdict.stance].hex}
                                        fillOpacity={0.5}
                                        stroke={STANCE_CONFIG[r.verdict.stance].hex}
                                    />
                                ))}
                                <LabelList
                                    dataKey="label"
                                    content={(props: any) => {
                                        const { x, y, value, index } = props;
                                        if (x === undefined || y === undefined) return null;
                                        const below = scatterData[index]?.labelBelow;
                                        return (
                                            <text
                                                x={x}
                                                y={y + (below ? 14 : -9)}
                                                textAnchor="middle"
                                                style={{ fontSize: 8, fill: '#6B7280' }}
                                                stroke="#FAFBFC"
                                                strokeWidth={2.5}
                                                paintOrder="stroke"
                                            >
                                                {value}
                                            </text>
                                        );
                                    }}
                                />
                            </Scatter>
                        </ScatterChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {coverData.length >= 3 && (
                <div className="px-5 pb-4 -mt-1 border-b border-gray-100">
                    <ChartCard
                        title="Revenue visibility"
                        subtitle={`Order book as months of trailing revenue.${noBook.length ? ` No reported book: ${noBook.join(', ')} — short-cycle product sales.` : ''}`}
                        height={coverData.length * 26 + 20}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={coverData} layout="vertical" margin={{ top: 0, right: 64, left: 0, bottom: 0 }}>
                                <XAxis type="number" hide domain={[0, (max: number) => max * 1.15]} />
                                <YAxis
                                    type="category"
                                    dataKey="label"
                                    width={104}
                                    tick={{ fontSize: 9, fill: '#6B7280' }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <ReferenceLine x={12} stroke="#D1D5DB" strokeDasharray="3 3" />
                                <Tooltip
                                    cursor={{ fill: '#F3F4F6' }}
                                    contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #E5E7EB' }}
                                    formatter={(v: any, _n: any, item: any) => [
                                        `${Number(v).toFixed(1)} months (${fmtCr(item?.payload?.orderBook)} book)`,
                                        'Cover',
                                    ]}
                                />
                                <Bar dataKey="cover" radius={[0, 3, 3, 0]} barSize={13} isAnimationActive={false}>
                                    {coverData.map((r, i) => (
                                        <Cell key={i} fill={STANCE_CONFIG[r.verdict.stance].hex} fillOpacity={0.85} />
                                    ))}
                                    <LabelList
                                        dataKey="cover"
                                        position="right"
                                        formatter={(v: any) => `${Number(v).toFixed(1)} mo`}
                                        style={{ fontSize: 9, fill: '#9CA3AF' }}
                                    />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>
            )}

            {/* ── The note ─────────────────────────────────────────────── */}
            <div className="px-5 py-4 border-b border-gray-100 space-y-6">
                {overview.sections.map(sec => (
                    <section key={sec.heading}>
                        <h3 className="text-xs font-semibold text-[#4A7AAF] uppercase tracking-wide mb-2">
                            {sec.heading}
                        </h3>
                        <div className="space-y-2.5 max-w-3xl">
                            {sec.body.map((p, i) => (
                                <p key={i} className="text-[12.5px] text-gray-600 leading-relaxed">
                                    <RichText text={p} />
                                </p>
                            ))}
                        </div>
                        {sec.points && (
                            <ul className="mt-3 space-y-2 max-w-3xl">
                                {sec.points.map(pt => (
                                    <li key={pt.label} className="flex gap-2.5">
                                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#A5C4E2] flex-shrink-0" />
                                        <p className="text-[12.5px] text-gray-600 leading-relaxed">
                                            <span className="font-semibold text-gray-800">
                                                {/^.*[.?!:]$/.test(pt.label) ? pt.label : `${pt.label}.`}
                                            </span>{' '}
                                            <RichText text={pt.text} />
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </div>

            {/* ── Company by company ───────────────────────────────────── */}
            <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="text-xs font-semibold text-[#4A7AAF] uppercase tracking-wide mb-1">
                    Company by company
                </h3>
                <p className="text-[10px] text-gray-400 mb-3">
                    Judgement written {new Date(overview.lastUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })};
                    the figures below refresh with the rest of the dashboard.
                </p>

                <div className="grid gap-2.5 md:grid-cols-2">
                    {rows.map(r => (
                        <div
                            key={r.verdict.company}
                            className="border border-gray-200 rounded-lg p-3 hover:border-[#A5C4E2] transition-colors bg-white"
                            style={{ borderLeftWidth: 3, borderLeftColor: STANCE_CONFIG[r.verdict.stance].hex }}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="text-[13px] font-semibold text-gray-800 leading-tight">
                                    {r.verdict.company}
                                </span>
                                <StancePill stance={r.verdict.stance} className="flex-shrink-0" />
                            </div>

                            {/* Live metrics */}
                            <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5 text-[10px] text-gray-400">
                                <span>MCap <span className="text-gray-600 font-medium">{fmtCr(r.marketCap)}</span></span>
                                <span>P/E <span className="text-gray-600 font-medium">{fmtNum(r.pe)}</span></span>
                                <span>ROCE <span className="text-gray-600 font-medium">{fmtNum(r.roce, '%')}</span></span>
                                <span>Margin <span className="text-gray-600 font-medium">{fmtNum(r.margin, '%')}</span></span>
                                <span>Rev YoY <span className={`font-medium ${r.growth === null ? 'text-gray-600' : r.growth >= 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                                    {r.growth === null ? '—' : `${r.growth > 0 ? '+' : ''}${r.growth.toFixed(0)}%`}
                                </span></span>
                            </div>

                            <p className="text-[11.5px] text-gray-500 italic mt-2 leading-relaxed">{r.verdict.what}</p>
                            <p className="text-[12px] text-gray-600 mt-2 leading-relaxed">
                                <RichText text={r.verdict.view} />
                            </p>
                            <p className="text-[11.5px] text-gray-500 mt-2 leading-relaxed">
                                <span className="font-semibold text-gray-700">Watch: </span>
                                <RichText text={r.verdict.watch} />
                            </p>
                        </div>
                    ))}
                </div>

                {uncovered.length > 0 && (
                    <p className="text-[10px] text-gray-400 mt-3">
                        Not yet covered by this note: {uncovered.map(c => c.name).join(', ')}.
                    </p>
                )}
            </div>

            {/* ── The opinion ──────────────────────────────────────────── */}
            {overview.closing && (
                <div className="px-5 py-5 border-b border-gray-100 bg-gradient-to-b from-[#F4F9FE] to-white">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-3">
                            <Quote className="w-3.5 h-3.5 text-[#6B9FCC]" />
                            <h3 className="text-xs font-semibold text-[#4A7AAF] uppercase tracking-wide">
                                {overview.closing.heading}
                            </h3>
                        </div>

                        <div className="space-y-2.5">
                            {overview.closing.body.map((p, i) => (
                                <p key={i} className="text-[12.5px] text-gray-600 leading-relaxed">
                                    <RichText text={p} />
                                </p>
                            ))}
                        </div>

                        <div className="mt-4 border-l-2 border-[#6B9FCC] pl-3.5 py-1">
                            <div className="text-[9px] font-semibold text-[#6B9FCC] uppercase tracking-wider mb-1">
                                Bottom line
                            </div>
                            <p className="text-[13.5px] text-gray-800 font-medium leading-relaxed">
                                {overview.closing.bottomLine}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Sources ──────────────────────────────────────────────── */}
            <div className="px-5 py-3 bg-[#FAFBFC]">
                <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Outside reading
                </h3>
                <ul className="space-y-1">
                    {overview.sources.map(s => (
                        <li key={s.url}>
                            <a
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10.5px] text-gray-500 hover:text-[#4A7AAF] inline-flex items-start gap-1 transition-colors"
                            >
                                <ExternalLink className="w-2.5 h-2.5 mt-[3px] flex-shrink-0" />
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="text-[9.5px] text-gray-400 mt-2.5 leading-relaxed">
                    Personal research notes, not investment advice. Judgement is a snapshot from {overview.asOfQuarter} and will go stale.
                </p>
            </div>
        </div>
    );
}
