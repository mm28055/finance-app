
"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, Plus, LayoutGrid, StickyNote } from 'lucide-react';
import { useSectorChat } from '@/context/SectorChatContext';
import { useNotes } from '@/context/NotesContext';
import { SectorSnapshot } from '@/components/SectorSnapshot';
import { useAdmin } from '@/context/AdminContext';
import { AddCompanyModal } from './AddCompanyModal';

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
    const [showSnapshot, setShowSnapshot] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const { openChat } = useSectorChat();
    const { openSectorNotes } = useNotes();
    const { isAdminMode } = useAdmin();

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

    const handleAddClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowAddModal(true);
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
                        onClick={(e) => { e.stopPropagation(); setShowSnapshot(!showSnapshot); }}
                        className={`p-1 rounded transition-all cursor-pointer ${showSnapshot ? 'text-[#6B9FCC] bg-[#D4E5F7]' : 'text-gray-400 hover:text-[#6B9FCC] hover:bg-[#D4E5F7]'}`}
                        title="View Sector Leaderboard"
                    >
                        <LayoutGrid className="w-3 h-3" />
                    </div>
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
            {isOpen && showSnapshot && (
                <SectorSnapshot sectorName={name} companies={companies} />
            )}

            {/* Company List */}
            {isOpen && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm ml-5 animate-in slide-in-from-top-1 duration-150">
                    {children}

                    {/* Add Company Button (Admin Mode) */}
                    {isAdminMode && (
                        <button
                            onClick={handleAddClick}
                            className="w-full py-2.5 flex items-center justify-center gap-1.5 text-[#6B9FCC] hover:bg-[#D4E5F7] border-t border-gray-100 text-xs font-medium transition-colors"
                        >
                            <Plus className="w-3.5 h-3.5" />
                            Add Company
                        </button>
                    )}
                </div>
            )}

            <AddCompanyModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                defaultSector={name}
            />
        </section>
    );
}
