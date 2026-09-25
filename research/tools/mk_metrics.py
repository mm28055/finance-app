"""Build metrics_part.ts from <x>_base.txt + <x>_chart.txt. Usage: python mk_metrics.py base.txt chart.txt out.ts "Src note"
Pads FY series with leading nulls to 5 (6 with the 5-yr column)."""
import sys, re
base, chart, out, src = sys.argv[1:5]
def parse(path):
    d = {}; cur = None
    for line in open(path, encoding='utf-8'):
        m = re.match(r'// (\w+)\s*$', line.strip())
        if m: cur = m.group(1); d[cur] = []; continue
        m = re.match(r"\s*'(.+)': \[(.*)\],", line)
        if m and cur: d[cur].append((m.group(1), m.group(2)))
    return d
d = parse(base); d.update(parse(chart))
def pad(vals, n):
    v = [x.strip() for x in vals.split(',')] if vals.strip() else []
    if len(v) < n: v = ['null'] * (n - len(v)) + v
    return '[' + ', '.join(v) + ']'
META = [
 ('opm', 'Operating margin by quarter', "'%'", 'Q', 'sequential', None, False, 5, 'Filed quarterly results (Screener). Operating profit ÷ revenue.'),
 ('growth', 'Revenue growth, year on year', "'%'", 'Q', 'diverging', None, False, 5, 'Filed quarterly revenue, each quarter against the same quarter a year earlier.'),
 ('roce', 'Return on capital by year', "'%'", 'FY', 'diverging', "['Losing money', 'Making money']", False, 5, 'Filed annual ratios (Screener): return on capital employed.'),
 ('ccc', 'Cash conversion cycle by year', "'days'", 'FY', 'diverging', None, True, 5, 'Filed annual ratios (Screener): debtor days + inventory days − payable days.'),
 ('cash', 'Cash conversion (operating cash ÷ operating profit)', "'%'", "[...FY, '5 yrs']", 'diverging', "['Cash lagging profit', 'Cash following profit']", False, 6, 'Filed cash-flow statements and P&L (Screener). The last column uses all five years.'),
 ('fcf', 'Free cash flow ÷ revenue', "'%'", "[...FY, '5 yrs']", 'diverging', "['Burning cash', 'Generating cash']", False, 6, 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue.'),
 ('lev', 'Net debt ÷ operating profit', "'x'", 'FY', 'diverging', "['More debt', 'Net cash']", False, 5, 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit.'),
 ('capex', 'Capex ÷ revenue', "'%'", "[...FY, '5 yrs']", 'sequential', None, True, 6, 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue.'),
]
keymap = {'lev': 'leverage'}
o = ['    metrics: [']
for k, label, unit, per, scale, legend, more, n, s in META:
    if k not in d: continue
    o.append('        {')
    o.append(f"            key: '{keymap.get(k,k)}',")
    if more: o.append('            more: true,')
    o.append(f"            label: '{label}',")
    o.append(f'            unit: {unit},')
    o.append(f'            periods: {per},')
    o.append(f"            scale: '{scale}',")
    if legend: o.append(f'            legend: {legend},')
    if k == 'ccc': o.append('            lowerIsBetter: true,')
    o.append(f"            source: '{s} {src}',")
    o.append("            note: 'TODO',")
    o.append('            values: {')
    for name, vals in d[k]:
        o.append(f"                '{name}': {pad(vals, n)},")
    o.append('            },')
    o.append('        },')
o.append('    ],')
open(out, 'w', encoding='utf-8').write('\n'.join(o) + '\n')
print('written', out, [k for k in d])
