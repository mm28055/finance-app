# Capacity pictures

Each company's "Capacity and projects" block can be drawn as a picture (bars and a timeline) from its entry in
`lib/projects/pictures.json` (format: `CapacityPictureData` in `lib/projects/types.ts`; drawn by
`components/CapacityPicture.tsx`). A picture carries a fingerprint of the facts it was drawn from (the company's
`capacity.json` entry, its `projects.json` projects and their milestones). When any of those change, the site shows
the text version until the picture is redrawn.

## Keeping them current (weekly review)

After editing a company's capacity, projects or project milestones, redraw its picture in the same run:
1. Edit its entry in `lib/projects/pictures.json` by the rules below (every changed fact, every new milestone placed).
2. `npx tsx scripts/pictures/stamp.ts "<Company>"` — stamps the new fingerprint and runs the checks.
3. Clear every ERROR it prints. A company with nothing numeric to draw has no entry (text stays).

`npx tsx scripts/pictures/check.ts --stale-ok` lists all problems and which pictures are out of date.

## Drawing rules


1. **Nothing lost.** Every fact in the capacity entry and in every project (what, cost, start, adds,
   capacityAdd, status, source, revisions) must appear somewhere in the picture: a bar, a label, a note, a
   timeline stop, or `notes`. After drafting, go through the input text clause by clause and tick each off.
   Management revisions ("Management changed this ...") must appear, with their date.
2. **Nothing invented.** Every number must come from the stored facts or the sources. You may do arithmetic
   (differences, percentages), but label inferred numbers honestly ("about"), and never present a guess as
   a company figure. Don't assume "spent" — set `spent` only when a source states it (e.g. "₹60cr spent by
   June"). A just-approved project is not "₹0 spent" unless stated; leave `spent` out.
3. **lines** (how full each line runs): only when a utilisation % is given. One item per line given; a single
   company-wide figure becomes one item named e.g. "Overall". For a range ("90–95%") use the midpoint as
   `usedPct` and the range in `usedLabel`. Use `marker` for a stated target or guided level, `tight` +
   `tightLabel` for a stated bottleneck or a line at or above ~90%. Heading names the period ("How full each
   line is (Q1 FY27)"). Capacity sizes go in `size`. Utilisation above 100% → `usedPct` 100, label says the real figure.
4. **adds** (grey today + green addition): only when today's base and the addition are numbers in the same
   unit, for the same thing. `right` is the % increase (add ÷ base), rounded, "about" when inferred. If
   the company says "to X" and base + add ≠ X, keep their X in `sub` with "about" and add a `caveat` saying the
   figures don't quite add up (see Pitti). Heading says which project and when, including phasing
   ("in modules from FY28, complete by Q1 FY30"). Company-wide totals vs one plant's addition: be exact.
5. **money**: one item per project with a ₹ cost. `total` in ₹ crore only for a single figure (a range like
   "₹40–45cr" or a non-₹ figure → leave `total` out and write it in `right`). `status` = the project's
   status. `projectId` always set. Projects with no cost at all still get a money item (no total) if they
   aren't in `adds`, so every project is tied to a bar — the checker requires each project's id on an
   `adds` or `money` entry.
6. **timeline**: stops in date order (FY quarters/years as the sources say). `tone`: `done` = already
   happened, `next` = within about a year, `later` = further out, `maybe` = not approved, under study or
   tentative. Every project milestone id goes in exactly one stop's `milestones` (usually the stop whose
   `when` matches its `due`). Don't repeat a milestone's words in `text`.
7. **Latest call leads.** Where the two calls differ, the newer one is the current guidance; the older one
   only as dated history ("Q4 FY26 call had said end of H1 FY27").
8. Style: short, plain English, sentence case, Indian number formats (1,08,000 is fine as 108,000 — follow the
   stored text), "t" for tonnes, ₹ and "cr". No jargon. Match the stored wording where it's right.

Every number and date must be checked against the call or filing it came from. If a stored fact is wrong, fix it in capacity.json or projects.json first, then draw.
