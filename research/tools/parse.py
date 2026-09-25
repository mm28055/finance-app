import re,sys,html,json,glob,os
def clean(t): return html.unescape(re.sub(r'<[^>]+>','',t)).replace('\xa0',' ').strip()
def section(h,sid):
    m=re.search(r'<section id="%s".*?</section>'%sid,h,re.S)
    if not m: return None
    s=m.group(0)
    t=re.search(r'<table.*?</table>',s,re.S)
    if not t: return None
    t=t.group(0)
    heads=[clean(x) for x in re.findall(r'<th[^>]*>(.*?)</th>',t,re.S)]
    rows=[]
    for r in re.findall(r'<tr[^>]*>(.*?)</tr>',t,re.S):
        tds=[clean(x) for x in re.findall(r'<td[^>]*>(.*?)</td>',r,re.S)]
        if tds: rows.append([re.sub(r'\s*\+$','',tds[0])]+tds[1:])
    return heads,rows
def load(f):
    h=open(f,encoding='utf-8').read()
    name=clean(re.search(r'<h1[^>]*>(.*?)</h1>',h,re.S).group(1))
    out={'name':name}
    for sid in ['quarters','profit-loss','cash-flow','ratios','balance-sheet']:
        out[sid]=section(h,sid)
    return out
if __name__=='__main__':
    for f in sys.argv[1:]:
        d=load(f); print('=====',os.path.basename(f),d['name'])
        for sid,rowsel,n in [('quarters',('Sales','Revenue','Operating Profit','OPM %','Net Profit','Other Income'),6),('profit-loss',('Sales','Revenue','Operating Profit','OPM %','Net Profit'),6),('cash-flow',('Cash from Operating Activity','Cash from Investing Activity'),6),('ratios',('Debtor Days','Inventory Days','Cash Conversion Cycle','Working Capital Days','ROCE %'),6),('balance-sheet',('Borrowings','Total Liabilities'),3)]:
            s=d[sid]
            if not s: print(sid,'NONE'); continue
            heads,rows=s
            print(sid,' | '.join(heads[-n:]))
            for r in rows:
                if r[0].startswith(rowsel): print('  ',r[0][:22].ljust(22),' | '.join(r[-n:]))
