/**
 * Fills missing quarterly revenue / EBITDA / PAT from Screener.in for companies
 * whose transcript didn't state them (the AI only reports what management
 * actually said, and plenty of concalls skip parts of the P&L).
 *
 *   npx tsx scripts/backfill-financials.ts --quarter="Q1 FY27" --dry-run
 *   npx tsx scripts/backfill-financials.ts --quarter="Q1 FY27"
 *   npx tsx scripts/backfill-financials.ts --quarter="Q1 FY27" --concurrency=4
 *
 * Only ever fills fields that are currently empty — never overwrites a number
 * the analyst pass already produced. Re-runnable: a company with nothing left to
 * fill is skipped.
 *
 * NOTE on EBITDA: Screener's "Operating Profit" is Sales minus Expenses, which
 * EXCLUDES other income. Management-quoted EBITDA in a concall usually includes
 * it, so a backfilled EBITDA can sit a few percent below an analyst-extracted
 * one for the same company. Revenue and PAT match cleanly.
 */
import 'dotenv/config';
import { prisma } from '../lib/prisma';
import { fetchScreenerQuarterly } from '../lib/sync-service';

const DEFAULT_CONCURRENCY = 3;

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

function pct(curr: number | null, prev: any): number | null {
    if (curr == null || prev == null) return null;
    const p = Number(prev);
    if (!p) return null;
    return Number((((curr - p) / Math.abs(p)) * 100).toFixed(2));
}

async function main() {
    const args = process.argv.slice(2);
    const qArg = args.find(a => a.startsWith('--quarter='));
    const cArg = args.find(a => a.startsWith('--concurrency='));
    const dryRun = args.includes('--dry-run');
    const QUARTER = qArg ? qArg.split('=').slice(1).join('=').replace(/^["']|["']$/g, '').trim() : null;
    const CONCURRENCY = Math.max(1, cArg ? parseInt(cArg.split('=')[1]) || DEFAULT_CONCURRENCY : DEFAULT_CONCURRENCY);

    if (!QUARTER) {
        console.error('Pass --quarter="Q1 FY27"');
        process.exit(1);
    }

    const quarter = await prisma.quarter.findFirst({ where: { name: QUARTER } });
    if (!quarter) throw new Error(`Quarter "${QUARTER}" not found.`);
    // Plain values, so the nested worker closure doesn't depend on narrowing.
    const quarterId = quarter.id;
    const quarterLabel: string = QUARTER;

    // Companies with a transcript for this quarter (i.e. they reported it).
    const transcripts = await prisma.transcript.findMany({
        where: { quarterId },
        select: { companyId: true, company: { select: { name: true, ticker: true, isin: true } } }
    });

    const gaps: { companyId: string; name: string; ticker: string; isin: string | null; missing: string[] }[] = [];
    for (const t of transcripts) {
        const f = await prisma.financials.findUnique({
            where: { companyId_quarterId: { companyId: t.companyId, quarterId } }
        });
        const missing: string[] = [];
        if (!f || f.revenue == null || Number(f.revenue) === 0) missing.push('revenue');
        if (!f || f.ebitda == null || Number(f.ebitda) === 0) missing.push('ebitda');
        if (!f || f.pat == null || Number(f.pat) === 0) missing.push('pat');
        if (missing.length) {
            gaps.push({ companyId: t.companyId, name: t.company.name.trim(), ticker: t.company.ticker, isin: t.company.isin, missing });
        }
    }

    console.log(`${QUARTER}: ${transcripts.length} companies reported, ${gaps.length} have gaps.`);
    console.log(`Concurrency ${CONCURRENCY}${dryRun ? '  |  DRY RUN — nothing will be written' : ''}\n`);
    if (!gaps.length) return;

    // Same quarter one fiscal year earlier, for recomputing YoY once values land.
    const prevYear = await prisma.quarter.findFirst({ where: { year: quarter.year - 1, q: quarter.q } });

    let filled = 0, noColumn = 0, noPage = 0, nothingUseful = 0;
    let done = 0;
    let cursor = 0;

    async function worker(slot: number) {
        await sleep(slot * 700);
        while (true) {
            const i = cursor++;
            if (i >= gaps.length) return;
            const g = gaps[i];
            done++;
            const tag = `[${done}/${gaps.length}] ${g.name}`;

            let s: any = null;
            try {
                s = await fetchScreenerQuarterly(g.isin, g.ticker, g.name, quarterLabel);
            } catch (e: any) {
                console.log(`${tag}: scrape error — ${e.message}`);
                continue;
            }

            if (!s) { noPage++; console.log(`${tag}: no usable Screener data (missing page or column)`); await sleep(700); continue; }

            const updates: any = {};
            const got: string[] = [];
            if (g.missing.includes('revenue') && s.revenue != null) { updates.revenue = s.revenue; got.push(`rev ${s.revenue}`); }
            if (g.missing.includes('ebitda') && s.ebitda != null) { updates.ebitda = s.ebitda; got.push(`ebitda ${s.ebitda}`); }
            if (g.missing.includes('pat') && s.pat != null) { updates.pat = s.pat; got.push(`pat ${s.pat}`); }

            if (!got.length) { nothingUseful++; console.log(`${tag}: Screener had nothing for the missing field(s)`); await sleep(700); continue; }

            // Recompute YoY for whatever we just filled, if last year's quarter exists.
            if (prevYear) {
                const prev = await prisma.financials.findUnique({
                    where: { companyId_quarterId: { companyId: g.companyId, quarterId: prevYear.id } }
                });
                if (prev) {
                    if (updates.revenue != null) updates.revenueYoY = pct(updates.revenue, prev.revenue);
                    if (updates.ebitda != null) updates.ebitdaYoY = pct(updates.ebitda, prev.ebitda);
                    if (updates.pat != null) updates.patYoY = pct(updates.pat, prev.pat);
                }
            }

            if (dryRun) {
                console.log(`${tag}: WOULD fill ${got.join(', ')}  (from ${s.column})`);
            } else {
                await prisma.financials.upsert({
                    where: { companyId_quarterId: { companyId: g.companyId, quarterId } },
                    update: updates,
                    create: { companyId: g.companyId, quarterId, ...updates }
                });
                console.log(`${tag}: filled ${got.join(', ')}  (from ${s.column})`);
            }
            filled++;
            await sleep(700);
        }
    }

    const started = Date.now();
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, gaps.length) }, (_, i) => worker(i)));

    console.log(`\n${dryRun ? 'Would have filled' : 'Filled'}: ${filled}/${gaps.length} companies in ${((Date.now() - started) / 60000).toFixed(1)} min`);
    console.log(`   no page/column on Screener : ${noPage}`);
    console.log(`   page found, field still blank: ${nothingUseful}`);
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(() => prisma.$disconnect());
