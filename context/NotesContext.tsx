"use client";
import React, { createContext, useContext, useState } from 'react';

export const GENERAL_NOTE_KEY = "__general__";

interface ActiveNote {
    scope: 'SECTOR' | 'GENERAL';
    key: string;
    title: string;
}

interface NotesContextType {
    isOpen: boolean;
    activeNote: ActiveNote | null;
    openSectorNotes: (sector: string) => void;
    openGeneralNotes: () => void;
    closeNotes: () => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNote, setActiveNote] = useState<ActiveNote | null>(null);

    const openSectorNotes = (sector: string) => {
        setActiveNote({ scope: 'SECTOR', key: sector, title: `${sector} Notes` });
        setIsOpen(true);
    };

    const openGeneralNotes = () => {
        setActiveNote({ scope: 'GENERAL', key: GENERAL_NOTE_KEY, title: 'General Notes' });
        setIsOpen(true);
    };

    const closeNotes = () => {
        setIsOpen(false);
        setActiveNote(null);
    };

    return (
        <NotesContext.Provider value={{ isOpen, activeNote, openSectorNotes, openGeneralNotes, closeNotes }}>
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error("useNotes must be used within a NotesProvider");
    }
    return context;
}
