
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listQ3Analyses() {
    const sector = 'Chemicals';
    const companies = await prisma.company.findMany({
        where: { sector: sector, isVisible: true },
        include: {
            analyses: {
                where: { quarter: { name: 'Q3 FY26' } },
                include: { quarter: true }
            }
        }
    });

    const hasQ3 = companies.filter(c => c.analyses.length > 0);
    console.log(`Companies in "${sector}" with Q3 FY26 Analysis: ${hasQ3.length}`);
    hasQ3.forEach(c => {
        console.log(`- ${c.name} (${c.ticker})`);
    });
}

listQ3Analyses()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
