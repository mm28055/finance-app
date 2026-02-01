const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data.xlsx');
const fileBuffer = fs.readFileSync(EXCEL_PATH);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

const sheet = workbook.Sheets['Mapping'];
if (!sheet) {
    console.log("Mapping sheet not found!");
    process.exit(1);
}

const data = XLSX.utils.sheet_to_json(sheet);
console.log(`Mapping Sheet Rows: ${data.length}`);
if (data.length > 0) {
    console.log('Sample:', data[0]);
}

const unique = new Set();
data.forEach(r => {
    const n = (r.Company || '').trim();
    if (n) unique.add(n);
});
console.log(`Unique Companies in Mapping: ${unique.size}`);
