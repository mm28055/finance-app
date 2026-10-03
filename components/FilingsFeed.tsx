"use client";
import React from 'react';
import { ExternalLink, Search } from 'lucide-react';
import type { MaterialFiling } from '@/lib/filings/types';
import { TONE_STYLE } from './SectorFilings';

type Row = MaterialFiling & { call?: string; inPortfolio?: boolean; /** Publisher, for news rows. */ source?: string };

const CALL_TONE: Record<string, string> = {
    own: 'bg-emerald-50 text-emerald-700', follow: 'bg-[#EAF2FB] text-[#4A7AAF]', wait: 'bg-gray-100 text-gray-600',
    pass: 'bg-gray-100 text-gray-400', avoid: 'bg-rose-50 text-rose-500',
};

// Filing categories grouped into the kinds an investor scans for.
const TYPES: { key: string; label: string; test: RegExp }[] = [
    { key: 'promoter', label: 'Promoter trades and pledges', test: /promoter|pledge|insider|large holder|ownership/i },
    { key: 'orders', label: 'Orders and contracts', test: /order|project win|contract|agreement/i },
    { key: 'management', label: 'Management changes', test: /management|auditor/i },
    { key: 'capital', label: 'Fund-raises, dilution, buybacks', test: /fund-raise|preferential|bonus|buyback|split|rights|debt/i },
    { key: 'ratings', label: 'Credit ratings', test: /rating/i },
    { key: 'deals', label: 'Acquisitions, disposals, mergers', test: /acqui|dispos|divest|merger|joint venture|subsidiary|restructur|slump/i },
    { key: 'operations', label: 'Sales, production, plants', test: /operation|capex|business update|earnings|project launch|product/i },
    { key: 'legal', label: 'Legal, tax, regulatory, governance', test: /legal|tax|regulat|governance|related-party/i },
];

// The Market and policy tab has its own kinds of entry instead of filing categories.
const NEWS_TYPES: typeof TYPES = [
    { key: 'policy', label: 'Market and policy events', test: /^market and policy$/i },
    { key: 'move', label: 'Price moves', test: /^price move$/i },
    { key: 'holder', label: 'Fund and large-holder stakes (from the press)', test: /^large holder$/i },
];

const dayLabel = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

