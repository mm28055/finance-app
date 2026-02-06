
const { PrismaClient } = require('@prisma/client');
const { processTranscript } = require('../lib/sync-service');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log("--- Targeted Repair: ELLEN ---");
    try {
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });

        // 1. Delete existing analysis
        await prisma.analysis.deleteMany({
            where: { companyId: company.id, quarterId: q3.id }
        });

        // 2. Reset hasAnalysis flag
        const transcript = await prisma.transcript.findFirst({
            where: { companyId: company.id, quarterId: q3.id }
        });

        if (transcript) {
            await prisma.transcript.update({
                where: { id: transcript.id },
                data: { hasAnalysis: false }
            });

            console.log("Deleted old analysis and reset flags. Starting re-analysis...");

            // 3. Process
            const { processTranscript } = require('./lib/sync-service');
            await processTranscript(transcript.id);

            console.log("✅ Repair triggered. Checking DB for content...");

            const freshA = await prisma.analysis.findUnique({
                where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } }
            });

            if (freshA && freshA.deltaAnalysis) {
                console.log("🎉 SUCCESS! deltaAnalysis found.");
                console.log("Length:", freshA.deltaAnalysis.length);
                console.log("Snippet:", freshA.deltaAnalysis.substring(0, 100));
            } else {
                console.log("❌ FAILED. deltaAnalysis is still empty.");
            }
        }
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
