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
    // A broker's conference where many companies present ("Bharat Connect Conference", an
    // "Investor Company Connect" event, an SME conclave), and calls held only to give an update
    // or explain a deal ("Acquisition Update Conference Call", "company update conference call").
    /\b[A-Z][a-z]+\s+Connect\s+(Conference|Event|Meet|Summit)\b/,
    /\b(investor|company)\s+(company\s+)?connect\b/i,
    /\b(conclave|summit)\b/i,
    /\b(company|business|acquisition|merger|strategy|corporate)\s+update\s+(conference\s+)?(call|webinar|meet)\b/i,
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
    // Large companies say it outright: SBI files every results call as the
    // "Q1FY27 post results Analyst Meet", which the analyst-meet marker above
    // sent to a General slot, emptying both of its quarters.
    /\bpost[\s-]*(results?|earnings)\b[^.]{0,40}\b(call|concall|conference|meet|meeting)\b/i,
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

// -----------------------------------------------------------------------------
// Reading a filed transcript's own first pages — used by the exchange feed
// (scripts/sync-exchange-transcripts.ts), where the filing's subject line is
// usually just "...has informed the Exchange about Transcript" and says nothing
// about which meeting or which quarter the document covers.
// -----------------------------------------------------------------------------

const MONTH_NAMES = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const MONTH_RE = '(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)';
const monthIndex = (s: string) => MONTH_NAMES.findIndex(m => m.startsWith(s.toLowerCase().slice(0, 3)));

/** Every date written out in `text`, with its position. Day-first and month-first forms. */
function datesIn(text: string): { at: number; date: Date }[] {
    const out: { at: number; date: Date }[] = [];
    const push = (at: number, y: number, m: number, d: number) => {
        if (m < 0 || m > 11 || d < 1 || d > 31 || y < 2000 || y > 2100) return;
        out.push({ at, date: new Date(Date.UTC(y, m, d, 12)) });
    };
    // "August 07, 2026" / "Aug 7 2026" / "July 21 st, 2026"
    for (const m of text.matchAll(new RegExp(String.raw`\b${MONTH_RE}\.?\s+(\d{1,2})\s?(?:st|nd|rd|th)?,?\s+(\d{4})\b`, 'gi')))
        push(m.index!, +m[3], monthIndex(m[1]), +m[2]);
    // "7th August 2026" / "07 August, 2026" / "21 st day of July 2026" (PDF text
    // often splits the ordinal suffix off with a space)
    for (const m of text.matchAll(new RegExp(String.raw`\b(\d{1,2})\s?(?:st|nd|rd|th)?\s+(?:day\s+of\s+)?${MONTH_RE}\.?,?\s+(\d{4})\b`, 'gi')))
        push(m.index!, +m[3], monthIndex(m[2]), +m[1]);
    // "07-08-2026" / "07.08.2026" / "07/08/2026" (Indian filings are day-first)
    for (const m of text.matchAll(/\b(\d{1,2})[-./](\d{1,2})[-./](20\d{2})\b/g))
        push(m.index!, +m[3], +m[2] - 1, +m[1]);
    return out.sort((a, b) => a.at - b.at);
}

/**
 * The day the call or meeting took place, read from the opening of the
 * transcript. The cover letter carries its own (later) date, dates of earlier
 * letters and often the quarter-end date too, so:
 *   1. a date introduced by "held on / conducted on / convened on" wins;
 *   2. otherwise the first plausible date in reading order — usually the title
 *      page ("Q1 FY27 Earnings Conference Call, August 07, 2026").
 * Plausible = no later than the filing, at most 75 days before it, and not a
 * letter date ("Date:", "letter dated", the letter's own date), a period end
 * ("quarter ended June 30") or a bare quarter-end day.
 */
