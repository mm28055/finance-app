
import { processTranscript } from '../lib/sync-service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fixAarti() {
    console.log("--- Fixing Aarti Industries Q3 FY26 ---");
    const t = await prisma.transcript.findFirst({
        where: {
            company: { name: { contains: 'Aarti', mode: 'insensitive' } },
            quarter: { name: 'Q3 FY26' }
        },
        include: { company: true, quarter: true }
    });

    if (t) {
        console.log(`Triggering processTranscript for ${t.id}...`);
        // This will extract text, run AI analysis, and trigger RAG ingestion
        await processTranscript(t.id);
        console.log("Process complete for Aarti Industries!");
    } else {
        console.log("No Q3 FY26 transcript found for Aarti.");
    }
}

fixAarti()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
