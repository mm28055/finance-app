"use client";
import React from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { companyHref } from '@/lib/company-link';
import { Takeaway, ReasonList, type ResultRow, type CallRow, type CallChangeRow } from './ResultsCallsFeeds';

// The Filings panel's "My portfolio" tab, by date: what is coming up for the holdings, then day by
// day what happened (filings, news and price moves, results, calls, call changes), newest first,
// and at the end what is being watched for each holding (folded) and which holdings were quiet.

export type Holding = {
    company: string; sector: string; call?: string;
    upcoming: { kind: 'results' | 'call'; date: string; time?: string }[];
    watching: { text: string; due: string }[];
    settled: { text: string; status: string; actual?: string; on?: string }[];
};
type Item = { company: string; date: string; kind: string; title: string; detail?: string; points?: string[]; reason?: string; url?: string };
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
const longDay = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
const shortDay = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
const chip = (active: boolean) => `px-2.5 py-1 rounded-lg border text-[11px] ${active ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-200 hover:border-[#A5C4E2]'}`;

export function PortfolioFeed({ holdings, filings, news, results, calls, callChanges }: {
    holdings: Holding[]; filings: Loose[]; news: Loose[]; results: ResultRow[]; calls: CallRow[]; callChanges: CallChangeRow[];
}) {
    const [days, setDays] = React.useState(30);
    const [q, setQ] = React.useState('');
    const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
    const holds = holdings.filter(h => !q || h.company.toLowerCase().includes(q.toLowerCase()));
    const held = new Set(holds.map(h => h.company));
    const callOf = new Map(holdings.map(h => [h.company, h.call]));
    const mine = <T extends { company: string }>(rows: T[]) => rows.filter(r => held.has(r.company));
    const items: Item[] = [
        ...mine(filings).map(f => ({ company: f.company, date: f.date, kind: 'Filing', title: f.headline, detail: f.summary, url: f.url })),
        ...mine(news).map(f => ({ company: f.company, date: f.date, kind: 'News', title: `${f.category === 'Price move' ? 'Price move: ' : ''}${f.headline}`, detail: f.summary, url: f.url })),
        ...mine(results).map(r => ({
            company: r.company, date: r.resultsDate, kind: 'Results', title: `${r.quarter} results${r.take ? `: ${VERDICT_WORD[r.take.verdict] || r.take.verdict}` : ''}`,
            points: [...(r.take?.points?.length ? r.take.points : r.take?.text ? [r.take.text] : []), ...(r.callNote?.text ? [`What the call added: ${r.callNote.text}`] : [])],
        })),
        ...mine(calls).map(c => ({
            company: c.company, date: c.date, kind: 'Call', title: `${c.quarter}${c.score !== null ? ` · ${c.score}/100` : c.read ? ` · ${c.read.read}` : ''}`,
            // A special call's read is one line; a results call's takeaways are listed, each led by its bold heading.
            detail: c.read?.change, points: c.read?.change ? undefined : c.points, url: c.source?.url,
        })),
        ...mine(callChanges).map(c => ({ company: c.company, date: c.date, kind: 'Call change', title: `${c.from ?? 'new'} → ${c.to ?? 'no longer covered'}`, reason: c.why })),
    ].filter(i => i.date >= since).sort((a, b) => b.date.localeCompare(a.date));
    const dates = [...new Set(items.map(i => i.date))];
    const upcoming = holds.flatMap(h => h.upcoming.map(u => ({ ...u, company: h.company }))).sort((a, b) => a.date.localeCompare(b.date));
    const watched = holds.filter(h => h.watching.length || h.settled.length);
    const quiet = holds.filter(h => !items.some(i => i.company === h.company) && !h.upcoming.length);

    return (
        <div className="flex flex-col gap-4">
            <div className="sticky top-[var(--filters-top,0px)] z-10 shadow-[0_0_0_8px_#FAFBFC] flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                {[7, 30, 90, 180].map(d => <button key={d} className={chip(days === d)} onClick={() => setDays(d)}>Last {d} days</button>)}
                <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-500">
                    <Search className="w-3.5 h-3.5" />
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Company" className="w-28 outline-none bg-transparent text-gray-700" />
                </label>
                <span className="ml-auto text-[11px] text-gray-400">{holdings.length} holdings</span>
            </div>
            {days > 90 && <p className="text-[11px] text-gray-400 -mt-2">Company filings and news are collected from 1 September 2026, so the longer views fill up as time passes.</p>}
            {upcoming.length > 0 && (
                <section className="bg-white border border-gray-200 rounded-xl p-3">
                    <p className="text-[11px] font-semibold text-gray-500 mb-1">Coming up</p>
                    <ul className="flex flex-col gap-0.5">
                        {upcoming.map((u, k) => (
                            <li key={k} className="flex gap-2 text-[12px] text-gray-700">
                                <span className="w-12 shrink-0 text-[11px] text-[#35577A] font-medium">{shortDay(u.date)}</span>
                                <span><Company name={u.company} call={callOf.get(u.company)} /> · {u.kind === 'results' ? 'Results' : 'Earnings call'}{u.time ? `, ${u.time}` : ''}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            {dates.map(day => (
                <section key={day}>
                    <p className="text-[11px] font-semibold text-gray-500 mb-1.5">{longDay(day)}</p>
                    <ul className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                        {items.filter(i => i.date === day).map((i, k) => (
                            <li key={k} className="px-3 py-2">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    <Company name={i.company} call={callOf.get(i.company)} />
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
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            {!dates.length && <p className="text-sm text-gray-400">Nothing new for your holdings in the last {days} days.</p>}
            {watched.length > 0 && (
                <details className="bg-white border border-gray-200 rounded-xl p-3">
                    <summary className="text-[11px] font-semibold text-gray-500 cursor-pointer select-none">What we are watching ({watched.length} holdings)</summary>
                    <div className="mt-2 flex flex-col gap-2">
                        {watched.map(h => (
                            <div key={h.company}>
                                <p className="text-[12px]"><Company name={h.company} call={h.call} />{h.watching[0] ? <span className="text-[10px] text-gray-400"> · for {h.watching[0].due}</span> : null}</p>
                                <ul className="mt-0.5 flex flex-col gap-0.5 pl-1">
                                    {h.settled.map((x, k) => (
                                        <li key={`s${k}`} className="text-[11px] text-gray-600 leading-snug">
                                            <span className={`font-semibold capitalize ${x.status === 'met' ? 'text-emerald-600' : x.status === 'missed' ? 'text-rose-500' : 'text-amber-600'}`}>{x.status}</span> · {x.text}{x.actual ? <span className="text-gray-400"> ({x.actual})</span> : null}
                                        </li>
                                    ))}
                                    {h.watching.map((x, k) => <li key={`w${k}`} className="text-[11px] text-gray-600 leading-snug">• {x.text}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </details>
            )}
            {quiet.length > 0 && (
                <p className="text-[11px] text-gray-400 leading-relaxed">Nothing new in the last {days} days: {quiet.map(h => h.company).join(', ')}.</p>
            )}
        </div>
    );
}

function Company({ name, call }: { name: string; call?: string }) {
    return (
        <>
            <a href={companyHref(name)} target="_blank" rel="noopener" title="Open this company on the dashboard (new tab)"
                className="text-[12px] font-semibold text-gray-800 hover:text-[#4A7AAF] hover:underline">{name}</a>
            {call && <span className={`ml-1 px-1.5 rounded text-[10px] font-semibold ${CALL_TONE[call] || ''}`}>{call}</span>}
        </>
    );
}
