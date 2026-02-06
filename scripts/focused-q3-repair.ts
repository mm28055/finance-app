import { PrismaClient } from '@prisma/client';
import { processTranscript } from '../lib/sync-service';

const prisma = new PrismaClient();

async function main() {
    console.log("=== FOCUSED Q3 FY26 REPAIR (Lenient Criteria) ===");
    console.log("Only repairing: Missing Score, OR < 3 Delta headers, OR < 200 words\n");

    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (!q3) {
        console.log("❌ Q3 FY26 quarter not found.");
        return;
    }

    const analyses = await prisma.analysis.findMany({
        where: { quarterId: q3.id },
        include: { company: true }
    });

    console.log(`Found ${analyses.length} Q3 FY26 analyses to check.\n`);

    const needsRepair: { companyName: string; ticker: string; transcriptId: string; reason: string }[] = [];

    for (const a of analyses) {
        const reasons: string[] = [];

        // Check 1: Missing AI Score (CRITICAL - always repair)
        if (a.investibilityScore === null || a.investibilityScore === undefined) {
            reasons.push("Missing AI Score");
        }

        // Check 2: Delta Format (LENIENT - only if really broken)
        if (a.deltaAnalysis) {
            const headerCount = (a.deltaAnalysis.match(/##\s/g) || []).length;
            const wordCount = a.deltaAnalysis.split(/\s+/).length;

            // Only flag if REALLY broken: < 3 headers OR < 200 words
            if (headerCount < 3) {
                reasons.push(`Very broken Delta (only ${headerCount} headers)`);
            } else if (wordCount < 200) {
                reasons.push(`Very short Delta (only ${wordCount} words)`);
            }
            // SKIP: Companies with 4 headers and 250+ words are "good enough"
        } else {
            // No delta at all - check if Q2 exists
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
        console.log("🎉 All Q3 FY26 analyses are acceptable. Nothing to repair.");
        return;
    }

    console.log(`\n--- Starting Repair of ${needsRepair.length} Companies ---\n`);

    for (let i = 0; i < needsRepair.length; i++) {
        const c = needsRepair[i];
        console.log(`\n[${i + 1}/${needsRepair.length}] Repairing ${c.companyName} (${c.ticker})...`);
        console.log(`   Reason: ${c.reason}`);

        try {
            const company = await prisma.company.findFirst({ where: { ticker: c.ticker } });
            if (!company) continue;

            await prisma.analysis.deleteMany({
                where: { companyId: company.id, quarterId: q3.id }
            });

            await prisma.transcript.update({
                where: { id: c.transcriptId },
                data: { hasAnalysis: false }
            });

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
