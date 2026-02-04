
"use client";
import React from 'react';
import { FileText } from 'lucide-react';

export function TranscriptStats({ stats }: { stats: { name: string; count: number }[] }) {
    if (!stats || stats.length === 0) return null;

    return (
        <div className="flex items-center gap-3">
            {stats.map((s) => (
                <div key={s.name} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="w-6 h-6 rounded-md bg-[#F0F7FF] flex items-center justify-center text-[#6B9FCC]">
                        <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-[10px] text-gray-400 font-semibold uppercase">{s.name}</span>
                        <span className="text-sm text-gray-800 font-bold">{s.count}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
