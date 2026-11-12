import { BusinessProfile, OverviewSection } from './types';
import { hospitalsCharts } from './card-data/hospitals';

// Tab 2 of the Hospitals note: what each chain actually does.
// Revenue totals are the filed figures (Screener). Beds, occupancy, ARPOB and splits come
// from the companies' latest presentations and calls; where a figure is not disclosed,
// the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it offers, where the money comes from and its charts; patients and payers, costs, competitors and ownership are under **More detail**. Revenue totals are filed consolidated figures (GPT Healthcare standalone, as it has no subsidiaries); beds, occupancy and splits are from each company's latest call. Hospitals have no main raw material, so there is no cost-versus-input chart.",
        ],
    },
    {
        heading: 'The business, in plain words',
        body: [
            "A hospital earns from each bed it fills and each procedure it performs. Four numbers explain almost everything.",
        ],
        points: [
            {
                label: 'Beds and occupancy',
                text: "How many beds are open, and what share of them are filled on an average day. Mature hospitals run at 65–75%; a new one starts far lower and takes two to four years to fill.",
            },
            {
                label: 'ARPOB',
                text: "Average revenue per occupied bed per day: what a filled bed earns, from room charges, surgery, tests and medicines. It rises with more complex care (transplants, cancer, heart surgery) and with price increases, and it varies widely: about ₹35,000 at Yatharth, ₹85,000 at Artemis.",
            },
            {
                label: 'Payer mix',
                text: "Who pays the bill: patients themselves (cash), private insurers, government schemes (which pay lower, fixed rates and pay slowly), or foreign patients. More cash, insurance and international patients means higher ARPOB.",
            },
            {
                label: 'New hospitals',
                text: "A new hospital loses money for its first year or two while it hires doctors and fills beds, so a chain that is expanding fast reports lower margins and returns for a while, even if every hospital is doing well.",
            },
        ],
    },
    {
        heading: 'Three kinds of chain',
        body: [
            "Size and focus decide what each chain can charge and how fast it can grow.",
        ],
        tables: [
            {
                columns: ['Kind', 'Who', 'What they do', 'What sets profit'],
                rows: [
                    ['**Large chains across several states**', 'Narayana, Medanta, KIMS', 'Complex care (heart, cancer, transplants) in many cities', 'Filling new hospitals; keeping complex-care prices up'],
                    ['**Regional chains**', 'Yatharth, Jupiter, Artemis, GPT Healthcare, Shalby', 'A few large hospitals in one region (Delhi NCR and UP, western India, Gurugram, Kolkata and eastern India, Gujarat)', 'Occupancy and ARPOB at each hospital; one new hospital moves the whole company'],
                    ['**Single-speciality chains**', 'Rainbow (children and mothers), Dr Agarwal’s (eyes), HCG (cancer)', 'Many smaller centres in one speciality', 'Opening centres fast at low cost; brand among parents, eye or cancer patients'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Yatharth Hospital',
        inShort: ["**A fast-growing hospital chain in Delhi NCR and Uttar Pradesh** that buys half-built or struggling hospitals and turns them round: eight hospitals today, with a ninth in Gurugram due in Q1 FY28 (April–June 2027).", "**Good:** revenue up 46–52% a year in recent quarters, new hospitals breaking even faster than planned, and almost no net debt at March 2026. **Bad:** about 40% of revenue comes from slow-paying government schemes, so only about half of operating profit has turned into cash; the Q1 margin missed its guide and profit after tax grew only 8%, a ₹59.7cr tax demand is unprovided, and debt is rising again to pay for Gurugram.", "**Verdict: follow.** The closest to a buy in the sector, but the price asks for about {need:Yatharth Hospital|27}% a year of earnings growth against the 22% I expect while profit and cash lag revenue."],
        tagline: "A North Indian hospital chain (Noida, Greater Noida, Faridabad, New Delhi, Agra, Jhansi) growing by buying and rebuilding hospitals, and moving up-market into cancer, brain and robotic surgery.",
        revenue: '₹1,207cr (FY26, consolidated)',
        products: [
            { name: 'Noida cluster', text: "Noida (Sector 110), Greater Noida and Noida Extension, its original and most profitable hospitals. Noida runs about 91% full; Noida Extension has the group's only cancer radiation machine (LINAC) and earns more than ₹50,000 per filled bed per day." },
            { name: 'Faridabad and New Delhi', text: "Greater Faridabad (63% full), Faridabad Sector 20 (broke even in 9 months, ₹12–13cr of revenue a month) and New Delhi Model Town (₹8cr a month, 29% full, break-even expected in Q3–Q4 FY27). The two newest get over 90% of revenue from cash and private-insurance patients." },
            { name: 'Uttar Pradesh towns', text: "Jhansi-Orchha (90% full but low prices, about ₹13,000 per filled bed per day) and Agra, added in Q4 FY26, already at ₹9–10cr a month and a 20%-plus margin in its first full quarter." },
            { name: 'Gurugram (coming)', text: "A 250-bed hospital bought in 2026 and being built at about ₹1cr per bed, due in Q1 FY28 and aimed at wealthier and international patients at around ₹50,000 per filled bed per day." },
        ],
        revenueText: "The company does not split revenue by specialty, except that **cancer care is close to 10%** with just one radiation machine (two more are being added). Q1 FY27 revenue was about ₹393cr, up 52%: the four established hospitals earned ₹286cr (up 22%) and the four newer ones **₹107cr, or 27% of the total**. About **40% of revenue comes from government schemes**, mainly CGHS (the central-government staff health scheme), and 60% from cash and private insurance; in the new hospitals government business is kept under 10%.",
        mixes: [
            { caption: 'Revenue by hospital group, Q1 FY27 (company call)', parts: [{ label: 'Established hospitals (Noida cluster, Jhansi)', share: 73 }, { label: 'Newer hospitals (Faridabad x2, New Delhi, Agra)', share: 27 }] },
            { caption: 'Revenue by payer, Q1 FY27 (company call)', parts: [{ label: 'Cash and private insurance', share: 60 }, { label: 'Government schemes', share: 40 }] },
        ],
        customers: ["**Cash and privately insured patients** (about 60% of revenue) from the fast-growing suburbs of Noida, Greater Noida, Faridabad and north-west Delhi.", "**Government schemes** (about 40%), mainly CGHS, whose rates were raised recently for the first time in many years. These patients stay longer and pay later, and management is deliberately cutting their share.", "**International patients** from Central Asia, Africa and the Middle East, a small but targeted group: it opened an information centre in Uzbekistan and plans five more in CIS and African countries."],
        difficulty: { level: 'High', text: "A new hospital needs land, building approvals, costly equipment and, above all, well-known doctors. Management puts the cost at ₹75–80 lakh per bed today (about ₹1cr in Gurugram), roughly double what it spent a few years ago, partly because land it bought 7–8 years ago was far cheaper. A new hospital then takes about a year to break even and roughly two more to reach a mature margin. Yatharth's shortcut is buying half-built or weak hospitals, which only works if the price is right." },
        moat: "Local density: several large hospitals close together share doctors, referrals and brand, which a single new hospital struggles to match, and doctor turnover is low (about 7%, and 3–4% for senior doctors, helped by training courses and a new share-option scheme). The weakness is that patients follow star doctors rather than the hospital name, and bigger brands are strong in the same NCR markets.",
        salesDrivers: ["**Filling beds it already has**: 2,555 beds are built but only 1,820 are counted as in use, and those were 68% full in Q1 FY27. Management says the main job now is to fill this capacity.", "**Higher prices per bed**: group ARPOB (average revenue per occupied bed per day, the standard hospital price measure) was ₹34,758 in Q1 FY27, up 7%; management expects 9–10% growth a year from more cancer, transplant and robotic work and fewer government patients.", "**New hospitals maturing**: Faridabad Sector 20 broke even in 9 months against 12–14 planned, and New Delhi should follow in Q3–Q4 FY27. Management expects new hospitals to reach 15–20% margins about 15–18 months after break-even and 26–27% within two years.", "**More capacity**: Gurugram (250 beds, Q1 FY28) and about 450 extra beds at Noida Extension and Greater Noida over the next 15–19 months take announced capacity to 3,200 beds. The target is 5,000 beds, in about 2.5 years according to the Q&A, with at least one acquisition a year.", "**Guidance**: FY27 revenue growth above FY26's 37% and an operating margin of about 24% or more."],
        inputs: "**Doctors, nurses and medicines.** Senior doctors are paid fixed fees plus a share of revenue, booked under other expenses (the 2-point rise in other costs in Q1 FY27 was entirely doctor fees). Nurses and other staff are salaried. Medicines and consumables were 19% of sales in FY26, staff 19% and other costs 37%; the filing does not split out power or rent.",
        costEffect: "**Mostly insulated from commodity prices.** Medicines and implants are largely billed to patients, so the margin depends on how full the hospitals are, ARPOB, the mix of payers and the start-up losses of new hospitals. Government-scheme patients pay fixed rates, stay longer and pay late; cash and insurance patients pay more. In Q1 FY27 the margin was 28.1% excluding New Delhi and Faridabad Sector 20, but about 23% including them. **What happened:** the margin slid from 28–30% in FY22–FY24 to 26% in FY25 and 24% in FY26, and has been about 23% in each of the last four quarters, as newly bought hospitals started up with losses. Management expects a slow recovery as they mature, but says new openings such as Gurugram mean it will not return to 28% soon.",
        competitors: [{ name: 'Max Healthcare, Fortis and Medanta', note: 'Bigger, better-known brands across NCR; Medanta opened a large hospital in Noida in late 2025.' }, { name: 'Two large hospitals near Model Town, Delhi', note: 'Management says two major players are within 10km of its New Delhi hospital, though most Delhi patients stay within 2–3km of home.' }, { name: 'Local hospitals and nursing homes', note: 'Mid-sized local hospitals in Noida, Faridabad and UP towns that Yatharth aims to outgrow with bigger, better-equipped hospitals.' }],
        position: "**A fast-rising challenger in Delhi NCR and western UP.** Management says it usually has the largest hospital in the smaller cities it enters (Agra, Jhansi), but it is still smaller and less known than Max, Medanta and Fortis in the capital region.",
        money: "Screener shows **₹1cr of net cash** at March 2026. Since then debt has risen from about ₹210cr to about ₹300cr because ₹80cr of the Gurugram purchase was borrowed; the rest came from its own cash. Management is comfortable borrowing up to about 2 times a year's operating profit and says cash flow plus debt covers the next 1,800 beds. Government receivables are the weak spot: debtor days were 113 in FY26, and over five years only about half of operating profit turned into cash. Of the ₹374.8cr owed to it at March, ₹107.5cr (29%) was 1–2 years old. On 14 September 2026 it received **a ₹59.7cr income-tax demand** for FY15–FY25, which it is appealing and has not provided for, although the Q4 call had said the matter would close with no liability. It declared its first dividend in Q1 FY27. **New money:** on 17 September 2026 the board approved a ₹3,150cr preferential issue to Rasmalai Ltd of Cyprus (reported as an Advent International vehicle): 1.30 crore shares (₹1,283cr) and 1.89 crore warrants (₹1,867cr, a quarter paid upfront) at ₹985.17, which would give it 24.87% on a fully diluted basis, with board seats and reserved-matter rights; shareholders were asked to approve it on 15 October. Promoters hold **55.8%**, down from 66.3% in September 2023; part of the fall is the chairman's wife cutting her holding from 6.47% to 0.62% during FY26 (annual report).",
        watch: ["New Delhi breaking even in Q3–Q4 FY27 and the government share of revenue falling.", "The FY27 margin holding at about 24% as depreciation and interest rise.", "Gurugram opening on time, the ₹59.7cr tax appeal, and any government cap on private hospital room rents.", "What the ₹3,150cr from Rasmalai (Advent) is spent on, and whether returns hold on the larger share count."],
        charts: hospitalsCharts['Yatharth Hospital'],
    },
    {
        company: "Rainbow Children's Medicare",
        inShort: ["**India's leading children's and maternity hospital chain**, with about 2,400 beds mostly in Hyderabad, Bengaluru, Chennai and Andhra Pradesh, now expanding into Mumbai, Delhi NCR, Pune and Indore.", "**Good:** operating margins around 30%, revenue up 33% in Q1 FY27 and ₹613cr of cash and investments, enough to fund a ₹2,200cr expansion from its own money. **Watch:** new hospitals are pulling the margin down (the guide is now 24–25% before rent, against 26.3% last year), occupancy is only 41%, its auditor flagged a ₹31.5cr loan to its Delhi landlord, and Mumbai and North India are new ground.", "**Verdict: follow.** A high-quality niche leader, but the price already assumes its plan to double revenue in four years works."],
        tagline: "A specialist hospital chain for children, newborns and mothers, from IVF and deliveries to newborn intensive care and child transplants, run as large hub hospitals fed by smaller neighbourhood spokes.",
        revenue: '₹1,703cr (FY26, consolidated)',
        products: [
            { name: "Children's care", text: "Emergency care, newborn and child intensive care (NICU and PICU) and super-specialities such as children's heart surgery, liver and kidney transplants, cancer and ECMO (a heart-lung machine); in Q1 FY27 its team flew 1,800km to fetch a critically ill child from Guwahati." },
            { name: 'Maternity and fertility', text: "Deliveries (up 23% in Q1 FY27), women's care and IVF, offering one place from fertility treatment to birth and newborn care." },
            { name: 'Hub hospitals', text: "Large hospitals in Hyderabad (close to 1,000 beds across the city), Bengaluru, Chennai and Guwahati handle complex cases; hubs in Coimbatore and Gurugram are being built." },
            { name: 'Spoke hospitals', text: "Smaller neighbourhood hospitals with many outpatients, short stays and many deliveries, which send complex cases to the hubs. Rajahmundry is at break-even; HSR Layout and Electronic City in Bengaluru are still losing money." },
        ],
        revenueText: "Rainbow does not split revenue by specialty or city on the call. For inpatients, **cash patients pay about 48%** and **insurance about 52%** (Q1 FY27 presentation; the call transcript's “42%” is a transcription slip), a mix that has been steady for several quarters. Q1 FY27 revenue was ₹470cr, up 33%; hospitals bought in Guwahati and Warangal added about ₹38cr, so like-for-like growth was 24%. Mature hospitals (over five years old) earn about ₹70,000 per filled bed per day against about ₹59,000 in newer ones.",
        mixes: [
            { caption: 'Inpatient revenue by payer, Q1 FY27 (company presentation)', parts: [{ label: 'Cash', share: 48 }, { label: 'Insurance', share: 52 }] },
        ],
        customers: ["**Parents and expectant mothers**, mostly paying cash or through private insurance, in large southern cities.", "**Referring doctors and smaller hospitals** that send sick newborns and children; Rainbow runs its own transport and retrieval teams for critically ill babies.", "**Government schemes** are small today; management may take some scheme patients to fill spare beds but says it will be careful on price, as children's care is mostly medical rather than surgical."],
        difficulty: { level: 'High', text: "A children's hospital needs round-the-clock teams of full-time paediatric specialists, intensive-care nurses and expensive equipment. Management says building that clinical team, and teaching parents in a new city what it can do, is the hardest part. A new Bengaluru hospital takes about 15–18 months to break even, and a large hub takes years to build." },
        moat: "A reputation for complex children's care that general hospitals rarely match, a full-time doctor model and a hub-and-spoke network that keeps referrals inside the group; management says it sees no real competition in its niche. The weaknesses are dependence on senior doctors and seasonal swings in children's illness, which it says it is reducing.",
        salesDrivers: ["**New beds filling up**: total beds rose 26% in a year to 2,435 and operational beds 22% to 1,862. Occupancy is just over 41%, so there is plenty of room to grow without building.", "**More complex care**: ARPOB (average revenue per occupied bed per day) rose 6% in Q1 FY27 and about 5–6% a year over five years. Gurugram and Mumbai are aimed at transplants, cancer and international patients, which pay more.", "**Expansion**: 2,500 more beds over five years (to 5,000) for about ₹2,200cr, with 1,200 already in progress and 70% outside the South. Next: Indore (Q3 FY27), Malad in Mumbai (100 beds, Q1 FY28), Coimbatore and Gurugram Sector 56 (Q3 FY28), a Gurugram hub (Q1 FY29), and Pune (150 beds) and Sarjapur, Bengaluru (FY29).", "**Andhra Pradesh deals**: Prime Children's Hospital in Nellore (70 beds plus a 30-bed maternity block) and a leased 50-bed hospital in Guntur take the state to 500 beds.", "**Guidance**: at least 20% growth in Q2 FY27 and revenue doubling in four years."],
        inputs: "**Doctors, nurses and running costs.** The core children's doctors are full-time employees; some obstetricians and super-specialists work on mixed terms. Medicines and consumables were 13% of sales in FY26, power and hospital running costs 9%, staff 14% and other costs 32%; the filing does not split the large 'other' line further.",
        costEffect: "**Mostly insulated from commodity prices.** Medicines are a small cost and billed to patients. What moves the margin is how full the hospitals are, ARPOB, seasonal illness in children (the July–December quarters are normally busiest) and start-up losses of new hospitals; Rainbow has added over 700 beds in two years. **What happened:** the margin stayed in a high 32–34% band from FY22 to FY26, but slipped from 33% in Q2–Q3 FY26 to 29% in Q1 FY27 as new beds opened. Management guides to 24–25% for FY27 on its older 'pre-Ind AS' basis, which counts rent as a cost; reported margins are higher because accounting rules move rent below operating profit.",
        competitors: [{ name: 'Cloudnine and Motherhood Hospitals', note: "Private maternity chains strong in deliveries in Bengaluru, Mumbai and NCR, with less complex children's care." }, { name: 'Apollo, Manipal and other multi-specialty chains', note: 'Run mother-and-child wings inside general hospitals.' }, { name: 'Artemis (Gurugram)', note: 'Building a 200-bed women-and-children tower in Gurugram, where Rainbow plans its hub.' }],
        position: "**The leading specialist children's hospital chain in India**, dominant in Hyderabad and strong across the South, but a newcomer in Mumbai, NCR and Central India.",
        money: "The company holds **₹613cr of cash and investments** (June 2026), calls itself cash-surplus and plans to fund the ₹2,200cr expansion from its own cash flow. Screener shows ₹453cr of net debt; the gap is most likely lease obligations on rented hospital buildings, which Screener counts as borrowings. It spent ₹56cr on capex in Q1 FY27. The auditor made a key audit matter of a **₹31.5cr loan** (including ₹11.2cr of unpaid interest) to Madhukar Rainbow Children's Hospital, which owns the Delhi building Rainbow operates in and lacks the cash profits to repay; the loan was given a two-year moratorium and a lower rate. Promoters hold **49.8%**, unchanged since 2023.",
        watch: ["The margin holding near the 24–25% (pre-Ind AS) guide while hundreds of new beds open.", "Occupancy climbing above 41% and the new Bengaluru hospitals breaking even.", "How Malad, Indore and the Gurugram projects start in cities where Rainbow is unknown.", "Recovery of the ₹31.5cr loan to the Delhi building's owner."],
        charts: hospitalsCharts["Rainbow Children's Medicare"],
    },
    {
        company: 'Jupiter Life Line Hospitals',
        inShort: ["**A Western India hospital group running large multi-specialty hospitals in Thane, Pune (Baner) and Indore**, plus a new hospital in Dombivli opened in February 2026.", "**Good:** mostly insured and cash patients (government schemes just 1%), a steady 23% margin for four years and cash roughly equal to debt. **Watch:** Dombivli lost ₹9.5cr in Q1 (the margin fell to 19.3%) before a seasonal Q2 near break-even at mid-30s occupancy, a 1,700-bed building plan, including a 400-bed hospital in Mumbai's BKC, needs heavy spending and debt of up to 3 times operating profit (ICRA's review trigger is 1.8), its CFO left after a year, and it bought a company from promoter-group members.", "**Verdict: wait.** Well run, but with the FY27 margin guided down to 20–21% I expect about 15% a year of earnings growth, well short of what the price asks."],
        tagline: "A builder and operator of large, owned multi-specialty hospitals in the suburbs of Mumbai and Pune and in Indore, planning to more than double its beds to nearly 3,000.",
        revenue: '₹1,500cr (FY26, consolidated)',
        products: [
            { name: 'Thane', text: "Its first and most mature hospital, about 75% full. Growth here now comes mostly from price rises in line with inflation; approvals to add floors are awaited." },
            { name: 'Pune (Baner)', text: "About 65% full, so growth comes from both more patients and higher prices." },
            { name: 'Indore', text: "Expanded last year and now 45–50% full; the next 111 beds will be added once occupancy nears 60%. Growth comes from more patients, a richer case mix and price." },
            { name: 'Dombivli', text: "Opened February 2026: a 750,000 sq ft building for 500 beds with about 300 fitted out, built in just over 24 months without cost overruns. Insurance tie-ups depend on accreditation, likely 6–12 months away." },
            { name: 'Projects', text: "Pune South (due in 2028), Mira Road (excavation promised by end-2026, though the Q1 FY27 presentation still describes it as at the planning stage) and a 400-bed hospital on over 1 lakh sq ft of land in BKC, Mumbai (land allotted, 25% paid, the rest due in FY27)." },
        ],
        revenueText: "The company does not split revenue by hospital on the call. **Insurance pays 55.4% of revenue and government schemes just 1%**; the rest is mostly patients paying themselves. Foreign patients are a very small share and not a focus. FY26 revenue rose 15.2%, with patient volumes up 9.9% to 10.8 lakh and ARPOB up 11.7%.",
        mixes: [
            { caption: 'Revenue by payer, FY26 (company call)', parts: [{ label: 'Insurance', share: 55 }, { label: 'Cash and others', share: 44 }, { label: 'Government schemes', share: 1 }], note: 'Cash and others is the remainder, not stated directly on the call.' },
        ],
        customers: ["**Privately insured patients** (55% of revenue) and families paying themselves in the dense suburbs around each hospital; each hospital is sized to serve people within a 45-minute drive.", "**Insurance companies**, whose rate contracts renew on a rolling basis, some every two years; recent renewals lifted prices.", "**Very few government-scheme or foreign patients**: management says local demand is enough and it does not chase medical tourism."],
        difficulty: { level: 'High', text: "Jupiter owns its land and buildings and builds each hospital as a full-scale hub, at about ₹1.5cr per bed for the 1,700 beds planned. Dombivli took just over two years to build and is expected to take about two more to break even. Land in Mumbai and Pune is scarce and approvals slow: Thane's extra floors and BKC are still awaiting clearances." },
        moat: "Large, owned hospitals in crowded suburbs, where there is little room for a rival to build something similar nearby, and a clean payer mix with almost no government business. The weakness is dependence on a handful of hospitals and the cost and time needed to add new ones.",
        salesDrivers: ["**Filling capacity**: the three older hospitals were 61.2% full in FY26; Indore and Dombivli have the most room to grow.", "**Prices per bed**: ARPOB (average revenue per occupied bed per day) rose 11.7% to ₹67,700 in FY26 from insurance renewals and a richer case mix at Indore; mature Thane will grow roughly with inflation.", "**Dombivli ramp-up**: the early response from doctors and patients is good, but insurance tie-ups need 6–12 months of accreditation work, and more doctors are still to be hired.", "**The building programme**: about 1,700 new beds across Dombivli, Pune South, Mira Road and BKC would take capacity from about 1,200 beds to nearly 3,000.", "**Patient volumes**: up 9.9% in FY26, with growth in both outpatients and inpatients."],
        inputs: "**Doctors, nurses and medicines.** Medicines and consumables were 19% of sales in FY26, power and hospital running costs 12%, staff 17% and other costs 29%. Management says doctor costs are not a worry; its main concern is the falling rupee, which makes imported equipment for new hospitals dearer, and global supply problems for some consumables.",
        costEffect: "**Mostly insulated from commodity prices.** Consumables are billed on to patients. The margin is driven by occupancy, ARPOB, a payer mix dominated by insurance, and start-up losses at new hospitals. Dombivli lost ₹9.4cr in its first weeks (Q4 FY26) and is expected to lose ₹2–3cr a month through FY27. **What happened:** the margin rose from 21% in FY22 to a steady 23% in FY23–FY26, then fell to 19% in Q1 FY27 as Dombivli's costs came in. Depreciation on the new building also cuts profit below the operating line.",
        competitors: [{ name: 'Fortis, Kokilaben and other Mumbai hospitals', note: "Established hospitals across the Mumbai region; BKC will compete with the city's top premium hospitals." }, { name: 'Ruby Hall and Sahyadri (Pune)', note: 'Large local hospital networks in Pune.' }, { name: 'KIMS (Thane) and Medanta (Indore)', note: "Chains running hospitals in two of Jupiter's cities; KIMS's Thane hospital is still ramping up." }],
        position: "**A leading private hospital group in Mumbai's suburbs, Pune and Indore**, known for large hub hospitals rather than networks of small clinics; it aims to be the leading hospital group in Western India.",
        money: "Screener shows **₹40cr of net debt**; the company put gross debt at about ₹500cr against about ₹545cr of cash at March 2026, after spending about ₹500cr on capex in FY26. It expects its own cash flow over the next four or so years, plus debt kept under 3 times a year's operating profit, to fund all announced projects, though BKC's building cost is not yet fixed. That ceiling is well above ICRA's: the agency would review its AA- rating if debt stayed above 1.8 times operating profit. Management now guides an FY27 margin of only 20–21%. Around the same time the CFO who joined in 2025 left (May 2026) and his predecessor returned (July), and a subsidiary bought an IV-fluid maker from promoter-group members for ₹3.78cr before committing ₹35–40cr to it. Promoters hold **40.9%**, unchanged since 2023.",
        watch: ["Dombivli staying near break-even after a seasonal Q2 (loss ₹0.2cr against ₹9.5cr in Q1), and break-even in the 1.5–2 years management expects (in May it said by end-2027 or 2028).", "Mira Road's next phase starting before March 2027, and the ₹150cr Pune South land purchase completed.", "BKC's final cost and funding plan once MMRDA formalities are done.", "Indore occupancy reaching about 60%, which triggers its next 111 beds.", "Debt staying below ICRA's 1.8 times trigger, and no further purchases from promoter-group members."],
        charts: hospitalsCharts['Jupiter Life Line Hospitals'],
    },
    {
        company: 'Artemis Medicare',
        inShort: ["**A Gurugram-based hospital group known for complex surgery and transplants**, with about a quarter of revenue from foreign patients, now opening in Raipur and planning a large South Delhi hospital.", "**Good:** steady growth of 13–17% a quarter, a margin that has climbed from 12% in FY22 to about 20%, and very little net debt. **Watch:** almost all revenue comes from one hospital, Raipur will lose about ₹20cr before breaking even, three-year capex has jumped from about ₹100cr to about ₹800cr plus a ₹250cr deposit, a share sale of up to ₹700cr is possible for acquisitions, and its MD was paid ₹52.7cr in FY26.", "**Verdict: follow.** A well-run flagship, but the next phase depends on new hospitals outside Gurugram."],
        tagline: "A premium multi-specialty hospital group centred on one large Gurugram hospital, with smaller clinics and centres around Delhi NCR and a new 300-bed hospital in Raipur.",
        revenue: '₹1,081cr (FY26, consolidated)',
        products: [
            { name: 'Gurugram flagship', text: "A 700-bed building with 544 beds in operation, 65.7% full in Q1 FY27 and earning ₹85,690 per filled bed per day, among the highest in Delhi NCR. It brings in 95–97% of revenue: heart, cancer, brain and bone surgery and all-organ transplants, including heart and lung." },
            { name: 'International patients', text: "Patients from the Middle East, Africa, Central Asia and elsewhere made up about 27% of Q1 FY27 revenue, even though the West Asia war stopped many flights; it adds two or three new source countries a year." },
            { name: 'Raipur (Artemis Shanti Hospital)', text: "A 300-bed hospital in Chhattisgarh that opened outpatients on 9 July 2026 and theatres on 27 July, at a cost of ₹120cr. Expected to lose about ₹20cr in total and break even in 15–18 months." },
            { name: 'Smaller centres', text: "Artemis Lite, Cardiac Care and Daffodils (women and children) centres around NCR that feed patients to Gurugram; some are being merged, such as New Friends Colony into East of Kailash, to cut rent and staff costs." },
            { name: 'Tower IV and South Delhi (coming)', text: "A 200-plus-bed women-and-children tower on the Gurugram campus (₹120cr including parking on the call, ₹160–180cr in the board approval; 18–22 months) and a 650-bed hospital on the VIMHANS site in South Delhi." },
        ],
        revenueText: "Management says **95–97% of revenue comes from the Gurugram hospital**. **International patients were about 27% of revenue in Q1 FY27**, and management hopes for about 30% in Q2. The call does not give a split between cash, insurance and government payers. Q1 FY27 revenue was ₹287cr, up 12.7%, with the Gurugram hospital up 15.4%.",
        mixes: [
            { caption: 'Revenue by patient origin, Q1 FY27 (company call)', parts: [{ label: 'Domestic', share: 73 }, { label: 'International', share: 27 }] },
        ],
        customers: ["**Affluent and insured patients in Gurugram, Haryana and South Delhi**, many referred for complex procedures.", "**International patients** from the Middle East, Africa and Central Asia, spread over many countries so no single region dominates.", "**Patients in Central India** who used to travel to bigger cities for complex care, now targeted from Raipur."],
        difficulty: { level: 'High', text: "Complex transplant and cancer programmes take years to build a track record and need specialist teams and costly equipment; Artemis took about two decades to grow from 90 beds to its current size. Adding beds on its own campus is cheap (about ₹55 lakh per bed for Tower IV) because the land and basement already exist. A new city is far harder: Raipur needs insurance tie-ups (8–10 weeks) and 15–18 months to break even." },
        moat: "A strong clinical reputation in Gurugram, one of India's most crowded hospital markets, and a spread-out international patient base. The weakness is dependence on a single site: a problem at Gurugram hits almost all of the business, and the brand is untested outside NCR.",
        salesDrivers: ["**Gurugram occupancy and prices**: occupancy was 65.7% and management expects about 70% in Q2 FY27; ARPOB (average revenue per occupied bed per day) keeps rising with more complex work. Tower IV is meant to stop the hospital turning patients away.", "**International patients**: about 27% of revenue, aiming for 30%; Middle East demand depends on flights and the conflict.", "**Raipur ramp-up**: all specialities started together; direct insurance tie-ups are expected in 8–10 weeks, with an intermediary arranging cashless treatment meanwhile.", "**More beds**: Tower IV, Raipur and South Delhi aim for about 2,000 operational beds by 2029–30. Management agrees the Gurugram campus alone could reach about ₹2,000cr of revenue in three to five years.", "**Margin guidance**: the Gurugram hospital should reach 23–24% within two to three years, helped by scale."],
        inputs: "**Doctors, nurses, medicines and implants.** Running costs, including medicines and doctors' fees, were 63% of sales in FY26 and staff 15%; the filing does not split running costs further. Management credits recent gains to tighter use of consumables, shorter stays and keeping staff numbers roughly flat while admitting more patients.",
        costEffect: "**Mostly insulated from commodity prices.** The margin moves with occupancy, ARPOB, the share of international and complex cases, and losses at new hospitals. Because staff costs stay roughly the same as patient numbers rise, each extra patient adds a lot of profit. **What happened:** the margin climbed steadily from 12% in FY22 to 17% in FY26 and 20% in Q1 FY27 (21.5% on the company's measure) as the Gurugram hospital filled up and did more complex work. Raipur's start-up losses will show from Q2 FY27.",
        competitors: [{ name: 'Medanta, Fortis and Max', note: 'Large premium hospitals in Gurugram and Delhi competing for the same doctors and patients, including foreign patients.' }, { name: "Rainbow Children's Hospitals", note: "Building a children's hub in Gurugram; Artemis's women-and-children tower is partly a response." }, { name: 'Established Raipur hospitals', note: 'Local and chain hospitals in Raipur, where Artemis is new.' }],
        position: "**One of the leading premium hospitals in Gurugram**, with ARPOB among the highest in Delhi NCR, but a small group overall and a newcomer outside NCR.",
        money: "Screener shows **₹56cr of net debt**. Capex of about ₹800cr is planned over three years (Raipur ₹120cr, South Delhi ₹350–360cr, Tower IV ₹120cr, parking ₹70–80cr and replacements ₹100–120cr), plus a ₹250cr deposit for the South Delhi site, of which ₹130cr is paid. Management says its own cash flow (about ₹150cr a year) plus debt covers these projects. Shareholders approved a share sale (QIP) of up to ₹700cr, which management says is only for buying existing hospitals and is 6–8 months away if it happens. Promoters hold **58.4%**, down from 68.0% in September 2023; most of the fall came from IFC (the World Bank's private-sector arm) converting ₹330cr of convertible debentures into shares in FY26. The MD was paid ₹52.7cr in FY26, ₹44.4cr of it from share options, 1,158 times the median employee.",
        watch: ["Raipur's losses staying near ₹20cr and break-even within 15–18 months.", "Whether the ₹700cr share sale happens, and what it buys.", "International revenue returning to about 30% of the total."],
        charts: hospitalsCharts['Artemis Medicare'],
    },
    {
        company: 'GPT Healthcare (Agilus)',
        inShort: ["**Runs five ILS Hospitals (719 beds)** in Kolkata, Howrah, Agartala and Raipur. The dashboard's ‘(Agilus)’ label is wrong: Agilus is Fortis's unlisted lab business, and this company is a hospital operator.", "**Good:** the four mature hospitals earn a 23% margin, patients pay fast so working capital is negative, it pays out about half its profit, and it raised its FY27 margin guide to about 21%. **Bad:** the new Raipur hospital runs at 17.4% occupancy and loses about ₹3cr a quarter, Agartala and Howrah are well behind their targets, and family pay is about a fifth of profit.", "**Verdict: follow.** Solid old hospitals; I would buy on a weak quarter once Raipur nears break-even; the price only just fits (9 Oct 2026)."],
        tagline: "A family-run chain of mid-sized multi-specialty hospitals in eastern and central India, trading as ILS Hospitals.",
        revenue: '₹473cr (FY26, standalone)',
        products: [
            { name: 'Kolkata hospitals', text: "Salt Lake (85 beds, known for gut and robotic surgery, 800-plus robotic cases), Dum Dum (155 beds, 700-plus kidney transplants) and Howrah (116 beds, robotic knee replacement). Salt Lake and Dum Dum run at 62–65% occupancy." },
            { name: 'Agartala, Tripura', text: "A 205-bed hospital, the only private hospital in Tripura with both main accreditations and the only integrated cancer unit there; occupancy fell to 45.3% in Q1 FY27 as Bangladeshi patients dropped from about 10% of volumes to about 3%." },
            { name: 'Raipur, Chhattisgarh', text: "A 158-bed hospital opened in May 2025 in a leased building; 17.4% occupancy in Q1 FY27, a loss of about ₹3cr a quarter, and break-even expected around January 2027." },
            { name: 'Jamshedpur (under construction)', text: "A 150–155-bed hospital in a leased building costing about ₹75cr, due late in FY27 or early FY28." },
        ],
        revenueText: "Q1 FY27 revenue of ₹126.2cr came from **Dum Dum (32%)**, Agartala (28%), Salt Lake (17%), Howrah (15%) and Raipur (8%). **About 90% of revenue is from patients paying cash or through insurance** (roughly half each), about 5% from companies and about 5% from government schemes, which it deliberately avoids because they pay late and at low rates. Average revenue per occupied bed per day was ₹42,350 in Q1, up 8.8%, before the annual October tariff rise.",
        mixes: [
            { caption: 'Revenue by hospital, Q1 FY27 (company presentation)', parts: [{ label: 'Dum Dum', share: 32 }, { label: 'Agartala', share: 28 }, { label: 'Salt Lake', share: 17 }, { label: 'Howrah', share: 15 }, { label: 'Raipur', share: 8 }] },
            { caption: 'Revenue by payer (company calls)', parts: [{ label: 'Cash and insurance', share: 90 }, { label: 'Companies', share: 5 }, { label: 'Government schemes', share: 5 }], note: 'Approximate shares given by management.' },
        ],
        customers: ["**Patients in Kolkata and Howrah** needing surgery, transplants and specialist care, paying cash or through health insurance.", "**Patients in Tripura and nearby Bangladesh**, for whom Agartala is the main private hospital; Bangladesh visa rules now affect volumes.", "**Patients in Raipur and, later, Jamshedpur**, where it is building a name against newer chains."],
        difficulty: { level: 'High', text: "A hospital needs specialist doctors (115 full-time and 630 visiting), nurses, accreditations and years to build local trust; new hospitals take about 20–24 months to break even. Doctors leave at about 10% a year in Agartala and Raipur." },
        moat: "Being the first corporate hospital in its patch (within about 5 km in Howrah) or the only accredited private one (Tripura) brings steady local patients, and leasing buildings keeps the cost at about ₹70 lakh a bed. The weakness is size: at 719 beds it lacks the referral network and bargaining power of the big chains, and CRISIL calls its scale ‘modest’.",
        salesDrivers: ["**Occupancy**: 45.5% across the network in Q1 FY27 (58.1% without Raipur), against targets of 70–73% at the Kolkata hospitals and about 58% at Agartala.", "**Revenue per bed**: up 8.8% in Q1 from better case mix (50–60% of the gain) before any tariff rise; management guides 7–8% for FY27.", "**New hospitals**: Raipur filling up and Jamshedpur opening; a seventh hospital is needed to reach 1,000 beds ‘over the next 2 years’, but no site is chosen.", "**Guidance**: about 15% revenue growth in FY27 and a margin of about 21% including other income."],
        inputs: "**Doctors, nurses, medicines and consumables.** In FY26 medicines, consumables and goods bought were 19% of sales, hospital and running costs 34% (including fees to visiting doctors), staff 18% and other costs 11%. The new hospitals' buildings are leased from developers.",
        costEffect: "**Mostly insulated.** Medicines and consumables are billed to patients, and tariffs rise with inflation each October; the margin is driven by how full the beds are, since doctors, staff and buildings are largely fixed costs. **Rule of thumb:** a 10% rise in medicine and consumable costs not passed on would cut the margin by about 2 points (18% to 16%). **What happened:** there is no input price index to chart. The operating margin fell from 22% in FY24 to 20% in FY25 and 18% in FY26 (Screener), because Raipur lost ₹13.8cr at the operating level in its first year; the mature hospitals' margin actually rose from 22.1% to 23.1%. Q1 FY27 was 19%.",
        competitors: [{ name: 'Large hospital chains in Kolkata', note: 'Bigger groups with wider referral networks and more specialties compete for the same patients.' }, { name: 'New chains in Raipur', note: 'Other groups are adding beds in Raipur while ILS fills its new hospital; Artemis opened a 300-bed hospital there in July 2026.' }, { name: 'Government hospitals in Tripura', note: 'The main alternative for patients in Agartala.' }],
        position: "**A small regional hospital chain**: the first corporate hospital in its area of Howrah and the only private hospital in Tripura with both NABH and NABL accreditation.",
        money: "Screener shows **₹87cr of net debt**, but ₹75cr of it is lease liabilities (mostly Raipur); bank debt was only ₹16.1cr at March 2026, so excluding leases it has about ₹31cr of net cash. About ₹25cr of new debt will fund Jamshedpur this year. It paid out 49% of FY26 profit as dividends. CRISIL rates it A-. Family members' pay was about ₹8.2cr in FY26, roughly a fifth of profit. Promoters hold **65.6%**, unchanged since listing in 2024.",
        watch: ["Raipur break-even around January 2027.", "Agartala back above 55% occupancy.", "Jamshedpur opening on time."],
        charts: hospitalsCharts['GPT Healthcare (Agilus)'],
    },
    {
        company: 'Narayana Hrudayalaya',
        inShort: ["**Narayana Health began as a low-cost heart hospital and is now a multi-specialty chain in India**, plus a hospital and a health insurer in the Cayman Islands, a UK hospital business bought in FY26, and new clinics and a health insurer in India.", "**Good:** the India hospitals are very profitable and still improving without new beds, and cash generation is strong (91% of operating profit). **Bad:** the UK business earns a thin margin (8.8% in Q1 FY27), both insurers are losing money, the group margin fell to 17% in Q1 FY27, ₹3,000cr of capex is starting while three projects have slipped a year, and ₹1,001cr of its deposits are pledged to lenders.", "**Verdict: wait.** The India business is excellent, but I want to see the UK and insurance bets work before paying for them."],
        tagline: "A hospital group built on affordable, high-volume complex surgery in India, now combining hospitals, clinics and health insurance, with businesses in the Cayman Islands and the UK.",
        revenue: '₹7,896cr (FY26, consolidated)',
        products: [
            { name: 'India hospitals', text: "Multi-specialty hospitals led by a Bengaluru flagship doing large volumes of complex and robotic surgery. India operating profit grew about 40% in Q1 FY27 with no new beds. A 100-bed hospital in south-west Bengaluru is due to open by the end of Q2 FY27." },
            { name: 'India clinics and insurance', text: "Neighbourhood clinics (66,000 consultations in Q1 FY27, up about 30%) whose visits equal about 30% of the hospitals' outpatient numbers; they lost about ₹15cr in the quarter. A small health insurer focused on individuals and small firms had a spike in losses from a few large claims." },
            { name: 'Cayman Islands', text: "A hospital serving local and visiting patients, plus an insurer with a book of about $60m a year. Insurance losses fell from $5.2m in Q4 FY26 to $3.7m in Q1 FY27, and every customer renewed in July despite price increases." },
            { name: 'United Kingdom', text: "A hospital business bought in FY26 as a division of a larger group, about 95% paid by the NHS (the UK state health service). Its margin fell to 8.8% in Q1 FY27 from 10.5% in Q4 after a heatwave broke air-conditioning and cancelled operating days." },
        ],
        revenueText: "The call does not give a revenue split by country, though the UK is reported separately in the results. **Revenue jumped 61–78% year on year in each of the last three quarters**, mainly because the UK business was added. Management says the group's cash has come entirely from the India and Cayman operations, and that the India net margin rose 4 points in a year even after clinic losses.",
        customers: ["**Indian patients** paying cash, through private insurance or government schemes, for heart, cancer and other complex care at affordable prices.", "**Clinic members and insurance policyholders** in India, whom the group steers to its own hospitals.", "**The NHS in the UK and residents and insurers in the Cayman Islands**, plus a growing base of UK private patients and insurers."],
        difficulty: { level: 'High', text: "Its high-volume, low-cost model took many years to build: very large numbers of complex operations give surgeons experience and spread fixed costs. New hospitals need land, approvals and years to fill, and some partner projects have slipped to FY29–FY30 on licensing delays. Copying its low-cost culture abroad is also hard, as the UK shows." },
        moat: "Huge surgical volumes, a reputation for affordable complex care and a feeder network of clinics and insurance in Bengaluru make its India hospitals hard to match. The weakness is the new ventures far from that core: a UK business dependent on the NHS, and small insurance books whose losses swing with a few large claims.",
        salesDrivers: ["**Complex procedures and robotics in India**: more high-end and robotic surgery lifted revenue per bed and margins over the last two to three quarters, and patient numbers also rose.", "**Clinics feeding hospitals**: clinic visits equal about 30% of hospital outpatient numbers; two more clinics open this quarter.", "**New capacity**: ₹3,000cr is committed to projects over the next three to four years (three of six Indian projects moved back a year in August), but apart from the new Bengaluru hospital there are no meaningful new beds for two to three years.", "**UK turnaround**: moving from 95% NHS toward the roughly 70% of its closest peer, which management expects to take four to five years, plus cost savings from standard purchasing and its own software, delayed 4–6 months by UK medical-device certification.", "**Cayman insurance repricing**: July renewals at higher prices should cut losses from Q2 FY27, with a January round to come."],
        inputs: "**Doctors, nurses, medicines and implants.** Medicines and consumables were 19% of sales in FY26, power and hospital running costs 10%, staff 23% and other costs 28%. Fees to doctors are a separate line: ₹327cr in Q1 FY27, about 12% of revenue. Standardising implants and drugs and buying from a few global suppliers is a long-standing cost lever it is now applying in the UK.",
        costEffect: "**Mostly insulated from commodity prices.** The margin moves with case mix, ARPOB (average revenue per occupied bed per day), throughput from existing beds (average stay is 4.3 days, targeted at 3.9–4.0) and the losses of new businesses. **What happened:** the margin rose from 18% in FY22 to 24% in FY24–FY25 as the India hospitals got busier, then fell to 21% in FY26 and 17% in Q1 FY27 as the low-margin UK business was added and insurance and clinic losses grew. Management says India margins are still rising and the group margin should improve from here.",
        competitors: [{ name: 'Apollo, Manipal and Fortis', note: 'Larger Indian chains with higher prices per bed; Narayana competes on cost and volume.' }, { name: 'Spire, Circle, Ramsay and Nuffield (UK)', note: 'Bigger UK private hospital groups with far more private-pay patients.' }, { name: 'Established health insurers', note: 'Much larger Indian insurers that its small insurance arm competes with.' }],
        position: "**A leading Indian hospital chain known for low-cost, high-volume complex surgery**, strongest in Bengaluru, with a growing but still loss-making international and insurance arm.",
        money: "Screener shows **₹3,156cr of net debt**, about 1.8 times operating profit, up sharply after the UK purchase. Management says net debt is still below 1 times operating profit on its own measure, will rise over the next two to three years as projects are built, and should fall by FY30. The company's own net debt was ₹1,967cr at June 2026, and ₹1,001cr of its cash deposits are pledged to lenders, so usable cash is lower than it looks. The £150m UK loan requires promoters to keep at least 51%. The ₹3,000cr pipeline will be funded partly from cash and partly by borrowing. Promoters hold **63.3%**, little changed from 63.9% in September 2023.",
        watch: ["UK losses narrowing after the heatwave and the private-patient share rising.", "Cayman and India insurance losses falling after repricing.", "The group margin recovering from 17% in Q1 FY27."],
        charts: hospitalsCharts['Narayana Hrudayalaya'],
    },
    {
        company: 'Global Health (Medanta)',
        inShort: ["**Medanta runs six large hospitals in Gurugram, Lucknow, Patna, Ranchi, Indore and Noida**, chaired by heart surgeon Dr Naresh Trehan and known for complex surgery and transplants.", "**Good:** an excellent clinical reputation, inpatient volumes up 28% in Q1 FY27, the new Noida hospital close to break-even and very little net debt. **Watch:** a ₹4,850cr programme for about 3,350 more beds is starting, a Pitampura lease adds ₹1,770cr of future payments not yet on the balance sheet, and profit after tax fell 1% in Q1 FY27 as depreciation and interest rose.", "**Verdict: wait.** Excellent hospitals, but the price needs much more growth than I expect."],
        tagline: "A premium hospital group in North and East India, built around its 1,500-bed Gurugram flagship, with fast-growing hospitals in Lucknow and Patna and a new one in Noida.",
        revenue: '₹4,410cr (FY26, consolidated)',
        products: [
            { name: 'Gurugram, Indore and Ranchi (Cluster 1)', text: "The established hospitals: ₹772cr of revenue in Q1 FY27, up 10%, at a 24.1% margin. Gurugram is a 15-year-old, 1,500-bed hospital running quite full; growth comes from extra theatres and cath labs. An 80-bed cancer hospital bought in Indore opens in Q2–Q3 FY27." },
            { name: 'Lucknow and Patna (Cluster 2)', text: "Younger hospitals (Lucknow has about 750 beds) growing revenue 28% at a 32% margin (excluding Noida), driven by patient volumes from eastern UP and Bihar." },
            { name: 'Noida', text: "Opened November 2025 with 14 operating theatres and almost all specialities; income was ₹85.5cr in Q1 FY27 and the operating loss fell from ₹23.6cr to ₹4.9cr." },
            { name: 'Pharmacy and labs', text: "Outpatient pharmacy revenue of ₹61cr in Q1 FY27, up 51%, plus about 13 retail pharmacies and labs near its hospitals." },
        ],
        revenueText: "Q1 FY27 total income was ₹1,326cr, up 26%. **Cluster 1 (Gurugram, Indore, Ranchi) brought in ₹772cr and Cluster 2 (Lucknow, Patna, Noida) ₹498cr**. **International patients** added ₹78cr (up 23%), and **CGHS government patients are only 10–12%** of the business. Management stresses growth comes mostly from more patients rather than price rises.",
        mixes: [
            { caption: 'Income by hospital cluster, Q1 FY27 (company call)', parts: [{ label: 'Cluster 1: Gurugram, Indore, Ranchi', share: 58 }, { label: 'Cluster 2: Lucknow, Patna, Noida', share: 38 }, { label: 'Other (not split out)', share: 4 }] },
        ],
        customers: ["**Patients from North and East India**, including the huge catchments of eastern UP and Bihar, for complex surgery, cancer and transplants.", "**Insured, corporate and PSU patients**, with government-staff schemes (CGHS) at only 10–12%.", "**International patients** (₹78cr in Q1 FY27), who kept coming despite conflict in West Asia."],
        difficulty: { level: 'High', text: "A Medanta-style hospital needs years of approvals and construction and a large team of senior specialists; Noida still took two quarters of losses even with department heads moving from Gurugram. The 650-bed Guwahati project alone will cost about ₹970cr. Its reputation for complex care, built over 15 years, is the hardest part to copy." },
        moat: "A doctor-led brand for complex care and strong senior-doctor retention: it added over 70 doctors, including more than 50 senior clinicians, in Q1 FY27 and reports negligible senior attrition. The weakness is a crowded NCR market and the cost of its next wave of large projects.",
        salesDrivers: ["**Patient volumes**: inpatient volumes rose 28% in Q1 FY27; Lucknow and Patna grow more than 20% a year and Gurugram 7–10%.", "**Noida ramp-up**: occupancy is 30–40% and rising as floors open; break-even is expected sooner than planned.", "**Case mix**: ARPOB (average revenue per occupied bed per day) was ₹70,244, up 5%; it now also reports revenue per patient (about ₹2 lakh) because its stays are short (2.8 days in Cluster 1).", "**New capacity**: about 3,350 beds in the pipeline, including a 650-bed hospital in Guwahati and one in South Delhi, both under construction, plus more theatres and cath labs in existing hospitals.", "**Demand for quality care** in North and Central India as incomes and awareness rise."],
        inputs: "**Doctors, nurses, medicines and implants.** Medicines and consumables were 23% of sales in FY26, power and hospital running costs 4%, staff 25% and other costs 28%. Senior doctors are central to the model; nursing and junior-doctor turnover is high across the industry.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on occupancy, case mix and ARPOB, and start-up losses at new hospitals. Older hospitals carry higher maintenance and legacy staff costs, and Gurugram carries all head-office costs. **What happened:** the margin rose from 21% in FY22 to 24–25% in FY23–FY25, then dipped to 21% in FY26 as Noida opened. With Noida's losses shrinking, Q1 FY27 was 22% on Screener's measure (23.8% on the company's, 25.8% excluding Noida).",
        competitors: [{ name: 'Max Healthcare and Fortis', note: 'Large premium chains in NCR competing for doctors and patients, including in Noida.' }, { name: 'Apollo', note: 'National chain competing across North India.' }, { name: 'Artemis and other Gurugram hospitals', note: 'Gurugram is one of the most crowded premium hospital markets in India.' }],
        position: "**One of India's leading premium hospital groups**, a top name in Gurugram, with fast-growing hospitals in Lucknow and Patna.",
        money: "Screener shows **₹57cr of net debt**; management calls leverage very low. It spent ₹161cr on capex in Q1 FY27 and needs about ₹4,850cr more to finish its announced projects, to be funded from cash flow and debt. On top of that it has signed leases not yet on the balance sheet, chiefly **₹1,770cr of future payments for a Pitampura hospital** (annual report). Company figures showed net cash of ₹591cr at March 2026. Promoters hold **33.0%**, unchanged since 2023.",
        watch: ["Noida reaching operating break-even during FY27.", "Guwahati and South Delhi construction staying on budget.", "Gurugram keeping volume growth as new theatres and cath labs open."],
        charts: hospitalsCharts['Global Health (Medanta)'],
    },
    {
        company: "Dr Agarwal's Health Care",
        inShort: ["**A large eye-care chain with 304 facilities: 285 in 165 Indian cities and 19 in Africa** (June 2026), doing cataract, laser vision and retina surgery and selling spectacles and medicines.", "**Good:** steady 26–29% margins, 14% same-store growth in mature centres, and 87% of operating profit turning into cash. **Watch:** it opens about 60 centres a year, each losing money at first (about ₹30cr of losses from the FY26 batch, and about ₹20cr in Q1 FY27 alone), and is pushing into Delhi NCR and Mumbai, where it is less known; net cash fell to ₹62cr, promoter shares up to 11.9% of the company are pledged for its loan, and a ₹333cr buyout of Thind Eye Care may fall due.", "**Verdict: wait.** A fine business, but the price needs far more growth than I expect."],
        tagline: "An eye-care chain running surgical eye hospitals and small clinics across India and in Africa, growing mainly by opening new centres itself.",
        revenue: '₹2,080cr (FY26, consolidated)',
        products: [
            { name: 'Cataract surgery', text: "About 73% of its 3.23 lakh surgeries in FY26. A rising share (26.3%) are premium procedures such as robotic 'femto' cataract surgery, which grew 87% to over 5,900." },
            { name: 'Refractive surgery', text: "Laser surgery to remove the need for glasses (about 5% of surgeries). Overall growth has been slow, but the premium SMILE procedure grew 19%." },
            { name: 'Retina, cornea and other surgery', text: "Over 12,800 retina operations (up 23%) and more than 1,150 corneal transplants in FY26." },
            { name: 'Consultations, spectacles and pharmacy', text: "Eye tests and consultations (12% of revenue) bring patients in, and spectacles and medicines sold in its centres add 21%. About 10,000 people walk in every day, up 25% in a year." },
        ],
        revenueText: "**Surgery is 67% of revenue**, spectacles and pharmacy 21% and consultations 12%. By region, **South India is 61%** (₹1,273cr), West India 16%, North India 9% and Africa about 10%. **Cash patients pay 62%**, insurance 29% and government schemes 9% (in India alone, 72% cash). Mature centres grew 14% in FY26: half from more patients and half from pricier procedures and price rises.",
        mixes: [
            { caption: 'Revenue by service, FY26 (company call)', parts: [{ label: 'Surgery', share: 67 }, { label: 'Spectacles and pharmacy', share: 21 }, { label: 'Consultations and tests', share: 12 }] },
            { caption: 'Revenue by region, FY26 (company call)', parts: [{ label: 'South India', share: 61 }, { label: 'West India', share: 16 }, { label: 'Africa', share: 10 }, { label: 'North India', share: 9 }, { label: 'Other (not split out)', share: 4 }] },
        ],
        customers: ["**Indian patients paying cash** (72% of India revenue), many of them older people needing cataract surgery, plus younger people seeking laser vision correction.", "**Insurers and third-party administrators** (22% in India) and government schemes (6%).", "**Patients at its 19 African centres**, about 10% of revenue."],
        difficulty: { level: 'Medium', text: "One eye clinic is simple to open, but a national network needs more than 1,000 doctors, trained optometrists (it runs its own optometry schools and three postgraduate training centres) and a clinical licence for every site. Management says finding the right property with the right licences is its main bottleneck, and new centres lose money for their first year or two." },
        moat: "Scale, a trusted brand where it is market leader (Tamil Nadu and Telangana), its own training pipeline and a clinical board that sets common standards across the network. The weakness is a weaker brand in North and West India and the risk that eye surgeons leave with their patients.",
        salesDrivers: ["**New centres**: 60 planned in FY27 (40 surgical, 20 clinics), all self-built: 24 in the South, 16 in the North (mainly Delhi NCR) and 15 in the West (Mumbai, rest of Maharashtra, Gujarat). A record 18 opened in Q1 FY27, with 12 planned for Q2 and 30 for the second half; 30 more sites have letters of intent.", "**Same-store growth**: mature centres grew 14% in FY26, from more walk-ins (about 5.5%), more patients choosing surgery, premium procedures (about 5.5%) and price rises (about 1.5%).", "**Premium procedures**: robotic cataract and SMILE laser surgery lift revenue per patient.", "**Chennai flagship**: a new main hospital in Chennai targeted to open around 1 October 2026 after approval delays; it was not mentioned on the Q1 FY27 call.", "**Guidance**: growth similar to FY26 (about 21–22%) with stable margins."],
        inputs: "**Eye surgeons, staff, lenses and rent.** Doctor and staff costs together were about 33% of revenue in FY26 and other expenses 16.6%. In the filed split, medicines and consumables were 9% of sales, power and hospital running costs 18%, staff 19% and other costs 26%. Paramedical staff turnover runs at 21–25% a year, with pay rises of 9.5–10%.",
        costEffect: "**Mostly insulated from commodity prices.** Lenses and drugs are a small cost and priced into surgery packages. The margin moves with how busy each centre is, the shift to premium procedures, doctor and staff pay, and losses at new centres: about ₹30cr in FY26 (₹21cr in FY25), with a similar drag expected in FY27. **What happened:** the margin has been remarkably steady at 27–28% every year from FY22 to FY26 (Q4 FY26 was 30.2%, a seasonal peak), because profits from maturing centres have covered the losses of new ones.",
        competitors: [{ name: 'ASG Eye Hospitals, Centre for Sight and Maxivision', note: 'Private eye-hospital chains, several backed by private equity, expanding in the same cities.' }, { name: 'Sankara Nethralaya and Aravind', note: 'Large, highly regarded not-for-profit eye hospitals in South India.' }, { name: 'Lenskart and optical shops', note: 'Compete for spectacle sales, about a fifth of revenue.' }],
        position: "**One of India's largest eye-care chains**, market leader in Tamil Nadu and Telangana, and still building its name in North and West India.",
        money: "Screener shows **₹785cr of net debt**, which probably includes lease obligations on rented centres; the company repaid ₹195cr of loans from its IPO money and says cash from operations was about 84% of operating profit in FY26. FY27 capex is ₹380–400cr, including the Chennai hospital, plus ₹60–65cr of deferred payments for past acquisitions (about ₹60cr more over FY28–FY30). On its own figures, excluding leases, it had net cash of ₹62cr at June 2026, down from ₹278cr a year earlier. Two items sit outside that: promoters have **pledged shares up to 11.9% of the company** to secure an ICICI Bank loan, and a written option lets Dr Thind sell the remaining 49% of Thind Eye Care to the company for **₹333cr**, which ICRA expects after FY29. The merger with its listed subsidiary, Dr Agarwal's Eye Hospital, is expected to complete around mid-November 2026. Promoters hold **32.3%**, little changed from 32.5% in March 2025. Its private-equity backers are selling: TPG and Temasek sold 12.6% in block deals for about ₹2,008cr (about ₹501 a share) on 12 August 2026, mostly to Indian and foreign funds, and still hold about 20.6% between them, so more selling may follow.",
        watch: ["New-centre losses for FY27 (about ₹20cr in Q1 alone, against ₹30–40cr guided for the year).", "Delhi NCR and Mumbai centres building patient numbers.", "The Chennai flagship opening and the subsidiary merger closing.", "The promoter pledge and the ₹333cr Thind Eye Care option."],
        charts: hospitalsCharts["Dr Agarwal's Health Care"],
    },
    {
        company: 'HealthCare Global (HCG)',
        inShort: ["**India's largest cancer-only hospital chain: 26 hospitals (25 in India plus Nairobi) in 19 cities**, with about 2,850 operating beds and 38 radiotherapy machines. KKR has controlled it since May 2025.", "**Good:** its four biggest hospitals earn 26% margins, the new management is dropping low-paying work, the adjusted margin rose 1.2 points to 19.4% in Q1 FY27 and interest costs are falling. **Bad:** prices barely rise (revenue per patient up 2%, a third of patients on government schemes, central-government price caps cost about 1.5% of revenue); about ₹130cr a year of rent sits below the EBITDA line, so free cash after rent was negative in FY26; group return on capital is 8%; the fertility arm Milann was sold to a fund controlled by the chairman; and 64 lakh new options were granted below the market price, vesting early on a change of control.", "**Verdict: wait.** A good cancer franchise that is improving, but the price already assumes years of margin recovery."],
        tagline: "A chain of cancer hospitals offering chemotherapy, radiation and cancer surgery under one roof, mostly in South and West India, with one hospital in Kenya.",
        revenue: '₹2,538cr (FY26, consolidated)',
        products: [
            { name: 'Medical oncology', text: "Chemotherapy, immunotherapy, bone-marrow transplants and CAR-T (a cell therapy that re-engineers the patient's own immune cells): about 39% of revenue. Each chemo cycle is a separate visit, so patients return for months." },
            { name: 'Surgical oncology', text: "Cancer surgery, about 21% of revenue in Q1 FY27, using 11 surgical robots and 105 operating theatres." },
            { name: 'Radiation oncology', text: "About 14% of revenue from 38 linear accelerators (LINACs, the radiotherapy machines), including an MR-Linac at the new North Bangalore hospital, commissioned in July 2026. Some machines are rented on pay-per-use terms rather than owned." },
            { name: 'Other care and Kenya', text: "Outpatient visits, scans and tests (15%) and general medicine at four multi-speciality hospitals (11%). A hospital in Nairobi, Kenya, earned ₹74cr in FY26, 2.9% of revenue. The Milann fertility clinics (₹60cr in FY26) were sold in June 2026." },
        ],
        revenueText: "By region in FY26, **West India (Gujarat, Mumbai and others) brought in ₹1,133cr (45%)**, South India ₹995cr (39%), East India ₹283cr (11%), Kenya ₹74cr and Milann ₹60cr. Q1 FY27 revenue was ₹695cr, up 13%; management says discontinued low-margin chemo drugs and central-government (CGHS) price caps took about 1.5 points off growth. In India, **cash patients pay 41%**, insurers and companies 25%, government schemes 31% and foreign patients 3%. HCG no longer reports occupancy or revenue per filled bed; CARE puts its ARPOB at about ₹45,000, among the lowest in this note, and occupancy at about 69%.",
        mixes: [
            { caption: 'Revenue by region, FY26 (annual report)', parts: [{ label: 'West India', share: 45 }, { label: 'South India', share: 39 }, { label: 'East India', share: 11 }, { label: 'Kenya', share: 3 }, { label: 'Milann (sold)', share: 2 }] },
            { caption: 'India revenue by payer, Q1 FY27 (company presentation)', parts: [{ label: 'Cash', share: 41 }, { label: 'Government schemes', share: 31 }, { label: 'Insurance and companies', share: 25 }, { label: 'Foreign patients', share: 3 }], note: 'Excludes Kenya and fertility.' },
        ],
        customers: ["**Cancer patients paying cash or through private insurance** (two-thirds of India revenue), who usually stay with one hospital for months of treatment.", "**Government schemes** (about 31%), which pay lower fixed rates; CGHS price caps cut Q1 FY27 revenue by about 1.5% together with dropped low-margin drugs, and a Supreme Court case could cap prices further.", "**Foreign patients** (about 3%), hit by the Middle East conflict, and patients at its Nairobi hospital."],
        difficulty: { level: 'High', text: "A cancer hospital needs radiation bunkers and licences, costly machines and full-time teams of oncologists for each organ. North Bangalore cost about ₹129cr for up to 132 beds (about ₹1cr a bed) and lost ₹7cr in its first full quarter; adding beds to existing hospitals costs about ₹45 lakh each. Apollo, Manipal and Narayana are all investing in cancer care, so the know-how is not unique." },
        moat: "The best-known cancer brand in India, a 35-year record, a network-wide tumour board that has discussed more than 36,000 cases, 88% doctor retention, and patients who rarely switch hospital mid-treatment. The weakness is pricing: revenue per patient rises only 2–3% a year, below medical inflation, and margins (18%) are below most multi-speciality chains despite cancer's premium image.",
        salesDrivers: ["**Filling built beds**: about 400 beds are built but not yet in use, and centre utilisation was 58% in FY26 (South 68%, West 50%, East 57%); management says existing hospitals can run at 75–80%.", "**North Bangalore**: 56 beds open, ₹6.7cr of revenue and a ₹7cr operating loss in Q1 FY27; management says the loss has peaked and expects monthly break-even this year.", "**More beds, more slowly than promised**: +188 beds in FY27, +520 in FY28–29 and +230 in FY30, to about 3,670. In Q1 it added Ranchi (26), Borivali (19), Nashik (8), Hubli (5) and Kenya (7), but Cuttack (75) and Vizag (50), promised within 24 months in May, are now placed in FY28–29, and the Whitefield hospital in Bangalore slipped about a year to end-FY28. Beds grow only about 8% a year.", "**Better mix**: cash, insurance and foreign patients rose from 67% to 69% of India revenue in a year as low-margin scheme work was cut.", "**Guidance**: 'mid-teens' revenue growth in the medium term; Q1 FY27 was 13%, and the Milann sale takes about 2.5 points off reported growth from Q2."],
        inputs: "**Doctors, medicines and machines.** Most oncologists are paid as consultants, not staff: consultancy fees were ₹549cr in FY26 (21.6% of revenue), against staff costs of about 15%. In the filed split, medicines and consumables were 27% of sales, power and hospital running costs (which appear to include doctors' fees) 29%, staff 15% and other costs 10%.",
        costEffect: "**Mostly insulated from commodity prices.** Cancer drugs are costly but billed to patients. The margin moves with how full the hospitals are, payer mix, government price caps and losses at new hospitals. **Rent sits below the EBITDA line**: under accounting rules, about ₹170cr of lease interest and depreciation in FY26 (₹131cr in cash) is not counted in operating profit, so on the older basis that deducts rent, FY26 EBITDA was about ₹330–345cr, not Screener's ₹459cr. **What happened:** the margin has stayed in a narrow 17–18% band from FY22 to FY26. Q1 FY27 was 17.6% reported, flat on a year earlier; the 19.4% 'adjusted' figure leaves out the North Bangalore loss and a ₹4.6cr customs-duty provision. Management targets 21–22% in two years and 24–25% in four to five.",
        competitors: [{ name: 'Apollo Cancer Centres', note: 'Apollo is investing heavily in cancer care, including proton therapy, in the same southern cities.' }, { name: 'Manipal, Narayana and other multi-speciality chains', note: 'Adding cancer wings and radiation machines inside general hospitals; management answers with clinical depth and its long record.' }, { name: 'Government cancer hospitals', note: 'Tata Memorial and state cancer institutes treat large numbers at low prices, and government schemes set the rates for a third of HCG patients.' }],
        position: "**India's largest listed cancer-only chain**, top three in 16 of its 19 markets by its own estimate, but its ARPOB (about ₹45,000) ranks with Shalby and GPT, far below Jupiter, Medanta and Artemis.",
        money: "Screener shows **₹1,194cr of net debt** at March 2026, about 2.6 times operating profit; ₹825cr of that is lease liabilities. The company quotes 1.4 times only by leaving leases out (₹493cr after the April payment for the Vizag stake). A ₹425cr rights issue at ₹512 in March 2026 repaid ₹170cr of debt and paid ₹150cr toward buying 34% more of the Vizag hospital (HCG now owns 85%, and the sellers can make it buy the rest). After ₹131cr of lease payments, **FY26 free cash flow was about −₹72cr**. Capex is about ₹150cr for beds in FY27 plus ₹100cr a year of maintenance. Governance after the takeover is mixed: **Milann went to Inviga Healthcare Fund I, controlled by the founder and chairman Dr B.S. Ajaikumar**, at about one times sales after a ₹31.9cr write-down, and the call described it only as a 'competitive sale process'; HCG paid ₹58cr in cash to buy back staff options (₹17.1cr to the former CEO), charged to equity so it never touched profit; and **64.47 lakh options were granted on 9 September 2026 at ₹495, below the market price**, exercisable early on a change of control. The regulator suspended the Bangalore flagship's ethics committee from approving new clinical trials for 24 months, the CFO post changed hands three times in nine months, and contingent liabilities are ₹103cr (₹76cr of customs duty). KKR (Hector Asia) holds **54.3%** and the founder 9.3% (promoters 64.2%); there is no pledge, but KKR's acquisition loan bars it from selling, and a private-equity owner will sell within a few years.",
        watch: ["The Q2 FY27 reported (not adjusted) margin and the first charge for the new options.", "North Bangalore reaching monthly break-even this year, and Whitefield, Cuttack and Vizag keeping their new dates.", "Government-scheme exposure and any Supreme Court or government move to cap hospital prices.", "How KKR sells, given the options' change-of-control clause."],
        charts: hospitalsCharts['HealthCare Global (HCG)'],
    },
    {
        company: 'Krishna Inst.Medi',
        inShort: ["**KIMS runs multi-specialty hospitals in Telangana and Andhra Pradesh** and has recently opened or bought hospitals in Bengaluru, Kerala and Maharashtra (Nagpur, Nashik, Sangli, Thane).", "**Good:** its home-state hospitals are highly profitable (30–35% margins in Telangana) and a new, larger Kondapur hospital in Hyderabad has started strongly. **Bad:** new hospitals have pulled the group margin from 32% in FY22 to about 20%, net debt reached about 5 times operating profit before a ₹1,500cr share sale cut it, profit fell 56% in Q1 FY27, and the founder has pledged shares for ₹750cr of personal loans.", "**Verdict: wait.** I want to see the new hospitals break even and debt keep falling."],
        tagline: "A South Indian hospital chain, strong in Hyderabad and Andhra Pradesh, now expanding into Bengaluru, Kerala and Maharashtra.",
        revenue: '₹3,905cr (FY26, consolidated)',
        products: [
            { name: 'Telangana', text: "Its most mature cluster (Secunderabad, Kondapur, Sunshine and others), earning 30–35% margins. The new Kondapur hospital took its first patient on 20 June 2026 and did ₹45cr in July against ₹32–33cr a month before; management sees ₹1,200cr a year within four to five years." },
            { name: 'Andhra Pradesh', text: "Hospitals in Vizag, Rajahmundry and other cities, growing steadily, with cancer services recently added in most of them; a new hospital is being built in Rajahmundry." },
            { name: 'Bengaluru', text: "Two new hospitals: Mahadevapura broke even in June after under seven months, and Electronic City should break even by the end of FY27. ARPOB is over ₹90,000, expected to settle at ₹80,000–85,000." },
            { name: 'Maharashtra', text: "Nagpur (₹30cr of revenue in July), Nashik (now at break-even), Sangli and Thane (₹21cr in July at a 10% margin after slow insurance tie-ups)." },
            { name: 'Kerala', text: "Three hospitals, including Palakkad opened last quarter, with Thrissur due in three to four months. Single-digit margins now; management expects mid-teens next year and 20–22% in two to three years." },
        ],
        revenueText: "Q1 FY27 revenue from operations was ₹1,180cr, up 35%, with inpatient volumes up 26.6% and ARPOB up 9.7%. The presentation splits it by state: **Telangana ₹624cr at a 29.5% margin**, Andhra Pradesh ₹263cr (21.3%), Maharashtra ₹150cr (7.5%), Kerala ₹78cr (9.7%) and Karnataka ₹81cr (a loss). Telangana is 52% of revenue but 77% of operating profit. Payers were **cash 52%, insurance 32%, corporate 12%** and the Andhra state scheme 4%. Management says revenue per patient is a better guide than ARPOB, which swings with length of stay.",
        customers: ["**Patients in Telangana and Andhra Pradesh** paying cash, through insurance or through state government schemes.", "**Insurance companies**, whose tie-ups with new hospitals were delayed last year as insurers moved to common empanelment (joint price negotiation); about half are now in place for the four newest hospitals, with the key ones due by September.", "**Patients in new markets** (Bengaluru, Kerala, Maharashtra), where KIMS is still building its name."],
        difficulty: { level: 'High', text: "Each new hospital needs land, construction, specialist doctors and insurance tie-ups. In Maharashtra, doctors often run their own nursing homes and join a corporate hospital part-time first, so hospitals there take 18–24 months to settle, as Nagpur did. KIMS's move into three new states shows how much money and time this takes." },
        moat: "Scale and reputation in Hyderabad and Andhra, where mature hospitals earn 30–35% margins, and a proven ability to do very complex work (lung transplants) in newly opened hospitals. The weakness is a weaker brand and less doctor loyalty outside its home states.",
        salesDrivers: ["**New hospitals maturing**: the priority for the next three quarters is getting last year's new hospitals to break even and then to high single-digit or low double-digit margins; the Bengaluru cluster aims for zero operating loss in FY27.", "**Kondapur**: more space lets it add cancer care and transplants it could not offer before.", "**Occupancy**: the Telangana cluster is about 61% full excluding new and renovation beds; management targets about 70% by FY30, when it thinks group margins could return to about 30%.", "**Prices**: management guides ARPOB (average revenue per occupied bed per day) growth of only 4–5% a year.", "**Asset-light deals**: operate-and-manage agreements for a 300-bed hospital near Kondapur and one in Kakinada earn a share of revenue, with an option to buy later."],
        inputs: "**Doctors, nurses, medicines and consumables.** Running costs, including medicines and doctors' fees, were 58% of sales in FY26 and staff 18%; the filing does not split running costs further. The old Kondapur hospital still costs about ₹90 lakh a month in rent, plus running costs, until it closes in about six months.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on how full hospitals are, ARPOB, payer mix and, above all, the start-up losses of the many hospitals opened in the last two years. **What happened:** the margin fell from 32% in FY22 to 26% in FY24–FY25 and 21% in FY26, and has been 19–20% in recent quarters, as new hospitals in Bengaluru, Maharashtra and Kerala lost money and insurance tie-ups were delayed. Telangana still earned about 31% in FY25 and FY26.",
        competitors: [{ name: 'Apollo, Yashoda, AIG and Care Hospitals', note: 'Big rivals in Hyderabad, its home market.' }, { name: 'Manipal and Aster', note: 'Strong in Bengaluru and Kerala, where KIMS is new.' }, { name: 'Jupiter (Thane) and doctor-owned nursing homes', note: 'Established competition in its Maharashtra markets.' }],
        position: "**A leading hospital chain in Telangana and Andhra Pradesh**, still a newcomer in Bengaluru, Kerala and Maharashtra.",
        money: "Screener shows **₹4,075cr of net debt** at March 2026, about 5 times operating profit. Since then KIMS raised ₹1,500cr from institutions (QIP) and repaid ₹1,125cr of loans; the company says debt fell from ₹3,250cr in March to about ₹2,400cr by early July, with ₹505cr of cash, so net debt is now roughly ₹1,900cr (my calculation, a little over 2 times operating profit). Promoters are putting in ₹600cr through new shares (25% now, the rest within 18 months). Maintenance capex is about ₹100cr a year, plus ₹100–125cr in the next nine months; spare cash will go to new projects rather than paying down debt. Promoters hold **32.5%**, down from 38.9% in September 2023; minority partners take 10–15% of profit. CRISIL reports that founder Dr Bhaskara Rao **pledged shares for ₹750cr of personal loans**, ₹400cr to repay family loans and ₹350cr for loans to promoter-owned companies and investments; 13.3% of his shares were pledged at June 2026.",
        watch: ["Thane and Electronic City breaking even, and insurance tie-ups completing.", "Kondapur ramping toward ₹100cr a month.", "Interest costs falling from Q2 FY27 after the debt repayment.", "The founder's share pledge shrinking, and the margin staying above CRISIL's 19–20% review level."],
        charts: hospitalsCharts['Krishna Inst.Medi'],
    },
    {
        company: 'Shalby',
        inShort: ["**Shalby runs hospitals, mainly in Gujarat, known for joint replacements**, and owns an implant business selling knee and other joint implants in India and the US.", "**Good:** hospital occupancy is rising and the loss-making Gurugram hospital has finally broken even. **Bad:** return on capital is only about 6–7%, almost no operating profit turned into cash in FY25–FY26, net debt is about 3.6 times operating profit, ICRA cut its rating in July, and it is discussing a new Mumbai hospital while promising minimal capex.", "**Verdict: pass.** Too much capital earns too little, and the implant business keeps absorbing cash."],
        tagline: "A hospital chain based in Gujarat, with units in Punjab, Madhya Pradesh and Gurugram, plus Shalby MedTech, a maker and seller of orthopaedic implants in India and the US.",
        revenue: '₹1,141cr (FY26, consolidated)',
        products: [
            { name: 'Hospitals (standalone)', text: "₹259cr of revenue in Q1 FY27, up 7%, at an 18.4% margin (21.6% a year earlier). Krishna, Naroda and Mohali are growing about 30%; Surat and Indore are underperforming and need new doctors." },
            { name: 'Shalby International, Gurugram', text: "A bought hospital earning ₹91,326 per filled bed per day, with 42% of revenue from foreign patients. Revenue was ₹26.2cr in Q1 FY27 and it made its first positive operating margin (7%) at about 24% occupancy." },
            { name: 'Shalby MedTech (implants)', text: "Joint-replacement implants made and sold in India and through a US subsidiary. Revenue was about ₹47cr in Q1 FY27, up 53%, with India roughly doubling and US sales flat; operating profit was barely above zero." },
            { name: 'New services', text: "Radiation-therapy bunkers started working in Q1 FY27, and kidney, liver and bone-marrow transplant teams are being added; 47 transplants were reported on the Q1 call." },
        ],
        revenueText: "Q1 FY27 consolidated revenue was ₹338.6cr: **standalone hospitals ₹259cr (about 76%)**, **MedTech about ₹47cr (14%)** and **Gurugram ₹26cr (8%)**. Hospital payers were **30% self-pay, 38% insurance and 32% government**, up from 24% government a year earlier, which pulled ARPOB down to ₹44,711 from ₹45,673. Foreign patients brought in about ₹13cr across the group.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company call)', parts: [{ label: 'Standalone hospitals', share: 76 }, { label: 'MedTech implants', share: 14 }, { label: 'Gurugram hospital', share: 8 }, { label: 'Other', share: 2 }], note: 'Other is the remainder after the three businesses named on the call.' },
            { caption: 'Hospital revenue by payer, Q1 FY27 (company call)', parts: [{ label: 'Insurance', share: 38 }, { label: 'Government schemes', share: 32 }, { label: 'Self-pay', share: 30 }] },
        ],
        customers: ["**Patients needing joint replacements and other surgery** in Gujarat, Punjab and Madhya Pradesh, a third of them now under government schemes.", "**International patients** at Gurugram and other units (about ₹13cr in Q1 FY27).", "**Hospitals and surgeons in India and the US** buying its implants."],
        difficulty: { level: 'Medium', text: "Hospitals in mid-sized cities are easier to build than metro flagships, but Shalby must keep recruiting surgeons, and management says a new doctor takes about a quarter to become profitable. Implants need US FDA and other approvals, and management says any change takes 6–12 months; the US business is tiny next to global rivals." },
        moat: "A long record in joint replacements in Gujarat and its own implant brand. The moat looks weak: rising government business is lowering prices per bed, US implant sales are flat, and group returns are poor.",
        salesDrivers: ["**Hospital occupancy**: occupied beds rose 9.8% to 701 and occupancy to about 51%; newly hired doctors should add revenue from Q2 FY27.", "**Insurance rate renewals**: management hopes renewals with insurers and TPAs will lift hospital revenue by 5–7%.", "**Gurugram**: occupancy targeted at 30%-plus by Q3–Q4 FY27 and profit before tax at break-even by Q4.", "**MedTech in India**: Indian implant sales roughly doubled in a year, while US sales are flat.", "**Cancer and transplants**: new radiation bunkers and transplant teams at several hospitals."],
        inputs: "**Doctors, nurses, medicines and implants.** In the FY26 filed split, medicines and consumables were 13% of sales and running costs, including medicines and doctors' fees, 49%, with staff 16% and other costs 9%. The implant business carries large stocks, which management says it is working to cut.",
        costEffect: "**Mostly insulated from commodity prices** in the hospitals; the implant business is more exposed to materials and the rupee-dollar rate. Hospital margins move with occupancy, ARPOB (average revenue per occupied bed per day), payer mix and new-doctor costs; the rise in government patients to 32% cut ARPOB. **What happened:** the group margin was 17–19% in FY22–FY24, then fell to 12–13% in FY25–FY26 as the Gurugram hospital (loss-making until Q1 FY27) and the implant business weighed on profits; it was 13% in Q1 FY27. Management targets about 20% for the standalone hospitals in FY27 and MedTech savings of ₹3cr a month now and another ₹3cr by Q4.",
        competitors: [{ name: 'Apollo, Zydus and Sterling', note: 'Larger multi-specialty hospitals in Ahmedabad and other Gujarat cities.' }, { name: 'Zimmer Biomet, Stryker, Smith & Nephew and J&J (DePuy)', note: 'Global implant makers that dominate the knee and hip market in the US and India.' }, { name: 'Meril and other Indian implant makers', note: 'Low-cost domestic rivals in India.' }],
        position: "**A mid-sized regional hospital chain with a strong name in joint replacement in Gujarat**, and a small player in the global implant market.",
        money: "Screener shows **₹511cr of net debt**, about 3.6 times operating profit; the company puts it at about ₹463cr, of which only about ₹55cr sits in the hospital business, so the rest is in MedTech and other subsidiaries. Cash from operations was negative ₹4cr in FY25 and zero in FY26; on average only 14% of operating profit became cash over five years. ICRA cut its credit rating from A+ to A in July (outlook stable). Management says capex will be minimal and targets a return on capital of 11–13% within one to two years (about 7% now), yet its FY26 annual report describes a 175-plus-bed hospital in Santacruz, Mumbai, with **estimated capex of ₹300cr**, run with a trust on a revenue share, with funding not yet decided. The implant arm holds ₹337cr of stock, about 651 days of sales. Promoters hold **74.3%**, little changed.",
        watch: ["The standalone hospital margin getting back toward 20%.", "MedTech reaching a double-digit margin and cutting inventory.", "Whether the Mumbai hospital goes ahead, and how it is paid for."],
        charts: hospitalsCharts['Shalby'],
    },
    {
        "company": "Gaudium IVF",
        "segment": "Single-speciality chains — children, mothers, eyes and cancer",
        "inShort": [
            "**A Delhi-based chain of IVF (fertility) clinics** with 8 hubs and 28 smaller centres in 9 states, plus a pharmacy business selling fertility drugs and a small women's hospital business.",
            "**Good:** high reported success rates, a plan funded by IPO money to add 19 hubs, and a fast-growing, underserved market. **Bad:** customers owed it **₹53cr at March 2026, about half a year's revenue**, which is odd for a clinic where patients pay upfront; only 35% of five years' operating profit came through as cash; ₹34cr of tax demands and a ₹29cr IPO-adviser claim are disputed; Q1 profit fell 42%.",
            "**Verdict: avoid.** The receivables and cash record do not fit a cash-paid clinic business, and I would need them explained and fixed first."
        ],
        "tagline": "An IVF clinic chain founded by Dr Manika Khanna, with hubs in Delhi, Mumbai, Bengaluru, Patna, Ludhiana and Srinagar, and a fertility-pharmacy subsidiary.",
        "revenue": "₹104cr (FY26, consolidated)",
        "products": [
            {
                "name": "IVF treatment",
                "text": "Fertility treatment packages starting at about ₹2 lakh (average ₹3.5 lakh a patient), egg and embryo freezing and related surgery; 64% of FY26 revenue. It reports a 62% first-attempt pregnancy rate and uses two AI tools (SiD and ERICA) for sperm and embryo selection."
            },
            {
                "name": "Pharmacy",
                "text": "Fertility drugs and consumables sold to its patients through the subsidiary Gaudium International; 31% of FY26 revenue, at a lower margin (standalone FY26 margin 48% against 36% consolidated)."
            },
            {
                "name": "Hospital and women’s health",
                "text": "Gynaecology, obstetrics and keyhole surgery; 4% of revenue. A women's hospital in Lucknow (up to ₹15cr) is planned for FY28–FY29."
            }
        ],
        "revenueText": "**IVF was 64% of FY26 consolidated revenue, pharmacy 31% and hospital services 4%.** International patients are about 25–30% of patients. Q1 and Q3 are seasonally weak (summer heat and festivals); Q2 and Q4 are strong. Revenue grew 46% in FY26 but only 9% in Q1 FY27.",
        "mixes": [
            {
                "caption": "Revenue by service, FY26 (annual report)",
                "parts": [
                    {
                        "label": "IVF treatment",
                        "share": 64.4
                    },
                    {
                        "label": "Pharmacy",
                        "share": 31.4
                    },
                    {
                        "label": "Hospital",
                        "share": 4.2
                    }
                ]
            }
        ],
        "customers": [
            "**Couples paying for fertility treatment**, in packages often paid in instalments; about 70% of the package is meant to be collected by egg retrieval.",
            "**International patients** (25–30%), with referral spokes in Paris, Nigeria and Sydney.",
            "**Tier 2 and 3 patients** financed through an HDFC Bank loan tie-up."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "IVF needs trained embryologists, clean labs and a good success record, and rules under the ART Act are raising the bar. But many clinics and much larger chains compete, and a new hub costs only about ₹2.5cr."
        },
        "moat": "A known brand in Delhi with a doctor-led, standardised process and early use of AI embryology tools. Larger, better-funded chains compete in every city, and the company is still small.",
        "salesDrivers": [
            "**New hubs**: 10 in FY27, 8 in FY28 and 1 in FY29 from IPO money; each is said to break even in about three months.",
            "**Market growth**: about 27.5 million infertile couples but only about 3 lakh IVF cycles a year in India.",
            "**Regulation**: the ART Act should squeeze small unregistered clinics as states implement it, over about another year.",
            "**Medical tourism**: IVF in India costs about a fifth of the US price.",
            "**Season**: Q2 and Q4 are the strong quarters."
        ],
        "inputs": "**Doctors, embryologists and nurses, fertility drugs and lab consumables, and rented clinic space.** Q1 FY27 included ₹2.5cr of one-time marketing for the AI tools.",
        "costEffect": "**Prices are set package by package, so costs are a matter of mix and scale rather than input prices.** The margin depends on how full the hubs are and on marketing: the consolidated operating margin was 41% in FY24–FY25, 36% in FY26 and 12.5% in Q1 FY27 as new hubs and marketing were paid for ahead of revenue.",
        "competitors": [
            {
                "name": "Indira IVF",
                "note": "India’s largest IVF chain, with far more centres."
            },
            {
                "name": "Nova IVF and Birla Fertility & IVF",
                "note": "Large, well-funded national chains."
            },
            {
                "name": "Small local clinics",
                "note": "About 70% of the market is unorganised, according to management."
            }
        ],
        "position": "**A small, listed IVF chain** with 8 hubs and 28 spokes; management calls it the first IVF company listed in India.",
        "money": "Borrowings were ₹25cr at March 2026 against **₹81cr of IPO money in fixed deposits**; at June cash was ₹8cr against ₹6.7cr of loans (deposits not stated). **Over FY22–FY26 it turned ₹120cr of operating profit into ₹42cr of operating cash.** **Trade receivables were ₹53cr (consolidated) at March 2026**, up from ₹33cr, about 187 days of sales; in the standalone books ₹21cr was over a year old. Income-tax demands of ₹34cr are under appeal, and an IPO adviser claims ₹29cr in arbitration. Promoters hold **71.29%**.",
        "watch": [
            "Receivables falling and operating cash rising in line with profit.",
            "The tax appeals and the Neomile arbitration.",
            "Q2 and H2 revenue against the 30% growth guidance."
        ],
        charts: hospitalsCharts["Gaudium IVF"],
    },
    {
        "company": "Park Medi World",
        "segment": "Regional chains — a few big hospitals in one region",
        "inShort": [
            "**A north Indian hospital chain** (Park Hospitals) with 3,960 beds in six north Indian states (Uttarakhand was added in 2026), treating mostly government-scheme patients at affordable prices.",
            "**Good:** a 27% operating margin, revenue up 19% and profit 35% in Q1 FY27, a low cost per bed (about ₹36–37 lakh, which it says is the lowest among listed peers), almost no term debt, and clear guidance to 5,740 beds by FY28. **Bad:** 77% of revenue comes from government schemes, so customers take about 129 days to pay; occupancy fell to 56% as beds were added; growth now depends on buying hospitals; promoters must sell about 8% by 2028.",
            "**Verdict: follow.** A well-run, cash-generating chain at about 35 times earnings with 24% guided growth; I would buy on evidence that the acquired hospitals fill up and the payer mix shifts."
        ],
        "tagline": "A Delhi-NCR and Punjab-focused hospital group founded by Dr Ajit Gupta, offering super-speciality care at low prices, largely to government-scheme patients.",
        "revenue": "₹1,679cr (FY26, consolidated)",
        "products": [
            {
                "name": "Super-speciality hospitals",
                "text": "About 17 units with 3,960 beds at June 2026, including Gurgaon, Ambala, Mohali, Panchkula, Bhatinda, Agra and, since August, Rudrapur. High-end specialties were 62% of Q1 FY27 revenue: neurology 14.5%, cardiology 12%, urology 11%, oncology 9–10%, joint replacement 9.5%, gastro 7%."
            },
            {
                "name": "Outpatient care",
                "text": "About 5–6% of revenue; OPD is kept cheap or free as a feeder for admissions, with 2.2 lakh OPD visits in Q1 FY27."
            }
        ],
        "revenueText": "**About 77% of Q1 FY27 revenue came from government insurance schemes** (CGHS, the central government health scheme, is the largest), 10% from private insurers and 13% from cash patients; it aims for 70:30. ARPOB (average revenue per occupied bed per day) was ₹30,444, up 12%; occupancy 56%. Inpatients rose 16% to 26,304 in Q1.",
        "mixes": [
            {
                "caption": "Revenue by payer, Q1 FY27 (company call)",
                "parts": [
                    {
                        "label": "Government schemes",
                        "share": 77
                    },
                    {
                        "label": "Cash",
                        "share": 13
                    },
                    {
                        "label": "Private insurance (TPA)",
                        "share": 10
                    }
                ]
            },
            {
                "caption": "Revenue by specialty, Q1 FY27 (company call, approximate)",
                "parts": [
                    {
                        "label": "Neurology",
                        "share": 14.5
                    },
                    {
                        "label": "Cardiology",
                        "share": 12
                    },
                    {
                        "label": "Urology",
                        "share": 11
                    },
                    {
                        "label": "Oncology",
                        "share": 9.5
                    },
                    {
                        "label": "Joint replacement",
                        "share": 9.5
                    },
                    {
                        "label": "Gastroenterology",
                        "share": 7
                    },
                    {
                        "label": "Other",
                        "share": 36.5
                    }
                ]
            }
        ],
        "customers": [
            "**Government scheme patients**, mainly under CGHS and allied central and state schemes, paid by the schemes after claims are processed.",
            "**Cash patients and private insurers**, 23% of revenue and growing.",
            "**Patients from smaller towns along the Delhi–Chandigarh and Delhi–Jaipur highways**, including trauma cases."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Hospitals need doctors, approvals and years to build trust, but Park's model of buying existing or distressed hospitals at low cost per bed and filling them with scheme patients can be copied by others with capital."
        },
        "moat": "Dense clusters in Gurgaon and the Chandigarh Tricity, full-time salaried doctors, low cost per bed (the lowest among listed peers, by its own claim) and a brand in the affordable segment. The weakness is reliance on government rates and slow-paying schemes, and competition from much larger chains in NCR.",
        "salesDrivers": [
            "**Beds**: 3,960 in June to 4,740 by March 2027 and 5,740 by March 2028, mostly via acquisitions (Rudrapur ₹177cr, Zirakpur ₹107cr) at a blended ₹36 lakh a bed.",
            "**Prices**: CGHS rates rose 12–15% in October 2025; management guides ARPOB growth of 10–12% a year.",
            "**Occupancy**: 64% in FY26, 56% in Q1 FY27; new hospitals take several quarters to fill.",
            "**Mix**: more cash and insurance patients and more complex surgery.",
            "**Government policy**: scheme rates and claim settlement speed."
        ],
        "inputs": "**Doctors' and staff salaries, drugs and consumables, and hospital buildings and equipment.** All doctors are full-time employees with performance bonuses and ESOPs.",
        "costEffect": "**Prices are largely set by government scheme rates, so cost increases are absorbed until rates are revised.** The October 2025 CGHS increase should lift revenue by 7–7.5%, but management plans to spend much of it on equipment rather than let it raise the margin. **What happened:** the operating margin was 40% in FY21, fell to 25% in FY24, and has been 27% since FY25.",
        "competitors": [
            {
                "name": "Yatharth Hospital",
                "note": "A similar affordable, scheme-heavy chain in Delhi-NCR and Uttar Pradesh."
            },
            {
                "name": "Medanta, Max Healthcare and Fortis",
                "note": "Premium chains in NCR and Mohali with higher prices and more cash and insurance patients."
            },
            {
                "name": "Local hospitals in Tier 2 towns",
                "note": "Park often buys them."
            }
        ],
        "position": "**One of north India's larger private hospital chains** by beds, with the largest bed base in the Chandigarh Tricity once Zirakpur is added (company claim).",
        "money": "Screener shows **₹364cr of borrowings at March 2026**, mostly lease liabilities; term debt was only ₹25.6cr at June 2026, against **₹300cr of fixed deposits**. **Over FY22–FY26 it turned ₹1,868cr of operating profit into ₹1,265cr of operating cash (68%), and free cash was ₹748cr.** Customers took 129 days to pay in FY26 (151–168 days in FY22–FY25). It plans ₹767cr of capex and acquisitions over FY27–FY28 from cash and IPO money. Promoters hold **82.89%** and must come down to 75% by December 2028.",
        "watch": [
            "Occupancy and margins at Agra, Panchkula and Rudrapur as they ramp up.",
            "Debtor days and the shift to cash and insurance patients.",
            "How the promoters bring their stake down to 75% (share sale or new shares)."
        ],
        charts: hospitalsCharts["Park Medi World"],
    },
];

export const hospitalsBusinesses = { intro, profiles };
