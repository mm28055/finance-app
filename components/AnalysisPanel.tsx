"use client";
import React, { useState, useEffect } from 'react';
import { Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { AnalysisResult } from '@/lib/ai-analyst';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import type { CompanyFinancials } from './FinancialMatrix';

export function AnalysisPanel({
    analysis,
    quarterName,
    history,
    profile,
    activeQuarterIndex = 0,
    onQuarterChange
}: {
    analysis?: AnalysisResult,
    quarterName?: string,
    history?: { quarter: string; analysis: AnalysisResult; financials: CompanyFinancials }[],
    profile?: string,
    activeQuarterIndex?: number,
    onQuarterChange?: (idx: number) => void
}) {
    const safeHistory = history && history.length > 0
        ? history
        : (analysis ? [{ quarter: quarterName || "LATEST", analysis, financials: {} as any }] : []);

    const [activeQuarter, setActiveQuarter] = useState<string>(
        safeHistory[activeQuarterIndex]?.quarter || quarterName || "LATEST"
    );
    const [activeData, setActiveData] = useState<AnalysisResult | undefined>(
        safeHistory[activeQuarterIndex]?.analysis || analysis
    );
    const [viewMode, setViewMode] = useState<"ANALYSIS" | "PROFILE" | "DELTA">("ANALYSIS");

    // Sync with external activeQuarterIndex when it changes
    useEffect(() => {
        if (safeHistory.length > 0 && activeQuarterIndex < safeHistory.length) {
            const match = safeHistory[activeQuarterIndex];
            setActiveQuarter(match.quarter);
            setActiveData(match.analysis);
            if (viewMode === "PROFILE" || viewMode === "DELTA") {
                // If we were on Profile or Delta, and a quarter is clicked, switch back to Analysis
                // Actually, stay in current mode but update the underlying data
            } else {
                setViewMode("ANALYSIS");
            }
        }
    }, [activeQuarterIndex, safeHistory]);

    const handleTabClick = (q: string, idx: number) => {
        setViewMode("ANALYSIS");
        setActiveQuarter(q);
        const match = safeHistory[idx];
        if (match) {
            setActiveData(match.analysis);
            onQuarterChange?.(idx);
        }
    };

    const handleProfileClick = () => {
        setViewMode("PROFILE");
        setActiveQuarter("PROFILE");
    };

    const handleDeltaClick = () => {
        setViewMode("DELTA");
        setActiveQuarter("DELTA");
    };

    const renderContent = () => {
        if (viewMode === "PROFILE") {
            return (
                <div className="text-xs text-gray-600 leading-relaxed p-3">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            p: ({ node, ...props }) => <p className="mb-3 text-gray-600" {...props} />,
                            h1: ({ node, ...props }) => <h1 className="text-sm font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-xs font-semibold text-[#6B9FCC] mt-4 mb-2 uppercase tracking-wide" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-3 space-y-1 marker:text-[#A5C4E2]" {...props} />,
                            li: ({ node, ...props }) => <li className="text-gray-600" {...props} />,
                        }}
                    >
                        {profile || "No profile available."}
                    </ReactMarkdown>
                </div>
            );
        }

        if (viewMode === "DELTA") {
            return (
                <div className="text-xs text-gray-700 leading-relaxed">
                    {activeData?.delta_analysis ? (
                        (() => {
                            const content = activeData.delta_analysis.trim();
                            const sections = content.split(/\n(?=##\s)/g);

                            return sections.map((section, idx) => {
                                const isGreen = idx % 2 !== 0;
                                return (
                                    <div key={idx} className={`${isGreen ? 'bg-[#F2FAF5]' : 'bg-white'} p-5 border-b border-gray-100 last:border-0`}>
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                h2: ({ node, ...props }) => (
                                                    <h2 className="text-[13px] font-bold text-[#334155] mb-4 uppercase tracking-tight" {...props} />
                                                ),
                                                p: ({ node, ...props }) => <p className="mb-3 text-gray-700 leading-normal" {...props} />,
                                                ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-3 space-y-1.5 marker:text-[#64748b]" {...props} />,
                                                li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                                                strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                                                blockquote: ({ node, ...props }) => (
                                                    <blockquote className="border-l-3 border-[#A5C4E2] pl-4 py-1 my-3 italic text-gray-500 bg-gray-50/50 rounded-r" {...props} />
                                                ),
                                            }}
                                        >
                                            {section.trim()}
                                        </ReactMarkdown>
                                    </div>
                                );
                            });
                        })()
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-gray-400 italic text-xs">
                            <p>No Delta Report available for this quarter.</p>
                        </div>
                    )}
                </div>
            );
        }

        if (!activeData) {
            return (
                <div className="flex items-center justify-center py-8 text-gray-400 italic text-xs">
                    No analysis available. Sync data to generate.
                </div>
            );
        }

        return (
            <div className="text-xs text-gray-700 leading-relaxed">
                {activeData.investor_brief ? (
                    (() => {
                        // Split by ## at the start of lines to isolate sections
                        // We use a lookahead to keep the delimiter/header text
                        const content = activeData.investor_brief.trim();
                        const sections = content.split(/\n(?=##\s)/g);

                        // ALLOWLIST: Only these sections are allowed in the Analysis Tab
                        // This prevents Delta content (or any other future hallucinations) from leaking in.
                        const ANALYSIS_ALLOWLIST = [
                            "KEY HIGHLIGHTS",
                            "ANALYST VERDICT",
                            "GUIDANCE",
                            "CREDIBILITY",
                            "STRATEGIC GROWTH",
                            "FINANCIAL PERFORMANCE",
                            "SEGMENT ANALYSIS",
                            "ORDER BOOK",
                            "REVENUE VISIBILITY",
                            "CAPITAL ALLOCATION",
                            "BALANCE SHEET",
                            "Q&A ANALYSIS",
                            "MEDIUM-TERM INVESTMENT THESIS"
                        ];

                        return sections.map((section, idx) => {
                            // Check header
                            const headerMatch = section.match(/^##\s+(.+)$/m);
                            if (headerMatch) {
                                const headerText = headerMatch[1].toUpperCase();
                                // If the header does NOT contain any of the allowed keywords, skip it.
                                if (!ANALYSIS_ALLOWLIST.some(allowed => headerText.includes(allowed))) {
                                    return null;
                                }
                            }

                            const isBlue = idx % 2 !== 0;
                            return (
                                <div key={idx} className={`${isBlue ? 'bg-[#F0F7FF]' : 'bg-white'} p-5 border-b border-gray-100 last:border-0`}>
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            h2: ({ node, ...props }) => (
                                                <h2 className="text-[13px] font-bold text-[#334155] mb-4 uppercase tracking-tight" {...props} />
                                            ),
                                            p: ({ node, ...props }) => <p className="mb-3 text-gray-700 leading-normal" {...props} />,
                                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-3 space-y-1.5 marker:text-[#64748b]" {...props} />,
                                            li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                                            strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                                            blockquote: ({ node, ...props }) => (
                                                <blockquote className="border-l-3 border-[#A5C4E2] pl-4 py-1 my-3 italic text-gray-500 bg-gray-50/50 rounded-r" {...props} />
                                            ),
                                        }}
                                    >
                                        {section.trim()}
                                    </ReactMarkdown>
                                </div>
                            );
                        });
                    })()
                ) : (
                    <div className="space-y-4 p-4">
                        {/* Legacy Fallback UI */}
                        <div className="bg-[#F8FAFC] border border-gray-100 p-3 rounded-lg text-gray-400 italic text-center">
                            Legacy format detected. Re-sync to see institutional investor brief.
                        </div>

                        {/* Guidance */}
                        <div className="bg-[#F8FAFC] border border-gray-100 p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-0.5 h-3 bg-[#6B9FCC] rounded-full"></span>
                                <h4 className="text-[10px] font-semibold text-gray-500 uppercase">Guidance</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed">
                                {activeData.guidance?.text || 'No guidance extracted'}
                            </p>
                        </div>

                        {/* Capex */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#F8FAFC] border border-gray-100 p-2.5 rounded-lg">
                                <h4 className="text-[9px] font-semibold text-gray-400 uppercase mb-1">Capex</h4>
                                <div className="text-xs text-gray-800 font-medium">{activeData.capex?.amount || '-'}</div>
                            </div>
                            <div className="bg-[#F8FAFC] border border-gray-100 p-2.5 rounded-lg">
                                <h4 className="text-[9px] font-semibold text-gray-400 uppercase mb-1">Details</h4>
                                <div className="text-xs text-gray-700 truncate">{activeData.capex?.details || '-'}</div>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h4 className="text-[10px] font-semibold text-gray-500 uppercase mb-2">Highlights</h4>
                            <ul className="space-y-1.5 text-xs text-gray-600 list-disc pl-4 marker:text-[#A5C4E2]">
                                {(activeData.summary?.highlights || []).map((h: string, i: number) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 overflow-x-auto custom-scrollbar bg-gray-50/50">
                {safeHistory.map((item, idx) => (
                    <button
                        key={item.quarter}
                        onClick={() => handleTabClick(item.quarter, idx)}
                        className={`px-3 py-2 text-[10px] font-medium border-b-2 transition-colors whitespace-nowrap ${activeQuarter === item.quarter && viewMode === "ANALYSIS"
                            ? 'text-[#6B9FCC] border-[#6B9FCC] bg-white'
                            : 'text-gray-400 border-transparent hover:text-gray-600'
                            }`}
                    >
                        {item.quarter}
                    </button>
                ))}

                <button
                    onClick={handleDeltaClick}
                    className={`px-3 py-2 text-[10px] font-semibold border-b-2 transition-colors whitespace-nowrap ${viewMode === "DELTA"
                        ? 'text-emerald-500 border-emerald-500 bg-white'
                        : 'text-gray-400 border-transparent hover:text-gray-600'
                        }`}
                >
                    DELTA
                </button>

                <button
                    onClick={handleProfileClick}
                    className={`px-3 py-2 text-[10px] font-semibold border-b-2 transition-colors whitespace-nowrap ${viewMode === "PROFILE"
                        ? 'text-[#9B8AC4] border-[#9B8AC4] bg-white'
                        : 'text-gray-400 border-transparent hover:text-gray-600'
                        }`}
                >
                    PROFILE
                </button>

                {viewMode === "ANALYSIS" && activeData && (
                    <div className="flex-1 flex items-center justify-end px-2">
                        <span className={`text-[9px] uppercase font-medium ${activeData.guidance?.sentiment === 'positive'
                            ? 'text-emerald-500 bg-emerald-50'
                            : 'text-gray-500 bg-gray-100'
                            } px-2 py-0.5 rounded-full flex items-center gap-1`}>
                            {activeData.guidance?.sentiment === 'positive' ? <TrendingUp className="w-2.5 h-2.5" /> : <Minus className="w-2.5 h-2.5" />}
                            {activeData.management_tone}/10
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="overflow-y-auto custom-scrollbar flex-1">
                {renderContent()}
            </div>

            {/* Footer */}
            {viewMode === "ANALYSIS" && (
                <div className="px-3 py-2 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <span className="text-[9px] text-gray-400">Gemini 1.5 Pro</span>
                    <button className="flex items-center gap-1 text-[10px] text-[#6B9FCC] hover:text-[#4A7AAF] transition-colors">
                        <Download className="w-3 h-3" />
                        Export
                    </button>
                </div>
            )}
        </div>
    );
}
