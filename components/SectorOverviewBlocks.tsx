"use client";
/**
 * The structured blocks a ranked sector note embeds in its sections: the
 * ranking table, the quarter-by-quarter metric grid, company snapshots, the
 * moat grading table and plain comparison tables.
 */
import React from 'react';
import {
    CompanyVerdict,
    DataTable,
    MetricSeries,
    MoatGrade,
    MoatRow,
    MoatSource,
    Stance,
    STANCE_CONFIG,
} from '@/lib/sector-overviews';
import { EnrichedCompany } from './SectorList';

/** Renders `**bold**` and nothing else. */
export function RichText({ text }: { text: string }) {
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

export function StancePill({ stance, className = '' }: { stance: Stance; className?: string }) {
    const cfg = STANCE_CONFIG[stance];
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wide whitespace-nowrap ${cfg.pill} ${className}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
        </span>
    );
}

const fmtCr = (v?: number | null) => {
    if (v === null || v === undefined) return '—';
    if (Math.abs(v) >= 1000) return `₹${(v / 1000).toFixed(1)}k cr`;
    return `₹${Math.round(v)} cr`;
};
const fmtNum = (v?: number | null, suffix = '') =>
    v === null || v === undefined ? '—' : `${Number(v).toFixed(1)}${suffix}`;

/** Verdicts in ranking order; anything unranked goes last in authored order. */
export function byRank(verdicts: CompanyVerdict[]): CompanyVerdict[] {
    return [...verdicts].sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999));
}

// ── Comparison tables ────────────────────────────────────────────────────────

const GOOD_WORDS = /^(beat|delivered|strong|conservative|on track|ahead|reasonable|fair$)/i;
const BAD_WORDS = /^(missed|walked back|cut|behind|stretched|speculative|cheap for a reason|avoid|hard to justify)/i;

/** A cell whose leading **Word** becomes a coloured badge; the rest stays as text. */
function BadgeCell({ text }: { text: string }) {
    const m = text.match(/^\*\*(.+?)\*\*[\s:·—-]*(.*)$/);
    if (!m) return <RichText text={text} />;
    const [, word, rest] = m;
    const tone = GOOD_WORDS.test(word)
        ? 'bg-[#E3F4EA] text-[#1E7B45] border-[#BFE3CD]'
        : BAD_WORDS.test(word)
            ? 'bg-[#FDECEC] text-[#B42323] border-[#F5C6C6]'
            : 'bg-[#FFF4E0] text-[#9A5B00] border-[#F5DDB0]';
    return (
        <span>
            <span className={`inline-block px-1.5 py-[1px] mr-1.5 rounded border text-[10px] font-semibold whitespace-nowrap ${tone}`}>{word}</span>
            {rest && <RichText text={rest} />}
        </span>
    );
}

function TableCell({ table, cell, ci }: { table: DataTable; cell: string; ci: number }) {
    return ci === table.badgeColumn ? <BadgeCell text={cell} /> : <RichText text={cell} />;
}

