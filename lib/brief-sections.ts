// The quarter-on-quarter comparison (the DELTA tab) has its own sections: Narrative Shift, Guidance
// Evolution, Execution vs. Promise, Emphasis, Risk Landscape. Gemini sometimes writes them into the
// quarter's own write-up as well (47 of them, mostly Q3 FY26, among them Raymond's), where they read
// as if the quarter tab were showing the delta. They are recognised by their headings and left out.

const DELTA_HEADINGS = ['DELTA', 'NARRATIVE SHIFT', 'GUIDANCE EVOLUTION', 'EXECUTION VS', 'EMPHASIS', 'RISK LANDSCAPE'];

/** True for a "## …" heading that belongs to the delta report, not the quarter's write-up. */
export function isDeltaHeading(heading: string): boolean {
    const h = heading.toUpperCase();
    return DELTA_HEADINGS.some(d => h.includes(d));
}

/** The write-up with any delta-report sections (each "## " heading and what follows it) removed. */
export function stripDeltaSections(brief: string | null | undefined): string | null | undefined {
    if (!brief) return brief;
    return brief.split(/\n(?=##\s)/g)
        .filter(s => { const m = s.match(/^##\s+(.+)$/m); return !(m && /^\s*##\s/.test(s) && isDeltaHeading(m[1])); })
        .join('\n').trim();
}
