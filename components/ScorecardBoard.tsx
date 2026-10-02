"use client";
import React from 'react';
import { Search } from 'lucide-react';
import { dueRank, formatTarget, type Checkpoint } from '@/lib/checkpoints/types';
import { STATUS_STYLE } from './checkpoint-status';

export type ScoreRow = Checkpoint & { call?: string; inPortfolio?: boolean };

// Hit rate counts "partly" as half. Corrections (already settled before we started watching) are
// not predictions and are left out.
function hitRate(all: ScoreRow[]) {
    const list = all.filter(c => !c.correction);
    const met = list.filter(c => c.status === 'met').length;
    const partly = list.filter(c => c.status === 'partly').length;
    const missed = list.filter(c => c.status === 'missed').length;
    const judged = met + partly + missed;
    return { met, partly, missed, judged, rate: judged ? Math.round(((met + partly / 2) / judged) * 100) : null };
}

const CALL_TONE: Record<string, string> = {
    own: 'bg-emerald-50 text-emerald-700', follow: 'bg-[#EAF2FB] text-[#4A7AAF]', wait: 'bg-gray-100 text-gray-600',
    pass: 'bg-gray-100 text-gray-400', avoid: 'bg-rose-50 text-rose-500',
};
const quarterOf = (c: Checkpoint) => c.due.replace(/^H1 /, 'Q2 ').replace(/^H2 /, 'Q4 ');

