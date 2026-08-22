"use client";
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { GENERAL_NOTE_KEY, defaultNoteTitle } from '@/lib/notes';

export { GENERAL_NOTE_KEY };

interface ActiveNote {
    scope: 'SECTOR' | 'GENERAL';
    key: string;
    title: string;
}

export interface NoteSummary {
    key: string;
    title: string;
}

interface NotesContextType {
    isOpen: boolean;
    activeNote: ActiveNote | null;
    generalNotes: NoteSummary[];
    openSectorNotes: (sector: string) => void;
    openGeneralNote: (key: string, title: string) => void;
    createGeneralNote: (title: string) => Promise<void>;
    renameGeneralNote: (key: string, title: string) => Promise<void>;
    deleteGeneralNote: (key: string) => Promise<void>;
    closeNotes: () => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNote, setActiveNote] = useState<ActiveNote | null>(null);
    const [generalNotes, setGeneralNotes] = useState<NoteSummary[]>([]);

    const refreshGeneralNotes = useCallback(async () => {
        try {
            const res = await fetch('/api/notes?scope=GENERAL&list=1');
            const data = await res.json();
            if (Array.isArray(data?.notes)) {
                setGeneralNotes(data.notes.map((n: any) => ({ key: n.key, title: n.title })));
            }
        } catch (e) {
            console.error('Failed to load notes list:', e);
        }
    }, []);

    useEffect(() => { refreshGeneralNotes(); }, [refreshGeneralNotes]);

    const openSectorNotes = (sector: string) => {
        setActiveNote({ scope: 'SECTOR', key: sector, title: `${sector} Notes` });
        setIsOpen(true);
    };

    const openGeneralNote = (key: string, title: string) => {
        setActiveNote({ scope: 'GENERAL', key, title });
        setIsOpen(true);
    };

    const createGeneralNote = useCallback(async (title: string) => {
        const name = title.trim() || defaultNoteTitle("");
        const key = (globalThis.crypto?.randomUUID?.() ?? `note-${Date.now()}`);
        // Write the row straight away so the note survives a reload even if the
        // user never types anything into it.
        await fetch('/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ scope: 'GENERAL', key, title: name, content: "" })
        });
        setGeneralNotes(prev => [...prev, { key, title: name }]);
        setActiveNote({ scope: 'GENERAL', key, title: name });
        setIsOpen(true);
    }, []);

    const renameGeneralNote = useCallback(async (key: string, title: string) => {
        const name = title.trim();
        if (!name) return;
        setGeneralNotes(prev => prev.map(n => (n.key === key ? { ...n, title: name } : n)));
        setActiveNote(prev => (prev && prev.scope === 'GENERAL' && prev.key === key ? { ...prev, title: name } : prev));
        await fetch('/api/notes', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ scope: 'GENERAL', key, title: name })
        });
    }, []);

    const deleteGeneralNote = useCallback(async (key: string) => {
        setGeneralNotes(prev => prev.filter(n => n.key !== key));
        setActiveNote(prev => {
            if (prev && prev.scope === 'GENERAL' && prev.key === key) {
                setIsOpen(false);
                return null;
            }
            return prev;
        });
        await fetch(`/api/notes?scope=GENERAL&key=${encodeURIComponent(key)}`, { method: 'DELETE' });
    }, []);

    const closeNotes = () => {
        setIsOpen(false);
        setActiveNote(null);
    };

    return (
        <NotesContext.Provider value={{
            isOpen, activeNote, generalNotes,
            openSectorNotes, openGeneralNote,
            createGeneralNote, renameGeneralNote, deleteGeneralNote,
            closeNotes
        }}>
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
