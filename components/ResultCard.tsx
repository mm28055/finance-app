"use client";
import React from 'react';
import type { QuarterResult, ResultRow } from '@/lib/results/types';

// A quarter's results under its date in the calendar: the figures against last year and the
// quarter before, the overnight view (and how the tracked expectations fared), and what the
// earnings call added once it has been analysed.

const VERDICT: Record<string, { label: string; chip: string }> = {
    ahead: { label: 'Ahead', chip: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    'in line': { label: 'In line', chip: 'bg-[#EAF2FB] text-[#4A7AAF] border-[#C9DCEF]' },
    behind: { label: 'Behind', chip: 'bg-rose-50 text-rose-600 border-rose-200' },
    mixed: { label: 'Mixed', chip: 'bg-amber-50 text-amber-700 border-amber-200' },
};
const CHECK: Record<string, string> = { met: 'text-emerald-600', missed: 'text-rose-500', unclear: 'text-gray-400' };

const value = (r: ResultRow, v: number | null) => (v === null ? '–' : r.unit === '%' ? `${v.toFixed(1)}%` : `₹${Math.round(v).toLocaleString('en-IN')}cr`);
const change = (r: ResultRow, v: number | null) => {
    if (v === null) return <span className="text-gray-300">–</span>;
    const text = r.unit === '%' ? `${v > 0 ? '+' : ''}${v.toFixed(1)} pts` : `${v > 0 ? '+' : ''}${Math.round(v)}%`;
    return <span className={v > 0 ? 'text-emerald-600' : v < 0 ? 'text-rose-500' : 'text-gray-500'}>{text}</span>;
};

export function ResultCard({ result: r }: { result: QuarterResult }) {
    const v = r.take ? VERDICT[r.take.verdict] : null;
    return (
        <div className="w-full mt-1.5 rounded-lg border border-gray-100 bg-[#FAFBFC] p-2.5 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-gray-700">{r.quarter} results</span>
                {v && <span className={`px-1.5 rounded border text-[10px] font-semibold ${v.chip}`}>{v.label}</span>}
                <span className="text-[10px] text-gray-400 capitalize">{r.view}</span>
            </div>

            <table className="w-full text-[11px] tabular-nums">
                <thead>
                    <tr className="text-[10px] text-gray-400">
                        <th className="text-left font-medium" />
                        <th className="text-right font-medium" title={r.periods.now}>This quarter</th>
                        <th className="text-right font-medium" title={r.periods.yearAgo ? `Against ${r.periods.yearAgo}` : undefined}>vs last year</th>
                        {r.periods.prev && <th className="text-right font-medium" title={`Against ${r.periods.prev}`}>vs last quarter</th>}
                    </tr>
                </thead>
                <tbody>
                    {r.rows.map(row => (
                        <tr key={row.label} className="border-t border-gray-100">
                            <td className="py-0.5 text-gray-600">{row.label}</td>
                            <td className="py-0.5 text-right text-gray-800 font-medium" title={row.yearAgo !== null ? `Year ago ${value(row, row.yearAgo)}${row.prev !== null ? ` · last quarter ${value(row, row.prev)}` : ''}` : undefined}>{value(row, row.now)}</td>
                            <td className="py-0.5 text-right">{change(row, row.yoy)}</td>
                            {r.periods.prev && <td className="py-0.5 text-right">{change(row, row.qoq)}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>

            {r.oneOff && <p className="text-[10px] text-amber-700 leading-snug">{r.oneOff}</p>}
            {r.take?.text && <p className="text-[12px] text-gray-700 leading-relaxed">{r.take.text}</p>}
            {r.take && r.take.checks.length > 0 && (
                <ul className="flex flex-col gap-0.5">
                    {r.take.checks.map((c, k) => (
                        <li key={k} className="text-[11px] text-gray-600 leading-snug">
                            <span className={`font-semibold capitalize ${CHECK[c.status]}`}>{c.status}</span> · {c.text}{c.why ? <span className="text-gray-400"> ({c.why})</span> : null}
                        </li>
                    ))}
                </ul>
            )}
            {r.call && (
                <p className="text-[12px] text-gray-700 leading-relaxed"><span className="font-semibold text-gray-800">After the call: </span>{r.call.text}</p>
            )}
            <p className="text-[10px] text-gray-400">
                {r.reviewed ? `Reviewed by Claude on ${r.reviewed.on}${r.reviewed.text ? `: ${r.reviewed.text}` : ''}` : 'Overnight view, written automatically; Claude reviews it in the weekly review.'}
                {!r.call && ' The call note is added once the earnings call has been analysed.'}
            </p>
        </div>
    );
}
