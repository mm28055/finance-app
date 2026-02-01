const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data.xlsx');
const DB_PATH = path.join(__dirname, '../data/db.json');

console.log(`Reading from: ${EXCEL_PATH}`);

try {
    const fileBuffer = fs.readFileSync(EXCEL_PATH);
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

    // 1. Get Sheets
    const sheetMapping = XLSX.utils.sheet_to_json(workbook.Sheets['Mapping'] || []);
    const sheetProfiles = XLSX.utils.sheet_to_json(workbook.Sheets['Company_Profiles'] || []);
    const sheetIndex = XLSX.utils.sheet_to_json(workbook.Sheets['Concall_Download_Index'] || []);
    const sheetSummaries = XLSX.utils.sheet_to_json(workbook.Sheets['Concall_Summaries'] || []);

    const companies = [];
    const companiesMap = new Map();

    // Helper to normalize
    const norm = (s) => String(s || '').trim();

    // PHASE 1: Master List from MAPPING Sheet (680 companies)
    sheetMapping.forEach(row => {
        const name = norm(row.Company);
        const sector = norm(row.Sector) || 'Unsorted';

        if (!name) return;

        if (!companiesMap.has(name)) {
            const co = {
                id: name.toLowerCase().replace(/\s+/g, '-'),
                name: name,
                sector: sector,
                businessProfile: '', // Will fill from Profiles
                ticker: norm(row.__EMPTY_9) || norm(row.Symbol) || '', // Try to find ticker
                isin: norm(row.ISIN) || '', // Capture ISIN
                folderPath: `Concalls/${sector}`, // Default
                summary: ''
            };
            companiesMap.set(name, co);
            companies.push(co);
        }
    });

    console.log(`Phase 1: Loaded ${companies.length} companies from Mapping.`);

    // PHASE 2: Enrich Profile Text
    sheetProfiles.forEach(row => {
        const name = norm(row.Company);
        const co = companiesMap.get(name);
        if (co && row.BusinessProfile) {
            co.businessProfile = row.BusinessProfile;
        }
    });

    // PHASE 3: Enrich Folder Paths from Index
    sheetIndex.forEach(row => {
        const name = norm(row.Company);
        const co = companiesMap.get(name);
        if (co && row.FolderPath) {
            co.folderPath = row.FolderPath;
        }
    });

    // enrich with ticker/summary
    sheetSummaries.forEach(row => {
        const name = norm(row.Company);
        const co = companiesMap.get(name);
        if (co) {
            if (row.Symbol) co.ticker = norm(row.Symbol);
            if (row.TranscriptLink) co.latestLink = row.TranscriptLink;
        }
    });

    const db = {
        metadata: {
            lastUpdated: new Date().toISOString(),
            version: "1.0"
        },
        companies: companies
    };

    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
    console.log(`✅ Migrated ${companies.length} companies to ${DB_PATH}`);

} catch (e) {
    console.error("Migration failed:", e);
}
