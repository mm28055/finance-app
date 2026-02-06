
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    try {
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
        const a = await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } } });

        console.log("--- START FULL DELTA ---");
        console.log(a.deltaAnalysis);
        console.log("--- END FULL DELTA ---");

        const sections = a.deltaAnalysis.split(/\n(?=##\s)/g);
        console.log("Found sections:", sections.length);
        sections.forEach((s, i) => {
            console.log(`Section ${i} starts with:`, s.substring(0, 50).replace(/\n/g, '\\n'));
        });
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
