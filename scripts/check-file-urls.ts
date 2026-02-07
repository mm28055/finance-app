import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("=== CHECKING FILE URL PATTERNS ===\n");

    // Get a sample of transcripts to see what URLs look like
    const sample = await prisma.transcript.findMany({
        take: 20,
        include: { company: true, quarter: true },
        orderBy: { createdAt: 'desc' }
    });

    console.log("Sample of recent transcript URLs:\n");

    let supabaseCount = 0;
    let localCount = 0;
    let otherCount = 0;

    sample.forEach(t => {
        const url = t.fileUrl || 'NO URL';
        let type = '';

        if (url.includes('supabase.co')) {
            type = '[SUPABASE]';
            supabaseCount++;
        } else if (url.startsWith('C:\\') || url.startsWith('/')) {
            type = '[LOCAL]   ';
            localCount++;
        } else {
            type = '[OTHER]   ';
            otherCount++;
        }

        console.log(`${type} ${t.company.name.padEnd(30)} ${t.quarter.name} - ${url.substring(0, 80)}`);
    });

    console.log(`\n--- Summary ---`);
    console.log(`Supabase URLs: ${supabaseCount}`);
    console.log(`Local Paths:   ${localCount}`);
    console.log(`Other:         ${otherCount}`);

    // Check if any Supabase URLs exist at all
    const totalSupabase = await prisma.transcript.count({
        where: { fileUrl: { contains: 'supabase.co' } }
    });

    const totalLocal = await prisma.transcript.count({
        where: {
            OR: [
                { fileUrl: { startsWith: 'C:' } },
                { fileUrl: { startsWith: '/' } }
            ]
        }
    });

    console.log(`\n--- Database Totals ---`);
    console.log(`Total Supabase URLs: ${totalSupabase}`);
    console.log(`Total Local Paths:   ${totalLocal}`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
