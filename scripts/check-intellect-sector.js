
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const co = await prisma.company.findFirst({
        where: { name: { contains: 'Intellect' } }
    });
    console.log("Sector:", co.sector);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
