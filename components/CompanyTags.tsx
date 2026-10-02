"use client";
import React, { useState } from 'react';
import { Tag, X, Plus } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import { useTags } from '@/context/TagsContext';

// The owner's tags for one company: small grey labels beside the name once the row is
// opened, so they take no line of their own and the collapsed list stays uncluttered.
// Everyone sees them; only a signed-in owner can edit.
export const CompanyTags = ({ companyId }: { companyId: string }) => {
    const { isAdminMode } = useAdmin();
    const { tagsFor, allTags, addTag, removeTag } = useTags();
    const [adding, setAdding] = useState(false);
    const [draft, setDraft] = useState('');
    const tags = tagsFor(companyId);
    if (!isAdminMode && tags.length === 0) return null;
    const suggestions = allTags.map(t => t.tag).filter(t => !tags.includes(t));
    const listId = `tag-suggestions-${companyId}`;
    const commit = () => {
        if (draft.trim()) addTag(companyId, draft);
        setDraft('');
        setAdding(false);
    };

    return (
        <span className="inline-flex items-center gap-0.5 flex-shrink-0 text-[8px] leading-none" onClick={e => e.stopPropagation()}>
            <span title="Tags" className="flex"><Tag className="w-2.5 h-2.5 text-gray-300" /></span>
            {tags.map(t => (
                <span key={t} className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded bg-gray-100 text-gray-500 font-medium whitespace-nowrap">
                    {t}
                    {isAdminMode && (
                        <button
                            onClick={() => removeTag(companyId, t)}
                            title={`Remove "${t}"`}
                            className="text-gray-300 hover:text-rose-500"
                        ><X className="w-2 h-2" /></button>
                    )}
                </span>
            ))}
            {!isAdminMode ? null : adding ? (
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
                        className="px-1.5 py-px w-36 rounded border border-[#A5C4E2] bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4E5F7]"
                    />
                    <datalist id={listId}>
                        {suggestions.map(s => <option key={s} value={s} />)}
                    </datalist>
                </>
            ) : (
                <button
                    onClick={() => setAdding(true)}
                    title="Add a tag"
                    className="inline-flex items-center px-0.5 py-px rounded border border-dashed border-gray-300 text-gray-400 hover:text-[#4A7AAF] hover:border-[#A5C4E2]"
                ><Plus className="w-2.5 h-2.5" /></button>
            )}
        </span>
    );
};
