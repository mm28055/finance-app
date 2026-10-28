"use client";
import React, { useEffect, useState } from 'react';
import { EyeOff } from 'lucide-react';
import { cn } from "@/lib/utils";

// Must match SHOW_HIDDEN_COOKIE in lib/hidden.ts (that file is server-only).
const COOKIE = 'showHidden';

const readCookie = () => typeof document !== 'undefined' && document.cookie.split('; ').some(c => c === `${COOKIE}=1`);

// The full-view switch: on, every list also shows the hidden companies (lib/hidden).
// Remembered on this device; the page reloads so every list and panel follows at once.
export const ShowHiddenSwitch = () => {
    const [on, setOn] = useState(false);
    const [count, setCount] = useState<number | null>(null);
    useEffect(() => {
        setOn(readCookie());
        fetch('/api/hidden').then(r => r.json()).then(d => setCount(d.count ?? null)).catch(() => {});
    }, []);
    const toggle = () => {
        const next = !on;
        document.cookie = next
            ? `${COOKIE}=1; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
            : `${COOKIE}=; path=/; max-age=0; samesite=lax`;
        setOn(next);
        window.location.reload();
    };

    return (
        <div className="flex items-center justify-between mb-3">
            <span
                className="text-[10px] font-medium text-gray-500 flex items-center gap-1.5"
                title="Hidden companies are still tracked every night; this only changes what the lists show"
            >
                <EyeOff className="w-3 h-3" />
                {on ? 'Showing hidden' : 'Show hidden'}{count !== null ? ` (${count})` : ''}
            </span>
            <button
                onClick={toggle}
                aria-label={on ? 'Hide the hidden companies again' : 'Show the hidden companies'}
                className={cn(
                    "w-8 h-4 rounded-full relative transition-colors duration-200 ease-in-out",
                    on ? "bg-[#6B9FCC]" : "bg-gray-300"
                )}
            >
                <div className={cn(
                    "w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform duration-200 shadow-sm",
                    on ? "translate-x-4" : "translate-x-0.5"
                )}></div>
            </button>
        </div>
    );
};
