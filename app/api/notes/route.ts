import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Fetch the note for a scope/key pair. Returns empty content if none yet.
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const scope = searchParams.get('scope');
        const key = searchParams.get('key');

        if (!scope || !key) {
            return NextResponse.json({ error: "scope and key required" }, { status: 400 });
        }

        const note = await prisma.note.findUnique({
            where: { scope_key: { scope, key } }
        });

        return NextResponse.json({
            content: note?.content ?? "",
            updatedAt: note?.updatedAt ?? null
        });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

// POST: Upsert the note body.
export async function POST(req: NextRequest) {
    try {
        const { scope, key, content } = await req.json();

        if (!scope || !key) {
            return NextResponse.json({ error: "scope and key required" }, { status: 400 });
        }

        const note = await prisma.note.upsert({
            where: { scope_key: { scope, key } },
            update: { content: content ?? "" },
            create: { scope, key, content: content ?? "" }
        });

        return NextResponse.json({ success: true, updatedAt: note.updatedAt });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
