// Plants, expansions and other capital projects a company has announced, tracked from
// announcement to full use. Browser-safe (no data file). Milestones ("starts production by
// Q3 FY27") are checkpoints in lib/checkpoints with `project` set to the project's id.
export type ProjectStatus = 'planned' | 'building' | 'started' | 'ramping' | 'on hold' | 'dropped';

export interface Project {
    id: string;              // "<company-slug>-<short-name>", e.g. "gala-precision-wada"
    company: string;         // the company's stored name, as in the notes
    sector: string;
    name: string;            // "Wada plant expansion"
    what: string;            // one line: product and capacity
    cost?: string;           // "₹40–45cr"
    expectedStart?: string;  // the quarter production or operations start, "Q3 FY27"
    adds?: string;           // what it should add, "about ₹150cr of sales at full use"
    status: ProjectStatus;
    source: string;          // where the latest facts come from, "Q1 FY27 call (Aug 2026)"
    updatedOn: string;       // yyyy-mm-dd
    /** Later changes by management (delay, cost overrun, cut). The original plan stays as written. */
    revisions?: { on: string; text: string }[];
}

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
    planned: 'Planned',
    building: 'Being built',
    started: 'Started',
    ramping: 'Ramping up',
    'on hold': 'On hold',
    dropped: 'Dropped',
};
