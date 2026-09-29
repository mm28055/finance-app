"use client";
import { MessageCircleQuestion } from 'lucide-react';
import { useSectorChat } from '@/context/SectorChatContext';

// Header button: the chat across every sector, answering from the dashboard's own research.
export function AskAllButton() {
    const { openChat } = useSectorChat();
    return (
        <button onClick={() => openChat('All sectors')}
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#A5C4E2] text-[#4A7AAF] px-2.5 py-1 rounded-lg text-[11px] font-medium">
            <MessageCircleQuestion className="w-3.5 h-3.5" /> Ask
        </button>
    );
}
