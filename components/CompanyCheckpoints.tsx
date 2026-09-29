"use client";
import React from 'react';
import { type Checkpoint, dueRank, formatTarget } from '@/lib/checkpoints/types';
import { type Project, PROJECT_STATUS_LABEL } from '@/lib/projects/types';
import { STATUS_STYLE } from './checkpoint-status';

// Settled ones first (latest on top), then pending ones soonest first.
const byStatusThenDue = (a: Checkpoint, b: Checkpoint) => {
    const pa = a.status === 'pending', pb = b.status === 'pending';
    if (pa !== pb) return pa ? 1 : -1;
    return pa ? dueRank(a.due) - dueRank(b.due) : dueRank(b.due) - dueRank(a.due);
};

const PROJECT_TONE: Record<Project['status'], string> = {
    planned: 'bg-gray-100 text-gray-500',
    building: 'bg-[#EAF2FB] text-[#4A7AAF]',
    started: 'bg-emerald-50 text-emerald-600',
    ramping: 'bg-emerald-50 text-emerald-600',
    'on hold': 'bg-[#F7F3FD] text-[#6B3FA0]',
    dropped: 'bg-gray-100 text-gray-400',
};

function CheckpointItem({ c }: { c: Checkpoint }) {
    const s = STATUS_STYLE[c.status];
    const Icon = s.icon;
    const target = formatTarget(c);
    return (
        <li className="flex items-start gap-2 text-xs">
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
                {c.revisions?.map(r => (
                    <p key={r.on + r.text} className="text-[10px] text-violet-500 mt-0.5">Management changed this ({r.on}): {r.text}</p>
                ))}
            </div>
        </li>
    );
}

// "What we were watching": the note's expectations for this company, each settled when its
// quarter's results arrive (numbers by the daily job, the rest by the weekly review), and the
// plants and expansions it has under way, with their milestones.
export function CompanyCheckpoints({ checkpoints, projects }: { checkpoints: Checkpoint[]; projects: Project[] }) {
    const general = checkpoints.filter(c => !c.project).sort(byStatusThenDue);
    const milestones = (id: string) => checkpoints.filter(c => c.project === id).sort(byStatusThenDue);
    if (!general.length && !projects.length) return null;

    return (
        <div id="company-checkpoints" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-baseline justify-between mb-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">What we were watching</p>
                <a href="/scorecard" className="text-[10px] text-gray-400 hover:text-[#4A7AAF]">scorecard</a>
            </div>
            {general.length > 0 && (
                <ul className="flex flex-col gap-2">
                    {general.map(c => <CheckpointItem key={c.id} c={c} />)}
                </ul>
            )}
            {projects.length > 0 && (
                <div className={general.length ? 'mt-4 pt-3 border-t border-gray-100' : ''}>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Projects and capex</p>
                    <ul className="flex flex-col gap-3">
                        {projects.map(p => {
                            const ms = milestones(p.id);
                            return (
                                <li key={p.id} className="text-xs">
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <span className="font-semibold text-gray-800">{p.name}</span>
                                        <span className={`px-1.5 py-px rounded text-[9px] font-semibold ${PROJECT_TONE[p.status]}`}>{PROJECT_STATUS_LABEL[p.status]}</span>
                                    </div>
                                    <p className="text-gray-600 mt-0.5">{p.what}</p>
                                    <p className="text-[10px] text-gray-400 mt-0.5">
                                        {[p.cost && `Cost ${p.cost}`, p.expectedStart && `start ${p.expectedStart}`, p.adds && `adds ${p.adds}`, p.source]
                                            .filter(Boolean).join(' · ')}
                                    </p>
                                    {p.revisions?.map(r => (
                                        <p key={r.on + r.text} className="text-[10px] text-violet-500 mt-0.5">Management changed this ({r.on}): {r.text}</p>
                                    ))}
                                    {ms.length > 0 && (
                                        <ul className="flex flex-col gap-1.5 mt-1.5 pl-2 border-l border-gray-100">
                                            {ms.map(c => <CheckpointItem key={c.id} c={c} />)}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
