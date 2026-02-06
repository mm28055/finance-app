
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const quartersToCheck = ["Q2 FY26", "Q3 FY26"];

    console.log("--- Backfill Status ---");

    for (const qName of quartersToCheck) {
        const quarter = await prisma.quarter.findFirst({ where: { name: qName } });

        if (!quarter) {
            console.log(`Quarter ${qName}: Not Found in DB`);
            continue;
        }

        const totalTranscripts = await prisma.transcript.count({
            where: { quarterId: quarter.id }
        });

        const totalAnalyses = await prisma.analysis.count({
            where: { quarterId: quarter.id }
        });

        // Use raw SQL because Prisma Client types are outdated
        const result: any[] = await prisma.$queryRaw`
            SELECT COUNT(*)::int as count 
            FROM "Analysis" 
            WHERE "quarterId" = ${quarter.id} 
            AND "investibilityScore" IS NOT NULL
        `;

        const scoreCount = Number(result[0]?.count || 0);

        console.log(`\n${qName}:`);
        console.log(`  Total Transcripts: ${totalTranscripts}`);
        console.log(`  Total Analyses:    ${totalAnalyses}`);
        console.log(`  With Score:        ${scoreCount}`);
        if (totalAnalyses > 0) {
            console.log(`  Progress:          ${Math.round(scoreCount / totalAnalyses * 100)}% (of analyses)`);
        } else {
            console.log(`  Progress:          0% (No Analyses)`);
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
