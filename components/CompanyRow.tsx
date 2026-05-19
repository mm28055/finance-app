"use client";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FinancialMatrix } from './FinancialMatrix';
import { AnalysisPanel } from './AnalysisPanel';
import { FinancialTrendChart } from './FinancialTrendChart';
import { Trash2, ArrowRight, FileText } from 'lucide-react';
import type { EnrichedCompany } from './SectorList';
import { useAdmin } from '@/context/AdminContext';

import { COLOR_THEMES, ColorThemeKey, CONVICTION_CONFIG, ConvictionLevel } from './SectorList';

const CONVICTION_CYCLE: (ConvictionLevel | null)[] = [null, 'HIGH', 'MEDIUM', 'LOW'];

// Helper to format quarter: "Q3 FY26" -> "Q3 26"
function shortQuarter(q: string): string {
    return q.replace('FY', '').replace(' ', ' ');
}

export const CompanyRow = ({ company, colorTheme = { bg: 'bg-[#D4E5F7]', text: 'text-[#4A7AAF]' } }: {
    company: EnrichedCompany;
    colorTheme?: { bg: string; text: string };
}) => {
    const [expanded, setExpanded] = useState(false);
    const { isAdminMode, allSectors } = useAdmin();
    const [isDeleting, setIsDeleting] = useState(false);
    const [showSectorDropdown, setShowSectorDropdown] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [customColorTag, setCustomColorTag] = useState<string | null>(company.colorTag || null);
    const [selectedQuarterIdx, setSelectedQuarterIdx] = useState(0); // 0 = latest
    const [localNotes, setLocalNotes] = useState('');
    const notesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const notesInitialized = useRef(false);
    const [localConviction, setLocalConviction] = useState<ConvictionLevel | null>(
        (company.conviction as ConvictionLevel) || null
    );

    // On-demand company detail.
    // The homepage ships a lightweight `company` (scalars + a minimal
    // {quarter, pdfUrl} history so row-level PDF icons render). Full analysis
    // text, financials history, and profile are stripped to keep Supabase
    // egress tiny. When the user expands the row, we fetch the full detail
    // for just this company and cache it locally so subsequent collapse/
    // expand is instant.
    //
    // IMPORTANT: check `company.analysis` (not just history) — history is
    // now always populated on the light fetch, but `analysis` is only set
    // by getCompanyDetail. Using history here would skip the detail fetch
    // and leave the analysis panel empty.
    const hasDetailAlready = Boolean(company.analysis);
    const [detail, setDetail] = useState<EnrichedCompany | null>(hasDetailAlready ? company : null);
    const [detailLoading, setDetailLoading] = useState(false);
    const [detailError, setDetailError] = useState<string | null>(null);

    useEffect(() => {
        if (!expanded || detail) return;
        // NOTE: detailLoading is intentionally NOT in the deps array. Including
        // it would cause setDetailLoading(true) to re-run this effect, which
        // fires the cleanup, which flips `cancelled` to true on the in-flight
        // fetch — and the response would then be silently dropped. Result:
        // eternal skeleton.
        let cancelled = false;
        setDetailLoading(true);
        setDetailError(null);
        fetch(`/api/companies/${company.id}/detail`)
            .then(async (res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data: EnrichedCompany) => {
                if (cancelled) return;
                setDetail(data);
            })
            .catch((err) => {
                if (cancelled) return;
                console.error('Failed to load company detail', err);
                setDetailError('Failed to load details. Click to retry.');
            })
            .finally(() => {
                if (cancelled) return;
                setDetailLoading(false);
            });
        return () => { cancelled = true; };
    }, [expanded, company.id, detail]);

    // Initialize notes once when detail first loads.
    useEffect(() => {
        if (detail && !notesInitialized.current) {
            setLocalNotes(detail.notes || '');
            notesInitialized.current = true;
        }
    }, [detail]);

    const handleNotesChange = (value: string) => {
        setLocalNotes(value);
        if (notesTimerRef.current) clearTimeout(notesTimerRef.current);
        notesTimerRef.current = setTimeout(() => {
            fetch('/api/companies', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: company.id, notes: value })
            }).catch(console.error);
        }, 600);
    };

    // Prefer fetched detail (richer) over the light homepage object.
    const effective = detail || company;

    // Get selected quarter data
    const quarters = useMemo(() => (effective.history || []).slice(0, 2), [effective.history]);
    const selectedData = quarters[selectedQuarterIdx] || quarters[0];

    const handleConvictionClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const idx = CONVICTION_CYCLE.indexOf(localConviction);
        const next = CONVICTION_CYCLE[(idx + 1) % CONVICTION_CYCLE.length];
        setLocalConviction(next);
        fetch('/api/companies', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: company.id, conviction: next })
        }).catch(console.error);
    };

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

    const handleColorChange = async (colorKey: string | null) => {
        setCustomColorTag(colorKey);
        setShowColorPicker(false);
        try {
            await fetch('/api/companies', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: company.id, colorTag: colorKey })
            });
        } catch (e) {
            console.error('Failed to update color', e);
        }
    };

    // Determine effective colors
    const effectiveTheme = customColorTag && COLOR_THEMES[customColorTag as ColorThemeKey]
        ? COLOR_THEMES[customColorTag as ColorThemeKey]
        : colorTheme;

    return (
        <div className="border-b border-gray-100 last:border-0 relative">
            {/* Compact Row */}
            <div
                onClick={() => !isAdminMode && setExpanded(!expanded)}
                className={`flex items-center px-4 py-2.5 bg-white ${!isAdminMode ? 'hover:bg-[#F8FAFC] cursor-pointer' : ''} transition-colors group overflow-x-auto md:overflow-visible`}
            >
                {/* Company Info - Single Line */}
                {/* Company Info - Fixed Width for Alignment */}
                <div className="flex items-center gap-3 w-[290px] flex-shrink-0 border-r border-gray-100 pr-4 mr-4">
                    <div className="relative">
                        <div
                            className={`w-7 h-7 rounded-md ${effectiveTheme.bg} ${effectiveTheme.text} flex items-center justify-center text-[10px] font-semibold flex-shrink-0 transition-colors cursor-context-menu`}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowColorPicker(!showColorPicker);
                            }}
                        >
                            {company.ticker.substring(0, 2)}
                        </div>

                        {/* Color Context Menu */}
                        {showColorPicker && (
                            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-2 min-w-[120px] animate-in fade-in zoom-in-95 duration-100">
                                <div className="text-[10px] text-gray-400 font-medium mb-2 px-1 uppercase tracking-wider">Set Color</div>
                                <div className="flex gap-1.5 flex-wrap">
                                    {(Object.keys(COLOR_THEMES) as ColorThemeKey[]).map((key) => (
                                        <button
                                            key={key}
                                            onClick={(e) => { e.stopPropagation(); handleColorChange(key); }}
                                            className={`w-5 h-5 rounded-full ${COLOR_THEMES[key].dot} hover:scale-110 transition-transform ${customColorTag === key ? 'ring-2 ring-offset-1 ring-gray-400' : ''}`}
                                            title={COLOR_THEMES[key].name}
                                        />
                                    ))}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleColorChange(null); }}
                                        className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 text-[10px]"
                                        title="Reset to Theme"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Click outside listener could be added here or rely on specific close actions */}
                        {showColorPicker && (
                            <div
                                className="fixed inset-0 z-40"
                                onClick={(e) => { e.stopPropagation(); setShowColorPicker(false); }}
                            />
                        )}
                    </div>
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className="text-sm font-medium text-gray-800 truncate" title={company.name}>{company.name}</span>
                        <button
                            onClick={handleConvictionClick}
                            title={localConviction ? `Conviction: ${localConviction} — click to change` : 'Click to set conviction'}
                            className="flex-shrink-0"
                        >
                            {localConviction ? (
                                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${CONVICTION_CONFIG[localConviction].pill}`}>
                                    {localConviction === 'HIGH' ? '▲' : localConviction === 'MEDIUM' ? '◆' : '▼'} {localConviction[0]}
                                </span>
                            ) : (
                                <span className="text-[10px] text-gray-200 hover:text-gray-400 transition-colors leading-none">●</span>
                            )}
                        </button>
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
                            {company.geminiScore !== undefined && (
                                <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-[#F0F9FF] rounded border border-[#BAE6FD]">

                                    <span className={`text-[10px] font-bold ${company.geminiScore >= 80 ? 'text-emerald-600' :
                                        company.geminiScore >= 50 ? 'text-amber-600' : 'text-red-500'
                                        }`}>
                                        {company.geminiScore}/100
                                    </span>
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
                                                const url = q.pdfUrl!;
                                                // If it's a web URL (Supabase/Amazon S3), open directly
                                                if (url.startsWith('http')) {
                                                    window.open(url, '_blank');
                                                } else {
                                                    // Legacy local path
                                                    const viewUrl = `/api/transcripts/view?path=${encodeURIComponent(url)}`;
                                                    window.open(viewUrl, '_blank');
                                                }
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
                    <div className="bg-[#F8FAFC] p-4 border-t border-gray-100 flex flex-col gap-4 animate-in slide-in-from-top-1 duration-150">
                        {detailLoading && !detail ? (
                            // Skeleton while the first fetch is in flight.
                            <>
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-24 w-full bg-gray-100 rounded animate-pulse" />
                                    <div className="h-24 w-full bg-gray-100 rounded animate-pulse" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-32 w-full bg-gray-100 rounded animate-pulse" />
                                    <div className="h-16 w-full bg-gray-100 rounded animate-pulse" />
                                </div>
                            </>
                        ) : detailError && !detail ? (
                            <button
                                onClick={() => { setDetailError(null); setDetail(null); }}
                                className="text-xs text-red-500 hover:text-red-700"
                            >
                                {detailError}
                            </button>
                        ) : (
                            <>
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <div className="flex-1 flex flex-col gap-4">
                                        <FinancialMatrix
                                            financials={selectedData?.financials || effective.financials}
                                            quarterName={selectedData?.quarter || effective.summary?.quarter}
                                        />
                                        {effective.history && effective.history.length >= 2 && (
                                            <FinancialTrendChart history={effective.history} />
                                        )}
                                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">My Notes</p>
                                            <textarea
                                                value={localNotes}
                                                onChange={(e) => handleNotesChange(e.target.value)}
                                                placeholder="Add your research notes..."
                                                className="w-full h-28 text-xs text-gray-700 bg-transparent resize-none focus:outline-none placeholder:text-gray-300 leading-relaxed"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <AnalysisPanel
                                            analysis={selectedData?.analysis || effective.analysis}
                                            quarterName={selectedData?.quarter || effective.summary?.quarter}
                                            history={effective.history}
                                            profile={effective.profile}
                                            activeQuarterIndex={selectedQuarterIdx}
                                            onQuarterChange={(idx: number) => setSelectedQuarterIdx(idx)}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )
            }
        </div >
    );
};
