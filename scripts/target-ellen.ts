
import { PrismaClient } from '@prisma/client';
import { processTranscript } from '../lib/sync-service';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    console.log("--- Targeted Repair (TS): ELLEN ---");
    try {
        const company = await prisma.company.findFirst({ where: { ticker: 'ELLEN' } });
        const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });

        if (!company || !q3) throw new Error("Company or Quarter not found");

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
            await processTranscript(transcript.id);

            console.log("✅ Repair triggered. Checking DB for content...");

            const freshA = await prisma.analysis.findUnique({
                where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } }
            });

            if (freshA && freshA.deltaAnalysis && freshA.deltaAnalysis.length > 100) {
                console.log("🎉 SUCCESS! deltaAnalysis found.");
                console.log("Length:", freshA.deltaAnalysis.length);
                console.log("Snippet:", freshA.deltaAnalysis.substring(0, 500));
            } else {
                console.log("❌ FAILED. deltaAnalysis is still empty or too short.");
                if (freshA) console.log("Current Content:", freshA.deltaAnalysis);
            }
        }
    } catch (e: any) {
        console.error("ERROR:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
