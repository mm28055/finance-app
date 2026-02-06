
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    try {
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
        const a = await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } } });

        console.log("--- START INVESTOR BRIEF ---");
        console.log(a.investorBrief);
        console.log("--- END INVESTOR BRIEF ---");

        const sections = a.investorBrief.split(/\n(?=##\s)/g);
        console.log("Found sections:", sections.length);
        sections.forEach((s, i) => {
            const match = s.match(/^##\s+(.+)$/m);
            console.log(`Section ${i} header:`, match ? match[1] : 'NO HEADER');
        });
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
