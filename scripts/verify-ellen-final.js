
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    try {
        console.log("--- FINAL DATA VERIFICATION: ELLEN ---");
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });

        const a = await prisma.analysis.findUnique({
            where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } }
        });

        const f = await prisma.financials.findUnique({
            where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } }
        });

        console.log("\n1. FINANCIALS (Q3 FY26):");
        console.log("   - Revenue:", f?.revenue || "MISSING");
        console.log("   - EBITDA:", f?.ebitda || "MISSING");
        console.log("   - PAT:", f?.pat || "MISSING");

        console.log("\n2. DELTA ANALYSIS:");
        console.log("   - Length:", a?.deltaAnalysis?.length || 0);
        console.log("   - Sophisticated Headers Present:", a?.deltaAnalysis?.includes('## Narrative Shift') ? "✅ YES" : "❌ NO");
        if (a?.deltaAnalysis) {
            console.log("   - Content Snippet:\n", a.deltaAnalysis.substring(0, 300));
        }

        console.log("\n3. AI SCORE (investibility_score):");
        console.log("   - Score:", a?.investibilityScore !== null ? a.investibilityScore : "❌ MISSING");

    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
