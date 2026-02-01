const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Testing DB Access...');
    const count = await prisma.company.count();
    console.log('Company Count:', count);
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
