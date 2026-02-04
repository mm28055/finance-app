
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
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
// Helper to get recent quarter IDs for a sector to filter RAG
async function getRecentQuarterIds(sector: string): Promise<string[]> {
    const companies = await prisma.company.findMany({
        where: { sector, isVisible: true },
        select: {
            id: true,
            analyses: {
                take: 2, // Latest 2 quarters
                orderBy: { quarter: { year: 'desc' } }, // Approximate sorting
                select: { quarterId: true }
            }
        }
    });

    const quarterIds = new Set<string>();
    companies.forEach(c => {
        c.analyses.forEach(a => quarterIds.add(a.quarterId));
    });
    return Array.from(quarterIds);
}

export async function searchSectorTranscripts(sector: string, query: string, limit = 50): Promise<RagResult[]> {
    // 1. Get List of Allowed Quarter IDs (Latest 2 per company)
    const allowedQuarterIds = await getRecentQuarterIds(sector);

    if (allowedQuarterIds.length === 0) return [];

    // 2. Generate Vector for the Query
    const vector = await generateEmbedding(query);

    // 3. Perform Vector Search via Raw SQL with Filter
    const results = await prisma.$queryRaw`
        SELECT 
            content, 
            "companyId", 
            "quarterId",
            (embedding <=> ${vector}::vector) as distance
        FROM "TranscriptChunk"
        WHERE sector = ${sector}
        AND "quarterId" IN (${Prisma.join(allowedQuarterIds)})
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
