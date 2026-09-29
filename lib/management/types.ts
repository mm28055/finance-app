// The executive team of a company and who really runs it. Browser-safe (no data file).
export type ManagementStyle = 'Promoter-run' | 'Professional' | 'Promoter-owned, professionally run';

export interface Executive {
    name: string;
    role: string;
    since?: string;
    family: boolean;        // promoter or promoter family
    relation?: string;      // "son of the Chairman"
    stake?: string;         // own shareholding as disclosed, "12.4% (FY26 annual report)"
    bio: string;            // education, earlier career, role here
}

export interface Management {
    company: string;
    sector: string;
    style: ManagementStyle;
    styleNote: string;
    people: Executive[];
    changes?: string;       // recent exits or appointments
    sources: string[];
    updatedOn: string;
}
