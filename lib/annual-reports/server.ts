// Server-only access to the annual-report findings written by scripts/build-annual-reports.ts.
import store from './reports.json';
import type { AnnualReport } from './types';

const BY_COMPANY = new Map((store as unknown as { reports: AnnualReport[] }).reports.map(r => [r.company, r]));

export function annualReportFor(company: string): AnnualReport | undefined {
    return BY_COMPANY.get(company);
}
