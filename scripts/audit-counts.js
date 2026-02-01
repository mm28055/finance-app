const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data.xlsx');
console.log(`Reading from: ${EXCEL_PATH}`);

const fileBuffer = fs.readFileSync(EXCEL_PATH);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

function analyzeSheet(sheetName) {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) {
        console.log(`[${sheetName}] Sheet NOT FOUND`);
        return;
    }
    const data = XLSX.utils.sheet_to_json(sheet);
    console.log(`\n[${sheetName}] Total Rows: ${data.length}`);

    const unique = new Set();
    const duplicates = [];

    data.forEach((row, idx) => {
        const name = (row.Company || '').trim();
        if (name) {
            if (unique.has(name)) {
                duplicates.push(name);
            } else {
                unique.add(name);
            }
        }
    });

    console.log(`[${sheetName}] Unique Companies: ${unique.size}`);
    console.log(`[${sheetName}] Duplicates Found: ${duplicates.length}`);
    if (duplicates.length > 0) {
        console.log(`Sample Duplicates: ${duplicates.slice(0, 3).join(', ')}`);
    }
}

analyzeSheet('Concall_Download_Index');
analyzeSheet('Company_Profiles');
analyzeSheet('Concall_Summaries');
