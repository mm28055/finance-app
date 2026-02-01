const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, '../data.xlsx');
const fileBuffer = fs.readFileSync(EXCEL_PATH);
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

const sheetProfiles = XLSX.utils.sheet_to_json(workbook.Sheets['Company_Profiles'] || []);
const sheetIndex = XLSX.utils.sheet_to_json(workbook.Sheets['Concall_Download_Index'] || []);

const norm = (s) => String(s || '').trim();

const profileSet = new Set();
sheetProfiles.forEach(r => {
    const n = norm(r.Company);
    if (n) profileSet.add(n);
});

const indexSet = new Set();
sheetIndex.forEach(r => {
    const n = norm(r.Company);
    if (n) indexSet.add(n);
});

console.log(`Profiles Count: ${profileSet.size}`);
console.log(`Index Count: ${indexSet.size}`);

const inIndexNotProfile = [...indexSet].filter(x => !profileSet.has(x));
console.log(`\n--- Found ${inIndexNotProfile.length} companies in Index but NOT in Profiles ---`);
console.log(inIndexNotProfile.join('\n'));
