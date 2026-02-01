const https = require('https');
const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const ISIN = "INE0D6701021"; // IdeaForge ISIN

function fetchTijori(isin) {
    const url = `https://www.tijoristack.ai/api/v1/concalls/list/?isin=${isin}`;
    const options = {
        headers: { 'Authorization': `Bearer ${TIJORI_API_KEY}` }
    };

    console.log(`fetching ${url}...`);

    https.get(url, options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                if (Array.isArray(json)) {
                    console.log(`Found ${json.length} items.`);
                    json.slice(0, 5).forEach(item => {
                        console.log(` - ${item.concall_event_time} | ${item.transcript ? 'HAS PDF' : 'NO PDF'}`);
                    });
                } else {
                    console.log("Response:", json);
                }
            } catch (e) { console.error("Parse Error"); }
        });
    }).on('error', (e) => console.error("Network Error:", e));
}

fetchTijori(ISIN);
