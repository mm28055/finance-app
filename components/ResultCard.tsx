"use client";
import React from 'react';
import type { QuarterResult, ResultRow } from '@/lib/results/types';

// A quarter's results under its date in the calendar: the main points first, then the figures
// against last year and the quarter before, how the tracked expectations fared, what the earnings
// call added once it has been analysed, and Claude's check from the weekly review (folded away).

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

// Older entries have the view as one paragraph: show its sentences as the points.
const sentences = (text: string) => text.split(/(?<=[.!?])\s+(?=[A-Z₹])/).map(s => s.trim()).filter(Boolean);
const shortDate = (iso: string) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

export function ResultCard({ result: r }: { result: QuarterResult }) {
    const v = r.take ? VERDICT[r.take.verdict] : null;
    const points = r.take?.points?.length ? r.take.points : r.take?.text ? sentences(r.take.text) : [];
    return (
        <div className="w-full mt-1.5 rounded-lg border border-gray-100 bg-[#FAFBFC] p-2.5 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-gray-700">{r.quarter} results</span>
                {v && <span className={`px-1.5 rounded border text-[10px] font-semibold ${v.chip}`}>{v.label}</span>}
                <span className="text-[10px] text-gray-400 capitalize">{r.view}</span>
            </div>

            {points.length > 0 && (
                <ul className="list-disc pl-4 flex flex-col gap-0.5 text-[12px] text-gray-800 leading-snug marker:text-gray-300">
                    {points.map((p, k) => <li key={k}>{p}</li>)}
                </ul>
            )}
            {r.oneOff && <p className="text-[11px] text-amber-700 leading-snug">{r.oneOff}</p>}

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

            {r.take && r.take.checks.length > 0 && (
                <ul className="flex flex-col gap-0.5">
                    {r.take.checks.map((c, k) => (
                        <li key={k} className="text-[11px] text-gray-600 leading-snug">
                            <span className={`font-semibold capitalize ${CHECK[c.status]}`}>{c.status}</span> · {c.text}{c.why ? <span className="text-gray-400"> ({c.why})</span> : null}
                        </li>
                    ))}
                </ul>
            )}
            {r.call?.text && (
                <p className="text-[12px] text-gray-700 leading-relaxed"><span className="font-semibold text-gray-800">What the call added: </span>{r.call.text}</p>
            )}
            {r.reviewed?.text && (
                <details className="text-[11px] text-gray-500 leading-snug">
                    <summary className="cursor-pointer text-[10px] text-gray-400 select-none">Claude's check, {shortDate(r.reviewed.on)}</summary>
                    <p className="mt-0.5">{r.reviewed.text}</p>
                </details>
            )}
        </div>
    );
}
