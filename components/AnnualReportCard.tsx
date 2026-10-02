"use client";
import React from 'react';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import type { AnnualReport } from '@/lib/annual-reports/types';

const SECTIONS: { key: keyof AnnualReport; title: string }[] = [
    { key: 'auditor', title: "Auditor's report" },
    { key: 'relatedParties', title: 'Related-party dealings' },
    { key: 'contingent', title: 'Contingent liabilities and claims' },
    { key: 'outlook', title: 'What management says about the year ahead' },
    { key: 'other', title: 'Other points from the report' },
];

// The AR tab on the company card: what the latest annual report showed, from the research done
// for the sector notes. Red flags first, then the report section by section.
export function AnnualReportCard({ report }: { report: AnnualReport }) {
    const yearLabel = report.year === 'CY25' ? 'calendar year 2025' : 'FY26 (year to March 2026)';
    return (
        <div className="p-4 text-xs text-gray-700 leading-relaxed">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Annual report · {yearLabel}</p>
                {report.url && (
                    <a href={report.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] text-[#4A7AAF] hover:underline">
                        Open the report <ExternalLink className="w-3 h-3" />
                    </a>
                )}
            </div>

            {report.flags.length > 0 && (
                <div className="rounded-lg border border-[#DDCDF5] bg-[#F7F3FD] px-3 py-2.5 mb-4">
                    <p className="flex items-center gap-1.5 text-[10px] font-semibold text-[#6B3FA0] uppercase tracking-wider mb-1.5">
                        <AlertTriangle className="w-3 h-3" /> Points to watch
                    </p>
                    <ul className="list-disc pl-4 space-y-1 marker:text-[#9B7BD8] text-[12px] text-gray-800">
                        {report.flags.map(f => <li key={f}>{f}</li>)}
                    </ul>
                </div>
            )}

            <div className="flex flex-col gap-3.5">
                {SECTIONS.map(s => report[s.key] ? (
                    <section key={s.key}>
                        <h4 className="text-[11px] font-semibold text-gray-800 mb-0.5">{s.title}</h4>
                        <p className="text-[12px] text-gray-600">{report[s.key] as string}</p>
                    </section>
                ) : null)}
            </div>

            <p className="text-[10px] text-gray-400 mt-4">
                From the research on this report done on {new Date(report.researchedOn + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}. A summary, not the full report: check the report itself before relying on a figure.
            </p>
        </div>
    );
}
