import sys,json;sys.path.insert(0,'.')
from parse import load
def num(s):
    s=s.replace(',','').replace('%','').strip()
    try: return float(s)
    except: return None
def row(sec,name):
    h,rows=sec
    for r in rows:
        if r[0].startswith(name): return dict(zip(h[1:],[num(x) for x in r[1:]])) if len(h)==len(r) else dict(zip(h[-(len(r)-1):],[num(x) for x in r[1:]]))
    return {}
Q=['Jun 2025','Sep 2025','Dec 2025','Mar 2026','Jun 2026']
QP=['Jun 2024','Sep 2024','Dec 2024','Mar 2025','Jun 2025']
FY=['Mar 2022','Mar 2023','Mar 2024','Mar 2025','Mar 2026']
def gen(f,qf=None):
    d=load(f); dq=load(qf) if qf else d
    s=row(dq['quarters'],'Sales') or row(dq['quarters'],'Revenue'); op=row(dq['quarters'],'Operating Profit')
    opm=[round(op[q]/s[q]*100,1) if s.get(q) and op.get(q) is not None and s[q] else None for q in Q]
    gr=[round((s[q]/s[p]-1)*100,1) if s.get(q) and s.get(p) else None for q,p in zip(Q,QP)]
    roce=[row(d['ratios'],'ROCE %').get(y) for y in FY]
    ccc=[row(d['ratios'],'Cash Conversion').get(y) for y in FY]
    cfo=row(d['cash-flow'],'Cash from Operating'); pop=row(d['profit-loss'],'Operating Profit')
    cash=[]
    for y in FY:
        c,o=cfo.get(y),pop.get(y)
        cash.append(round(c/o*100) if c is not None and o and o>0 else None)
    cs=[cfo.get(y) for y in FY]; os_=[pop.get(y) for y in FY]
    tot=round(sum(cs)/sum(os_)*100) if all(x is not None for x in cs+os_) and all(o>0 for o in os_) else None
    cash.append(tot)
    return dict(opm=opm,growth=gr,roce=roce,ccc=[int(x) if x is not None else None for x in ccc],cash=cash,raw=dict(cfo=cs,op=os_,sales=[s.get(q) for q in QP+Q[1:]]))
api={'Acutaas Chemicals':'ACUTAAS','Shilpa Medicare':'SHILPAMED','Alivus Life Sciences':'ALIVUS','Concord Biotech':'CONCORDBIO','Blue Jet Healthcare':'BLUEJET','Supriya Lifescience':'SUPRIYA','IOL Chem & Pharma':'IOLCP','SMS Pharmaceuticals':'SMSPHARMA','Aarti Drugs':'AARTIDRUGS','Solara Active Pharma':'SOLARA','NGL Fine-Chem':'NGLFINE','Shree Ganesh Remed.':'540737'}
cdmo={'Anthem Biosciences':'ANTHEM','Gland Pharma':'GLAND','Neuland Laboratories':'NEULANDLAB','Sai Life Sciences':'SAILIFE','Aether Industries':'AETHER','Onesource Specialty':'ONESOURCE','Akums Drugs':'AKUMS','Innova Captab':'INNOVACAP','Senores Pharmaceutic':'SENORES','Windlas Biotech':'WINDLAS','Piramal Pharma':'PPLPHARMA','Cohance Lifesciences':'COHANCE','Jubilant Pharmova':'JUBLPHARMA','Jubilant Ingrevia':'JUBLINGREA','Aarti Pharmalabs':'AARTIPHARM','Dishman Carbogen (Carbogen Amcis)':'DCAL'}
out={}
for grp,m in [('api',api),('cdmo',cdmo)]:
    out[grp]={}
    for n,t in m.items():
        out[grp][n]=gen(t+'.html','WINDLAS_s.html' if t=='WINDLAS' else None)
json.dump(out,open('../series.json','w'),indent=0)
for grp in out:
    print('=====',grp)
    for n,v in out[grp].items():
        print(n[:22].ljust(22),'opm',v['opm'],'gr',v['growth']);print(' '*22,'roce',v['roce'],'ccc',v['ccc'],'cash',v['cash'])
