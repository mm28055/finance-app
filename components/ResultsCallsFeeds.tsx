"use client";
import React from 'react';
import { Search, ExternalLink } from 'lucide-react';
import type { QuarterResult } from '@/lib/results/types';
import { ResultCard } from './ResultCard';
import { companyHref } from '@/lib/company-link';

// The Filings panel's Results and Calls tabs: every result read the night it came out (with the
// overnight view), and every earnings call analysed in the last six weeks (score, guidance, the
// top two takeaways). Company names find the company on the dashboard.

type Extra = { call?: string; inPortfolio?: boolean };
export type ResultRow = QuarterResult & Extra;
export type CallRow = Extra & {
    company: string; sector: string; quarter: string; general: boolean; date: string;
    score: number | null; guidance: { min: number | null; max: number | null; fy?: string } | null; points: string[];
    /** AGMs and special calls: the three-way read and what changed since the last results call. */
    read?: { read: 'positive' | 'neutral' | 'concerning'; change: string } | null;
    /** The transcript: the exchange filing, or our stored copy. */
    source?: { url: string; label: string } | null;
};

const CALL_TONE: Record<string, string> = {
    own: 'bg-emerald-50 text-emerald-700', follow: 'bg-[#EAF2FB] text-[#4A7AAF]', wait: 'bg-gray-100 text-gray-600',
    pass: 'bg-gray-100 text-gray-400', avoid: 'bg-rose-50 text-rose-500',
};
const READ_TONE: Record<string, string> = {
    positive: 'bg-emerald-50 text-emerald-700 border-emerald-200', neutral: 'bg-gray-50 text-gray-500 border-gray-200', concerning: 'bg-rose-50 text-rose-600 border-rose-200',
};
const dayLabel = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
const chip = (active: boolean) => `px-2.5 py-1 rounded-lg border text-[11px] ${active ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-200 hover:border-[#A5C4E2]'}`;
const select = 'px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-600';

function useWho() {
    const [who, setWho] = React.useState('any');
    const ok = (r: Extra) => who === 'any' || (who === 'portfolio' ? r.inPortfolio : who === 'ownfollow' ? r.call === 'own' || r.call === 'follow' : r.call === who);
    const control = (
        <select className={select} value={who} onChange={e => setWho(e.target.value)}>
            <option value="any">All companies</option>
            <option value="portfolio">My portfolio</option>
            <option value="ownfollow">Own and follow</option>
            {['own', 'follow', 'wait', 'pass', 'avoid'].map(c => <option key={c} value={c}>{c[0].toUpperCase() + c.slice(1)}</option>)}
        </select>
    );
    return { ok, control };
}

function SearchBox({ q, setQ }: { q: string; setQ: (v: string) => void }) {
    return (
        <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-500">
            <Search className="w-3.5 h-3.5" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Company" className="w-28 outline-none bg-transparent text-gray-700" />
        </label>
    );
}

function Name({ r, onCompany }: { r: Extra & { company: string }; onCompany?: (c: string) => void }) {
    return (
        <>
            {/* Opens the company's row on the dashboard in a new tab. */}
            <a href={companyHref(r.company)} target="_blank" rel="noopener" title="Open this company on the dashboard (new tab)"
                className="text-[13px] font-semibold text-gray-800 hover:text-[#4A7AAF] hover:underline">{r.company}</a>
            {r.call && <span className={`px-1.5 rounded text-[10px] font-semibold ${CALL_TONE[r.call] || ''}`}>{r.call}</span>}
        </>
    );
}

function byDay<T extends { date: string }>(rows: T[]) {
    const m = new Map<string, T[]>();
    for (const r of rows) m.set(r.date, [...(m.get(r.date) || []), r]);
    return [...m.entries()];
}

