const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log("=== DATA INTEGRITY CHECK ===\n");

    // 1. Analyses with no matching transcript
    console.log("1. ANALYSES WITH NO MATCHING TRANSCRIPT:");
    const analyses = await prisma.analysis.findMany({
        include: { company: true, quarter: true }
    });
    let orphanAnalyses = 0;
    for (const a of analyses) {
        const transcript = await prisma.transcript.findFirst({
            where: { companyId: a.companyId, quarterId: a.quarterId }
        });
        if (!transcript) {
            console.log(`   ❌ Orphan: ${a.company.name} (${a.quarter.name})`);
            orphanAnalyses++;
        }
    }
    console.log(`   Total: ${orphanAnalyses} orphan analyses\n`);

    // 2. Duplicate ISIN entries
    console.log("2. DUPLICATE ISIN ENTRIES:");
    const companies = await prisma.company.findMany({ select: { id: true, isin: true, name: true } });
    const isinMap = {};
    companies.forEach(c => {
        if (c.isin) {
            if (!isinMap[c.isin]) isinMap[c.isin] = [];
            isinMap[c.isin].push(c.name);
        }
    });
    let duplicateIsins = 0;
    Object.entries(isinMap).forEach(([isin, names]) => {
        if (names.length > 1) {
            console.log(`   ❌ Duplicate ISIN ${isin}: ${names.join(", ")}`);
            duplicateIsins++;
        }
    });
    console.log(`   Total: ${duplicateIsins} duplicate ISINs\n`);

    // 3. Duplicate Company+Quarter transcript combinations
    console.log("3. DUPLICATE COMPANY+QUARTER TRANSCRIPTS:");
    const transcripts = await prisma.transcript.findMany({
        include: { company: true, quarter: true }
    });
    const transcriptMap = {};
    let duplicateTranscripts = 0;
    transcripts.forEach(t => {
        const key = `${t.companyId}-${t.quarterId}`;
        if (!transcriptMap[key]) transcriptMap[key] = [];
        transcriptMap[key].push(t.id);
    });
    Object.entries(transcriptMap).forEach(([key, ids]) => {
        if (ids.length > 1) {
            const t = transcripts.find(tr => `${tr.companyId}-${tr.quarterId}` === key);
            console.log(`   ❌ Duplicate: ${t.company.name} ${t.quarter.name} (${ids.length} copies)`);
            duplicateTranscripts++;
        }
    });
    console.log(`   Total: ${duplicateTranscripts} duplicate transcripts\n`);

    // 4. RAG chunks pointing to deleted companies
    console.log("4. RAG CHUNKS POINTING TO DELETED COMPANIES:");
    const chunks = await prisma.transcriptChunk.findMany({
        select: { companyId: true },
        distinct: ['companyId']
    });
    const companyIds = new Set(companies.map(c => c.id));
    let orphanChunks = 0;
    for (const chunk of chunks) {
        if (!companyIds.has(chunk.companyId)) {
            console.log(`   ❌ Orphan chunks for companyId: ${chunk.companyId}`);
            orphanChunks++;
        }
    }
    console.log(`   Total: ${orphanChunks} orphan chunk groups\n`);

    console.log("=== SUMMARY ===");
    console.log(`Orphan Analyses: ${orphanAnalyses}`);
    console.log(`Duplicate ISINs: ${duplicateIsins}`);
    console.log(`Duplicate Transcripts: ${duplicateTranscripts}`);
    console.log(`Orphan Chunk Groups: ${orphanChunks}`);
    console.log(orphanAnalyses + duplicateIsins + duplicateTranscripts + orphanChunks === 0
        ? "✅ DATABASE IS CLEAN!"
        : "⚠️ Issues found - consider cleanup");

    await prisma.$disconnect();
}

main().catch(console.error);
