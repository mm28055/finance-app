
import { PrismaClient } from '@prisma/client';
import { analyzeTranscript } from '../lib/ai-analyst';
import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

const prisma = new PrismaClient();
const BATCH_SIZE = 5;

// Helper to extract text from PDF if not stored
async function getTranscriptText(t: any) {
    if (t.rawText && t.rawText.length > 100) return t.rawText;

    // Fallback: Try to read PDF path
    if (!t.filePath) console.log(`[${t.company.ticker}] No filePath`);

    if (t.filePath && fs.existsSync(t.filePath)) {
        console.log(`Reading PDF for ${t.company.ticker}...`);
        const buffer = fs.readFileSync(t.filePath);
        const data = await pdfParse(buffer);
        return data.text;
    }
    return null;
}

async function processBatch(batch: any[]) {
    const promises = batch.map(async (item) => {
        const { company, quarter, ...transcript } = item;
        console.log(`Processing ${company.name} (${company.ticker})...`);

        try {
            const text = await getTranscriptText(item);
            if (!text) {
                console.log(`Skipping ${company.ticker} - No text found.`);
                return;
            }

            // Run Analysis
            const analysis = await analyzeTranscript(text);

            if (analysis.investibility_score === undefined) {
                console.log(`Skipping update for ${company.ticker} - No score generated.`);
                return;
            }

            // Update DB
            // Update DB using Raw SQL to bypass outdated client types
            const score = analysis.investibility_score;
            const result = await prisma.$executeRaw`
                UPDATE "Analysis" 
                SET "investibilityScore" = ${score}
                WHERE "companyId" = ${company.id} AND "quarterId" = ${quarter.id}
            `;

            if (Number(result) === 0) {
                // If update failed (record doesn't exist), we skip for now as creating requires full schema
                console.log(`⚠️ Record missing for ${company.ticker}, skipping create.`);
                return;
            }

            console.log(`✅ Updated ${company.ticker}: Score ${analysis.investibility_score}`);
        } catch (error) {
            console.error(`❌ Failed ${company.ticker}:`, error);
        }
    });

    await Promise.all(promises);
}

async function main() {
    // 1. Find Q3 2026 Quarter ID
    const q3 = await prisma.quarter.findFirst({
        where: { name: { contains: 'Q3', mode: 'insensitive' } } // Adjust logic to be precise if needed
        // Ideally we select specifically Q3 2026 if names are specific. 
        // Let's assume user wants the LATEST quarter for now or specific string.
        // User said "Q3 2026".
    });

    if (!q3) {
        console.error("Q3 Quarter not found.");
        return;
    }

    // Find specific logic for "Q3 2026" or just use the one the user likely means.
    // Let's list quarters to be sure or just assume the user knows.
    // Better: Find transcripts for Q3 2026.

    const targetQuarterName = "Q3 FY26";
    const quarter = await prisma.quarter.findFirst({
        where: { name: targetQuarterName }
    });

    if (!quarter) {
        console.log(`Quarter "${targetQuarterName}" not found. listing available...`);
        const allQ = await prisma.quarter.findMany();
        console.log(allQ.map(q => q.name));
        return;
    }

    console.log(`Targeting Quarter: ${quarter.name} (${quarter.id})`);

    // 2. Find Transcripts for this quarter where Analysis Score is Null
    // We get ALL transcripts for the quarter, and check if analysis exists & has score.
    const transcripts = await prisma.transcript.findMany({
        where: {
            quarterId: quarter.id
        },
        include: {
            company: true,
            quarter: true
        }
    });

    console.log(`Found ${transcripts.length} transcripts for ${targetQuarterName}. Checking for missing scores...`);

    const toProcess = [];

    for (const t of transcripts) {
        const analysis = await prisma.analysis.findUnique({
            where: {
                companyId_quarterId: {
                    companyId: t.companyId,
                    quarterId: t.quarterId
                }
            }
        });

        // Check if score is missing (null or undefined)
        if (!analysis || analysis.investibilityScore == null) {
            toProcess.push(t);
        } else {
            // Debug: check why it thinks score exists
            // console.log(`Skipping ${t.company.ticker} - Score exists: ${analysis.investibilityScore}`);
        }
    }

    console.log(`Found ${toProcess.length} companies needing backfill.`);

    // 3. Process in Batches
    for (let i = 0; i < toProcess.length; i += BATCH_SIZE) {
        const batch = toProcess.slice(i, i + BATCH_SIZE);
        console.log(`\n--- Processing Batch ${Math.floor(i / BATCH_SIZE) + 1} / ${Math.ceil(toProcess.length / BATCH_SIZE)} ---`);
        await processBatch(batch);
    } // Wait small buffer?
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
