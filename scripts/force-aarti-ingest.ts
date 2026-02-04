
import { PrismaClient } from '@prisma/client';
import { ingestTranscript } from '../lib/rag-ingest';

const prisma = new PrismaClient();

async function forceAarti() {
    console.log("Forcing RAG Ingestion for Aarti Industries Q3 FY26...");
    const q3 = await prisma.quarter.findUnique({ where: { name: 'Q3 FY26' } });
    const company = await prisma.company.findFirst({ where: { name: { contains: 'Aarti', mode: 'insensitive' } } });

    if (q3 && company) {
        const transcript = await prisma.transcript.findUnique({
            where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } }
        });

        if (transcript) {
            console.log(`Found Transcript ${transcript.id}. Ingesting...`);
            await ingestTranscript(transcript.id);
            console.log("Ingestion Complete for Aarti!");
        } else {
            console.log("Transcript not found for Aarti Q3 FY26.");
        }
    } else {
        console.log("Quarter or Company not found.");
    }
}

forceAarti()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
