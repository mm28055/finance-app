import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { processTranscript } from '@/lib/sync-service';

export async function POST(request: Request) {
    try {
        console.log("Sync Started: analyzing any pending transcripts (rolling window).");

        // Find transcripts that haven't been analyzed yet. We no longer hardcode
        // quarter names here — inbound transcripts are filtered upstream by the
        // smart-sync path against the rolling window. This route simply drains
        // anything still flagged hasAnalysis=false.
        // RESTRICTION: Only "Aerospace defence" sector as per user request
        const transcripts = await prisma.transcript.findMany({
            where: {
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
