"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { warmCardRoutes } from '@/lib/card-prefetch';
import { CompanyRow } from './CompanyRow';
import type { CompanyFinancials } from './FinancialMatrix';
import { AnalysisResult } from '@/lib/ai-analyst';
import { SectorSection } from './SectorSection';
import { Search } from 'lucide-react';
import { meetsGuidanceThreshold, GUIDANCE_GROWTH_THRESHOLD } from '@/lib/guidance';
import { isPortfolioSector } from '@/lib/portfolio';
import { useTags } from '@/context/TagsContext';
import { allSectorOverviews, companyCallInfo, livePriceCheck, CALLS, type Call } from '@/lib/sector-overviews';

export const COLOR_THEMES = {
    blue: { name: 'Blue', bg: 'bg-[#D4E5F7]', text: 'text-[#4A7AAF]', dot: 'bg-[#4A7AAF]' },
    emerald: { name: 'Emerald', bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-600' },
    amber: { name: 'Amber', bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-600' },
    rose: { name: 'Rose', bg: 'bg-rose-100', text: 'text-rose-700', dot: 'bg-rose-600' },
    purple: { name: 'Purple', bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-600' },
};

export type ColorThemeKey = keyof typeof COLOR_THEMES;

// Live price check colours, as in the notes' valuation table (no red: stretched is light purple).
const CHECK_STYLE: Record<string, string> = {
    Fits: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Full: 'bg-amber-50 text-amber-700 border-amber-200',
    Stretched: 'bg-[#F3EEFC] text-[#6B3FA0] border-[#DDCDF5]',
    'n/a': 'bg-gray-50 text-gray-400 border-gray-200',
};

export interface EnrichedCompany {
    id: string;
    name: string;
    ticker: string;
    price: number;
    priceChange: number;
    financials: CompanyFinancials;
    // Quarter the headline financials belong to (e.g. "Q1 FY27").
    financialsQuarter?: string;
    // Leaderboard figures: latest quarter vs a year earlier, and the last four quarters.
    board?: {
        quarter: string;
        revenue: number | null; revenueYoY: number | null;
        ebitda: number | null; margin: number | null; marginChange: number | null;
        pat: number | null; patYoY: number | null;
        /** Set instead of patYoY when growth would mislead: a swing across zero or a one-off year. */
        patNote?: 'to loss' | 'to profit' | 'loss wider' | 'loss smaller' | 'one-off' | null;
        ttmRevenue: number | null; ttmEbitda: number | null; ttmPat: number | null;
    };
    analysis?: AnalysisResult;
    profile?: string;
    summary?: {
        quarter: string;
        text: string;
    }
    history?: {
        quarter: string;
        // analysis + financials are only populated by getCompanyDetail (on expand).
        // The lightweight homepage load omits them and provides just quarter + pdfUrl
        // so the row can render PDF transcript icons without pulling heavy blobs.
        analysis?: AnalysisResult;
        financials?: CompanyFinancials;
        pdfUrl?: string | null;
    }[];
    // Every stored quarter of filed figures (up to FINANCIALS_WINDOW), newest
    // first, for the trend chart — including quarters without a call analysis.
    trend?: {
        quarter: string;
        financials?: CompanyFinancials;
    }[];
    // Material exchange filings (last six months): headlines on every row for
    // the chip and its hover; full summaries only on the detail fetch.
    filingHeadlines?: import('@/lib/filings/types').FilingHeadline[];
    filings?: import('@/lib/filings/types').MaterialFiling[];
    checkpoints?: import('@/lib/checkpoints').Checkpoint[];
    projects?: import('@/lib/projects/types').Project[];
    capacity?: import('@/lib/projects/types').Capacity;
    management?: import('@/lib/management/types').Management;
    // Shareholding (lib/shareholding.ts). The light load carries only the latest
    // promoter / pledge figures and the warnings; `rows` (oldest first, up to 12)
    // and the positive notes come with the detail fetch.
    holding?: {
        period: string;
        promoter: number;
        pledged: number | null;
        notes: import('@/lib/shareholding').HoldingNote[];
        rows?: import('@/lib/shareholding').HoldingRow[];
    };
    marketCap?: number;
    currentPrice?: number;
    bookValue?: number;
    peRatio?: number;
    pbRatio?: number;
    // Market cap over trailing-twelve-month sales, divided server-side.
    psRatio?: number;
    ttmSales?: number;
    dividendYield?: number;
    roce?: number;
    fiftyTwoWeekHigh?: number;
    fiftyTwoWeekLow?: number;
    targetPrice?: number;
    // Forward revenue guidance from the newest quarter's investor brief.
    guidance?: {
        min: number | null;
        max: number | null;
        fy?: string;
        basis: string;      // 'STATED' | 'IMPLIED' | 'NONE'
        quote?: string;
        quarter: string;
        /** Set when a later AGM or special call supersedes the results call, e.g. "AGM, 23 Sep". */
        source?: string;
    };
    geminiScore?: number;
    geminiScoreDelta?: number;
    /** Listed on NSE Emerge / BSE SME. Set by `scripts/mark-sme.ts`. */
    isSme?: boolean;
    /** Current name after a rename (the stored `name` stays, as the notes' key). */
    displayName?: string;
    /** Held in the portfolio, so also listed under ZPortfolio. */
    inPortfolio?: boolean;
    colorTag?: string;
    notes?: string;
    conviction?: string;
}

export const CONVICTION_CONFIG = {
    HIGH:   { label: 'High',   pill: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
    MEDIUM: { label: 'Medium', pill: 'bg-amber-100 text-amber-700',     dot: 'bg-amber-500'   },
    LOW:    { label: 'Low',    pill: 'bg-rose-100 text-rose-600',       dot: 'bg-rose-400'    },
} as const;

export type ConvictionLevel = keyof typeof CONVICTION_CONFIG;

export interface SectorData {
    sector: string;
    stats: { companies: number; avgGrowth: string; sentiment: number };
    companies: EnrichedCompany[];
}

export const SectorList = ({ sectors }: { sectors: SectorData[] }) => {
    // Keep the card servers awake while the page is open, so cards open without a wake-up delay.
    useEffect(() => {
        warmCardRoutes();
        const t = setInterval(() => { if (document.visibilityState === 'visible') warmCardRoutes(); }, 4 * 60 * 1000);
        return () => clearInterval(t);
    }, []);
    const [searchQuery, setSearchQuery] = useState('');


    const [sortBy, setSortBy] = useState<'marketCap' | 'gemini'>('gemini');
    const [convictionFilter, setConvictionFilter] = useState<'ALL' | 'HIGH' | 'MEDIUM' | 'LOW'>('ALL');
    // Independent of conviction: keeps only the companies whose name renders blue,
    // i.e. those guiding at or above the growth threshold.
    const [guidanceOnly, setGuidanceOnly] = useState(false);
    // Keeps only the companies whose latest concall scored 90+ (TOP) or 60 and
    // under (LOW). The two bands can't overlap, so only one is on at a time.
    const [scoreBand, setScoreBand] = useState<'TOP' | 'LOW' | null>(null);
    // Keeps only the companies whose score moved 20+ points, up or down, from
    // the previous quarter's concall.
    const [bigMoveOnly, setBigMoveOnly] = useState(false);
    // Keeps only the companies with a shareholding warning (lib/shareholding.ts).
    const [holdingOnly, setHoldingOnly] = useState(false);
    // The owner's own tags: keeps only the companies carrying the chosen tag.
    const { allTags, companiesWith } = useTags();
    const [tagFilter, setTagFilter] = useState('');
    // A tag that no longer exists (its last company was untagged) stops filtering.
    const activeTag = allTags.some(t => t.tag === tagFilter) ? tagFilter : '';
    // The call each sector note gives a company (own / follow / wait / pass / avoid).
    const callInfo = useMemo(() => companyCallInfo(allSectorOverviews()), []);
    const calls = useMemo(() => new Map([...callInfo].map(([k, v]) => [k, v.call])), [callInfo]);
    const [callFilter, setCallFilter] = useState<Call | ''>('');
    const callCounts = useMemo(() => {
        const seen = new Set<string>();
        const n: Record<string, number> = {};
        sectors.filter(s => !isPortfolioSector(s.sector)).forEach(s => s.companies.forEach(co => {
            const c = calls.get(co.name.trim().toLowerCase());
            if (c && !seen.has(co.id)) { seen.add(co.id); n[c] = (n[c] || 0) + 1; }
        }));
        return n;
    }, [sectors, calls]);
    // Only one company row is open at a time. Keyed by sector too, because
    // ZPortfolio repeats companies that are also listed in their own sector.
    const [openRowKey, setOpenRowKey] = useState<string | null>(null);

    // Filter companies based on search AND conviction AND sort them
    const filteredSectors = useMemo(() => {
        let result = sectors;

        // 1. Search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co =>
                    co.name.toLowerCase().includes(query) ||
                    (co.displayName || '').toLowerCase().includes(query) ||
                    co.ticker.toLowerCase().includes(query)
                )
            })).filter(sector => sector.companies.length > 0);
        }

        // 2. Conviction filter
        if (convictionFilter !== 'ALL') {
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co => co.conviction === convictionFilter)
            })).filter(sector => sector.companies.length > 0);
        }

        // 3. High-growth guidance filter (the blue names)
        if (guidanceOnly) {
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co => meetsGuidanceThreshold(co.guidance))
            })).filter(sector => sector.companies.length > 0);
        }

        // 4. Latest concall score band. Unscored companies are in neither band.
        if (scoreBand) {
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co => co.geminiScore != null &&
                    (scoreBand === 'TOP' ? co.geminiScore >= 90 : co.geminiScore <= 60))
            })).filter(sector => sector.companies.length > 0);
        }

        // 5. Score moved 20+ either way since the previous quarter
        if (bigMoveOnly) {
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co => Math.abs(co.geminiScoreDelta ?? 0) >= 20)
            })).filter(sector => sector.companies.length > 0);
        }

        // 5b. Shareholding warning: promoter selling, pledges, institutions leaving
        if (holdingOnly) {
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co => (co.holding?.notes || []).some(n => n.tone === 'watch'))
            })).filter(sector => sector.companies.length > 0);
        }

        // 6. Owner's tag
        if (activeTag) {
            const ids = companiesWith(activeTag);
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co => ids.has(co.id))
            })).filter(sector => sector.companies.length > 0);
        }

        // 7. The note's call
        if (callFilter) {
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co => calls.get(co.name.trim().toLowerCase()) === callFilter)
            })).filter(sector => sector.companies.length > 0);
        }

        // 8. Sort
        return result.map(sector => {
            const sortedCompanies = [...sector.companies].sort((a, b) => {
                if (sortBy === 'gemini') {
                    // Sort by Gemini Score Descending
                    const scoreA = a.geminiScore || 0;
                    const scoreB = b.geminiScore || 0;
                    if (scoreA !== scoreB) return scoreB - scoreA;
                    // Fallback to Market Cap
                    return (b.marketCap || 0) - (a.marketCap || 0);
                } else {
                    // Default: Market Cap Descending
                    return (b.marketCap || 0) - (a.marketCap || 0);
                }
            });
            return { ...sector, companies: sortedCompanies };
        });
    }, [sectors, searchQuery, sortBy, convictionFilter, guidanceOnly, scoreBand, bigMoveOnly, holdingOnly, activeTag, companiesWith, callFilter, calls]);

    // Every company once (ZPortfolio repeats them), so a sector note can still find a
    // company that has been moved to another sector.
    const allCompanies = useMemo(() => sectors.filter(s => !isPortfolioSector(s.sector)).flatMap(s => s.companies), [sectors]);

    // Count total companies. ZPortfolio repeats companies listed elsewhere, so
    // it is left out of both counts.
    const countCompanies = (list: SectorData[]) => list
        .filter(s => !isPortfolioSector(s.sector))
        .reduce((sum, s) => sum + s.companies.length, 0);
    const totalCompanies = countCompanies(sectors);

    if (sectors.length === 0) {
        return <div className="text-gray-400 text-center py-10 text-sm">No companies found.</div>;
    }

    return (
        <div className="space-y-4">
            {/* Toolbar: Search + Sort + Conviction Filter */}
            <div className="sticky top-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-30 py-2.5 -mx-2 px-3 border-b border-gray-100 shadow-sm mb-4 flex flex-col gap-2">
                {/* Row 1: Search + Sort */}
                <div className="flex gap-3 items-center">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={`Search ${totalCompanies} companies...`}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7] transition-all"
                        />
                    </div>
                    <div className="flex items-center flex-shrink-0 bg-gray-50 border border-gray-200 p-1 rounded-lg">
                        <button
                            onClick={() => setSortBy('marketCap')}
                            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${sortBy === 'marketCap' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                        >MCap</button>
                        <button
                            onClick={() => setSortBy('gemini')}
                            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${sortBy === 'gemini' ? 'bg-[#E0F2FE] text-[#0284C7] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse"></span>
                            AI Rank
                        </button>
                    </div>
                </div>

                {/* Row 2: Conviction Filter */}
                <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider mr-0.5">Conviction:</span>
                    {(['ALL', 'HIGH', 'MEDIUM', 'LOW'] as const).map(f => {
                        const active = convictionFilter === f;
                        let cls = '';
                        if (active) {
                            if (f === 'ALL') cls = 'bg-gray-800 text-white border-gray-800';
                            else if (f === 'HIGH') cls = 'bg-emerald-500 text-white border-emerald-500';
                            else if (f === 'MEDIUM') cls = 'bg-amber-400 text-white border-amber-400';
                            else cls = 'bg-rose-400 text-white border-rose-400';
                        } else {
                            cls = 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600';
                        }
                        const label = f === 'ALL' ? 'All' : f === 'HIGH' ? '▲ High' : f === 'MEDIUM' ? '◆ Medium' : '▼ Low';
                        return (
                            <button
                                key={f}
                                onClick={() => setConvictionFilter(f)}
                                className={`px-2 py-0.5 text-[10px] font-medium rounded border transition-all ${cls}`}
                            >{label}</button>
                        );
                    })}

                    <span className="w-px h-3 bg-gray-200 mx-1" />
                    <button
                        onClick={() => setGuidanceOnly(v => !v)}
                        title={`Only companies guiding ${GUIDANCE_GROWTH_THRESHOLD}%+ revenue growth`}
                        className={`px-2 py-0.5 text-[10px] font-medium rounded border transition-all ${guidanceOnly
                            ? 'bg-[#6B9FCC] text-white border-[#6B9FCC]'
                            : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'}`}
                    >{`▲ ${GUIDANCE_GROWTH_THRESHOLD}%+ Guidance`}</button>
                    <button
                        onClick={() => setScoreBand(b => b === 'TOP' ? null : 'TOP')}
                        title="Only companies whose latest concall scored 90 or more"
                        className={`px-2 py-0.5 text-[10px] font-medium rounded border transition-all ${scoreBand === 'TOP'
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'}`}
                    >★ 90+ Score</button>
                    <button
                        onClick={() => setScoreBand(b => b === 'LOW' ? null : 'LOW')}
                        title="Only companies whose latest concall scored 60 or less"
                        className={`px-2 py-0.5 text-[10px] font-medium rounded border transition-all ${scoreBand === 'LOW'
                            ? 'bg-rose-400 text-white border-rose-400'
                            : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'}`}
                    >▼ ≤60 Score</button>
                    <button
                        onClick={() => setBigMoveOnly(v => !v)}
                        title="Only companies whose score moved 20 or more points, up or down, since last quarter"
                        className={`px-2 py-0.5 text-[10px] font-medium rounded border transition-all ${bigMoveOnly
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'}`}
                    >± 20 Score Move</button>
                    <select
                        value={callFilter}
                        onChange={e => setCallFilter(e.target.value as Call | '')}
                        title="Only companies the sector notes give this call"
                        className={`px-1.5 py-0.5 text-[10px] font-medium rounded border transition-all cursor-pointer focus:outline-none ${callFilter
                            ? 'bg-[#4A7AAF] text-white border-[#4A7AAF]'
                            : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'}`}
                    >
                        <option value="">📝 Note's call</option>
                        {CALLS.map(c => (
                            <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)} ({callCounts[c] || 0})</option>
                        ))}
                    </select>
                    {allTags.length > 0 && (
                        <select
                            value={activeTag}
                            onChange={e => setTagFilter(e.target.value)}
                            title="Only companies carrying one of your tags"
                            className={`px-1.5 py-0.5 text-[10px] font-medium rounded border transition-all cursor-pointer focus:outline-none ${activeTag
                                ? 'bg-[#4A7AAF] text-white border-[#4A7AAF]'
                                : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'}`}
                        >
                            <option value="">🏷 My tags</option>
                            {allTags.map(t => <option key={t.tag} value={t.tag}>{t.tag} ({t.count})</option>)}
                        </select>
                    )}
                </div>
            </div>

            {searchQuery && (
                <div className="text-[10px] text-gray-400 -mt-2 ml-1 mb-2">
                    Found {countCompanies(filteredSectors)} matches
                </div>
            )}

            {/* Sector List */}
            {filteredSectors.map((s, index) => (
                <SectorSection
                    key={s.sector}
                    name={s.sector}
                    count={s.companies.length}
                    companies={s.companies}
                    allCompanies={allCompanies}
                    defaultOpen={searchQuery.length > 0 || convictionFilter !== 'ALL' || guidanceOnly || scoreBand !== null || bigMoveOnly || holdingOnly || !!activeTag || !!callFilter}
                >
                    {s.companies.map(co => {
                        const rowKey = `${s.sector}:${co.ticker}`;
                        // With the call filter on, each row shows the note's call beside
                        // today's live price check, so drift is visible at a glance.
                        const ci = callFilter ? callInfo.get(co.name.trim().toLowerCase()) : undefined;
                        const check = ci ? livePriceCheck(ci, { marketCap: co.marketCap, peRatio: co.peRatio }) : 'n/a';
                        return (
                            <React.Fragment key={co.ticker}>
                                {ci && (
                                    <div className="flex items-center gap-1.5 px-3 pt-1.5 -mb-1 text-[10px] bg-white">
                                        <span className="px-1.5 py-px rounded bg-[#D4E5F7] text-[#4A7AAF] font-semibold uppercase tracking-wide">{ci.call}</span>
                                        <span className="text-gray-400">price today</span>
                                        <span className={`px-1.5 py-px rounded border font-medium ${CHECK_STYLE[check]}`}>
                                            {check === 'n/a' ? 'not measured' : check.toLowerCase()}
                                        </span>
                                    </div>
                                )}
                                <CompanyRow
                                    company={co}
                                    colorTheme={COLOR_THEMES.blue}
                                    expanded={openRowKey === rowKey}
                                    onExpandedChange={(open) => setOpenRowKey(open ? rowKey : null)}
                                />
                            </React.Fragment>
                        );
                    })}
                </SectorSection>
            ))}
        </div>
    );
};
