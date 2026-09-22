
"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, LayoutGrid, StickyNote, BookOpen } from 'lucide-react';
import { useSectorChat } from '@/context/SectorChatContext';
import { useNotes } from '@/context/NotesContext';
import { SectorSnapshot } from '@/components/SectorSnapshot';
import { SectorOverview } from '@/components/SectorOverview';
import { getSectorOverview, getSectorOverviewDraft } from '@/lib/sector-overviews';

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
    const [panel, setPanel] = useState<'none' | 'snapshot' | 'overview'>('none');
    const { openChat } = useSectorChat();
    const { openSectorNotes } = useNotes();

    // Only sectors with a written note in lib/sector-overviews get the tab.
    const overview = getSectorOverview(name);
    // A rewrite under review sits beside the published note behind a switch.
    const draft = getSectorOverviewDraft(name);
    const [showDraft, setShowDraft] = useState(false);

    const togglePanel = (next: 'snapshot' | 'overview') => (e: React.MouseEvent) => {
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
                <>
                    {draft && (
                        <div className="ml-5 mb-2 flex items-center gap-1.5 text-[11px]" role="tablist">
                            <span className="text-gray-400 mr-1">Version:</span>
                            {[{ key: false, label: 'Original' }, { key: true, label: 'New layout (draft)' }].map(o => (
                                <button
                                    key={o.label}
                                    role="tab"
                                    aria-selected={showDraft === o.key}
                                    onClick={() => setShowDraft(o.key)}
                                    className={`px-2.5 py-1 rounded-md border transition-colors ${showDraft === o.key
                                        ? 'bg-[#4A7AAF] border-[#4A7AAF] text-white font-semibold'
                                        : 'bg-white border-gray-200 text-gray-600 hover:border-[#A5C4E2]'}`}
                                >
                                    {o.label}
                                </button>
                            ))}
                        </div>
                    )}
                    <SectorOverview
                        key={showDraft && draft ? 'draft' : 'original'}
                        overview={showDraft && draft ? draft : overview}
                        companies={companies}
                    />
                </>
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
