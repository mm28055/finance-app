// -----------------------------------------------------------------------------
// Company-name matching shared by the Screener lookup (lib/sync-service.ts) and
// the corporate-actions job (scripts/sync-corporate-actions.ts).
//
// scripts/sync-finance.js is plain JS run by node and keeps its own twin of
// these helpers — change both together.
// -----------------------------------------------------------------------------

const NAME_NOISE = /\b(Ltd|Limited|Engg|Engineering|Industry|Industries|Corp|Corporation|Inc|Co|Com|Pvt|The|India)\.?\b/gi;

export function normaliseName(s: string): string {
    return (s || '')
        .replace(NAME_NOISE, ' ')
        .replace(/[^a-z0-9 ]/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

/** Dice coefficient over letter bigrams — tolerant of spelling drift
 *  ("Refrigrations" vs "Refrigerations"), still separates "Anup" from "Anupam". */
export function nameSimilarity(a: string, b: string): number {
    const bigrams = (s: string) => {
        const out: string[] = [];
        for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
        return out;
    };
    const A = bigrams(a), B = bigrams(b);
    if (!A.length || !B.length) return a && a === b ? 1 : 0;
    const pool = [...B];
    let hits = 0;
    for (const g of A) {
        const i = pool.indexOf(g);
        if (i > -1) { hits++; pool.splice(i, 1); }
    }
    return (2 * hits) / (A.length + B.length);
}

export const MIN_NAME_MATCH = 0.75;

const nameTokens = (s: string) => normaliseName(s).split(' ').filter(t => t.length >= 2);

/** Every word of `ours` starts a word of `theirs` (or the other way round) —
 *  how abbreviated stored names ("Crompt.Greaves Cons.") meet the full one. */
export function tokensFit(ours: string, theirs: string): boolean {
    const a = nameTokens(ours), b = nameTokens(theirs);
    if (!a.length || !b.length) return false;
    return a.every(t => b.some(u => u.startsWith(t) || t.startsWith(u)));
}

/** Stored name plus its comma-separated aliases, blanks dropped. */
export function namesOf(name: string, aliases?: string | null): string[] {
    return [name, ...(aliases || '').split(',')].map(s => (s || '').trim()).filter(Boolean);
}

/** True when a single candidate name is the same company as any of ours. */
export function sameCompanyName(ours: string[], theirs: string): boolean {
    const t = normaliseName(theirs);
    return ours.some(o => nameSimilarity(normaliseName(o), t) >= MIN_NAME_MATCH || tokensFit(o, theirs));
}
