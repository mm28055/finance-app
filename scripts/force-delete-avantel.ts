
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🔥 Force Deleting Avantel Q3 FY26 Data...");

    // 1. Find Company
    const company = await prisma.company.findFirst({
        where: {
            OR: [
                { name: { contains: 'Avantel' } },
                { ticker: 'AVANTEL' }
            ]
        }
    });

    if (!company) {
        console.log("❌ Avantel not found in DB.");
        return;
    }
    console.log(`✅ Identified Company: ${company.name} (${company.id})`);

    // 2. Find Quarter
    const quarter = await prisma.quarter.findUnique({
        where: { name: 'Q3 FY26' }
    });

    if (!quarter) {
        console.log("❌ Quarter 'Q3 FY26' not found in DB.");
        return;
    }
    console.log(`✅ Identified Quarter: ${quarter.name} (${quarter.id})`);

    // 3. Delete Linked Records
    console.log("running deletions...");

    const delAnalysis = await prisma.analysis.deleteMany({
        where: { companyId: company.id, quarterId: quarter.id }
    });
    console.log(`🗑️ Deleted ${delAnalysis.count} Analysis records.`);

    const delFinancials = await prisma.financials.deleteMany({
        where: { companyId: company.id, quarterId: quarter.id }
    });
    console.log(`🗑️ Deleted ${delFinancials.count} Financials records.`);

    const delTranscript = await prisma.transcript.deleteMany({
        where: { companyId: company.id, quarterId: quarter.id }
    });
    console.log(`🗑️ Deleted ${delTranscript.count} Transcript records.`);

}

main()
    .catch(e => {
        console.error("❌ CRTICAL ERROR:");
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
