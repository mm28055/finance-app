// Server-only access to the filings digest written daily by scripts/sync-filings.ts.
// Kept out of client bundles: the page gets headlines per company, and full
// summaries load when a company row or the sector panel is opened.
import store from './filings.json';
import type { MaterialFiling, FilingHeadline, SectorFilingsResponse } from './types';
import { COMPANY_FILING_DAYS, SECTOR_FILING_DAYS } from './types';

const ALL = (store as { filings: MaterialFiling[] }).filings;
const TO: string = (store as { to?: string }).to || new Date().toISOString().slice(0, 10);
const BY_SECTOR_COUNT: Record<string, number> = (store as { companiesBySector?: Record<string, number> }).companiesBySector || {};

function since(days: number): string {
    const d = new Date(TO + 'T00:00:00Z');
    d.setUTCDate(d.getUTCDate() - days);
    return d.toISOString().slice(0, 10);
}

const byDateDesc = (a: MaterialFiling, b: MaterialFiling) => b.date.localeCompare(a.date) || a.company.localeCompare(b.company);

export function getCompanyFilings(company: string): MaterialFiling[] {
    const from = since(COMPANY_FILING_DAYS);
    return ALL.filter(f => f.company === company && f.date >= from).sort(byDateDesc);
}

export function getCompanyFilingHeadlines(company: string): FilingHeadline[] {
    return getCompanyFilings(company).map(({ date, tone, headline }) => ({ date, tone, headline }));
}

export function getSectorFilings(sector: string): SectorFilingsResponse {
    const from = since(SECTOR_FILING_DAYS);
    const key = sector.toLowerCase();
    const filings = ALL.filter(f => f.sector.toLowerCase() === key && f.date >= from).sort(byDateDesc);
    const companiesInSector = Object.entries(BY_SECTOR_COUNT).find(([s]) => s.toLowerCase() === key)?.[1] ?? 0;
    return { sector, from, to: TO, companiesInSector, filings };
}

/** Every filing in the digest (about three months), newest first, for the cross-company Filings page. */
export function getAllFilings(): { to: string; filings: MaterialFiling[] } {
    return { to: TO, filings: [...ALL].sort(byDateDesc) };
}
