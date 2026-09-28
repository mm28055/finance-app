import { aerospaceDefenceFilings } from './aerospace-defence';

// A material exchange filing, summarised in plain words. Routine filings
// (trading-window closures, newspaper notices, AGM paperwork, ESOP allotments,
// investor-meet schedules) are filtered out before anything lands here.
export type FilingTone = 'good' | 'watch' | 'info';

export interface MaterialFiling {
    /** Company name exactly as stored in the database. */
    company: string;
    /** Filing date, ISO yyyy-mm-dd. */
    date: string;
    /** Short category, e.g. 'Order win', 'Fund-raise', 'Governance'. */
    category: string;
    /** good = helps the case, watch = a risk or red flag, info = worth knowing. */
    tone: FilingTone;
    headline: string;
    /** Two or three sentences: what happened and why it matters. */
    summary: string;
    /** The official filing on NSE or BSE. */
    url: string;
}

export interface SectorFilings {
    sector: string;
    /** The period covered, for the panel heading. */
    from: string;
    to: string;
    /** Companies whose filings were read, so "no material filings" is meaningful. */
    companiesChecked: number;
    filings: MaterialFiling[];
}

const BY_SECTOR = new Map<string, SectorFilings>(
    [aerospaceDefenceFilings].map(s => [s.sector.toLowerCase(), s]),
);

export function getSectorFilings(sector: string): SectorFilings | undefined {
    return BY_SECTOR.get(sector.toLowerCase());
}

// Company names are unique across the database, so a name lookup is enough.
const BY_COMPANY = new Map<string, MaterialFiling[]>();
for (const s of BY_SECTOR.values()) {
    for (const f of s.filings) {
        if (!BY_COMPANY.has(f.company)) BY_COMPANY.set(f.company, []);
        BY_COMPANY.get(f.company)!.push(f);
    }
}

export function getCompanyFilings(company: string): MaterialFiling[] {
    return BY_COMPANY.get(company) ?? [];
}
