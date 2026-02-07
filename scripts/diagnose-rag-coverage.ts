import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("=== DIAGNOSING CHEMICAL SECTOR RAG COVERAGE ===\n");

    // 1. Find all Chemical sector companies with Q3 FY26
    const q3Quarter = await prisma.quarter.findFirst({
        where: { name: 'Q3 FY26' }
    });

    if (!q3Quarter) {
        console.log("Q3 FY26 quarter not found!");
        return;
    }

    const chemicalCompanies = await prisma.company.findMany({
        where: {
            sector: { contains: 'Chemical' } // Case insensitive partial match
        },
        include: {
            transcripts: {
                where: { quarterId: q3Quarter.id },
                include: {
                    chunks: true
                }
            }
        }
    });

    console.log(`Found ${chemicalCompanies.length} companies in Chemical sector.\n`);

    const results = {
        withTranscript: [] as any[],
        withAnalysis: [] as any[],
        withChunks: [] as any[],
        withoutChunks: [] as any[]
    };

    for (const company of chemicalCompanies) {
        const q3Transcript = company.transcripts[0];

        if (q3Transcript) {
            results.withTranscript.push(company.name);

            // Check if analysis exists separately
            const analysis = await prisma.analysis.findFirst({
                where: { transcriptId: q3Transcript.id }
            });

            if (q3Transcript.hasAnalysis && analysis) {
                results.withAnalysis.push(company.name);

                if (q3Transcript.chunks && q3Transcript.chunks.length > 0) {
                    results.withChunks.push({
                        name: company.name,
                        chunkCount: q3Transcript.chunks.length
                    });
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
        console.log("\nThis is why they didn't appear in your sector chat!\n");
    }

    if (results.withChunks.length > 0) {
        console.log("=== COMPANIES WITH CHUNKS ===");
        results.withChunks.forEach(c => {
            console.log(`  ${c.name.padEnd(40)} (${c.chunkCount} chunks)`);
        });
    }

    await prisma.$disconnect();
}

main().catch(e => {
    console.error("Error:", e.message);
    console.error(e);
    process.exit(1);
});
