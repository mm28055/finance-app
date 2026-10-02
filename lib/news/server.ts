// Server-only access to the market-news store written each evening by scripts/sync-market-news.ts.
import store from './news.json';
import type { NewsItem, NewsFlag } from './types';
import { NEWS_NEW_DAYS } from './types';

const ALL = (store as unknown as { items: NewsItem[] }).items;
const byDateDesc = (a: NewsItem, b: NewsItem) => b.date.localeCompare(a.date) || a.company.localeCompare(b.company);

export function getCompanyNews(company: string): NewsItem[] {
    return ALL.filter(n => n.company === company).sort(byDateDesc);
}

/** The newest dot-worthy entry of the last month, for the marker on the company row. */
export function getCompanyNewsFlag(company: string): NewsFlag | undefined {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - NEWS_NEW_DAYS);
    const from = d.toISOString().slice(0, 10);
    const n = ALL.filter(x => x.company === company && x.dot && x.date >= from).sort(byDateDesc)[0];
    return n ? { id: n.id, date: n.date, headline: n.headline, tone: n.tone } : undefined;
}

export function getAllNews(): NewsItem[] {
    return [...ALL].sort(byDateDesc);
}
