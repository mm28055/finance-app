
import { PrismaClient } from '@prisma/client';
import { ingestTranscript } from '../lib/rag-ingest';

const prisma = new PrismaClient();

async function ingestRemaining() {
    console.log("--- Ingesting Remaining Q3 Chemicals ---");
    const transcripts = await prisma.transcript.findMany({
        where: {
            quarter: { name: 'Q3 FY26' },
            company: { sector: 'Chemicals' },
            rawText: { not: '' }
        },
        include: { company: true }
    });

    for (const t of transcripts) {
        const count = await prisma.transcriptChunk.count({
            where: { companyId: t.companyId, quarterId: t.quarterId }
        });

        if (count === 0) {
            console.log(`Ingesting ${t.company.name}...`);
            await ingestTranscript(t.id);
            console.log(`  -> Done.`);
        } else {
            console.log(`Skipping ${t.company.name} (Already has ${count} chunks).`);
        }
    }
}

ingestRemaining()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
