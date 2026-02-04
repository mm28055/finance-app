
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deepCheck() {
    console.log("--- DEEP DIVE: Chemicals Sector Transcripts ---");

    // 1. Get all companies in Chemicals
    const companies = await prisma.company.findMany({
        where: { sector: { contains: 'Chemical', mode: 'insensitive' } }
    });

    console.log(`Companies Found: ${companies.length}\n`);

    for (const co of companies) {
        // 2. Get every transcript for this company
        const ts = await prisma.transcript.findMany({
            where: { companyId: co.id },
            include: { quarter: true }
        });

        console.log(`- ${co.name} (${co.ticker || 'No Ticker'}):`);
        if (ts.length === 0) {
            console.log("  !!! NO TRANSCRIPTS FOUND IN DB !!!");
        } else {
            ts.forEach(t => {
                console.log(`  [${t.quarter.name}] Analyze:${t.hasAnalysis}, ID: ${t.id}`);
            });
        }
    }

    // 3. Check for any transcripts NOT linked to any company (orphan check)
    const orphans = await prisma.transcript.count({
        where: { companyId: null }
    });
    console.log(`\nOrphan Transcripts: ${orphans}`);

    // 4. Check chunk counts per company/quarter
    const chunkStats = await prisma.transcriptChunk.groupBy({
        by: ['companyId', 'quarterId'],
        _count: { id: true },
        where: { sector: 'Chemicals' }
    });
    console.log(`\nChunk Stats (Ingested Groups): ${chunkStats.length}`);
}

deepCheck()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
