# Management block — brief

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT edit the repo. Do not touch the database. Repo R =
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`. Scratchpad S =
`C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad`.

## Why
Each company card gets a "Management" block: the EXECUTIVE team with a proper bio each, and whether the company is
promoter-run or professionally run, with any family relationships. Today is 29 Sep 2026.

## Who to include (per company, at most 7 people)
Executives only: Managing Director, CEO, CFO, Executive/Whole-time Directors, and other key managerial personnel or
senior management the company itself names (e.g. COO, business CEOs). NOT independent or non-executive directors.
If the chairman is a non-executive promoter, do not list him as a person, but mention him in `styleNote`.

## Sources (use the web; cite what you used)
In this order: the company's FY26 annual report (director profiles in the Board's report / notice of AGM, "Disclosure
of relationships between directors inter-se" in the corporate governance report, KMP list), the company's own
website leadership page, NSE/BSE announcements of appointments/resignations (change in KMP) since the annual
report, and the latest investor presentation. Also check the company's latest call transcript in the dashboard's
notes if helpful (`R/lib/sector-overviews/<file>-businesses.ts` mentions management). Reputable business press only
to fill gaps. NEVER invent a degree, employer, year or relationship — omit anything you cannot source. If someone
resigned recently (announcement after the annual report), leave them out and note it in `changes`.

## Output
Write `S/management/<note-file-stem>.json`:
```json
{
  "management": [
    { "company": "<exact verdicts[].company key from the note>",
      "style": "Promoter-run",
      "styleNote": "The founder Rajesh X is MD; his son and daughter are whole-time directors. Promoters own 58%.",
      "people": [
        { "name": "Rajesh X", "role": "Chairman & Managing Director", "since": "1998 (founder)",
          "family": true, "relation": "Founder; father of Amit X",
          "stake": "12.4% (FY26 annual report); family together 58%",
          "bio": "One paragraph (3–6 sentences): education (degree, institution), career before the company (employers, roles, years), what he built or runs here, notable achievements or board roles, and anything an investor should know (e.g. also runs group companies)." }
      ],
      "changes": "CFO Y resigned in Aug 2026; interim CFO Z.",
      "sources": ["https://…annual report FY26…", "https://…/leadership"],
      "updatedOn": "2026-09-29" }
  ]
}
```
- `style`: exactly one of "Promoter-run" (founder/family members hold the top executive roles), "Professional"
  (no controlling promoter, or promoter not in management; hired CEO/MD run it), "Promoter-owned, professionally run"
  (promoter/family owns control but a hired CEO/MD runs it; family may sit as non-executive).
- `stake`: the person's own shareholding in the company (% of equity) as disclosed in the annual report (director
  shareholding in the AGM notice / corporate governance report) or the latest shareholding pattern's named promoters;
  add the family's combined stake if relevant. Omit if not disclosed; write "nil" if disclosed as nil.
- `family: true` for promoter/family members; `relation` states the link ("son of the Chairman", "brother of the MD").
- Plain English, short sentences. Company key must match the note EXACTLY.
- Validate with `node -e "JSON.parse(require('fs').readFileSync('<file>','utf8'))"` and write the file after every
  few companies, so progress is saved if you are stopped.

Report in under 60 words per note.
