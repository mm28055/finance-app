
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findQ3() {
    console.log("Searching for ALL Q3 FY26 transcripts...");

    const transcripts = await prisma.transcript.findMany({
        where: { quarter: { name: 'Q3 FY26' } },
        include: { company: true }
    });

    console.log(`Total Q3 FY26 Transcripts found: ${transcripts.length}`);

    const sectorStats = {};
    transcripts.forEach(t => {
        const s = t.company.sector;
        sectorStats[s] = (sectorStats[s] || 0) + 1;
        console.log(`- ${t.company.name} [Sector: ${s}]`);
    });

    console.log("\nSector Stats for Q3 FY26:");
    console.log(JSON.stringify(sectorStats, null, 2));
}

findQ3()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
