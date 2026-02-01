const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data.xlsx');
const fileBuffer = fs.readFileSync(EXCEL_PATH);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

const sheet = workbook.Sheets['Concall_Download_Pivot'];
const data = XLSX.utils.sheet_to_json(sheet);

const unique = new Set();
data.forEach(row => {
    const c = (row.Company || '').trim();
    if (c) unique.add(c);
});

console.log(`Pivot Sheet Total Rows: ${data.length}`);
console.log(`Pivot Unique Companies: ${unique.size}`);
