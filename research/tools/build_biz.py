"""Assemble <slug>-businesses.ts from <dir>/biz_head.ts + card files, ordered as given.
Usage: python build_biz.py <slug> <dir> <exportName> "Company A|Company B|..." cards_A.ts [cards_B.ts ...]"""
import sys, re, os
slug, D, exp, order = sys.argv[1:5]
files = sys.argv[5:]
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'lib', 'sector-overviews')
src = ''.join(open(os.path.join(D, f), encoding='utf-8').read().replace('\r\n', '\n').rstrip() + '\n' for f in files)
BS = chr(92)
chunks, start, depth, q, esc = [], None, 0, None, False
for idx, ch in enumerate(src):
    if q:
        if esc:
            esc = False
        elif ch == BS:
            esc = True
        elif ch == q:
            q = None
        continue
    if ch in '"\'`':
        q = ch
        continue
    if ch == '{':
        if depth == 0:
            start = idx
        depth += 1
    elif ch == '}':
        depth -= 1
        if depth == 0:
            chunks.append(src[start:idx + 1])
objs = {}
for c in chunks:
    m = re.search(r"company:\s*['\"](.+?)['\"],", c)
    objs[m.group(1)] = c
names = order.split('|')
missing = [n for n in names if n not in objs]
extra = [n for n in objs if n not in names]
assert not missing and not extra, (missing, extra)


def indent(o):
    lines = o.split('\n')
    inner = [l for l in lines[1:-1] if l.strip()]
    base = min((len(l) - len(l.lstrip()) for l in inner), default=8)
    out = ['    {']
    for l in lines[1:-1]:
        out.append(('        ' + l[base:]) if l.strip() else '')
    out.append('    }')
    return '\n'.join(out)


head = open(os.path.join(D, 'biz_head.ts'), encoding='utf-8').read()
body = ''.join(indent(objs[n]) + ',\n' for n in names)
out = head + body + '];\n\nexport const ' + exp + ' = { intro, profiles };\n'
open(os.path.join(ROOT, slug + '-businesses.ts'), 'w', encoding='utf-8', newline='\n').write(out)
print('profiles', len(names))
