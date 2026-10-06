# Deep research + rewrite spec for sector notes

Repo: `C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app` (Next.js/TypeScript).
Scratchpad (S): `C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad`

The owner (a non-technical private investor) said the notes read thin and asked for thorough research: reading the
earnings calls AND company reports for every company, and proper sector research. Two phases.

---------------------------------------------------------------------------------------------------
## Phase A — RESEARCH (one helper per group of companies, plus one sector helper)

**Never launch sub-agents yourself** — do all the work in your own session (parallel agents hit the usage limit).

Read web pages and small PDFs with WebFetch (give it a precise extraction prompt); find them with WebSearch.
**Large PDFs (annual reports, presentations over ~10 MB):** download them ONLY from the company's own website, BSE
(bseindia.com), NSE (nseindia.com), or Screener's document links, with
`curl -sL -A "Mozilla/5.0" -o "S/tmp_pdf/<unique-name>.pdf" "<url>"`, extract with `pdftotext -layout file.pdf file.txt`
(installed), grep/read the relevant parts, then **delete both the PDF and the txt**. Never run or open anything else
you download. Do not skip the annual report because it is large; that is where auditor remarks, related parties and
contingent liabilities live. Never invent a URL or a number. Do not edit the repo. Do not touch the database.

### A1. Company research → write `S/sec/<dir>/deep/<NN>-<Company>.md` (one file per company)
Inputs, in this order:
1. `S/sec/<dir>/<NN>-<Company>.md` — Screener metrics, stored analysis, and the **last two earnings-call transcripts**
   (read BOTH in full, not just skim).
   **Transcript verdict wording:** when comparing a stored transcript with the official one, classify it precisely:
   "matches official", "tidied copy (figures match; list gaps)", or "materially wrong (list the wrong figures/claims)".
   Do not call a copy "AI-generated" unless its content differs materially from the official record.
