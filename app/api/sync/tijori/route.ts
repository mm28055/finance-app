import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        console.log("🚀 Manual Tijori Sync Started in Background");

        const scriptPath = path.join(process.cwd(), 'scripts', 'smart-sync.ts');

        const logPath = path.join(process.cwd(), 'sync-progress.log');
        const fs = require('fs');
        const out = fs.openSync(logPath, 'a');
        const err = fs.openSync(logPath, 'a');

        // Spawn the process (Windows compatible detached)
        const child = spawn('cmd.exe', ['/c', 'npx', 'tsx', scriptPath], {
            detached: true,
            stdio: ['ignore', out, err]
        });

        child.unref(); // Allow the parent process to exit independently

        return NextResponse.json({
            success: true,
            message: "Tijori sync started in background. This may take a while for 680 companies."
        });

    } catch (error: any) {
        console.error("Fatal Sync Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
