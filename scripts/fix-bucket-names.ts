import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("=== FIXING BUCKET NAMES ===\n");

    // Find all transcripts with the wrong bucket name
    const broken = await prisma.transcript.findMany({
        where: {
            fileUrl: { contains: '/pdfs/Concalls/' }
        },
        include: { company: true, quarter: true }
    });

    console.log(`Found ${broken.length} transcripts with incorrect bucket name.\n`);

    let fixedCount = 0;
    for (const t of broken) {
        const oldUrl = t.fileUrl;

        // Replace /pdfs/Concalls/ with /Conf%20Call%20Pdfs/
        const newUrl = oldUrl.replace('/pdfs/Concalls/', '/Conf%20Call%20Pdfs/');

        console.log(`[${t.company.name} ${t.quarter.name}]`);
        console.log(`  OLD: ${oldUrl.substring(60)}`);
        console.log(`  NEW: ${newUrl.substring(60)}`);

        await prisma.transcript.update({
            where: { id: t.id },
            data: { fileUrl: newUrl }
        });

        fixedCount++;
    }

    console.log(`\n=== DONE. Fixed ${fixedCount} URLs. ===`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
