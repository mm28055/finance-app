
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Searching...");
    const companies = await prisma.company.findMany({
        where: { name: { contains: 'Intellect' } }
    });
    console.log("Found:", companies);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
