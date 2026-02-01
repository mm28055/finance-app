
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONFIG_PATH = path.join(process.cwd(), 'data', 'prompt_config.json');

export async function GET() {
    try {
        if (!fs.existsSync(CONFIG_PATH)) {
            return NextResponse.json({ error: "Config not found" }, { status: 404 });
        }
        const data = fs.readFileSync(CONFIG_PATH, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { basePrompt, deltaInstructions } = body;

        if (!basePrompt) return NextResponse.json({ error: "Missing basePrompt" }, { status: 400 });

        // Save to file
        fs.writeFileSync(CONFIG_PATH, JSON.stringify({
            basePrompt,
            deltaInstructions: deltaInstructions || ""
        }, null, 2));

        return NextResponse.json({ success: true });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
