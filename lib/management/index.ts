// Executive teams by company, from lib/management/management.json (researched from annual reports,
// company websites and exchange filings; the weekly review updates it when a CEO/CFO/MD changes).
import store from './management.json';
import type { Management } from './types';

export * from './types';

const ALL = (store as { companies: Management[] }).companies;

export function managementFor(company: string): Management | undefined {
    const key = company.trim().toLowerCase();
    return ALL.find(m => m.company.trim().toLowerCase() === key);
}
