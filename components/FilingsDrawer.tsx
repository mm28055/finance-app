"use client";
import React from 'react';
import { FilingsTabs } from './FilingsTabs';
import { SlidePanel, usePanelForLink } from './SlidePanel';

type Props = React.ComponentProps<typeof FilingsTabs>;
type Data = { to: string; filings: Props['filings']; news: Props['news'] };

// The Filings list as a panel that slides in from the right, opened by any link to /filings (the
// header button, and a company row's "filings" and "news" markers, which carry the company in
// data-company and the tab in data-tab so the panel opens on just that company).
// The /filings page remains for a direct visit.
export function FilingsDrawer() {
    const { open, link, close } = usePanelForLink('/filings');
    const company = link?.dataset.company || '';
    const tab = link?.dataset.tab === 'news' ? 'news' : 'filings';
    const [data, setData] = React.useState<Data | 'error' | null>(null);

    // Loaded each time it opens, so it is as fresh as the last evening run.
    React.useEffect(() => {
        if (!open) return;
        let alive = true;
        fetch('/api/filings?all=1')
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then((d: Data) => { if (alive) setData(d); })
            .catch(() => { if (alive) setData(d => d ?? 'error'); });
        return () => { alive = false; };
    }, [open]);

    return (
        <SlidePanel open={open} onClose={close} title="Filings"
            subtitle={`What could move each stock, across every company${data && data !== 'error' ? ` · up to ${data.to}` : ''}`}>
            {open && data === null && <div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}
            {data === 'error' && <p className="text-sm text-gray-400">The filings could not be loaded. Close and try again.</p>}
            {/* Kept mounted once loaded, so the filters chosen are still there when it is opened again. */}
            {/* Opened from a company marker, it starts afresh on that company; from the header, it keeps its filters. */}
            {data && data !== 'error' && <FilingsTabs key={company ? `${company}:${tab}` : 'all'} filings={data.filings} news={data.news} initialTab={tab} initialCompany={company} />}
        </SlidePanel>
    );
}
