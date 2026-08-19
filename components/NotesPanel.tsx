"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, StickyNote, Minus, Check, Loader2 } from 'lucide-react';
import { useNotes } from '@/context/NotesContext';

type SaveState = 'idle' | 'loading' | 'saving' | 'saved';

export function NotesPanel() {
    const { isOpen, activeNote, closeNotes } = useNotes();
    const [isMinimized, setIsMinimized] = useState(false);
    const [content, setContent] = useState("");
    const [state, setState] = useState<SaveState>('idle');

    // Tracks whether the text in the box came from the user (safe to save) or
    // from the last fetch (saving it back would be a pointless write).
    const isDirty = useRef(false);
    const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const noteRef = useRef(activeNote);
    const contentRef = useRef(content);
    noteRef.current = activeNote;
    contentRef.current = content;

    const persist = useCallback(async (text: string, note: typeof activeNote) => {
        if (!note) return;
        setState('saving');
        try {
            await fetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ scope: note.scope, key: note.key, content: text })
            });
            isDirty.current = false;
            setState('saved');
        } catch (e) {
            console.error('Failed to save note:', e);
            setState('idle');
        }
    }, []);

    // Load the note whenever the target changes
    useEffect(() => {
        if (!isOpen || !activeNote) return;
        isDirty.current = false;
        setContent("");
        setState('loading');
        fetch(`/api/notes?scope=${encodeURIComponent(activeNote.scope)}&key=${encodeURIComponent(activeNote.key)}`)
            .then(res => res.json())
            .then(data => {
                if (typeof data?.content === 'string') setContent(data.content);
            })
            .catch(err => console.error('Failed to load note:', err))
            .finally(() => setState('idle'));
    }, [isOpen, activeNote?.scope, activeNote?.key]);

    // Debounced autosave
    useEffect(() => {
        if (!isDirty.current || !activeNote) return;
        if (saveTimer.current) clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => persist(content, activeNote), 800);
        return () => {
            if (saveTimer.current) clearTimeout(saveTimer.current);
        };
    }, [content, activeNote, persist]);

    const handleClose = () => {
        if (saveTimer.current) clearTimeout(saveTimer.current);
        if (isDirty.current) persist(contentRef.current, noteRef.current);
        closeNotes();
    };

    if (!isOpen || !activeNote) return null;

    return (
        <div className={`fixed inset-0 z-50 md:inset-auto md:bottom-6 md:left-64 md:w-[560px] bg-white md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col animate-in slide-in-from-bottom-5 duration-300 overflow-hidden ${isMinimized ? 'md:h-auto' : 'md:h-[640px]'}`}>

            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white/80 backdrop-blur-md z-10 sticky top-0">
                <div className="flex items-center gap-2">
                    <div className="bg-[#6B9FCC] p-2 rounded-lg text-white">
                        <StickyNote className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">{activeNote.title}</h3>
                        <p className="text-[10px] text-gray-500 flex items-center gap-1 h-3.5">
                            {state === 'saving' && (<><Loader2 className="w-3 h-3 animate-spin" /> Saving…</>)}
                            {state === 'saved' && (<><Check className="w-3 h-3 text-emerald-500" /> Saved</>)}
                            {state === 'loading' && 'Loading…'}
                            {state === 'idle' && 'Saves automatically'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button onClick={() => setIsMinimized(m => !m)} className="text-gray-400 hover:text-gray-600 transition-colors p-1" title={isMinimized ? 'Expand' : 'Minimize'}>
                        <Minus className="w-5 h-5" />
                    </button>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1" title="Close">
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Editor */}
            {!isMinimized && (
                <div className="flex-1 p-4 bg-[#FAFBFC] overflow-hidden">
                    <textarea
                        value={content}
                        onChange={(e) => { isDirty.current = true; setContent(e.target.value); }}
                        onBlur={() => { if (isDirty.current) persist(contentRef.current, noteRef.current); }}
                        placeholder={activeNote.scope === 'SECTOR'
                            ? `Write your notes on ${activeNote.key} companies — theses, red flags, things to watch…`
                            : `Write anything — company ideas, watchlist, meeting takeaways…`}
                        className="w-full h-full resize-none bg-white border border-gray-200 rounded-xl p-4 text-sm leading-relaxed text-gray-700 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7] placeholder:text-gray-400 custom-scrollbar transition-all"
                    />
                </div>
            )}
        </div>
    );
}