export function ResultsFeed({ results, onCompany }: { results: ResultRow[]; onCompany?: (c: string) => void }) {
    const [verdict, setVerdict] = React.useState('any');
    const [q, setQ] = React.useState('');
    const who = useWho();
    const shown = results.filter(r => (verdict === 'any' || r.take?.verdict === verdict) && who.ok(r) && (!q || r.company.toLowerCase().includes(q.toLowerCase())));
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                {[['any', 'All'], ['ahead', 'Ahead'], ['in line', 'In line'], ['behind', 'Behind'], ['mixed', 'Mixed']].map(([k, l]) => (
                    <button key={k} className={chip(verdict === k)} onClick={() => setVerdict(k)}>{l}</button>
                ))}
                <span className="w-px h-5 bg-gray-200 mx-1" />
                {who.control}
                <SearchBox q={q} setQ={setQ} />
                <span className="ml-auto text-[11px] text-gray-400">{shown.length} results</span>
            </div>
            {byDay(shown.map(r => ({ ...r, date: r.resultsDate }))).map(([day, list]) => (
                <section key={day}>
                    <p className="text-[11px] font-semibold text-gray-500 mb-1.5">{dayLabel(day)}</p>
                    <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                        {list.map(r => (
                            <div key={`${r.company}-${r.quarter}`} className="px-3 py-2.5">
                                <div className="flex flex-wrap items-center gap-2"><Name r={r} onCompany={onCompany} /><span className="text-[10px] text-gray-400">{r.sector}</span></div>
                                <ResultCard result={r} />
                            </div>
                        ))}
                    </div>
                </section>
            ))}
            {!shown.length && <p className="text-sm text-gray-400">{results.length ? 'No results match.' : 'No results yet. They appear here the night each company reports (the season starts mid-October).'}</p>}
        </div>
    );
}

