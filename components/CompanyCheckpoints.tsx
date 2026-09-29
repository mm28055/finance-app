"use client";
import React from 'react';
import { CheckCircle2, XCircle, CircleDot, Clock, MinusCircle } from 'lucide-react';
import { type Checkpoint, type CheckpointStatus, dueRank, formatTarget } from '@/lib/checkpoints/types';

export const STATUS_STYLE: Record<CheckpointStatus, { label: string; icon: React.ElementType; cls: string }> = {
    met: { label: 'Met', icon: CheckCircle2, cls: 'text-emerald-600' },
    partly: { label: 'Partly', icon: CircleDot, cls: 'text-amber-500' },
    missed: { label: 'Missed', icon: XCircle, cls: 'text-rose-500' },
    pending: { label: 'Pending', icon: Clock, cls: 'text-gray-400' },
    dropped: { label: 'Dropped', icon: MinusCircle, cls: 'text-gray-300' },
};

// "What we were watching": the note's expectations for this company, each settled
// when its quarter's results arrive (numbers by the daily job, the rest by the weekly review).
export function CompanyCheckpoints({ checkpoints }: { checkpoints: Checkpoint[] }) {
    const list = [...checkpoints]
        .filter(c => c.status !== 'dropped')
        .sort((a, b) => (a.status === 'pending' ? 1 : 0) - (b.status === 'pending' ? 1 : 0) || dueRank(b.due) - dueRank(a.due));
    if (!list.length) return null;

    return (
        <div id="company-checkpoints" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-baseline justify-between mb-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">What we were watching</p>
                <a href="/scorecard" className="text-[10px] text-gray-400 hover:text-[#4A7AAF]">scorecard</a>
            </div>
            <ul className="flex flex-col gap-2">
                {list.map(c => {
                    const s = STATUS_STYLE[c.status];
                    const Icon = s.icon;
                    const target = formatTarget(c);
                    return (
                        <li key={c.id} className="flex items-start gap-2 text-xs">
                            <Icon className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${s.cls}`} />
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-700">{c.text}</p>
                                <p className="text-[10px] text-gray-400 mt-0.5">
                                    <span className={`font-semibold ${s.cls}`}>{s.label}</span>
                                    {' · '}{c.due}
                                    {c.actual ? ` · actual ${c.actual}` : ''}
                                    {target ? ` · expected ${target}` : ''}
                                    {c.status === 'pending' && c.ifMet ? ` · if met: ${c.ifMet}` : ''}
                                    {c.outcome ? ` · ${c.outcome}` : ''}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
