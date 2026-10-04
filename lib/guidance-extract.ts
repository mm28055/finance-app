// -----------------------------------------------------------------------------
// Reads forward revenue guidance out of an investor brief.
//
// The rules below were tuned against a full 596-company run; each one exists
// because it was getting something wrong. Notably: never invent an upper bound
// (a "double-digit growth" read as 10-99% midpoints to 54.5% and turns a modest
// guide into a spectacular one), and treat conditional phrasing as no guidance
// at all.
//
// Called from two places: the sync pipeline, right after a new analysis lands,
// and scripts/extract-guidance.ts for bulk runs and re-checks.
// -----------------------------------------------------------------------------
import { prisma } from './prisma';
import { geminiFlash } from './gemini';

export interface ExtractedGuidance {
    growth_min: number | null;
    growth_max: number | null;
    fy: string | null;
    basis: 'STATED' | 'IMPLIED' | 'NONE';
    quote: string | null;
}

const PROMPT = (company: string, quarter: string, brief: string, lastYear?: string | null) => `
You are reading an equity analyst's brief on ${company} for ${quarter}. Your only
job is to report what management said about FORWARD REVENUE GROWTH.
${lastYear ? `
REVENUE BASE (filed figures, not in the brief): ${lastYear}. When management
gives a revenue target in rupees for a coming year, this is "today's revenue" to
derive the growth from (basis IMPLIED).
` : ''}

Return STRICT JSON, nothing else:
{
  "growth_min": <number or null>,
  "growth_max": <number or null>,
  "fy": "<fiscal year the guidance covers, e.g. FY27, or null>",
  "basis": "STATED" | "IMPLIED" | "NONE",
  "quote": "<the verbatim sentence you took this from, or null>"
}

RULES
- Percentages of REVENUE GROWTH only. Ignore margin, PAT, EBITDA and order-book
  guidance. Ignore growth already delivered — this is about the road ahead.
- A range ("15-20% growth") sets growth_min=15, growth_max=20.
- A single figure ("we expect 25% growth") sets both to 25.
- A floor ("at least 20%", "north of 20%") sets growth_min=20, growth_max=null.
  A ceiling ("up to 15%") sets growth_max=15, growth_min=null.
- basis "STATED": management put a REVENUE growth number or range on the record
  directly. Nothing else qualifies. In particular these are NOT stated:
    * "double-digit growth" with no figure — that is a band, not a number
    * "in line with the market/industry" — even where the brief quotes the
      market's own rate elsewhere
    * VOLUME or tonnage growth — revenue also moves with price and mix, so a
      volume guide is evidence about revenue, not a statement of it
  Each of those is IMPLIED at best. Read them as such and say so.
- basis "IMPLIED": no revenue growth percentage was given outright, but the
  brief gives you real numbers to derive one from — a revenue target for a
  future year against today's revenue, a doubling in N years, an order book with
  a stated execution period, or one of the cases listed above. Do the arithmetic
  and say IMPLIED. Judgement is welcome here; invention is not.
- basis "NONE": management declined to guide, spoke only qualitatively
  ("optimistic", "strong demand", "outgrow the industry" with no figures), or
  the brief simply does not say. Set every other field to null.
- If guidance covers several years, take the NEAREST full year.
- An ANNUAL growth rate. If the brief gives a multi-year target ("₹9,000 Cr by
  FY30 from ₹4,000 Cr today"), annualise it — do not report the total.
- NEVER invent an upper bound. A phrase that only sets a floor is stored as a
  floor: "double-digit growth" is growth_min=10, growth_max=null — NOT 10-99.
  "north of 20%" is growth_min=20, growth_max=null. Inventing a ceiling turns a
  modest guide into a spectacular one, which is the worst error you can make
  here. When in doubt leave growth_max null.
- If the brief itself says no specific figure was given, the answer is NONE.
  This overrides everything else: when the text says "no specific numerical
  guidance", you may not then derive one from an order book and report it. Do
  not reach for a round number to fill the gap.
- CONDITIONAL or SPECULATIVE language is not guidance. "could potentially
  double", "if pricing holds", "has the ambition to", "sees an opportunity to"
  — these are possibilities management floated, not commitments they made.
  Answer NONE. Only report a number management actually committed to, or one
  that follows arithmetically from firm figures they gave.
- Never invent a number to be helpful. NONE is a perfectly good answer and is
  more useful to the reader than a guess.

BRIEF
${brief.substring(0, 12000)}
`;