export function detectCallDate(rawText: string | null | undefined, filedOn: Date): Date | null {
    if (!rawText) return null;
    const head = rawText.replace(/\s+/g, ' ').slice(0, 4000);
    const latest = filedOn.getTime() + 36 * 3600 * 1000;
    const earliest = filedOn.getTime() - 75 * 86400 * 1000;
    const inRange = datesIn(head).filter(d => d.date.getTime() <= latest && d.date.getTime() >= earliest);
    const isHeld = (d: { at: number }) =>
        // "held on Tuesday, the", "held with analysts on", "conducted on"
        /\b(held|conducted|convened|organi[sz]ed|scheduled|hosted|took\s+place)\b[^.;]{0,30}?\bon\s+(?:\w+day,?\s+)?(?:the\s+)?$|\b(held|conducted|convened|hosted)\s+(?:\w+day,?\s+)?$/i
            .test(head.slice(Math.max(0, d.at - 60), d.at).trim() + ' ');
    const held = inRange.find(isHeld);
    if (held) return held.date;
    const plausible = inRange.filter(d => {
        const before = head.slice(Math.max(0, d.at - 30), d.at).toLowerCase().trim();
        if (/(ended|ending|end(?:ed)?\s+on|as\s+(?:on|at)|period\s+from|to|dated?\s*:?|letters?(?:\s+dated)?)\s*(?:the\s+)?$/.test(before)) return false;
        // The cover letter's own date: the filing day itself (IST). A call
        // filed that quickly still says "held on", which is taken above.
        const filedDayIst = new Date(filedOn.getTime() + 330 * 60000).toISOString().slice(0, 10);
        if (d.date.toISOString().slice(0, 10) >= filedDayIst) return false;
        const m = d.date.getUTCMonth(), day = d.date.getUTCDate();
        return !((m === 2 && day === 31) || (m === 5 && day === 30) || (m === 8 && day === 30) || (m === 11 && day === 31));
    });
    return plausible.length ? plausible[0].date : null;
}

/** Quarter end (UTC noon) for "Q1 FY27" etc. Indian fiscal year, Apr-Mar. */
export function quarterEndDate(quarterName: string): Date | null {
    const m = quarterName.match(/^Q([1-4]) FY(\d{2})$/);
    if (!m) return null;
    const q = +m[1], fy = 2000 + +m[2];
    const [month, year] = q === 1 ? [5, fy - 1] : q === 2 ? [8, fy - 1] : q === 3 ? [11, fy - 1] : [2, fy];
    return new Date(Date.UTC(year, month + 1, 0, 12)); // last day of that month
}

const fyName = (q: number, fy: number) => `Q${q} FY${String(fy % 100).padStart(2, '0')}`;

/**
 * The quarter a results-call transcript says it discusses, e.g. "Q1 FY27",
 * from the opening pages: "Q1 FY27", "Q1FY2027", "Q1 FY 2026-27", "first
 * quarter of FY27", "quarter ended June 30, 2026". Checked against the call
 * date — a results call comes after its quarter closes and within about five
 * months — so a passing mention of last year's quarter is not taken. Null when
 * nothing plausible is stated; callers then fall back to the call date.
 */
