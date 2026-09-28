// -----------------------------------------------------------------------------
// Who owns a company, quarter by quarter, and the changes worth a look.
//
// Rows live in "ShareholdingQuarter" (filled by scripts/sync-finance.js from the
// Screener page it already downloads; `pledged` from the NSE shareholding filing
// in scripts/sync-corporate-actions.ts). This file is pure — no database — so
// the dashboard's client components can import the types and the wording.
// -----------------------------------------------------------------------------

/** One period of the shareholding pattern. Percentages of total shares, except `pledged`. */
export interface HoldingRow {
    /** Screener's column label, e.g. "Sep 2026" (an off-cycle filing can add "Jul 2026"). */
    period: string;
    /** Last day of that month, "YYYY-MM-DD". */
    periodEnd: string;
    promoter: number;
    fii: number;
    dii: number;
    government: number;
    public: number;
    shareholders: number | null;
    /** Share of the promoter holding that is pledged, in %. Null when not known. */
    pledged: number | null;
}

/** A change worth a look ('watch', shown in purple) or a good sign ('good'). */
export interface HoldingNote {
    kind: 'promoter' | 'pledge' | 'fii' | 'dii';
    tone: 'watch' | 'good';
    text: string;
}

export const HOLDING_RULES = {
    // Set so that only real moves show: at looser levels a third of all companies carried
    // a warning, mostly routine drift and small dilution from share issues.
    promoterQuarterDrop: 3,   // points, latest period vs the one before
    promoterYearDrop: 5,      // points, latest period vs a year earlier
    pledgedHigh: 30,          // % of promoter holding
    pledgedJump: 15,          // points in a quarter
    institutionMove: 4,       // FII / DII points in a quarter, either way
    /** Rows older than this are history, not news: no notes are raised on them. */
    staleDays: 270,
} as const;

const DAY = 86400000;
const t = (s: string) => new Date(s + 'T00:00:00Z').getTime();

/** 54.3 -> "54.3%", 0.2 -> "0.2%", 14.04 -> "14%" (pledges read as whole numbers). */
const pct = (v: number, digits = 1) => `${Number(v.toFixed(digits))}%`;
const pts = (v: number) => `${v > 0 ? '+' : '−'}${Math.abs(v).toFixed(1)} pts`;

/**
 * Notes for a company, from its rows (any order). Empty when there is nothing
 * to say. Wording is plain English, e.g. "Promoter −2.1 pts in a year (54.3% → 52.2%)".
 */
export function holdingNotes(input: HoldingRow[], today = new Date()): HoldingNote[] {
    const rows = [...input].sort((a, b) => t(a.periodEnd) - t(b.periodEnd));
    const latest = rows[rows.length - 1];
    if (!latest || today.getTime() - t(latest.periodEnd) > HOLDING_RULES.staleDays * DAY) return [];
    const prev = rows.length > 1 ? rows[rows.length - 2] : null;
    const notes: HoldingNote[] = [];

    // Promoter: a fall since the previous period, or over a year.
    let quarterDrop = 0;
    if (prev) {
        quarterDrop = prev.promoter - latest.promoter;
        if (quarterDrop >= HOLDING_RULES.promoterQuarterDrop - 1e-9) {
            notes.push({ kind: 'promoter', tone: 'watch', text: `Promoter ${pts(-quarterDrop)} since ${prev.period} (${pct(prev.promoter)} → ${pct(latest.promoter)})` });
        }
    }
    // A year earlier: the newest period at least ~11 months before the latest.
    const yearAgo = [...rows].reverse().find(r => t(latest.periodEnd) - t(r.periodEnd) >= 330 * DAY);
    if (yearAgo) {
        const yearDrop = yearAgo.promoter - latest.promoter;
        // Said once: when the quarter's fall already tells the story, the year is left out.
        if (yearDrop >= HOLDING_RULES.promoterYearDrop - 1e-9 && yearDrop > quarterDrop + 0.5) {
            notes.push({ kind: 'promoter', tone: 'watch', text: `Promoter ${pts(-yearDrop)} in a year (${pct(yearAgo.promoter)} → ${pct(latest.promoter)})` });
        }
    }

    // Pledge: the newest known figure, if it is recent, against the one before it.
    const pledgedRows = rows.filter(r => r.pledged !== null);
    const lp = pledgedRows[pledgedRows.length - 1];
    if (lp && t(latest.periodEnd) - t(lp.periodEnd) <= 200 * DAY) {
        const pp = pledgedRows.length > 1 ? pledgedRows[pledgedRows.length - 2] : null;
        const now = lp.pledged!, before = pp?.pledged ?? null;
        const jump = before !== null ? now - before : 0;
        if (now >= HOLDING_RULES.pledgedHigh - 1e-9) {
            const trend = before === null || Math.round(before) === Math.round(now) ? ''
                : `, ${now > before ? 'up' : 'down'} from ${pct(before, 0)}`;
            notes.push({ kind: 'pledge', tone: 'watch', text: `Pledged ${pct(now, 0)} of promoter shares${trend}` });
        } else if (jump >= HOLDING_RULES.pledgedJump - 1e-9) {
            notes.push({ kind: 'pledge', tone: 'watch', text: `Pledged ${pct(now, 0)} of promoter shares, up from ${pct(before!, 0)}` });
        }
    }

    // Institutions: a move of 2+ points either way since the previous period.
    if (prev) {
        for (const [kind, label] of [['fii', 'FII'], ['dii', 'DII']] as const) {
            const move = latest[kind] - prev[kind];
            if (Math.abs(move) >= HOLDING_RULES.institutionMove - 1e-9) {
                notes.push({
                    kind, tone: move < 0 ? 'watch' : 'good',
                    text: `${label} ${pts(move)} since ${prev.period} (${pct(prev[kind])} → ${pct(latest[kind])})`,
                });
            }
        }
    }
    return notes;
}

/** Just the warnings (the purple ones) — what the row chip and the filter use. */
export const holdingWarnings = (rows: HoldingRow[], today = new Date()) =>
    holdingNotes(rows, today).filter(n => n.tone === 'watch');

/** Raw database row (Decimal columns arrive as strings or Decimal objects) -> HoldingRow. */
export function toHoldingRow(r: {
    period: string; periodEnd: Date | string; promoter: unknown; fii: unknown; dii: unknown;
    government: unknown; public: unknown; shareholders: unknown; pledged: unknown;
}): HoldingRow {
    const num = (v: unknown) => (v === null || v === undefined ? null : Number(v));
    const end = r.periodEnd instanceof Date ? r.periodEnd.toISOString().slice(0, 10) : String(r.periodEnd).slice(0, 10);
    return {
        period: r.period,
        periodEnd: end,
        promoter: num(r.promoter) ?? 0,
        fii: num(r.fii) ?? 0,
        dii: num(r.dii) ?? 0,
        government: num(r.government) ?? 0,
        public: num(r.public) ?? 0,
        shareholders: num(r.shareholders),
        pledged: num(r.pledged),
    };
}
