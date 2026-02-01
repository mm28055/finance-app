const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data.xlsx');
const fileBuffer = fs.readFileSync(EXCEL_PATH);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

const sheetProfiles = XLSX.utils.sheet_to_json(workbook.Sheets['Company_Profiles'] || []);
const sheetIndex = XLSX.utils.sheet_to_json(workbook.Sheets['Concall_Download_Index'] || []);

const sectorsProfile = new Set();
sheetProfiles.forEach(r => { if (r.Sector) sectorsProfile.add(r.Sector.trim()); });

const sectorsIndex = new Set();
sheetIndex.forEach(r => { if (r.Sector) sectorsIndex.add(r.Sector.trim()); });

console.log('--- Profiles Sectors (Sample) ---');
console.log([...sectorsProfile].slice(0, 10));

console.log('\n--- Index Sectors (Sample) ---');
console.log([...sectorsIndex].slice(0, 10));
