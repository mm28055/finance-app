# Weekly review (run by a scheduled Claude session every Sunday and Wednesday, 9am India time; also Fridays in the results season, until 15 Nov 2026)

You are keeping the sector notes of this investment dashboard (Next.js; notes in `lib/sector-overviews/`) current
for the owner, a non-technical long-term investor in Indian listed companies. Daily GitHub jobs already update prices,
filings, transcripts and shareholding by themselves. Your job is the part that needs judgement: the follow-ups those
jobs record in `lib/corporate-actions/needs-attention.json`.

Work in this repository only. You have no database access and must not need it: company sector, price, market value
and P/E for every company are in `lib/corporate-actions/companies.json` (refreshed each weekday). Do not launch
sub-agents. Today's date: run `date`.

## 1. What to do
**First, rescue stranded work.** Run `git fetch origin` and `git branch -r --no-merged origin/master`. Any
`origin/weekly-review/*` branch listed holds an earlier run's finished work that never reached the site. Merge each
into master (on a conflict keep the newer facts), run the section-3 checks and push to master before anything else,
and say so in the log. Follow-ups that branch already handled are then done; do not redo them.

Before you edit anything, also run `npx tsx scripts/check-notes.ts` once on the untouched checkout and keep its list
of problems: those were already on master and are not yours (see section 3).

Two inputs: the open follow-ups in `lib/corporate-actions/needs-attention.json` (entries WITHOUT a `handled` field),
and the week's material filings in `lib/filings/filings.json` and market news in `lib/news/news.json` (dated after the last
entry in `ops/weekly-log.md`), and the quarter results in `lib/results/results.json` without a `reviewed` field.
If all are empty, stop: change nothing, commit nothing.

Order of work (at most 40 follow-ups per run; the rest wait for the next run — say how many are left in the log. After every
10 handled, run the section-3 checks, commit and push, so a run that stops early loses nothing):
1. Renames and sector moves (quick).
2. New results calls — companies the notes rate own or follow first, then wait, then pass/avoid.
3. Call drift, shareholding, demergers, new AGMs / special calls.
4. The filings pass (below).
5. The news pass (below).
6. The results pass (below).

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
  (promoter sale, share issue/dilution, merger, pledge for a loan …). Work it into the company's risks or watch items
  only if it matters (rewrite the item; never tack a sentence onto the end); change the call only if it clearly warrants it, and say why.
- **Demerger** / new listing: update the company's section to describe the business as it now is; add a newly
  listed company only if the entry asks for it (it will already be on the dashboard in that sector).
- **Moved sector** / **Not in the <sector> note**: follow `tools/notes/docs/ADD_COMPANY_BRIEF.md` (research, card data
  with `tools/notes/fetch.py`, `card.py`, `chartdata.py`, and the Tab 2 business card). **Skip the brief's Tab 1
  step: Manish does not want new or moved companies written into a note's main page (7 Nov 2026).** Paths in that brief that start with `S/`
  mean a temporary folder of your own; the tools live in `tools/notes/`. For a move, cut the company's section from
  the old note and add it to the new one, re-ranked against its new peers. A company **new to the dashboard** (not
  a move) also gets, from the same research, everything the other company cards carry: a `management.json` entry
  (style, the executives with role, since, family relation, stake and a sourced bio, sources), a `capacity.json`
  entry (capacity today, utilisation, capex status, source), its material projects in `projects.json` with 1–3 dated
  milestones each, and 2–4 checkpoints in `checkpoints.json` from the latest call's guidance (metric and target
  where the daily job can settle them). Never invent; leave a field out when no source gives it.

