
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    try {
        console.log("--- FULL STRUCTURE VERIFICATION: ELLEN ---");
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
        const a = await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } } });

        console.log("\n=== INVESTOR BRIEF SUB-HEADINGS ===");
        const brief = a.investorBrief;
        const boldItems = brief.match(/\*\*[^*]+\*\*/g) || [];
        console.log("Bold items found:", boldItems.length);
        boldItems.slice(0, 20).forEach(item => console.log("  -", item));

        console.log("\n=== DELTA ANALYSIS STRUCTURE ===");
        console.log("Full Delta Content:");
        console.log(a.deltaAnalysis);

    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
