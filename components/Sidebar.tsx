"use client";
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { LayoutDashboard, List, Activity, Settings, ShieldAlert, EyeOff } from 'lucide-react';

export const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <aside className="w-64 bg-neutral-950 border-r border-neutral-800 flex flex-col h-screen fixed left-0 top-0 overflow-hidden">
            {/* Brand */}
            <div className="p-6 border-b border-neutral-800">
                <div className="flex items-center gap-2 text-blue-500 mb-1">
                    <Activity className="w-5 h-5" />
                    <span className="font-bold text-lg tracking-tight text-white">TIJORI APP</span>
                </div>
                <p className="text-neutral-500 text-xs">v1.0.0 • Localhost</p>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="px-4 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Main</div>
                <nav className="space-y-1 px-2">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded-md bg-neutral-800/50">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                    </button>
                    <a href="/transcripts" className="flex items-center gap-3 w-full px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800 rounded-md">
                        <List className="w-4 h-4" />
                        Transcripts
                    </a>
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800 rounded-md">
                        <List className="w-4 h-4" />
                        Unsorted Inbox
                        <span className="ml-auto bg-neutral-800 text-neutral-500 text-[10px] px-1.5 py-0.5 rounded-full">12</span>
                    </button>
                </nav>

                <div className="mt-8 px-4 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Live Feed</div>
                <div className="px-4 space-y-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="text-xs text-neutral-400 border-l-2 border-neutral-800 pl-3">
                            <div className="text-white font-medium">Reliance Ind</div>
                            <div className="text-neutral-500 mt-0.5">Q3 Transcript processed.</div>
                            <div className="text-[10px] text-neutral-600 mt-1">2m ago</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Admin Toggle */}
            <div className="p-4 border-t border-neutral-800 bg-neutral-900/30">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-neutral-400 flex items-center gap-2">
                        <ShieldAlert className="w-3 h-3" />
                        Admin Mode
                    </span>
                    <button
                        onClick={() => setIsAdmin(!isAdmin)}
                        className={cn(
                            "w-8 h-4 rounded-full relative transition-colors duration-200 ease-in-out",
                            isAdmin ? "bg-red-600" : "bg-neutral-700"
                        )}
                    >
                        <div className={cn(
                            "w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform duration-200",
                            isAdmin ? "left-4.5 translate-x-3.5" : "left-0.5"
                        )}></div>
                    </button>
                </div>
                {isAdmin && (
                    <div className="text-[10px] text-red-400 mt-1 animate-pulse">
                        Editing Enabled: Drag to move, Delete active.
                    </div>
                )}
            </div>
        </aside>
    );
};
