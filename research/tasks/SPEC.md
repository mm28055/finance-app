# Deep research spec (cloud runs)

You are doing deep company and sector research for an Indian-equities research site. Its owner is a non-technical private investor. You are working in a clone of this repo. Read the sector task file you were given, which lists the companies and the sector focus.

Today is late September 2026. The latest reported quarter is **Q1 FY27** (April–June 2026).

## Ground rules
- **Do not modify any existing file, and never touch `master`.** Work only on the branch named in the task file.
- **Work one company at a time, in the order listed.** Do not launch sub-agents or parallel workers.
- **Save as you go.** If the branch already exists on origin, check it out and pull. Skip any company whose file already exists and is complete. After each file, `git add` it, commit (`Research: <company>`) and `git push -u origin <branch>`, so an interruption loses little.
- **Never invent a URL, a quote or a number.** Write "not disclosed" where a figure is not available.
- **Downloads:** large PDFs may be downloaded only from the company's own website, BSE, NSE or Screener document links. Use `curl` into `/tmp`, extract the text with `pdftotext` or Python, read it, then delete both files. Never run or open anything else you download.

## Company files: `research/<slug>/NN-<Company_Name>.md`
Aim for about 1,500–2,500 words each. NN is the company's number in the task file.

### Sources, in order
1. **Screener.in** (`https://www.screener.in/company/<CODE>/consolidated/`, or the standalone page if the consolidated one is empty). Take **all** historical and quarterly numbers from here: the last 5 quarters and FY22–FY26 revenue, operating profit and margin, profit, borrowings, cash, cash flow, ratios and shareholding. Use the company's own filing only where Screener lacks a figure.
2. **The last two earnings-call transcripts** (Q1 FY27 and Q4 FY26). Use the **official** versions from BSE/NSE or the company's investor-relations page, and read both in full. Some third-party AI transcripts contain invented content, so never use them. If there was no call, say so. SME companies report half-yearly.
3. **The latest investor presentation** (Q1 FY27, else Q4 FY26).
4. **The latest annual report** (FY26, else FY25). Cover:
   - management discussion and segment data;
   - capacity and order book;
   - related-party transactions;
   - contingent liabilities;
   - auditor's report remarks (qualifications, emphasis of matter, key audit matters);
   - loss-making subsidiaries;
   - pledges.
5. **The latest credit-rating rationale**, if one exists (ICRA, CRISIL, CARE, India Ratings, Acuité or Infomerics).
6. **One or two reputable news items** from the last 6 months on material events: orders, disputes, management exits, regulatory action, fund-raises.

### Headings (in this order)
Write bullets. Give every figure with its unit and period. End every bullet with a source tag, e.g. [Q1 call], [Q4 call], [IP Q1FY27], [AR FY26], [ICRA Jun-26], [Screener], [News: outlet, date].
- **Business and segments:** what it sells and to whom, segment split, geography, capacity and utilisation, brands and distribution.
- **Key numbers:** the 5-quarter and FY22–FY26 trend in plain words; unit economics (volume, price, per-unit profit) where given.
- **Guidance history:** what was promised on the Q4 call (and earlier) against what Q1 delivered; FY27 and longer targets; whether each was raised, kept, cut or dropped.
- **Capex and capacity:** amounts, timing and funding.
- **Cash, debt and working capital:** net cash or debt, receivable and inventory days, cash conversion, dividends and buybacks.
- **Moat evidence:** market share, pricing actions, approvals, contracts, switching costs, cost position. Include numbers.
- **Input costs:** the main raw materials and how price moves hit margins, including pass-through and lag.
- **Risks and red flags:**
  - customer or supplier concentration;
  - disputes and contingent liabilities;
  - auditor remarks;
  - related-party dealings;
  - pledges and promoter selling;
  - management exits;
  - disclosure gaps.
- **What changed between the two calls.**
- **Best management quotes:** at most 3, each under 25 words.
- **Stored-data check:** if the task file gives any figure, note any mismatch with Screener.
- **My read:** 3–5 sentences on whether the business is improving and what would change the view.
- **Sources:** the URLs actually read.

## Sector file: `research/<slug>/_sector.md`
Aim for about 3,000–4,500 words. Write it **after** the company files.

Read at least 4–6 serious sources from the last 12 months, such as:
- rating agencies: ICRA, CRISIL, CareEdge, India Ratings;
- industry bodies and government data;
- consultancy reports;
- reputable business press.

Cover:
- market size and growth;
- demand drivers;
- policy (subsidies, duties, rules, GST);
- cost drivers;
- competitive structure and market share;
- where the profit sits;
- where the cycle is now;
- the FY27–FY29 outlook, naming the forecaster.

Also cover the specific focus points in the task file. Write bullets with figures and source tags, and end with the URL list. If the task file asks for buckets, add the **"Suggested buckets"** section.

## When finished
Your final message should be under 200 words. It should say:
- which documents you read, and any gaps;
- the most material findings for each company;
- the branch name.
