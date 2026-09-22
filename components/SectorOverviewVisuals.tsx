"use client";
/**
 * Visual blocks for the ranked sector note: the value-chain diagram, five-year
 * operating profit against operating cash, and my growth estimate against the
 * growth the price needs. Plain HTML bars so they stay legible at phone width.
 */
import React from 'react';
import { CashBar, GrowthEstimate, ValueChainStage } from '@/lib/sector-overviews';
import { RichText } from './SectorOverviewBlocks';

// ── Value chain ──────────────────────────────────────────────────────────────

const PROFIT_STYLE: Record<ValueChainStage['profit'], { label: string; cls: string; bar: string }> = {
    high: { label: 'Most profit', cls: 'bg-emerald-100 text-emerald-700', bar: '#059669' },
    mixed: { label: 'Depends who', cls: 'bg-amber-100 text-amber-700', bar: '#D97706' },
    low: { label: 'Least profit', cls: 'bg-gray-100 text-gray-500', bar: '#9CA3AF' },
};

export function ValueChainBlock({ stages, labels }: {
    stages: ValueChainStage[];
    labels: Map<string, string>;
}) {
    return (
        <div className="mt-3 grid gap-1 md:gap-0 md:grid-flow-col md:auto-cols-fr">
            {stages.map((st, i) => {
                const ps = PROFIT_STYLE[st.profit];
                return (
                    <div key={st.name} className="flex flex-col md:flex-row items-stretch">
                        <div
                            className="flex-1 border border-gray-200 rounded-lg px-2.5 py-2 bg-white"
                            style={{ borderTopWidth: 3, borderTopColor: ps.bar }}
                        >
                            <div className="text-[10px] text-gray-400 tabular-nums">Stage {i + 1}</div>
                            <div className="text-[12px] font-semibold text-gray-800 leading-tight">{st.name}</div>
                            <span className={`inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wide ${ps.cls}`}>{ps.label}</span>
                            <p className="text-[10.5px] text-gray-500 mt-1.5 leading-snug"><RichText text={st.note} /></p>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {st.companies.map(c => (
                                    <span key={c} className="text-[9.5px] px-1.5 py-0.5 rounded bg-[#EEF4FB] text-[#4A7AAF] whitespace-nowrap">
                                        {labels.get(c) ?? c}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {i < stages.length - 1 && (
                            <div className="flex items-center justify-center text-gray-300 text-sm md:px-1 py-0.5" aria-hidden>
                                <span className="md:hidden">↓</span><span className="hidden md:inline">→</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// ── Operating profit against operating cash ─────────────────────────────────

const rupees = (v: number) => `${v < 0 ? '−' : ''}₹${Math.abs(v).toLocaleString('en-IN')}cr`;

export function CashBarsBlock({ bars, labels, period }: {
    bars: CashBar[];
    labels: Map<string, string>;
    period: string;
}) {
    const rows = [...bars].sort((a, b) => b.ocf / b.ebitda - a.ocf / a.ebitda);
    const max = Math.max(...rows.map(r => Math.max(r.ebitda, r.ocf)));
    const min = Math.min(0, ...rows.map(r => r.ocf));
    const span = max - min || 1;
    const pos = (v: number) => ((v - min) / span) * 100;
    const bar = (v: number, colour: string) => {
        const a = pos(Math.min(0, v)), b = pos(Math.max(0, v));
        return <div className="absolute inset-y-0 rounded-[2px]" style={{ left: `${a}%`, width: `${Math.max(0.5, b - a)}%`, background: colour }} />;
    };
    return (
        <div className="mt-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-gray-500 mb-2">
                <span className="flex items-center gap-1.5"><span className="w-3 h-2.5 rounded-[2px] bg-[#C9D6E3]" />Operating profit (EBITDA), {period}</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-2.5 rounded-[2px] bg-[#256abf]" />Operating cash collected, {period}</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-2.5 rounded-[2px] bg-[#d94645]" />Cash negative</span>
            </div>
            <div className="space-y-2">
                {rows.map(r => {
                    const conv = Math.round((r.ocf / r.ebitda) * 100);
                    return (
                        <div
                            key={r.company}
                            className="grid grid-cols-[110px_1fr] sm:grid-cols-[150px_1fr_170px] gap-x-3 gap-y-0.5 items-center"
                            title={`Operating profit ${rupees(r.ebitda)} · operating cash ${rupees(r.ocf)} · free cash after capex ${rupees(r.fcf)}`}
                        >
                            <div className="text-[11px] text-gray-700 leading-tight">{labels.get(r.company) ?? r.company}</div>
                            <div className="relative">
                                <div className="relative h-2.5">{bar(r.ebitda, '#C9D6E3')}</div>
                                <div className="relative h-2.5 mt-0.5">{bar(r.ocf, r.ocf < 0 ? '#d94645' : '#256abf')}</div>
                                {min < 0 && <div className="absolute -top-0.5 -bottom-0.5 w-px bg-gray-400" style={{ left: `${pos(0)}%` }} />}
                            </div>
                            <div className="col-start-2 sm:col-start-3 text-[10.5px] text-gray-500 tabular-nums leading-tight">
                                <span className={`font-semibold ${conv >= 60 ? 'text-gray-800' : conv >= 40 ? 'text-amber-700' : 'text-rose-600'}`}>
                                    {conv < 0 ? 'cash negative' : `${conv}% collected`}
                                </span>
                                <span className="text-gray-400"> · free cash {rupees(r.fcf)}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ── My growth estimate against the growth the price needs ───────────────────

export function GrowthPriceBlock({ rows, labels }: {
    rows: GrowthEstimate[];
    labels: Map<string, string>;
}) {
    const lo = Math.floor((Math.min(...rows.map(r => Math.min(r.low, r.needs))) - 1) / 5) * 5;
    const hi = Math.ceil((Math.max(...rows.map(r => Math.max(r.high, r.needs))) + 1) / 5) * 5;
    const pos = (v: number) => ((v - lo) / (hi - lo)) * 100;
    const ticks: number[] = [];
    for (let t = lo; t <= hi; t += 5) ticks.push(t);
    const read = (r: GrowthEstimate) =>
        r.needs <= r.base ? { t: 'Price asks for no more than I expect', c: 'text-emerald-700' }
            : r.needs <= r.high ? { t: 'Price needs my upside case', c: 'text-amber-700' }
                : { t: 'Price needs more than my best case', c: 'text-rose-600' };
    const grid = 'grid grid-cols-[110px_1fr] sm:grid-cols-[150px_1fr_210px] gap-x-3 gap-y-0.5 items-center';
    return (
        <div className="mt-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-gray-500 mb-2">
                <span className="flex items-center gap-1.5"><span className="w-4 h-2.5 rounded-full bg-[#b9d4f5]" />My range, low to high</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#184f95]" />My base case</span>
                <span className="flex items-center gap-1.5"><span className="w-0.5 h-3 bg-[#d94645]" />Growth the price needs</span>
            </div>
            <div className="space-y-2.5">
                {rows.map(r => {
                    const rd = read(r);
                    return (
                        <div key={r.company} className={grid}>
                            <div className="text-[11px] text-gray-700 leading-tight">{labels.get(r.company) ?? r.company}</div>
                            <div className="relative h-5" title={`My range ${r.low}% to ${r.high}%, base ${r.base}%; the price needs ${r.needs}%`}>
                                <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
                                <div className="absolute top-1/2 -translate-y-1/2 h-2.5 rounded-full bg-[#b9d4f5]" style={{ left: `${pos(r.low)}%`, width: `${pos(r.high) - pos(r.low)}%` }} />
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#184f95]" style={{ left: `${pos(r.base)}%` }} />
                                <div className="absolute top-0 bottom-0 -translate-x-1/2 w-0.5 bg-[#d94645]" style={{ left: `${pos(r.needs)}%` }} />
                            </div>
                            <div className="col-start-2 sm:col-start-3 text-[10.5px] tabular-nums leading-tight">
                                <span className="text-gray-500">mine {r.base}% · needs {r.needs}% · </span>
                                <span className={`font-semibold ${rd.c}`}>{rd.t}</span>
                            </div>
                        </div>
                    );
                })}
                <div className={grid}>
                    <div />
                    <div className="relative h-3 text-[9px] text-gray-400 tabular-nums">
                        {ticks.map(t => (
                            <span key={t} className="absolute -translate-x-1/2" style={{ left: `${pos(t)}%` }}>{t}%</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
