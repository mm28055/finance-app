
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("--- Checking Q2 FY26 Data ---");

    const q2 = await prisma.quarter.findFirst({
        where: { name: 'Q2 FY26' }
    });

    if (!q2) {
        console.log("❌ Quarter 'Q2 FY26' NOT FOUND in DB.");
        return;
    }
    console.log(`✅ Quarter 'Q2 FY26' found (ID: ${q2.id})`);

    const q2Transcripts = await prisma.transcript.count({ where: { quarterId: q2.id } });
    const q2Analyses = await prisma.analysis.count({ where: { quarterId: q2.id } });

    console.log(`\nGlobal Counts for Q2 FY26:`);
    console.log(`- Transcripts: ${q2Transcripts}`);
    console.log(`- Analyses:    ${q2Analyses}`);

    if (q2Transcripts === 0) {
        console.log("\n⚠️ Logic: You have NO Q2 transcripts in the DB. The AI cannot see them.");
    }

    // Check overlaps: Find companies that have BOTH Q2 and Q3 transcripts
    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (q3) {
        const q3Companies = await prisma.transcript.findMany({
            where: { quarterId: q3.id },
            select: { companyId: true, company: { select: { name: true, ticker: true } } }
        });

        let overlapCount = 0;
        let missingQ2Count = 0;

        console.log(`\nChecking Q3 Companies (${q3Companies.length}) for Q2 history...`);

        // Check first 5 failures for detail
        let failuresShown = 0;

        for (const c of q3Companies) {
            const hasQ2 = await prisma.transcript.findFirst({
                where: { companyId: c.companyId, quarterId: q2.id }
            });

            if (hasQ2) {
                overlapCount++;
            } else {
                missingQ2Count++;
                if (failuresShown < 5) {
                    console.log(`- Missing Q2 for: ${c.company.name} (${c.company.ticker})`);
                    failuresShown++;
                }
            }
        }

        console.log(`\nSummary:`);
        console.log(`- Companies with Q3 AND Q2: ${overlapCount}`);
        console.log(`- Companies with Q3 ONLY:   ${missingQ2Count}`);
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
