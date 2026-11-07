/**
 * Saves what Gemini's batch mode (half price) has finished: first the profile refreshes, then the
 * call analyses (the brief, figures and guidance, then the roll-off of old quarters), after which
 * the profile refreshes those calls need go out as a new batch. See lib/call-batch.ts.
 *
 * Run at 7am (.github/workflows/collect-call-batches.yml): saves last night's call analyses and
 * sends their profiles. Run again at the start of the 8pm job: saves those profiles and any call
 * batch Google had not finished by the morning.
 *
 *   npx tsx scripts/collect-call-batches.ts
 */
import 'dotenv/config';
import { prisma } from '../lib/prisma';
import { collectCallBatches, collectProfileBatches } from '../lib/call-batch';

(async () => {
    await collectProfileBatches();
    await collectCallBatches();
})()
    .catch(e => { console.error(e); process.exitCode = 1; })
    .finally(async () => { await prisma.$disconnect(); });