/** Text-heavy tables: one small box per row, the first cell as its title and the rest labelled beneath. */
function DataCards({ table }: { table: DataTable }) {
    return (
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {table.rows.map((r, ri) => (
                <div key={ri} className="border border-gray-200 rounded-lg bg-white px-3 py-2">
                    <div className="text-[12px] font-semibold text-gray-800 mb-1">{r[0]}</div>
                    <dl className="space-y-1">
                        {r.slice(1).map((cell, k) => {
                            const ci = k + 1;
                            if (!cell || cell === '—') return null;
                            return (
                                <div key={ci}>
                                    <dt className="text-[9.5px] font-semibold uppercase tracking-wide text-gray-400">{table.columns[ci]}</dt>
                                    <dd className="text-[11.5px] text-gray-600 leading-snug m-0"><TableCell table={table} cell={cell} ci={ci} /></dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            ))}
        </div>
    );
}

export function DataTableView({ table }: { table: DataTable }) {
    const num = new Set(table.numericColumns ?? []);
    return (
        <div className="mt-3">
            {table.caption && (
                <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide mb-1.5">{table.caption}</div>
            )}
            {table.layout === 'cards' ? <DataCards table={table} /> : (
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-[11.5px] border-collapse">
                        <thead>
                            <tr className="bg-[#F4F6F8]">
                                {table.columns.map((c, i) => (
                                    <th
                                        key={i}
                                        className={`font-semibold text-gray-600 px-2.5 py-1.5 border-b border-gray-200 align-bottom ${num.has(i) ? 'text-right' : 'text-left'} ${i === 0 ? 'sticky left-0 bg-[#F4F6F8] min-w-[120px]' : num.has(i) ? 'min-w-[72px]' : 'min-w-[110px]'}`}
                                    >
                                        {c}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table.rows.map((r, ri) => {
                                const zebra = ri % 2 === 1 ? 'bg-[#FAFBFC]' : 'bg-white';
                                return (
                                    <tr key={ri} className={`border-b border-gray-100 last:border-0 align-top ${zebra}`}>
                                        {r.map((cell, ci) => (
                                            <td
                                                key={ci}
                                                className={`px-2.5 py-1.5 leading-relaxed ${ci === 0 ? `sticky left-0 ${zebra} font-semibold text-gray-800 whitespace-nowrap` : num.has(ci) ? 'text-right tabular-nums text-gray-700 whitespace-nowrap' : 'text-gray-600'}`}
                                            >
                                                <TableCell table={table} cell={cell} ci={ci} />
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
            {table.note && <p className="text-[10px] text-gray-400 mt-1.5 leading-relaxed">{table.note}</p>}
        </div>
    );
}

// ── 1. Ranking and takeaways ─────────────────────────────────────────────────

export function RankingBlock({ verdicts, takeaways, byName, hideWhat = false }: {
    verdicts: CompanyVerdict[];
    takeaways?: string[];
    /** Live figures, shown under each name when given. */
    byName?: Map<string, EnrichedCompany>;
    /** Leave out "what it does" when the note has a separate business tab. */
    hideWhat?: boolean;
}) {
    const ranked = byRank(verdicts);
    return (
        <div className="mt-3 space-y-4">
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-[11.5px] border-collapse">
                    <thead>
                        <tr className="bg-[#F4F6F8] text-left text-gray-600">
                            <th className="font-semibold px-2.5 py-1.5 w-8">#</th>
                            <th className="font-semibold px-2.5 py-1.5 w-[34%] min-w-[140px]">Company and view</th>
                            <th className="font-semibold px-2.5 py-1.5">
                                {hideWhat ? 'Why it ranks here (what each company does is in Tab 2)' : 'What it does, and why it ranks here'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranked.map(v => (
                            <tr key={v.company} className="border-t border-gray-100 align-top">
                                <td className="px-2.5 py-2 text-gray-400 font-semibold tabular-nums">{v.rank ?? '—'}</td>
                                <td className="px-2.5 py-2">
                                    <div className="font-semibold text-gray-800">{v.company}</div>
                                    <div className="mt-1"><StancePill stance={v.stance} /></div>
                                    {v.segment && <div className="text-[10px] text-gray-400 mt-1 leading-snug">{v.segment}</div>}
                                    {byName && (() => {
                                        const co = byName.get(v.company.trim().toLowerCase());
                                        return (
                                            <div className="flex flex-wrap gap-x-3 mt-1 text-[10px] text-gray-400">
                                                <span>MCap <span className="text-gray-600 font-medium">{fmtCr(co?.marketCap ?? null)}</span></span>
                                                <span>P/E <span className="text-gray-600 font-medium">{fmtNum(co?.peRatio ?? null)}</span></span>
                                                <span>ROCE <span className="text-gray-600 font-medium">{fmtNum(co?.roce ?? null, '%')}</span></span>
                                            </div>
                                        );
                                    })()}
                                </td>
                                <td className="px-2.5 py-2 leading-relaxed">
                                    {v.what && !hideWhat && <p className="text-[11px] text-gray-500"><RichText text={v.what} /></p>}
                                    <p className={`text-gray-600 ${v.what && !hideWhat ? 'mt-1.5' : ''}`}><RichText text={v.view} /></p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {takeaways && takeaways.length > 0 && (
                <div>
                    <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide mb-2">Key takeaways</div>
                    <ol className="space-y-2 max-w-3xl">
                        {takeaways.map((t, i) => (
                            <li key={i} className="flex gap-2.5">
                                <span className="text-[11px] font-semibold text-[#4A7AAF] tabular-nums mt-[1px] w-4 flex-shrink-0">{i + 1}.</span>
                                <p className="text-[12.5px] text-gray-600 leading-relaxed"><RichText text={t} /></p>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

// ── 2. Metric grid ───────────────────────────────────────────────────────────

// Sequential blue ramp, light → dark, and a red arm for negatives on diverging
// metrics. The midpoint of a diverging scale is a neutral grey, never a hue.
const BLUE = ['#cde2fb', '#9ec5f4', '#6da7ec', '#3987e5', '#256abf', '#184f95'];
const RED = ['#fbe0df', '#f5b3b2', '#ec7f7e', '#d94645'];
const MID = '#f0efec';
const GAP_BG = 'repeating-linear-gradient(135deg, #F3F4F6 0 3px, #FBFBFC 3px 7px)';

function cellColour(v: number, s: MetricSeries, stats: { min: number; max: number; maxAbs: number }) {
    if (s.scale === 'diverging') {
        if (stats.maxAbs === 0 || Math.abs(v) < stats.maxAbs * 0.04) return { bg: MID, dark: false };
        const t = Math.min(1, Math.abs(v) / stats.maxAbs);
        if (s.invert ? v > 0 : v < 0) {
            const i = Math.min(RED.length - 1, Math.floor(t * RED.length));
            return { bg: RED[i], dark: i >= RED.length - 1 };
        }
        const i = Math.min(BLUE.length - 1, Math.floor(t * BLUE.length));
        return { bg: BLUE[i], dark: i >= 4 };
    }
    const span = stats.max - stats.min;
    const t = span === 0 ? 0.5 : (v - stats.min) / span;
    const i = Math.min(BLUE.length - 1, Math.max(0, Math.floor(t * BLUE.length)));
    return { bg: BLUE[i], dark: i >= 4 };
}

function fmtMetric(v: number, unit: MetricSeries['unit']) {
    const n = Number.isInteger(v) ? v.toString() : v.toFixed(1);
    if (unit === '%') return `${n}%`;
    if (unit === 'cr') return Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(1)}k` : `${Math.round(v)}`;
    if (unit === 'x') return `${v.toFixed(1)}x`;
    return `${Math.round(v)}`;
}

interface Hover { left: number; top: number; company: string; period: string; value: number | null; note?: string }

export function MetricsGrid({ series, verdicts, labels }: {
    series: MetricSeries[];
    verdicts: CompanyVerdict[];
    labels: Map<string, string>;
}) {
    const [active, setActive] = React.useState(0);
    const [showMore, setShowMore] = React.useState(false);
    const moreCount = series.filter(m => m.more).length;
    const [hover, setHover] = React.useState<Hover | null>(null);
    const wrapRef = React.useRef<HTMLDivElement>(null);
    const s = series[Math.min(active, series.length - 1)];

    // Rows follow the snapshot grouping: segment by segment, best-ranked first.
    const groups = React.useMemo(() => {
        const out: { segment: string; rows: CompanyVerdict[] }[] = [];
        byRank(verdicts).forEach(v => {
            const seg = v.segment ?? 'Other';
            let g = out.find(x => x.segment === seg);
            if (!g) { g = { segment: seg, rows: [] }; out.push(g); }
            g.rows.push(v);
        });
        return out;
    }, [verdicts]);

    // Colour is scaled to the middle 90% of values so one outlier (a +90%
    // quarter, a 500-day cash cycle) does not flatten everyone else into one
    // shade. Values beyond the band take the end colour; the cell text is exact.
    const stats = React.useMemo(() => {
        const vals = Object.values(s.values).flat()
            .filter((x): x is number => x !== null && x !== undefined)
            .sort((a, b) => a - b);
        if (!vals.length) return { min: 0, max: 0, maxAbs: 0 };
        const q = (p: number) => vals[Math.min(vals.length - 1, Math.max(0, Math.round(p * (vals.length - 1))))];
        const abs = vals.map(Math.abs).sort((a, b) => a - b);
        return {
            min: q(0.05),
            max: q(0.95),
            maxAbs: abs[Math.min(abs.length - 1, Math.round(0.95 * (abs.length - 1)))],
        };
    }, [s]);

    const gaps = React.useMemo(() => {
        const none: string[] = [];
        let count = 0;
        verdicts.forEach(v => {
            const row = s.values[v.company];
            if (!row || row.every(x => x === null || x === undefined)) none.push(labels.get(v.company) ?? v.company);
            else count += row.filter(x => x === null || x === undefined).length;
        });
        return { none, count };
    }, [s, verdicts, labels]);

    const show = (e: React.SyntheticEvent<HTMLElement>, company: string, period: string, value: number | null) => {
        const wrap = wrapRef.current;
        if (!wrap) return;
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const w = wrap.getBoundingClientRect();
        setHover({
            left: r.left - w.left + r.width / 2,
            top: r.top - w.top,
            company, period, value,
            note: s.cellNotes?.[company],
        });
    };

    if (!s) return null;

    return (
        <div className="mt-3">
            {/* One row of metric switches above the grid */}
            <div className="flex flex-wrap gap-1.5 mb-2.5" role="tablist">
                {series.map((m, i) => (m.more && !showMore) ? null : (
                    <button
                        key={m.key}
                        role="tab"
                        aria-selected={i === active}
                        onClick={() => { setActive(i); setHover(null); }}
                        className={`text-[10.5px] px-2.5 py-1 rounded-md border transition-colors ${i === active
                            ? 'bg-[#4A7AAF] border-[#4A7AAF] text-white font-semibold'
                            : m.more
                                ? 'bg-[#F8FAFC] border-dashed border-gray-300 text-gray-600 hover:border-[#A5C4E2]'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-[#A5C4E2]'}`}
                    >
                        {m.label}
                    </button>
                ))}
                {moreCount > 0 && (
                    <button
                        type="button"
                        aria-expanded={showMore}
                        onClick={() => {
                            if (showMore && series[active]?.more) setActive(series.findIndex(x => !x.more));
                            setShowMore(v => !v);
                            setHover(null);
                        }}
                        className="text-[10.5px] px-2.5 py-1 rounded-md text-[#4A7AAF] font-semibold hover:underline"
                    >
                        {showMore ? 'Fewer measures' : `More measures (${moreCount})`}
                    </button>
                )}
            </div>

            <div ref={wrapRef} className="relative">
                <div className="overflow-x-auto border border-gray-200 rounded-lg" onMouseLeave={() => setHover(null)}>
                    <table className="w-full text-[10.5px] border-separate" style={{ borderSpacing: 2 }}>
                        <thead>
                            <tr>
                                <th className="sticky left-0 bg-white text-left font-semibold text-gray-500 px-2 py-1 min-w-[132px]">Company</th>
                                {s.periods.map(p => (
                                    <th key={p} className="font-semibold text-gray-500 px-1 py-1 text-center min-w-[58px] whitespace-nowrap">{p}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map(g => (
                                <React.Fragment key={g.segment}>
                                    <tr>
                                        <td colSpan={s.periods.length + 1} className="sticky left-0 bg-white pt-2 pb-0.5 px-2 text-[9.5px] font-semibold uppercase tracking-wide text-[#6B9FCC]">
                                            {g.segment}
                                        </td>
                                    </tr>
                                    {g.rows.map(v => {
                                        const row = s.values[v.company] ?? [];
                                        return (
                                            <tr key={v.company}>
                                                <td className="sticky left-0 bg-white px-2 py-0.5 text-gray-700 whitespace-nowrap">
                                                    {labels.get(v.company) ?? v.company}
                                                    {s.cellNotes?.[v.company] && <span className="text-gray-400" title={s.cellNotes[v.company]}> *</span>}
                                                </td>
                                                {s.periods.map((p, pi) => {
                                                    const val = row[pi];
                                                    const missing = val === null || val === undefined;
                                                    const c = missing ? null : cellColour(val, s, stats);
                                                    return (
                                                        <td
                                                            key={p}
                                                            tabIndex={0}
                                                            aria-label={`${v.company}, ${p}: ${missing ? 'not stated' : fmtMetric(val, s.unit)}`}
                                                            onMouseEnter={e => show(e, v.company, p, missing ? null : val)}
                                                            onFocus={e => show(e, v.company, p, missing ? null : val)}
                                                            onBlur={() => setHover(null)}
                                                            className="text-center py-1 rounded-[3px] tabular-nums outline-none focus:ring-2 focus:ring-[#4A7AAF] hover:brightness-95 cursor-default"
                                                            style={missing
                                                                ? { backgroundImage: GAP_BG, color: '#D1D5DB' }
                                                                : { background: c!.bg, color: c!.dark ? '#FFFFFF' : '#1F2937' }}
                                                        >
                                                            {missing ? '—' : fmtMetric(val, s.unit)}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {hover && (
                    <div
                        className="absolute z-20 pointer-events-none bg-white border border-gray-200 rounded-lg shadow-md px-2.5 py-1.5 -translate-x-1/2 -translate-y-full max-w-[260px]"
                        style={{ left: hover.left, top: hover.top - 6 }}
                    >
                        <div className="text-[12px] font-semibold text-gray-900 tabular-nums">
                            {hover.value === null ? 'Not stated' : fmtMetric(hover.value, s.unit) + (s.unit === 'cr' ? ' cr' : s.unit === 'days' ? ' days' : '')}
                        </div>
                        <div className="text-[10px] text-gray-500">{hover.company} · {hover.period}</div>
                        {hover.note && <div className="text-[10px] text-gray-400 mt-0.5 leading-snug">{hover.note}</div>}
                    </div>
                )}
            </div>

            {/* Legend, source and gaps */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[10px] text-gray-500">
                <div className="flex items-center gap-1.5">
                    {s.scale === 'diverging' ? (
                        <>
                            <span>{s.legend?.[0] ?? 'Shrinking'}</span>
                            {[...RED].reverse().map(c => <span key={c} className="w-3.5 h-2.5 rounded-[2px]" style={{ background: c }} />)}
                            <span className="w-3.5 h-2.5 rounded-[2px]" style={{ background: MID }} />
                            {BLUE.map(c => <span key={c} className="w-3.5 h-2.5 rounded-[2px]" style={{ background: c }} />)}
                            <span>{s.legend?.[1] ?? 'Growing'}</span>
                        </>
                    ) : (
                        <>
                            <span className="tabular-nums">≤{fmtMetric(stats.min, s.unit)}</span>
                            {BLUE.map(c => <span key={c} className="w-3.5 h-2.5 rounded-[2px]" style={{ background: c }} />)}
                            <span className="tabular-nums">≥{fmtMetric(stats.max, s.unit)}</span>
                            {s.lowerIsBetter && <span className="text-gray-400">(lower is better)</span>}
                        </>
                    )}
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-2.5 rounded-[2px] border border-gray-200" style={{ backgroundImage: GAP_BG }} />
                    <span>Not stated — left blank, not estimated</span>
                </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                <span className="text-gray-500">Source:</span> {s.source}
                {s.note ? ` ${s.note}` : ''}
                {gaps.none.length > 0 && ` No figures for: ${gaps.none.join(', ')}.`}
                {gaps.count > 0 && ` ${gaps.count} further cell${gaps.count === 1 ? '' : 's'} not stated.`}
            </p>
        </div>
    );
}

// ── 4. Snapshots ─────────────────────────────────────────────────────────────

export function SnapshotsBlock({ verdicts, byName }: {
    verdicts: CompanyVerdict[];
    byName: Map<string, EnrichedCompany>;
}) {
    const groups: { segment: string; rows: CompanyVerdict[] }[] = [];
    byRank(verdicts).forEach(v => {
        const seg = v.segment ?? 'Other';
        let g = groups.find(x => x.segment === seg);
        if (!g) { g = { segment: seg, rows: [] }; groups.push(g); }
        g.rows.push(v);
    });

    return (
        <div className="mt-3 space-y-4">
            {groups.map(g => (
                <div key={g.segment}>
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-[#6B9FCC] mb-1.5">{g.segment}</div>
                    <div className="grid gap-2 md:grid-cols-2">
                        {g.rows.map(v => {
                            const co = byName.get(v.company.trim().toLowerCase());
                            return (
                                <div
                                    key={v.company}
                                    className="border border-gray-200 rounded-lg px-3 py-2.5 bg-white"
                                    style={{ borderLeftWidth: 3, borderLeftColor: STANCE_CONFIG[v.stance].hex }}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <span className="text-[12.5px] font-semibold text-gray-800 leading-tight">{v.company}</span>
                                        <StancePill stance={v.stance} className="flex-shrink-0" />
                                    </div>
                                    <div className="flex flex-wrap gap-x-3 mt-1 text-[10px] text-gray-400">
                                        <span>MCap <span className="text-gray-600 font-medium">{fmtCr(co?.marketCap ?? null)}</span></span>
                                        <span>P/E <span className="text-gray-600 font-medium">{fmtNum(co?.peRatio ?? null)}</span></span>
                                        <span>ROCE <span className="text-gray-600 font-medium">{fmtNum(co?.roce ?? null, '%')}</span></span>
                                    </div>
                                    <p className="text-[11.5px] text-gray-600 mt-1.5 leading-relaxed"><RichText text={v.what} /></p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── 5. Moat grading ──────────────────────────────────────────────────────────

// An ordinal ramp: the letter carries the grade, colour only reinforces it.
const GRADE_STYLE: Record<MoatGrade, { bg: string; fg: string }> = {
    A: { bg: '#184f95', fg: '#FFFFFF' },
    B: { bg: '#2a78d6', fg: '#FFFFFF' },
    C: { bg: '#9ec5f4', fg: '#1F2937' },
    D: { bg: '#E5E7EB', fg: '#4B5563' },
    '-': { bg: 'transparent', fg: '#9CA3AF' },
};

const TREND_STYLE: Record<MoatRow['trend'], { icon: string; label: string; cls: string }> = {
    widening: { icon: '↗', label: 'Widening', cls: 'text-emerald-700' },
    stable: { icon: '→', label: 'Stable', cls: 'text-gray-500' },
    narrowing: { icon: '↘', label: 'Narrowing', cls: 'text-rose-600' },
};

export function MoatTable({ sources, rows, verdicts, labels, compact = false }: {
    sources: MoatSource[];
    rows: MoatRow[];
    verdicts: CompanyVerdict[];
    labels: Map<string, string>;
    /** Letters only; the reasons are left to the business tab. */
    compact?: boolean;
}) {
    const order = byRank(verdicts).map(v => v.company);
    const sorted = [...rows].sort((a, b) => order.indexOf(a.company) - order.indexOf(b.company));
    return (
        <div className="mt-3">
            <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2 mb-2.5 max-w-4xl">
                {sources.map(s => (
                    <div key={s.key} className="text-[10.5px] text-gray-500 leading-snug">
                        <span className="font-semibold text-gray-700">{s.label}:</span> {s.description}
                    </div>
                ))}
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-[10.5px] border-collapse">
                    <thead>
                        <tr className="bg-[#F4F6F8] text-left text-gray-600">
                            <th className="sticky left-0 bg-[#F4F6F8] font-semibold px-2 py-1.5 min-w-[120px]">Company</th>
                            {sources.map(s => (
                                <th key={s.key} className={`font-semibold px-2 py-1.5 align-bottom ${compact ? 'text-center min-w-[84px]' : 'min-w-[150px]'}`}>{s.label}</th>
                            ))}
                            <th className={`font-semibold px-2 py-1.5 align-bottom ${compact ? 'min-w-[100px]' : 'min-w-[190px]'}`}>Direction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map(r => (
                            <tr key={r.company} className="border-t border-gray-100 align-top">
                                <td className="sticky left-0 bg-white px-2 py-1.5 font-semibold text-gray-800 whitespace-nowrap">
                                    {labels.get(r.company) ?? r.company}
                                </td>
                                {sources.map(s => {
                                    const g = r.grades[s.key] ?? { grade: '-' as MoatGrade, note: '' };
                                    const st = GRADE_STYLE[g.grade];
                                    return (
                                        <td key={s.key} className="px-2 py-1.5" title={compact ? g.note : undefined}>
                                            <div className={`flex items-start gap-1.5 ${compact ? 'justify-center' : ''}`}>
                                                <span
                                                    className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] text-[10px] font-bold flex-shrink-0"
                                                    style={{ background: st.bg, color: st.fg, border: g.grade === '-' ? '1px solid #E5E7EB' : undefined }}
                                                    aria-label={`Grade ${g.grade === '-' ? 'not applicable' : g.grade}`}
                                                >
                                                    {g.grade === '-' ? '–' : g.grade}
                                                </span>
                                                {!compact && <span className="text-gray-500 leading-snug">{g.note}</span>}
                                            </div>
                                        </td>
                                    );
                                })}
                                <td className="px-2 py-1.5">
                                    <div className={`font-semibold ${TREND_STYLE[r.trend].cls}`}>
                                        <span aria-hidden>{TREND_STYLE[r.trend].icon}</span> {TREND_STYLE[r.trend].label}
                                    </div>
                                    {!compact && <div className="text-gray-500 leading-snug mt-0.5">{r.trendNote}</div>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5">
                A = decisive advantage · B = real but contestable · C = modest · D = weak or absent · – = not relevant to this business.
                {compact && ' Hover over a grade for the reason; Tab 2 explains each company’s moat in full.'}
            </p>
        </div>
    );
}