export function detectStatedQuarter(rawText: string | null | undefined, callDate: Date): string | null {
    if (!rawText) return null;
    const head = rawText.replace(/\s+/g, ' ').slice(0, 6000);
    const found: { at: number; name: string }[] = [];
    const ordinal: Record<string, number> = { first: 1, second: 2, third: 3, fourth: 4, '1st': 1, '2nd': 2, '3rd': 3, '4th': 4 };
    const fyFrom = (a: string, b?: string) => {
        // "27" / "2027" / "2026-27" / "26-27". The second part only counts when
        // it is the next year ("FY27 - 12 August" must not read as FY12).
        const first = +a % 100;
        if (b && (+b % 100) === (first + 1) % 100) return 2000 + (+b % 100);
        return 2000 + first;
    };
    for (const m of head.matchAll(/\b(?:Q|QTR|Quarter)\s*[-']?\s*([1-4])\s*(?:of\s+)?(?:FY|F\.Y\.|fiscal(?:\s+year)?)\s*'?\s*(\d{2,4})(?:\s*[-–/]\s*(\d{2,4}))?\b/gi))
        found.push({ at: m.index!, name: fyName(+m[1], fyFrom(m[2], m[3])) });
    // A fourth-quarter call is usually announced together with the full year —
    // "Q4 & Full Year FY26 Results" — which pushes the FY away from the quarter
    // and hid the statement from the pattern above. Turtlemint's Q4 FY26 call
    // was held in July (they had only just listed), so with nothing stated the
    // date decided, a July call read as Q1 FY27, and the real Q1 call arriving
    // in August found the quarter already taken.
    for (const m of head.matchAll(/\b(?:Q|QTR|Quarter)\s*[-']?\s*([1-4])\s*(?:&|and)\s*(?:the\s+)?(?:(?:full[\s-]?year|year|annual)\s*)?(?:results?\s+)?(?:FY|F\.Y\.|fiscal(?:\s+year)?|financial\s+year)\s*'?\s*(\d{2,4})(?:\s*[-–/]\s*(\d{2,4}))?\b/gi))
        found.push({ at: m.index!, name: fyName(+m[1], fyFrom(m[2], m[3])) });
    for (const m of head.matchAll(/\b(first|second|third|fourth|1st|2nd|3rd|4th)\s+quarter\s+(?:of\s+)?(?:the\s+)?(?:FY|F\.Y\.|fiscal(?:\s+year)?|financial\s+year)\s*'?\s*(\d{2,4})(?:\s*[-–/]\s*(\d{2,4}))?\b/gi))
        found.push({ at: m.index!, name: fyName(ordinal[m[1].toLowerCase()], fyFrom(m[2], m[3])) });
    for (const m of head.matchAll(new RegExp(String.raw`\bquarter\s+(?:and\s+(?:the\s+)?(?:year|half[\s-]?year|nine\s+months|period)\s+)?(?:ended|ending)\s+(?:on\s+)?(?:(\d{1,2})(?:st|nd|rd|th)?\s+${MONTH_RE},?\s+(\d{4})|${MONTH_RE}\s+(?:(\d{1,2})(?:st|nd|rd|th)?,?\s+)?(\d{4}))`, 'gi'))) {
        const month = monthIndex(m[2] || m[4]);
        const year = +(m[3] || m[6]);
        const q = month === 5 ? 1 : month === 8 ? 2 : month === 11 ? 3 : month === 2 ? 4 : 0;
        if (q) found.push({ at: m.index!, name: fyName(q, q === 4 ? year : year + 1) });
    }
    const plausible = found
        .sort((a, b) => a.at - b.at)
        .filter(f => {
            const end = quarterEndDate(f.name);
            if (!end) return false;
            const lag = callDate.getTime() - end.getTime();
            return lag > 0 && lag < 150 * 86400 * 1000;
        });
    return plausible.length ? plausible[0].name : null;
}

/**
 * True when the document is an Annual General Meeting transcript: its opening
 * (cover letter subject, title page or the chair's welcome) names the AGM
 * before it names any earnings call. The filing's subject line counts too.
 */
export function isAgmDocument(rawText: string | null | undefined, subject?: string | null): boolean {
    const agm = /\bannual\s+general\s+meeting\b|\bAGM\b/i;
    if (subject && agm.test(subject) && !/\bearnings\b|\bresults?\s+call\b/i.test(subject)) return true;
    if (!rawText) return false;
    const head = rawText.replace(/\s+/g, ' ').slice(0, 2500);
    const a = head.search(agm);
    if (a === -1) return false;
    const e = EARNINGS_PATTERNS.map(p => head.search(p)).filter(i => i >= 0);
    return e.length === 0 || a < Math.min(...e);
}

/**
 * True when a document reads as a call or meeting transcript — used for exchange
 * filings whose subject does not say "transcript" ("General Updates", "Updates").
 * Needs length, call/meeting language near the top, and the shape of a
 * transcript: a moderator/operator, or many speaker turns ("Name: ..."). Cover
 * letters, presentations, BRSRs and annual reports fail one of these.
 */
export function looksLikeCallTranscript(rawText: string | null | undefined): boolean {
    if (!rawText) return false;
    const flat = rawText.replace(/\s+/g, ' ');
    if (flat.length < 5000) return false;
    const head = flat.slice(0, 4000);
    if (/\b(business\s+responsibility|annual\s+report|investor\s+presentation|earnings\s+presentation|notice\s+of\s+(?:the\s+)?(?:\d+\w*\s+)?annual)\b/i.test(head)
        && !/\btranscript\b/i.test(head)) return false;
    if (!/\b(call|con-?call|conference|meet|meeting|transcript|webinar)\b/i.test(head)) return false;
    if (/\b(moderator|operator)\s*:/i.test(flat)) return true;
    const turns = (rawText.match(/(?:^|\n)\s*[A-Z][A-Za-z.'-]+(?:\s+[A-Z][A-Za-z.'-]+){0,3}\s*:\s/g) || []).length;
    return turns >= 20 && /\bquestions?\b/i.test(flat);
}
