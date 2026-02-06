import { PrismaClient } from '@prisma/client';
import { processTranscript } from '../lib/sync-service';

const prisma = new PrismaClient();

// Required Delta headers for correct format
const REQUIRED_DELTA_HEADERS = [
    "Narrative Shift",
    "Guidance Evolution",
    "Execution vs. Promise",
    "Emphasis",
    "Risk Landscape"
];

async function main() {
    console.log("=== COMPREHENSIVE Q3 FY26 REPAIR ===");
    console.log("Checking for: 1) Wrong Delta Format  2) Missing AI Score\n");

    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (!q3) {
        console.log("❌ Q3 FY26 quarter not found.");
        return;
    }

    // Get all Q3 analyses
    const analyses = await prisma.analysis.findMany({
        where: { quarterId: q3.id },
        include: { company: true }
    });

    console.log(`Found ${analyses.length} Q3 FY26 analyses to check.\n`);

    const needsRepair: { companyName: string; ticker: string; transcriptId: string; reason: string }[] = [];

    for (const a of analyses) {
        const reasons: string[] = [];

        // Check 1: Missing or low AI Score
        if (a.investibilityScore === null || a.investibilityScore === undefined) {
            reasons.push("Missing AI Score");
        }

        // Check 2: Wrong Delta Format (should have 5 ## headers)
        if (a.deltaAnalysis) {
            const headerCount = (a.deltaAnalysis.match(/##\s/g) || []).length;
            const hasAllHeaders = REQUIRED_DELTA_HEADERS.every(h =>
                a.deltaAnalysis!.toUpperCase().includes(h.toUpperCase())
            );

            if (headerCount < 5 || !hasAllHeaders) {
                reasons.push(`Wrong Delta Format (${headerCount} headers, missing required sections)`);
            }

            // Check word count (should be 350-400)
            const wordCount = a.deltaAnalysis.split(/\s+/).length;
            if (wordCount < 300) {
                reasons.push(`Delta too short (${wordCount} words)`);
            }
        } else {
            // Check if Q2 exists (meaning delta SHOULD have been generated)
            const q2 = await prisma.quarter.findFirst({ where: { name: 'Q2 FY26' } });
            if (q2) {
                const q2Transcript = await prisma.transcript.findFirst({
                    where: { companyId: a.companyId, quarterId: q2.id },
                    select: { rawText: true }
                });
                if (q2Transcript?.rawText && q2Transcript.rawText.length > 100) {
                    reasons.push("Missing Delta (Q2 data exists)");
                }
            }
        }

        if (reasons.length > 0) {
            // Get transcript ID
            const transcript = await prisma.transcript.findFirst({
                where: { companyId: a.companyId, quarterId: q3.id },
                select: { id: true }
            });

            if (transcript) {
                needsRepair.push({
                    companyName: a.company.name,
                    ticker: a.company.ticker,
                    transcriptId: transcript.id,
                    reason: reasons.join(", ")
                });
            }
        }
    }

    console.log(`\n=== REPAIR NEEDED: ${needsRepair.length} companies ===\n`);
    needsRepair.forEach((c, i) => {
        console.log(`${i + 1}. ${c.companyName} (${c.ticker}) - ${c.reason}`);
    });

    if (needsRepair.length === 0) {
        console.log("🎉 All Q3 FY26 analyses are correct. Nothing to repair.");
        return;
    }

    console.log(`\n--- Starting Repair of ${needsRepair.length} Companies ---\n`);

    for (let i = 0; i < needsRepair.length; i++) {
        const c = needsRepair[i];
        console.log(`\n[${i + 1}/${needsRepair.length}] Repairing ${c.companyName} (${c.ticker})...`);
        console.log(`   Reason: ${c.reason}`);

        try {
            // Delete old analysis to force regeneration
            await prisma.analysis.deleteMany({
                where: { companyId: (await prisma.company.findFirst({ where: { ticker: c.ticker } }))!.id, quarterId: q3.id }
            });

            // Reset transcript flag
            await prisma.transcript.update({
                where: { id: c.transcriptId },
                data: { hasAnalysis: false }
            });

            // Regenerate
            await processTranscript(c.transcriptId);
            console.log(`   ✅ Repair Complete`);

        } catch (e: any) {
            console.error(`   ❌ Repair Failed: ${e.message}`);
        }
    }

    console.log("\n=== REPAIR COMPLETE ===");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
