
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const co = await prisma.company.findFirst({
        where: { name: { contains: 'Intellect' } },
        include: {
            transcripts: {
                include: { quarter: true }
            }
        }
    });

    console.log(`Company: ${co.name}`);
    console.log("Transcripts in DB:");
    co.transcripts.forEach(t => {
        console.log(` - ${t.quarter.name}: ${t.fileUrl}`);
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
