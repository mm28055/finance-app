
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    try {
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
        const a = await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } } });

        console.log("--- INVESTOR BRIEF CONTENT CHECK ---");
        console.log(a.investorBrief);
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
