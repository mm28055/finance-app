# How to write a company card (Tab 2 "What the companies do")

You are writing TypeScript `BusinessProfile` objects for an Indian-equities research site read by a
**non-technical hobbyist investor**. Plain English, short sentences, British spelling, ₹cr for money.
No jargon without a plain explanation. Never invent numbers: every figure must come from the sources
given (the company research file, the Screener page, or the card-data summary line). Where a split or
figure is not disclosed, say so ("The company does not split revenue by …").

**Never write valuation multiples** ("at 80x", "P/E of …") anywhere in the card; the page shows live
multiples itself. You may say "the price needs more growth than I expect" etc. (the verdict call is
given to you).

## Fields, in this exact order (all required unless marked optional)

```ts
{
    company: '<exact name given>',
    inShort: ["**<what it does, bold lead>** …", "**Good:** … **Bad:** … (or **Watch:** …)", "**Verdict: <call>.** <one short reason>"],
    tagline: "<one line: what the business is>",
    revenue: '₹<latest filed FY sales>cr (FY26, consolidated|standalone)',
    products: [ { name: '<product/segment>', text: "<1–2 sentences>" }, … 3–5 items ],
    revenueText: "<where the revenue comes from, with bold key splits; say if not disclosed>",
    mixes: [ { caption: '<Revenue by X, period (source)>', parts: [{ label: '…', share: 60 }, …], note?: '…' } ],   // 1–2 mixes; shares must add to ~100; omit mixes entirely if no split is disclosed
    customers: ["**<who>** …", …2–3 items],
    difficulty: { level: 'Very high' | 'High' | 'Medium' | 'Low', text: "<how hard it is to make / qualify>" },
    moat: "<1–2 sentences: why customers stay, and the weakness>",
    salesDrivers: ["**<driver>**: <a full sentence or two>", … 4–5 items],
    inputs: "**<main materials/parts>** … Materials were <X>% of sales in FY26.",
    costEffect: "**<Passed on / Partly / Not protected / Mostly insulated>.** <how and how fast>. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about <materials% × 0.1> points (<margin>% to <margin − that>%). **What happened:** <use the price index start→end and margin start→end from the summary line; if the index is flat say so and explain what actually moved the margin>.",
    competitors: [ { name: '<rival(s)>', note: '<how they compare>' }, … 2–4 ],
    position: "**<rank / share / niche in bold>** …",
    money: "<net debt or net cash (say 'Screener' figure; add the company's own figure if the research gives one), planned capex, equity raises, pledges>. Promoters hold **<latest>%**<, down/up from <earlier>% if it moved>.",
    watch: ["<short item>", "<short item>", "<short item>"],
    charts: <CHARTS_VAR>['<exact name>'],
},
```

## Style example (a finished card from another sector)

```ts
{
    company: 'Elecon Engg.Co',
    inShort: ["**India's biggest industrial gearbox maker**, selling to steel, cement, power and sugar plants in India and abroad.", "**Good:** high returns, strong cash generation and ₹680cr of net cash. **Watch:** foreign rivals are cutting prices and margins have slipped from 24% to 21%.", "**Verdict: own.** The price roughly matches the growth I expect."],
    tagline: "India's leading industrial gearbox maker, with a material-handling equipment business and assembly and sales companies abroad.",
    revenue: '₹2,366cr (FY26, consolidated)',
    products: [
        { name: 'Industrial gears', text: "Catalogue gearboxes (54% of gear sales, priced from a monthly list) and engineered gearboxes (46%) for steel, cement, power, sugar, mining and ports, plus marine and naval gearboxes." },
        { name: 'Material-handling equipment', text: "Custom conveyor systems, stacker-reclaimers, wagon tipplers and crushers, mostly for power plants, cement and ports." },
    ],
    revenueText: "Gears were **80% of Q1 FY27 revenue** and material handling 20%. Overseas revenue was 29% of the quarter.",
    mixes: [
        { caption: 'Revenue by division, Q1 FY27', parts: [{ label: 'Gears', share: 80 }, { label: 'Material handling', share: 20 }] },
    ],
    customers: ["**Steel, cement, power and sugar plants**, many of them public-sector, often through their EPC contractors.", "**Navy and shipbuilders** (naval gearboxes) and **ports and mines**."],
    difficulty: { level: 'High', text: "Large engineered and naval gearboxes need precise design, heat treatment and testing done in-house. Catalogue gears face competition from multinationals building Indian plants." },
    moat: "Breadth of range, a 75-year record and fast delivery make it a preferred supplier to Indian heavy industry. Pricing is limited by PSU buyers and foreign rivals.",
    salesDrivers: ["**Factory spending in India**: new steel, cement, power and sugar capacity. Gearboxes are a small share of a plant's cost, so buyers rarely delay a project over gear prices, but they do delay projects when the economy is uncertain.", "**Government and public-sector orders**, which are slow to place.", "**Overseas demand** through Benzler (Europe) and Radicon (UK, US): 29% of Q1 sales.", "**Capacity is not a limit today**: ₹400cr is being spent over FY26–FY28 to expand."],
    inputs: "**Steel is the main input**: forgings and castings for gear shafts and housings, plus bearings, seals, motors and structural steel for conveyors.",
    costEffect: "**Mostly protected, with a short lag.** About 54% of gear sales are catalogue products whose price list is updated monthly; on engineered orders it locks raw-material prices with suppliers when it accepts the order. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (22% to 17%). **What happened:** steel-forging prices were flat to lower over three years, yet its margin slipped from 24–25% to about 21% in FY26 as rivals undercut prices.",
    competitors: [{ name: 'Flender (formerly Siemens)', note: 'German gear major with Indian plants; strongest in large engineered gearboxes.' }, { name: 'SEW-Eurodrive, Bonfiglioli, NORD', note: 'Multinationals expanding Indian capacity in catalogue gear motors.' }],
    position: "**India's largest maker of industrial gears** in the organised market, with one of the broadest ranges.",
    money: "The company puts its net cash at about ₹700cr. Capex of ₹400cr over FY26–FY28 is funded from its own cash. Promoters hold **59%**, unchanged over three years. No equity raised.",
    watch: ["Gear margin getting back toward the 24% target.", "The naval gearbox order and conversion of the record order book.", "Whether multinationals' new Indian plants push catalogue prices down."],
    charts: electricalEquipmentCharts["Elecon Engg.Co"],
},
```

## Rules
- Each bullet/field should be informative: a few lines, not a one-liner (except `watch`).
- Bold (`**…**`) only the key phrase; keep `**` balanced.
- Use double quotes for strings containing apostrophes; escape nothing else. Output must be valid TypeScript.
- The inShort verdict line must use the call given below verbatim ("Verdict: own." / "Verdict: follow." / "Verdict: wait." / "Verdict: pass." / "Verdict: avoid.").
- Rule-of-thumb arithmetic: points = materials% ÷ 10, rounded; margin = the FY26 operating margin in the stats.
- If materials are a small share (services, very high value-add), say the business is mostly insulated from materials and name what really drives its costs (staff, power).
- For "What happened", the summary line gives `idx (start period, 100, end)` = India wholesale price index of the chosen input, and `m (start, end)` = operating margin at the same periods. Name the index in plain words (e.g. "India's circuit-board price index", "alloy and stainless steel bar prices").
- Write ONLY the array elements (the objects, each followed by a comma) to the output file — no imports, no `const`.
