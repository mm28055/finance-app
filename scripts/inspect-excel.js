const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '../../Conf Call Downloader (1).xlsx');
console.log(`Reading file from: ${filePath}`);

try {
    const workbook = XLSX.readFile(filePath);
    console.log('Sheet Names:', workbook.SheetNames);

    workbook.SheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        // get top 5 rows
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, range: 0, defval: '' }).slice(0, 5);
        console.log(`\n--- Sheet: ${sheetName} ---`);
        if (data.length > 0) {
            console.log('Headers:', data[0]);
            console.log('Sample Row:', data[1]);
        } else {
            console.log('Empty Sheet');
        }
    });

} catch (e) {
    console.error('Error reading file:', e.message);
}
