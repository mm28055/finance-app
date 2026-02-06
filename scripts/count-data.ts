
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const total = await prisma.transcript.count();
    console.log(`Total Transcripts in DB: ${total}`);

    // Group by Quarter Year to see distribution
    // Using raw query for grouping as it's often easier for quick stats
    const distribution: any[] = await prisma.$queryRaw`
        SELECT "year", COUNT(*) as count 
        FROM "Quarter" q
        JOIN "Transcript" t ON t."quarterId" = q.id
        GROUP BY "year"
        ORDER BY "year" DESC
    `;

    console.log("\n--- Distribution by Year ---");
    distribution.forEach(d => {
        console.log(`${d.year}: ${d.count} files`);
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
