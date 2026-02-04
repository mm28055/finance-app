
"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, Plus, LayoutGrid, RefreshCw } from 'lucide-react';
import { useSectorChat } from '@/context/SectorChatContext';
import { SectorSnapshot } from '@/components/SectorSnapshot';
import { useAdmin } from '@/context/AdminContext';
import { AddCompanyModal } from './AddCompanyModal';
import { toast } from 'sonner';

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
    const [isSyncing, setIsSyncing] = useState(false);
    const { openChat } = useSectorChat();
    const { isAdminMode } = useAdmin();

    const handleChatClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        openChat(name);
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
                    {/* Sync Financials Button - Available for all sectors */}
                    <div
                        onClick={async (e) => {
                            e.stopPropagation();
                            if (isSyncing) return;
                            setIsSyncing(true);
                            toast.info('Syncing financials...', { description: 'Extracting from PDFs + Screener' });
                            try {
                                const res = await fetch(`/api/sync/financials?sector=${encodeURIComponent(name)}`, { method: 'POST' });
                                const data = await res.json();
                                if (data.success) {
                                    toast.success(`Synced ${data.count} companies`, { description: 'Refreshing to update dashboard...' });
                                    setTimeout(() => window.location.reload(), 1500);
                                } else {
                                    toast.error('Sync failed', { description: data.error });
                                }
                            } catch (err) {
                                toast.error('Network error');
                            } finally {
                                setIsSyncing(false);
                            }
                        }}
                        className={`p-1 rounded transition-all cursor-pointer ${isSyncing ? 'text-[#6B9FCC] animate-spin' : 'text-gray-400 hover:text-green-600 hover:bg-green-50'}`}
                        title="Sync Financials (Gemini + Screener)"
                    >
                        <RefreshCw className="w-3 h-3" />
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
