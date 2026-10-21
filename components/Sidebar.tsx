"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { ShieldAlert } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import { GeneralNotesList } from './GeneralNotesList';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const { isAdminMode, setAdminMode } = useAdmin();

    return (
        <>
            {/* Backdrop for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in duration-200"
                    onClick={onClose}
                />
            )}

            <aside className={cn(
                "w-[260px] 2xl:w-72 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 overflow-hidden shadow-sm transition-transform duration-300 z-50",
                isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}>
                {/* Close button, phones only (the brand block was removed) */}
                <div className="px-5 pt-4 flex items-center justify-end md:hidden">
                    {/* Mobile Close Button */}
                    <button
                        onClick={onClose}
                        className="p-1 md:hidden hover:bg-gray-100 rounded text-gray-400"
                    >
                        <ShieldAlert className="w-4 h-4 rotate-45" /> {/* Close-ish icon since I don't want to import X yet */}
                    </button>
                </div>

                {/* Title, above the notes. Clicking it reloads the dashboard fresh (and drops any ?company= from a link). */}
                <a href="/" title="Refresh the dashboard" className="block px-5 pt-5 pb-3 border-b border-gray-100 hover:opacity-80">
                    <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Manish Dashboard</h1>
                    <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
                </a>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
                    <GeneralNotesList onNavigate={onClose} />
                </div>

                {/* Admin Toggle — clicking when off triggers next-auth sign-in;
                    clicking when on signs out. Anyone sees the toggle, but only
                    valid credentials unlock edit mode. */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1.5">
                            <ShieldAlert className="w-3 h-3" />
                            {isAdminMode ? 'Edit Mode' : 'Sign in to edit'}
                        </span>
                        <button
                            onClick={() => setAdminMode(!isAdminMode)}
                            className={cn(
                                "w-8 h-4 rounded-full relative transition-colors duration-200 ease-in-out",
                                isAdminMode ? "bg-[#6B9FCC]" : "bg-gray-300"
                            )}
                        >
                            <div className={cn(
                                "w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform duration-200 shadow-sm",
                                isAdminMode ? "translate-x-4" : "translate-x-0.5"
                            )}></div>
                        </button>
                    </div>
                </div>

            </aside>
        </>
    );
};
