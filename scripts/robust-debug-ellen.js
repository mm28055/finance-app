
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log("--- ROBUST DEBUG: ELLEN DATA ---");
    try {
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        if (!company) throw new Error("Company not found");

        const analyses = await prisma.analysis.findMany({
            where: { companyId: company.id },
            include: { quarter: true },
            orderBy: [
                { quarter: { year: 'desc' } },
                { quarter: { q: 'desc' } }
            ]
        });

        const financials = await prisma.financials.findMany({
            where: { companyId: company.id },
            include: { quarter: true },
            orderBy: [
                { quarter: { year: 'desc' } },
                { quarter: { q: 'desc' } }
            ]
        });

        console.log(`Found ${analyses.length} analyses and ${financials.length} financials for ELLEN.`);

        for (const a of analyses) {
            console.log(`\nQuarter: ${a.quarter.name}`);
            console.log(`- deltaAnalysis Field length: ${a.deltaAnalysis?.length || 0}`);
            console.log(`- investorBrief Field length: ${a.investorBrief?.length || 0}`);
            if (a.deltaAnalysis) {
                console.log(`- Delta snippet: ${a.deltaAnalysis.substring(0, 100)}...`);
            }
        }
    } catch (e) {
        console.error("ERROR:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
