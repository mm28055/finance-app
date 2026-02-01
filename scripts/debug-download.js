const https = require('https');
const fs = require('fs');

const url = "https://files.tijorifinance.com/insight/india/389/Conference Call/CC-Nov25.pdf";
const dest = "debug_test.pdf";

console.log(`Downloading ${url}...`);

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.tijorifinance.com/',
        'Accept': 'application/pdf'
    }
};

const file = fs.createWriteStream(dest);
https.get(url, options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => console.log("Download Success!"));
    } else {
        console.log("Headers:", res.headers);
    }
}).on('error', e => console.error(e));
