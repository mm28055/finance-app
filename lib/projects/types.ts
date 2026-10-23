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
    capacityAdd?: string;    // capacity it adds, against today's base: "+4,600 t a year (doubles Chennai)"
    status: ProjectStatus;
    source: string;          // where the latest facts come from, "Q1 FY27 call (Aug 2026)"
    updatedOn: string;       // yyyy-mm-dd
    /** Later changes by management (delay, cost overrun, cut). The original plan stays as written. */
    revisions?: { on: string; text: string }[];
}

/** What the company can make today and how full it runs; the base each project adds to. */
export interface Capacity {
    company: string;
    sector: string;
    today?: string;          // installed capacity by plant or line
    utilisation?: string;    // how full it runs, latest
    fullUse?: string;        // sales today's capacity can make at full use
    capexStatus?: string;    // where the capex cycle stands (also says why when no project is listed)
    source: string;
}

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
    planned: 'Planned',
    building: 'Being built',
    started: 'Started',
    ramping: 'Ramping up',
    'on hold': 'On hold',
    dropped: 'Dropped',
};

/**
 * The capacity and projects block drawn as bars and a timeline. One per company, in
 * lib/projects/pictures.json. Drawn only from the capacity entry, projects and project
 * milestones whose fingerprint it carries; when any of those change, the site falls back to
 * the text version until the picture is redrawn. Every fact in the text must appear here.
 */
export interface CapacityPictureData {
    company: string;
    fingerprint: string;        // pictureFingerprint() of the facts it was drawn from
    checkedOn: string;          // yyyy-mm-dd, when the figures were last checked against sources
    /** How full each line runs. usedPct 0–100. */
    lines?: {
        heading: string;        // "How full each line is today (Q1 FY27)"
        items: {
            name: string;       // "Machining"
            size: string;       // "7.2 lakh machine hours"
            usedPct: number;
            usedLabel?: string; // defaults to "<usedPct>% used"; "about 60% used", "90–95% used"
            marker?: { pct: number; label: string };   // a target, dashed line
            tight?: boolean;    // the bottleneck or fully used
            tightLabel?: string;// "the bottleneck"
            note?: string;
        }[];
    };
    /** What projects add on top of today's capacity: grey base plus green addition. */
    adds?: {
        heading: string;        // "What the Hyderabad plant adds (in modules from FY28, complete by Q1 FY30)"
        projectId?: string;
        bars: { name: string; sub: string; base: number; add: number; baseLabel: string; addLabel: string; right: string }[];
        notes?: string[];
        caveat?: string;        // smaller grey note, e.g. figures that don't add up
    }[];
    /** Money: spent against planned per project. Omit spent when unknown. */
    money?: {
        heading?: string;
        items: {
            name: string;
            sub?: string;
            total?: number;     // ₹cr; omit for a cost given only as a range or not at all
            spent?: number;     // ₹cr spent so far, when stated
            right: string;      // "₹60cr of ₹290cr"
            status?: ProjectStatus | 'study';
            projectId?: string;
        }[];
    };
    /** Timeline stops in date order. */
    timeline?: {
        when: string;           // "Q1 FY27", "By FY31"
        tone: 'done' | 'next' | 'later' | 'maybe';
        text?: string;
        sub?: string;
        milestones?: string[];     // checkpoint ids of project milestones shown here, live with their ticks; each milestone at exactly one stop
    }[];
    /** Facts from the text that no bar or stop carries (so nothing is lost). */
    notes?: string[];
    source: string;
}
