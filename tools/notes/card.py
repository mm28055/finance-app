"""Everything a company card and the new Tab 1 metrics need, from Screener.

Usage: python card.py CODE [CODE_s ...]   (the saved page CODE.html / CODE_s.html decides
consolidated vs standalone). Writes ../cards/<arg>.json and prints a summary.

Fields (last five financial years, oldest first):
  years, sales, ebitda, ocf, capex (positive = spent), fcf, borrowings, cash (cash equivalents),
  investments, netBlock, cwip, netDebt (= borrowings - cash - investments), costPct {material,
  manufacturing, employee, other} for the latest year, quarters (last 13 labels), qSales, qEbitda,
  qOpm, ttmEbitda, mcap, pe, price, promoter {latest, threeYearsAgo}, fii, dii.
"""
import sys, os, re, json, time, urllib.request, urllib.parse
sys.path.insert(0, os.path.dirname(__file__))
from parse import load, clean
from gen import row, num

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'cards')
os.makedirs(OUT, exist_ok=True)
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'}


def schedule(cid, parent, section, consolidated):
    q = f'parent={urllib.parse.quote(parent)}&section={section}' + ('&consolidated=' if consolidated else '')
    url = f'https://www.screener.in/api/company/{cid}/schedules/?{q}'
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40) as r:
                return json.loads(r.read().decode('utf8'))
        except Exception as e:  # rate limits happen; back off
            time.sleep(3 + attempt * 4)
    return {}


def top(h):
    i = h.find('id="top-ratios"'); s = h[i:i + 6000]
    out = {}
    for n, v in re.findall(r'<span class="name">\s*(.*?)\s*</span>.*?<span class="nowrap value">(.*?)</span>\s*</li>', s, re.S):
        out[clean(n)] = num(re.sub(r'[^\d.,\-]', '', clean(v)).strip(',') or 'x')
    return out


def shareholding(h):
    m = re.search(r'<section id="shareholding".*?</section>', h, re.S)
    if not m: return {}
    t = re.findall(r'<table.*?</table>', m.group(0), re.S)
    if not t: return {}
    tb = t[0]  # quarterly table
    heads = [clean(x) for x in re.findall(r'<th[^>]*>(.*?)</th>', tb, re.S)][1:]
    res = {}
    for r in re.findall(r'<tr[^>]*>(.*?)</tr>', tb, re.S):
        tds = [clean(x) for x in re.findall(r'<td[^>]*>(.*?)</td>', r, re.S)]
        if not tds: continue
        key = tds[0].replace('+', '').strip()
        vals = [num(x) for x in tds[1:]]
        res[key] = dict(zip(heads[-len(vals):], vals))
    return res


def yr(d, keys):
    return [d.get(k) for k in keys]


def build(arg):
    f = os.path.join(HERE, arg + '.html')
    h = open(f, encoding='utf-8').read()
    consolidated = not arg.endswith('_s') and 'data-consolidated="true"' in h
    cid = re.search(r'data-company-id="(\d+)"', h).group(1)
    d = load(f)
    pl, cf, bs, qt = d['profit-loss'], d['cash-flow'], d['balance-sheet'], d['quarters']
    years = [c for c in pl[0][1:] if c != 'TTM'][-5:]
    sales = row(pl, 'Sales') or row(pl, 'Revenue')
    ebitda = row(pl, 'Operating Profit')
    ocf = row(cf, 'Cash from Operating')
    borrow = row(bs, 'Borrowings'); inv = row(bs, 'Investments')
    nb = row(bs, 'Fixed Assets') or row(bs, 'Net Block'); cwip = row(bs, 'CWIP')
    oa = schedule(cid, 'Other Assets', 'balance-sheet', consolidated)
    cfi = schedule(cid, 'Cash from Investing Activity', 'cash-flow', consolidated)
    exp = schedule(cid, 'Expenses', 'profit-loss', consolidated)
    cashd = {k: num(v) for k, v in oa.get('Cash Equivalents', {}).items()}
    capd = {k: -num(v) if num(v) is not None else None for k, v in cfi.get('Fixed assets purchased', {}).items()}
    cost = {}
    for k, v in exp.items():
        if not isinstance(v, dict): continue
        name = k.replace(' %', '').replace(' Cost', '').lower()
        cost[name] = {y: num(x) for y, x in v.items() if y != 'isExpandable' and not isinstance(x, dict)}
    qs = [c for c in qt[0][1:]][-13:]
    qsales = row(qt, 'Sales') or row(qt, 'Revenue'); qop = row(qt, 'Operating Profit')
    out = dict(
        code=arg, consolidated=consolidated, years=years,
        sales=yr(sales, years), ebitda=yr(ebitda, years), ocf=yr(ocf, years),
        capex=yr(capd, years),
        borrowings=yr(borrow, years), cash=yr(cashd, years), investments=yr(inv, years),
        netBlock=yr(nb, years), cwip=yr(cwip, years),
        costPct={k: yr(v, years) for k, v in cost.items()},
        quarters=qs, qSales=yr(qsales, qs), qEbitda=yr(qop, qs),
        ttmEbitda=(row(pl, 'Operating Profit').get('TTM')),
        ttmSales=(sales.get('TTM')),
    )
    out['fcf'] = [(o - c) if o is not None and c is not None else None for o, c in zip(out['ocf'], out['capex'])]
    out['netDebt'] = [(b or 0) - (c or 0) - (i or 0) if b is not None else None
                      for b, c, i in zip(out['borrowings'], out['cash'], out['investments'])]
    out['qOpm'] = [round(o / s * 100, 1) if o is not None and s else None for o, s in zip(out['qEbitda'], out['qSales'])]
    t = top(h)
    out.update(mcap=t.get('Market Cap'), pe=t.get('Stock P/E'), price=t.get('Current Price'))
    sh = shareholding(h)
    prom = sh.get('Promoters', {})
    if prom:
        ks = list(prom)
        out['promoter'] = {'latest': prom[ks[-1]], 'latestLabel': ks[-1],
                           'earlier': prom[ks[max(0, len(ks) - 13)]], 'earlierLabel': ks[max(0, len(ks) - 13)]}
    for k in ('FIIs', 'DIIs'):
        if sh.get(k): out[k.lower()] = list(sh[k].values())[-1]
    json.dump(out, open(os.path.join(OUT, arg + '.json'), 'w'), indent=1)
    return out


if __name__ == '__main__':
    for a in sys.argv[1:]:
        o = build(a)
        cp = {k: v[-1] for k, v in o['costPct'].items()}
        nd = o['netDebt'][-1]
        ev = (o['mcap'] or 0) + (nd or 0)
        print(f"{a:14} mcap {o['mcap']} pe {o['pe']} ttmEBITDA {o['ttmEbitda']} netDebt {nd} EV/EBITDA "
              f"{round(ev / o['ttmEbitda'], 1) if o['ttmEbitda'] else None} | cost {cp} | promoter {o.get('promoter')}")
        time.sleep(1.5)
