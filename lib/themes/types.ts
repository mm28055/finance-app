// Investment themes (defence outside the aerospace & defence sector, battery storage, data centres, medical devices,
// semiconductors, nuclear): which companies have something concrete behind the theme, from their own calls.
// Kept apart from the owner's own tags, which they edit by hand.

export type ThemeLevel = 'now' | 'building';

export interface ThemeCompany {
    company: string;
    /** 'now': revenue or orders in hand for the theme. 'building': committed capex, approvals or first trials, no meaningful revenue yet. */
    level: ThemeLevel;
    /** One line, in plain words, of what the company said. */
    why: string;
    /** Where it was said, e.g. "Q1 FY27 call, Aug 2026". */
    source: string;
}

export interface Theme {
    key: string;
    label: string;
    /** What counts for this theme, shown with the list. */
    scope: string;
    companies: ThemeCompany[];
}

export interface ThemesStore {
    updated: string;
    /** How companies were chosen, shown with every theme. */
    method: string;
    themes: Theme[];
}
