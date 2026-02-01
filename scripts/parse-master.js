const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data.xlsx');
const fileBuffer = fs.readFileSync(EXCEL_PATH);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

const sheet = workbook.Sheets['Master'];
// Master sheet is hierarchical, not a flat table. 
// We need to iterate rows and track state (Current Sector -> Current SubSector).

const data = XLSX.utils.sheet_to_json(sheet);
const companies = [];
let companySet = new Set();

data.forEach(row => {
    // If the row has a 'Company' column populated, it's a company row
    const companyName = (row.Company || '').trim();
    if (companyName && companyName.toLowerCase() !== 'company') { // skip header repeats
        if (!companySet.has(companyName)) {
            companies.push({
                name: companyName,
                // In a real parse we'd track the 'Sector' from previous header rows
                // But for now, just counting them.
            });
            companySet.add(companyName);
        }
    }
});

console.log(`Found ${companies.length} companies in 'Master' sheet.`);
console.log('Sample:', companies.slice(0, 5).map(c => c.name));
