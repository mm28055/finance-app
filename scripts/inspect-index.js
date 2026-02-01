const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../data.xlsx');
const fileBuffer = fs.readFileSync(filePath);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

const sheet = workbook.Sheets['Concall_Download_Index'];
const data = XLSX.utils.sheet_to_json(sheet).slice(0, 10);

console.log('--- Index Sheet Sample ---');
console.log(data);
