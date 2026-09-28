import type { SectorOverview } from './types';

/** The call each note gives a company, read from its "Verdict: …" line on Tab 2. */
export type Call = 'own' | 'follow' | 'wait' | 'pass' | 'avoid';
export const CALLS: Call[] = ['own', 'follow', 'wait', 'pass', 'avoid'];

/** Company name (lower case) → the note's call, across every note and group tab. */
export function companyCalls(overviews: SectorOverview[]): Map<string, Call> {
    const out = new Map<string, Call>();
    const read = (note: SectorOverview) => {
        for (const p of note.businesses?.profiles || []) {
            const m = (p.inShort || []).join(' ').match(/Verdict:\s*(own|follow|wait|pass|avoid)\b/i);
            if (m) out.set(p.company.trim().toLowerCase(), m[1].toLowerCase() as Call);
        }
    };
    for (const ov of overviews) {
        if (ov.buckets?.length) ov.buckets.forEach(b => read(b.note));
        else read(ov);
    }
    return out;
}
