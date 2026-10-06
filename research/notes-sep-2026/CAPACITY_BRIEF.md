# Capacity today, utilisation and capacity added — brief

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT edit the repo. Do not touch the database. Repo R =
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`. Scratchpad S =
`C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad`.

## Why
Each company card lists its projects (`R/lib/projects/projects.json`). The owner also wants to see how much capacity
the company ALREADY has and how full it runs, so the capacity each project adds (and the sales it could add) can be
judged against today's base. Companies with no project listed (e.g. Praj) must still say something: e.g. "big capex
already done in FY24–25; now filling it" or "asset-light, no plants".
Today is 29 Sep 2026; latest results Q1 FY27 (Apr–Jun 2026). FY runs Apr–Mar.

## Sources
1. The sector note `R/lib/sector-overviews/<file>.ts` and `<file>-businesses.ts` (checked, deep research).
2. `S/capex/<sector-slug>.txt`: capex/capacity/utilisation passages from each company's last two call transcripts
   (raw text). The latest call wins. Never invent a figure; leave a field out if no source gives it.
3. `R/lib/projects/projects.json`: the projects already listed (use their `id`).

## Output
Write `S/capacity/<note-file-stem>.json`:
```json
{
  "capacity": [
    { "company": "<exact verdicts[].company key>",
      "today": "Chennai bolts 4,600 t a year; Wada disc springs and wedge anchors (about X units); total about Y",
      "utilisation": "about 70% overall in Q1 FY27; Chennai 40% (new)",
      "fullUse": "about ₹300cr of sales at full use of today's plants",
      "capexStatus": "₹60–70cr capex planned for FY27, mostly Chennai phase 2 and Wada land",
      "source": "Q1 FY27 call (Aug 2026) and sector note" }
  ],
  "projectAdds": [
    { "id": "<project id from projects.json>", "capacityAdd": "+4,600 t a year (doubles Chennai; about +40% for the company)" }
  ]
}
```
- One `capacity` entry for EVERY company in the note's verdicts. Fields:
  - `today`: installed capacity by plant or product line, in the company's own units (tonnes, KL, units, MW, beds,
    rooms, GWh, sq ft, stores …). Short. For services/asset-light firms, say so ("Asset-light: no plants; capacity is
    people/seats" or the relevant measure such as seats, beds, stores).
  - `utilisation`: how full it runs (%, latest quarter/year), only if a source says.
  - `fullUse`: the sales today's capacity can make at full use (peak revenue / asset turn), only if a source says or
    it can be stated plainly from given figures (say "about").
  - `capexStatus`: one line on the capex cycle: planned spend and on what, OR — when the company has no listed
    project — why ("Big expansion done in FY24–25 (₹X cr at Y); now filling it, only maintenance capex ₹Z cr",
    "No plant capex; spends on software/people", "Capex paused until orders firm up").
  - `source`: where the figures come from.
- `projectAdds`: for each project of your note's companies in projects.json, the capacity it adds and, where
  possible, against today's base (the % increase). Skip a project if no source gives its capacity.
- Plain English, ₹/cr, short. Validate with `node -e "JSON.parse(require('fs').readFileSync('<file>','utf8'))"`.

Report in under 50 words per note.
