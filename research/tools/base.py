"""Tab 1 base metric rows (opm, growth, roce, ccc, cash) as TS lines, from saved Screener pages.
Usage: python base.py "Name=CODE" ["Name=CODE_s" ...]   (add :CY for calendar-year companies)
Half-yearly reporters automatically land in the Q2 and Q4 columns."""
import sys, io, contextlib, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
with contextlib.redirect_stdout(io.StringIO()):
    from parse import load
    from gen import row
Q = ['Jun 2025', 'Sep 2025', 'Dec 2025', 'Mar 2026', 'Jun 2026']
QP = ['Jun 2024', 'Sep 2024', 'Dec 2024', 'Mar 2025', 'Jun 2025']
FYM = ['Mar 2022', 'Mar 2023', 'Mar 2024', 'Mar 2025', 'Mar 2026']
FYC = ['Dec 2021', 'Dec 2022', 'Dec 2023', 'Dec 2024', 'Dec 2025']
HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = os.path.join(HERE, 'pages'); os.makedirs(PAGES, exist_ok=True)
out = {k: [] for k in ('opm', 'growth', 'roce', 'ccc', 'cash')}
for arg in sys.argv[1:]:
    name, code = arg.split('=')
    cal = code.endswith(':CY'); code = code.replace(':CY', '')
    FY = FYC if cal else FYM
    d = load(os.path.join(PAGES, code + '.html'))
    s = row(d['quarters'], 'Sales') or row(d['quarters'], 'Revenue')
    op = row(d['quarters'], 'Operating Profit') or row(d['quarters'], 'Financing Profit')
    r = lambda x: None if x is None else round(x)
    opm = [r(op[q] / s[q] * 100) if s.get(q) and op.get(q) is not None else None for q in Q]
    gr = [r((s[q] / s[p] - 1) * 100) if s.get(q) and s.get(p) else None for q, p in zip(Q, QP)]
    roce = [row(d['ratios'], 'ROCE %').get(y) for y in FY]
    roce = [None if v is None else round(v) for v in roce]
    ccc = [row(d['ratios'], 'Cash Conversion').get(y) for y in FY]
    ccc = [None if v is None else round(v) for v in ccc]
    cfo = row(d['cash-flow'], 'Cash from Operating'); pop = row(d['profit-loss'], 'Operating Profit') or row(d['profit-loss'], 'Financing Profit')
    cash = [round(cfo[y] / pop[y] * 100) if cfo.get(y) is not None and pop.get(y) and pop[y] > 0 else None for y in FY]
    cs = [cfo.get(y) for y in FY]; os_ = [pop.get(y) for y in FY]
    pairs = [(c, o) for c, o in zip(cs, os_) if c is not None and o is not None]
    tot_o = sum(o for _, o in pairs)
    cash.append(round(sum(c for c, _ in pairs) / tot_o * 100) if pairs and tot_o > 0 else None)
    for k, v in (('opm', opm), ('growth', gr), ('roce', roce), ('ccc', ccc), ('cash', cash)):
        out[k].append(f"                '{name}': {str(v).replace('None', 'null')},")
    print(f'// {name}: cfo {cs} op {os_}', file=sys.stderr)
for k, lines in out.items():
    print(f'// {k}'); print('\n'.join(lines))
