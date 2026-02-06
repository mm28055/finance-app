
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("Starting Offline Link Repair...");
    const quartersToFix = ["Q2 FY26", "Q3 FY26"];

    // Supabase Base URL
    const BASE_URL = "https://byczscklbendumakcfpd.supabase.co/storage/v1/object/public/Conf%20Call%20Pdfs";

    for (const qName of quartersToFix) {
        const quarter = await prisma.quarter.findFirst({ where: { name: qName } });
        if (!quarter) {
            console.log(`Quarter ${qName} not found.`);
            continue;
        }

        // Q3 FY26 -> Q3_FY26 for filename
        const quarterSuffix = qName.replace(/ /g, '_');
        // Q3 FY26 -> Q3%20FY26 for path
        const quarterPath = encodeURIComponent(qName);

        const transcripts = await prisma.transcript.findMany({
            where: { quarterId: quarter.id },
            include: { company: true }
        });

        console.log(`Processing ${transcripts.length} transcripts for ${qName}...`);

        let updatedCount = 0;

        for (const t of transcripts) {
            // Only fix if URL is local path OR explicitly requested to force fix all
            // Ideally we force fix all to ensure consistency.
            // But let's check if it looks like a local path.
            // Actually, previously valid links were overwritten.

            // Construct correct URL
            // safeName: replace all non-alphanumeric with '_'
            const safeName = t.company.name.replace(/[^a-z0-9]/gi, '_');

            // Sector needs to be URL encoded (e.g. Consumer Durables -> Consumer%20Durables)
            const sectorPath = encodeURIComponent(t.company.sector);

            const newUrl = `${BASE_URL}/${sectorPath}/${quarterPath}/${safeName}_${quarterSuffix}.pdf`;

            // Update DB
            if (t.fileUrl !== newUrl) {
                await prisma.transcript.update({
                    where: { id: t.id },
                    data: { fileUrl: newUrl }
                });
                updatedCount++;
            }
        }

        console.log(`  > Restored ${updatedCount} links for ${qName}.`);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
