# Portfolio deep dive: spec for each research helper

PF = `C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis--claude-spares-spare-lzIlGh/db453355-228e-418c-a43f-e7da5d8c7272/scratchpad/pf`

## Why this exists
The owner is a non-technical private investor in Indian listed companies. He wants about **25% a year** and holds for
**3–4 years**. He asked for 12 deeply researched ideas to own, as a first pass he will check himself. The site's notes
already hold deep research on every company (both recent calls, presentation, annual report, rating rationale). Your
job is NOT to redo that. It is the **forward view**: what the company earns by FY30, what P/E the market will pay
then, and therefore what return a buyer at today's price can expect, plus an honest quality judgement. In his words:
"the PE that I will sell at after three, four years will determine what returns I get. If the company is still
growing and the growth prospects are good, I can sell at a higher PE. And look at the quality of balance sheet, the
quality of P&L, and what management is saying."

## Inputs per company (all already prepared; read all of them)
1. `PF/extracts/<slug>.md` — everything the site's note says about the company (verdict, full Tab 2 profile, every Tab 1
   paragraph and table row that mentions it), the live price/market value/P/E from the site (15 Oct 2026 close), and
   the site's trackers: material filings, news and price moves, quarter results read by the site, capex projects,
   capacity, checkpoints (expectations with due dates), management.
2. `PF/calls/<slug>__<date>__<quarter>.txt` — the two latest transcripts in the database (results calls, AGMs or special
   calls). Read BOTH in full. The latest one leads; older statements only as dated history.
3. `PF/screener/<slug>.txt` — Screener's 10–12 years of P&L, balance sheet, cash flow, ratios, the last 12–13 quarters
   and shareholding (consolidated, else standalone), fetched today. Take historical figures from here. If a file is
   missing or empty, WebFetch `https://www.screener.in/company/<TICKER>/consolidated/` and ask for the tables verbatim.
4. The web, lightly (WebSearch / WebFetch; about 3–6 reads per company):
   - Any results or announcement since the note was written (Q2 FY27 results are starting now; check the Screener
     quarterly table for a Sep 2026 column and the exchange filings).
   - The company's stated long-term targets (investor presentation, "Vision 2030", capacity plans) if the note does
     not already give them.
   - Evidence on the runway after FY30: market size and growth for its products, its share, capacity headroom.
   - What listed peers trade at (P/E) and the stock's own P/E range over 5 years, to anchor the exit P/E.
   Never invent a URL or a number. WebFetch summaries can invent figures: ask for the exact rows or sentences.

## What to work out (per company)
**A. Clean profit base.** Profit after tax attributable to shareholders for FY26 and for the last four quarters,
with one-offs removed (tax credits, write-backs, land gains, exceptional items, treasury income only if it is large and
not part of the business: say what you did). Check the site's P/E against Screener's (market value ÷ trailing profit).
If they differ a lot, say so (the site once showed 12 for a stock on 260) and use the right one.

**B. Profit path FY27–FY30, normal case.** Year by year, built from the drivers: order book and its conversion,
capacity and utilisation, volume × price, margin path, interest and depreciation from planned capex, tax. Tie it to
what management guided on the LATEST call and to its track record (does it usually meet, beat or miss?). Haircut
promises from managements that have missed before. State the FY30 profit and the growth rate a year.

**C. Growth after FY30 and the exit P/E.** This is the heart of it. Ask: in March 2030, what will the market expect
for FY31–FY33? (Runway: market growth, share gains, new products, capacity already planned, order visibility, or
saturation, cycle peak, one-customer risk.) Then set the P/E the market is likely to pay on FY30 profit. Anchor with
peers and the stock's own history. Guide (Indian listed mid and small companies; adjust for quality):

| Profit growth the market expects after FY30 | Exit P/E range |
|---|---|
| under 8% | 10–15 |
| 8–12% | 14–20 |
| 12–16% | 18–26 |
| 16–20% | 24–34 |
| 20–25% | 30–42 |
| over 25% | 40–50 (never above 50) |

Go to the lower half of the band for weak cash conversion, governance flags, customer concentration, commodity or
order-cycle exposure; the upper half only for net cash, high returns on capital and a long, visible runway. For
cyclicals, apply the P/E to a mid-cycle profit, not a peak one. For real estate, contractors and lenders you may
reason from what that kind of business is valued on (pre-sales and land bank; order book; book value and return on
equity) but you must still end with a market value in March 2030 and say how you got it. Do not assume the exit P/E
is higher than today's unless the stock is cheap for a reason you expect to clear, and say which reason.

**D. Return a year.** Hold from 16 Oct 2026 to 31 Mar 2030 = **3.45 years**.
`annual return = ((FY30 profit × exit P/E) ÷ (market value today × (1 + d)))^(1/3.45) − 1 + dividend yield`
where d = new shares expected as a fraction of today's shares (planned share sales, warrants, QIPs, merger shares,
options; 0 if none). If shares are being issued, the profit path must include what the new money earns. Use today's
market value from the extract (site) or Screener's "Market Cap" in the screener file; say which. Calculator:
`node -e "const [m,p,e,d,y]=[MCAP,FY30PAT,EXITPE,DILUTION,DIVYIELD];console.log((Math.pow(p*e/(m*(1+d)),1/3.45)-1+y)*100)"`

