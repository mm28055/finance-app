# Put a company back into the live valuation table (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do not commit. Do not touch the database. Do NOT fetch anything from Screener (a long Screener
job is running and parallel requests get this computer blocked). Repo:
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`. Edit ONLY the files named in your task.

**Background.** Some companies were left out of the live valuation table in their sector note because the dashboard's
price / market value / P/E for them was wrong (the price sync had matched the wrong company on Screener). The sync is now
fixed and the database holds the right figures (given in your task). Your job: put the company back.

1. **Card data.** In `lib/sector-overviews/card-data/<file>.ts`, add the exact entry given in your task to the
   `...ValuationInputs` object (keep the file's JSON style; place it where the other companies of the same note sit).
2. **Check the live label.** The page computes: needed growth = (P/E × 0.1726)^0.1 − 1 (as %), using the LIVE P/E given.
   Gap = myGrowth − needed. **Fits** if gap ≥ −2, **Full** if gap ≥ −6, else **Stretched**. `lossMaking: true` = no P/E,
   no label. Find the company's myGrowth in the note (`myGrowth:` map) — do NOT change it.
3. **Rewrite the text.** Search the note file(s) named in your task (Tab 1 and the `-businesses.ts` Tab 2) for every
   statement that the company is "not measured live / not priced live / left out of the live table / dashboard's figures
   are wrong / check the price on Screener", and every label or point titled like "Not measured live: X". Rewrite them so
   the company is simply measured live: state its needed growth vs my estimate and its label, like the other companies.
   Move it into the right Fits/Full/Stretched point and fix the counts in the summary sentences ("Three of the sixteen…").
   Remove any sentence that only existed to explain the data error (the error is fixed). Remove the now-empty
   "Not measured live" point entirely. Do not say the data "was" wrong — just treat it as normal. Keep figures exact; use
   the market value and P/E given in your task when you quote them (say "about"). Do not change calls, ranks, stances,
   myGrowth, or anything unrelated. Also remove any code comment saying it is left out of the live table.
4. **Checks** from the repo root: `npx tsc --noEmit -p .` shows no errors in your files; if
   `check-overview.tmp.ts` exists, `npx tsx check-overview.tmp.ts <exportName> <file>.ts` shows no unmatched /
   not-in-closing and balanced bold.

Report back in under 120 words: the company's live label (needed vs mine), the number of passages changed, and any
count sentence you changed.
