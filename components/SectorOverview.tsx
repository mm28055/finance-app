"use client";
import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList,
    ScatterChart, Scatter, ZAxis, ReferenceLine, CartesianGrid
} from 'recharts';
import { BookOpen } from 'lucide-react';
import {
    SectorOverview as SectorOverviewData,
    CompanyVerdict,
    Stance,
    STANCE_CONFIG,
    liveValuation,
} from '@/lib/sector-overviews/shared';
import { EnrichedCompany } from './SectorList';
import { displayCase } from '@/lib/display-name';
import {
    RichText,
    LiveTextContext,
    type LiveTextResolver,
    StancePill,
    DataTableView,
    LiveValuationTable,
    MetricsGrid,
} from './SectorOverviewBlocks';

const SUFFIXES = /\s+(Limited|Ltd|Laboratories|Lifesciences|Life Sciences|Industries|Pharmaceutic|Biosciences|Specialty|Biotech|Drugs|Pharmalabs|Pharmova|Pharma|Captab|Ingrevia|Labs|Healthcare|Research|Remedies|India)\.?$/i;

const shortName = (name: string) => {
    const base = displayCase(name).replace(/\s*\(.*\)$/, '').trim();
    const short = base.replace(SUFFIXES, '').trim();
    // "State Bank of India" must not become "State Bank of", nor "Pine Labs" a bare "Pine".
    return /(\bof|\band|&)$/i.test(short) || /^\S{1,4}$/.test(short) ? base : short;
};

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

