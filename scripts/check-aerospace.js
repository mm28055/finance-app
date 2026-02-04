
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const companies = await prisma.company.findMany({
        where: { sector: 'Aerospace defence' },
        include: {
            financials: {
                include: { quarter: true },
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 1
            }
        }
    });

    console.log(`Found ${companies.length} companies in 'Aerospace defence' sector:`);
    companies.forEach(c => {
        const f = c.financials[0];
        if (f) {
            console.log(`- ${c.name} (${c.ticker}): Latest Quarter: ${f.quarter.name}`);
            console.log(`  Revenue: ${f.revenue}, EBITDA: ${f.ebitda}, PAT: ${f.pat}`);
        } else {
            console.log(`- ${c.name} (${c.ticker}): NO FINANCIALS FOUND`);
        }
    });

    const allQuarters = await prisma.quarter.findMany({
        orderBy: [
            { year: 'desc' },
            { q: 'desc' }
        ]
    });
    console.log('\nAll Quarters in DB:');
    allQuarters.forEach(q => console.log(`- ${q.name} (ID: ${q.id})`));
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
