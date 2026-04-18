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

    const toDelete = [];

    for (const sector of sectors) {
        if (sector.id) continue;
        const { data: qFolders } = await supabase.storage.from(BUCKET).list(sector.name, { limit: 1000 });
        if (!qFolders) continue;

        for (const qf of qFolders) {
            if (qf.id) continue;
            // Only check Q2 FY26 since that's where dupes are
            if (qf.name !== 'Q2 FY26') continue;

            const prefix = `${sector.name}/${qf.name}`;
            const { data: files } = await supabase.storage.from(BUCKET).list(prefix, { limit: 1000 });
            if (!files) continue;

            // Find files that DON'T have _Q2_FY26 in name (old format)
            const newFormatFiles = files.filter(f => f.name.includes('_Q2_FY26'));
            const oldFormatFiles = files.filter(f => !f.name.includes('_Q2_FY26') && f.name.endsWith('.pdf'));

            for (const oldFile of oldFormatFiles) {
                // Verify there's a matching new-format file with same size
                const baseName = oldFile.name.replace('.pdf', '');
                const matchingNew = newFormatFiles.find(nf =>
                    nf.name === `${baseName}_Q2_FY26.pdf` &&
                    nf.metadata?.size === oldFile.metadata?.size
                );

                if (matchingNew) {
                    toDelete.push(`${prefix}/${oldFile.name}`);
                }
            }
        }
    }

    console.log(`Found ${toDelete.length} orphaned old-format files to delete.\n`);

    if (toDelete.length === 0) {
        console.log('Nothing to delete!');
        return;
    }

    // Delete in batches of 20
    let deleted = 0;
    for (let i = 0; i < toDelete.length; i += 20) {
        const batch = toDelete.slice(i, i + 20);
        const { error } = await supabase.storage.from(BUCKET).remove(batch);
        if (error) {
            console.error(`Batch error:`, error.message);
        } else {
            deleted += batch.length;
            console.log(`Deleted batch ${Math.floor(i / 20) + 1}: ${batch.length} files`);
        }
    }

    console.log(`\n✅ Done! Deleted ${deleted} orphaned duplicates.`);
}

main();
