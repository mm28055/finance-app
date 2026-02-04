
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkAarti() {
    console.log("--- Aarti Industries Q3 FY26 Status ---");
    const t = await prisma.transcript.findFirst({
        where: {
            company: { name: { contains: 'Aarti', mode: 'insensitive' } },
            quarter: { name: 'Q3 FY26' }
        },
        include: { company: true, quarter: true }
    });

    if (t) {
        console.log(`Transcript Found: ${t.id}`);
        console.log(`- hasAnalysis: ${t.hasAnalysis}`);
        console.log(`- rawText length: ${t.rawText?.length || 0}`);
        console.log(`- filePath: ${t.filePath}`);
        console.log(`- fileUrl: ${t.fileUrl}`);

        const chunks = await prisma.transcriptChunk.count({
            where: { companyId: t.companyId, quarterId: t.quarterId }
        });
        console.log(`- RAG Chunks: ${chunks}`);
    } else {
        console.log("No Q3 FY26 transcript record found for Aarti Industries.");
    }
}

checkAarti()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
