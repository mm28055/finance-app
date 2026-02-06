
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    try {
        console.log("--- FINAL HEADER VERIFICATION: ELLEN ---");
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
        const a = await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } } });

        console.log("\n1. SUMMARY HEADERS (Should match original list):");
        const summarySections = a.investorBrief.split(/\n(?=##\s)/g);
        summarySections.forEach((s, i) => {
            const match = s.match(/^##\s+(.+)$/m);
            if (match) console.log(`   - ${match[1]}`);
        });

        console.log("\n2. DELTA HEADERS (Should be 5 specific ones):");
        const deltaSections = a.deltaAnalysis.split(/\n(?=##\s)/g);
        deltaSections.forEach((s, i) => {
            const match = s.match(/^##\s+(.+)$/m);
            if (match) console.log(`   - ${match[1]}`);
        });

        console.log("\n3. DATA CHECK:");
        console.log("   - Revenue:", a.revenue || "CHECK FINANCIALS TABLE"); // Analysis table stores text summary mostly, checking financials next

    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
