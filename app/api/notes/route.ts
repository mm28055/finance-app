import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { defaultNoteTitle } from '@/lib/notes';

// GET: With `list=1`, returns every note in the scope (key + title only) so the
// sidebar can render them. Otherwise returns one note's body for a scope/key
// pair, empty if it doesn't exist yet.
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const scope = searchParams.get('scope');
        const key = searchParams.get('key');

        if (scope && searchParams.get('list')) {
            const notes = await prisma.note.findMany({
                where: { scope },
                select: { key: true, title: true, updatedAt: true },
                orderBy: { createdAt: 'asc' }
            });
            return NextResponse.json({
                notes: notes.map(n => ({
                    key: n.key,
                    title: n.title || defaultNoteTitle(n.key),
                    updatedAt: n.updatedAt
                }))
            });
        }

        if (!scope || !key) {
            return NextResponse.json({ error: "scope and key required" }, { status: 400 });
        }

        const note = await prisma.note.findUnique({
            where: { scope_key: { scope, key } }
        });

        return NextResponse.json({
            content: note?.content ?? "",
            title: note?.title ?? null,
            updatedAt: note?.updatedAt ?? null
        });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

// POST: Upsert the note body. A title is only stored when one is supplied, so
// autosaving a body never wipes the name.
export async function POST(req: NextRequest) {
    try {
        const { scope, key, content, title } = await req.json();

        if (!scope || !key) {
            return NextResponse.json({ error: "scope and key required" }, { status: 400 });
        }

        const trimmed = typeof title === 'string' ? title.trim() : null;

        const note = await prisma.note.upsert({
            where: { scope_key: { scope, key } },
            update: { content: content ?? "", ...(trimmed ? { title: trimmed } : {}) },
            create: { scope, key, content: content ?? "", title: trimmed }
        });

        return NextResponse.json({ success: true, updatedAt: note.updatedAt });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

// PATCH: Rename a note. Creates the row if the note has never been saved.
export async function PATCH(req: NextRequest) {
    try {
        const { scope, key, title } = await req.json();

        if (!scope || !key) {
            return NextResponse.json({ error: "scope and key required" }, { status: 400 });
        }

        const trimmed = typeof title === 'string' ? title.trim() : "";
        if (!trimmed) {
            return NextResponse.json({ error: "title required" }, { status: 400 });
        }

        await prisma.note.upsert({
            where: { scope_key: { scope, key } },
            update: { title: trimmed },
            create: { scope, key, title: trimmed, content: "" }
        });

        return NextResponse.json({ success: true, title: trimmed });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

// DELETE: Remove a note for good.
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const scope = searchParams.get('scope');
        const key = searchParams.get('key');

        if (!scope || !key) {
            return NextResponse.json({ error: "scope and key required" }, { status: 400 });
        }

        await prisma.note.deleteMany({ where: { scope, key } });

        return NextResponse.json({ success: true });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
