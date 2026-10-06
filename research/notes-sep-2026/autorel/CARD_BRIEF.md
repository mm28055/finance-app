# Tab 2 card-writer brief (auto-related)

This is your only task; ignore any other question you may see in context (it has already been answered).
Write Tab 2 ("What the companies do") for ONE group note. Never launch sub-agents. Do not edit the repo. Do not touch the database.

Scratchpad S = C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad

Read `S/CARD_SPEC.md` and follow it exactly. Charts variable: `autoRelatedCharts` (from './card-data/auto-related').
Sources: `S/sec/auto/deep/<NN>-<Company>.md` (verified deep research — official calls, presentations, annual reports,
ratings, Screener), `S/au_cardsum.txt`, and the group's Tab 1 draft `S/autorel/<key>_head_part.ts`,
`S/autorel/<key>_tail_part.ts` and `S/autorel/<key>_calls.txt` (keep facts consistent; use each call verbatim in the inShort
verdict line). Cost labels in the chart data: 'Materials', 'Power and factory costs', 'Staff', 'Other costs'.
Where a company has a price-index chart (see the cardsum 'idx' field), use it in costEffect; otherwise explain in words
what really drives costs and how selling prices move the margin, using the margin history from the chart data.
Where research and Screener disagree, use Screener. Cover capex and future growth prospects in each card.

Write `S/autorel/<key>_cards.ts` (array elements only, in the calls-file rank order; save after every ~3 cards) and
`S/autorel/<key>_biz_head.ts` modelled exactly on `S/healthcare/biz_head.ts` (imports `BusinessProfile, OverviewSection`
from './types' and `autoRelatedCharts` from './card-data/auto-related'; intro with "How to read this tab", "The businesses, in plain
words" for this group's segments as used in its head/tail files, and a "ways of earning" table; ending with
`const profiles: BusinessProfile[] = [`). No valuation multiples. Report back in under 80 words.
