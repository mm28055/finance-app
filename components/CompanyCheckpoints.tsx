"use client";
import React from 'react';
import { Eye, Factory } from 'lucide-react';
import { type Checkpoint, dueRank, formatTarget } from '@/lib/checkpoints/types';
import { type Project, type Capacity, PROJECT_STATUS_LABEL } from '@/lib/projects/types';
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
    started: 'bg-emerald-50 text-emerald-700',
    ramping: 'bg-emerald-50 text-emerald-700',
    'on hold': 'bg-[#F7F3FD] text-[#6B3FA0]',
    dropped: 'bg-gray-100 text-gray-400',
};

const words = (s: string) => new Set(s.toLowerCase().replace(/revenue/g, 'sales').split(/[^a-z0-9₹]+/).filter(w => w.length > 2));
/** The sales line often repeats the capacity line in other words; show it only when it says something new. */
const adds = (a?: string, b?: string) => {
    if (!b) return false;
    if (!a) return true;
    const x = words(a), y = words(b);
    const shared = [...y].filter(w => x.has(w)).length;
    return shared / Math.max(1, Math.min(x.size, y.size)) < 0.6;
};

function SectionTitle({ icon: Icon, children, right }: { icon: React.ElementType; children: React.ReactNode; right?: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between mb-3">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                <Icon className="w-3.5 h-3.5" /> {children}
            </p>
            {right}
        </div>
    );
}

function Revisions({ list }: { list?: { on: string; text: string }[] }) {
    if (!list?.length) return null;
    return <>{list.map(r => (
        <p key={r.on + r.text} className="text-[11px] text-violet-600 mt-1">Management changed this ({r.on}): {r.text}</p>
    ))}</>;
}

/** One expectation: status icon, the text, then small tags for the target and the result. */
function CheckpointItem({ c, compact }: { c: Checkpoint; compact?: boolean }) {
    const s = STATUS_STYLE[c.status];
    const Icon = s.icon;
    const target = formatTarget(c);
    return (
        <li className="flex items-start gap-2.5">
            <Icon className={`w-4 h-4 mt-px shrink-0 ${s.cls}`} />
            <div className="flex-1 min-w-0">
                <p className={`${compact ? 'text-xs' : 'text-[13px]'} text-gray-800 leading-snug`}>{c.text}</p>
                {(target || c.actual || c.status !== 'pending') && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {c.status !== 'pending' && <span className={`text-[10px] font-semibold ${s.cls}`}>{s.label}</span>}
                        {target && <span className="px-1.5 rounded bg-gray-100 text-[10px] text-gray-600">target {target}</span>}
                        {c.actual && <span className="px-1.5 rounded bg-gray-100 text-[10px] text-gray-600">actual {c.actual}</span>}
                    </div>
                )}
                {c.status === 'pending' && c.ifMet && <p className="text-[11px] text-gray-400 mt-1">If met: {c.ifMet}</p>}
                {c.outcome && <p className="text-[11px] text-gray-500 mt-1">{c.outcome}</p>}
                {c.correction && <p className="text-[10px] text-gray-400 mt-0.5">Already true when we started watching; not counted in the scorecard.</p>}
                <Revisions list={c.revisions} />
            </div>
        </li>
    );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <>
            <dt className="text-[11px] text-gray-400 whitespace-nowrap pt-px">{label}</dt>
            <dd className="text-[13px] text-gray-700 leading-snug">{children}</dd>
        </>
    );
}