const NUMBER_WORDS = ['none', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Supplies today's figures to the note's text ({pe:Company|38.7} and friends,
 * see RichText), from the same live valuation the table uses.
 */
function SingleSectorOverview({ overview, companies, lookup }: {
    overview: SectorOverviewData;
    companies: EnrichedCompany[];
    /** Every company on the dashboard, so a company moved to another sector keeps its live figures here. */
    lookup?: EnrichedCompany[];
}) {
    const resolve = React.useMemo<LiveTextResolver>(() => {
        const byName = new Map<string, EnrichedCompany>();
        (lookup || companies || []).forEach(c => byName.set(c.name.trim().toLowerCase(), c));
        const block = overview.valuation;
        const live = (company: string) => liveValuation(company, block, byName.get(company.trim().toLowerCase()));
        return (field, arg) => {
            if (field === 'count' || field === 'Count') {
                if (!block) return null;
                const all = overview.verdicts.map(v => live(v.company)).filter(Boolean);
                const want = arg.toLowerCase();
                const n = want === 'live' ? all.filter(x => x!.check !== 'n/a').length
                    : all.filter(x => x!.check.toLowerCase() === want).length;
                const word = NUMBER_WORDS[n] ?? String(n);
                return field === 'Count' ? capitalise(word) : word;
            }
            if (field === 'mcap') {
                const co = byName.get(arg.toLowerCase());
                return co?.marketCap ? `₹${Math.round(co.marketCap).toLocaleString('en-IN')}cr` : null;
            }
            const lv = live(arg);
            if (!lv) return null;
            switch (field) {
                case 'pe': return lv.pe === null ? null : lv.pe >= 100 ? String(Math.round(lv.pe)) : lv.pe.toFixed(1);
                case 'ev': return lv.evEbitda === null ? null : lv.evEbitda.toFixed(1);
                case 'need': return lv.needed === null ? null : String(Math.round(lv.needed));
                case 'mine': return lv.mine === null ? null : String(Math.round(lv.mine));
                case 'label': return lv.check === 'n/a' ? null : lv.check.toLowerCase();
                case 'Label': return lv.check === 'n/a' ? null : lv.check;
                default: return null;
            }
        };
    }, [overview, companies, lookup]);
    return (
        <LiveTextContext.Provider value={resolve}>
            <SingleSectorOverviewBody overview={overview} companies={companies} lookup={lookup} />
        </LiveTextContext.Provider>
    );
}

function SingleSectorOverviewBody({ overview, companies, lookup }: {
    overview: SectorOverviewData;
    companies: EnrichedCompany[];
    lookup?: EnrichedCompany[];
}) {
    const byName = React.useMemo(() => {
        const m = new Map<string, EnrichedCompany>();
        (lookup || companies || []).forEach(c => m.set(c.name.trim().toLowerCase(), c));
        return m;
    }, [companies, lookup]);

    const labels = React.useMemo(
        () => buildLabels(overview.verdicts.map(v => v.company)),
        [overview.verdicts]
    );

    // The bar chart's margin: the company's latest filed quarter in the chart grid (rebuilt from
    // Screener nightly), else the dashboard's stored quarter.
    const latestMargin = React.useMemo(() => {
        const opm = overview.metrics?.find(m => m.key === 'opm');
        const out = new Map<string, number>();
        if (!opm) return out;
        for (const [company, vals] of Object.entries(opm.values)) {
            const last = [...vals].reverse().find(x => x !== null && x !== undefined);
            if (last !== undefined && last !== null) out.set(company, last);
        }
        return out;
    }, [overview.metrics]);

    const rows: Row[] = React.useMemo(() => overview.verdicts.map(v => {
        const co = byName.get(v.company.trim().toLowerCase());
        return {
            verdict: v,
            company: co,
            label: labels.get(v.company) ?? shortName(v.company),
            margin: latestMargin.get(v.company) ?? co?.financials?.ebitdaMargin?.currentQ ?? null,
            roce: co?.roce ?? null,
            pe: co?.peRatio ?? null,
            marketCap: co?.marketCap ?? null,
            growth: co?.financials?.revenue?.deltaYoY ?? null,
            orderBook: co?.financials?.orderBook ?? null,
            ttmSales: co?.ttmSales ?? null,
        };
    }), [overview.verdicts, byName, labels, latestMargin]);

    const marginData = rows
        .filter(r => r.margin !== null)
        .sort((a, b) => (b.margin! - a.margin!));

    // Several names sit almost on top of each other around 15% ROCE / 40x, so
    // labels are flipped below the bubble when a near neighbour already took the
    // space above it.
    const scatterData = React.useMemo(() => {
        const pts = rows
            .filter(r => r.verdict.stance !== 'DELISTED' && r.roce !== null && r.pe !== null && r.pe > 0)
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

    const usedStances = Array.from(new Set(overview.verdicts.map(v => v.stance)));

    const scatterHeight = Math.max(220, marginData.length * 24 + 30);
    const scatterCard = (
    <ChartCard
        title="Quality vs price"
        subtitle="Return on capital against P/E (log scale). Bubble size is market cap. Bottom-right is where you want to be."
        height={scatterHeight}
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
                                <div className="text-[11px] font-semibold text-gray-800">{displayCase(p.verdict.company)}</div>
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
    );

    const masthead = (
        <>
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
                    Charts from filed results; they update by themselves the morning after each company reports.
                </p>
            </div>
            <div className="text-[10px] text-gray-400 text-right flex-shrink-0 leading-relaxed">
                <div>Latest quarter <span className="text-gray-600 font-medium">{overview.chartsAsOf ?? overview.asOfQuarter}</span></div>
                <div>{overview.verdicts.length} companies</div>
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
        </>
    );

    const marginCard = (
        <ChartCard
            title="Where the margins are"
            subtitle={`EBITDA margin, latest reported quarter (${overview.chartsAsOf ?? overview.asOfQuarter} for most).`}
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
    );

    const renderEmbed = (sec: typeof overview.sections[number]) => (
        <>
            {sec.embed === 'metrics' && overview.metrics && overview.metrics.length > 0 && (
                <MetricsGrid series={overview.metrics} verdicts={overview.verdicts} labels={labels} />
            )}
            {sec.embed === 'valuation' && overview.valuation && (
                <LiveValuationTable verdicts={overview.verdicts} byName={byName} block={overview.valuation} labels={labels} />
            )}
        </>
    );

    const renderSection = (sec: typeof overview.sections[number]) => (
        <section key={sec.heading}>
            <h3 className="text-xs font-semibold text-[#4A7AAF] uppercase tracking-wide mb-2">
                {sec.heading.replace(/^\d+\.\s*/, '')}
            </h3>
            <div className="space-y-2.5 max-w-3xl">
                {sec.body.map((p, i) => (
                    <p key={i} className="text-[12.5px] text-gray-600 leading-relaxed">
                        <RichText text={p} />
                    </p>
                ))}
            </div>
            {sec.embedFirst && renderEmbed(sec)}
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
            {sec.tables?.map((t, i) => <DataTableView key={i} table={t} />)}
            {!sec.embedFirst && renderEmbed(sec)}
        </section>
    );

    // The sector page: the margin and quality-vs-price charts, the chart grid and the valuation
    // section. The written analysis and the company profiles are not shown (the profiles are on
    // each company's card).
    if (overview.format === 'ranked') {
        const shown = overview.sections.filter(sec => sec.embed === 'metrics' || sec.embed === 'valuation');
        return (
            <div className="ml-5 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-in slide-in-from-top-1 duration-150">
                {masthead}
                <div className="px-5 py-4 border-b border-gray-100 flex gap-3 flex-col lg:flex-row">
                    {marginCard}
                    {scatterCard}
                </div>
                {shown.length > 0 && (
                    <div className="px-5 py-4 space-y-7">
                        {shown.map(renderSection)}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="ml-5 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-in slide-in-from-top-1 duration-150">

            {masthead}

            {/* ── Charts ───────────────────────────────────────────────── */}
            <div className="px-5 py-4 border-b border-gray-100 flex gap-3 flex-col lg:flex-row">

                {marginCard}

                {scatterCard}
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

        </div>
    );
}

/**
 * Large sectors are split into a few business-model groups ("buckets"), each a
 * complete note with its own two tabs. The page shows one tab per group above
 * the note; a plain sector renders its single note directly.
 */
export function SectorOverview({ overview, companies, lookup }: {
    overview: SectorOverviewData;
    companies: EnrichedCompany[];
    lookup?: EnrichedCompany[];
}) {
    const buckets = overview.buckets;
    const [active, setActive] = React.useState(0);
    if (!buckets?.length) return <SingleSectorOverview overview={overview} companies={companies} lookup={lookup} />;
    const current = buckets[Math.min(active, buckets.length - 1)];
    return (
        <div className="ml-5 mb-3">
            <div className="mb-2 px-4 py-3 bg-gradient-to-r from-[#F4F9FE] to-white border border-gray-200 rounded-xl">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#6B9FCC]" />
                    <h2 className="text-base font-semibold text-gray-800 tracking-tight">{overview.title} — Sector Overview</h2>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3" role="tablist" aria-label={`${overview.title} groups`}>
                    {buckets.map((b, i) => (
                        <button
                            key={b.label}
                            role="tab"
                            aria-selected={i === active}
                            onClick={() => setActive(i)}
                            className={`text-[11.5px] px-3 py-1.5 rounded-md border transition-colors ${i === active
                                ? 'bg-[#4A7AAF] border-[#4A7AAF] text-white font-semibold'
                                : 'bg-white border-gray-200 text-gray-600 hover:text-[#4A7AAF] hover:border-[#A5C4E2]'}`}
                        >
                            {b.label} <span className={i === active ? 'text-white/80' : 'text-gray-400'}>· {b.note.verdicts.length}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="-ml-5">
                <SingleSectorOverview key={current.label} overview={current.note} companies={companies} lookup={lookup} />
            </div>
        </div>
    );
}
