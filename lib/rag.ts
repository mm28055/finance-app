
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!);
const EMBEDDING_MODEL = "gemini-embedding-001";

export async function generateEmbedding(text: string): Promise<number[]> {
    const model = genAI.getGenerativeModel({ model: EMBEDDING_MODEL });
    const result = await model.embedContent(text);
    return result.embedding.values.slice(0, 768);
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
    // We use the Transcript table because RAG searches raw transcripts.
    // Finding the latest 2 quarters that actually HAVE transcripts for each company in the sector.
    const companies = await prisma.company.findMany({
        where: { sector: sector, isVisible: true },
        select: {
            id: true,
            transcripts: {
                take: 2,
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                select: { quarterId: true }
            }
        }
    });

    const quarterIds = new Set<string>();
    companies.forEach(c => {
        c.transcripts.forEach(t => quarterIds.add(t.quarterId));
    });
    return Array.from(quarterIds);
}

export async function searchSectorTranscripts(sector: string, query: string, limit = 125): Promise<RagResult[]> {
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

/**
 * Balanced RAG Search: Ensures every company has at least 1 chunk.
 * Phase 1: Get 1 most relevant chunk per company (guaranteed coverage)
 * Phase 2: Fill remaining budget with global best matches
 */
export async function searchSectorTranscriptsBalanced(sector: string, query: string, totalLimit = 125, targetQuarter?: string): Promise<RagResult[]> {
    // 1. Get allowed quarters and company list
    const companies = await prisma.company.findMany({
        where: { sector: sector, isVisible: true },
        select: { id: true }
    });
    const companyIds = companies.map(c => c.id);

    // If targetQuarter specified (e.g., "Q3"), filter strictly to that quarter
    let allowedQuarterIds: string[];
    if (targetQuarter) {
        const targetQ = await prisma.quarter.findFirst({
            where: { name: { contains: targetQuarter, mode: 'insensitive' } },
            orderBy: { year: 'desc' }
        });
        allowedQuarterIds = targetQ ? [targetQ.id] : await getRecentQuarterIds(sector);
    } else {
        allowedQuarterIds = await getRecentQuarterIds(sector);
    }

    if (allowedQuarterIds.length === 0 || companyIds.length === 0) return [];

    const vector = await generateEmbedding(query);

    // Phase 1: Get 1 best chunk per company (guaranteed representation)
    const guaranteedChunks = await prisma.$queryRaw`
        SELECT DISTINCT ON ("companyId")
            content, 
            "companyId", 
            "quarterId",
            (embedding <=> ${vector}::vector) as distance
        FROM "TranscriptChunk"
        WHERE sector = ${sector}
        AND "quarterId" IN (${Prisma.join(allowedQuarterIds)})
        ORDER BY "companyId", distance ASC;
    ` as any[];

    // Phase 2: Get remaining budget globally (excluding already-selected chunks)
    const remainingBudget = Math.max(0, totalLimit - guaranteedChunks.length);
    const guaranteedContents = new Set(guaranteedChunks.map(c => c.content));

    let fillChunks: any[] = [];
    if (remainingBudget > 0) {
        fillChunks = await prisma.$queryRaw`
            SELECT 
                content, 
                "companyId", 
                "quarterId",
                (embedding <=> ${vector}::vector) as distance
            FROM "TranscriptChunk"
            WHERE sector = ${sector}
            AND "quarterId" IN (${Prisma.join(allowedQuarterIds)})
            ORDER BY distance ASC
            LIMIT ${remainingBudget + guaranteedChunks.length};
        ` as any[];

        // Remove duplicates (already in guaranteed)
        fillChunks = fillChunks.filter(c => !guaranteedContents.has(c.content)).slice(0, remainingBudget);
    }

    // Combine and sort by distance
    const combined = [...guaranteedChunks, ...fillChunks].sort((a, b) => a.distance - b.distance);

    return combined.map(r => ({
        content: r.content,
        companyId: r.companyId,
        quarterId: r.quarterId,
        distance: r.distance
    }));
}
