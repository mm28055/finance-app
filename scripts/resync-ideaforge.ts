import 'dotenv/config';
import { processTranscript } from '../lib/sync-service';

async function resync() {
    const transcriptId = 'real-IDEAFORGE-Q2 FY26';
    console.log(`🚀 Re-syncing ${transcriptId}...`);
    try {
        const result = await processTranscript(transcriptId);
        if (result.success) {
            console.log("✅ ideaForge re-synced successfully with new Investor Brief.");
        } else {
            console.error("❌ Re-sync failed:", result.error);
        }
    } catch (err: any) {
        console.error("❌ Error:", err.message);
    }
    process.exit(0);
}

resync();