export function CallsFeed({ calls, onCompany }: { calls: CallRow[]; onCompany?: (c: string) => void }) {
    const [kind, setKind] = React.useState<'results' | 'other'>('results');
    const [q, setQ] = React.useState('');
    const who = useWho();
    const shown = calls.filter(c => (kind === 'other' ? c.general : !c.general) && who.ok(c) && (!q || c.company.toLowerCase().includes(q.toLowerCase())));
    const guide = (g: CallRow['guidance']) => {
        if (!g) return null;
        const range = g.min !== null && g.max !== null && g.min !== g.max ? `${g.min}–${g.max}%` : `${g.min ?? g.max}%`;
        return `Guides ${range} revenue growth${g.fy ? ` for ${g.fy}` : ''}`;
    };
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                <button className={chip(kind === 'results')} onClick={() => setKind('results')}>Results calls</button>
                <button className={chip(kind === 'other')} onClick={() => setKind('other')}>AGMs and special calls</button>
                <span className="w-px h-5 bg-gray-200 mx-1" />
                {who.control}
                <SearchBox q={q} setQ={setQ} />
                <span className="ml-auto text-[11px] text-gray-400">{shown.length} calls</span>
            </div>
            {byDay(shown).map(([day, list]) => (
                <section key={day}>
                    <p className="text-[11px] font-semibold text-gray-500 mb-1.5">{dayLabel(day)}</p>
                    <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                        {list.map(c => (
                            <div key={`${c.company}-${c.quarter}`} className="px-3 py-2.5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Name r={c} onCompany={onCompany} />
                                    <span className="text-[11px] text-gray-500">{c.quarter}</span>
                                    {c.read && (
                                        <span title="Gemini Pro's read of this call against the last results call" className={`px-1.5 rounded border text-[10px] font-semibold capitalize ${READ_TONE[c.read.read]}`}>{c.read.read}</span>
                                    )}
                                    {c.score !== null && (
                                        <span title="Gemini Pro's score of the call (out of 100)" className={`px-1.5 rounded border text-[10px] font-semibold ${c.score >= 80 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : c.score >= 50 ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-rose-50 text-rose-600 border-rose-200'}`}>{c.score}/100</span>
                                    )}
                                    <span className="text-[10px] text-gray-400">{c.sector}</span>
                                    {c.source && (
                                        <a href={c.source.url} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 text-[11px] text-[#4A7AAF] hover:underline"
                                            title={c.source.label === 'Transcript PDF' ? 'Our stored copy of the transcript (no exchange link on record)' : 'The transcript as the company filed it'}>
                                            {c.source.label} <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                                {c.read?.change && <p className="text-[12px] font-medium text-gray-800 mt-1 leading-snug">{c.read.change}</p>}
                                {guide(c.guidance) && <p className="text-[11px] font-medium text-[#4A7AAF] mt-1">{guide(c.guidance)}</p>}
                                {c.points.length > 0 && (
                                    <ul className="mt-1 flex flex-col gap-0.5">
                                        {c.points.map((p, k) => <li key={k} className="text-[12px] text-gray-700 leading-snug">• {p}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
            {!shown.length && <p className="text-sm text-gray-400">No calls match.</p>}
            <p className="text-[11px] text-gray-400">Calls held in the last six weeks, analysed by Gemini Pro the night they are filed. The full analysis is in the company&apos;s card.</p>
        </div>
    );
}

export type CallChangeRow = {
    date: string; company: string; sector: string; from: string | null; to: string | null;
    price: number | null; priceNow: number | null; why?: string; inPortfolio?: boolean;
};
const RANK: Record<string, number> = { own: 0, follow: 1, wait: 2, pass: 3, avoid: 4 };
const direction = (c: CallChangeRow) => (!c.from ? 'new' : !c.to ? 'dropped' : RANK[c.to] < RANK[c.from] ? 'up' : 'down');

/** Every change in the notes' calls, newest first, with the move in the share price since. */
export function CallChangesFeed({ changes, onCompany }: { changes: CallChangeRow[]; onCompany?: (c: string) => void }) {
    const [dir, setDir] = React.useState<'any' | 'up' | 'down'>('any');
    const [portfolio, setPortfolio] = React.useState(false);
    const [sector, setSector] = React.useState('any');
    const [q, setQ] = React.useState('');
    const sectors = React.useMemo(() => [...new Set(changes.map(c => c.sector))].sort(), [changes]);
    const shown = changes.filter(c => (dir === 'any' || direction(c) === dir) && (!portfolio || c.inPortfolio)
        && (sector === 'any' || c.sector === sector) && (!q || c.company.toLowerCase().includes(q.toLowerCase())));
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                <button className={chip(dir === 'any')} onClick={() => setDir('any')}>All</button>
                <button className={chip(dir === 'up')} onClick={() => setDir('up')}>Upgrades</button>
                <button className={chip(dir === 'down')} onClick={() => setDir('down')}>Downgrades</button>
                <span className="w-px h-5 bg-gray-200 mx-1" />
                <button className={chip(portfolio)} onClick={() => setPortfolio(p => !p)}>My portfolio</button>
                <select className={select} value={sector} onChange={e => setSector(e.target.value)}>
                    <option value="any">All sectors</option>
                    {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <SearchBox q={q} setQ={setQ} />
                <span className="ml-auto text-[11px] text-gray-400">{shown.length} changes</span>
            </div>
            {byDay(shown).map(([day, list]) => (
                <section key={day}>
                    <p className="text-[11px] font-semibold text-gray-500 mb-1.5">{dayLabel(day)}</p>
                    <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                        {list.map(c => {
                            const d = direction(c);
                            const since = c.price && c.priceNow ? Math.round(((c.priceNow - c.price) / c.price) * 1000) / 10 : null;
                            return (
                                <div key={`${c.company}-${c.date}`} className="px-3 py-2.5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Name r={{ company: c.company }} onCompany={onCompany} />
                                        <span className="flex items-center gap-1 text-[11px]">
                                            {c.from ? <span className={`px-1.5 rounded font-semibold ${CALL_TONE[c.from] || ''}`}>{c.from}</span> : <span className="text-gray-400">new</span>}
                                            <span className={d === 'up' ? 'text-emerald-600' : d === 'down' ? 'text-rose-500' : 'text-gray-400'}>{d === 'up' ? '▲' : d === 'down' ? '▼' : '→'}</span>
                                            {c.to ? <span className={`px-1.5 rounded font-semibold ${CALL_TONE[c.to] || ''}`}>{c.to}</span> : <span className="text-gray-400">no longer covered</span>}
                                        </span>
                                        <span className="text-[10px] text-gray-400">{c.sector}</span>
                                        {c.price !== null && (
                                            <span className="ml-auto text-[11px] text-gray-500 tabular-nums" title="Share price on the day of the change, and since">
                                                ₹{c.price.toLocaleString('en-IN')}{since !== null && <span className={since > 0 ? 'text-emerald-600' : since < 0 ? 'text-rose-500' : ''}> · {since > 0 ? '+' : ''}{since}% since</span>}
                                            </span>
                                        )}
                                    </div>
                                    {c.why && <p className="text-[12px] text-gray-700 leading-snug mt-1">{c.why}</p>}
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
            {!shown.length && <p className="text-sm text-gray-400">{changes.length ? 'No changes match.' : 'No call changes yet. Every change to own, follow, wait, pass or avoid is recorded here from 3 Oct 2026.'}</p>}
        </div>
    );
}
