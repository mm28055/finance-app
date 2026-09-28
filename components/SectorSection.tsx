
"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, LayoutGrid, StickyNote, BookOpen, Bell } from 'lucide-react';
import { useSectorChat } from '@/context/SectorChatContext';
import { useNotes } from '@/context/NotesContext';
import { SectorSnapshot } from '@/components/SectorSnapshot';
import { SectorOverview } from '@/components/SectorOverview';
import { getSectorOverview } from '@/lib/sector-overviews';
import { SECTOR_FILING_DAYS } from '@/lib/filings/types';
import { SectorFilings } from '@/components/SectorFilings';

import { EnrichedCompany } from './SectorList';

interface SectorSectionProps {
    name: string;
    count: number;
    companies?: EnrichedCompany[];
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function SectorSection({ name, count, companies = [], children, defaultOpen = false }: SectorSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    // Snapshot and Overview behave as tabs: at most one is open at a time.
    const [panel, setPanel] = useState<'none' | 'snapshot' | 'overview' | 'filings'>('none');
    const { openChat } = useSectorChat();
    const { openSectorNotes } = useNotes();

    // Only sectors with a written note in lib/sector-overviews get the tab.
    const overview = getSectorOverview(name);
    // Filings tab: shown when any company here has a material filing in the last
    // month. Counts come from the headlines already on each company.
    const monthAgo = React.useMemo(() => {
        const d = new Date(); d.setDate(d.getDate() - SECTOR_FILING_DAYS); return d.toISOString().slice(0, 10);
    }, []);
    const recent = companies.flatMap(c => (c.filingHeadlines || []).filter(h => h.date >= monthAgo));
    const filingCount = recent.length;
    const watchCount = recent.filter(h => h.tone === 'watch').length;

    const togglePanel = (next: 'snapshot' | 'overview' | 'filings') => (e: React.MouseEvent) => {
        e.stopPropagation();
        setPanel(p => (p === next ? 'none' : next));
        if (!isOpen) setIsOpen(true);
    };

    // Sync isOpen with defaultOpen so clearing a search re-collapses sectors
    useEffect(() => {
        setIsOpen(defaultOpen);
    }, [defaultOpen]);

    const handleChatClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        openChat(name);
    };

    const handleNotesClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        openSectorNotes(name);
    };

    return (
        <section className="mb-2">
            {/* Sector Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 w-full text-left group focus:outline-none py-2 px-1"
            >
                <div className={`p-0.5 rounded transition-colors ${isOpen ? 'text-[#6B9FCC]' : 'text-gray-400 group-hover:text-[#6B9FCC]'}`}>
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>

                <span className="text-xs font-semibold text-[#4A7AAF] uppercase tracking-wide bg-[#D4E5F7] px-2.5 py-1 rounded-full">
                    {name}
                </span>

                <span className="text-[10px] text-gray-400 font-medium">
                    {count} companies
                </span>

                {/* Actions */}
                <div className="flex items-center gap-1 ml-1">
                    {/* Snapshot Button */}
                    <div
                        onClick={togglePanel('snapshot')}
                        className={`p-1 rounded transition-all cursor-pointer ${panel === 'snapshot' ? 'text-[#6B9FCC] bg-[#D4E5F7]' : 'text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7]'}`}
                        title="View Sector Leaderboard"
                    >
                        <LayoutGrid className="w-3 h-3" />
                    </div>
                    {/* Overview Button — only where a note has been written */}
                    {overview && (
                        <div
                            onClick={togglePanel('overview')}
                            className={`px-1.5 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${panel === 'overview' ? 'text-[#6B9FCC] bg-[#D4E5F7]' : 'text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7]'}`}
                            title={`${name} sector overview`}
                        >
                            <BookOpen className="w-3 h-3" />
                            <span className="text-[9px] font-semibold uppercase tracking-wide">Overview</span>
                        </div>
                    )}
                    {/* Filings Button — only where a filings digest exists */}
                    {filingCount > 0 && (
                        <div
                            onClick={togglePanel('filings')}
                            className={`px-1.5 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${panel === 'filings' ? 'text-[#6B9FCC] bg-[#D4E5F7]' : 'text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7]'}`}
                            title={`${name} material filings`}
                        >
                            <Bell className="w-3 h-3" />
                            <span className="text-[9px] font-semibold uppercase tracking-wide">Filings</span>
                            <span className={`text-[9px] font-semibold px-1 rounded-full ${watchCount ? 'bg-[#F3EEFC] text-[#6B3FA0]' : 'bg-[#EAF2FA] text-[#35577A]'}`}>
                                {filingCount}
                            </span>
                        </div>
                    )}
                    {/* Chat Button */}
                    <div
                        onClick={handleChatClick}
                        className="p-1 text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7] rounded transition-all cursor-pointer"
                        title={`Chat with ${name}`}
                    >
                        <MessageSquare className="w-3 h-3" />
                    </div>
                    {/* Notes Button */}
                    <div
                        onClick={handleNotesClick}
                        className="p-1 text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7] rounded transition-all cursor-pointer"
                        title={`${name} notes`}
                    >
                        <StickyNote className="w-3 h-3" />
                    </div>
                </div>

                <div className="flex-1 h-px bg-gray-200 ml-3 group-hover:bg-[#A5C4E2] transition-colors" />
            </button>

            {/* Snapshot Area */}
            {isOpen && panel === 'snapshot' && (
                <SectorSnapshot sectorName={name} companies={companies} />
            )}

            {/* Sector Overview */}
            {isOpen && panel === 'overview' && overview && (
                <SectorOverview overview={overview} companies={companies} />
            )}

            {/* Material filings */}
            {isOpen && panel === 'filings' && (
                <SectorFilings sector={name} />
            )}

            {/* Company List */}
            {isOpen && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm ml-5 animate-in slide-in-from-top-1 duration-150">
                    {children}
                </div>
            )}
        </section>
    );
}