// "What we were watching": the note's expectations for this company, grouped by the quarter that
// settles them, and its capacity and projects (plants and expansions with their milestones).
export function CompanyCheckpoints({ checkpoints, projects, capacity }: { checkpoints: Checkpoint[]; projects: Project[]; capacity?: Capacity }) {
    const general = checkpoints.filter(c => !c.project).sort(byStatusThenDue);
    const milestones = (id: string) => checkpoints.filter(c => c.project === id).sort(byStatusThenDue);
    if (!general.length && !projects.length && !capacity) return null;

    // Settled expectations first, then pending ones under their quarter.
    const settled = general.filter(c => c.status !== 'pending');
    const byDue = new Map<string, Checkpoint[]>();
    for (const c of general.filter(c => c.status === 'pending')) byDue.set(c.due, [...(byDue.get(c.due) || []), c]);

    return (
        <div id="company-checkpoints" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col gap-5">
            {general.length > 0 && (
                <section>
                    <SectionTitle icon={Eye} right={<a href="/scorecard" className="text-[10px] text-gray-400 hover:text-[#4A7AAF]">scorecard</a>}>
                        What we were watching
                    </SectionTitle>
                    <div className="flex flex-col gap-4">
                        {settled.length > 0 && (
                            <div>
                                <p className="text-[10px] font-semibold text-gray-500 mb-2">Results in</p>
                                <ul className="flex flex-col gap-2.5">{settled.map(c => <CheckpointItem key={c.id} c={c} />)}</ul>
                            </div>
                        )}
                        {[...byDue.entries()].map(([due, list]) => (
                            <div key={due}>
                                <p className="inline-block text-[10px] font-semibold text-[#4A7AAF] bg-[#EAF2FB] rounded px-1.5 py-px mb-2">Due {due}</p>
                                <ul className="flex flex-col gap-2.5">{list.map(c => <CheckpointItem key={c.id} c={c} />)}</ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {(projects.length > 0 || capacity) && (
                <section className={general.length ? 'pt-4 border-t border-gray-100' : ''}>
                    <SectionTitle icon={Factory}>Capacity and projects</SectionTitle>
                    {capacity && (
                        <div className="rounded-lg bg-[#F8FAFC] px-3 py-2.5 mb-3">
                            <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1.5">
                                {capacity.today && <Row label="Today">{capacity.today}</Row>}
                                {capacity.utilisation && <Row label="Running at">{capacity.utilisation}</Row>}
                                {capacity.fullUse && <Row label="At full use">{capacity.fullUse}</Row>}
                                {capacity.capexStatus && <Row label="Capex">{capacity.capexStatus}</Row>}
                            </dl>
                            <p className="text-[10px] text-gray-400 mt-2">Source: {capacity.source}</p>
                        </div>
                    )}
                    {projects.length === 0 && !capacity?.capexStatus && <p className="text-xs text-gray-500">No major project under way.</p>}
                    <div className="flex flex-col gap-3">
                        {projects.map(p => {
                            const ms = milestones(p.id);
                            return (
                                <div key={p.id} className="rounded-lg border border-gray-100 px-3 py-2.5">
                                    <div className="flex items-start justify-between gap-2">
                                        <p className="text-[13px] font-semibold text-gray-800 leading-snug">{p.name}</p>
                                        <span className={`shrink-0 px-1.5 py-px rounded text-[10px] font-semibold ${PROJECT_TONE[p.status]}`}>{PROJECT_STATUS_LABEL[p.status]}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1 leading-snug">{p.what}</p>
                                    <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1 mt-2">
                                        {p.expectedStart && <Row label="Starts">{p.expectedStart}</Row>}
                                        {p.cost && <Row label="Cost">{p.cost}</Row>}
                                        {p.capacityAdd && <Row label="Adds">{p.capacityAdd}</Row>}
                                        {adds(p.capacityAdd, p.adds) && <Row label="Sales">{p.adds}</Row>}
                                    </dl>
                                    <Revisions list={p.revisions} />
                                    {ms.length > 0 && (
                                        <div className="mt-2.5 pt-2 border-t border-dashed border-gray-100">
                                            <p className="text-[10px] font-semibold text-gray-500 mb-1.5">Milestones</p>
                                            <ul className="flex flex-col gap-2">{ms.map(c => <CheckpointItem key={c.id} c={{ ...c, text: `${c.text} (by ${c.due})` }} compact />)}</ul>
                                        </div>
                                    )}
                                    <p className="text-[10px] text-gray-400 mt-2">Source: {p.source}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
}
