"use client";
import React from 'react';
import { type Checkpoint, dueRank, formatTarget } from '@/lib/checkpoints/types';
import { STATUS_STYLE } from './checkpoint-status';

// "What we were watching": the note's expectations for this company, each settled
// when its quarter's results arrive (numbers by the daily job, the rest by the weekly review).
export function CompanyCheckpoints({ checkpoints }: { checkpoints: Checkpoint[] }) {
    const list = [...checkpoints]
        .filter(c => c.status !== 'dropped')
        // Settled ones first (latest on top), then pending ones soonest first.
        .sort((a, b) => {
            const pa = a.status === 'pending', pb = b.status === 'pending';
            if (pa !== pb) return pa ? 1 : -1;
            return pa ? dueRank(a.due) - dueRank(b.due) : dueRank(b.due) - dueRank(a.due);
        });
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
