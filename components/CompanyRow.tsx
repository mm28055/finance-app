"use client";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FinancialMatrix } from './FinancialMatrix';
import { AnalysisPanel } from './AnalysisPanel';
import { FinancialTrendChart } from './FinancialTrendChart';
import { Trash2, ArrowRight, FileText, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { EnrichedCompany } from './SectorList';
import { useAdmin } from '@/context/AdminContext';
import { ANALYSIS_WINDOW } from '@/lib/retention';
import { guidanceMidpoint, meetsGuidanceThreshold, formatGuidanceRange, GUIDANCE_GROWTH_THRESHOLD } from '@/lib/guidance';

// Quarter tabs shown in the collapsed row. Deliberately narrower than
// ANALYSIS_WINDOW (which still governs what is retained and analysed) — the
// row only has the width for two, and the space pays for the RoCE column.
const ROW_QUARTERS = 2;

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
    const { isAdminMode } = useAdmin();
    const [isDeleting, setIsDeleting] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [customColorTag, setCustomColorTag] = useState<string | null>(company.colorTag || null);
    const [selectedQuarterIdx, setSelectedQuarterIdx] = useState(0); // 0 = latest
    const [localNotes, setLocalNotes] = useState('');
    const [targetPrice, setTargetPrice] = useState<number | null>(company.targetPrice ?? null);
    const [showTargetInput, setShowTargetInput] = useState(false);
    const [targetDraft, setTargetDraft] = useState('');
    const [notesStatus, setNotesStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
    const notesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const notesInitialized = useRef(false);
    const [localConviction, setLocalConviction] = useState<ConvictionLevel | null>(
        (company.conviction as ConvictionLevel) || null
    );
    const [inPortfolio, setInPortfolio] = useState(Boolean(company.inPortfolio));
    const router = useRouter();

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
            setNotesStatus('saving');
            fetch('/api/companies', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: company.id, notes: value })
            })
                .then((res) => {
                    // A 401 here means edit mode is off — surface that rather
                    // than reporting a save that never happened.
                    if (!res.ok) throw new Error(`Save failed (${res.status})`);
                    setNotesStatus('saved');
                })
                .catch((e) => { console.error(e); setNotesStatus('error'); });
        }, 600);
    };

    // Prefer fetched detail (richer) over the light homepage object.
    const effective = detail || company;

    // Get selected quarter data. Capped at ROW_QUARTERS — older quarters are
    // still analysed and retained, they just don't get a tab in the row.
    const quarters = useMemo(
        () => (effective.history || []).slice(0, Math.min(ROW_QUARTERS, ANALYSIS_WINDOW)),
        [effective.history]
    );

    // How far the price sits below its 52-week high. Computed live rather than
    // stored, so it stays right between finance syncs.
    const drawdown = useMemo(() => {
        const price = company.currentPrice;
        const high = company.fiftyTwoWeekHigh;
        if (!price || !high || high <= 0) return null;
        return Math.round(((high - price) / high) * 100);
    }, [company.currentPrice, company.fiftyTwoWeekHigh]);
    const selectedData = quarters[selectedQuarterIdx] || quarters[0];

    // Target hit — a target is a buy price, so it triggers when the price has
    // fallen TO it or below, not when it has run past it.
    const targetHit = targetPrice !== null && !!company.currentPrice && company.currentPrice <= targetPrice;

    // Forward guidance on the newest quarter. Three states on the name: marked
    // when the guided midpoint clears the bar, faded when a number exists but
    // falls short, normal when management gave nothing to go on.
    //
    // The tooltip carries the range, the year it covers, whether it was stated
    // or inferred, and the sentence it came from — nothing else. The company
    // name is what you are hovering over, the midpoint is the range's own
    // average, and the quarter is always the newest one; all three were saying
    // out loud what the reader could already see.
    //
    // Companies with no guidance keep the plain name as their tooltip, which is
    // how a clipped name stays readable.
    const guidance = company.guidance;
    const guidanceMid = guidanceMidpoint(guidance);
    const guidanceHigh = meetsGuidanceThreshold(guidance);
    const guidanceTitle = guidanceMid === null
        ? company.name
        : `Guiding ${formatGuidanceRange(guidance)}`
        + `${guidance?.fy ? ` for ${guidance.fy}` : ''}`
        // Kept where the quarter was dropped: this one word says whether the
        // number is management's own or arithmetic done on their figures, which
        // the reader cannot recover from the range alone.
        + ` (${guidance?.basis === 'IMPLIED' ? 'implied' : 'stated'})`
        + `${guidance?.quote ? `

