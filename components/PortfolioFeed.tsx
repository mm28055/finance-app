"use client";
import React from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { companyHref } from '@/lib/company-link';
import { Takeaway, ReasonList, type ResultRow, type CallRow, type CallChangeRow } from './ResultsCallsFeeds';

// The Filings panel's "My portfolio" tab: everything about the companies held, one card per holding —
// dates coming up, what happened (filings, news and price moves, results, calls, call changes) and
// what is being watched. Holdings with something new come first; quiet ones share one line.

export type Holding = {
    company: string; sector: string; call?: string;
    upcoming: { kind: 'results' | 'call'; date: string; time?: string }[];
    watching: { text: string; due: string }[];
    settled: { text: string; status: string; actual?: string; on?: string }[];
};
type Item = { date: string; kind: string; title: string; detail?: string; points?: string[]; reason?: string; url?: string };
type Loose = { company: string; inPortfolio?: boolean; [k: string]: any };

const CALL_TONE: Record<string, string> = {
    own: 'bg-emerald-50 text-emerald-700', follow: 'bg-[#EAF2FB] text-[#4A7AAF]', wait: 'bg-gray-100 text-gray-600',
    pass: 'bg-gray-100 text-gray-400', avoid: 'bg-rose-50 text-rose-500',
};
const KIND_TONE: Record<string, string> = {
    Filing: 'bg-[#EAF2FA] text-[#35577A] border-[#C9DCEF]', News: 'bg-[#FDF6E7] text-[#946200] border-[#F0DDAE]',
    Results: 'bg-emerald-50 text-emerald-700 border-emerald-200', Call: 'bg-[#E7F5EC] text-[#1F7A45] border-[#BFE3CC]',
    'Call change': 'bg-violet-50 text-violet-700 border-violet-200',
};
const VERDICT_WORD: Record<string, string> = { ahead: 'Ahead', 'in line': 'In line', behind: 'Behind', mixed: 'Mixed' };
const shortDay = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
const chip = (active: boolean) => `px-2.5 py-1 rounded-lg border text-[11px] ${active ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-200 hover:border-[#A5C4E2]'}`;

