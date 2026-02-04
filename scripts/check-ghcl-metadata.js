
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkMetadata() {
    const co = await prisma.company.findFirst({
        where: { name: { contains: 'GHCL', mode: 'insensitive' } }
    });

    if (co) {
        console.log("GHCL Metadata:");
        console.log("- Full Name:", co.name);
        console.log("- Sector:", `"${co.sector}"`);
        console.log("- isVisible:", co.isVisible);
        console.log("- Status:", co.status);
    } else {
        console.log("GHCL company not found.");
    }
}

checkMetadata()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
