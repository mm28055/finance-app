
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listQ3() {
    const q3Transcripts = await prisma.transcript.findMany({
        where: { quarter: { name: 'Q3 FY26' } },
        include: { company: true }
    });

    const results = q3Transcripts
        .filter(t => t.company.sector && t.company.sector.includes('Chemical'))
        .map(t => ({
            name: t.company.name,
            sector: t.company.sector,
            id: t.company.id,
            hasAnalysis: t.hasAnalysis
        }));

    console.log(`Chemicals-related Q3 FY26 Companies (${results.length}):`);
    console.log(JSON.stringify(results, null, 2));
}

listQ3()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
