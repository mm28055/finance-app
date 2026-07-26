const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

// Mirrors TRANSCRIPT_WINDOW in lib/retention.ts. Analyses older than a company's
// newest N quarters are EXPECTED to have no transcript — the transcript, PDF and
// RAG chunks roll off at 2 quarters while the analysis is kept for 4.
const TRANSCRIPT_WINDOW = 2;

// "Q3 FY26" -> 263. Higher = newer.
function quarterScore(name) {
    const parts = String(name).split(' ');
    if (parts.length < 2) return 0;
    const q = parseInt(parts[0].replace('Q', '')) || 0;
    const fy = parseInt(parts[1].replace('FY', '')) || 0;
    return fy * 10 + q;
}

async function main() {
    console.log("=== FAST DATA INTEGRITY CHECK ===\n");

    // 1. Fetch ALL data efficiently (Bulk fetch)
    const analyses = await prisma.analysis.findMany({ select: { companyId: true, quarterId: true, company: { select: { name: true, ticker: true } }, quarter: { select: { name: true } } } });
    const transcripts = await prisma.transcript.findMany({ select: { id: true, companyId: true, quarterId: true, company: { select: { name: true } }, quarter: { select: { name: true } } } });
    const companies = await prisma.company.findMany({ select: { id: true, isin: true, name: true, ticker: true } });
    const chunks = await prisma.transcriptChunk.findMany({ select: { companyId: true }, distinct: ['companyId'] });

    // Build Maps for O(1) lookups
    const transcriptMap = new Set(transcripts.map(t => `${t.companyId}-${t.quarterId}`));
    const companyIdSet = new Set(companies.map(c => c.id));

    // --- CHECK 1: Analyses with no matching transcript ---
    // Only the newest TRANSCRIPT_WINDOW quarters per company are expected to
    // still have a transcript; older analyses legitimately outlive theirs.
    console.log("1. ANALYSES WITH NO MATCHING TRANSCRIPT:");
    const analysesByCompany = new Map();
    for (const a of analyses) {
        if (!analysesByCompany.has(a.companyId)) analysesByCompany.set(a.companyId, []);
        analysesByCompany.get(a.companyId).push(a);
    }

    let orphanAnalyses = 0;
    let agedOutAnalyses = 0;
    for (const list of analysesByCompany.values()) {
        list.sort((x, y) => quarterScore(y.quarter.name) - quarterScore(x.quarter.name));
        list.forEach((a, idx) => {
            if (transcriptMap.has(`${a.companyId}-${a.quarterId}`)) return;
            if (idx < TRANSCRIPT_WINDOW) {
                console.log(`   ❌ Orphan: ${a.company.name} (${a.quarter.name})`);
                orphanAnalyses++;
            } else {
                agedOutAnalyses++;
            }
        });
    }
    console.log(`   Total: ${orphanAnalyses} orphan analyses (${agedOutAnalyses} analyses kept past the transcript window — expected)\n`);

    // --- CHECK 2: Duplicate ISIN entries ---
    console.log("2. DUPLICATE ISIN ENTRIES:");
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

    // --- CHECK 3: Duplicate Company+Quarter transcript combinations ---
    console.log("3. DUPLICATE COMPANY+QUARTER TRANSCRIPTS:");
    const transcriptCount = {};
    transcripts.forEach(t => {
        const key = `${t.companyId}-${t.quarterId}`;
        if (!transcriptCount[key]) transcriptCount[key] = [];
        transcriptCount[key].push(t);
    });
    let duplicateTranscripts = 0;
    Object.values(transcriptCount).forEach(list => {
        if (list.length > 1) {
            const t = list[0];
            console.log(`   ❌ Duplicate: ${t.company.name} ${t.quarter.name} (${list.length} copies)`);
            duplicateTranscripts++;
        }
    });
    console.log(`   Total: ${duplicateTranscripts} duplicate transcript events\n`);

    // --- CHECK 4: RAG chunks pointing to deleted companies ---
    console.log("4. RAG CHUNKS POINTING TO DELETED COMPANIES:");
    let orphanChunks = 0;
    for (const chunk of chunks) {
        if (!companyIdSet.has(chunk.companyId)) {
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
}

main().catch(console.error).finally(() => prisma.$disconnect());
