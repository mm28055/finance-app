/**
 * Reads forward revenue guidance back out of each company's newest investor
 * brief and stores it as numbers on that Analysis row.
 *
 * The briefs already contain a "Guidance & Management Credibility" section
 * written when the transcript was analysed, so this never touches transcripts,
 * PDFs or embeddings — it re-reads text that is already in the database. That
 * matters: the chunk table is the thing pressing against the storage quota, and
 * this pass adds a few hundred KB in total.
 *
 * Usage:
 *   npx tsx scripts/extract-guidance.ts --limit 20 --dry   # review sample
 *   npx tsx scripts/extract-guidance.ts                    # full run
 *   npx tsx scripts/extract-guidance.ts --only "MTAR"      # single company
 *   npx tsx scripts/extract-guidance.ts --force            # redo done rows
 */
import { prisma } from '../lib/prisma';
import { geminiFlash, GEMINI_KEY_COUNT } from '../lib/gemini';
import { GENERAL_Q } from '../lib/retention';
import {
    guidanceMidpoint,
    formatGuidanceRange,
    meetsGuidanceThreshold,
    GUIDANCE_GROWTH_THRESHOLD
} from '../lib/guidance';

const args = process.argv.slice(2);
const has = (f: string) => args.includes(f);
const val = (f: string) => {
    const i = args.indexOf(f);
    return i >= 0 ? args[i + 1] : undefined;
};

const DRY = has('--dry');
const FORCE = has('--force');
const LIMIT = val('--limit') ? parseInt(val('--limit')!, 10) : undefined;
const ONLY = val('--only');
// Re-examine only the companies currently showing green. Tightening the prompt
// can only ever demote a row, and a wrong green is the error that costs the
// reader trust, so this is the cohort worth paying to re-read.
const RECHECK_GREEN = has('--recheck-green');

// Concurrency follows the key count like the rest of the pipeline, so one key
// isn't hammered while the others idle. Capped: these are small prompts, but a
// 429 storm costs more than the parallelism saves.
const CONCURRENCY = Math.max(1, Math.min(GEMINI_KEY_COUNT, 4));

interface Extracted {
    growth_min: number | null;
    growth_max: number | null;
    fy: string | null;
    basis: 'STATED' | 'IMPLIED' | 'NONE';
    quote: string | null;
}

