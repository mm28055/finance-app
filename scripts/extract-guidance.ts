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
import { GEMINI_KEY_COUNT } from '../lib/gemini';
import { GENERAL_Q } from '../lib/retention';
// The prompt and the parser live in lib/ because the sync pipeline calls them
// too — this script is the bulk/re-check front end for the same logic.
import { extractGuidanceForAnalysis } from '../lib/guidance-extract';
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
// Re-read the rows read as no guidance whose brief names a rupee revenue target: before the
// reader was given last year's revenue it could not turn "₹1,250 Cr this year" into growth.
const RECHECK_NONE = has('--recheck-none');

// Concurrency follows the key count like the rest of the pipeline, so one key
// isn't hammered while the others idle. Capped: these are small prompts, but a
// 429 storm costs more than the parallelism saves.
const CONCURRENCY = Math.max(1, Math.min(GEMINI_KEY_COUNT, 4));

/** --dry: same read, no write, so a sample can be reviewed before committing. */
async function previewOnly(analysisId: string) {
    const { GUIDANCE_PROMPT, parseGuidanceJson, lastYearRevenue } = await import('../lib/guidance-extract');
    const { geminiFlash } = await import('../lib/gemini');
    const a = await prisma.analysis.findUnique({
        where: { id: analysisId },
        select: { companyId: true, investorBrief: true, company: { select: { name: true } }, quarter: { select: { name: true } } }
    });
    if (!a?.investorBrief) return null;
    const res = await geminiFlash.generateContent(
        GUIDANCE_PROMPT(a.company.name, a.quarter.name, a.investorBrief, await lastYearRevenue(a.companyId))
    );
    return parseGuidanceJson((await res.response).text());
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
        .filter(t => (FORCE || RECHECK_GREEN || RECHECK_NONE) || !t.analysis.guidanceBasis)
        .filter(t => !RECHECK_NONE || (t.analysis.guidanceBasis === 'NONE' && /₹\s?[\d,]+(\.\d+)?\s?(Cr|crore)/i.test(t.analysis.investorBrief || '') && /target|guid|revenue of|turnover|top[- ]line/i.test(t.analysis.investorBrief || '')))
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
                const parsed = DRY
                    ? await previewOnly(t.analysis.id)
                    : await extractGuidanceForAnalysis(t.analysis.id);
                if (!parsed) { failed++; console.log(`  ✗ ${name} — no usable answer`); continue; }

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
