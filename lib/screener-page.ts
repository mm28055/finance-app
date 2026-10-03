import { prisma } from '@/lib/prisma';
import { resolveScreenerUrl } from '@/lib/sync-service';
import { lastResultsBefore } from '@/lib/events/server';

// A company's Screener page, fetched on demand for the company card and cached by
// Next.js's data cache (nothing is stored in the database). Used by the price &
// valuation history and the 6-year financials.
//
// Filed figures (results, balance sheet, cash flow, holders, breakdowns) change only when a
// company reports, so each page is read at most once a WEEK, plus once more the day after the
// company's results (the results date goes into the cache key). This keeps Screener reads low.
// Price-based charts are still read daily.

/** How long filed figures are kept before Screener is read again. */
export const FILED = 7 * 86400;

/** `url` with the company's refresh key added, so its cached copy is replaced after results. */
export const keyed = (url: string, key: string) => (key ? `${url}${url.includes('?') ? '&' : '?'}r=${key}` : url);

const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36' };

/** fetch() whose answers are cached for `seconds` (per URL) across requests. */
export const cachedFetch = (seconds: number) => (url: string, init?: RequestInit) =>
    fetch(url, { ...init, headers: { ...UA, ...(init?.headers || {}) }, next: { revalidate: seconds } } as RequestInit);

export type ScreenerView = 'consolidated' | 'standalone';

/** The company's Screener page URL for a view; the default view is the one the lookup finds (consolidated when it exists). */
export async function screenerPageUrl(companyId: string, view?: ScreenerView): Promise<{ url: string; view: ScreenerView; key: string } | null> {
    const co = await prisma.company.findUnique({ where: { id: companyId }, select: { isin: true, ticker: true, name: true, aliases: true } });
    if (!co) return null;
    const found = await resolveScreenerUrl(co.isin, co.ticker, co.name, cachedFetch(30 * 86400), co.aliases);
    if (!found) return null;
    const key = (lastResultsBefore(co.name) || '').replace(/-/g, '');
    const base = found.replace(/consolidated\/?$/, '');
    const defaultView: ScreenerView = /\/consolidated\/?$/.test(found) ? 'consolidated' : 'standalone';
    const v = view || defaultView;
    const consolidatedUrl = `${base.replace(/\/?$/, '/')}consolidated/`;
    // A company that only recently began filing group accounts (Bajaj Healthcare) has an empty
    // consolidated page; unless consolidated was asked for, show its standalone figures instead.
    if (!view && v === 'consolidated') {
        const html = await fetchScreenerPage(consolidatedUrl, FILED, key);
        const pl = html ? screenerTable(html, 'profit-loss') : null;
        const filled = pl?.rows.some(r => r.values.filter(x => x !== null).length >= 2);
        if (html && !filled) return { url: base, view: 'standalone', key };
    }
    return { url: v === 'consolidated' ? consolidatedUrl : base, view: v, key };
}

export async function fetchScreenerPage(url: string, seconds: number, key = ''): Promise<string | null> {
    const res = await cachedFetch(seconds)(keyed(url, key));
    return res.ok ? res.text() : null;
}

const clean = (t: string) => t.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, ' ').trim();

export interface ScreenerTable { columns: string[]; rows: { label: string; values: (string | null)[]; expandable: boolean }[] }

/** A section's main data table (e.g. 'profit-loss', 'balance-sheet', 'cash-flow', 'ratios'). */
export function screenerTable(html: string, sectionId: string): ScreenerTable | null {
    const section = html.match(new RegExp(`<section id="${sectionId}"[\\s\\S]*?</section>`))?.[0];
    const table = section?.match(/<table class="data-table[\s\S]*?<\/table>/)?.[0];
    if (!table) return null;
    const columns = [...table.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map(m => clean(m[1])).slice(1);
    const rows = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)]
        .map(m => [...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(c => clean(c[1])))
        .filter(cells => cells.length > 1)
        .map(cells => ({ label: cells[0].replace(/\s*\+$/, ''), values: cells.slice(1).map(v => (v === '' ? null : v)), expandable: false }));
    // Rows with a "+" on Screener open a breakdown ("schedule") on click.
    const expandable = new Set([...(section || '').matchAll(/showSchedule\('([^']+)'/g)].map(m => m[1]));
    rows.forEach(r => { r.expandable = expandable.has(r.label); });
    return { columns, rows };
}

/** Screener's growth boxes under the P&L ("Compounded Sales Growth" → { '5 Years': '24%', … }). */
export function screenerGrowth(html: string): Record<string, Record<string, string>> {
    const section = html.match(/<section id="profit-loss"[\s\S]*?<\/section>/)?.[0] || '';
    const out: Record<string, Record<string, string>> = {};
    for (const t of section.match(/<table class="ranges-table">[\s\S]*?<\/table>/g) || []) {
        const cells = [...t.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map(m => clean(m[1]));
        const title = cells.shift() || '';
        const entry: Record<string, string> = {};
        for (let i = 0; i + 1 < cells.length; i += 2) entry[cells[i].replace(/:$/, '')] = cells[i + 1];
        out[title] = entry;
    }
    return out;
}

/** Screener's internal company id, from its page. */
export const screenerCompanyId = (html: string) => html.match(/data-company-id="(\d+)"/)?.[1] ?? null;
