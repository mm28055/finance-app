"use client";
import React from 'react';
import { FilingsFeed } from './FilingsFeed';
import { ResultsFeed, CallsFeed, CallChangesFeed, type ResultRow, type CallRow, type CallChangeRow } from './ResultsCallsFeeds';

type Rows = React.ComponentProps<typeof FilingsFeed>['filings'];
type Tab = 'filings' | 'news' | 'results' | 'calls' | 'changes';

// The Filings page has five lists, kept apart: what companies filed themselves; what happened
// around them (market and policy events, and sharp price moves with the reason found); results as
// they come in, with the overnight view; the earnings calls analysed in the last six weeks; and
// every change in the notes' own calls (own, follow, wait, pass, avoid).
export function FilingsTabs({ filings, news, results = [], calls = [], callChanges = [], initialTab = 'filings', initialCompany = '', onCompany }: {
    filings: Rows; news: Rows; results?: ResultRow[]; calls?: CallRow[]; callChanges?: CallChangeRow[]; initialTab?: Tab;
    /** Open on one company (from its row's marker). */ initialCompany?: string;
    /** Makes company names in Results and Calls find the company on the dashboard. */ onCompany?: (company: string) => void;
}) {
    const [tab, setTab] = React.useState<Tab>(initialTab);
    const tabClass = (active: boolean) => `px-3 py-2 text-xs font-semibold border-b-2 -mb-px whitespace-nowrap ${active ? 'text-[#4A7AAF] border-[#6B9FCC]' : 'text-gray-400 border-transparent hover:text-gray-600'}`;
    const tabs: [Tab, string][] = [['filings', 'Company filings'], ['news', 'Market and policy'], ['results', 'Results'], ['calls', 'Calls'], ['changes', 'Call changes']];
    return (
        <div>
            <div className="flex gap-1 border-b border-gray-200 mb-4 overflow-x-auto" role="tablist">
                {tabs.map(([k, label]) => (
                    <button key={k} role="tab" aria-selected={tab === k} className={tabClass(tab === k)} onClick={() => setTab(k)}>{label}</button>
                ))}
            </div>
            {/* All stay mounted so each keeps its own filters when you switch. */}
            <div hidden={tab !== 'filings'}><FilingsFeed filings={filings} initialCompany={initialCompany} /></div>
            <div hidden={tab !== 'news'}><FilingsFeed filings={news} kind="news" initialCompany={initialCompany} /></div>
            <div hidden={tab !== 'results'}><ResultsFeed results={results} onCompany={onCompany} /></div>
            <div hidden={tab !== 'calls'}><CallsFeed calls={calls} onCompany={onCompany} /></div>
            <div hidden={tab !== 'changes'}><CallChangesFeed changes={callChanges} onCompany={onCompany} /></div>
        </div>
    );
}
