"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { SectorFilings as SectorFilingsData, FilingTone, MaterialFiling } from '@/lib/filings';

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

export function SectorFilings({ data }: { data: SectorFilingsData }) {
    const filings = [...data.filings].sort((a, b) => b.date.localeCompare(a.date) || a.company.localeCompare(b.company));
    const companies = new Set(filings.map(f => f.company)).size;
    const counts = { good: 0, watch: 0, info: 0 } as Record<FilingTone, number>;
    filings.forEach(f => { counts[f.tone]++; });

    return (
        <div className="ml-5 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-sm font-semibold text-gray-800">Material filings, {formatDate(data.from)}–{formatDate(data.to)}</h3>
                <span className="text-[11px] text-gray-500">
                    {filings.length} filings at {companies} of {data.companiesChecked} companies
                </span>
                <div className="flex gap-1.5 ml-auto">
                    {(['watch', 'good', 'info'] as FilingTone[]).filter(t => counts[t]).map(t => (
                        <span key={t} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${TONE_STYLE[t].chip}`}>
                            {counts[t]} {TONE_STYLE[t].label.toLowerCase()}
                        </span>
                    ))}
                </div>
            </div>
            <p className="text-[11px] text-gray-500 mb-3 max-w-[70ch]">
                Read from the official NSE and BSE filings. Routine items such as trading-window closures, newspaper notices, AGM paperwork and share allotments under employee schemes are left out.
            </p>
            <ul className="divide-y divide-gray-100">
                {filings.map((f, i) => (
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
    return (
        <div id="company-filings" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide mb-1">Recent material filings</h4>
            {sorted.length === 0 ? (
                <p className="text-xs text-gray-500">No material filings in the period checked.</p>
            ) : (
                <ul className="divide-y divide-gray-100">
                    {sorted.map((f, i) => (
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
        </div>
    );
}
