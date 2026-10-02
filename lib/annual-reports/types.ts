// What the latest annual report showed for a company, for the ANNUAL REPORT tab on its card.
// Built by scripts/build-annual-reports.ts from the research done for the sector notes; only the
// report for the financial year just ended counts (FY26, or CY25 for calendar-year companies).
export interface AnnualReport {
    /** Company name exactly as stored in the database. */
    company: string;
    sector: string;
    /** The report read: "FY26" (year to March 2026) or "CY25" (calendar year 2025). */
    year: 'FY26' | 'CY25';
    /** The annual report itself (exchange PDF), when the research recorded the link. */
    url?: string;
    /** The auditor's opinion and remarks. */
    auditor?: string;
    /** Dealings with promoters, their companies and other related parties. */
    relatedParties?: string;
    /** Contingent liabilities, disputed claims, guarantees, commitments. */
    contingent?: string;
    /** What management says about the year ahead. */
    outlook?: string;
    /** Other points from the report: segments, loss-making subsidiaries, pledges, pay, one-off items. */
    other?: string;
    /** Red flags, one sentence each. */
    flags: string[];
    /** When the research was done, ISO date. */
    researchedOn: string;
}
