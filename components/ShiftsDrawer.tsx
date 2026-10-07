"use client";
import React from 'react';
import { ShiftsList } from './ShiftsList';
import { SlidePanel, usePanelForLink } from './SlidePanel';
import type { ShiftRow } from '@/lib/business-shift/feed';

// The Shifts list as a panel that slides in from the right, opened by any link to /shifts (the header
// button). The /shifts page remains for a direct visit.
export function ShiftsDrawer() {
    const { open, close } = usePanelForLink('/shifts');
    const [data, setData] = React.useState<ShiftRow[] | 'error' | null>(null);
    React.useEffect(() => {
        if (!open || data) return;
        fetch('/api/shifts').then(r => (r.ok ? r.json() : Promise.reject())).then(d => setData(d.shifts)).catch(() => setData('error'));
    }, [open, data]);
    const showCompany = (name: string) => {
        window.dispatchEvent(new CustomEvent('dashboard-search', { detail: name }));
        close();
    };
    return (
        <SlidePanel open={open} onClose={close} title="Shifts" subtitle="Companies whose business will look different in three years, from management commentary and capex">
            {open && data === null && <div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}
            {data === 'error' && <p className="text-sm text-gray-400">The list could not be loaded. Close and try again.</p>}
            {Array.isArray(data) && <ShiftsList shifts={data} onCompany={showCompany} />}
            <p className="text-[11px] text-gray-400 mt-6">
                Each company&apos;s revenue split three years ago and today comes from its annual reports, presentations and calls; the FY29
                split is my projection from what management has said and what it is spending on. A pilot of 15 companies.
            </p>
        </SlidePanel>
    );
}
