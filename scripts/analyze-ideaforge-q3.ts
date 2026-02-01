import 'dotenv/config';
import { processTranscript } from '../lib/sync-service';

async function analyzeQ3() {
    const transcriptId = 'real-IDEAFORGE-Q3 FY26';
    console.log(`🚀 Analyzing ${transcriptId} with institutional prompt...`);
    try {
        const result = await processTranscript(transcriptId);
        if (result.success) {
            console.log("✅ ideaForge Q3 analyzed successfully.");
        } else {
            console.error("❌ Analysis failed:", result.error);
        }
    } catch (err: any) {
        console.error("❌ Error:", err.message);
    }
    process.exit(0);
}

analyzeQ3();