export function PortfolioFeed({ holdings, filings, news, results, calls, callChanges }: {
    holdings: Holding[]; filings: Loose[]; news: Loose[]; results: ResultRow[]; calls: CallRow[]; callChanges: CallChangeRow[];
}) {
    const [days, setDays] = React.useState(30);
    const [q, setQ] = React.useState('');
    const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
    const items = (company: string): Item[] => [
        ...filings.filter(f => f.company === company).map(f => ({ date: f.date, kind: 'Filing', title: f.headline, detail: f.summary, url: f.url })),
        ...news.filter(f => f.company === company).map(f => ({ date: f.date, kind: 'News', title: `${f.category === 'Price move' ? 'Price move: ' : ''}${f.headline}`, detail: f.summary, url: f.url })),
        ...results.filter(r => r.company === company).map(r => ({
            date: r.resultsDate, kind: 'Results', title: `${r.quarter} results${r.take ? `: ${VERDICT_WORD[r.take.verdict] || r.take.verdict}` : ''}`,
            detail: [r.take?.text, r.call ? `After the call: ${r.call.text}` : ''].filter(Boolean).join(' '),
        })),
        ...calls.filter(c => c.company === company).map(c => ({
            date: c.date, kind: 'Call', title: `${c.quarter}${c.score !== null ? ` · ${c.score}/100` : c.read ? ` · ${c.read.read}` : ''}`,
            // A special call's read is one line; a results call's takeaways are listed, each led by its bold heading.
            detail: c.read?.change, points: c.read?.change ? undefined : c.points, url: c.source?.url,
        })),
        ...callChanges.filter(c => c.company === company).map(c => ({ date: c.date, kind: 'Call change', title: `${c.from ?? 'new'} → ${c.to ?? 'no longer covered'}`, reason: c.why })),
    ].filter(i => i.date >= since).sort((a, b) => b.date.localeCompare(a.date));

    const rows = holdings.filter(h => !q || h.company.toLowerCase().includes(q.toLowerCase())).map(h => ({ h, list: items(h.company) }));
    const active = rows.filter(r => r.list.length || r.h.upcoming.length || q).sort((a, b) => (b.list[0]?.date || '').localeCompare(a.list[0]?.date || ''));
    const quiet = rows.filter(r => !r.list.length && !r.h.upcoming.length && !q);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                {[7, 30, 90, 180].map(d => <button key={d} className={chip(days === d)} onClick={() => setDays(d)}>Last {d} days</button>)}
                <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-500">
                    <Search className="w-3.5 h-3.5" />
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Company" className="w-28 outline-none bg-transparent text-gray-700" />
                </label>
                <span className="ml-auto text-[11px] text-gray-400">{holdings.length} holdings</span>
            </div>
            {days > 90 && <p className="text-[11px] text-gray-400 -mt-2">Company filings and news are collected from 1 September 2026, so the longer views fill up as time passes.</p>}
            {active.map(({ h, list }) => (
                <section key={h.company} className="bg-white border border-gray-200 rounded-xl p-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <a href={companyHref(h.company)} target="_blank" rel="noopener" title="Open this company on the dashboard (new tab)"
                            className="text-[13px] font-semibold text-gray-800 hover:text-[#4A7AAF] hover:underline">{h.company}</a>
                        {h.call && <span className={`px-1.5 rounded text-[10px] font-semibold ${CALL_TONE[h.call] || ''}`}>{h.call}</span>}
                        <span className="text-[10px] text-gray-400">{h.sector}</span>
                    </div>
                    <p className={`text-[11px] mt-1 ${h.upcoming.length ? 'text-[#35577A]' : 'text-gray-400'}`}>
                        Coming up: {h.upcoming.length
                            ? h.upcoming.map(u => `${u.kind === 'results' ? 'Results' : 'Earnings call'} ${shortDay(u.date)}${u.time ? `, ${u.time}` : ''}`).join(' · ')
                            : 'results date not yet announced'}
                    </p>
                    {list.length > 0 && (
                        <ul className="mt-2 flex flex-col divide-y divide-gray-50">
                            {list.map((i, k) => (
                                <li key={k} className="py-1.5 flex gap-2 items-start">
                                    <span className="w-12 shrink-0 text-[10px] text-gray-400 pt-0.5">{shortDay(i.date)}</span>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            <span className={`px-1.5 rounded border text-[10px] font-semibold ${KIND_TONE[i.kind] || ''}`}>{i.kind}</span>
                                            <span className="text-[12px] font-medium text-gray-800">{i.title}</span>
                                            {i.url && <a href={i.url} target="_blank" rel="noopener noreferrer" className="text-[#4A7AAF]" title="Open the source"><ExternalLink className="w-3 h-3" /></a>}
                                        </div>
                                        {i.detail && <p className="text-[11px] text-gray-600 leading-snug mt-0.5 line-clamp-3">{i.detail}</p>}
                                        {i.reason && <ReasonList why={i.reason} />}
                                        {i.points && i.points.length > 0 && (
                                            <ul className="mt-1 flex flex-col gap-1 list-disc pl-4 marker:text-gray-300">
                                                {i.points.map((p, k) => <Takeaway key={k} text={p} />)}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {(h.watching.length > 0 || h.settled.length > 0) && (
                        <details className="mt-2">
                            <summary className="text-[11px] text-gray-500 cursor-pointer select-none">
                                What we are watching{h.watching[0] ? ` (${h.watching[0].due})` : ''}: {h.watching.length}{h.settled.length ? ` · ${h.settled.length} settled lately` : ''}
                            </summary>
                            <ul className="mt-1 flex flex-col gap-0.5 pl-1">
                                {h.settled.map((x, k) => (
                                    <li key={`s${k}`} className="text-[11px] text-gray-600 leading-snug">
                                        <span className={`font-semibold capitalize ${x.status === 'met' ? 'text-emerald-600' : x.status === 'missed' ? 'text-rose-500' : 'text-amber-600'}`}>{x.status}</span> · {x.text}{x.actual ? <span className="text-gray-400"> ({x.actual})</span> : null}
                                    </li>
                                ))}
                                {h.watching.map((x, k) => <li key={`w${k}`} className="text-[11px] text-gray-600 leading-snug">• {x.text}</li>)}
                            </ul>
                        </details>
                    )}
                </section>
            ))}
            {quiet.length > 0 && (
                <p className="text-[11px] text-gray-400 leading-relaxed">Nothing new in the last {days} days: {quiet.map(r => r.h.company).join(', ')}.</p>
            )}
        </div>
    );
}
