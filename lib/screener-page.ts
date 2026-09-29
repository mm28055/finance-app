import { prisma } from '@/lib/prisma';
import { resolveScreenerUrl } from '@/lib/sync-service';

// A company's Screener page, fetched on demand for the company card and cached by
// Next.js's data cache (nothing is stored in the database). Used by the price &
// valuation history and the 6-year financials.

const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36' };

/** fetch() whose answers are cached for `seconds` (per URL) across requests. */
export const cachedFetch = (seconds: number) => (url: string, init?: RequestInit) =>
    fetch(url, { ...init, headers: { ...UA, ...(init?.headers || {}) }, next: { revalidate: seconds } } as RequestInit);

export type ScreenerView = 'consolidated' | 'standalone';

/** The company's Screener page URL for a view; the default view is the one the lookup finds (consolidated when it exists). */
export async function screenerPageUrl(companyId: string, view?: ScreenerView): Promise<{ url: string; view: ScreenerView } | null> {
    const co = await prisma.company.findUnique({ where: { id: companyId }, select: { isin: true, ticker: true, name: true, aliases: true } });
    if (!co) return null;
    const found = await resolveScreenerUrl(co.isin, co.ticker, co.name, cachedFetch(30 * 86400), co.aliases);
    if (!found) return null;
    const base = found.replace(/consolidated\/?$/, '');
    const defaultView: ScreenerView = /\/consolidated\/?$/.test(found) ? 'consolidated' : 'standalone';
    const v = view || defaultView;
    return { url: v === 'consolidated' ? `${base.replace(/\/?$/, '/')}consolidated/` : base, view: v };
}

export async function fetchScreenerPage(url: string, seconds: number): Promise<string | null> {
    const res = await cachedFetch(seconds)(url);
    return res.ok ? res.text() : null;
}

const clean = (t: string) => t.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, ' ').trim();

export interface ScreenerTable { columns: string[]; rows: { label: string; values: (string | null)[] }[] }

/** A section's main data table (e.g. 'profit-loss', 'balance-sheet', 'cash-flow', 'ratios'). */
export function screenerTable(html: string, sectionId: string): ScreenerTable | null {
    const section = html.match(new RegExp(`<section id="${sectionId}"[\\s\\S]*?</section>`))?.[0];
    const table = section?.match(/<table class="data-table[\s\S]*?<\/table>/)?.[0];
    if (!table) return null;
    const columns = [...table.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map(m => clean(m[1])).slice(1);
    const rows = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)]
        .map(m => [...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(c => clean(c[1])))
        .filter(cells => cells.length > 1)
        .map(cells => ({ label: cells[0].replace(/\s*\+$/, ''), values: cells.slice(1).map(v => (v === '' ? null : v)) }));
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
