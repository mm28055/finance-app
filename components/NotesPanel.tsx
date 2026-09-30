"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, StickyNote, Minus, Check, Loader2, ImagePlus } from 'lucide-react';
import { useNotes } from '@/context/NotesContext';
import { useAdmin } from '@/context/AdminContext';

type SaveState = 'idle' | 'loading' | 'saving' | 'saved';

// Images pasted into a note are stored as a marker line: [image 1](https://…).
const IMAGE_RE = /\[image (\d+)\]\((https?:\/\/[^\s)]+)\)/g;
const imagesIn = (text: string) => [...text.matchAll(IMAGE_RE)].map(m => ({ n: m[1], url: m[2] }));

export function NotesPanel() {
    const { isOpen, activeNote, closeNotes } = useNotes();
    const { isAdminMode } = useAdmin();
    const [isMinimized, setIsMinimized] = useState(false);
    const [content, setContent] = useState("");
    const [state, setState] = useState<SaveState>('idle');
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);

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

    // Paste a screenshot or image: upload it, then put a marker where the cursor is.
    const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        if (!isAdminMode) return;
        const file = [...e.clipboardData.items].find(i => i.kind === 'file' && i.type.startsWith('image/'))?.getAsFile();
        if (!file) return;
        e.preventDefault();
        const el = e.currentTarget;
        const at = el.selectionStart ?? contentRef.current.length;
        setUploading(true);
        setUploadError(null);
        try {
            const body = new FormData();
            body.append('file', file);
            const res = await fetch('/api/notes/image', { method: 'POST', body });
            const data = await res.json();
            if (!res.ok || !data.url) throw new Error(data.error || 'Upload failed');
            const n = imagesIn(contentRef.current).reduce((m, i) => Math.max(m, Number(i.n)), 0) + 1;
            const text = contentRef.current;
            const marker = `${at > 0 && text[at - 1] !== '\n' ? '\n' : ''}[image ${n}](${data.url})\n`;
            isDirty.current = true;
            setContent(text.slice(0, at) + marker + text.slice(at));
        } catch (err: any) {
            setUploadError(err.message || 'Upload failed');
        } finally {
            setUploading(false);
        }
    };

    if (!isOpen || !activeNote) return null;
    const images = imagesIn(content);

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
                            {uploading && (<><Loader2 className="w-3 h-3 animate-spin" /> Adding image…</>)}
                            {!uploading && state === 'idle' && (isAdminMode ? 'Saves automatically · paste images with Ctrl+V' : 'Read only — sign in to edit')}
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
                <div className="flex-1 p-4 bg-[#FAFBFC] overflow-hidden flex flex-col gap-3 min-h-0">
                    <textarea
                        ref={textRef}
                        onPaste={handlePaste}
                        value={content}
                        readOnly={!isAdminMode}
                        onChange={(e) => { isDirty.current = true; setContent(e.target.value); }}
                        onBlur={() => { if (isDirty.current) persist(contentRef.current, noteRef.current); }}
                        placeholder={!isAdminMode ? '' : activeNote.scope === 'SECTOR'
                            ? `Write your notes on ${activeNote.key} companies — theses, red flags, things to watch…`
                            : `Write anything — company ideas, watchlist, meeting takeaways…`}
                        className={`w-full flex-1 min-h-0 resize-none border border-gray-200 ${isAdminMode ? 'bg-white' : 'bg-gray-50 cursor-default'} rounded-xl p-4 text-sm leading-relaxed text-gray-700 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7] placeholder:text-gray-400 custom-scrollbar transition-all`}
                    />
                    {uploadError && <p className="text-[11px] text-rose-500">Image not added: {uploadError}</p>}
                    {images.length > 0 && (
                        <div className="shrink-0">
                            <p className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5"><ImagePlus className="w-3 h-3" /> Images in this note</p>
                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {images.map(i => (
                                    <a key={i.url} href={i.url} target="_blank" rel="noopener noreferrer" title={`Image ${i.n} — open full size`}
                                        className="relative shrink-0 w-28 h-20 rounded-lg border border-gray-200 bg-white overflow-hidden hover:border-[#A5C4E2]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={i.url} alt={`Image ${i.n}`} className="w-full h-full object-cover" />
                                        <span className="absolute bottom-0.5 left-0.5 px-1 rounded bg-black/60 text-white text-[9px]">{i.n}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
