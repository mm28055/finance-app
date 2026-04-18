
import { fetch } from 'undici';
import fs from 'fs';

async function main() {
    const query = "Safari Industries investor presentation Q3 FY26 filetype:pdf";
    const ddgUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

    console.log(`Fetching: ${ddgUrl}`);

    try {
        const res = await fetch(ddgUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const html = await res.text();
        console.log(`Status: ${res.status}`);
        console.log(`Length: ${html.length}`);

        fs.writeFileSync('ddg_debug.html', html);
        console.log("Saved to ddg_debug.html");

    } catch (err) {
        console.error(err);
    }
}

main();
