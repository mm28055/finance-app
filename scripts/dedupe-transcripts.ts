import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    console.log("🧹 Deduplicating Transcripts...");
    const transcripts = await prisma.transcript.findMany({
        select: { id: true, companyId: true, quarterId: true }
    });

    const seen = new Set();
    const duplicates = [];

    for (const t of transcripts) {
        const key = `${t.companyId}_${t.quarterId}`;
        if (seen.has(key)) {
            duplicates.push(t.id);
        } else {
            seen.add(key);
        }
    }

    if (duplicates.length > 0) {
        console.log(`🗑️ Removing ${duplicates.length} duplicate transcripts...`);
        await prisma.transcript.deleteMany({
            where: { id: { in: duplicates } }
        });
        console.log("✅ Deduplication complete.");
    } else {
        console.log("✅ No duplicates found.");
    }
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
