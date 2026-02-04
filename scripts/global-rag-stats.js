
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function getGlobalStats() {
    console.log("Analyzing global RAG status...");

    const totalTranscripts = await prisma.transcript.count();
    const totalChunks = await prisma.transcriptChunk.count();

    const transcriptsWithChunks = await prisma.transcriptChunk.groupBy({
        by: ['companyId', 'quarterId'],
    });

    const sectorStats = await prisma.company.groupBy({
        by: ['sector'],
        _count: { id: true }
    });

    const chunkSectors = await prisma.transcriptChunk.groupBy({
        by: ['sector'],
        _count: { id: true }
    });

    let output = `=== GLOBAL RAG INGESTION STATUS ===\n\n`;
    output += `Total Transcripts in DB:   ${totalTranscripts}\n`;
    output += `Transcripts Ingested:      ${transcriptsWithChunks.length}\n`;
    output += `Ingestion Coverage:        ${((transcriptsWithChunks.length / totalTranscripts) * 100).toFixed(1)}%\n`;
    output += `Total Vector Chunks:       ${totalChunks}\n\n`;
    output += "Sector               | Companies | Chunks | Status\n";
    output += "---------------------|-----------|--------|-------\n";

    const reportLines = sectorStats.map(s => {
        const chunks = chunkSectors.find(cs => cs.sector === s.sector)?._count.id || 0;
        return `${s.sector.padEnd(20)} | ${String(s._count.id).padEnd(9)} | ${String(chunks).padEnd(6)} | ${chunks > 0 ? "✅" : "❌"}`;
    }).sort((a, b) => {
        const aChunks = parseInt(a.split('|')[2]);
        const bChunks = parseInt(b.split('|')[2]);
        return bChunks - aChunks;
    });

    output += reportLines.join('\n');

    fs.writeFileSync('rag_stats.txt', output);
    console.log("Stats written to rag_stats.txt");
}

getGlobalStats()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