function Row({ c }: { c: ScoreRow }) {
    const s = STATUS_STYLE[c.status];
    const Icon = s.icon;
    const target = formatTarget(c);
    return (
        <li className="flex items-start gap-2 py-2 border-b border-gray-100 last:border-0 text-xs">
            <Icon className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${s.cls}`} />
            <div className="flex-1 min-w-0">
                <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">{c.company}</span>
                    {c.call && <span className={`ml-1.5 px-1.5 rounded text-[10px] font-semibold ${CALL_TONE[c.call] || ''}`}>{c.call}</span>}
                    {' '}· {c.text}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                    {c.project ? 'Project milestone · ' : ''}{c.sector}
                    {c.actual ? ` · actual ${c.actual}` : ''}
                    {target ? ` · expected ${target}` : ''}
                    {c.resolvedBy ? ` · judged ${c.resolvedBy === 'auto' ? 'from filed results' : 'in review'}` : ''}
                    {c.outcome ? ` · ${c.outcome}` : ''}
                </p>
                {c.revisions?.map(r => (
                    <p key={r.on + r.text} className="text-[10px] text-violet-500 mt-0.5">Management changed this ({r.on}): {r.text}</p>
                ))}
            </div>
        </li>
    );
}

// The scorecard with filters: whose expectations (portfolio, own and follow, a single call), which
// sector, which state, and a company search. The hit rate and each quarter's tally follow the filter.
export function ScorecardBoard({ rows }: { rows: ScoreRow[] }) {
    const [who, setWho] = React.useState('any');
    const [sector, setSector] = React.useState('any');
    const [state, setState] = React.useState<'any' | 'settled' | 'pending'>('any');
    const [kind, setKind] = React.useState<'any' | 'expectation' | 'project'>('any');
    const [q, setQ] = React.useState('');

    const sectors = React.useMemo(() => [...new Set(rows.map(r => r.sector))].sort(), [rows]);
    const shown = rows.filter(c =>
        (who === 'any' || (who === 'portfolio' ? c.inPortfolio : who === 'ownfollow' ? c.call === 'own' || c.call === 'follow' : c.call === who)) &&
        (sector === 'any' || c.sector === sector) &&
        (state === 'any' || (state === 'pending' ? c.status === 'pending' : c.status !== 'pending')) &&
        (kind === 'any' || (kind === 'project' ? !!c.project : !c.project)) &&
        (!q || c.company.toLowerCase().includes(q.toLowerCase())));
    const filtered = who !== 'any' || sector !== 'any' || state !== 'any' || kind !== 'any' || !!q;

    const overall = hitRate(shown);
    const quarters = [...new Set(shown.map(quarterOf))].sort((a, b) => dueRank(a) - dueRank(b)); // soonest first
    const order = { missed: 0, partly: 1, met: 2, pending: 3 } as const;
    const chip = (active: boolean) => `px-2.5 py-1 rounded-lg border text-[11px] ${active ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-200 hover:border-[#A5C4E2]'}`;
    const select = 'px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-600';

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                <button className={chip(state === 'any')} onClick={() => setState('any')}>All</button>
                <button className={chip(state === 'settled')} onClick={() => setState('settled')}>Results in</button>
                <button className={chip(state === 'pending')} onClick={() => setState('pending')}>Pending</button>
                <span className="w-px h-5 bg-gray-200 mx-1" />
                <select className={select} value={who} onChange={e => setWho(e.target.value)}>
                    <option value="any">All companies</option>
                    <option value="portfolio">My portfolio</option>
                    <option value="ownfollow">Own and follow</option>
                    {['own', 'follow', 'wait', 'pass', 'avoid'].map(c => <option key={c} value={c}>{c[0].toUpperCase() + c.slice(1)}</option>)}
                </select>
                <select className={select} value={sector} onChange={e => setSector(e.target.value)}>
                    <option value="any">All sectors</option>
                    {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <select className={select} value={kind} onChange={e => setKind(e.target.value as typeof kind)}>
                    <option value="any">Expectations and projects</option>
                    <option value="expectation">Expectations only</option>
                    <option value="project">Project milestones only</option>
                </select>
                <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-500">
                    <Search className="w-3.5 h-3.5" />
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Company" className="w-28 outline-none bg-transparent text-gray-700" />
                </label>
                <span className="ml-auto text-[11px] text-gray-400">{shown.length.toLocaleString('en-IN')} of {rows.length.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex flex-wrap gap-6 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                {[
                    ['Hit rate', overall.rate == null ? '—' : `${overall.rate}%`],
                    ['Met', String(overall.met)],
                    ['Partly', String(overall.partly)],
                    ['Missed', String(overall.missed)],
                    ['Pending', String(shown.filter(c => c.status === 'pending').length)],
                ].map(([k, v]) => (
                    <div key={k}>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">{k}</p>
                        <p className="text-xl font-semibold text-gray-800 tabular-nums">{v}</p>
                    </div>
                ))}
                <p className="basis-full text-[11px] text-gray-400">
                    Numbers are checked automatically each evening once a quarter&apos;s results are filed; the rest are judged in the weekly review. Partly counts as half.
                    {filtered ? ' The figures above are for the filtered list.' : ''}
                </p>
            </div>

            {quarters.map(qtr => {
                const list = shown.filter(c => quarterOf(c) === qtr)
                    .sort((a, b) => order[a.status] - order[b.status] || a.company.localeCompare(b.company));
                const hr = hitRate(list);
                const settled = list.filter(c => c.status !== 'pending');
                const pending = list.filter(c => c.status === 'pending');
                return (
                    <section key={qtr} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-baseline justify-between mb-2">
                            <h2 className="text-sm font-semibold text-gray-800">{qtr}</h2>
                            <span className="text-[11px] text-gray-500 tabular-nums">
                                {hr.judged ? `${hr.rate}% hit · ${hr.met} met, ${hr.partly} partly, ${hr.missed} missed · ` : ''}{pending.length} pending
                            </span>
                        </div>
                        {settled.length > 0 && <ul>{settled.map(c => <Row key={c.id} c={c} />)}</ul>}
                        {pending.length > 0 && (
                            // A filtered list is short enough to show at once; the full one stays folded.
                            <details className="mt-1" open={filtered && pending.length <= 60} key={`${qtr}-${filtered}`}>
                                <summary className="text-xs text-gray-500 cursor-pointer select-none">Pending ({pending.length})</summary>
                                <ul>{pending.map(c => <Row key={c.id} c={c} />)}</ul>
                            </details>
                        )}
                    </section>
                );
            })}
            {!quarters.length && <p className="text-sm text-gray-400">{rows.length ? 'Nothing matches.' : 'No checkpoints yet.'}</p>}
        </div>
    );
}
