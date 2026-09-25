import json,sys
t=open(sys.argv[1],encoding='utf-8').read()
d=json.loads(t[t.index('= ')+2:t.index('};')+1])
for n,c in d.items():
  p={x['label']:x['share'] for x in c['costSplit']['parts']}
  m=c.get('marginVsInput'); w=c.get('workingCapital') or {}
  print(n[:20].ljust(20),p,'| idx',(m['periods'][0],m['index'][0],m['index'][-1]) if m else None,'| m',(m['margin'][0],m['margin'][-1]) if m else None,'| stats',[s['value'] for s in c['stats']], '| wc', w.get('fromYear'), w.get('absorbed5y'))
