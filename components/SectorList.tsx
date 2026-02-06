"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { CompanyRow } from './CompanyRow';
import type { CompanyFinancials } from './FinancialMatrix';
import { AnalysisResult } from '@/lib/ai-analyst';
import { SectorSection } from './SectorSection';
import { useAdmin } from '@/context/AdminContext';
import { AddCompanyModal } from './AddCompanyModal';
import { Plus, Search, Palette } from 'lucide-react';

export const COLOR_THEMES = {
    blue: { name: 'Blue', bg: 'bg-[#D4E5F7]', text: 'text-[#4A7AAF]', dot: 'bg-[#4A7AAF]' },
    emerald: { name: 'Emerald', bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-600' },
    amber: { name: 'Amber', bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-600' },
    rose: { name: 'Rose', bg: 'bg-rose-100', text: 'text-rose-700', dot: 'bg-rose-600' },
    purple: { name: 'Purple', bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-600' },
};

export type ColorThemeKey = keyof typeof COLOR_THEMES;

export interface EnrichedCompany {
    id: string;
    name: string;
    ticker: string;
    price: number;
    priceChange: number;
    financials: CompanyFinancials;
    analysis?: AnalysisResult;
    profile?: string;
    summary?: {
        quarter: string;
        text: string;
    }
    history?: {
        quarter: string;
        analysis: AnalysisResult;
        financials: CompanyFinancials;
        pdfUrl?: string | null;
    }[];
    marketCap?: number;
    currentPrice?: number;
    bookValue?: number;
    peRatio?: number;
    pbRatio?: number;
    dividendYield?: number;
    geminiScore?: number;
}

export interface SectorData {
    sector: string;
    stats: { companies: number; avgGrowth: string; sentiment: number };
    companies: EnrichedCompany[];
}

export const SectorList = ({ sectors }: { sectors: SectorData[] }) => {
    const { setAllSectors, isAdminMode } = useAdmin();
    const [showNewSectorModal, setShowNewSectorModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTheme, setSelectedTheme] = useState<ColorThemeKey>('blue');

    const [sortBy, setSortBy] = useState<'marketCap' | 'gemini'>('marketCap');

    // Register all sector names in context
    useEffect(() => {
        const sectorNames = sectors.map(s => s.sector);
        setAllSectors(sectorNames);
    }, [sectors, setAllSectors]);

    // Filter companies based on search AND sort them
    const filteredSectors = useMemo(() => {
        let result = sectors;

        // 1. Filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.map(sector => ({
                ...sector,
                companies: sector.companies.filter(co =>
                    co.name.toLowerCase().includes(query) ||
                    co.ticker.toLowerCase().includes(query)
                )
            })).filter(sector => sector.companies.length > 0);
        }

        // 2. Sort
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
    }, [sectors, searchQuery, sortBy]);

    // Count total companies
    const totalCompanies = sectors.reduce((sum, s) => sum + s.companies.length, 0);

    if (sectors.length === 0) {
        return <div className="text-gray-400 text-center py-10 text-sm">No companies found.</div>;
    }

    return (
        <div className="space-y-4">
            {/* Search Bar & Sort Toggle */}
            <div className="sticky top-0 bg-[#FAFBFC] z-10 pb-4 flex gap-3 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={`Search ${totalCompanies} companies...`}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7] transition-all"
                    />
                </div>

                {/* Sort Toggle */}
                <div className="bg-white border border-gray-200 p-1 rounded-xl flex items-center shadow-sm">
                    <button
                        onClick={() => setSortBy('marketCap')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${sortBy === 'marketCap'
                            ? 'bg-gray-100 text-gray-800'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Market Cap
                    </button>
                    <button
                        onClick={() => setSortBy('gemini')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${sortBy === 'gemini'
                            ? 'bg-[#E0F2FE] text-[#0284C7]'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse"></span>
                        Gemini Rank
                    </button>
                </div>
            </div>

            {searchQuery && (
                <div className="text-[10px] text-gray-400 -mt-2 ml-1 mb-2">
                    Found {filteredSectors.reduce((sum, s) => sum + s.companies.length, 0)} matches
                </div>
            )}

            {/* Sector List */}
            {filteredSectors.map((s, index) => (
                <SectorSection
                    key={s.sector}
                    name={s.sector}
                    count={s.companies.length}
                    companies={s.companies}
                    defaultOpen={searchQuery.length > 0 || index === 0}
                >
                    {s.companies.map(co => (
                        <CompanyRow key={co.ticker} company={co} colorTheme={COLOR_THEMES[selectedTheme]} />
                    ))}
                </SectorSection>
            ))}

            {/* Add New Sector (Admin Mode) */}
            {isAdminMode && (
                <button
                    onClick={() => setShowNewSectorModal(true)}
                    className="w-full py-3 flex items-center justify-center gap-2 text-[#6B9FCC] hover:bg-[#D4E5F7] border border-dashed border-gray-300 rounded-xl text-xs font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add New Sector
                </button>
            )}

            <AddCompanyModal
                isOpen={showNewSectorModal}
                onClose={() => setShowNewSectorModal(false)}
                defaultSector=""
            />
        </div>
    );
};
