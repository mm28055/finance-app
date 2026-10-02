"use client";

import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { FilingTone, MaterialFiling, SectorFilingsResponse } from '@/lib/filings/types';

// Tone colours sit outside the site's blue accent so a warning reads at a glance;
// the owner prefers purple to red for warnings.
export const TONE_STYLE: Record<FilingTone, { chip: string; dot: string; label: string }> = {
    good: { chip: 'bg-[#E7F5EC] text-[#1F7A45] border-[#BFE3CC]', dot: 'bg-[#2E9E5B]', label: 'Positive' },
    watch: { chip: 'bg-[#F3EEFC] text-[#6B3FA0] border-[#DDCDF5]', dot: 'bg-[#9B7BD8]', label: 'Watch' },
    info: { chip: 'bg-[#EAF2FA] text-[#35577A] border-[#C9DCEF]', dot: 'bg-[#6B9FCC]', label: 'Note' },
};

function formatDate(iso: string) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

export function SectorFilings({ sector }: { sector: string }) {
    const [data, setData] = useState<SectorFilingsResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        let live = true;
        fetch(`/api/filings?sector=${encodeURIComponent(sector)}`)
            .then(r => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
            .then(d => { if (live) setData(d); })
            .catch(() => { if (live) setError('Could not load filings. Try again in a moment.'); });
        return () => { live = false; };
    }, [sector]);

    if (error) return <div className="ml-5 mb-3 text-xs text-gray-500">{error}</div>;
    if (!data) return <div className="ml-5 mb-3 h-24 bg-gray-100 rounded-xl animate-pulse" />;
    return <SectorFilingsList data={data} />;
}

function SectorFilingsList({ data }: { data: SectorFilingsResponse }) {
    const filings = [...data.filings].sort((a, b) => b.date.localeCompare(a.date) || a.company.localeCompare(b.company));
    const companies = new Set(filings.map(f => f.company)).size;
    const counts = { good: 0, watch: 0, info: 0 } as Record<FilingTone, number>;
    filings.forEach(f => { counts[f.tone]++; });
    // Clicking a tone chip shows only that kind; clicking it again shows everything.
    const [tone, setTone] = useState<FilingTone | null>(null);
    const shown = tone ? filings.filter(f => f.tone === tone) : filings;

    return (
        <div className="ml-5 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-sm font-semibold text-gray-800">Material filings, last month ({formatDate(data.from)}–{formatDate(data.to)})</h3>
                <span className="text-[11px] text-gray-500">
                    {filings.length} filings at {companies}{data.companiesInSector ? ` of ${data.companiesInSector}` : ''} companies
                </span>
                <div className="flex gap-1.5 ml-auto">
                    {(['watch', 'good', 'info'] as FilingTone[]).filter(t => counts[t]).map(t => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => setTone(cur => (cur === t ? null : t))}
                            aria-pressed={tone === t}
                            title={tone === t ? 'Show all filings' : `Show only ${TONE_STYLE[t].label.toLowerCase()} filings`}
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border cursor-pointer transition-all ${TONE_STYLE[t].chip} ${tone === t ? 'ring-2 ring-offset-1 ring-current' : tone ? 'opacity-40 hover:opacity-80' : 'hover:brightness-95'}`}
                        >
                            {counts[t]} {TONE_STYLE[t].label.toLowerCase()}
                        </button>
                    ))}
                </div>
            </div>
            <p className="text-[11px] text-gray-500 mb-3 max-w-[70ch]">
                Read from the official NSE and BSE filings. Routine items such as trading-window closures, newspaper notices, AGM paperwork and share allotments under employee schemes are left out.
            </p>
            <ul className="divide-y divide-gray-100">
                {shown.map((f, i) => (
                    <li key={i} className="py-2.5 grid grid-cols-[3.2rem_1fr] gap-3">
                        <span className="text-[11px] text-gray-400 tabular-nums pt-0.5">{formatDate(f.date)}</span>
                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${TONE_STYLE[f.tone].dot}`} aria-hidden="true" />
                                <span className="text-xs font-semibold text-gray-800">{f.company}</span>
                                <span className={`text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${TONE_STYLE[f.tone].chip}`}>
                                    {f.category}
                                </span>
                            </div>
                            <p className="text-[13px] font-medium text-gray-800 mt-1">{f.headline}</p>
                            <p className="text-xs text-gray-600 mt-0.5 leading-relaxed max-w-[80ch]">{f.summary}</p>
                            <a
                                href={f.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[11px] text-[#4A7AAF] hover:underline mt-1"
                            >
                                Read the filing <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// The same filings, for one company, shown inside its expanded row.
export function CompanyFilings({ filings }: { filings: MaterialFiling[] }) {
    const sorted = [...filings].sort((a, b) => b.date.localeCompare(a.date));
    // The latest three by default; the rest open on request (as the management block does).
    const [open, setOpen] = useState(false);
    const TOP = 3;
    const shown = open ? sorted : sorted.slice(0, TOP);
    return (
        <div id="company-filings" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide mb-1">Material filings, last 6 months</h4>
            {sorted.length === 0 ? (
                <p className="text-xs text-gray-500">No material filings in the period checked.</p>
            ) : (
                <ul className="divide-y divide-gray-100">
                    {shown.map((f, i) => (
                        <li key={i} className="py-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[11px] text-gray-400 tabular-nums">{formatDate(f.date)}</span>
                                <span className={`text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${TONE_STYLE[f.tone].chip}`}>
                                    {f.category}
                                </span>
                            </div>
                            <p className="text-[13px] font-medium text-gray-800 mt-1">{f.headline}</p>
                            <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{f.summary}</p>
                            <a
                                href={f.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[11px] text-[#4A7AAF] hover:underline mt-1"
                            >
                                Read the filing <ExternalLink className="w-3 h-3" />
                            </a>
                        </li>
                    ))}
                </ul>
            )}
            {sorted.length > TOP && (
                <button onClick={e => { e.stopPropagation(); setOpen(o => !o); }} className="mt-2 text-[11px] font-medium text-[#4A7AAF] hover:underline">
                    {open ? 'Show less' : `Show all ${sorted.length} filings`}
                </button>
            )}
        </div>
    );
}