const PROMPT = (company: string, quarter: string, brief: string) => `
You are reading an equity analyst's brief on ${company} for ${quarter}. Your only
job is to report what management said about FORWARD REVENUE GROWTH.

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

function parseJson(text: string): Extracted | null {
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

/**
 * Sanity check against delivered growth. Not a rejection — a guided turnaround
 * is a real thing — but a 40% guide from a shrinking company is exactly the
 * kind of extraction error a verbatim quote exists to catch, so it gets flagged
 * for the reviewer rather than passing silently.
 */
function implausible(mid: number | null, revenueYoY: number | null): string | null {
    if (mid === null) return null;
    if (mid > 100) return 'guide >100%';
    if (mid < 0) return 'negative guide';
    if (revenueYoY !== null && mid - revenueYoY > 40) return `guide ${mid}% vs delivered ${revenueYoY}%`;
    return null;
}

async function main() {
    // Newest QUARTERLY analysis per visible company. General slots (investor
    // meets, AGMs) are excluded for the same reason the row's headline score
    // excludes them: they sort newest but aren't a results quarter.
    const companies = await prisma.company.findMany({
        where: {
            isVisible: true,
            ...(ONLY ? { name: { contains: ONLY, mode: 'insensitive' } } : {})
        },
        select: {
            id: true,
            name: true,
            analyses: {
                where: { quarter: { q: { not: GENERAL_Q } } },
                orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }],
                take: 1,
                select: {
                    id: true,
                    investorBrief: true,
                    guidanceBasis: true,
                    guidanceGrowthMin: true,
                    guidanceGrowthMax: true,
                    quarter: { select: { name: true } }
                }
            },
            financials: {
                orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }],
                take: 1,
                select: { revenueYoY: true }
            }
        }
    });

    let targets = companies
        .map(c => ({
            company: c,
            analysis: c.analyses[0],
            revenueYoY: c.financials[0]?.revenueYoY ? Number(c.financials[0].revenueYoY) : null
        }))
        .filter(t => t.analysis?.investorBrief)
        // Already-extracted rows are skipped so the run is resumable after a
        // rate-limit stop; --force redoes them.
        .filter(t => (FORCE || RECHECK_GREEN) || !t.analysis.guidanceBasis)
        .filter(t => !RECHECK_GREEN || meetsGuidanceThreshold({
            min: t.analysis.guidanceGrowthMin !== null ? Number(t.analysis.guidanceGrowthMin) : null,
            max: t.analysis.guidanceGrowthMax !== null ? Number(t.analysis.guidanceGrowthMax) : null,
            basis: t.analysis.guidanceBasis
        }));

    if (LIMIT) targets = targets.slice(0, LIMIT);

    console.log(
        `Extracting guidance for ${targets.length} companies ` +
        `(${CONCURRENCY} at a time${DRY ? ', DRY RUN — nothing will be written' : ''})\n`
    );

    const rows: string[] = [];
    const flags: string[] = [];
    let green = 0, stated = 0, implied = 0, none = 0, failed = 0;

    let cursor = 0;
    async function worker() {
        while (cursor < targets.length) {
            const t = targets[cursor++];
            const name = t.company.name;
            const quarter = t.analysis.quarter.name;
            try {
                const res = await geminiFlash.generateContent(
                    PROMPT(name, quarter, t.analysis.investorBrief!)
                );
                const parsed = parseJson((await res.response).text());
                if (!parsed) { failed++; console.log(`  ✗ ${name} — unparseable response`); continue; }

                const g = { min: parsed.growth_min, max: parsed.growth_max, basis: parsed.basis };
                const mid = guidanceMidpoint(g);
                const hit = meetsGuidanceThreshold(g);

                if (parsed.basis === 'NONE') none++;
                else if (parsed.basis === 'STATED') stated++;
                else implied++;
                if (hit) green++;

                const warn = implausible(mid, t.revenueYoY);
                if (warn) flags.push(`${name} (${quarter}): ${warn} — "${(parsed.quote || '').slice(0, 120)}"`);

                rows.push(
                    [
                        hit ? '●' : ' ',
                        name.padEnd(30).slice(0, 30),
                        quarter.padEnd(9),
                        (formatGuidanceRange(g) || '—').padStart(9),
                        (mid === null ? '—' : `${mid}%`).padStart(7),
                        parsed.basis.padEnd(7),
                        (parsed.fy || '—').padEnd(6),
                        (parsed.quote || '').slice(0, 90)
                    ].join('  ')
                );

                if (!DRY) {
                    await prisma.analysis.update({
                        where: { id: t.analysis.id },
                        data: {
                            guidanceGrowthMin: parsed.growth_min,
                            guidanceGrowthMax: parsed.growth_max,
                            guidanceFy: parsed.fy,
                            guidanceBasis: parsed.basis,
                            guidanceQuote: parsed.quote
                        }
                    });
                }
            } catch (e: any) {
                failed++;
                console.log(`  ✗ ${name} — ${e.message}`);
            }
        }
    }

    await Promise.all(Array.from({ length: CONCURRENCY }, worker));

    console.log(
        [
            '',
            `   ${'COMPANY'.padEnd(30)}  ${'QUARTER'.padEnd(9)}  ${'RANGE'.padStart(9)}  ${'MID'.padStart(7)}  ${'BASIS'.padEnd(7)}  ${'FY'.padEnd(6)}  QUOTE`,
            '   ' + '-'.repeat(150),
            ...rows.sort()
        ].join('\n')
    );

    console.log(
        `\n● = midpoint >= ${GUIDANCE_GROWTH_THRESHOLD}% (would show green)\n\n` +
        `${green} green · ${stated} stated · ${implied} implied · ${none} no guidance · ${failed} failed`
    );

    if (flags.length) {
        console.log(`\n⚠ ${flags.length} worth a second look:`);
        flags.forEach(f => console.log(`   ${f}`));
    }
    if (DRY) console.log('\nDRY RUN — nothing was written. Re-run without --dry to save.');

    await prisma.$disconnect();
}

main().catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
