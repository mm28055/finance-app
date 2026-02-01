import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { processTranscript } from '@/lib/sync-service';

export async function POST(request: Request) {
    try {
        console.log("Sync Started: Strictly filtering for Q2 & Q3 2026...");

        // 1. Get/Create the target Quarters
        const targetQuarters = ["Q2 FY26", "Q3 FY26"];
        const quarters = await Promise.all(targetQuarters.map(async (qName) => {
            const [q, yearInput] = qName.split(' ');
            return prisma.quarter.upsert({
                where: { name: qName },
                update: {},
                create: {
                    name: qName,
                    year: 2026,
                    q: q
                }
            });
        }));

        const quarterIds = quarters.map(q => q.id);

        // 2. Find transcripts that haven't been analyzed yet for these quarters
        // RESTRICTION: Only "Aerospace defence" sector as per user request
        const transcripts = await prisma.transcript.findMany({
            where: {
                quarterId: { in: quarterIds },
                hasAnalysis: false,
                company: {
                    sector: "Aerospace defence"
                }
            },
            include: { company: true, quarter: true }
        });

        console.log(`Found ${transcripts.length} transcripts pending analysis.`);

        for (const transcript of transcripts) {
            console.log(`Analyzing: ${transcript.company.name} (${transcript.quarter.name})`);
            await processTranscript(transcript.id);
        }

        return NextResponse.json({
            success: true,
            message: `Processed ${transcripts.length} transcripts.`,
            count: transcripts.length
        });

    } catch (error) {
        console.error("Sync Failed:", error);
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}
