
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function debugGHCL() {
    console.log("--- DEBUG: GHCL Investigation ---");

    // 1. Find the company
    const company = await prisma.company.findFirst({
        where: { name: { contains: 'GHCL', mode: 'insensitive' } }
    });

    if (!company) {
        console.log("!!! GHCL NOT FOUND IN COMPANY TABLE !!!");
        // Check if it exists under a different name or sector via transcript
        const anyTs = await prisma.transcript.findMany({
            where: { id: { contains: 'GHCL', mode: 'insensitive' } },
            include: { company: true }
        });
        console.log(`Searching transcripts by ID 'GHCL': Found ${anyTs.length}`);
        anyTs.forEach(t => console.log(`- ID: ${t.id}, Company: ${t.company?.name}, Sector: ${t.company?.sector}`));
        return;
    }

    console.log(`Company Found: ${company.name} (ID: ${company.id})`);
    console.log(`Sector: ${company.sector}`);

    // 2. Check Q3 Transcripts
    const q3 = await prisma.quarter.findUnique({ where: { name: 'Q3 FY26' } });
    if (!q3) {
        console.log("!!! Q3 FY26 QUARTER NOT FOUND !!!");
        return;
    }

    const transcript = await prisma.transcript.findUnique({
        where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } }
    });

    if (!transcript) {
        console.log("!!! NO Q3 FY26 TRANSCRIPT FOUND FOR GHCL !!!");
    } else {
        console.log(`Q3 Transcript Found: ${transcript.id}, hasAnalysis: ${transcript.hasAnalysis}`);
    }

    // 3. Check RAG Chunks
    const chunks = await prisma.transcriptChunk.count({
        where: { companyId: company.id, quarterId: q3.id }
    });
    console.log(`RAG Chunks found for GHCL Q3: ${chunks}`);

    // 4. Sector Check
    const sectorCounts = await prisma.company.groupBy({
        by: ['sector'],
        _count: { id: true },
        where: { name: { contains: 'GHCL', mode: 'insensitive' } }
    });
    console.log(`Sector distribution for 'GHCL' matches:`, sectorCounts);
}

debugGHCL()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
