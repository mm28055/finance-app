const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Seeding 2026 Transcripts for AI testing...");

    // 1. Get/Create Quarters
    const q2 = await prisma.quarter.upsert({
        where: { name: 'Q2 FY26' },
        update: {},
        create: { name: 'Q2 FY26', year: 2026, q: 'Q2' }
    });

    const q3 = await prisma.quarter.upsert({
        where: { name: 'Q3 FY26' },
        update: {},
        create: { name: 'Q3 FY26', year: 2026, q: 'Q3' }
    });

    // 2. Get some companies
    const companies = await prisma.company.findMany({ take: 5 });

    for (const co of companies) {
        // Add Q2 transcript
        await prisma.transcript.upsert({
            where: { id: `test-q2-${co.ticker}` },
            update: {},
            create: {
                id: `test-q2-${co.ticker}`,
                companyId: co.id,
                quarterId: q2.id,
                rawText: `Transcript for ${co.name} Q2 FY26. Management said: We have seen strong volume growth of 12% in this quarter. We are planning a capex of 200cr for the next half. Revenue was 1200cr, EBITDA was 250cr and PAT was 180cr. Guidance is positive for the next year.`,
                hasAnalysis: false
            }
        });

        // Add Q3 transcript
        await prisma.transcript.upsert({
            where: { id: `test-q3-${co.ticker}` },
            update: {},
            create: {
                id: `test-q3-${co.ticker}`,
                companyId: co.id,
                quarterId: q3.id,
                rawText: `Transcript for ${co.name} Q3 FY26. Management said: Following our strong Q2, we have maintained our momentum. Quarterly revenue reached 1350cr with EBITDA at 280cr. We are increasing our capex plan to 250cr due to high demand. PAT stands at 200cr. Guidance for FY26 is maintained at 15% growth.`,
                hasAnalysis: false
            }
        });
    }

    console.log("Seeding complete. Ready to Sync.");
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
