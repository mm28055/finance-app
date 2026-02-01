
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { processTranscript } from '@/lib/sync-service';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pump = promisify(pipeline);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const companyId = formData.get('companyId') as string;
        const qStr = formData.get('q') as string; // "Q1", "Q2"
        const yearStr = formData.get('year') as string; // "2026"

        if (!file || !companyId || !qStr || !yearStr) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Fetch Company for Naming
        const company = await prisma.company.findUnique({ where: { id: companyId } });
        if (!company) return NextResponse.json({ error: "Company not found" }, { status: 404 });

        // 2. Construct Standard Names (MATCHING smart-sync.ts)
        // Logic: Q3 FY26. 
        // Note: The UI might send "Q3 2026" (Calendar). We need to convert to FY if needed?
        // Actually, let's assume UI sends the "Fiscal Year" or we derive it.
        // Let's stick to the convention: User thinks in "Q3 FY26".
        // But the input `year` from UI is likely the FY year if we label it so.
        // Let's assume the UI sends the FY year directly to avoid confusion.

        const fyName = `${qStr} FY${yearStr.slice(-2)}`; // "Q3 FY26"
        const safeName = company.name.replace(/[^a-z0-9]/gi, '_').trim();
        const sectorFolder = company.sector || 'Unsorted';

        // Target Directory: Concalls/Sector/Q3 FY26
        const targetDir = path.join(process.cwd(), 'Concalls', sectorFolder, fyName);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        // Target Filename: Company_Name_Q3_FY26.pdf
        const fileName = `${safeName}_${fyName.replace(/\s+/g, '_')}.pdf`;
        const targetPath = path.join(targetDir, fileName);

        // 3. Save File
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(targetPath, buffer);

        console.log(`📎 Manual Upload Saved: ${targetPath}`);

        // 4. Update Database
        // Ensure Quarter exists
        const quarter = await prisma.quarter.upsert({
            where: { name: fyName },
            update: {},
            create: {
                name: fyName,
                year: parseInt(yearStr),
                q: qStr
            }
        });

        // Upsert Transcript
        const transcriptId = `real-${(company.ticker || company.id).toUpperCase()}-${fyName.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');

        const transcript = await prisma.transcript.upsert({
            where: { id: transcriptId },
            update: {
                fileUrl: targetPath,
                hasAnalysis: false // Reset analysis since it's a new file
            },
            create: {
                id: transcriptId,
                companyId: company.id,
                quarterId: quarter.id,
                fileUrl: targetPath,
                hasAnalysis: false,
                rawText: ''
            }
        });

        // 5. Trigger Analysis Immediately (User expects results)
        // We run this in background so UI returns fast? 
        // Or await it? Await is better for feedback "Uploaded & Analyzed".
        // But analysis takes 30s. Let's trigger in background.

        processTranscript(transcript.id).catch(err =>
            console.error(`Manual Analysis Failed for ${company.name}:`, err)
        );

        return NextResponse.json({
            success: true,
            message: "File uploaded. AI Analysis started in background."
        });

    } catch (e: any) {
        console.error("Upload Error:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
