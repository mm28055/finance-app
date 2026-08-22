"use client";
import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { FileText, Plus, Pencil, Trash2 } from 'lucide-react';
import { useNotes } from '@/context/NotesContext';
import { useAdmin } from '@/context/AdminContext';

interface GeneralNotesListProps {
    onNavigate?: () => void;
}

export function GeneralNotesList({ onNavigate }: GeneralNotesListProps) {
    const { generalNotes, activeNote, isOpen, openGeneralNote, createGeneralNote, renameGeneralNote, deleteGeneralNote } = useNotes();
    const { isAdminMode } = useAdmin();
    // `null` means "not creating"; a string is the name being typed for a new note.
    const [draftName, setDraftName] = useState<string | null>(null);
    const [renamingKey, setRenamingKey] = useState<string | null>(null);
    const [renameValue, setRenameValue] = useState("");
    const [confirmKey, setConfirmKey] = useState<string | null>(null);
    const draftRef = useRef<HTMLInputElement>(null);
    const renameRef = useRef<HTMLInputElement>(null);

    const isDrafting = draftName !== null;
    useEffect(() => { if (isDrafting) draftRef.current?.focus(); }, [isDrafting]);
    useEffect(() => { if (renamingKey) renameRef.current?.select(); }, [renamingKey]);

    const submitDraft = async () => {
        const name = (draftName ?? "").trim();
        setDraftName(null);
        if (!name) return;
        await createGeneralNote(name);
        if (onNavigate) onNavigate();
    };

    const submitRename = async () => {
        const key = renamingKey;
        const name = renameValue.trim();
        setRenamingKey(null);
        if (key && name) await renameGeneralNote(key, name);
    };

    const inputClass = "w-full bg-white border border-[#A5C4E2] rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4E5F7]";

    return (
        <div>
            <div className="px-4 mb-2 flex items-center justify-between">
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Notes</span>
                {isAdminMode && (
                    <button
                        onClick={() => { setDraftName(""); setConfirmKey(null); }}
                        className="text-gray-400 hover:text-[#6B9FCC] transition-colors p-0.5 rounded hover:bg-[#D4E5F7]"
                        title="New note"
                    >
                        <Plus className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>

            <div className="space-y-0.5 px-3">
                {generalNotes.length === 0 && !isDrafting && (
                    <p className="px-3 py-2 text-[11px] text-gray-400 leading-relaxed">
                        {isAdminMode ? "No notes yet — hit + to add one." : "No notes yet."}
                    </p>
                )}

                {generalNotes.map(note => {
                    const isActive = isOpen && activeNote?.scope === 'GENERAL' && activeNote.key === note.key;

                    if (renamingKey === note.key) {
                        return (
                            <div key={note.key} className="px-1 py-1">
                                <input
                                    ref={renameRef}
                                    value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    onBlur={submitRename}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') submitRename();
                                        if (e.key === 'Escape') setRenamingKey(null);
                                    }}
                                    className={inputClass}
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            key={note.key}
                            className={cn(
                                "group flex items-center gap-1 pl-3 pr-2 py-2 rounded-lg transition-colors",
                                isActive ? "bg-[#D4E5F7] text-gray-900" : "text-gray-600 hover:bg-[#D4E5F7] hover:text-gray-900"
                            )}
                        >
                            <button
                                onClick={() => {
                                    openGeneralNote(note.key, note.title);
                                    if (onNavigate) onNavigate();
                                }}
                                className="flex-1 min-w-0 flex items-center gap-2 text-left text-xs font-medium"
                            >
                                <FileText className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">{note.title}</span>
                            </button>

                            {!isAdminMode ? null : confirmKey === note.key ? (
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        onClick={() => { setConfirmKey(null); deleteGeneralNote(note.key); }}
                                        className="text-[10px] font-semibold text-red-500 hover:text-red-600"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => setConfirmKey(null)}
                                        className="text-[10px] text-gray-400 hover:text-gray-600"
                                    >
                                        No
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center shrink-0 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => { setRenameValue(note.title); setRenamingKey(note.key); }}
                                        className="p-1 text-gray-400 hover:text-[#6B9FCC]"
                                        title="Rename"
                                    >
                                        <Pencil className="w-3 h-3" />
                                    </button>
                                    <button
                                        onClick={() => setConfirmKey(note.key)}
                                        className="p-1 text-gray-400 hover:text-red-500"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}

                {isDrafting && (
                    <div className="px-1 py-1">
                        <input
                            ref={draftRef}
                            value={draftName ?? ""}
                            onChange={(e) => setDraftName(e.target.value)}
                            onBlur={submitDraft}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') submitDraft();
                                if (e.key === 'Escape') setDraftName(null);
                            }}
                            placeholder="Note name…"
                            className={inputClass}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
