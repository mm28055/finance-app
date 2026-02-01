import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { analyzeTranscript } from '@/lib/ai-analyst';
import fs from 'fs';
const pdf = require('pdf-parse');

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const companyName = searchParams.get('company') || 'Apollo';

    try {
        console.log(`Debug: searching for ${companyName}`);

        const transcript = await prisma.transcript.findFirst({
            where: {
                company: { name: { contains: companyName } },
                quarter: { name: 'Q2 FY26' }
            },
            include: { company: true, quarter: true }
        });

        if (!transcript) {
            return NextResponse.json({ error: "Transcript not found for Q2 FY26" });
        }

        const debugInfo: any = {
            company: transcript.company.name,
            quarter: transcript.quarter.name,
            fileUrl: transcript.fileUrl,
            exists: false,
            textLength: 0,
            excerpt: "",
            aiResult: null
        };

        if (transcript.fileUrl) {
            debugInfo.exists = fs.existsSync(transcript.fileUrl);
            if (debugInfo.exists) {
                const dataBuffer = fs.readFileSync(transcript.fileUrl);
                const data = await pdf(dataBuffer);
                debugInfo.textLength = data.text.length;
                debugInfo.excerpt = data.text.substring(0, 500);

                // Run AI
                try {
                    const ai = await analyzeTranscript(data.text, null);
                    debugInfo.aiResult = ai;
                } catch (e: any) {
                    debugInfo.aiError = e.message;
                }
            }
        }

        return NextResponse.json(debugInfo);

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
