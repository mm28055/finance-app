import { prisma } from '../lib/prisma';
import { updateCompanyProfile } from '../lib/profile-service';
import { quarterScore } from '../lib/quarters';
import 'dotenv/config';

/**
 * Batch driver for company profiles — the ONLY thing that refreshes profiles in
 * bulk. Sync never touches them, so profiles move only when you run this.
 *
 * `--stale` compares each company's stored profileQuarter against the newest
 * quarter it has a transcript for, so after a sync cycle this lists exactly the
 * companies whose profile has fallen behind.
 *
 *   npx tsx scripts/batch-profile-generator.ts --stale            report + update everything behind
 *   npx tsx scripts/batch-profile-generator.ts --stale --dry-run  list what's behind, change nothing
 *   npx tsx scripts/batch-profile-generator.ts --limit=50         first 50 (alphabetical)
 *   npx tsx scripts/batch-profile-generator.ts --force            redo even if already stamped
 *   npx tsx scripts/batch-profile-generator.ts --quarter="Q1 FY27"
 *
 * --quarter restricts to companies whose NEWEST stored quarter is that one, i.e.
 * the companies that just reported. Without it, --stale also picks up every
 * company still sitting on an older quarter (most of the universe), which is
 * usually not what you want mid-season.
 *   npx tsx scripts/batch-profile-generator.ts --stale --concurrency=6
 *
 * Companies run CONCURRENCY at a time (default 3). Each one is an independent
 * Gemini call and DB write, so parallelism is safe; the ceiling is the Gemini
 * rate limit, which lib/gemini.ts already absorbs by rotating keys on a 429.
 */

// Shared client, NOT a second `new PrismaClient()` — lib/profile-service.ts uses
// the singleton, and an extra connected client keeps the Node process alive after
// the work is done (the script appears to hang forever).
const DEFAULT_CONCURRENCY = 3;

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const args = process.argv.slice(2);
    const limitArg = args.find(a => a.startsWith('--limit='));
    const offsetArg = args.find(a => a.startsWith('--offset='));
    const concArg = args.find(a => a.startsWith('--concurrency='));
    const quarterArg = args.find(a => a.startsWith('--quarter='));
    const staleOnly = args.includes('--stale');
    const dryRun = args.includes('--dry-run');
    const force = args.includes('--force');

    const LIMIT = limitArg ? parseInt(limitArg.split('=')[1]) : Infinity;
    const OFFSET = offsetArg ? parseInt(offsetArg.split('=')[1]) : 0;
    const CONCURRENCY = Math.max(1, concArg ? parseInt(concArg.split('=')[1]) || DEFAULT_CONCURRENCY : DEFAULT_CONCURRENCY);
    const QUARTER = quarterArg ? quarterArg.split('=').slice(1).join('=').replace(/^["']|["']$/g, '').trim() : null;

    console.log(`🔧 Batch Settings: Limit=${LIMIT === Infinity ? 'ALL' : LIMIT}, Offset=${OFFSET}, Quarter=${QUARTER || 'any'}, StaleOnly=${staleOnly}, Force=${force}, DryRun=${dryRun}, Concurrency=${CONCURRENCY}`);

    // Every company that has something to build a profile from, plus the newest
    // quarter it has a transcript for. Staleness is `profileQuarter` vs that
    // quarter — no hardcoded quarter name, so this keeps working next cycle.
    const companies = await prisma.company.findMany({
        where: { transcripts: { some: {} } },
        select: {
            id: true,
            name: true,
            ticker: true,
            profileQuarter: true,
            businessProfile: true,
            transcripts: {
                orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }],
                take: 1,
                select: { quarter: { select: { name: true } } }
            }
        },
        orderBy: { name: 'asc' },
        skip: OFFSET,
        take: LIMIT === Infinity ? undefined : LIMIT
    });

    const targets = companies
        .map(c => ({
            id: c.id,
            name: c.name.trim(),
            ticker: c.ticker,
            profileQuarter: c.profileQuarter,
            hasProfile: !!(c.businessProfile || '').trim(),
            latestQuarter: c.transcripts[0]?.quarter.name || null
        }))
        .filter(c => c.latestQuarter)
        // Scope to companies that just reported a specific quarter.
        .filter(c => !QUARTER || c.latestQuarter === QUARTER)
        .filter(c => {
            if (!staleOnly) return true;
            if (!c.hasProfile) return true;
            if (!c.profileQuarter) return true;
            return quarterScore(c.profileQuarter) < quarterScore(c.latestQuarter!);
        });

    console.log(`📋 ${targets.length} companies to process.\n`);

    if (dryRun) {
        targets.forEach(c => {
            console.log(`   ${c.name}: profile at ${c.profileQuarter || (c.hasProfile ? 'unstamped' : 'none')} → latest ${c.latestQuarter}`);
        });
        console.log(`\n🔍 DRY RUN — nothing was changed.`);
        return;
    }

    let updated = 0;
    let skipped = 0;
    let failed = 0;
    let done = 0;

    // Shared cursor worker pool. Each worker pulls the next company as soon as it
    // finishes, so one slow company doesn't stall the others (which a fixed
    // chunk-of-N approach would).
    let cursor = 0;
    const total = targets.length;

    async function worker(slot: number) {
        // Stagger starts so N calls don't hit Gemini in the same instant.
        await delay(slot * 1500);

        while (true) {
            const idx = cursor++;
            if (idx >= total) return;
            const c = targets[idx];

            try {
                const res = await updateCompanyProfile(c.id, c.latestQuarter!, { force });
                done++;
                if (res.updated) {
                    updated++;
                    console.log(`[${done}/${total}] ✅ ${c.name} → ${c.latestQuarter}: ${res.mode === 'revise' ? 'revised' : 'created'} (${res.chars} chars)`);
                } else {
                    skipped++;
                    console.log(`[${done}/${total}] ⏭️ ${c.name}: skipped — ${res.reason}`);
                }
            } catch (error: any) {
                done++;
                failed++;
                console.error(`[${done}/${total}] ❌ ${c.name}: ${error.message}`);
            }

            await delay(1000);
        }
    }

    const startedAt = Date.now();
    await Promise.all(
        Array.from({ length: Math.min(CONCURRENCY, total) }, (_, i) => worker(i))
    );
    const mins = ((Date.now() - startedAt) / 60000).toFixed(1);

    console.log(`\n✅ Done in ${mins} min. Updated: ${updated}, Skipped: ${skipped}, Failed: ${failed}`);
    if (failed > 0) {
        console.log(`   Re-run the same command to retry the failures — anything already done is skipped.`);
    }
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