**E. Bad case** (plausible, not a disaster): name what goes wrong (the most likely disappointment from the facts:
slower orders, a margin that does not recover, one customer cutting back, a cycle turning). Lower the profit path and
take the exit P/E down one band. Compute its return. If there is a real tail risk (fraud, a regulator, one customer
leaving, a going-concern subsidiary), name it separately under `tailRisk`; do not fold it into the bad case.

**F. Quality scores, 1–5 each**, with one sentence of evidence for each:
- balanceSheet: 5 = net cash and no material guarantees or contingent claims; 3 = net debt under ~1.5× operating profit; 1 = above ~3× or solvency doubts.
- earningsQuality: share of five years' operating profit that arrived as operating cash (Screener cash flow ÷ operating
  profit; for builders and lenders use the business's own cash measure and say so), plus one-offs, receivable and
  inventory days. 5 = 80%+ and clean; 3 = about 50%; 1 = under 30% or repeated write-offs.
- management: delivery against its own past guidance (latest call vs earlier promises) AND governance (promoter
  pledges or selling, related-party dealings, auditor remarks, resignations, dilution, pay). 5 = beats and clean; 1 = repeated misses or serious flags.
- moatRunway: how hard it is to compete with, and how long the growth can last.

**G. Conviction**: `High` (base case clears 25% with a bad case still positive and scores mostly 4–5),
`Medium` (base 20–25%, or clears 25% with one weak score), `Starter` (clears 25% but with a real flag: start small and
add on evidence), `Not now` (base below 20%, or a flag serious enough to skip). Be honest. Most companies will NOT
clear 25%; saying so is the useful answer. Do not stretch growth or the exit P/E to make a name qualify.

**H. Every worst fact.** List every bad fact about the company from the note and from your reading (missed guidance,
weak cash, debt, pledges, auditor remarks, concentration, disputes). The case must deal with each one (house rule:
the recommendation reflects the company's worst facts).

## Output
For each company write `PF/deep/<slug>.md` (slug = the extract's file name) with these headings:
`# <Company>` · `## Verdict for the portfolio` (2–3 sentences) · `## Clean profit base` · `## Profit path FY27–FY30` (a
small table: year, revenue, operating margin, profit, with the drivers in words) · `## Growth after FY30 and the exit
P/E` · `## Returns` (normal and bad, with the arithmetic) · `## Quality` · `## Worst facts and how the case deals with
them` · `## Since the note was written` · `## Sources` (URLs actually read, plus the transcript files used)
and then end the file with ONE fenced ```json block, exactly this shape (numbers as numbers, ₹ crore):

```json
{
  "company": "exact name as in the extract heading",
  "sector": "site sector",
  "theme": "one of: Power equipment | Electronics & defence | Pharma & health | Real estate & hotels | Energy & infra services | Internet & software | Consumer & services | Materials & packaging | Construction",
  "mcapNow": 0, "mcapSource": "site 15 Oct | Screener 16 Oct",
  "peNow": 0, "profitBase": { "label": "FY26 | TTM Jun-26", "value": 0, "note": "what was removed" },
  "base": { "fy30Profit": 0, "profitCagr": 0, "growthAfterFy30": 0, "exitPe": 0, "dilution": 0, "divYield": 0, "annualReturn": 0, "exitPeWhy": "one sentence" },
  "bad":  { "what": "one sentence", "fy30Profit": 0, "exitPe": 0, "annualReturn": 0 },
  "tailRisk": "one sentence or empty",
  "clears25": false,
  "scores": { "balanceSheet": 0, "earningsQuality": 0, "management": 0, "moatRunway": 0 },
  "scoreWhy": { "balanceSheet": "", "earningsQuality": "", "management": "", "moatRunway": "" },
  "conviction": "High | Medium | Starter | Not now",
  "oneLine": "≤ 25 words: why own it (or why not)",
  "whyOwn": ["3 points, each ≤ 40 words, with numbers"],
  "mustGoRight": ["2–3 points"],
  "breaksIt": ["2–3 specific, checkable triggers that would end the case"],
  "worstFacts": ["each ≤ 25 words"],
  "nextChecks": ["2–3 things to check in the next results, with the number to look for"],
  "callAgreement": "agree with the note's call, or the evidence for changing it",
  "asOf": "2026-10-16"
}
```

## Writing rules
- The owner reads the oneLine, whyOwn, mustGoRight, breaksIt and nextChecks on his site. Plain English, short
  sentences, no jargon (say "operating cash" not "CFO"; "profit turns into cash"; explain any term you must use),
  ₹ crore written as ₹1,234cr, years as FY27, quarters as Q2 FY27. Every claim carries a number.
- Be a sceptical senior analyst, not a promoter. Name the weak points plainly.
- Do not edit the repository, do not touch the database, do not launch sub-agents.
