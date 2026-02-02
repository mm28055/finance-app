const fs = require('fs');
const path = require('path');

const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

function main() {
    console.log("🧹 Starting Duplicate Removal...");

    if (!fs.existsSync(CONCALLS_DIR)) {
        console.log("Concalls directory not found.");
        return;
    }

    let deletedCount = 0;

    const sectors = fs.readdirSync(CONCALLS_DIR);
    for (const sector of sectors) {
        const sectorPath = path.join(CONCALLS_DIR, sector);
        if (!fs.statSync(sectorPath).isDirectory()) continue;

        const quarters = fs.readdirSync(sectorPath);
        for (const qFolder of quarters) {
            const qPath = path.join(sectorPath, qFolder);
            if (!fs.statSync(qPath).isDirectory()) continue;

            // Logic: 
            // In "Q2 FY26", we prefer "Name_Q2_FY26.pdf" over "Name.pdf"
            // IF both exist.

            const files = fs.readdirSync(qPath).filter(f => f.toLowerCase().endsWith('.pdf'));

            // Map base names
            // "Tolins_Tyres_Q2_FY26.pdf" -> Base: "Tolins_Tyres"
            // "Tolins_Tyres.pdf" -> Base: "Tolins_Tyres"

            // We need to identify duplicates.
            // Loop through all files

            // Build a set of "Specific" files first
            const suffix = qFolder.replace(/ /g, '_'); // "Q2 FY26" -> "Q2_FY26"
            const specificFiles = new Set();

            files.forEach(f => {
                if (f.includes(suffix)) {
                    specificFiles.add(f);
                }
            });

            // Now look for Generic versions
            files.forEach(f => {
                // If this is a specific file, skip
                if (specificFiles.has(f)) return;

                // Construct potential specific name
                // "Tolins_Tyres.pdf" -> "Tolins_Tyres_Q2_FY26.pdf"
                const namePart = f.replace('.pdf', '');
                const potentialSpecific = `${namePart}_${suffix}.pdf`;

                if (specificFiles.has(potentialSpecific)) {
                    // DUPLICATE FOUND!
                    // We delete the GENERIC one (f)
                    console.log(`   🗑️ Deleting Duplicate: ${sector}/${qFolder}/${f} (Keeping ${potentialSpecific})`);

                    try {
                        fs.unlinkSync(path.join(qPath, f));
                        deletedCount++;
                    } catch (e) {
                        console.error(`      Failed to delete: ${e.message}`);
                    }
                }
            });
        }
    }

    console.log(`\n✨ Removed ${deletedCount} duplicate files.`);
}

main();
