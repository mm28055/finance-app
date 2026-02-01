const https = require('https');
const fs = require('fs');

const url = "https://stockdiscovery.s3.amazonaws.com/insight/india/426/Conference%20Call/CC-Nov25.pdf";

function tryDownload(name, headers) {
    console.log(`Testing [${name}]...`);
    const options = { headers };

    https.get(url, options, res => {
        console.log(`  [${name}] Status: ${res.statusCode}`);
        if (res.statusCode === 200) {
            console.log("  SUCCESS!");
            res.destroy(); // Stop download
        }
    }).on('error', e => console.log(`  [${name}] Error: ${e.message}`));
}

// 1. Standard Headers
tryDownload('Standard', {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://www.tijorifinance.com/'
});

// 2. Only User-Agent
tryDownload('UA Only', {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
});

// 3. Only Referer
tryDownload('Referer Only', {
    'Referer': 'https://www.tijorifinance.com/'
});

// 4. No Headers
tryDownload('No Headers', {});

// 5. Host Header? S3 sometimes cares.
tryDownload('Host Header', {
    'Host': 'stockdiscovery.s3.amazonaws.com'
});

// 6. Plus Encoding
const urlPlus = "https://stockdiscovery.s3.amazonaws.com/insight/india/426/Conference+Call/CC-Nov25.pdf";
function tryDownloadUrl(name, u) {
    console.log(`Testing [${name}] with URL: ${u}...`);
    https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        console.log(`  [${name}] Status: ${res.statusCode}`);
        if (res.statusCode === 200) res.destroy();
    }).on('error', e => console.log(`  [${name}] Error: ${e.message}`));
}
tryDownloadUrl('Plus Encoded', urlPlus);

// 7. Raw Space (Node might throw or encode it)
const urlRaw = "https://stockdiscovery.s3.amazonaws.com/insight/india/426/Conference Call/CC-Nov25.pdf";
tryDownloadUrl('Raw Space', urlRaw);
