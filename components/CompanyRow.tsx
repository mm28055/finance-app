"use client";
import React, { useState, useMemo } from 'react';
import { FinancialMatrix } from './FinancialMatrix';
import { AnalysisPanel } from './AnalysisPanel';
import { Trash2, ArrowRight, FileText } from 'lucide-react';
import type { EnrichedCompany } from './SectorList';
import { useAdmin } from '@/context/AdminContext';

// Helper to format quarter: "Q3 FY26" -> "Q3 26"
function shortQuarter(q: string): string {
    return q.replace('FY', '').replace(' ', ' ');
}

export const CompanyRow = ({ company }: { company: EnrichedCompany }) => {
    const [expanded, setExpanded] = useState(false);
    const { isAdminMode, allSectors } = useAdmin();
    const [isDeleting, setIsDeleting] = useState(false);
    const [showSectorDropdown, setShowSectorDropdown] = useState(false);
    const [selectedQuarterIdx, setSelectedQuarterIdx] = useState(0); // 0 = latest

    // Get selected quarter data
    const quarters = useMemo(() => company.history || [], [company.history]);
    const selectedData = quarters[selectedQuarterIdx] || quarters[0];

    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!confirm(`Delete "${company.name}"?`)) return;

        setIsDeleting(true);
        try {
            const res = await fetch(`/api/companies?id=${company.id}`, { method: 'DELETE' });
            if (res.ok) {
                window.location.reload();
            } else {
                alert('Failed to delete');
                setIsDeleting(false);
            }
        } catch (e) {
            alert('Network error');
            setIsDeleting(false);
        }
    };

    const handleSectorChange = async (newSector: string) => {
        setShowSectorDropdown(false);
        try {
            const res = await fetch('/api/companies', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: company.id, sector: newSector })
            });
            if (res.ok) {
                window.location.reload();
            }
        } catch (e) {
            alert('Failed');
        }
    };

    return (
        <div className="border-b border-gray-100 last:border-0">
            {/* Compact Row */}
            <div
                onClick={() => !isAdminMode && setExpanded(!expanded)}
                className={`flex items-center px-4 py-2.5 bg-white ${!isAdminMode ? 'hover:bg-[#F8FAFC] cursor-pointer' : ''} transition-colors group overflow-x-auto md:overflow-visible`}
            >
                {/* Company Info - Single Line */}
                {/* Company Info - Fixed Width for Alignment */}
                <div className="flex items-center gap-3 w-[290px] flex-shrink-0 border-r border-gray-100 pr-4 mr-4">
                    <div className="w-7 h-7 rounded-md bg-[#D4E5F7] text-[#4A7AAF] flex items-center justify-center text-[10px] font-semibold flex-shrink-0">
                        {company.ticker.substring(0, 2)}
                    </div>
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className="text-sm font-medium text-gray-800 truncate" title={company.name}>{company.name}</span>
                    </div>
                </div>

                {/* Data Stack (Valuation + Quarters) - Single Line Row */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Valuation Strip */}
                    {(company.currentPrice || company.marketCap) && (
                        <div className="flex items-center gap-3">
                            {company.currentPrice && (
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">Price</span>
                                    <span className="text-[10px] text-gray-700 font-semibold">₹{company.currentPrice}</span>
                                </div>
                            )}
                            {company.marketCap && (
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">MCap</span>
                                    <span className="text-[10px] text-gray-600 font-semibold">₹{Math.round(company.marketCap).toLocaleString()}cr</span>
                                </div>
                            )}
                            {company.peRatio && (
                                <div className="flex items-center gap-1.5 px-1 bg-gray-50 rounded border border-gray-100">
                                    <span className="text-[9px] text-gray-400 font-medium uppercase">P/E</span>
                                    <span className="text-[10px] text-gray-600 font-semibold">{company.peRatio}</span>
                                </div>
                            )}
                            {company.pbRatio && (
                                <div className="flex items-center gap-1.5 px-1 bg-gray-50 rounded border border-gray-100">
                                    <span className="text-[9px] text-gray-400 font-medium uppercase">P/B</span>
                                    <span className="text-[10px] text-gray-600 font-semibold">{company.pbRatio}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Quarter Tabs */}
                    {quarters.length > 0 && (
                        <div className="flex items-center gap-1.5 border-l border-gray-200 pl-4">
                            {quarters.map((q, idx) => (
                                <div
                                    key={q.quarter}
                                    className="flex items-center"
                                >
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedQuarterIdx(idx);
                                            setExpanded(true);
                                        }}
                                        className={`px-2 py-0.5 text-[9px] font-semibold rounded-l transition-all flex items-center gap-1 border-y border-l ${idx === selectedQuarterIdx
                                            ? 'bg-[#6B9FCC] text-white border-[#6B9FCC]'
                                            : 'bg-white text-gray-500 border-gray-200 hover:bg-[#F1F5F9] hover:text-[#6B9FCC]'
                                            }`}
                                    >
                                        {shortQuarter(q.quarter)}
                                    </button>
                                    {q.pdfUrl && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const viewUrl = `/api/transcripts/view?path=${encodeURIComponent(q.pdfUrl!)}`;
                                                window.open(viewUrl, '_blank');
                                            }}
                                            className={`px-1.5 py-0.5 text-[9px] rounded-r border transition-all ${idx === selectedQuarterIdx
                                                ? 'bg-[#5A8EBC] text-white border-[#5A8EBC] hover:bg-[#4A7AAF]'
                                                : 'bg-gray-50 text-gray-400 border-gray-200 border-l-0 hover:bg-[#E2E8F0] hover:text-[#4A7AAF]'
                                                }`}
                                            title="Open PDF Transcript"
                                        >
                                            <FileText className="w-2.5 h-2.5" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Expand Arrow (View Mode) */}
                {!isAdminMode && (
                    <div className="flex items-center flex-shrink-0">
                        <ArrowRight className={`w-3.5 h-3.5 text-gray-300 group-hover:text-[#6B9FCC] transition-colors ${expanded ? 'rotate-90' : ''}`} />
                    </div>
                )}

                {/* Admin Controls */}
                {isAdminMode && (
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Manual Upload */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const q = window.prompt("Enter Quarter (e.g. Q3 2026):", "Q3 2026");
                                if (q) {
                                    // Parse Q and Year
                                    // simple parsing logic
                                    const parts = q.toUpperCase().split(' '); // ["Q3", "2026"]
                                    if (parts.length < 2) { alert("Invalid Format. Use 'Q3 2026'"); return; }

                                    // Store temporarily to access in onChange
                                    (window as any).uploadContext = { q: parts[0], year: parts[1], companyId: company.id };
                                    document.getElementById(`upload-${company.id}`)?.click();
                                }
                            }}
                            className="p-1.5 text-gray-400 hover:text-[#6B9FCC] hover:bg-[#F0F7FF] rounded transition-colors"
                            title="Manual Upload (Paperclip)"
                        >
                            <span className="text-lg leading-none">📎</span>
                        </button>
                        <input
                            type="file"
                            id={`upload-${company.id}`}
                            style={{ display: 'none' }}
                            accept=".pdf"
                            onChange={async (e) => {
                                const file = e.target.files?.[0];
                                const ctx = (window as any).uploadContext;
                                if (!file || !ctx) return;

                                const formData = new FormData();
                                formData.append('file', file);
                                formData.append('companyId', ctx.companyId);
                                formData.append('q', ctx.q);
                                formData.append('year', ctx.year);

                                try {
                                    const btn = e.target as HTMLInputElement;
                                    btn.value = ''; // Reset
                                    alert(`Uploading ${file.name} as ${ctx.q} FY${ctx.year.slice(-2)}...`);

                                    const res = await fetch('/api/upload', { method: 'POST', body: formData });
                                    const data = await res.json();

                                    if (res.ok) {
                                        alert("Success! Analysis running in background.");
                                        window.location.reload();
                                    } else {
                                        alert("Error: " + data.error);
                                    }
                                } catch (err) { alert("Upload Failed"); }
                            }}
                        />

                        <div className="relative">
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowSectorDropdown(!showSectorDropdown); }}
                                className="px-2 py-1 text-[10px] bg-gray-100 hover:bg-gray-200 text-gray-600 rounded font-medium"
                            >
                                Move
                            </button>
                            {showSectorDropdown && (
                                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[140px] max-h-48 overflow-y-auto">
                                    {allSectors.filter(s => s !== (company as any).sector).map(s => (
                                        <button
                                            key={s}
                                            onClick={(e) => { e.stopPropagation(); handleSectorChange(s); }}
                                            className="w-full text-left px-3 py-1.5 text-[11px] text-gray-600 hover:bg-[#D4E5F7]"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
                        >
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                )}
            </div>

            {/* Expanded Content */}
            {
                expanded && !isAdminMode && (
                    <div className="bg-[#F8FAFC] p-4 border-t border-gray-100 flex flex-col lg:flex-row gap-4 animate-in slide-in-from-top-1 duration-150">
                        <div className="flex-1">
                            <FinancialMatrix
                                financials={selectedData?.financials || company.financials}
                                quarterName={selectedData?.quarter || company.summary?.quarter}
                            />
                        </div>
                        <div className="flex-1">
                            <AnalysisPanel
                                analysis={selectedData?.analysis || company.analysis}
                                quarterName={selectedData?.quarter || company.summary?.quarter}
                                history={company.history}
                                profile={company.profile}
                                activeQuarterIndex={selectedQuarterIdx}
                                onQuarterChange={(idx: number) => setSelectedQuarterIdx(idx)}
                            />
                        </div>
                    </div>
                )
            }
        </div >
    );
};
