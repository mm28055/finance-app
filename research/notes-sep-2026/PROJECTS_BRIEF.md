# Extract capital projects (plants, expansions) per company — brief

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT edit the repo. Do not touch the database. Repo R =
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`. Scratchpad S =
`C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad`.

## Why
The owner wants each company's capex and plants tracked: what is being built, cost, capacity, when it starts,
what it adds — and milestones checked when results come (e.g. Gala Precision's Wada expansion, Chennai phase 2).
Today is 29 Sep 2026; latest results are Q1 FY27 (Apr–Jun 2026). FY runs Apr–Mar ("Q3 FY27" = Oct–Dec 2026).

## Sources (read both)
1. The sector note: `R/lib/sector-overviews/<file>.ts` and `<file>-businesses.ts` (company sections, verdict
   `view`/`watch`, guidance tables, Tab 2 cards). These were written from deep research and are checked.
2. The company's own words: `S/capex/<sector-slug>.txt` — capex/plant passages from its last two call
   transcripts (raw transcript text, sections `######## <Company>` then `=== Qx FYyy call`). The latest call wins;
   older statements only as history. If note and latest call disagree on a date or cost, use the latest call and
   say so in `source`.

## What counts
Material projects only: a new plant or line, a capacity expansion, a big acquisition of assets, backward
integration, a new facility/land, a large IT/platform build that the company itself frames as capex — anything the
note or call treats as a growth driver, or costing ≥ ₹25cr or ≥ 10% of the company's size. Skip routine
maintenance capex and vague "we are evaluating". Banks/NBFCs/platforms usually have none — that is fine.
At most 5 projects per company, most important first. Include projects that recently STARTED (in the last 2
quarters) if they are still ramping up — their ramp is what to watch.

## Output
Write `S/projects/<note-file-stem>.json` (one per note file), JSON:
```json
{
  "projects": [
    { "company": "<exact verdicts[].company key>", "sector": "<Company.sector as in S/capex file name's sector>",
      "short": "wada", "name": "Wada plant expansion",
      "what": "15 acres next to the Wada plant for bigger wedge-anchor and spring lines",
      "cost": "₹40–45cr", "expectedStart": "Q4 FY28", "adds": "about ₹150cr of sales at full use",
      "status": "planned", "source": "Q1 FY27 call (Aug 2026)",
      "milestones": [
        { "text": "Land deal for Wada signed (only an MoU in Q1)", "due": "Q3 FY27" },
        { "text": "Wada expansion starts production", "due": "Q4 FY28" }
      ] }
  ]
}
```
- `status`: planned | building | started | ramping | on hold. `expectedStart`/`due`: "Q2 FY27"…"Q4 FY29", or
  "H1 FY27"/"H2 FY27" for half-yearly SMEs. Omit fields the sources don't give (never invent a cost or date).
- `milestones`: 1–3 checkable steps with deadlines as management stated them (land/approvals, construction done,
  production start, first revenue, reaching X% use / ₹X revenue). If management gave no date, omit the milestone.
- Plain English, ₹/cr, short. `company` must match the note's verdict key EXACTLY.
- Validate: `node -e "JSON.parse(require('fs').readFileSync('<file>','utf8'))"`.

Report in under 60 words per note: companies covered, projects written, anything odd.
