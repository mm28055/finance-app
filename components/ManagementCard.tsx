"use client";
import React from 'react';
import type { Management } from '@/lib/management/types';

const STYLE_TONE: Record<Management['style'], string> = {
    'Promoter-run': 'bg-amber-50 text-amber-700',
    'Professional': 'bg-[#EAF2FB] text-[#4A7AAF]',
    'Promoter-owned, professionally run': 'bg-emerald-50 text-emerald-700',
};

const words = (s: string) => s.toLowerCase().replace(/\b(mr|mrs|ms|dr|shri|smt)\b\.?/g, '').replace(/[^a-z ]/g, ' ').split(/\s+/).filter(w => w.length > 1);

/** A named promoter holding that matches this person: every word of the shorter name appears in the longer one. */
function liveStake(name: string, promoters: { name: string; values: Record<string, number> }[], latest: string | undefined): number | null {
    if (!latest) return null;
    const a = words(name);
    if (a.length < 2) return null;
    for (const p of promoters) {
        const b = words(p.name);
        const [short, long] = a.length <= b.length ? [a, b] : [b, a];
        if (short.length >= 2 && short.every(w => long.includes(w)) && p.values[latest] !== undefined) return p.values[latest];
    }
    return null;
}

// Who runs the company: the executive team with a short bio each, whether it is promoter-run or
// professionally run, family links and each person's own stake (live from the latest shareholding
// filing where the person is a named promoter, else as disclosed in the annual report).
export function ManagementCard({ management, companyId }: { management: Management; companyId: string }) {
    const [holders, setHolders] = React.useState<{ latest?: string; promoters: { name: string; values: Record<string, number> }[] }>({ promoters: [] });
    React.useEffect(() => {
        fetch(`/api/companies/${companyId}/holders`)
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then(d => setHolders({ latest: d.periods?.[d.periods.length - 1], promoters: d.groups?.promoters || [] }))
            .catch(() => {});
    }, [companyId]);

    return (
        <div id="company-management" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-baseline justify-between gap-2 mb-2 flex-wrap">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Management</p>
                <span className={`px-1.5 py-px rounded text-[10px] font-semibold ${STYLE_TONE[management.style] || 'bg-gray-100 text-gray-500'}`}>{management.style}</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">{management.styleNote}</p>
            <ul className="flex flex-col gap-3">
                {management.people.map(p => {
                    const live = liveStake(p.name, holders.promoters, holders.latest);
                    return (
                        <li key={p.name} className="text-xs">
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="font-semibold text-gray-800">{p.name}</span>
                                <span className="text-gray-500">{p.role}{p.since ? ` · since ${p.since}` : ''}</span>
                                {p.family && <span className="px-1 rounded bg-amber-50 text-amber-700 text-[9px] font-semibold">PROMOTER FAMILY</span>}
                            </div>
                            {(p.relation || live !== null || p.stake) && (
                                <p className="text-[10px] text-gray-400 mt-0.5">
                                    {[p.relation,
                                      live !== null ? `owns ${live}% (${holders.latest} shareholding)` : p.stake ? `owns ${p.stake}` : null]
                                        .filter(Boolean).join(' · ')}
                                </p>
                            )}
                            <p className="text-gray-600 mt-1 leading-relaxed">{p.bio}</p>
                        </li>
                    );
                })}
            </ul>
            {management.changes && <p className="text-[11px] text-[#6B3FA0] mt-3">Recent change: {management.changes}</p>}
            <p className="text-[10px] text-gray-400 mt-3">
                From the annual report, company website and exchange filings (updated {management.updatedOn}).
                {management.sources.length > 0 && <> Sources: {management.sources.slice(0, 3).map((s, i) => (
                    <React.Fragment key={s}>{i > 0 && ', '}<a href={s} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#4A7AAF]">{(() => { try { return new URL(s).hostname.replace(/^www\./, ''); } catch { return 'link'; } })()}</a></React.Fragment>
                ))}</>}
            </p>
        </div>
    );
}
