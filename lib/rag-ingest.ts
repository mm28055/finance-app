
import { prisma } from './prisma';
import { nextClient } from './gemini';

const MODEL_NAME = "gemini-embedding-001";
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = 200;

// A 60k-char transcript is ~75 chunks, and each chunk is its own embedding call.
// Done one at a time that dominates the per-company sync cost, so they go out in
// batches. Keep this modest: it multiplies with smart-sync's company concurrency.
const EMBED_BATCH = 8;
const EMBED_RETRIES = 3;

async function generateEmbedding(text: string) {
    // Round-robin the API keys so batches spread across them instead of pinning one.
    const model = nextClient().getGenerativeModel({ model: MODEL_NAME });
    const result = await model.embedContent(text);
    return result.embedding.values.slice(0, 768);
}

// Retries transient failures (rate limits especially) with backoff. Returns null
// only when the chunk is genuinely unusable, so the caller can report a count
// instead of silently dropping content from the index.
async function embedWithRetry(text: string): Promise<number[] | null> {
    for (let attempt = 1; attempt <= EMBED_RETRIES; attempt++) {
        try {
            return await generateEmbedding(text);
        } catch (e: any) {
            const isLast = attempt === EMBED_RETRIES;
            if (isLast) {
                console.error(`[RAG] Embedding failed after ${EMBED_RETRIES} attempts: ${e.message}`);
                return null;
            }
            await new Promise(r => setTimeout(r, attempt * 1500));
        }
    }
    return null;
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

    // 3. Embed in batches, then insert
    let inserted = 0;
    let dropped = 0;

    for (let i = 0; i < chunks.length; i += EMBED_BATCH) {
        const batch = chunks.slice(i, i + EMBED_BATCH);
        const vectors = await Promise.all(batch.map(c => embedWithRetry(c)));

        for (let j = 0; j < batch.length; j++) {
            const vector = vectors[j];
            if (!vector) {
                dropped++;
                continue;
            }
            try {
                await prisma.$executeRaw`
                    INSERT INTO "TranscriptChunk" (id, content, embedding, sector, "companyId", "quarterId", "createdAt")
                    VALUES (
                        gen_random_uuid(),
                        ${batch[j]},
                        ${vector}::vector,
                        ${transcript.company.sector},
                        ${transcript.companyId},
                        ${transcript.quarterId},
                        NOW()
                    )
                `;
                inserted++;
            } catch (e: any) {
                dropped++;
                console.error(`[RAG] Insert failed for a chunk: ${e.message}`);
            }
        }
    }

    console.log(`[RAG] Ingestion complete for ${transcript.company.ticker}: ${inserted}/${chunks.length} chunks indexed${dropped ? `, ${dropped} dropped` : ''}`);
}
