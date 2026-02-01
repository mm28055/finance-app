const https = require('https');

const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const BASE_URL = "https://www.tijoristack.ai/api/v1";

// Trying 'isin' as per user suggestion
const company = "Finolex Industries";
const isin = "INE183A01024";
const url = `${BASE_URL}/concalls/list/?isin=${isin}`;

console.log(`GET ${url}`);

const options = {
    headers: {
        'Authorization': `Bearer ${TIJORI_API_KEY}`
    }
};

https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        try {
            const json = JSON.parse(data);
            console.log('Active Filters:', json.active_filters);
            if (json.data && json.data.length > 0) {
                const first = json.data[0];
                console.log('First Company:', first.company_info.name);
                console.log('Keys:', Object.keys(first));
                if (first.transcript) {
                    console.log('Transcript Start:', first.transcript.substring(0, 200));
                } else {
                    console.log('Transcript field is empty/null');
                }
                console.log('Recording Link:', first.recording_link);
            } else {
                console.log('No data found.');
            }
        } catch (e) {
            console.log('Body:', data.substring(0, 500));
        }
    });
}).on('error', e => console.error(e));
