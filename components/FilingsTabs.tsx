"use client";
import React from 'react';
import { FilingsFeed } from './FilingsFeed';

type Rows = React.ComponentProps<typeof FilingsFeed>['filings'];

// The Filings page has two lists, kept apart: what companies filed themselves, and what happened
// around them (market and policy events, and sharp price moves with the reason found).
export function FilingsTabs({ filings, news }: { filings: Rows; news: Rows }) {
    const [tab, setTab] = React.useState<'filings' | 'news'>('filings');
    const tabClass = (active: boolean) => `px-3 py-2 text-xs font-semibold border-b-2 -mb-px ${active ? 'text-[#4A7AAF] border-[#6B9FCC]' : 'text-gray-400 border-transparent hover:text-gray-600'}`;
    return (
        <div>
            <div className="flex gap-1 border-b border-gray-200 mb-4" role="tablist">
                <button role="tab" aria-selected={tab === 'filings'} className={tabClass(tab === 'filings')} onClick={() => setTab('filings')}>Company filings</button>
                <button role="tab" aria-selected={tab === 'news'} className={tabClass(tab === 'news')} onClick={() => setTab('news')}>Market and policy</button>
            </div>
            {/* Both stay mounted so each keeps its own filters when you switch. */}
            <div hidden={tab !== 'filings'}><FilingsFeed filings={filings} /></div>
            <div hidden={tab !== 'news'}><FilingsFeed filings={news} kind="news" /></div>
        </div>
    );
}
