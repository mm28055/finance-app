"use client";
import React from 'react';
import { FilingsTabs } from './FilingsTabs';
import { SlidePanel, usePanelForLink } from './SlidePanel';

type Props = React.ComponentProps<typeof FilingsTabs>;
type Data = { to: string; filings: Props['filings']; news: Props['news']; results: NonNullable<Props['results']>; calls: NonNullable<Props['calls']> };

// The Filings list as a panel that slides in from the right, opened by any link to /filings (the
// header button, and a company row's "filings" and "news" markers, which carry the company in
// data-company and the tab in data-tab so the panel opens on just that company).
// The /filings page remains for a direct visit.
export function FilingsDrawer() {
    const { open, link, close } = usePanelForLink('/filings');
    const company = link?.dataset.company || '';
    const tab = link?.dataset.tab === 'news' ? 'news' : 'filings';
    // A company name in Results or Calls finds that company on the dashboard.
    const showCompany = (name: string) => {
        window.dispatchEvent(new CustomEvent('dashboard-search', { detail: name }));
        close();
    };
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
            subtitle={`Filings, news, results and calls, across every company${data && data !== 'error' ? ` · up to ${data.to}` : ''}`}>
            {open && data === null && <div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}
            {data === 'error' && <p className="text-sm text-gray-400">The filings could not be loaded. Close and try again.</p>}
            {/* Kept mounted once loaded, so the filters chosen are still there when it is opened again. */}
            {/* Opened from a company marker, it starts afresh on that company; from the header, it keeps its filters. */}
            {data && data !== 'error' && <FilingsTabs key={company ? `${company}:${tab}` : 'all'} filings={data.filings} news={data.news} results={data.results} calls={data.calls} initialTab={tab} initialCompany={company} onCompany={showCompany} />}
        </SlidePanel>
    );
}
