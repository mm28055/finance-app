
import { prisma } from '@/lib/prisma';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!);
const EMBEDDING_MODEL = "text-embedding-004";

export async function generateEmbedding(text: string): Promise<number[]> {
    const model = genAI.getGenerativeModel({ model: EMBEDDING_MODEL });
    const result = await model.embedContent(text);
    return result.embedding.values;
}

export interface RagResult {
    content: string;
    companyId: string;
    quarterId: string;
    distance: number;
}

/**
 * Searches for relevant transcript chunks within a specific sector.
 * Uses pgvector cosine distance definition (<=>).
 */
export async function searchSectorTranscripts(sector: string, query: string, limit = 50): Promise<RagResult[]> {
    // 1. Generate Vector for the Query
    const vector = await generateEmbedding(query);

    // 2. Perform Vector Search via Raw SQL
    // Note: We cast the vector array to the postgres vector type using ::vector
    const results = await prisma.$queryRaw`
        SELECT 
            content, 
            "companyId", 
            "quarterId",
            (embedding <=> ${vector}::vector) as distance
        FROM "TranscriptChunk"
        WHERE sector = ${sector}
        ORDER BY distance ASC
        LIMIT ${limit};
    ` as any[];

    return results.map(r => ({
        content: r.content,
        companyId: r.companyId,
        quarterId: r.quarterId,
        distance: r.distance
    }));
}
