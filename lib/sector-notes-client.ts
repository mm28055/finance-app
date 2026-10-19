// Loads a sector note or a company's business card from /api/sector-notes when it is opened,
// instead of shipping every note (~13 MB) with the dashboard. Each answer is kept for the visit.
import type { BusinessFound, SectorOverview } from '@/lib/sector-overviews/shared';

// Set at build time (next.config.ts), so a new release asks at a new address and never gets an old note.
const VERSION = process.env.NOTES_VERSION || 'dev';

const cache = new Map<string, Promise<any>>();

function get<T>(param: 'sector' | 'company', value: string): Promise<T> {
    const key = `${param}:${value.trim().toLowerCase()}`;
    let p = cache.get(key);
    if (!p) {
        p = fetch(`/api/sector-notes?${param}=${encodeURIComponent(value.trim())}&v=${VERSION}`).then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        });
        p.catch(() => cache.delete(key));
        cache.set(key, p);
    }
    return p;
}

export const loadSectorNote = (sector: string) => get<SectorOverview>('sector', sector);
/** null when the company has no business card in any note. */
export const loadCompanyBusiness = (company: string) => get<BusinessFound | null>('company', company);
