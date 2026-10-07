"use client";
import React from 'react';
import { Search } from 'lucide-react';
import type { ShiftRow } from '@/lib/business-shift/feed';
import { MixBars, SHIFT_LABEL, BusinessShiftCard } from './BusinessShiftCard';

const CALL_TONE: Record<string, string> = {
    own: 'bg-emerald-50 text-emerald-700', follow: 'bg-[#EAF2FB] text-[#4A7AAF]', wait: 'bg-gray-100 text-gray-600',
    pass: 'bg-gray-100 text-gray-400', avoid: 'bg-rose-50 text-rose-500',
};
const RANK = { transformational: 0, meaningful: 1, modest: 2 } as const;
const chip = (active: boolean) => `px-2.5 py-1 rounded-lg border text-[11px] ${active ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-200 hover:border-[#A5C4E2]'}`;

// Companies whose business will look different in three years: biggest shifts first, each with its mix
// three years ago, today and in FY29 (my projection), and the full write-up a click away.
export function ShiftsList({ shifts, onCompany }: { shifts: ShiftRow[]; onCompany?: (c: string) => void }) {
    const [kind, setKind] = React.useState<'all' | 'transformational' | 'meaningful'>('all');
    const [q, setQ] = React.useState('');
    const [open, setOpen] = React.useState<string | null>(null);
    const gain = (s: ShiftRow) => (s.chip ? s.chip.to - s.chip.from : 0);
    const shown = shifts
        .filter(s => (kind === 'all' || s.shift === kind) && (!q || s.company.toLowerCase().includes(q.toLowerCase())))
        .sort((a, b) => RANK[a.shift] - RANK[b.shift] || gain(b) - gain(a));
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                <button className={chip(kind === 'all')} onClick={() => setKind('all')}>All</button>
                <button className={chip(kind === 'transformational')} onClick={() => setKind('transformational')}>Transformational</button>
                <button className={chip(kind === 'meaningful')} onClick={() => setKind('meaningful')}>Meaningful</button>
                <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-500">
                    <Search className="w-3.5 h-3.5" />
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Company" className="w-28 outline-none bg-transparent text-gray-700" />
                </label>
                <span className="ml-auto text-[11px] text-gray-400">{shown.length} companies</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                {shown.map(s => {
                    const isOpen = open === s.company;
                    return (
                        <div key={s.company}>
                            <button onClick={() => setOpen(isOpen ? null : s.company)} className="w-full text-left px-3 py-3 hover:bg-[#FAFBFC]">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[13px] font-semibold text-gray-800">{s.company}</span>
                                    {s.call && <span className={`px-1.5 rounded text-[10px] font-semibold ${CALL_TONE[s.call] || ''}`}>{s.call}</span>}
                                    <span className={`px-1.5 rounded border text-[10px] font-semibold ${SHIFT_LABEL[s.shift].cls}`}>{SHIFT_LABEL[s.shift].text}</span>
                                    <span className="text-[10px] text-gray-400">{s.sector}</span>
                                    {s.chip && <span className="ml-auto text-[11px] text-[#6B3FA0] font-medium">{s.chip.segment}: {s.chip.from}% → {s.chip.to}%</span>}
                                </div>
                                <p className="text-[12px] text-gray-700 mt-0.5">{s.headline}</p>
                                <div className="mt-2 max-w-md"><MixBars shift={s} compact /></div>
                            </button>
                            {isOpen && (
                                <div className="border-t border-gray-100 bg-white">
                                    <BusinessShiftCard shift={s} />
                                    {onCompany && (
                                        <button onClick={() => onCompany(s.company)} className="ml-4 mb-4 text-[11px] text-[#4A7AAF] hover:underline">Find {s.company} on the dashboard →</button>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
                {!shown.length && <p className="text-sm text-gray-400 p-4">No companies match.</p>}
            </div>
        </div>
    );
}
