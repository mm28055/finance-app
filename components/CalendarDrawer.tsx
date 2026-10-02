"use client";
import React from 'react';
import { X } from 'lucide-react';
import { EventsCalendar } from './EventsCalendar';

type Data = { updated: string; today: string; events: React.ComponentProps<typeof EventsCalendar>['events'] };

// The calendar as a panel that slides in from the right, over about half the screen, so a date can
// be checked without leaving the dashboard. Any link to /calendar opens it (the header button, the
// "Results Oct 14" marker on a company row); a marker carries its company in data-company and the
// panel opens filtered to it. The /calendar page remains for a direct visit.
export function CalendarDrawer() {
    const [open, setOpen] = React.useState(false);
    const [company, setCompany] = React.useState('');
    const [data, setData] = React.useState<Data | 'error' | null>(null);

    React.useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
            const a = (e.target as HTMLElement | null)?.closest?.('a[href="/calendar"]') as HTMLAnchorElement | null;
            if (!a || window.location.pathname === '/calendar') return;
            e.preventDefault();
            setCompany(a.dataset.company || '');
            setOpen(true);
        };
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('click', onClick, true);
        document.addEventListener('keydown', onKey);
        return () => { document.removeEventListener('click', onClick, true); document.removeEventListener('keydown', onKey); };
    }, []);

    // Loaded each time it opens, so the list is as fresh as the last evening run.
    React.useEffect(() => {
        if (!open) return;
        let alive = true;
        fetch('/api/calendar')
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then((d: Data) => { if (alive) setData(d); })
            .catch(() => { if (alive) setData(d => d ?? 'error'); });
        return () => { alive = false; };
    }, [open]);

    // A company name in the panel finds that company on the dashboard.
    const showCompany = (name: string) => {
        window.dispatchEvent(new CustomEvent('dashboard-search', { detail: name }));
        setOpen(false);
    };

    return (
        <>
            <div onClick={() => setOpen(false)} aria-hidden
                className={`fixed inset-0 z-[60] bg-black/20 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
            <aside role="dialog" aria-label="Calendar" aria-hidden={!open}
                className={`fixed top-0 right-0 z-[61] h-screen w-full md:w-1/2 md:min-w-[520px] md:max-w-[820px] bg-[#FAFBFC] border-l border-gray-200 shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <header className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-800">Calendar</h2>
                        <p className="text-[11px] text-gray-400">Result dates and earnings calls{data && data !== 'error' && data.updated ? ` · updated ${data.updated.slice(0, 10)}` : ''}</p>
                    </div>
                    <button onClick={() => setOpen(false)} className="p-1 text-gray-400 hover:text-gray-600" title="Close (Esc)"><X className="w-5 h-5" /></button>
                </header>
                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    {open && data === null && <div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}
                    {data === 'error' && <p className="text-sm text-gray-400">The calendar could not be loaded. Close and try again.</p>}
                    {open && data && data !== 'error' && (
                        <EventsCalendar key={company} events={data.events} today={data.today} initialQuery={company} onCompany={showCompany} />
                    )}
                    <p className="text-[11px] text-gray-400 mt-6">
                        Result dates come from the board meetings companies notify to NSE; call dates from each company's own notice, often
                        only a few days ahead. Companies listed only on BSE, and those that hold no call, are not shown. Refreshed each evening.
                    </p>
                </div>
            </aside>
        </>
    );
}
