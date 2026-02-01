"use client";
import React, { createContext, useContext, useState } from 'react';

interface SectorChatContextType {
    isOpen: boolean;
    activeSector: string | null;
    openChat: (sector: string) => void;
    closeChat: () => void;
}

const SectorChatContext = createContext<SectorChatContextType | undefined>(undefined);

export function SectorChatProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSector, setActiveSector] = useState<string | null>(null);

    const openChat = (sector: string) => {
        setActiveSector(sector);
        setIsOpen(true);
    };

    const closeChat = () => {
        setIsOpen(false);
        setActiveSector(null);
    };

    return (
        <SectorChatContext.Provider value={{ isOpen, activeSector, openChat, closeChat }}>
            {children}
        </SectorChatContext.Provider>
    );
}

export function useSectorChat() {
    const context = useContext(SectorChatContext);
    if (!context) {
        throw new Error("useSectorChat must be used within a SectorChatProvider");
    }
    return context;
}
