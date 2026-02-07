const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log("=== DIAGNOSING CHEMICAL SECTOR RAG COVERAGE ===\n");

    // 1. Find Q3 FY26
    const q3Quarter = await prisma.quarter.findFirst({
        where: { name: 'Q3 FY26' }
    });

    if (!q3Quarter) {
        console.log("Q3 FY26 quarter not found!");
        return;
    }

    // 2. Find all Chemical sector companies - EXACT MATCH
    const chemicalCompanies = await prisma.company.findMany({
        where: {
            sector: 'Chemicals'  // EXACT match, not partial
        }
    });

    console.log(`Found ${chemicalCompanies.length} companies in Chemical sector.\n`);

    const results = {
        withTranscript: [],
        withAnalysis: [],
        withChunks: [],
        withoutChunks: []
    };

    for (const company of chemicalCompanies) {
        // Check if this company has Q3 transcript
        const q3Transcript = await prisma.transcript.findFirst({
            where: {
                companyId: company.id,
                quarterId: q3Quarter.id
            }
        });

        if (q3Transcript) {
            results.withTranscript.push(company.name);

            // Check if analysis exists
            const analysis = await prisma.analysis.findFirst({
                where: {
                    companyId: company.id,
                    quarterId: q3Quarter.id
                }
            });

            if (q3Transcript.hasAnalysis && analysis) {
                results.withAnalysis.push(company.name);

                // Check for RAG chunks
                const chunkCount = await prisma.transcriptChunk.count({
                    where: {
                        companyId: company.id,
                        quarterId: q3Quarter.id
                    }
                });

                if (chunkCount > 0) {
                    results.withChunks.push({ name: company.name, count: chunkCount });
                } else {
                    results.withoutChunks.push(company.name);
                }
            }
        }
    }

    console.log(`📄 Companies with Q3 transcript: ${results.withTranscript.length}`);
    console.log(`✅ Companies with Q3 analysis: ${results.withAnalysis.length}`);
    console.log(`🔍 Companies with RAG chunks: ${results.withChunks.length}`);
    console.log(`❌ Companies WITHOUT chunks: ${results.withoutChunks.length}\n`);

    if (results.withoutChunks.length > 0) {
        console.log("=== MISSING RAG CHUNKS ===");
        console.log("These companies have transcripts + analysis but NO chunks:\n");
        results.withoutChunks.forEach(name => console.log(`  - ${name}`));
        console.log("\n⚠️ This is why they didn't appear in your sector chat!\n");
    }

    if (results.withChunks.length > 0) {
        console.log("=== COMPANIES WITH CHUNKS ===");
        results.withChunks.forEach(c => {
            console.log(`  ${c.name.padEnd(40)} (${c.count} chunks)`);
        });
    }

    await prisma.$disconnect();
}

main().catch(console.error);
