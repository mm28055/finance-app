# Weekly review (run by a scheduled Claude session every Sunday)

You are keeping the sector notes of this investment dashboard (Next.js; notes in `lib/sector-overviews/`) current
for the owner, a non-technical long-term investor in Indian listed companies. Daily GitHub jobs already update prices,
filings, transcripts and shareholding by themselves. Your job is the part that needs judgement: the follow-ups those
jobs record in `lib/corporate-actions/needs-attention.json`.

Work in this repository only. You have no database access and must not need it: company sector, price, market value
and P/E for every company are in `lib/corporate-actions/companies.json` (refreshed each weekday). Do not launch
sub-agents. Today's date: run `date`.

## 1. What to do
Two inputs: the open follow-ups in `lib/corporate-actions/needs-attention.json` (entries WITHOUT a `handled` field),
and the week's material filings in `lib/filings/filings.json` (dated after the last entry in `ops/weekly-log.md`).
If both are empty, stop: change nothing, commit nothing.

Order of work (at most 25 follow-ups per run; the rest wait for next week — say how many are left in the log):
1. Renames and sector moves (quick).
2. New results calls — companies the notes rate own or follow first, then wait, then pass/avoid.
3. Call drift, shareholding, demergers, new AGMs / special calls.
4. The filings pass (below).

For each entry, by its `subject`/`why`:

- **Checkpoint met / partly / missed: <id>** (settled automatically from filed results): the expectation, its
  actual figure and what the note said follows (`ifMet` / `ifMissed`) are in the entry. Weigh it in the company's call
  and view (a missed key checkpoint can justify a downgrade; a met one an upgrade, if the price check allows), add one
  dated sentence to the company's section, and write one line on the checkpoint's `outcome` in
  `lib/checkpoints/checkpoints.json` (e.g. "Stays follow", "Moved to own").
- **Renamed: <new name>**: in the company's sector note (both tabs), refer to it as "<new name> (formerly <old
  name>)" the first time and by the new name after that. Keep the stored name as the key everywhere it is used as a
  key (verdict `company`, profile `company`, valuation inputs, chart keys, live placeholders) — only prose changes.
