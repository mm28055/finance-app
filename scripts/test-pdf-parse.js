const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function testPdfParse() {
    console.log("Testing pdf-parse...");
    try {
        // Find a PDF file to test
        const concallDir = path.join(process.cwd(), 'Concalls');
        // Just find the first PDF
        function findOnePdf(dir) {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory()) {
                    const result = findOnePdf(fullPath);
                    if (result) return result;
                } else if (file.endsWith('.pdf')) {
                    return fullPath;
                }
            }
            return null;
        }

        const pdfPath = findOnePdf(concallDir);
        if (!pdfPath) {
            console.error("No PDF found to test.");
            return;
        }

        console.log(`Found PDF: ${pdfPath}`);
        const dataBuffer = fs.readFileSync(pdfPath);
        const data = await pdf(dataBuffer);

        console.log(`Success! Parsed ${data.numpages} pages.`);
        console.log(`First 100 chars: ${data.text.substring(0, 100)}`);

    } catch (e) {
        console.error("Error testing pdf-parse:", e);
    }
}

testPdfParse();
