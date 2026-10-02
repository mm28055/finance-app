"use client";
import React from 'react';
import { ExternalLink, Search } from 'lucide-react';
import type { CompanyEvent } from '@/lib/events/types';

type Row = CompanyEvent & { call?: string; inPortfolio?: boolean };

const CALL_TONE: Record<string, string> = {
    own: 'bg-emerald-50 text-emerald-700', follow: 'bg-[#EAF2FB] text-[#4A7AAF]', wait: 'bg-gray-100 text-gray-600',
    pass: 'bg-gray-100 text-gray-400', avoid: 'bg-rose-50 text-rose-500',
};
const KIND = {
    results: { label: 'Results', chip: 'bg-[#EAF2FA] text-[#35577A] border-[#C9DCEF]' },
    call: { label: 'Earnings call', chip: 'bg-[#E7F5EC] text-[#1F7A45] border-[#BFE3CC]' },
} as const;

const dayLabel = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' });

// Result dates and earnings-call dates for every company, day by day. Upcoming by default;
// "Recent" shows the last few weeks.
export function EventsCalendar({ events, today, initialQuery = '', onCompany }: {
    events: Row[]; today: string;
    /** Start filtered to one company (the panel opened from that company's marker). */
    initialQuery?: string;
    /** Makes company names clickable, e.g. to find the company on the dashboard. */
    onCompany?: (company: string) => void;
}) {
    const [when, setWhen] = React.useState<'upcoming' | 'recent'>('upcoming');
    const [kind, setKind] = React.useState<'any' | 'results' | 'call'>('any');
    const [who, setWho] = React.useState('any');
    const [sector, setSector] = React.useState('any');
    const [q, setQ] = React.useState(initialQuery);

    const sectors = React.useMemo(() => [...new Set(events.map(e => e.sector))].sort(), [events]);
    const shown = events.filter(e =>
        (when === 'upcoming' ? e.date >= today : e.date < today) &&
        (kind === 'any' || e.kind === kind) &&
        (who === 'any' || (who === 'portfolio' ? e.inPortfolio : who === 'ownfollow' ? e.call === 'own' || e.call === 'follow' : e.call === who)) &&
        (sector === 'any' || e.sector === sector) &&
        (!q || e.company.toLowerCase().includes(q.toLowerCase())));
    const ordered = when === 'upcoming' ? shown : [...shown].reverse();
    const byDay = new Map<string, Row[]>();
    for (const e of ordered) byDay.set(e.date, [...(byDay.get(e.date) || []), e]);

    const chip = (active: boolean) => `px-2.5 py-1 rounded-lg border text-[11px] ${active ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-200 hover:border-[#A5C4E2]'}`;
    const select = 'px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-600';

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white border border-gray-200 rounded-xl p-3">
                <button className={chip(when === 'upcoming')} onClick={() => setWhen('upcoming')}>Upcoming</button>
                <button className={chip(when === 'recent')} onClick={() => setWhen('recent')}>Recent</button>
                <span className="w-px h-5 bg-gray-200 mx-1" />
                <button className={chip(kind === 'any')} onClick={() => setKind('any')}>Both</button>
                <button className={chip(kind === 'results')} onClick={() => setKind('results')}>Results</button>
                <button className={chip(kind === 'call')} onClick={() => setKind('call')}>Calls</button>
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
                <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 bg-white text-[11px] text-gray-500">
                    <Search className="w-3.5 h-3.5" />
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Company" className="w-28 outline-none bg-transparent text-gray-700" />
                </label>
                <span className="ml-auto text-[11px] text-gray-400">{shown.length} dates</span>
            </div>

            {[...byDay.entries()].map(([day, list]) => (
                <section key={day}>
                    <p className="text-[11px] font-semibold text-gray-500 mb-1.5">
                        {dayLabel(day)}{day === today && <span className="ml-2 px-1.5 rounded bg-[#FDF6E7] text-[#946200] font-semibold">today</span>}
                    </p>
                    <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                        {list.map(e => (
                            <div key={`${e.company}-${e.kind}`} className="px-3 py-2 flex flex-wrap items-center gap-2">
                                {onCompany
                                    ? <button onClick={() => onCompany(e.company)} title="Show this company on the dashboard" className="text-[13px] font-semibold text-gray-800 hover:text-[#4A7AAF] hover:underline">{e.company}</button>
                                    : <span className="text-[13px] font-semibold text-gray-800">{e.company}</span>}
                                {e.call && <span className={`px-1.5 rounded text-[10px] font-semibold ${CALL_TONE[e.call] || ''}`}>{e.call}</span>}
                                <span className={`px-1.5 rounded border text-[10px] font-semibold uppercase ${KIND[e.kind].chip}`}>{KIND[e.kind].label}</span>
                                {e.time && <span className="text-[12px] text-gray-700">{e.time}</span>}
                                {e.quarter && <span className="text-[11px] text-gray-400">{e.quarter}</span>}
                                <span className="text-[10px] text-gray-400">{e.sector}</span>
                                {e.url && (
                                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 text-[11px] text-[#4A7AAF] hover:underline">
                                        Notice <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
            {!shown.length && <p className="text-sm text-gray-400">{when === 'upcoming' ? 'No dates announced yet for these companies.' : 'Nothing in the last few weeks.'}</p>}
        </div>
    );
}
