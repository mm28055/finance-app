"""Working-capital detail per company: debtor/inventory/payable days (5 yrs) and cash absorbed by
working capital (5-yr sums of receivables, inventory, payables, other). Adds 'wc' to cards/<code>.json.
Usage: python wc.py CODE [CODE_s ...]"""
import sys, os, json, re, time
sys.path.insert(0, os.path.dirname(__file__))
from parse import load
from gen import row
from card import schedule, HERE, OUT

for arg in sys.argv[1:]:
    f = os.path.join(HERE, arg + '.html')
    h = open(f, encoding='utf-8').read()
    consolidated = not arg.endswith('_s') and 'data-consolidated="true"' in h
    cid = re.search(r'data-company-id="(\d+)"', h).group(1)
    d = load(f)
    rat = d['ratios']
    years = [c for c in rat[0][1:]][-5:]
    days = {k: [row(rat, k).get(y) for y in years] for k in ('Debtor Days', 'Inventory Days', 'Days Payable', 'Cash Conversion Cycle')}
    sch = schedule(cid, 'Cash from Operating Activity', 'cash-flow', consolidated)
    num = lambda v: float(v.replace(',', '')) if v not in (None, '') else None
    cf_years = [y for y in (sch.get('Receivables') or {}) if y.startswith(('Mar', 'Dec', 'Jun', 'Sep'))][-5:]
    parts = {}
    for k in ('Receivables', 'Inventory', 'Payables', 'Other WC items', 'Working capital changes'):
        vals = [num((sch.get(k) or {}).get(y)) for y in cf_years]
        parts[k] = {'byYear': vals, 'sum5': round(sum(v for v in vals if v is not None)) if any(v is not None for v in vals) else None}
    card_path = os.path.join(OUT, arg + '.json')
    c = json.load(open(card_path)) if os.path.exists(card_path) else {}
    c['wc'] = {'years': years, 'days': days, 'cfYears': cf_years, 'cash': parts}
    json.dump(c, open(card_path, 'w'), indent=1)
    dd = days
    print(f"{arg:11} debtor {dd['Debtor Days']} inv {dd['Inventory Days']} pay {dd['Days Payable']} | 5y cash: rec {parts['Receivables']['sum5']} inv {parts['Inventory']['sum5']} pay {parts['Payables']['sum5']} other {parts['Other WC items']['sum5']} total {parts['Working capital changes']['sum5']}")
    time.sleep(1.2)
