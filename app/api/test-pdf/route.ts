import { NextResponse } from 'next/server';
const pdf = require('pdf-parse');
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    try {
        console.log("Health check for PDF Parse...");
        // Just try to parse a dummy buffer
        const dummyBuffer = Buffer.from("test");
        // This will fail because it's not a real PDF, but if it throws a specific parsing error instead of "module not found", we know the import worked.

        try {
            await pdf(dummyBuffer);
        } catch (e: any) {
            console.log("Parsing error (expected):", e.message);
        }

        return NextResponse.json({ success: true, message: "PDF Parse imported successfully" });
    } catch (error: any) {
        console.error("Test API Failed:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
