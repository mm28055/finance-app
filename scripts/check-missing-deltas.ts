
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("--- Checking for Missing Deltas in Q3 FY26 ---");

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

    console.log(`Total Q3 Analyses: ${analyses.length}`);

    let missingDeltaCount = 0;
    const missingDetails = [];

    for (const a of analyses) {
        // Check if delta is missing (assuming it's stored in delta_analysis or maybe summary?)
        // The user says "Delta Report" in UI, which maps to `delta_analysis` field in `AnalysisResult`
        // However, Prisma schema might store it in a specific field. 
        // Based on previous reads, `Analysis` model likely has `deltaAnalysis` or it's inside `summary` JSON?
        // Let's check the schema logic again.
        // Actually, looking at `lib/ai-analyst.ts`, `AnalysisResult` has `delta_analysis`.
        // But how is it saved to DB? `lib/sync-service.ts` handles the save.
        // Let's assume there is a column `deltaAnalysis` or similar. 
        // If strict typing fails, I'll use raw query or `any` cast.

        // Wait, looking at `debug-virtuoso.ts` output: "Delta Analysis: ❌ NULL"
        // And the user interface shows "No Delta Report available".

        // Let's check `deltaAnalysis` field validity.
        const delta = (a as any).delta_analysis || (a as any).deltaAnalysis; // Handle potential naming diff

        if (!delta) {
            missingDeltaCount++;

            // Check if Q2 Transcript existed
            const prevT = await prisma.transcript.findFirst({
                where: { companyId: a.companyId, quarterId: q2.id },
                select: { id: true, rawText: true }
            });

            missingDetails.push({
                ticker: a.company.ticker,
                name: a.company.name,
                hasQ2: !!prevT,
                q2TextLen: prevT?.rawText?.length || 0
            });
        }
    }

    console.log(`\nFound ${missingDeltaCount} analyses missing Delta.`);
    console.log("Details:");

    missingDetails.forEach(d => {
        const reason = d.hasQ2 ? (d.q2TextLen > 100 ? "Q2 Exists (Why failed?)" : "Q2 Exists but Empty Text") : "Missing Q2 Data";
        console.log(`- ${d.ticker} (${d.name}): ${reason}`);
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
