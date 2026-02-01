
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🗑️ Deleting Avantel Q3 FY26 Data...");

    // 1. Find Company
    const company = await prisma.company.findFirst({
        where: { OR: [{ name: { contains: 'Avantel', mode: 'insensitive' } }, { ticker: 'AVANTEL' }] }
    });

    if (!company) {
        console.log("❌ Avantel not found.");
        return;
    }

    // 2. Find Quarter
    const quarter = await prisma.quarter.findUnique({
        where: { name: 'Q3 FY26' }
    });

    if (!quarter) {
        console.log("❌ Q3 FY26 Quarter record not found.");
        return;
    }

    // 3. Delete Related Records
    // Delete Analysis
    const delAnalysis = await prisma.analysis.deleteMany({
        where: { companyId: company.id, quarterId: quarter.id }
    });
    console.log(`- Deleted ${delAnalysis.count} Analysis records.`);

    // Delete Financials
    const delFinancials = await prisma.financials.deleteMany({
        where: { companyId: company.id, quarterId: quarter.id }
    });
    console.log(`- Deleted ${delFinancials.count} Financials records.`);

    // Delete Transcript
    const delTranscript = await prisma.transcript.deleteMany({
        where: { companyId: company.id, quarterId: quarter.id }
    });
    console.log(`- Deleted ${delTranscript.count} Transcript records.`);

    console.log("✅ Cleanup Complete.");
}

main()
    .catch(e => console.error(e))
    .finally(async () => { await prisma.$disconnect(); });
