const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const count = await prisma.transcriptChunk.count();
        console.log(`Total PDF Chunks Ingested: ${count}`);

        const sectors = await prisma.transcriptChunk.groupBy({
            by: ['sector'],
            _count: { id: true }
        });
        console.log("By Sector:", sectors);
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}
main();
