
import { PrismaClient } from '@prisma/client';
import { processTranscript } from '../lib/sync-service';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
    console.log("--- Fixing Phantom Delta Failures ---");

    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    const q2 = await prisma.quarter.findFirst({ where: { name: 'Q2 FY26' } });

    if (!q3 || !q2) {
        console.log("❌ Quarters missing.");
        return;
    }

    // Get all Q3 Analyses
    const analyses = await prisma.analysis.findMany({
        where: { quarterId: q3.id },
        include: { company: true }
    });

    console.log(`Scanning ${analyses.length} Q3 analyses...`);

    const targets = [];

    // Filter for "Phantom" condition
    for (const a of analyses) {
        // Check if delta is missing
        const delta = (a as any).delta_analysis || (a as any).deltaAnalysis;

        if (!delta) {
            // Check if Q2 Transcript existed
            const prevT = await prisma.transcript.findFirst({
                where: { companyId: a.companyId, quarterId: q2.id },
                select: { id: true, rawText: true }
            });

            if (prevT && prevT.rawText && prevT.rawText.length > 100) {
                // CONDITION MET: Q3 Delta Missing + Q2 Text Present = PHANTOM FAILURE
                targets.push({
                    companyName: a.company.name,
                    ticker: a.company.ticker,
                    transcriptId: (await prisma.transcript.findFirst({ where: { companyId: a.companyId, quarterId: q3.id } }))?.id
                });
            }
        }
    }

    console.log(`Found ${targets.length} Phantom Failures to repair.`);

    // Process them
    console.log(`\n--- Starting Repair of ${targets.length} Companies ---`);
    for (const t of targets) {
        if (!t.transcriptId) continue;
        console.log(`\n[${targets.indexOf(t) + 1}/${targets.length}] Repairing ${t.companyName} (${t.ticker})...`);
        try {
            // STEP 1: Delete "Partial" Analysis to force re-run
            const transcript = await prisma.transcript.findUnique({ where: { id: t.transcriptId } });
            if (!transcript) continue;

            await prisma.analysis.deleteMany({
                where: {
                    companyId: transcript.companyId,
                    quarterId: q3.id
                }
            });

            // IMPORTANT: Reset the flag so processTranscript doesn't skip
            await prisma.transcript.update({
                where: { id: t.transcriptId },
                data: { hasAnalysis: false }
            });

            console.log("   - Cleared old partial analysis and reset flags.");

            // STEP 2: Re-Run Full Analysis (This will now see Q2 data and generate Delta)
            await processTranscript(t.transcriptId);
            console.log("   ✅ Repair Complete: New Report Generated with Delta.");
        } catch (e: any) {
            console.error(`   ❌ Repair Failed: ${e.message}`);
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
