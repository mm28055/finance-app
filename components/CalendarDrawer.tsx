"use client";
import React from 'react';
import { EventsCalendar } from './EventsCalendar';
import { SlidePanel, usePanelForLink } from './SlidePanel';

type Data = { updated: string; today: string; events: React.ComponentProps<typeof EventsCalendar>['events'] };

// The calendar as a panel that slides in from the right, so a date can be checked without leaving
// the dashboard. Any link to /calendar opens it (the header button, the "Results Oct 14" marker on
// a company row); a marker carries its company in data-company and the panel opens filtered to it.
// The /calendar page remains for a direct visit.
export function CalendarDrawer() {
    const { open, link, close } = usePanelForLink('/calendar');
    const company = link?.dataset.company || '';
    const [data, setData] = React.useState<Data | 'error' | null>(null);

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
        close();
    };

    return (
        <SlidePanel open={open} onClose={close} title="Calendar"
            subtitle={`Result dates and earnings calls${data && data !== 'error' && data.updated ? ` · updated ${data.updated.slice(0, 10)}` : ''}`}>
            {open && data === null && <div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}
            {data === 'error' && <p className="text-sm text-gray-400">The calendar could not be loaded. Close and try again.</p>}
            {open && data && data !== 'error' && (
                <EventsCalendar key={company} events={data.events} today={data.today} initialQuery={company} onCompany={showCompany} />
            )}
            <p className="text-[11px] text-gray-400 mt-6">
                Result dates come from the board meetings companies notify to NSE; call dates from each company's own notice, often
                only a few days ahead. Companies listed only on BSE, and those that hold no call, are not shown. Refreshed each evening.
            </p>
        </SlidePanel>
    );
}
