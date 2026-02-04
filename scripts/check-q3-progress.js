
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkProgress() {
    console.log("--- RAG Ingestion Progress: Q3 FY26 (Chemicals) ---");

    const transcripts = await prisma.transcript.findMany({
        where: {
            quarter: { name: 'Q3 FY26' },
            company: { sector: 'Chemicals' }
        },
        include: { company: true }
    });

    console.log(`Expected Transcripts: ${transcripts.length}`);

    for (const t of transcripts) {
        const chunkCount = await prisma.transcriptChunk.count({
            where: {
                companyId: t.companyId,
                quarterId: t.quarterId
            }
        });
        const status = chunkCount > 0 ? "✅ Done" : "⏳ Pending";
        console.log(`- ${t.company.name} (${t.company.ticker}): ${chunkCount} chunks [${status}]`);
    }
}

checkProgress()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
