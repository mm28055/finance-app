import { PrismaClient } from '@prisma/client';
import { processTranscript } from '../lib/sync-service';

const prisma = new PrismaClient();

async function main() {
    console.log("=== GENERATING ANALYSIS FOR MISSING COMPANIES ===\n");

    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (!q3) {
        console.log("❌ Q3 FY26 not found");
        return;
    }

    // Get all Q3 transcripts with raw text but no analysis
    const transcripts = await prisma.transcript.findMany({
        where: { quarterId: q3.id },
        include: { company: true }
    });

    const toFix: { company: string; ticker: string; transcriptId: string }[] = [];

    for (const t of transcripts) {
        const hasRawText = t.rawText && t.rawText.length > 100;

        const analysis = await prisma.analysis.findUnique({
            where: { companyId_quarterId: { companyId: t.companyId, quarterId: q3.id } }
        });

        const hasInvestorBrief = analysis?.investorBrief && analysis.investorBrief.length > 100;

        if (hasRawText && !hasInvestorBrief) {
            toFix.push({
                company: t.company.name,
                ticker: t.company.ticker,
                transcriptId: t.id
            });
        }
    }

    console.log(`Found ${toFix.length} companies needing analysis.\n`);

    for (let i = 0; i < toFix.length; i++) {
        const c = toFix[i];
        console.log(`\n[${i + 1}/${toFix.length}] ${c.company} (${c.ticker})`);

        try {
            // Reset the flag
            await prisma.transcript.update({
                where: { id: c.transcriptId },
                data: { hasAnalysis: false }
            });

            // Delete any existing empty analysis
            await prisma.analysis.deleteMany({
                where: {
                    companyId: (await prisma.company.findFirst({ where: { ticker: c.ticker } }))!.id,
                    quarterId: q3.id
                }
            });

            // Generate new analysis
            await processTranscript(c.transcriptId);
            console.log(`   ✅ Complete`);

        } catch (e: any) {
            console.error(`   ❌ Failed: ${e.message}`);
        }
    }

    console.log("\n=== ALL DONE ===");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
