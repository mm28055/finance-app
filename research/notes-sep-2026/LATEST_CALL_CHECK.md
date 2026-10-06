# Latest-call consistency check (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do not commit. Do not touch the database. Edit ONLY the note files named in your task
(`lib/sector-overviews/<file>.ts` and its `-businesses.ts`) in the repo
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`.

Scratchpad S = C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad

**The rule (owner's instruction):** where the two earnings calls contradict each other, the MOST RECENT call wins. A note
must never present an older call's statement as management's current view. An older statement may appear only as dated
history ("in May it said X; in July it said Y").

For each note in your task:
1. Read the note (Tab 1 and Tab 2) and the research files in `S/sec/<dir>/deep/` — especially each company's
   "Guidance history" and "What changed between the two calls" sections — and, where needed, the stored transcripts in
   `S/sec/<dir>/<NN>-<Company>.md` (the "## TRANSCRIPT <quarter>" blocks; the newest quarter is the latest call).
2. Find every statement of guidance, targets, margin or growth outlook, capex/debt plans, and every management quote.
   For each, check which call it comes from. Flag it if a LATER call changed, withdrew, raised or cut it.
3. Fix each flagged statement in place: lead with the latest call's position; keep the older one only as dated history
   when the change itself matters. Keep figures exact; quote only words that appear in the transcript. If the official
   transcript is needed to confirm a quote, download it from the BSE link in the research file (curl, pdftotext), then
   delete the files.
4. Do NOT change calls, ranks, stances or myGrowth. If a correction materially changes the investment case (e.g. guidance
   withdrawn that a call relied on), list it in your report instead.
5. Checks from the repo root: `npx tsc --noEmit -p .` shows no errors in your files; `npx tsx check-overview.tmp.ts
   <exportName> <file>.ts` shows no unmatched / not-in-closing and balanced bold.

Report back in under 150 words: per note, the number of statements fixed with one example; any case where the latest
call materially changes the investment case (company, what changed, which call).
