
import { PrismaClient } from '@prisma/client';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize existing client if available to prevent connection exhaustion in serverless
const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!);

const MODEL_NAME = "gemini-embedding-001";
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = 200;

async function generateEmbedding(text: string) {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.embedContent(text);
    return result.embedding.values.slice(0, 768);
}

function splitText(text: string, size: number, overlap: number) {
    const chunks = [];
    let start = 0;
    while (start < text.length) {
        const end = Math.min(start + size, text.length);
        chunks.push(text.slice(start, end));
        start += size - overlap;
    }
    return chunks;
}

/**
 * Ingests a single transcript into the vector database.
 * idempotent: clears existing chunks for this transcript/company/quarter before adding new ones.
 */
export async function ingestTranscript(transcriptId: string) {
    console.log(`[RAG] Starting ingestion for transcript ${transcriptId}...`);

    const transcript = await prisma.transcript.findUnique({
        where: { id: transcriptId },
        include: { company: true }
    });

    if (!transcript || !transcript.rawText) {
        console.log(`[RAG] Transcript ${transcriptId} has no raw text. Skipping.`);
        return;
    }

    // 1. Clear existing chunks to avoid duplicates
    // Using raw SQL for safety if needed, or simple deleteMany
    await prisma.transcriptChunk.deleteMany({
        where: {
            companyId: transcript.companyId,
            quarterId: transcript.quarterId
        }
    });

    // 2. Split Text
    const chunks = splitText(transcript.rawText, CHUNK_SIZE, CHUNK_OVERLAP);
    console.log(`[RAG] Generated ${chunks.length} chunks for ${transcript.company.ticker}`);

    // 3. Embed and Insert
    for (const chunk of chunks) {
        try {
            const vector = await generateEmbedding(chunk);

            await prisma.$executeRaw`
                INSERT INTO "TranscriptChunk" (id, content, embedding, sector, "companyId", "quarterId", "createdAt")
                VALUES (
                    gen_random_uuid(),
                    ${chunk},
                    ${vector}::vector,
                    ${transcript.company.sector},
                    ${transcript.companyId},
                    ${transcript.quarterId},
                    NOW()
                )
            `;
        } catch (e: any) {
            console.error(`[RAG] Error embedding chunk: ${e.message}`);
            // Simple rate limit handling
            await new Promise(r => setTimeout(r, 1000));
        }
        // Throttle
        await new Promise(r => setTimeout(r, 100));
    }
    console.log(`[RAG] Ingestion complete for ${transcript.company.ticker}`);
}
