const fs = require('fs');
const path = require('path');

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
console.log('Target Path:', dbPath);
console.log('Exists:', fs.existsSync(dbPath));

try {
    const fd = fs.openSync(dbPath, 'r+');
    console.log('Successfully opened file for read/write.');
    fs.closeSync(fd);
} catch (e) {
    console.error('Failed to open file:', e.message);
}
