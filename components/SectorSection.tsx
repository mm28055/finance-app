
"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, LayoutGrid, StickyNote, BookOpen, Bell } from 'lucide-react';
import { useSectorChat } from '@/context/SectorChatContext';
import { useNotes } from '@/context/NotesContext';
import { SectorSnapshot } from '@/components/SectorSnapshot';
import { SectorOverview } from '@/components/SectorOverview';
import type { SectorOverview as SectorOverviewData } from '@/lib/sector-overviews/shared';
import { loadSectorNote } from '@/lib/sector-notes-client';
import { SECTOR_FILING_DAYS } from '@/lib/filings/types';
import { SectorFilings } from '@/components/SectorFilings';

import { EnrichedCompany } from './SectorList';

interface SectorSectionProps {
    name: string;
    /** The sector has a written note (lib/sector-overviews), so it gets the Overview tab. */
    hasNote?: boolean;
    count: number;
    companies?: EnrichedCompany[];
    /** Every company on the dashboard, for notes that discuss a company since moved elsewhere. */
    allCompanies?: EnrichedCompany[];
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function SectorSection({ name, hasNote = false, count, companies = [], allCompanies, children, defaultOpen = false }: SectorSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    // Snapshot and Overview behave as tabs: at most one is open at a time.
    const [panel, setPanel] = useState<'none' | 'snapshot' | 'overview' | 'filings'>('none');
    const { openChat } = useSectorChat();
    const { openSectorNotes } = useNotes();

    // Only sectors with a written note in lib/sector-overviews get the tab. The note itself
    // is fetched the first time the tab opens (pointing at the tab starts it early).
    const [overview, setOverview] = useState<SectorOverviewData | null>(null);
    const [overviewFailed, setOverviewFailed] = useState(false);
    const [overviewTry, setOverviewTry] = useState(0);
    useEffect(() => {
        if (!hasNote || !isOpen || panel !== 'overview' || overview) return;
        let cancelled = false;
        setOverviewFailed(false);
        loadSectorNote(name)
            .then(note => { if (!cancelled) setOverview(note); })
            .catch(err => { console.error('Failed to load the sector note', err); if (!cancelled) setOverviewFailed(true); });
        return () => { cancelled = true; };
    }, [hasNote, isOpen, panel, overview, name, overviewTry]);
    // Filings tab: shown when any company here has a material filing in the last
    // month. Counts come from the headlines already on each company.
    const monthAgo = React.useMemo(() => {
        const d = new Date(); d.setDate(d.getDate() - SECTOR_FILING_DAYS); return d.toISOString().slice(0, 10);
    }, []);
    const recent = companies.flatMap(c => (c.filingHeadlines || []).filter(h => h.date >= monthAgo));
    const filingCount = recent.length;

    const togglePanel = (next: 'snapshot' | 'overview' | 'filings') => (e: React.MouseEvent) => {
        e.stopPropagation();
        setPanel(p => (p === next ? 'none' : next));
        if (!isOpen) setIsOpen(true);
    };

    // Sync isOpen with defaultOpen so clearing a search re-collapses sectors
    useEffect(() => {
        setIsOpen(defaultOpen);
        if (!defaultOpen) setPanel('none');
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
            {/* Sector Header: on a phone one line that slides sideways */}
            <div className="max-md:overflow-x-auto max-md:overscroll-x-contain max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
            <button
                // One click on the sector name always lands on the plain company list. With an Overview,
                // results table or Filings tab open, the click closes that tab and keeps the sector
                // open; otherwise it opens or closes the sector.
                onClick={() => {
                    if (isOpen && panel !== 'none') { setPanel('none'); return; }
                    setPanel('none');
                    setIsOpen(!isOpen);
                }}
                className="flex items-center gap-2 w-full text-left group focus:outline-none py-2 px-1 max-md:w-max max-md:pr-4"
            >
                <div className={`p-0.5 rounded transition-colors ${isOpen ? 'text-[#6B9FCC]' : 'text-gray-400 group-hover:text-[#6B9FCC]'}`}>
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>

                {/* Fixed-width columns, so the count and the buttons line up down the list as they do in the company rows */}
                <span className="w-60 shrink-0 flex max-md:w-auto">
                    <span className="truncate text-xs font-semibold text-[#4A7AAF] uppercase tracking-wide bg-[#D4E5F7] px-2.5 py-1 rounded-full" title={name}>
                        {name}
                    </span>
                </span>

                <span className="w-20 shrink-0 max-md:w-auto max-md:whitespace-nowrap text-[10px] text-gray-400 font-medium tabular-nums">
                    {count} companies
                </span>

                {/* Actions */}
                <div className="flex items-center gap-1">
                    {/* Snapshot Button */}
                    <div
                        onClick={togglePanel('snapshot')}
                        className={`p-1 rounded transition-all cursor-pointer ${panel === 'snapshot' ? 'text-[#6B9FCC] bg-[#D4E5F7]' : 'text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7]'}`}
                        title="View Sector Leaderboard"
                    >
                        <LayoutGrid className="w-3 h-3" />
                    </div>
                    {/* Overview Button — only where a note has been written (its column stays, so the rest line up) */}
                    <span className="w-20 shrink-0 flex">
                    {hasNote && (
                        <div
                            onClick={togglePanel('overview')}
                            onPointerEnter={() => { loadSectorNote(name).catch(() => {}); }}
                            className={`px-1.5 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${panel === 'overview' ? 'text-[#6B9FCC] bg-[#D4E5F7]' : 'text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7]'}`}
                            title={`${name} sector overview`}
                        >
                            <BookOpen className="w-3 h-3" />
                            <span className="text-[9px] font-semibold uppercase tracking-wide">Overview</span>
                        </div>
                    )}
                    </span>
                    {/* Filings Button — only where a filings digest exists */}
                    <span className="w-[92px] shrink-0 flex">
                    {filingCount > 0 && (
                        <div
                            onClick={togglePanel('filings')}
                            className={`px-1.5 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${panel === 'filings' ? 'text-[#6B9FCC] bg-[#D4E5F7]' : 'text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7]'}`}
                            title={`${name} material filings`}
                        >
                            <Bell className="w-3 h-3" />
                            <span className="text-[9px] font-semibold uppercase tracking-wide">Filings</span>
                            <span className={`text-[9px] font-semibold px-1 rounded-full bg-gray-100 text-gray-400`}>
                                {filingCount}
                            </span>
                        </div>
                    )}
                    </span>
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

                <div className="flex-1 max-md:hidden h-px bg-gray-200 ml-3 group-hover:bg-[#A5C4E2] transition-colors" />
            </button>
            </div>

            {/* Snapshot Area */}
            {isOpen && panel === 'snapshot' && (
                <SectorSnapshot sectorName={name} companies={companies} />
            )}

            {/* Sector Overview */}
            {isOpen && panel === 'overview' && hasNote && (
                overview ? (
                    <SectorOverview overview={overview} companies={companies} lookup={allCompanies} />
                ) : (
                    <div className="ml-5 max-md:ml-0 mb-2 px-4 py-6 bg-white border border-gray-200 rounded-xl text-xs text-gray-400">
                        {overviewFailed ? (
                            <>The note did not load. <button onClick={() => setOverviewTry(n => n + 1)} className="text-[#4A7AAF] hover:underline">Try again</button></>
                        ) : 'Loading the note…'}
                    </div>
                )
            )}

            {/* Material filings */}
            {isOpen && panel === 'filings' && (
                <SectorFilings sector={name} />
            )}

            {/* Company List */}
            {isOpen && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm ml-5 max-md:ml-0 animate-in slide-in-from-top-1 duration-150">
                    {children}
                </div>
            )}
        </section>
    );
}