// Every company's filings on one page, newest first. By default only the ones that can move the
// share price; filters for sector, tone, the note's call and a company search.
export function FilingsFeed({ filings, kind = 'filings', initialCompany = '' }: { filings: Row[]; /** 'news' = the Market and policy tab. */ kind?: 'filings' | 'news'; /** Start on one company, showing all its entries (as its row's marker counts them). */ initialCompany?: string }) {
    const news = kind === 'news';
    const types = news ? NEWS_TYPES : TYPES;
    // Both tabs open on everything ("All material" / "All"); the narrower choice sits second.
    const [all, setAll] = React.useState(true);
    const [tone, setTone] = React.useState<'any' | 'good' | 'watch'>('any');
    const [call, setCall] = React.useState('any');
    const [sector, setSector] = React.useState('any');
    const [type, setType] = React.useState('any');
    const [q, setQ] = React.useState(initialCompany);
    // Opened from a row marker: that company exactly ("Raymond", not "Raymond Lifestyle") until the search is edited.
    const [exact, setExact] = React.useState(initialCompany);
    const [open, setOpen] = React.useState<Record<string, boolean>>({});

    const sectors = React.useMemo(() => [...new Set(filings.map(f => f.sector))].sort(), [filings]);
    const shown = filings.filter(f =>
        (all || f.impact === 'high') &&
        (tone === 'any' || f.tone === tone) &&
        (call === 'any' || f.call === call) &&
        (type === 'any' || !!types.find(t => t.key === type)?.test.test(f.category)) &&
        (sector === 'any' || (sector === 'portfolio' ? f.inPortfolio : f.sector === sector)) &&
        (exact ? f.company === exact : !q || f.company.toLowerCase().includes(q.toLowerCase())));
    const byDay = new Map<string, Row[]>();
    for (const f of shown) byDay.set(f.date, [...(byDay.get(f.date) || []), f]);

    const chip = (active: boolean) => `px-2.5 py-1 rounded-lg border text-[11px] ${active ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-200 hover:border-[#A5C4E2]'}`;
    const select = 'px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-600';

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                {news ? (
                    <>
                        <button className={chip(all)} onClick={() => setAll(true)} title="Including price moves with no clear reason found">All</button>
                        <button className={chip(!all)} onClick={() => setAll(false)}>With a reason</button>
                    </>
                ) : (
                    <>
                        <button className={chip(all)} onClick={() => setAll(true)}>All material</button>
                        <button className={chip(!all)} onClick={() => setAll(false)}>Price-moving</button>
                    </>
                )}
                <span className="w-px h-5 bg-gray-200 mx-1" />
                <button className={chip(tone === 'any')} onClick={() => setTone('any')}>Any</button>
                <button className={chip(tone === 'good')} onClick={() => setTone('good')}>Positive</button>
                <button className={chip(tone === 'watch')} onClick={() => setTone('watch')}>Watch</button>
                <span className="w-px h-5 bg-gray-200 mx-1" />
                <select className={select} value={type} onChange={e => setType(e.target.value)}>
                    <option value="any">{news ? 'Events and moves' : 'All types'}</option>
                    {types.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
                </select>
                <select className={select} value={call} onChange={e => setCall(e.target.value)}>
                    <option value="any">Any call</option>
                    {['own', 'follow', 'wait', 'pass', 'avoid'].map(c => <option key={c} value={c}>{c[0].toUpperCase() + c.slice(1)}</option>)}
                </select>
                <select className={select} value={sector} onChange={e => setSector(e.target.value)}>
                    <option value="any">All sectors</option>
                    <option value="portfolio">My portfolio</option>
                    {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-500">
                    <Search className="w-3.5 h-3.5" />
                    <input value={q} onChange={e => { setExact(''); setQ(e.target.value); }} placeholder="Company" className="w-28 outline-none bg-transparent text-gray-700" />
                </label>
                <span className="ml-auto text-[11px] text-gray-400">{shown.length} items</span>
            </div>

            {[...byDay.entries()].map(([day, list]) => (
                <section key={day}>
                    <p className="text-[11px] font-semibold text-gray-500 mb-1.5">{dayLabel(day)}</p>
                    <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                        {list.map((f, i) => {
                            const id = `${f.date}-${f.company}-${i}`;
                            const t = TONE_STYLE[f.tone];
                            // Opened from a company's marker, every entry starts open with its full summary.
                            const isOpen = open[id] ?? !!initialCompany;
                            return (
                                <div key={id} className="px-3 py-2.5">
                                    <button className="w-full text-left" onClick={() => setOpen(o => ({ ...o, [id]: !isOpen }))}>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-[13px] font-semibold text-gray-800">{f.company}</span>
                                            {f.call && <span className={`px-1.5 rounded text-[10px] font-semibold ${CALL_TONE[f.call] || ''}`}>{f.call}</span>}
                                            <span className={`px-1.5 rounded border text-[10px] font-semibold uppercase ${t.chip}`}>{f.category}</span>
                                            <span className="text-[10px] text-gray-400">{f.sector}</span>
                                        </div>
                                        <p className="text-[13px] text-gray-700 mt-1 leading-snug">{f.headline}</p>
                                        {f.impactWhy && !isOpen && <p className="text-[11px] text-gray-400 mt-0.5">{f.impactWhy}</p>}
                                    </button>
                                    {isOpen && (
                                        <div className="mt-1.5">
                                            <p className="text-xs text-gray-600 leading-relaxed">{f.summary}</p>
                                            {f.url && (
                                                <a href={f.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-1.5 text-[11px] text-[#4A7AAF] hover:underline">
                                                    {f.source || 'Read the filing'} <ExternalLink className="w-3 h-3" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
            {!shown.length && <p className="text-sm text-gray-400">{news ? 'Nothing matches.' : 'No filings match.'}</p>}
        </div>
    );
}
