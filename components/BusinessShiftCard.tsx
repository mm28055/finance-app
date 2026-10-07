"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { BusinessShift, ShiftMix } from '@/lib/business-shift/types';

// The IN 3 YRS tab on the company card, and the rows of the Shifts list: what the business is today, what it
// was three years ago, and what it could be by FY29, from management commentary and capex. The FY29 mix is my
// projection, not the company's.

const COLOURS = ['#6B9FCC', '#E0A030', '#7FB69E', '#B79AD8', '#E58F8F'];
const OTHER = '#C9CED6';

export const SHIFT_LABEL: Record<BusinessShift['shift'], { text: string; cls: string }> = {
    transformational: { text: 'Transformational', cls: 'bg-[#F3EEFB] text-[#6B3FA0] border-[#DDCDF5]' },
    meaningful: { text: 'Meaningful shift', cls: 'bg-[#EAF2FA] text-[#35577A] border-[#C9DCEF]' },
    modest: { text: 'Modest shift', cls: 'bg-gray-50 text-gray-500 border-gray-200' },
};
const CONFIDENCE: Record<BusinessShift['confidence'], string> = {
    high: 'High confidence', medium: 'Medium confidence', low: 'Low confidence',
};

/** One colour per segment, in the order the write-up lists them; "Other" is grey. */
export function segmentColours(s: BusinessShift): Map<string, string> {
    const m = new Map<string, string>();
    let i = 0;
    for (const seg of s.segments) m.set(seg.name, /^other/i.test(seg.name) ? OTHER : COLOURS[i++ % COLOURS.length]);
    return m;
}

