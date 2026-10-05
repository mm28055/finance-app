"use client";
import React from 'react';
import { FilingsFeed } from './FilingsFeed';
import { ResultsFeed, CallsFeed, CallChangesFeed, type ResultRow, type CallRow, type CallChangeRow } from './ResultsCallsFeeds';
import { PortfolioFeed, type Holding } from './PortfolioFeed';

type Rows = React.ComponentProps<typeof FilingsFeed>['filings'];
type Tab = 'portfolio' | 'filings' | 'news' | 'results' | 'calls' | 'changes';

// The Filings page has five lists, kept apart: what companies filed themselves; what happened
// around them (market and policy events, and sharp price moves with the reason found); results as
// they come in, with the overnight view; the earnings calls analysed in the last two months; and
// every change in the notes' own calls (own, follow, wait, pass, avoid).
export function FilingsTabs({ filings, news, results = [], calls = [], callsComplete = false, callChanges = [], holdings = [], initialTab = 'portfolio', initialCompany = '', onCompany }: {
    filings: Rows; news: Rows; results?: ResultRow[]; calls?: CallRow[]; callChanges?: CallChangeRow[]; holdings?: Holding[]; initialTab?: Tab;
    /** False when `calls` holds only the holdings' calls: the Calls tab then loads the full list when first opened. */ callsComplete?: boolean;
    /** Open on one company (from its row's marker). */ initialCompany?: string;
    /** Makes company names in Results and Calls find the company on the dashboard. */ onCompany?: (company: string) => void;
}) {
    const [tab, setTab] = React.useState<Tab>(initialTab);
    // The full Calls list (two months) is fetched in the background a moment after the panel opens (so the panel
    // itself opens at once, and the list is usually ready by the time the Calls tab is clicked).
    const [allCalls, setAllCalls] = React.useState<CallRow[] | 'error' | null>(callsComplete ? calls : null);
    const started = React.useRef(false);
    React.useEffect(() => {
        if (allCalls || started.current) return;
        const load = () => {
            if (started.current) return;
            started.current = true;
            fetch('/api/filings?calls=1').then(r => (r.ok ? r.json() : Promise.reject())).then(d => setAllCalls(d.calls)).catch(() => { started.current = false; setAllCalls('error'); });
        };
        if (tab === 'calls') { load(); return; }
        const t = setTimeout(load, 1200);
        return () => clearTimeout(t);
    }, [tab, allCalls]);
    const tabClass = (active: boolean) => `px-3 py-2 text-xs font-semibold border-b-2 whitespace-nowrap shrink-0 ${active ? 'text-[#4A7AAF] border-[#6B9FCC]' : 'text-gray-400 border-transparent hover:text-gray-600'}`;
    const tabs: [Tab, string][] = [['portfolio', 'Portfolio'], ['filings', 'Filings'], ['news', 'Market & Policy'], ['results', 'Results'], ['calls', 'Calls'], ['changes', 'Call changes']];
    return (
        <div>
            <div className="flex gap-1 shadow-[inset_0_-1px_0_#e5e7eb] mb-4 overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">
                {tabs.map(([k, label]) => (
                    <button key={k} role="tab" aria-selected={tab === k} className={tabClass(tab === k)} onClick={() => setTab(k)}>{label}</button>
                ))}
            </div>
            {/* All stay mounted so each keeps its own filters when you switch. */}
            <div hidden={tab !== 'portfolio'}><PortfolioFeed holdings={holdings} filings={filings.filter(f => f.inPortfolio)} news={news.filter(f => f.inPortfolio)} results={results.filter(r => r.inPortfolio)} calls={calls.filter(c => c.inPortfolio)} callChanges={callChanges.filter(c => c.inPortfolio)} /></div>
            <div hidden={tab !== 'filings'}><FilingsFeed filings={filings} initialCompany={initialCompany} /></div>
            <div hidden={tab !== 'news'}><FilingsFeed filings={news} kind="news" initialCompany={initialCompany} /></div>
            <div hidden={tab !== 'results'}><ResultsFeed results={results} onCompany={onCompany} /></div>
            <div hidden={tab !== 'calls'}>
                {allCalls === null && <div className="h-40 bg-gray-100 rounded-xl animate-pulse" />}
                {allCalls === 'error' && <p className="text-sm text-gray-400">The calls could not be loaded. Close and try again.</p>}
                {Array.isArray(allCalls) && <CallsFeed calls={allCalls} onCompany={onCompany} />}
            </div>
            <div hidden={tab !== 'changes'}><CallChangesFeed changes={callChanges} onCompany={onCompany} /></div>
        </div>
    );
}
