const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Testing SectorChat Persistence...");
    const sector = "TEST_SECTOR_" + Date.now();

    try {
        // 1. Create
        console.log("1. Creating message...");
        const msg = await prisma.sectorChat.create({
            data: {
                sector,
                role: 'user',
                content: 'Hello World',
                timestamp: BigInt(Date.now())
            }
        });
        console.log("   - Created ID:", msg.id);

        // 2. Read
        console.log("2. Reading history...");
        const history = await prisma.sectorChat.findMany({
            where: { sector }
        });
        console.log(`   - Found ${history.length} messages.`);
        if (history.length !== 1) throw new Error("Read failed");

        // 3. Delete
        console.log("3. Deleting history...");
        await prisma.sectorChat.deleteMany({
            where: { sector }
        });
        console.log("   - Deleted.");

        console.log("✅ Persistence working correctly.");

    } catch (e) {
        console.error("❌ Test Failed:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
