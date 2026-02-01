"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { CompanyRow } from './CompanyRow';
import type { CompanyFinancials } from './FinancialMatrix';
import { AnalysisResult } from '@/lib/ai-analyst';
import { SectorSection } from './SectorSection';
import { useAdmin } from '@/context/AdminContext';
import { AddCompanyModal } from './AddCompanyModal';
import { Plus, Search } from 'lucide-react';

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

    // Register all sector names in context
    useEffect(() => {
        const sectorNames = sectors.map(s => s.sector);
        setAllSectors(sectorNames);
    }, [sectors, setAllSectors]);

    // Filter companies based on search
    const filteredSectors = useMemo(() => {
        if (!searchQuery.trim()) return sectors;

        const query = searchQuery.toLowerCase();
        return sectors.map(sector => ({
            ...sector,
            companies: sector.companies.filter(co =>
                co.name.toLowerCase().includes(query) ||
                co.ticker.toLowerCase().includes(query)
            )
        })).filter(sector => sector.companies.length > 0);
    }, [sectors, searchQuery]);

    // Count total companies
    const totalCompanies = sectors.reduce((sum, s) => sum + s.companies.length, 0);

    if (sectors.length === 0) {
        return <div className="text-gray-400 text-center py-10 text-sm">No companies found.</div>;
    }

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            <div className="sticky top-0 bg-[#FAFBFC] z-10 pb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={`Search ${totalCompanies} companies...`}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7] transition-all"
                    />
                </div>
                {searchQuery && (
                    <div className="text-[10px] text-gray-400 mt-2 ml-1">
                        Found {filteredSectors.reduce((sum, s) => sum + s.companies.length, 0)} matches
                    </div>
                )}
            </div>

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
                        <CompanyRow key={co.ticker} company={co} />
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
