const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
    console.log("👻 Scanning for ghost transcripts...");

    const transcripts = await prisma.transcript.findMany();
    let ghosts = [];

    for (const t of transcripts) {
        if (!t.fileUrl) continue;

        if (!fs.existsSync(t.fileUrl)) {
            console.log(`❌ Missing file for [${t.companyId}] ${t.quarterId}: ${t.fileUrl}`);
            ghosts.push(t.id);
        }
    }

    console.log(`Found ${ghosts.length} ghost transcripts.`);

    if (ghosts.length > 0) {
        console.log("Deleting...");
        // Delete related financials/analysis first (cascade might handle it, but being safe)
        // Actually, schema cascade might not be set up, so:
        // Identify companyId/quarterId pairs to clean up

        // Easier: Delete transcripts by ID.
        // Prisma cascade delete?
        // Let's check schema.
        //   transcripts Transcript[]
        //   financials  Financials[]
        //   analyses    Analysis[]
        // Financials and Analysis link to Company/Quarter, NOT directly to Transcript.
        // So deleting Transcript is safe, it won't break Financials (unless we want to clean those too).
        // Since these are ghosts, we probably want to clean the analysis data if it exists (which it shouldn't for these).

        await prisma.transcript.deleteMany({
            where: { id: { in: ghosts } }
        });

        // Also clean up Financials/Analysis for these specific company/quarters?
        // Maybe. But primarily we want to remove the "Download Link" from UI which comes from Transcript table.

        console.log("✅ Ghost transcripts deleted.");
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
