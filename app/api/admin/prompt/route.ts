
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const CONFIG_KEY = 'PROMPT_CONFIG';

export async function GET() {
    try {
        const config = await prisma.systemConfig.findUnique({
            where: { key: CONFIG_KEY }
        });

        if (!config) {
            return NextResponse.json({ error: "Config not found" }, { status: 404 });
        }

        return NextResponse.json(JSON.parse(config.value));
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { basePrompt, deltaInstructions } = body;

        if (!basePrompt) return NextResponse.json({ error: "Missing basePrompt" }, { status: 400 });

        const value = JSON.stringify({
            basePrompt,
            deltaInstructions: deltaInstructions || ""
        });

        // Upsert to DB
        await prisma.systemConfig.upsert({
            where: { key: CONFIG_KEY },
            update: { value },
            create: { key: CONFIG_KEY, value }
        });

        return NextResponse.json({ success: true });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
