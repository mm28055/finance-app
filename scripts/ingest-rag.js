
const { PrismaClient } = require('@prisma/client');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);

// Config
const MODEL_NAME = "gemini-embedding-001";
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = 200;

async function generateEmbedding(text) {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.embedContent(text);
    return result.embedding.values;
}

function splitText(text, size, overlap) {
    const chunks = [];
    let start = 0;
    while (start < text.length) {
        const end = Math.min(start + size, text.length);
        chunks.push(text.slice(start, end));
        start += size - overlap;
    }
    return chunks;
}

async function main() {
    console.log("🚀 Starting RAG Ingestion...");

    // 1. Enable Extension (Idempotent)
    try {
        await prisma.$executeRawUnsafe(`CREATE EXTENSION IF NOT EXISTS vector;`);
    } catch (e) {
        console.log("Vector extension check failed (might already exist or permission issue):", e.message);
    }

    // 2. Fetch all transcripts
    const transcripts = await prisma.transcript.findMany({
        where: {
            // Optional: Filter for a specific sector if testing
            // company: { sector: 'Defense' } 
            rawText: { not: null }
        },
        include: { company: true }
    });

    console.log(`Found ${transcripts.length} transcripts to process.`);

    for (const t of transcripts) {
        if (!t.rawText) continue;

        // Check if already processed
        // (Simplistic check: if chunks exist for this company/quarter)
        const existing = await prisma.$queryRaw`
            SELECT count(*) as count FROM "TranscriptChunk" 
            WHERE "companyId" = ${t.companyId} AND "quarterId" = ${t.quarterId}
        `;

        if (Number(existing[0].count) > 0) {
            console.log(`Skipping ${t.company.ticker} (Already ingested)`);
            continue;
        }

        console.log(`Processing ${t.company.ticker}...`);
        const chunks = splitText(t.rawText, CHUNK_SIZE, CHUNK_OVERLAP);
        console.log(`  - Generated ${chunks.length} chunks`);

        for (const chunk of chunks) {
            try {
                const vector = await generateEmbedding(chunk);

                // Insert using raw SQL because Prisma doesn't support vector types natively
                await prisma.$executeRaw`
                    INSERT INTO "TranscriptChunk" (id, content, embedding, sector, "companyId", "quarterId", "createdAt")
                    VALUES (
                        gen_random_uuid(),
                        ${chunk},
                        ${vector}::vector,
                        ${t.company.sector},
                        ${t.companyId},
                        ${t.quarterId},
                        NOW()
                    )
                `;
            } catch (e) {
                console.error(`  - Error embedding chunk: ${e.message}`);
                // Rate limit handling could go here
                await new Promise(r => setTimeout(r, 1000));
            }
            // Small delay to be nice to API
            await new Promise(r => setTimeout(r, 100)); // 10 requests/sec limit usually
        }
    }

    console.log("✅ Ingestion Complete!");
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
