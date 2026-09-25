"""Find each company on Screener by name and save its consolidated and standalone pages.
Usage: python fetch.py "Company name" ["Company name" ...]
Saves <CODE>.html (consolidated) and <CODE>_s.html (standalone) next to this script and prints
name → code, plus whether the consolidated page has real figures."""
import sys, os, re, json, time, urllib.request, urllib.parse
HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = os.path.join(HERE, 'pages'); os.makedirs(PAGES, exist_ok=True)
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'}


def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read().decode('utf-8', 'replace')


def code_for(name):
    q = re.sub(r'\(.*?\)', '', name).replace('&', ' ').strip()
    res = json.loads(get('https://www.screener.in/api/company/search/?q=' + urllib.parse.quote(q)))
    if not res:
        return None, None
    url = res[0]['url']  # e.g. /company/ASTRAMICRO/consolidated/
    m = re.match(r'/company/([^/]+)/', url)
    return (m.group(1) if m else None), res[0].get('name')


for name in sys.argv[1:]:
    try:
        if name.startswith('code:'):
            code, found = name[5:], name[5:]
        else:
            code, found = code_for(name)
        if not code:
            print(f'{name}\t-> NOT FOUND'); continue
        c = get(f'https://www.screener.in/company/{code}/consolidated/')
        time.sleep(1.2)
        s = get(f'https://www.screener.in/company/{code}/')
        time.sleep(1.2)
        open(os.path.join(PAGES, code + '.html'), 'w', encoding='utf-8').write(c)
        open(os.path.join(PAGES, code + '_s.html'), 'w', encoding='utf-8').write(s)
        has_c = 'data-consolidated="true"' in c
        print(f'{name}\t-> {code}\t({found})\tconsolidated={has_c}')
    except Exception as e:
        print(f'{name}\t-> ERROR {e}')
