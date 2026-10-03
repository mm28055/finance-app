"use client";
import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { SlidePanel } from './SlidePanel';

type Guide = { sections: { title: string; items: [string, string][] }[] };

// The "?" in the header: a one-screen guide to the site, shown only when signed in.
// The text comes from /api/help, which refuses anyone not signed in.
export function HelpButton() {
    const { isAdminMode } = useAdmin();
    const [open, setOpen] = React.useState(false);
    const [guide, setGuide] = React.useState<Guide | 'error' | null>(null);

    React.useEffect(() => {
        if (!open || guide) return;
        fetch('/api/help').then(r => (r.ok ? r.json() : Promise.reject())).then(setGuide).catch(() => setGuide('error'));
    }, [open, guide]);

    if (!isAdminMode) return null;
    return (
        <>
            <button onClick={() => setOpen(true)} title="How this site works"
                className="w-6 h-6 rounded-full border border-gray-200 bg-white text-[12px] font-semibold text-gray-500 hover:border-[#6B9FCC] hover:text-[#4A7AAF] shadow-sm">?</button>
            <SlidePanel open={open} onClose={() => setOpen(false)} title="How this site works">
                {guide === null && <div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}
                {guide === 'error' && <p className="text-sm text-gray-400">Could not load the guide. Close and try again.</p>}
                {guide && guide !== 'error' && (
                    <div className="flex flex-col gap-5">
                        {guide.sections.map(s => (
                            <section key={s.title}>
                                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">{s.title}</h3>
                                <dl className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
                                    {s.items.map(([term, text]) => (
                                        <div key={term} className="px-3 py-2 grid grid-cols-[120px_1fr] max-md:grid-cols-1 gap-x-3 gap-y-0.5">
                                            <dt className="text-[12px] font-semibold text-gray-700">{term}</dt>
                                            <dd className="text-[12px] text-gray-600 leading-snug">{text}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        ))}
                    </div>
                )}
            </SlidePanel>
        </>
    );
}
