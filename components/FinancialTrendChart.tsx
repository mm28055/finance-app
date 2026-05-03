"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { EnrichedCompany } from './SectorList';

function shortQ(q: string) {
    return q.replace('FY', '').replace(' ', ' ');
}

function fmtCr(v: number) {
    return v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(Math.round(v));
}

interface Props {
    history: NonNullable<EnrichedCompany['history']>;
}

export function FinancialTrendChart({ history }: Props) {
    const data = [...history]
        .reverse()
        .map(h => ({
            q: shortQ(h.quarter),
            revenue: h.financials?.revenue?.currentQ ?? null,
            ebitda: h.financials?.ebitda?.currentQ ?? null,
            pat: h.financials?.pat?.currentQ ?? null,
        }))
        .filter(d => d.revenue !== null || d.ebitda !== null || d.pat !== null);

    if (data.length < 2) return null;

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Quarterly Trend (₹ Cr)</p>
            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                    <XAxis dataKey="q" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 9 }} tickLine={false} axisLine={false} width={44} tickFormatter={fmtCr} />
                    <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #E2E8F0', padding: '6px 10px' }}
                        formatter={(value: any, name?: string) => [
                            value != null ? `₹${Number(value).toLocaleString('en-IN')} Cr` : '—',
                            (name ?? '').toUpperCase()
                        ]}
                    />
                    <Legend iconType="circle" iconSize={6} wrapperStyle={{ fontSize: 10 }} />
                    <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#6B9FCC" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 4 }} connectNulls />
                    <Line type="monotone" dataKey="ebitda" name="EBITDA" stroke="#34D399" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 4 }} connectNulls />
                    <Line type="monotone" dataKey="pat" name="PAT" stroke="#F59E0B" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 4 }} connectNulls />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
