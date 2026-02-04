
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const sectors = await prisma.company.groupBy({
        by: ['sector'],
        _count: { id: true }
    });
    console.log("SECTORS:");
    sectors.forEach(s => console.log(`${s.sector}: ${s._count.id} companies`));

    const aerospaceCompanies = await prisma.company.findMany({
        where: { sector: { contains: "Aerospace", mode: 'insensitive' } },
        include: {
            financials: {
                include: { quarter: true },
                orderBy: { quarter: { year: 'desc', q: 'desc' } }
            }
        }
    });

    console.log(`\nFOUND ${aerospaceCompanies.length} AEROSPACE COMPANIES:`);
    for (const c of aerospaceCompanies) {
        const latest = c.financials[0];
        console.log(`- [${c.sector}] ${c.name} (${c.id}): ${c.financials.length} records. Latest: ${latest ? latest.quarter.name : 'NONE'}`);
        if (latest) {
            console.log(`  Revenue: ${latest.revenue}, EBITDA: ${latest.ebitda}, PAT: ${latest.pat}`);
        }
    }

    const quarters = await prisma.quarter.findMany({
        orderBy: [{ year: 'desc' }, { q: 'desc' }]
    });
    console.log("\nQUARTERS:");
    quarters.forEach(q => console.log(`${q.name} (Year: ${q.year}, Q: ${q.q})`));
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