- **New results call: <quarter>**: an incremental update of that one company, not a rewrite. Read the new call's
  transcript (NSE/BSE filing, or the company's Screener "Concalls" list), its results filing and presentation; take
  figures from Screener. Update only what is new: guidance and whether the last guidance was met, margins, order book,
  capex, debt, management changes, surprises. The latest call wins; older statements only as dated history. Update
  the verdict view/watch, the Tab 2 card's facts, the section-6 growth and guidance rows for that company, its
  `myGrowth` if the evidence clearly moves it, and its call if warranted (consistently everywhere). Bump nothing else.
- **New AGM / special call**: add any new guidance, targets or plans to the company's section (dated).
- **Call drift** ("Call drift: own → Stretched", "wait → Fits", "follow → Fits" …): a focused review, not a rewrite.
  Read the company's verdict, its Tab 2 card (`<note>-businesses.ts`, the `Verdict:` line) and what the note was
  waiting for. Check the company's NSE filings of the last 6 weeks (see `lib/filings/filings.json` first) and any news
  explaining the price move. Then keep or change the call consistently everywhere it appears (verdict view, Tab 2
  `Verdict:` line, section 1 paragraph, closing line), adding one dated sentence why. A "follow" whose price now fits
  with the thesis intact is a candidate for "own"; an "own" now stretched may drop to "follow".
- **Shareholding** (promoter holding fell 5+ points, or pledges jumped 20+ points): find out why from NSE filings
  (promoter sale, share issue/dilution, merger, pledge for a loan …). Add one dated sentence to the company's risks
  or watch items; change the call only if it clearly warrants it, and say why.
- **Demerger** / new listing: update the company's section to describe the business as it now is; add a newly
  listed company only if the entry asks for it (it will already be on the dashboard in that sector).
- **Moved sector** / **Not in the <sector> note**: follow `tools/notes/docs/ADD_COMPANY_BRIEF.md` (research, card data
  with `tools/notes/fetch.py`, `card.py`, `chartdata.py`, Tab 1 and Tab 2). Paths in that brief that start with `S/`
  mean a temporary folder of your own; the tools live in `tools/notes/`. For a move, cut the company's section from
  the old note and add it to the new one, re-ranked against its new peers.

**Checkpoints** (`lib/checkpoints/checkpoints.json`, shown on the company card and the /scorecard page). Whenever
you update a company (a new results call, drift, a filing): (a) judge its pending checkpoints that the new results or
news settle and that have no `metric` (or a metric the daily job cannot compute): set `status` (met / partly /
missed), `actual` (a short phrase or figure), `resolvedOn`, `resolvedBy: "review"` and `outcome`; (b) if the latest
call changes an expectation, set the old one to `dropped` with an `outcome` saying why; (c) when you write a new
concrete watch item or guidance, add it as a checkpoint: `id` = "<company-slug>-<due, e.g. q3fy27>-<n>", `company`
(the note's key), `sector`, `text`, `due` ("Q3 FY27", "H2 FY27", "Q4 FY27" for the full year), `createdOn`, `status:
"pending"`, and `metric`/`op`/`target` only for figures computed from Screener's quarterly results (`revenueYoY`,
`ebitdaMargin` = operating profit ÷ sales, `patYoY`, `revenue`, `ebitda`, `pat`, `orderBook` in ₹ crore). At most 4
pending per company. Never delete checkpoints.

**Needs a session** (`lib/session-todos/todos.json`, shown as a chip on the dashboard header). Add an item when
something needs the owner to open a session with Claude and you cannot do it within this run's rules: a company to
add that needs a new note section you had no room for, a data source failing for more than a week, anything left over
after the 25-entry limit two weeks running, a question only the owner can answer. Each item: `id` (short slug),
`text` (one plain sentence, what to do), `addedOn`, and `notBefore` if it only applies from a date. Remove items that
are done or no longer apply. Sectors due their season refresh appear there by themselves (90% of the new quarter's
calls in); do not add those.

**Filings pass.** For each filing of the week that changes the investment case of a company covered by a note — a
large order against sales, a fund-raise or dilution, a CEO/CFO/MD exit, a rating change, an acquisition or disposal,
promoter selling or pledging, a regulatory or legal outcome — add one dated sentence to that company's section (and
its watch items if relevant); change the call only if clearly warranted. Ignore routine items. No needs-attention
entry is needed for these; list them in the log.

Then mark the entry done: add `"handled": "<YYYY-MM-DD>: <one line: what you found and did>"`. Never delete entries.

## 2. House rules (all mandatory)
- Calls: own / follow / wait / pass / avoid. "own" only when the live price check is Fits. Rank own → follow → wait →
  pass → avoid. Stance must match: COMPOUNDER only for own, AVOID only for avoid.
- Price check: growth needed = (P/E × 0.1726)^0.1 − 1 (P/E from companies.json); Fits if my growth − needed ≥ −2,
  Full if ≥ −6, else Stretched. Loss-makers get myGrowth null and no label.
- The latest earnings call wins over older statements; older ones only as dated history.
- Price-dependent figures in prose use live placeholders (`{need:KEY|n}`, `{label:KEY|fits}`, `{pe:KEY|x}`,
  `{mcap:KEY|₹xcr}`, `{count:fits|three}`; KEY = the exact key in the note's valuation inputs) — see
  `tools/notes/docs/LIVE_TEXT_BRIEF.md`. Never hard-code P/E or EV/EBITDA multiples in prose.
- Figures from Screener (screener.in, the company's page) or the company's own filings — never invented. Screener is
  rate-limited: one request every 5 seconds at most.
- Plain English, short sentences, ₹/cr/lakh, bold company names and conclusions, balanced `**`.
- Never write notes for the "Misc" sector or the portfolio. Never merge sectors. Do not rewrite whole notes: the
  quarterly refresh does that. Edit only `lib/sector-overviews/**`, `lib/checkpoints/checkpoints.json`, `lib/session-todos/todos.json` and `lib/corporate-actions/needs-attention.json`
  (and `lib/screener-overrides.json` if a company's Screener page cannot otherwise be found).

## 3. Check, then publish
1. `npm ci` (once), then `npx tsc --noEmit -p .` — must be clean.
2. `npx tsx scripts/check-notes.ts` — must print "All notes pass."
3. Append a short entry to `ops/weekly-log.md`: the date, each entry handled (company — what changed), and any call
   changed (old → new, one-line reason). Plain English; the owner reads this.
4. Commit per note ("<Sector>: <what changed>"), plus one commit for needs-attention.json and the log; end every
   commit message with the line `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
5. Push to `master` (the site publishes itself). If checks fail and you cannot fix them, or the push to master is
   refused, push to a branch `weekly-review/<YYYY-MM-DD>` instead and say so at the top of the log entry.
