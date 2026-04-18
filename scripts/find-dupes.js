require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);
const BUCKET = 'Conf Call Pdfs';

async function main() {
    const { data: sectors } = await supabase.storage.from(BUCKET).list('', { limit: 1000 });
    if (!sectors) { console.log('No data'); return; }

    // Collect all files: { sector, quarter, filename, size, path }
    const allFiles = [];

    for (const sector of sectors) {
        if (sector.id) continue; // skip files at root
        const { data: qFolders } = await supabase.storage.from(BUCKET).list(sector.name, { limit: 1000 });
        if (!qFolders) continue;

        for (const qf of qFolders) {
            if (qf.id) continue;
            const prefix = `${sector.name}/${qf.name}`;
            const { data: files } = await supabase.storage.from(BUCKET).list(prefix, { limit: 1000 });
            if (!files) continue;

            for (const f of files) {
                allFiles.push({
                    sector: sector.name,
                    quarter: qf.name,
                    filename: f.name,
                    size: f.metadata?.size || 0,
                    path: `${prefix}/${f.name}`
                });
            }
        }
    }

    console.log(`Total files in bucket: ${allFiles.length}\n`);

    // Group by (sector, quarter) and look for same-size files
    const byQuarter = {};
    for (const f of allFiles) {
        const key = `${f.sector}/${f.quarter}`;
        if (!byQuarter[key]) byQuarter[key] = [];
        byQuarter[key].push(f);
    }

    let dupeCount = 0;
    let dupeSize = 0;

    for (const [folder, files] of Object.entries(byQuarter)) {
        if (files.length <= 1) continue;

        // Group by file size within same folder
        const bySize = {};
        for (const f of files) {
            if (!bySize[f.size]) bySize[f.size] = [];
            bySize[f.size].push(f);
        }

        for (const [size, group] of Object.entries(bySize)) {
            if (group.length > 1) {
                dupeCount++;
                dupeSize += (group.length - 1) * parseInt(size);
                console.log(`DUPLICATE in ${folder}:`);
                group.forEach(f => console.log(`  - ${f.filename} (${(parseInt(size) / 1024).toFixed(0)} KB)`));
                console.log('');
            }
        }
    }

    // Also check: same company name appearing under different filenames in same quarter
    // e.g. "AXISCADES_Technologies_Q2_FY26.pdf" and "Axiscades Technologies_Q2_FY26.pdf"
    console.log('\n--- Checking for similar filenames (possible naming variants) ---\n');
    let variantCount = 0;
    for (const [folder, files] of Object.entries(byQuarter)) {
        // Normalize: lowercase, remove underscores/spaces, remove quarter suffix
        const normalized = files.map(f => ({
            ...f,
            norm: f.filename.toLowerCase().replace(/[_\s\-\.pdf]/g, '').replace(/q[1-4]fy\d+/g, '')
        }));

        const byNorm = {};
        for (const f of normalized) {
            if (!byNorm[f.norm]) byNorm[f.norm] = [];
            byNorm[f.norm].push(f);
        }

        for (const [norm, group] of Object.entries(byNorm)) {
            if (group.length > 1) {
                variantCount++;
                console.log(`VARIANT in ${folder}:`);
                group.forEach(f => console.log(`  - ${f.filename} (${(f.size / 1024).toFixed(0)} KB)`));
                console.log('');
            }
        }
    }

    console.log(`\n=== SUMMARY ===`);
    console.log(`Total files: ${allFiles.length}`);
    console.log(`Same-size duplicates: ${dupeCount} groups`);
    console.log(`Wasted by size-dupes: ${(dupeSize / 1024 / 1024).toFixed(1)} MB`);
    console.log(`Filename variants: ${variantCount} groups`);
}

main();
