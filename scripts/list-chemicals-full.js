
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listChemicals() {
    const cos = await prisma.company.findMany({
        where: { sector: 'Chemicals', isVisible: true },
        include: {
            analyses: {
                where: { quarter: { name: 'Q3 FY26' } }
            }
        }
    });

    console.log(`Visible Companies in Chemicals: ${cos.length}`);
    cos.forEach(c => {
        console.log(`- ${c.name} (${c.ticker}): Q3 Analysis exists: ${c.analyses.length > 0}`);
    });
}

listChemicals()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
