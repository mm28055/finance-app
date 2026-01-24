"use client";
import React, { useState } from 'react';
import { FinancialMatrix, CompanyFinancials } from './FinancialMatrix';

interface CompanyProps {
    name: string;
    ticker: string;
    price: number;
    priceChange: number;
    financials: CompanyFinancials;
}

export const CompanyRow = ({ company }: { company: CompanyProps }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border-b border-neutral-800 last:border-0">
            {/* Top Bar (Click to Expand) */}
            <div
                onClick={() => setExpanded(!expanded)}
                className="flex items-center justify-between px-4 py-3 bg-neutral-900 hover:bg-neutral-800 cursor-pointer transition-colors"
            >
                <div className="flex items-center gap-4 w-1/3">
                    <div className="w-8 h-8 rounded bg-blue-900/40 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-800">
                        {company.ticker.substring(0, 2)}
                    </div>
                    <div>
                        <div className="font-bold text-white">{company.name}</div>
                        <div className="text-xs text-neutral-500">{company.ticker}</div>
                    </div>
                </div>

                <div className="w-1/6 text-right">
                    <div className="font-mono text-neutral-200">₹{company.price}</div>
                    <div className={`text-xs ${company.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {company.priceChange > 0 ? '+' : ''}{company.priceChange}%
                    </div>
                </div>

                <div className="w-1/3 px-4">
                    {/* Placeholder for Sparkline */}
                    <div className="h-6 w-full flex items-end gap-1 opacity-40">
                        {[40, 60, 55, 70, 65, 80, 75, 90].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className={`flex-1 ${company.priceChange > 0 ? 'bg-green-500' : 'bg-red-500'} rounded-t-sm`}></div>
                        ))}
                    </div>
                </div>

                <div className="w-10 flex justify-end text-neutral-500">
                    {expanded ? '−' : '+'}
                </div>
            </div>

            {/* Expanded Content */}
            {expanded && (
                <div className="bg-neutral-950 p-4 border-t border-neutral-800 flex flex-col lg:flex-row gap-6 animate-in slide-in-from-top-2 duration-200">

                    {/* Left: Financials */}
                    <div className="flex-1">
                        <FinancialMatrix data={company.financials} />
                    </div>

                    {/* Right: Narrative Timeline */}
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xs font-semibold text-neutral-300 uppercase">AI Summary Timeline</h3>
                            <div className="flex gap-1">
                                <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-[10px] rounded border border-blue-800 cursor-pointer">Q3 FY25</span>
                                <span className="px-2 py-1 bg-neutral-800 text-neutral-500 text-[10px] rounded border border-neutral-700 cursor-pointer hover:bg-neutral-700">Q2 FY25</span>
                                <span className="px-2 py-1 bg-neutral-800 text-neutral-500 text-[10px] rounded border border-neutral-700 cursor-pointer hover:bg-neutral-700">Q1 FY25</span>
                            </div>
                        </div>

                        <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-sm text-neutral-300 leading-relaxed overflow-y-auto max-h-[250px]">
                            <div className="mb-3">
                                <span className="bg-green-900/40 text-green-400 text-xs px-2 py-0.5 rounded border border-green-800 uppercase font-bold tracking-wide mr-2">
                                    Tone: Optimistic
                                </span>
                                <span className="text-neutral-500 text-xs">Dec 12, 2025</span>
                            </div>
                            <p className="mb-3">
                                Management highlighted a <strong>robust volume recovery</strong> in rural markets (up 12% YoY). Raw material prices (Crude derivatives) have softened, aiding gross margin expansion by 200bps.
                            </p>
                            <p className="mb-3">
                                <strong>Key Guidance:</strong> They maintained their FY26 revenue growth target of 15-18%, explicitly stating that Q4 is expected to be the strongest quarter.
                            </p>
                            <div className="mt-4 pt-3 border-t border-neutral-800">
                                <p className="text-red-400 text-xs font-bold mb-1">RISKS / NEGATIVES:</p>
                                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                                    <li>Export demand remains weak (Europe/US).</li>
                                    <li>Capacity utilization dipped to 78% due to planned shutdowns.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};
