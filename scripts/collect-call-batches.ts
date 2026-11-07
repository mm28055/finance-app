/**
 * Collects the call analyses the nightly job sent to Gemini's batch mode (half price) and saves
 * them: the brief, figures and guidance, then the roll-off of old quarters and the profile refresh.
 * Run by the 7am job (.github/workflows/collect-call-batches.yml) and again at the start of the 8pm
 * job, which picks up any batch Google had not finished by the morning. See lib/call-batch.ts.
 *
 *   npx tsx scripts/collect-call-batches.ts
 */
import 'dotenv/config';
import { prisma } from '../lib/prisma';
import { collectCallBatches } from '../lib/call-batch';

collectCallBatches()
    .catch(e => { console.error(e); process.exitCode = 1; })
    .finally(async () => { await prisma.$disconnect(); });
