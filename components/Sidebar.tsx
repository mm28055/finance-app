"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { Activity, ShieldAlert, RefreshCw, LayoutGrid, BrainCircuit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import { toast } from 'sonner';
import { PromptEditor } from './PromptEditor';
import { SyncStatusPanel } from './SyncStatusPanel';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const router = useRouter();
    const { isAdminMode, setAdminMode } = useAdmin();
    const [showPromptEditor, setShowPromptEditor] = React.useState(false);
    const [showSyncPanel, setShowSyncPanel] = React.useState(false);

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
                "w-60 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 overflow-hidden shadow-sm transition-transform duration-300 z-50",
                isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}>
                {/* Brand */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-[#6B9FCC] mb-0.5">
                            <Activity className="w-4 h-4" />
                            <span className="font-semibold text-sm tracking-tight text-gray-800">Analyzer</span>
                        </div>
                        <p className="text-gray-400 text-[10px]">v1.0 • Strategic Intelligence</p>
                    </div>
                    {/* Mobile Close Button */}
                    <button
                        onClick={onClose}
                        className="p-1 md:hidden hover:bg-gray-100 rounded text-gray-400"
                    >
                        <ShieldAlert className="w-4 h-4 rotate-45" /> {/* Close-ish icon since I don't want to import X yet */}
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
                    <div className="px-4 mb-2 text-[10px] font-medium text-gray-400 uppercase tracking-wider">Navigation</div>
                    <div className="space-y-0.5 px-3">
                        <button
                            onClick={() => {
                                router.push('/');
                                if (onClose) onClose();
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#D4E5F7] text-gray-600 hover:text-gray-900 transition-colors text-xs font-medium"
                        >
                            Dashboard
                        </button>
                        {/* View Logs Trigger (Only if not running, to view past logs) */}
                        {isAdminMode && (
                            <button
                                onClick={() => setShowSyncPanel(true)}
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#D4E5F7] text-gray-600 hover:text-gray-900 transition-colors text-xs font-medium flex items-center gap-2"
                            >
                                Sync Logs
                            </button>
                        )}
                    </div>
                </div>

                {/* Admin Toggle (Only visible if unlocked) */}
                {/* Secret Unlock: Visit /?unlock=tattva to reveal */}
                {typeof window !== 'undefined' && (localStorage.getItem('admin_secret') === 'tattva_master' || new URLSearchParams(window.location.search).get('unlock') === 'tattva') && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1.5">
                                <ShieldAlert className="w-3 h-3" />
                                Edit Mode
                            </span>
                            <button
                                onClick={() => {
                                    // Persist unlock
                                    localStorage.setItem('admin_secret', 'tattva_master');
                                    setAdminMode(!isAdminMode);
                                }}
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
                        {isAdminMode && (
                            <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                                <div className="text-[10px] text-gray-400 font-medium uppercase mb-2 tracking-wider">Sync Controls</div>

                                {/* Global Smart Sync */}
                                <button
                                    onClick={async () => {
                                        setShowSyncPanel(true); // Open Panel Immediately
                                        const id = toast.loading('Global Smart Sync Started', { description: 'Monitor progress in the panel >' });
                                        try {
                                            // Calls the updated /api/sync/tijori which now runs smart-sync.ts
                                            const res = await fetch('/api/sync/tijori', { method: 'POST' });
                                            const data = await res.json();
                                            if (data.success) {
                                                toast.dismiss(id);
                                            } else {
                                                toast.error('Sync Failed', { id, description: data.error });
                                            }
                                        } catch (e) {
                                            toast.error('Network Error', { id });
                                        }
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#6B9FCC] text-white hover:bg-[#4A7AAF] transition-all text-[11px] font-medium shadow-sm active:scale-95 group"
                                >
                                    <RefreshCw className="w-3.5 h-3.5 group-hover:animate-spin" />
                                    Global Smart Sync
                                </button>
                                {/* Configure AI */}
                                <button
                                    onClick={() => setShowPromptEditor(true)}
                                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-[#F0F7FF] hover:border-[#6B9FCC] hover:text-[#6B9FCC] transition-all text-[11px] font-medium group"
                                >
                                    <BrainCircuit className="w-3.5 h-3.5 group-hover:text-purple-500" />
                                    Configure AI Brain
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {showPromptEditor && <PromptEditor onClose={() => setShowPromptEditor(false)} />}
                <SyncStatusPanel isOpen={showSyncPanel} onClose={() => setShowSyncPanel(false)} />
            </aside>
        </>
    );
};