“${guidance.quote}”` : ''}`;

    const saveTarget = (value: number | null) => {
        const previous = targetPrice;
        setTargetPrice(value);
        setShowTargetInput(false);
        fetch('/api/companies', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: company.id, targetPrice: value })
        })
            .then((res) => {
                // A 401 means edit mode is off. Put the old target back rather
                // than leaving a green price that nothing has actually saved.
                if (!res.ok) throw new Error(`Save failed (${res.status})`);
            })
            .catch((e) => { console.error(e); setTargetPrice(previous); });
    };

    const handleTargetSubmit = () => {
        const trimmed = targetDraft.trim();
        if (!trimmed) { saveTarget(null); return; }
        const parsed = Number(trimmed);
        if (!isFinite(parsed) || parsed <= 0) { setShowTargetInput(false); return; }
        saveTarget(parsed);
    };

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

    const handlePortfolioClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const next = !inPortfolio;
        setInPortfolio(next);
        fetch('/api/companies', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: company.id, inPortfolio: next })
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Save failed (${res.status})`);
                // ZPortfolio is assembled on the server; refetch so the row
                // joins or leaves that section.
                router.refresh();
            })
            .catch((err) => { console.error(err); setInPortfolio(!next); });
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
                onClick={() => setExpanded(!expanded)}
                className={`flex items-center px-3 2xl:px-4 py-2.5 bg-white ${!isAdminMode ? 'hover:bg-[#F8FAFC] cursor-pointer' : ''} transition-colors group overflow-x-auto md:overflow-visible`}
            >
                {/* Company Info - Single Line */}
                {/* Company Info - Fixed Width for Alignment */}
                <div className="flex items-center gap-3 w-56 2xl:w-[290px] flex-shrink-0 border-r border-gray-100 pr-3 mr-3 2xl:pr-4 2xl:mr-4">
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
                        <span
                            className={`text-sm font-medium truncate ${guidanceHigh ? 'text-[#6B9FCC]'
                                : guidanceMid !== null ? 'text-gray-400'
                                    : 'text-gray-800'}`}
                            title={guidanceTitle}
                        >
                            {company.name}
                        </span>
                        {company.isSme && (
                            <span
                                className="flex-shrink-0 text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                                title="Listed on NSE Emerge / BSE SME"
                            >
                                SME
                            </span>
                        )}
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
                        {/* Held marker — always shown when held, clickable in edit mode */}
                        {(inPortfolio || isAdminMode) && (
                            <button
                                onClick={handlePortfolioClick}
                                disabled={!isAdminMode}
                                title={inPortfolio
                                    ? `In your portfolio${isAdminMode ? ' — click to remove' : ''}`
                                    : 'Click to add to your portfolio'}
                                className={`flex-shrink-0 ${isAdminMode ? '' : 'cursor-default'}`}
                            >
                                <Briefcase className={`w-3 h-3 ${inPortfolio ? 'text-[#4A7AAF]' : 'text-gray-200 hover:text-gray-400'}`} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Data Stack (Valuation + Quarters) - Single Line Row */}
                <div className="flex items-center gap-3 2xl:gap-4 flex-1 min-w-0">
                    {/* Valuation Strip — a fixed-width column per metric so every
                        row lines up vertically. Cells render empty rather than
                        collapsing, otherwise a company missing (say) P/B would pull
                        everything after it out of alignment. */}
                    <div className="grid grid-cols-[42px_38px_60px_56px_56px_56px_58px_84px] gap-1.5 2xl:grid-cols-[44px_40px_64px_60px_60px_60px_62px_90px] 2xl:gap-2 items-center flex-shrink-0">
                        {/* Price — click to set a target. Turns green once the
                            price reaches it; clearing the target turns it off. */}
                        <div className="relative flex justify-end">
                            <button
                                disabled={!isAdminMode}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setTargetDraft(targetPrice !== null ? String(targetPrice) : '');
                                    setShowTargetInput(!showTargetInput);
                                }}
                                className={`text-[10px] font-semibold text-right ${isAdminMode ? 'hover:underline' : 'cursor-default'} ${targetHit ? 'text-emerald-600'
                                    // Muted grey = a target is set and the price
                                    // hasn't come down to it yet, so a glance down
                                    // the column shows which names are being watched.
                                    : targetPrice !== null ? 'text-gray-400'
                                        : 'text-gray-700'}`}
                                title={
                                    targetPrice !== null
                                        ? `Buy target ₹${targetPrice}${targetHit ? ' — reached' : ''}${isAdminMode ? ' · click to change' : ''}`
                                        : isAdminMode ? 'Current price — click to set a target' : 'Current price'
                                }
                            >
                                {company.currentPrice ? `₹${company.currentPrice}` : '—'}
                            </button>

                            {isAdminMode && showTargetInput && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={(e) => { e.stopPropagation(); setShowTargetInput(false); }}
                                    />
                                    <div
                                        className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-200 rounded shadow-lg p-2 flex items-center gap-1"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span className="text-[10px] text-gray-400">₹</span>
                                        <input
                                            autoFocus
                                            type="number"
                                            value={targetDraft}
                                            onChange={(e) => setTargetDraft(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') handleTargetSubmit();
                                                if (e.key === 'Escape') setShowTargetInput(false);
                                            }}
                                            placeholder="Target"
                                            className="w-16 text-[10px] px-1 py-0.5 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                                        />
                                        <button
                                            onClick={handleTargetSubmit}
                                            className="text-[10px] font-semibold text-emerald-600 hover:text-emerald-700 px-1"
                                        >
                                            Set
                                        </button>
                                        {targetPrice !== null && (
                                            <button
                                                onClick={() => { setTargetDraft(''); saveTarget(null); }}
                                                className="text-[10px] text-gray-400 hover:text-gray-600 px-1"
                                                title="Remove target"
                                            >
                                                Off
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Distance from the 52-week high. The ₹ figure carries the
                            "price" meaning on its own, so the label is dropped to
                            pay for this without widening the row. */}
                        <span
                            className={`text-[10px] font-semibold text-right ${drawdown === null ? ''
                                : drawdown >= 25 ? 'text-red-500'
                                    : drawdown >= 10 ? 'text-amber-600'
                                        : 'text-emerald-600'
                                }`}
                            title={drawdown === null ? undefined : `52-week high ₹${company.fiftyTwoWeekHigh}${company.fiftyTwoWeekLow ? ` · low ₹${company.fiftyTwoWeekLow}` : ''}`}
                        >
                            {drawdown === null ? '' : drawdown <= 0 ? 'At high' : `−${drawdown}%`}
                        </span>

                        {/* Market cap */}
                        <span className="text-[10px] text-gray-600 font-semibold text-right" title="Market cap">
                            {company.marketCap ? `₹${Math.round(company.marketCap).toLocaleString()}cr` : ''}
                        </span>

                        {/* P/E, P/B and P/S. Two bare "x" chips could be told
                            apart by position; three can't, so each carries its
                            name the way RoCE does. */}
                        <div className="flex">
                            {company.peRatio ? (
                                <span
                                    className="w-full flex items-center justify-center gap-0.5 px-1 py-0.5 bg-gray-50 rounded border border-gray-100"
                                    title={`P/E ratio: ${company.peRatio}`}
                                >
                                    <span className="text-[8px] text-gray-400 font-medium">P/E</span>
                                    <span className="text-[10px] text-gray-600 font-semibold">{company.peRatio}x</span>
                                </span>
                            ) : null}
                        </div>

                        <div className="flex">
                            {company.pbRatio ? (
                                <span
                                    className="w-full flex items-center justify-center gap-0.5 px-1 py-0.5 bg-gray-50 rounded border border-gray-100"
                                    title={`P/B ratio: ${company.pbRatio}`}
                                >
                                    <span className="text-[8px] text-gray-400 font-medium">P/B</span>
                                    <span className="text-[10px] text-gray-600 font-semibold">{company.pbRatio}x</span>
                                </span>
                            ) : null}
                        </div>

                        {/* P/S — market cap over the last four quarters' sales.
                            Empty for a company whose quarterly table Screener
                            hasn't filled four columns of yet. */}
                        <div className="flex">
                            {company.psRatio ? (
                                <span
                                    className="w-full flex items-center justify-center gap-0.5 px-1 py-0.5 bg-gray-50 rounded border border-gray-100"
                                    title={`P/S ratio (market cap ÷ trailing 12-month sales): ${company.psRatio}`}
                                >
                                    <span className="text-[8px] text-gray-400 font-medium">P/S</span>
                                    <span className="text-[10px] text-gray-600 font-semibold">{company.psRatio}x</span>
                                </span>
                            ) : null}
                        </div>

                        {/* RoCE — keeps a label because, unlike ₹ and the "x"
                            suffix, a bare percentage here would read as the
                            52-week drawdown. */}
                        <div className="flex">
                            {company.roce ? (
                                <span
                                    className="w-full flex items-center justify-center gap-0.5 px-1 py-0.5 bg-gray-50 rounded border border-gray-100"
                                    title={`RoCE (return on capital employed): ${company.roce}%`}
                                >
                                    <span className="text-[8px] text-gray-400 font-medium uppercase">RoCE</span>
                                    <span className="text-[10px] text-gray-600 font-semibold">{Math.round(company.roce)}%</span>
                                </span>
                            ) : null}
                        </div>

                        {/* AI score */}
                        <div className="flex">
                            {company.geminiScore !== undefined ? (
                                <div className="w-full flex items-center justify-center gap-1 px-1 py-0.5 bg-[#F0F9FF] rounded border border-[#BAE6FD]" title="AI investibility score">
                                    <span className={`text-[10px] font-bold ${company.geminiScore >= 80 ? 'text-emerald-600' :
                                        company.geminiScore >= 50 ? 'text-amber-600' : 'text-red-500'
                                        }`}>
                                        {company.geminiScore}/100
                                    </span>
                                    {company.geminiScoreDelta !== undefined && (
                                        <span className={`text-[10px] font-semibold ${company.geminiScoreDelta > 0 ? 'text-emerald-600' :
                                            company.geminiScoreDelta < 0 ? 'text-red-500' : 'text-gray-400'
                                            }`}>
                                            ({company.geminiScoreDelta > 0 ? '+' : ''}{company.geminiScoreDelta})
                                        </span>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    {/* Quarter Tabs */}
                    {quarters.length > 0 && (
                        <div className="flex items-center gap-1 pl-3 2xl:gap-1.5 2xl:pl-4 border-l border-gray-200">
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
                                        className={`px-2 py-0.5 text-[9px] font-semibold rounded-l transition-all flex items-center gap-1 border-y border-l whitespace-nowrap flex-shrink-0 ${idx === selectedQuarterIdx
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

                {/* Expand Arrow */}
                <div className="flex items-center flex-shrink-0">
                    <ArrowRight className={`w-3.5 h-3.5 text-gray-300 group-hover:text-[#6B9FCC] transition-colors ${expanded ? 'rotate-90' : ''}`} />
                </div>

                {/* Admin Controls */}
                {isAdminMode && (
                    <div className="flex items-center gap-2 flex-shrink-0">
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
                expanded && (
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
                                    {/* items-start so the cards keep their natural height instead
                                        of stretching to the analysis panel's height. */}
                                    <div className="flex-1 flex flex-col gap-4 items-stretch self-start w-full">
                                        <FinancialMatrix
                                            financials={selectedData?.financials || effective.financials}
                                            quarterName={selectedData?.quarter || effective.summary?.quarter}
                                        />
                                        {effective.history && effective.history.length >= 2 && (
                                            <FinancialTrendChart history={effective.history} />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <AnalysisPanel
                                            analysis={selectedData?.analysis || effective.analysis}
                                            quarterName={selectedData?.quarter || effective.summary?.quarter}
                                            history={effective.history}
                                            profile={effective.profile}
                                            notes={localNotes}
                                            onNotesChange={handleNotesChange}
                                            notesStatus={notesStatus}
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
