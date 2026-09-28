"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { EnrichedCompany } from './SectorList';
import { TONE_STYLE } from './SectorFilings';

// "Sep 2026" -> "Sep 26"
const shortPeriod = (p: string) => p.replace(/\s+\d{2}(\d{2})$/, ' $1');
const fmt = (v: number | null | undefined, digits = 1) => (v == null ? '—' : `${Number(v.toFixed(digits))}%`);

// Who owns the company: promoter, FII, DII and public over the last 12 periods,
// the latest figures, the pledge, the number of shareholders and any changes
// worth a look. Shown in the opened row next to the other cards.
export function HoldingCard({ holding }: { holding: NonNullable<EnrichedCompany['holding']> }) {
    const rows = holding.rows || [];
    const latest = rows[rows.length - 1];
    if (!latest) return null;
    const data = rows.map(r => ({ p: shortPeriod(r.period), promoter: r.promoter, fii: r.fii, dii: r.dii, public: r.public }));
    const stats: [string, string][] = [
        ['Promoter', fmt(latest.promoter)],
        ['FII', fmt(latest.fii)],
        ['DII', fmt(latest.dii)],
        ['Public', fmt(latest.public)],
        ...(latest.government > 0 ? [['Govt', fmt(latest.government)] as [string, string]] : []),
        ['Pledged', holding.pledged == null ? '—' : `${fmt(holding.pledged, 0)} of promoter`],
        ['Shareholders', latest.shareholders == null ? '—' : latest.shareholders.toLocaleString('en-IN')],
    ];

    return (
        <div id="company-holding" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-baseline justify-between mb-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Who owns it</p>
                <span className="text-[10px] text-gray-400">as of {latest.period}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                {stats.map(([label, value]) => (
                    <div key={label} className="flex items-baseline gap-1">
                        <span className="text-[10px] text-gray-400">{label}</span>
                        <span className="text-xs font-semibold text-gray-700 tabular-nums">{value}</span>
                    </div>
                ))}
            </div>
            {data.length >= 2 && (
                <ResponsiveContainer width="100%" height={130}>
                    <LineChart data={data} margin={{ top: 4, right: 8, left: -6, bottom: 0 }}>
                        <XAxis dataKey="p" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} interval="preserveStartEnd" />
                        <YAxis tick={{ fontSize: 9 }} tickLine={false} axisLine={false} width={40} tickFormatter={(v: number) => `${v}%`} domain={[0, 'auto']} />
                        <Tooltip
                            contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #E2E8F0', padding: '6px 10px' }}
                            formatter={(value: any, name?: string) => [value != null ? `${Number(value).toFixed(2)}%` : '—', name ?? '']}
                        />
                        <Legend iconType="circle" iconSize={6} wrapperStyle={{ fontSize: 10 }} />
                        <Line type="monotone" dataKey="promoter" name="Promoter" stroke="#6B9FCC" strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 4 }} />
                        <Line type="monotone" dataKey="fii" name="FII" stroke="#34D399" strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 4 }} />
                        <Line type="monotone" dataKey="dii" name="DII" stroke="#F59E0B" strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 4 }} />
                        <Line type="monotone" dataKey="public" name="Public" stroke="#94A3B8" strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            )}
            {holding.notes.length > 0 && (
                <ul className={`mt-3 flex flex-col gap-1 ${holding.notes.some(n => n.tone === 'watch') ? 'rounded-md border border-[#DDCDF5] bg-[#F7F3FD] px-2.5 py-2' : ''}`}>
                    {holding.notes.some(n => n.tone === 'watch') && (
                        <li className="text-[10px] font-semibold uppercase tracking-wide text-[#6B3FA0]">⚠ Holding change</li>
                    )}
                    {holding.notes.map((n, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${TONE_STYLE[n.tone].dot}`} aria-hidden="true" />
                            {n.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
