
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verifyFix() {
    console.log("Simulating getRecentQuarterIds('Chemicals')...");

    const sector = 'Chemicals';
    const companies = await prisma.company.findMany({
        where: { sector: sector, isVisible: true },
        select: {
            id: true,
            name: true,
            transcripts: {
                take: 2,
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                include: { quarter: true }
            }
        }
    });

    console.log(`Companies Found: ${companies.length}`);
    let q3Count = 0;

    companies.forEach(c => {
        const qNames = c.transcripts.map(t => t.quarter.name);
        if (qNames.includes('Q3 FY26')) q3Count++;
        console.log(`- ${c.name}: [${qNames.join(', ')}]`);
    });

    console.log(`\nCompanies with Q3 FY26 in filter: ${q3Count}`);
}

verifyFix()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
