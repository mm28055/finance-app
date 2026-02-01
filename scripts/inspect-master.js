const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../data.xlsx');
console.log(`Reading file from: ${filePath}`);

const fileBuffer = fs.readFileSync(filePath);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

const masterSheet = workbook.Sheets['Master'];
const data = XLSX.utils.sheet_to_json(masterSheet).slice(0, 5);

console.log('--- Master Sheet Sample ---');
console.log(data);