/** The mix in each year as a stacked bar; the projection is drawn with a dashed outline. */
export function MixBars({ shift, years, compact = false }: { shift: BusinessShift; years?: string[]; compact?: boolean }) {
    const colours = segmentColours(shift);
    const rows: ShiftMix[] = years ? shift.mix.filter(m => years.includes(m.year)) : shift.mix;
    return (
        <div className={`flex flex-col ${compact ? 'gap-1' : 'gap-1.5'}`}>
            {rows.map(m => {
                const projected = /E$/.test(m.year);
                return (
                    <div key={m.year} className="flex items-center gap-2">
                        <span className={`shrink-0 text-[10px] tabular-nums ${compact ? 'w-10' : 'w-12'} ${projected ? 'text-[#6B3FA0] font-semibold' : 'text-gray-500'}`}>
                            {m.year}
                        </span>
                        <div className={`flex-1 flex overflow-hidden rounded ${compact ? 'h-3.5' : 'h-5'} ${projected ? 'outline outline-1 outline-dashed outline-[#B79AD8] outline-offset-1' : ''}`}>
                            {m.parts.filter(p => p.pct > 0).map(p => (
                                <div key={p.segment} style={{ width: `${p.pct}%`, background: colours.get(p.segment) || OTHER }}
                                    className="h-full flex items-center justify-center text-[9px] font-semibold text-white/95 overflow-hidden whitespace-nowrap"
                                    title={`${p.segment}: ${p.pct}% (₹${Math.round(p.revenue).toLocaleString('en-IN')}cr)`}>
                                    {!compact && p.pct >= 9 ? `${p.pct}%` : ''}
                                </div>
                            ))}
                        </div>
                        {!compact && (
                            <span className="shrink-0 w-20 text-right text-[10px] text-gray-500 tabular-nums">₹{Math.round(m.total).toLocaleString('en-IN')}cr</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function Legend({ shift }: { shift: BusinessShift }) {
    const colours = segmentColours(shift);
    return (
        <ul className="flex flex-col gap-1 mt-2.5">
            {shift.segments.map(s => (
                <li key={s.name} className="flex items-start gap-1.5 text-[11px] text-gray-600 leading-snug">
                    <span className="mt-1 w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: colours.get(s.name) }} />
                    <span><span className="font-semibold text-gray-800">{s.name}</span>{s.plain ? `: ${s.plain}` : ''}</span>
                </li>
            ))}
        </ul>
    );
}

const KIND: Record<string, string> = { capex: 'Capex', orders: 'Orders', guidance: 'Guidance', customers: 'Customers', acquisition: 'Acquisition' };

export function BusinessShiftCard({ shift }: { shift: BusinessShift }) {
    const label = SHIFT_LABEL[shift.shift];
    return (
        <div className="p-4 text-xs text-gray-700 leading-relaxed">
            <div className="flex flex-wrap items-center gap-2 mb-1">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">The business now, and in three years</p>
                <span className={`px-1.5 rounded border text-[10px] font-semibold ${label.cls}`}>{label.text}</span>
                <span className="text-[10px] text-gray-400" title={shift.confidenceWhy}>{CONFIDENCE[shift.confidence]}</span>
            </div>
            <h3 className="text-[14px] font-semibold text-gray-800 mb-3" style={{ textWrap: 'balance' } as React.CSSProperties}>{shift.headline}</h3>

            <div className="rounded-lg border border-gray-200 bg-[#FAFBFC] px-3 py-3 mb-4">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Share of revenue</p>
                <MixBars shift={shift} />
                <Legend shift={shift} />
                <p className="text-[10px] text-gray-400 mt-2">The dashed bar is my projection for FY29, not the company&apos;s. {shift.confidenceWhy}</p>
            </div>

            <div className="flex flex-col gap-3.5">
                <section>
                    <h4 className="text-[11px] font-semibold text-gray-800 mb-0.5">Today</h4>
                    <p className="text-[12px] text-gray-600">{shift.now}</p>
                </section>
                <section>
                    <h4 className="text-[11px] font-semibold text-gray-800 mb-0.5">In three years</h4>
                    <p className="text-[12px] text-gray-600">{shift.future}</p>
                </section>
                {shift.managementAim && (
                    <section>
                        <h4 className="text-[11px] font-semibold text-gray-800 mb-0.5">What management itself aims for</h4>
                        <p className="text-[12px] text-gray-600">{shift.managementAim}</p>
                    </section>
                )}
                {shift.drivers.length > 0 && (
                    <section>
                        <h4 className="text-[11px] font-semibold text-gray-800 mb-1">What is driving it</h4>
                        <ul className="flex flex-col gap-1.5">
                            {shift.drivers.map((d, i) => (
                                <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600 leading-snug">
                                    <span className="shrink-0 mt-px px-1.5 rounded border border-gray-200 bg-white text-[9.5px] font-semibold text-gray-500">{KIND[d.kind] || d.kind}</span>
                                    <span>{d.text} <span className="text-[10.5px] text-gray-400">({d.source})</span></span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                {shift.assumptions.length > 0 && (
                    <section>
                        <h4 className="text-[11px] font-semibold text-gray-800 mb-1">How I projected FY29</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-[11.5px]">
                                <tbody>
                                    {shift.assumptions.map((a, i) => (
                                        <tr key={i} className="border-t border-gray-100 align-top">
                                            <td className="py-1 pr-3 font-semibold text-gray-800 whitespace-nowrap">{a.segment}</td>
                                            <td className="py-1 pr-3 text-gray-700 whitespace-nowrap tabular-nums">{a.growth}</td>
                                            <td className="py-1 text-gray-500">{a.why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}
                {shift.risks.length > 0 && (
                    <section>
                        <h4 className="text-[11px] font-semibold text-gray-800 mb-1">What could stop or slow it</h4>
                        <ul className="list-disc pl-4 space-y-1 marker:text-gray-300 text-[12px] text-gray-600">
                            {shift.risks.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                    </section>
                )}
                {shift.watch.length > 0 && (
                    <section>
                        <h4 className="text-[11px] font-semibold text-gray-800 mb-1">What to watch</h4>
                        <ul className="flex flex-col gap-1">
                            {shift.watch.map((w, i) => (
                                <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600 leading-snug">
                                    <span className="shrink-0 w-[52px] text-[10.5px] text-gray-400 tabular-nums pt-px">{w.due}</span>
                                    <span>{w.text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                {shift.sources.length > 0 && (
                    <section>
                        <h4 className="text-[11px] font-semibold text-gray-800 mb-1">Sources</h4>
                        <ul className="flex flex-col gap-0.5">
                            {shift.sources.map((s, i) => (
                                <li key={i} className="text-[11px]">
                                    {s.url
                                        ? <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#4A7AAF] hover:underline">{s.label} <ExternalLink className="w-3 h-3 shrink-0" /></a>
                                        : <span className="text-gray-500">{s.label}</span>}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>

            <p className="text-[10px] text-gray-400 mt-4">
                {shift.asOf ? `Written ${new Date(shift.asOf + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} ` : ''}from
                the company&apos;s calls, presentations and annual reports. The three-year mix is an estimate to test against each quarter, not a forecast to rely on.
            </p>
        </div>
    );
}
