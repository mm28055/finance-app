// The dashboard address that finds one company and opens its row (read by SectorList on load).
// Used by company names in the Filings panel, which open it in a new tab.
export const companyHref = (company: string) => `/?company=${encodeURIComponent(company)}`;
