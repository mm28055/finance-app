"""Install a brand-new sector note and register it in index.ts.
Usage: python new_note.py <slug> <dir> <exportName>"""
import sys, os, shutil
slug, D, name = sys.argv[1:4]
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'lib', 'sector-overviews')
shutil.copyfile(os.path.join(D, 'note.ts'), os.path.join(ROOT, slug + '.ts'))
p = os.path.join(ROOT, 'index.ts')
t = open(p, encoding='utf-8').read()
imp = f"import {{ {name} }} from './{slug}';\n"
if imp not in t:
    t = t.replace("import { pharmaCdmo } from './pharma-cdmo';\n", "import { pharmaCdmo } from './pharma-cdmo';\n" + imp, 1)
    t = t.replace("const OVERVIEWS: SectorOverview[] = [pharmaCdmo, ", f"const OVERVIEWS: SectorOverview[] = [pharmaCdmo, {name}, ", 1)
    assert imp in t and f"[pharmaCdmo, {name}, " in t
    open(p, 'w', encoding='utf-8', newline='\n').write(t)
print('installed', slug)
