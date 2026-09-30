import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET: Fetch chat history for a sector
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const sector = searchParams.get('sector');

        if (!sector) {
            return NextResponse.json({ error: "Sector required" }, { status: 400 });
        }

        const messages = await prisma.sectorChat.findMany({
            where: { sector },
            orderBy: { timestamp: 'asc' },
            take: 50 // Limit to last 50 messages
        });

        // Convert BigInt to number for JSON response
        const formatted = messages.map(m => ({
            id: m.id,
            role: m.role,
            content: m.content,
            timestamp: Number(m.timestamp)
        }));

        return NextResponse.json(formatted);

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

// POST: Save a new message
export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Sign in to use the chat' }, { status: 401 });
    try {
        const { sector, role, content, timestamp } = await req.json();

        if (!sector || !role || !content) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const msg = await prisma.sectorChat.create({
            data: {
                sector,
                role,
                content,
                timestamp: timestamp || Date.now()
            }
        });

        return NextResponse.json({
            id: msg.id,
            timestamp: Number(msg.timestamp)
        });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

// DELETE: Clear history for a sector
export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Sign in to use the chat' }, { status: 401 });
    try {
        const { searchParams } = new URL(req.url);
        const sector = searchParams.get('sector');

        if (!sector) {
            return NextResponse.json({ error: "Sector required" }, { status: 400 });
        }

        await prisma.sectorChat.deleteMany({
            where: { sector }
        });

        return NextResponse.json({ success: true });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
