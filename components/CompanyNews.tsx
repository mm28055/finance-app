"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { NewsItem, NewsFlag } from '@/lib/news/types';
import { TONE_STYLE } from './SectorFilings';

// Which news a device has already opened, per company: { "<company>": "<id of the newest entry seen>" }.
const KEY = 'news_seen';
function readSeen(): Record<string, string> {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
}

/**
 * Whether a company has news this device has not opened yet, and a way to mark it opened.
 * Starts false on the server and settles after mount, so the page renders the same either way.
 */
export function useUnseenNews(company: string, flag?: NewsFlag): [boolean, () => void] {
    const [unseen, setUnseen] = React.useState(false);
    React.useEffect(() => { setUnseen(!!flag && readSeen()[company] !== flag.id); }, [company, flag?.id]);
    const markSeen = React.useCallback(() => {
        if (!flag) return;
        try { localStorage.setItem(KEY, JSON.stringify({ ...readSeen(), [company]: flag.id })); } catch { /* private window: the dot just stays */ }
        setUnseen(false);
    }, [company, flag?.id]);
    return [unseen, markSeen];
}

const day = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

// The NEWS tab on the company card: sharp price moves with the reason found, and market or policy
// events that directly affect the company. Newest first.
export function CompanyNews({ news }: { news: NewsItem[] }) {
    if (!news.length) {
        return (
            <p className="p-4 text-xs text-gray-400 leading-relaxed">
                Nothing yet. This tab fills in when the share moves 7% or more in a day, or when a government, regulator or market
                event directly affects the company.
            </p>
        );
    }
    return (
        <ul className="divide-y divide-gray-100">
            {news.map(n => {
                const t = TONE_STYLE[n.tone];
                return (
                    <li key={n.id} className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] text-gray-400">{day(n.date)}</span>
                            <span className={`px-1.5 rounded border text-[10px] font-semibold uppercase ${t.chip}`}>
                                {n.kind === 'move' ? 'Price move' : 'Market and policy'}
                            </span>
                            {n.kind === 'policy' && <span className={`text-[10px] font-semibold ${n.tone === 'good' ? 'text-[#1F7A45]' : 'text-[#6B3FA0]'}`}>{n.tone === 'good' ? 'Helps' : 'Hurts'}</span>}
                        </div>
                        <p className={`text-[13px] mt-1 leading-snug ${n.dot ? 'text-gray-800' : 'text-gray-500'}`}>{n.headline}</p>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{n.summary}</p>
                        {n.url && (
                            <a href={n.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-1 text-[11px] text-[#4A7AAF] hover:underline">
                                {n.source || 'Source'} <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
