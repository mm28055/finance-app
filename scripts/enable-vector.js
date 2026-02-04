const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Enabling pgvector extension...");
    try {
        await prisma.$executeRawUnsafe(`CREATE EXTENSION IF NOT EXISTS vector;`);
        console.log("✅ Success: vector extension enabled.");
    } catch (e) {
        console.error("❌ Failed to enable extension:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
