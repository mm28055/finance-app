import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const SUPABASE_PROJECT_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

async function main() {
    console.log("=== RESTORING SUPABASE LINKS ===\n");

    if (!SUPABASE_PROJECT_URL) {
        console.error("Missing NEXT_PUBLIC_SUPABASE_URL env var");
        return;
    }

    // Find all transcripts that have a Tijori URL instead of Supabase
    // We assume if it's NOT containing 'supabase.co', it might be wrong IF we have uploaded it before.
    // A safer check: Look for transcripts that have 'tijorifinance.com' or 'amazonaws.com'
    const transcripts = await prisma.transcript.findMany({
        where: {
            NOT: {
                fileUrl: { contains: 'supabase.co' }
            }
        },
        include: { company: true, quarter: true }
    });

    console.log(`Found ${transcripts.length} transcripts with external links.`);
    let restoredCount = 0;

    for (const t of transcripts) {
        // Construct the expected Supabase URL format
        // Format: [SUPABASE_URL]/storage/v1/object/public/pdfs/Concalls/[Sector]/[Quarter]/[CleanName]_[QuarterClean].pdf

        const sector = t.company.sector || 'Unsorted';
        const cleanName = t.company.name.replace(/[^a-z0-9]/gi, '_').trim();
        const fyq = t.quarter.name;
        const fyqClean = fyq.replace(/\s+/g, '_'); // Q2 FY26 -> Q2_FY26

        // URL ENCODING IS CRITICAL HERE
        // Supabase encodes spaces as %20. 
        // We need to match exactly how we uploaded it.
        // We usually upload to: `Concalls/${sector}/${fyq}/${cleanName}_${fyqClean}.pdf`

        const filePath = `Concalls/${sector}/${fyq}/${cleanName}_${fyqClean}.pdf`;

        // Construct the full public URL
        const supabaseUrl = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/pdfs/${filePath}`
            .replace(/ /g, '%20'); // Ensure spaces in sector are encoded

        console.log(`[${t.company.ticker} ${t.quarter.name}]`);
        console.log(`   Current: ${t.fileUrl}`);
        console.log(`   Restoring to: ${supabaseUrl}`);

        await prisma.transcript.update({
            where: { id: t.id },
            data: { fileUrl: supabaseUrl }
        });
        restoredCount++;
    }

    console.log(`\n=== DONE. Restored ${restoredCount} links. ===`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
