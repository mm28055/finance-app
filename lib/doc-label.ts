// -----------------------------------------------------------------------------
// Names and labels for "General" slots — the documents that are not a quarter's
// results call (see lib/doc-type.ts and lib/quarters.ts).
//
// The slot name carries the kind of document, so the site can label it without
// a schema change and without reading the transcript text:
//
//   "AGM 23 Sep 2026"           an Annual General Meeting transcript
//   "Special call 05 Sep 2026"  investor/analyst day, business-update or
//                               acquisition call, analyst meet, ...
//   "General 06 Jul 2026"       older slots written before the kind was
//                               recorded (smart-sync still writes these);
//                               their kind is read from the analysis text.
//
// Every such slot is stored with Quarter.q = 'GEN', which is what retention,
// scores and quarter tabs key on — the prefix is only for the label.
//
// No imports: this module is used by client components as well as the server.
// -----------------------------------------------------------------------------

export type GeneralKind = 'AGM' | 'SPECIAL';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const PREFIX: Record<GeneralKind | 'GENERAL', string> = {
    AGM: 'AGM',
    SPECIAL: 'Special call',
    GENERAL: 'General',
};

const SLOT_RE = /^(General|AGM|Special call) (\d{1,2}) ([A-Z][a-z]{2}) (\d{4})$/;

/** Slot name for a non-quarterly document on a given day, e.g. "AGM 23 Sep 2026". */
export function generalSlotName(eventDate: string | Date, kind?: GeneralKind): string {
    const d = new Date(eventDate);
    const dd = d.getDate().toString().padStart(2, '0');
    return `${PREFIX[kind || 'GENERAL']} ${dd} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** True for any General-style slot name (General / AGM / Special call + date). */
export function isGeneralSlotName(name: string): boolean {
    return SLOT_RE.test((name || '').trim());
}

/** The day a General slot refers to (UTC noon), or null for a quarter name. */
export function generalSlotDate(name: string): Date | null {
    const m = (name || '').trim().match(SLOT_RE);
    if (!m) return null;
    const mon = MONTHS.indexOf(m[3]);
    if (mon < 0) return null;
    return new Date(Date.UTC(+m[4], mon, +m[2], 12));
}

/** The kind recorded in a slot name; null for legacy "General" slots and quarters. */
export function generalKindFromName(name: string): GeneralKind | null {
    const m = (name || '').trim().match(SLOT_RE);
    if (!m) return null;
    return m[1] === 'AGM' ? 'AGM' : m[1] === 'Special call' ? 'SPECIAL' : null;
}

/**
 * Reads the kind from the opening of a document or its analysis. An AGM
 * transcript says so on its first page ("Transcript of the 49th Annual General
 * Meeting"); anything else that is not a results call is a special call.
 */
export function generalKindFromText(text: string | null | undefined): GeneralKind {
    const head = (text || '').replace(/\s+/g, ' ').slice(0, 1500);
    return /\bannual\s+general\s+meeting\b|\bAGM\b/i.test(head) ? 'AGM' : 'SPECIAL';
}

/**
 * What the site shows for a slot: "AGM · 23 Sep 2026" / "Special call · 5 Sep
 * 2026" for General slots, the name unchanged for quarters. `hintText` (the
 * analysis brief) decides the kind of a legacy "General" slot.
 */
export function generalDocLabel(name: string, hintText?: string | null): string {
    const m = (name || '').trim().match(SLOT_RE);
    if (!m) return name;
    const kind = generalKindFromName(name) || generalKindFromText(hintText);
    return `${kind === 'AGM' ? 'AGM' : 'Special call'} · ${parseInt(m[2], 10)} ${m[3]} ${m[4]}`;
}

/** Short form for tooltips: "AGM, 23 Sep" / "special call, 5 Sep". */
export function generalDocSource(name: string, hintText?: string | null): string | null {
    const m = (name || '').trim().match(SLOT_RE);
    if (!m) return null;
    const kind = generalKindFromName(name) || generalKindFromText(hintText);
    return `${kind === 'AGM' ? 'AGM' : 'special call'}, ${parseInt(m[2], 10)} ${m[3]}`;
}