**Checkpoints** (`lib/checkpoints/checkpoints.json`, shown on the company card and the /scorecard page). Whenever
you update a company (a new results call, drift, a filing): (a) judge its pending checkpoints that the new results or
news settle and that have no `metric` (or a metric the daily job cannot compute): set `status` (met / partly /
missed), `actual` (a short phrase or figure), `resolvedOn`, `resolvedBy: "review"` and `outcome`; if the event had already happened before the checkpoint's `createdOn` (the note was out of date), also set `correction: true` so it is left out of the hit rate; (b) if the latest
call changes an expectation (guidance raised, cut or delayed), never drop or rewrite the old checkpoint: append to
its `revisions` `{ "on": "<YYYY-MM-DD>", "text": "<what management now says, e.g. cut FY27 revenue guide to ₹1,250cr in
the Q2 FY27 call>" }`, keep judging it on its original target, and add the new target as a new checkpoint; (c) when you write a new
concrete watch item or guidance, add it as a checkpoint: `id` = "<company-slug>-<due, e.g. q3fy27>-<n>", `company`
(the note's key), `sector`, `text`, `due` ("Q3 FY27", "H2 FY27", "Q4 FY27" for the full year), `createdOn`, `status:
"pending"`, and `metric`/`op`/`target` only for figures computed from Screener's quarterly results (`revenueYoY`,
`ebitdaMargin` = operating profit ÷ sales, `patYoY`, `revenue`, `ebitda`, `pat`, `orderBook` in ₹ crore). At most 4
pending per company. Never delete checkpoints (the daily job removes them three years after their quarter ends).

**Projects and capex** (`lib/projects/projects.json`, shown on the company card under "What we were watching"). Each
company's material plants, expansions and other capital projects: `id`, `company`, `sector`, `name`, `what`, `cost`,
`expectedStart`, `adds`, `status` (planned / building / started / ramping / on hold / dropped), `source`,
`updatedOn`. Their milestones are checkpoints with `project` set to the project's `id`. Whenever a call, results or a
filing speaks about a project: move its `status` on (e.g. building → started when production begins; started →
ramping), update `source`/`updatedOn`, judge its due milestones like other checkpoints, and add any new material
project the company announces (with 1–3 dated milestones as management states them). A delay, cost overrun or cut is
never overwritten: append to the project's `revisions` `{ "on", "text" }` (and to the milestone's), keep the
original `expectedStart`, and add the new date as a new milestone. Filings that announce a plant starting
(commercial production, commissioning) are the usual trigger.

**Capacity** (`lib/projects/capacity.json`: `today`, `utilisation`, `fullUse`, `capexStatus`, `source` per company).
When a new call gives a new utilisation figure or a plant starts, update that company's entry (and `capacityAdd` on
the project). **Capacity pictures** (`lib/projects/pictures.json`): the card draws capacity and projects as bars and
a timeline. Any edit to a company's capacity entry, projects or project milestones makes its picture stale (the card
falls back to text), so redraw that company's picture in the same run, by `ops/CAPACITY_PICTURES.md`, then run
`npx tsx scripts/pictures/stamp.ts "<Company>"` and clear its errors. **Management** (`lib/management/management.json`): when a filing or call announces a new or departing
MD, CEO, CFO or whole-time director, update `people` (add a sourced bio for a newcomer; never invent), set `changes`
("CFO X resigned 12 Oct 2026; Y appointed"), `updatedOn`, and add the source link.

**Needs a session** (`lib/session-todos/todos.json`, shown as a chip on the dashboard header) is for the owner's
attention only. Never park there work you can do yourself later (a section to rewrite after a deal closes, after results,
after a listing): keep such work as an open needs-attention entry whose `subject` starts "Waiting: " and whose `why` says what you are waiting for, check it
each run, and do it in the run where the condition is met. Add a Needs-a-session item only when something needs the
owner or a full session and you cannot do it within this run's rules: a company to
add that needs a new note section you had no room for, a data source failing for more than a week, anything left over
after the 40-entry limit for a week of runs, a question only the owner can answer. Each item: `id` (short slug),
`text` (one plain sentence, what to do), `addedOn`, and `notBefore` if it only applies from a date. Remove items that
are done or no longer apply. Do not add sector season-refresh items: the write-up is hidden (charts only).

**Filings pass.** For each filing of the week that changes the investment case of a company covered by a note — a
large order against sales, a fund-raise or dilution, a CEO/CFO/MD exit, a rating change, an acquisition or disposal,
promoter selling or pledging, a regulatory or legal outcome — first search the note and its `-businesses.ts` card for
the company and correct whatever the filing has made wrong or out of date (an order total, "plans to list" once listed,
"expected by Q3" once it has happened, a watch item it settles, a pending checkpoint it settles). Then, only if it
matters to the investment case, mention it once in the company's view/verdict and once in the card where it naturally
belongs. Watch items are a forward-looking list: rewrite them (drop what is settled, add what is still to watch);
never tack a news sentence onto the end of one, and never paste the same news into every section. Change the call
only if clearly warranted. Ignore routine items (small promoter trades, routine appointments). No needs-attention
entry is needed for these; list them in the log.

**News pass.** `lib/news/news.json` (read only; the evening job writes it) holds, per company, sharp one-day price
moves with the reason found and market or policy events that directly affect it (a regulator's rule, a duty, a ban, a
scheme). Read each entry with `"dot": true` dated after the last log entry, for a company a note covers, and decide
first whether it is VERY IMPORTANT: it changes the investment case, i.e. it permanently moves a large part of the
company's sales, margin or right to operate (commission caps on a distributor's whole revenue, a ban, a duty that
resets an industry's prices), or it settles something the note was waiting for. Most entries are not: an ordinary
price move, a one-off order or dividend, a modest duty or scheme, a fund buying. For those change nothing in the
note and do not touch the call; just count them in the log. Only for a very important one: confirm it against the
official order, circular or notification before relying on it (news can be early or wrong; a draft is not a final
rule), correct what it makes out of date, mention it once where it belongs, add or settle a checkpoint if it creates
a testable expectation (e.g. "final commission caps notified by Q4 FY27"), and reconsider the call, changing it only
if clearly warranted. Such an event that hits several companies of one sector also belongs once in that note's
sector sections. A price move whose reason is a company filing is already covered by the filings pass. Ignore
entries with `"dot": false` (no clear reason found). List what you did in the log.

**Results pass.** `lib/results/results.json` (the evening job writes it) holds each quarter's figures read the night
the results came out, with an overnight view (`take`, written by Gemini) and, once the call is analysed, `call`. For
each entry without `reviewed`: check the figures against Screener, read the take and the call note, and decide whether
the overnight verdict is right. If the result changes the case, it is handled with the company's new results call
(item 2 above) — do not update the note twice. Then add `"reviewed": {"on": "<YYYY-MM-DD>", "text": "<one line: only
what the points miss, and if you disagree with the overnight verdict, why>"}` — no "Figures match Screener" or
restating the points. Correct a wrong figure, a wrong `take.verdict` or a wrong point in `take.points` in place (say so
in `reviewed.text`). The page leads with `take.points`, then the table; the review sits folded at the bottom.
If the entry has a `call` (the call has been analysed), also judge now that company's pending checkpoints due that
quarter, by the Checkpoints rules below, from the call transcript (NSE/BSE filing, or Screener's "Concalls" list) and
the results presentation. Do not wait for a "New results call" follow-up: that one is raised only by the weekday
evening job, so a call heard on a Friday would otherwise sit unjudged for days. Segment figures that only the call or
presentation gives (a segment's loss or margin) count. Only a checkpoint the call truly leaves open stays pending.

Then mark the entry done: add `"handled": "<YYYY-MM-DD>: <one line: what you found and did>"`. Never delete entries.

## 2. House rules (all mandatory)
- Figures read from presentation slides (market shares, share of a customer's business, segment and product
  splits): PDF text comes out in a different order from the slide, so labels and numbers get mismatched (Steel
  Strips' card once said Kia 100% when the slide says MG 100%, Kia 30%). Pair each number with its label by its
  position on the page, or confirm it in the call transcript, annual report or a rating report, before writing it.
  When in doubt, leave the figure out and say it was not confirmed. Market shares and customer shares go in the
  card's `shares` field (always visible), not only in prose.
- Calls: own / follow / wait / pass / avoid. "own" only when the live price check is Fits. Rank own → follow → wait →
  pass → avoid. Stance must match: COMPOUNDER only for own, AVOID only for avoid.
- Price check: growth needed = (P/E × 0.1726)^0.1 − 1 (P/E from companies.json); Fits if my growth − needed ≥ −2,
  Full if ≥ −6, else Stretched. Loss-makers get myGrowth null and no label.
- Cash test (owner, 3 Oct 2026): judge cash on five years of operating cash against net profit (Screener, the years it
  shows), not one year. "own" needs at least half of profit arriving as cash. A follow drops to wait when it turns under
  25% over five years and still under 25% last year, or under 50% with last year near zero or negative — unless the
  note states a specific reason the figure misleads. Property developers (land buying) and lenders are judged on their
  own measures. Tell capex-driven negative free cash (building plants) from working-capital drain (stock, receivables).
  Never rank a company first on price while its profit is not arriving as cash.
- The latest earnings call wins over older statements; older ones only as dated history.
- Price-dependent figures in prose use live placeholders (`{need:KEY|n}`, `{label:KEY|fits}`, `{pe:KEY|x}`,
  `{mcap:KEY|₹xcr}`, `{count:fits|three}`; KEY = the exact key in the note's valuation inputs) — see
  `tools/notes/docs/LIVE_TEXT_BRIEF.md`. Never hard-code P/E or EV/EBITDA multiples in prose.
- Figures from Screener (screener.in, the company's page) or the company's own filings — never invented. Screener is
  rate-limited: one request every 5 seconds at most.
- Plain English, short sentences, ₹/cr/lakh, bold company names and conclusions, balanced `**`.
- Never write notes for the "Misc" sector or the portfolio. Never merge sectors. Do not rewrite whole notes: the
  quarterly refresh does that. Edit only `lib/sector-overviews/**`, `lib/checkpoints/checkpoints.json`, `lib/projects/projects.json`, `lib/projects/capacity.json`, `lib/projects/pictures.json`, `lib/management/management.json`, `lib/session-todos/todos.json` and `lib/corporate-actions/needs-attention.json`
  (and `lib/screener-overrides.json` if a company's Screener page cannot otherwise be found).

## 3. Check, then publish
1. `npm ci` (once), then `npx tsc --noEmit -p .` — must be clean. Then `npx tsx scripts/pictures/check.ts --stale-ok`:
   no ERROR lines, and no STALE line for a company this run edited.
2. `npx tsx scripts/check-notes.ts` — must print "All notes pass.", except for problems that were already in the list
   you took before editing (section 1): those are not caused by this run and never block the push. Name them at the
   top of the log entry and still push to master. Only a problem your own edits added, and that you cannot fix, sends
   the run to a branch.
3. Append a short entry to `ops/weekly-log.md`: the date, each entry handled (company — what changed), and any call
   changed (old → new, one-line reason). Plain English; the owner reads this.
4. Commit per note ("<Sector>: <what changed>"), plus one commit for needs-attention.json and the log; end every
   commit message with the line `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
5. Push to `master` (the site publishes itself). If checks fail and you cannot fix them, or the push to master is
   refused, push to a branch `weekly-review/<YYYY-MM-DD>` instead and say so at the top of the log entry. The next run merges
   that branch first (section 1), so the work is never lost.
