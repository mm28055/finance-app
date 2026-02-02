const fs = require('fs');
const path = require('path');

const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

function main() {
    console.log("🔍 Scanning for PDFs...");

    if (!fs.existsSync(CONCALLS_DIR)) {
        console.log("Concalls directory not found.");
        return;
    }

    let totalPdfs = 0;
    let breakdown = {};

    const sectors = fs.readdirSync(CONCALLS_DIR);
    for (const sector of sectors) {
        const sectorPath = path.join(CONCALLS_DIR, sector);
        if (!fs.statSync(sectorPath).isDirectory()) continue;

        const quarters = fs.readdirSync(sectorPath);
        for (const qFolder of quarters) {
            const qPath = path.join(sectorPath, qFolder);
            if (!fs.statSync(qPath).isDirectory()) continue;

            const files = fs.readdirSync(qPath).filter(f => f.toLowerCase().endsWith('.pdf'));
            const count = files.length;

            if (count > 0) {
                totalPdfs += count;
                const normalizeQ = qFolder.toUpperCase(); // Group q1 fy26 and Q1 FY26 together if any remain
                breakdown[normalizeQ] = (breakdown[normalizeQ] || 0) + count;
            }
        }
    }

    console.log(`\n📄 TOTAL PDFs FOUND: ${totalPdfs}`);
    console.log("\n--- Breakdown by Quarter ---");
    Object.keys(breakdown).sort().forEach(q => {
        console.log(`   ${q}: ${breakdown[q]}`);
    });
}

main();
