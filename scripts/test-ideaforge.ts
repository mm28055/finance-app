import 'dotenv/config';
import { analyzeTranscript } from '../lib/ai-analyst';
import fs from 'fs';
import path from 'path';
const pdf = require('pdf-parse');

async function runTest() {
    const pdfPath = path.join(process.cwd(), 'Concalls', 'Aerospace defence', 'q2 2026', 'ideaForge_Technology.pdf');

    if (!fs.existsSync(pdfPath)) {
        console.error("ideaForge PDF not found at:", pdfPath);
        return;
    }

    console.log("📄 Extracting text from ideaForge PDF...");
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    const text = data.text;

    console.log("🤖 Running Gemini Analysis (this may take a moment)...");
    try {
        const result = await analyzeTranscript(text);

        console.log("\n--- START OF INVESTOR BRIEF ---\n");
        console.log(result.investor_brief);
        console.log("\n--- END OF INVESTOR BRIEF ---\n");

        // Save to artifact directory for easy retrieval if needed
        const artifactPath = path.join(process.cwd(), '.gemini', 'antigravity', 'brain', 'af5fdcf6-0bef-49c6-857d-50a642a7cf87', 'ideaforge_sample.md');
        fs.writeFileSync(artifactPath, result.investor_brief || "No brief generated");
        console.log("✅ Sample saved to:", artifactPath);

    } catch (err: any) {
        console.error("❌ Analysis failed:", err.message);
    }
}

runTest();
