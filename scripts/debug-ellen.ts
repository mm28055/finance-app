
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("--- Debugging Ellen Delta Content ---");

    const company = await prisma.company.findFirst({
        where: { ticker: 'ELLEN' }
    });

    if (!company) {
        console.log("❌ Company ELLEN not found");
        return;
    }

    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (!q3) return console.log("Q3 not found");

    const analysis = await prisma.analysis.findUnique({
        where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } }
    });

    if (!analysis) {
        console.log("❌ Analysis Record MISSING for Q3");
    } else {
        console.log("✅ Analysis Record Found");
        console.log(`- deltaAnalysis field length: ${analysis.deltaAnalysis?.length || 0}`);
        if (analysis.deltaAnalysis) {
            console.log("--- First 100 chars of Delta ---");
            console.log(analysis.deltaAnalysis.substring(0, 100));
        } else {
            console.log("❌ deltaAnalysis field is NULL or EMPTY in Database");
        }

        console.log(`- investorBrief field length: ${analysis.investorBrief?.length || 0}`);
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