function parseJson(text: string): ExtractedGuidance | null {
    let s = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const m = s.match(/\{[\s\S]*\}/);
    if (m) s = m[0];
    try {
        const p = JSON.parse(s);
        const num = (v: any): number | null => {
            if (v === null || v === undefined || v === '') return null;
            const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/[^0-9.-]/g, ''));
            return isNaN(n) ? null : n;
        };
        const basis = String(p.basis || 'NONE').toUpperCase();
        return {
            growth_min: num(p.growth_min),
            growth_max: num(p.growth_max),
            fy: p.fy ? String(p.fy).trim() : null,
            basis: basis === 'STATED' || basis === 'IMPLIED' ? basis : 'NONE',
            quote: p.quote ? String(p.quote).trim() : null
        };
    } catch {
        return null;
    }
}

export { PROMPT as GUIDANCE_PROMPT, parseJson as parseGuidanceJson };

/**
 * The company's last full year of revenue from its stored quarters ("FY26 revenue ₹977 Cr"), so a
 * rupee target ("₹1,250 Cr this year") can be turned into growth. Briefs quote the target but often
 * not the base: Shree Pushkar's Q1 FY27 guide read as no guidance for want of it.
 */
export async function lastYearRevenue(companyId: string): Promise<string | null> {
    const rows = await prisma.financials.findMany({
        where: { companyId, revenue: { not: null } },
        select: { revenue: true, quarter: { select: { name: true } } },
    });
    const byFy = new Map<string, Map<string, number>>();
    for (const r of rows) {
        const m = r.quarter.name.match(/^(Q[1-4]) (FY\d{2})$/);
        if (!m) continue;
        if (!byFy.has(m[2])) byFy.set(m[2], new Map());
        byFy.get(m[2])!.set(m[1], Number(r.revenue));
    }
    const full = [...byFy].filter(([, q]) => q.size === 4).sort(([a], [b]) => b.localeCompare(a))[0];
    if (!full) return null;
    const total = [...full[1].values()].reduce((a, b) => a + b, 0);
    return `${full[0]} revenue ₹${Math.round(total).toLocaleString('en-IN')} Cr (sum of its four quarters)`;
}

/**
 * Reads guidance from one analysis row and saves it back onto that row.
 *
 * Returns null when there is nothing to read — no brief, or the model gave an
 * unparseable answer. Callers in the sync pipeline treat that as a non-event:
 * guidance is a nice-to-have on top of an analysis that has already succeeded,
 * so it must never be able to fail a sync.
 */
export async function extractGuidanceForAnalysis(analysisId: string): Promise<ExtractedGuidance | null> {
    const analysis = await prisma.analysis.findUnique({
        where: { id: analysisId },
        select: {
            id: true,
            companyId: true,
            investorBrief: true,
            company: { select: { name: true } },
            quarter: { select: { name: true } }
        }
    });

    if (!analysis?.investorBrief) return null;

    const res = await geminiFlash.generateContent(
        PROMPT(analysis.company.name, analysis.quarter.name, analysis.investorBrief, await lastYearRevenue(analysis.companyId))
    );
    const parsed = parseJson((await res.response).text());
    if (!parsed) return null;

    await prisma.analysis.update({
        where: { id: analysis.id },
        data: {
            guidanceGrowthMin: parsed.growth_min,
            guidanceGrowthMax: parsed.growth_max,
            guidanceFy: parsed.fy,
            guidanceBasis: parsed.basis,
            guidanceQuote: parsed.quote
        }
    });

    return parsed;
}

/** Same, addressed by the company + quarter the sync pipeline already holds. */
export async function extractGuidanceForQuarter(companyId: string, quarterId: string): Promise<ExtractedGuidance | null> {
    const a = await prisma.analysis.findUnique({
        where: { companyId_quarterId: { companyId, quarterId } },
        select: { id: true }
    });
    return a ? extractGuidanceForAnalysis(a.id) : null;
}
