// -----------------------------------------------------------------------------
// Transcript document-type classifier.
//
// Tijori files every document a company publishes under the quarter its event
// date falls in — but not all of them are quarterly earnings calls. Companies
// also hold investor meets, analyst days and business-update calls, and those
// arrive labelled with the same quarter. Storing one in the quarter slot means
// the quarter's analysis is written from a document that never discussed the
// quarter's results (see GE Power's 06 Jul 2026 investor meet, which landed in
// Q1 FY27), and when two documents share a quarter the second is dropped
// entirely by the one-transcript-per-quarter constraint.
//
// So each downloaded document is classified, and anything that is not the
// quarter's earnings call is stored under its own "General <date>" slot where
// it keeps a full analysis without occupying the quarter.
//
// The default is EARNINGS. A transcript is only diverted on a positive match,
// because misfiling a real earnings call would silently empty a quarter tab —
// far worse than leaving an odd document in place.
// -----------------------------------------------------------------------------

export type DocType = 'EARNINGS' | 'GENERAL';

/**
 * How much of the document is examined. Indian filings open with a cover letter
 * to BSE/NSE whose "Sub:" line names the document ("Transcript of the Investor
 * Meet held on 06 July 2026"). Past roughly this point the body of any call
 * mentions "conference call" and "earnings" in passing, which is noise.
 */
const HEADER_CHARS = 2000;

/** Positive markers for a non-earnings document, checked against the header. */
const GENERAL_PATTERNS: RegExp[] = [
    /\b(investor|analyst)s?\s*(&|and)?\s*(investor|analyst)?s?\s*(meet|meeting)\b/i,
    /\b(investor|analyst)s?\s+day\b/i,
    /\bcapital\s+markets?\s+day\b/i,
    /\bannual\s+general\s+meeting\b/i,
    /\bextraordinary\s+general\s+meeting\b/i,
    /\bbusiness\s+update\s+(call|meet)\b/i,
    /\bpress\s+(conference|meet)\b/i,
    /\bmedia\s+interaction\b/i,
];

/**
 * Markers for a genuine earnings call. Present in the header these outrank the
 * general markers — a cover letter reading "Transcript of the Earnings Call and
 * Investor Meet" is an earnings call.
 */
const EARNINGS_PATTERNS: RegExp[] = [
    /\bearnings\s+(call|conference|webinar)\b/i,
    /\bearnings\s+concall\b/i,
    /\bresults?\s+(call|conference\s+call)\b/i,
    /\bQ[1-4]\s*(FY)?\s*'?\d{2,4}\b[^.]{0,40}\b(call|concall|conference)\b/i,
    /\b(quarter|quarterly)\s+(results?|earnings)\s+(call|conference)\b/i,
    // Smaller companies hold their results call and call it an "Investor/Analyst
    // Meeting" — Aartech Solonics filed its Q1 FY27 results discussion that way,
    // and the general marker above sent the company's only quarterly call to a
    // General slot, leaving the quarter empty. What settles it is the stated
    // PURPOSE: a document convened to discuss results for a named quarter is
    // that quarter's earnings call whatever the invitation was titled. Anchored
    // on "quarter ended" so an annual meeting ("year ended") and a meet that
    // merely mentions a quarter in passing both stay out — the header is the
    // cover letter, where the subject line states what the document is.
    /\b(financial\s+)?(results?|performance)\b[^.]{0,60}\bquarter\s+ended\b/i,
];

export interface Classification {
    type: DocType;
    /** The pattern text that decided it, for logging. */
    reason: string;
}

export function classifyTranscript(rawText: string | null | undefined): Classification {
    if (!rawText) return { type: 'EARNINGS', reason: 'no text — defaulted' };

    const header = rawText.replace(/\s+/g, ' ').trim().slice(0, HEADER_CHARS);

    const earningsHit = EARNINGS_PATTERNS.find(p => p.test(header));
    if (earningsHit) return { type: 'EARNINGS', reason: `earnings marker ${earningsHit}` };

    const generalHit = GENERAL_PATTERNS.find(p => p.test(header));
    if (generalHit) return { type: 'GENERAL', reason: `general marker ${generalHit}` };

    return { type: 'EARNINGS', reason: 'no marker — defaulted' };
}

// -----------------------------------------------------------------------------
// Related-entity detection.
//
// A listed company and its associated InvIT / REIT / trust / fund file their
// concalls under the same Tijori ISIN, and both are genuine earnings calls for
// the same quarter — so the earnings/general split above cannot separate them.
// IRB is the case in point: on 24 Jul 2026 the IRB InvIT Fund discussed the June
// quarter, and on 30 Jul 2026 IRB Infrastructure Developers discussed its own.
// Ordering alone put the trust's call in the company's Q1 FY27 slot.
//
// The operator's opening line names the entity ("Welcome to the IRB InvIT call",
// "Welcome to the IRB Infrastructure Developers conference call"), so that line
// is matched against the company we are syncing.
// -----------------------------------------------------------------------------

/** Vehicle words that mark a separate listed entity from its sponsor company. */
const VEHICLE_WORDS = /\b(invit|reit|trust|fund)\b/i;

/** Pulls the entity named in the operator's welcome line, if there is one. */
function welcomeEntity(rawText: string): string | null {
    const head = rawText.replace(/\s+/g, ' ').trim().slice(0, 1200);
    const m = head.match(/welcome\s+to\s+(?:the\s+)?(.{3,90}?)\s*(?:conference\s+)?call\b/i);
    return m ? m[1].trim() : null;
}

/**
 * True when the document's own opening names a *vehicle* entity (InvIT/REIT/
 * trust/fund) that the company we are syncing is not. Deliberately narrow: it
 * fires only on that explicit mismatch, never on a general name difference,
 * because transcripts routinely use a longer legal name than the stored one.
 */
export function isRelatedEntityCall(rawText: string | null | undefined, companyName: string): boolean {
    if (!rawText) return false;
    const entity = welcomeEntity(rawText);
    if (!entity) return false;

    const entityIsVehicle = VEHICLE_WORDS.test(entity);
    const companyIsVehicle = VEHICLE_WORDS.test(companyName);

    return entityIsVehicle && !companyIsVehicle;
}
