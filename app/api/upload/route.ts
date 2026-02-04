
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { processTranscript } from '@/lib/sync-service';
import { createClient } from '@supabase/supabase-js';

// Vercel Serverless Config
export const dynamic = 'force-dynamic';
export const maxDuration = 60; // Allow 60s for upload/analysis

// Init Supabase Admin
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const BUCKET_NAME = 'Conf Call Pdfs';

const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;

export async function POST(req: NextRequest) {
    try {
        if (!supabase) {
            return NextResponse.json({ error: "Server missing Supabase credentials" }, { status: 500 });
        }

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

        // 2. Construct Paths
        const fyName = `${qStr} FY${yearStr.slice(-2)}`; // "Q3 FY26"
        const safeName = company.name.replace(/[^a-z0-9]/gi, '_').trim();
        const sectorFolder = company.sector || 'Unsorted';

        // Supabase Path: Sector/Q3 FY26/Company_Q3_FY26.pdf
        const fileName = `${safeName}_${fyName.replace(/\s+/g, '_')}.pdf`;
        const storagePath = `${sectorFolder}/${fyName}/${fileName}`;

        // 3. Upload to Supabase
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const { error: uploadError } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(storagePath, buffer, {
                contentType: 'application/pdf',
                upsert: true
            });

        if (uploadError) throw new Error(`Supabase Upload Failed: ${uploadError.message}`);

        // 4. Get Public URL
        const { data: { publicUrl } } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(storagePath);

        console.log(`☁️ Cloud Upload Success: ${publicUrl}`);

        // 5. Update Database
        const quarter = await prisma.quarter.upsert({
            where: { name: fyName },
            update: {},
            create: { name: fyName, year: parseInt(yearStr), q: qStr }
        });

        // Upsert Transcript
        const transcriptId = `real-${(company.ticker || company.id).toUpperCase()}-${fyName.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');

        const transcript = await prisma.transcript.upsert({
            where: { id: transcriptId },
            update: {
                fileUrl: publicUrl,
                hasAnalysis: false // Reset analysis since it's a new file
            },
            create: {
                id: transcriptId,
                companyId: company.id,
                quarterId: quarter.id,
                fileUrl: publicUrl,
                hasAnalysis: false,
                rawText: ''
            }
        });

        // 6. Trigger Analysis
        processTranscript(transcript.id).catch(err =>
            console.error(`Manual Analysis Failed for ${company.name}:`, err)
        );

        // 7. AUTO-INGEST into RAG (New Step)
        try {
            // We perform this asynchronously so we don't block the upload response
            // But in serverless (Vercel), we should ideally await it or use Inngest/Background Jobs.
            // For this app, awaiting is safer to ensure it finishes.
            const { ingestTranscript } = await import('@/lib/rag-ingest');
            console.log("Triggering RAG Ingestion...");
            await ingestTranscript(transcript.id);
        } catch (err) {
            console.error("RAG Auto-Ingest Failed:", err);
            // Don't fail the upload just because RAG failed
        }

        return NextResponse.json({
            success: true,
            transcriptId: transcript.id,
            message: "Uploaded and RAG-Indexed successfully"
        });

    } catch (e: any) {
        console.error("Upload Error:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
