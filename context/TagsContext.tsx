"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { useAdmin } from './AdminContext';

// The owner's company tags, loaded once for the whole dashboard. Rows read and
// change them through this context, so tagging a company updates the tag filter
// straight away without reloading the page.

interface TagsContextType {
    tagsFor: (companyId: string) => string[];
    allTags: { tag: string; count: number }[];
    addTag: (companyId: string, tag: string) => Promise<void>;
    removeTag: (companyId: string, tag: string) => Promise<void>;
    companiesWith: (tag: string) => Set<string>;
}

const EMPTY: string[] = [];
const TagsContext = createContext<TagsContextType | undefined>(undefined);

export function TagsProvider({ children }: { children: ReactNode }) {
    const { isAdminMode } = useAdmin();
    const [byCompany, setByCompany] = useState<Record<string, string[]>>({});

    useEffect(() => {
        if (!isAdminMode) { setByCompany({}); return; }
        fetch('/api/tags')
            .then(r => (r.ok ? r.json() : { tags: {} }))
            .then(d => setByCompany(d.tags || {}))
            .catch(() => setByCompany({}));
    }, [isAdminMode]);

    const tagsFor = useCallback((id: string) => byCompany[id] || EMPTY, [byCompany]);

    const allTags = useMemo(() => {
        const counts = new Map<string, number>();
        for (const list of Object.values(byCompany)) for (const t of list) counts.set(t, (counts.get(t) || 0) + 1);
        return [...counts.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => a.tag.localeCompare(b.tag));
    }, [byCompany]);

    const companiesWith = useCallback((tag: string) => {
        const ids = new Set<string>();
        for (const [id, list] of Object.entries(byCompany)) if (list.includes(tag)) ids.add(id);
        return ids;
    }, [byCompany]);

    // Optimistic: the chip appears at once and is rolled back if the save fails.
    const addTag = useCallback(async (companyId: string, raw: string) => {
        const tag = raw.trim().replace(/\s+/g, ' ').slice(0, 40);
        if (!tag) return;
        setByCompany(m => ((m[companyId] || []).includes(tag) ? m : { ...m, [companyId]: [...(m[companyId] || []), tag].sort() }));
        const res = await fetch('/api/tags', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ companyId, tag }) }).catch(() => null);
        if (!res?.ok) setByCompany(m => ({ ...m, [companyId]: (m[companyId] || []).filter(t => t !== tag) }));
    }, []);

    const removeTag = useCallback(async (companyId: string, tag: string) => {
        setByCompany(m => ({ ...m, [companyId]: (m[companyId] || []).filter(t => t !== tag) }));
        const res = await fetch('/api/tags', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ companyId, tag }) }).catch(() => null);
        if (!res?.ok) setByCompany(m => ({ ...m, [companyId]: [...(m[companyId] || []), tag].sort() }));
    }, []);

    return (
        <TagsContext.Provider value={{ tagsFor, allTags, addTag, removeTag, companiesWith }}>
            {children}
        </TagsContext.Provider>
    );
}

export function useTags() {
    const ctx = useContext(TagsContext);
    if (!ctx) throw new Error('useTags must be used inside TagsProvider');
    return ctx;
}
