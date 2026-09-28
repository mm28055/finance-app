"use client";
import React, { useState } from 'react';
import { Tag, X, Plus } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import { useTags } from '@/context/TagsContext';

// The owner's tags for one company, shown only inside the opened row (and only
// when signed in) so the collapsed list stays uncluttered.
export const CompanyTags = ({ companyId }: { companyId: string }) => {
    const { isAdminMode } = useAdmin();
    const { tagsFor, allTags, addTag, removeTag } = useTags();
    const [adding, setAdding] = useState(false);
    const [draft, setDraft] = useState('');
    if (!isAdminMode) return null;

    const tags = tagsFor(companyId);
    const suggestions = allTags.map(t => t.tag).filter(t => !tags.includes(t));
    const listId = `tag-suggestions-${companyId}`;
    const commit = () => {
        if (draft.trim()) addTag(companyId, draft);
        setDraft('');
        setAdding(false);
    };

    return (
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="flex items-center gap-1 text-gray-400 font-medium uppercase tracking-wider text-[9px] mr-0.5">
                <Tag className="w-3 h-3" /> Tags
            </span>
            {tags.map(t => (
                <span key={t} className="inline-flex items-center gap-1 pl-2 pr-1 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600">
                    {t}
                    <button
                        onClick={() => removeTag(companyId, t)}
                        title={`Remove "${t}"`}
                        className="text-gray-300 hover:text-rose-500"
                    ><X className="w-3 h-3" /></button>
                </span>
            ))}
            {adding ? (
                <>
                    <input
                        autoFocus
                        list={listId}
                        value={draft}
                        onChange={e => setDraft(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') commit();
                            if (e.key === 'Escape') { setDraft(''); setAdding(false); }
                        }}
                        onBlur={commit}
                        placeholder="Tag name, Enter to add"
                        className="px-2 py-0.5 w-40 rounded-full border border-[#A5C4E2] bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4E5F7]"
                    />
                    <datalist id={listId}>
                        {suggestions.map(s => <option key={s} value={s} />)}
                    </datalist>
                </>
            ) : (
                <button
                    onClick={() => setAdding(true)}
                    className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full border border-dashed border-gray-300 text-gray-400 hover:text-[#4A7AAF] hover:border-[#A5C4E2]"
                ><Plus className="w-3 h-3" /> add</button>
            )}
        </div>
    );
};