2. The latest **investor presentation** (Q1 FY27, else Q4 FY26) — company IR page / BSE / NSE.
3. The latest **annual report (FY26, else FY25)** — read ONLY these parts (owner's instruction, to save usage): management discussion & analysis (management commentary), the auditor's report (incl. CARO annexure), related-party transactions note, contingent liabilities note, segment information note, and the other notes to accounts relevant to the findings (borrowings, pledges, subsidiaries, exceptional items). Do not read the whole report. Parts covered: — management discussion & analysis, segment data, capacity, order book,
   related-party transactions, contingent liabilities, auditor's report remarks (qualifications, emphasis of matter),
   subsidiaries/associates that lose money, pledges.
4. The latest **credit-rating rationale** (ICRA / CRISIL / CARE / India Ratings), if one exists — these summarise
   strengths, weaknesses, debt and liquidity well.
5. Optional: 1–2 reputable news items from the last 6 months on material events (orders, disputes, management exits,
   regulatory action).

**Numbers rule:** the metrics block at the top of each input file comes from the owner's dashboard database and is
often wrong (zeros, adjusted or standalone figures). Take ALL historical and quarterly figures (revenue, EBITDA,
margin, profit, debt, cash flow, ratios) from **Screener.in** (consolidated page, else standalone) — WebFetch
`https://www.screener.in/company/<CODE>/consolidated/`. If Screener lacks a figure, use the company's own filing.
WebFetch's page summaries can invent numbers: for Screener, fetch the raw page (curl) and read the table rows, or ask WebFetch to quote the table rows verbatim — never trust a paraphrased figure. Use the database figures only to spot errors; list every mismatch under a **Stored-data errors** heading.

Write each company file with these headings (bullets; figures with units and period; every bullet ends with its source
tag, e.g. [Q1 call], [Q4 call], [IP Q1FY27], [AR FY26 p.xx], [ICRA Jun-26], [News: outlet, date]):
- **Business and segments** — what it sells, to whom, segment revenue/margin split, geography, capacity & utilisation.
- **Key numbers** — last 4–5 quarters and FY24–FY26 trend in plain words; unit economics (price, volume, per-unit profit).
- **Guidance history** — what management promised on the Q4 call (and earlier if stated) vs what Q1 delivered; FY27 and
  longer targets; whether guidance was raised, kept, cut or dropped.
- **Capex and capacity** — amounts, timing, funding, expected payback/asset turns.
- **Cash, debt and working capital** — net cash/debt, receivable/inventory days, cash conversion, dividends/buybacks.
- **Moat evidence** — share, pricing actions, approvals, contracts, switching costs, cost position (with numbers).
- **Risks and red flags** — concentration, disputes, contingent liabilities, auditor remarks, related-party dealings,
  pledges, promoter selling, management exits, disclosure gaps.
- **What changed between the two calls** — tone, numbers, new issues.
- **Best management quotes** (≤ 3, each under 25 words).
- **My read** — 3–5 sentences: is the business improving, what the price needs, what would change the view.
- **Sources** — list of URLs actually read.

### A2. Sector research → write `S/sec/<dir>/deep/_sector.md`
Read 4–6 serious sources on the Indian sector (industry bodies such as SIAM/FADA/ICRA/CRISIL/CARE/IBEF/government data,
consultancy reports, reputable business press) from the last 12 months. Cover: market size and growth, demand drivers,
policy (subsidies, duties, rules), cost drivers, competitive structure and share, where profit sits, cycle position,
outlook for FY27–FY29 with the forecaster named. Bullets with figures and source tags; end with a URL list.

---------------------------------------------------------------------------------------------------
## Phase B — REWRITE Tab 1 (one helper per note)

Read: this spec, all files in `S/sec/<dir>/deep/`, the current note `lib/sector-overviews/<file>.ts`, its Tab-2 file
`<file>-businesses.ts`, `lib/sector-overviews/card-data/<file>.ts`, `lib/sector-overviews/types.ts`, and as style models
`lib/sector-overviews/pharma-api.ts` and `lib/sector-overviews/commercial.ts`.

Rewrite the `standfirst`, sections 1 and 3–8, `verdicts[].what/view/watch`, `closing` and `sources` of Tab 1.
Keep section 2 (charts), the moat grid structure, the metric data, and `embed` blocks.

Depth standard (this is the point of the exercise):
- **Each point is a paragraph, 3–6 sentences**, not a clause per company: the fact with numbers → what management said
  (or the report said) → why it matters → my view. Aim for **4,000–5,500 words across `sections`** for 8+ companies
  (about 3,500 for 3–5 companies).
- Section 3: 4 points + profit-pool table + a sector table built from the sector research (market size, growth, share,
  policy), with the forecaster named in the text.
- Section 4: 5+ points; include evidence of share, pricing power, switching costs.
- Section 5: 7 points (structural / cyclical / not structural + four working-capital points) + the
  "Q1 FY27 cash and capital, as stated on the calls" table.
- Section 6: 4 growth drivers + Delivering or beating / Cautious / Missed / Mixed / My outlook + the growth-estimate
  table + the "Guidance, capex and track record" table (`badgeColumn: 3`; bold badge word first). The track record
  must compare the Q4-call promises with Q1 delivery.
- Section 7: 5–6 risk points, including governance/accounting findings from annual reports and rating rationales.
- Section 8: 5+ labelled valuation points; keep the formula line and `embed: 'valuation'`.
- Verdicts: `what` 1–2 sentences; `view` 3–4 sentences with the key numbers; `watch` 3 concrete items.
- `sources`: keep Screener line; add the sector reports and the most useful company documents (presentations,
  annual reports, rating rationales) actually read — every URL must have been opened.

Hard rules:
1. **Do not change** calls, ranks, stances, segments, `myGrowth` or valuation inputs yourself. If the research argues
   for a different call or growth estimate, write it in your report with evidence; the editor decides.
   Valuation wording must stay consistent with the live labels (Fits / Full / Stretched) implied by `myGrowth`
   vs growth needed = (P/E × 0.1726)^0.1 − 1, using the P/E in `S/<prefix>_cardsum.txt`
   (Fits if my − needed ≥ −2; Full if ≥ −6; else Stretched).
2. Every figure must trace to the deep research files, Screener, or the note's chart data (itself from Screener). Never quote a figure from the dashboard database block unless it matches Screener. If undisclosed, say so.
3. **Latest call leads.** Guidance and management commentary must reflect the most recent call; if the earlier call said something different, say so with both dates (e.g. 'in May it called margins the top end; in July it guided similar margins'). Never present an older statement as the current view.
3b. Plain English, short sentences, gloss any jargon once; ₹, cr, lakh; bold company names and conclusions; balanced `**`.
4. Tab 2 (`<file>-businesses.ts`): only fix factual errors the research exposes, and add a missing material fact
   (e.g. a dispute, a pledge, a segment split) where it clearly belongs. List every Tab-2 change in your report.
5. Do not commit. Edit only the two note files.
6. **Never hard-code P/E or EV/EBITDA multiples** ("P/E 28", "at 20 times operating profit", "EV/EBITDA 30x") in prose for companies priced in the live table — the table carries them. Say "needs about X% a year" and give the reasoning. The formula line is the exception. For companies NOT in the live table (DB errors), a Screener multiple may be quoted with its source.
7. Keep temp files uniquely named and delete them; other helpers share the scratchpad and repo.

Checks (repo root): `npx tsc --noEmit -p .` (silent); `npx tsx check-overview.tmp.ts <exportName> <file>.ts`
(no unmatched/uncovered/not-in-closing; bold balanced); word count of sections via a temp tsx script (delete after).

Report back (short): word count before → after; call/growth changes you recommend with evidence; existing statements
you found wrong and fixed; figures you could not verify; Tab-2 changes.
