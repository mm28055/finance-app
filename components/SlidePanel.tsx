"use client";
import React from 'react';
import { X } from 'lucide-react';

/**
 * Opens a slide-in panel whenever a link to `href` is clicked anywhere on the site (unless the
 * visitor is already on that page, or opens the link in a new tab). Returns the open state and
 * the clicked link, whose data- attributes can carry a starting filter.
 */
export function usePanelForLink(href: string) {
    const [open, setOpen] = React.useState(false);
    const [link, setLink] = React.useState<HTMLAnchorElement | null>(null);
    React.useEffect(() => {
        // Capture phase: a link inside a company row stops its click from bubbling, to keep the row shut.
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
            const a = (e.target as HTMLElement | null)?.closest?.(`a[href="${href}"]`) as HTMLAnchorElement | null;
            if (!a || window.location.pathname === href) return;
            e.preventDefault();
            setLink(a);
            setOpen(true);
        };
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('click', onClick, true);
        document.addEventListener('keydown', onKey);
        return () => { document.removeEventListener('click', onClick, true); document.removeEventListener('keydown', onKey); };
    }, [href]);
    return { open, link, close: () => setOpen(false) };
}

/** A panel that slides in from the right over about half the screen, the page dimmed behind it. */
export function SlidePanel({ open, onClose, title, subtitle, children }: {
    open: boolean; onClose: () => void; title: string; subtitle?: string; children: React.ReactNode;
}) {
    return (
        <>
            <div onClick={onClose} aria-hidden
                className={`fixed inset-0 z-[60] bg-black/20 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
            <aside role="dialog" aria-label={title} aria-hidden={!open}
                className={`fixed top-0 right-0 z-[61] h-screen w-full md:w-1/2 md:min-w-[520px] md:max-w-[820px] bg-[#FAFBFC] border-l border-gray-200 shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <header className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
                        {subtitle && <p className="text-[11px] text-gray-400">{subtitle}</p>}
                    </div>
                    <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600" title="Close (Esc)"><X className="w-5 h-5" /></button>
                </header>
                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">{children}</div>
            </aside>
        </>
    );
}
