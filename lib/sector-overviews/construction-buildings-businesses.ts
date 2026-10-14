import { BusinessProfile, OverviewSection } from './types';
import { constructionCharts } from './card-data/construction';

// Tab 2 of the Construction - Building contractors note: what each company actually does.
// Revenue totals are the filed figures (Screener). Order books and splits come from the
// companies' latest presentations, calls, annual reports and rating reports; where a
// figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it builds, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed consolidated figures; order-book and client splits are from each company's latest annual report, presentation or call. There is no cost-versus-input chart for this group: builders buy steel, cement, aluminium and many other items, and in 2026 their margins were moved more by wages, bill disputes and contract terms than by any one material price.",
            "Four terms recur. The **order book** is signed work not yet done; dividing it by a year's revenue gives the years of work in hand, but only if clients hand over the sites. A **bank guarantee** is a bank's promise to pay the client if the builder fails to perform or to repay an advance; builders need large guarantee lines to take on big jobs. **Retention money** is the part of each bill that the client holds back until the job is finished and proven. A **mobilisation advance** is money the client pays up front to start a job; more of it now carries interest.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Four companies in two groups: three contractors that build for others, and one developer that builds for itself.",
        ],
        points: [
            {
                label: 'Building contractors — paid to build for developers and governments',
                text: "**Ahluwalia** (mainly Delhi region), **Capacit'e** (Mumbai) and **PSP** (Gujarat and Mumbai) win the civil and structural work on housing towers, offices, factories, hospitals, airports, stations and government buildings. They are paid in monthly bills as work is certified, less retention money, and they buy materials (34–42% of sales in FY26), hire subcontractors and employ thousands of site workers. **Specialist skill earns more**: Capacit'e makes about 16% on super-high-rise towers against 6–10% for general building work. Escalation clauses tied to price indices protect them from steel and cement costs, but often not from wage rises.",
            },
            {
                label: 'Mumbai developer with its own construction arm',
                text: "**Man Infra** started as a contractor but now mainly redevelops old Mumbai housing societies and sells the new flats, through joint ventures and development-management deals (where the landowner carries the cost and Man Infra earns fees and a share of profit). It builds its projects in-house. A developer books revenue only when flats are completed, so its reported revenue and margin swing with handovers, and its margin (13–33% in the last five quarters) is a developer's margin, not a contractor's.",
            },
        ],
    },
    {
        heading: 'Three ways of earning',
        body: [
            "How each company is paid decides what its margin means and how much cash its growth ties up.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**Contracts won from developers and governments**', 'Ahluwalia, Capacit’e, PSP (outside work)', 'The contract price, with escalation for materials on most jobs; 6–17% operating margin', 'Monthly bills, collected in about 108–151 days at these three (debtor days), less retention money held until completion; state clients often pay late'],
                    ['**Work for its own promoter group**', 'PSP (Adani group, about 70% of its book)', 'Cost passed through plus a thin margin (about 6%)', 'Interest-free advances up front, without bank guarantees'],
                    ['**Selling homes it develops**', 'Man Infra', 'Sale price of flats, development-management fees and a share of project profit', 'Buyers pay in stages as the building rises; revenue is booked only on completion'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Ahluwalia Contr.',
        inShort: ["**A pure building contractor** that builds housing towers, offices, hospitals, airports, stations and government buildings such as part of Central Vista in Delhi; about half its work is in the Delhi region.", "**Good:** about ₹920cr of cash and almost no debt, a clean audit, CARE AA− and a ₹20,664cr order book. **Bad:** the Q1 FY27 margin fell to 4.29% (company figure) after a 35–40% minimum-wage rise and a ₹29cr bill cut, management withdrew its double-digit margin promise and cut its revenue and order targets within 11 weeks, and clients are paying more slowly.", "**Verdict: follow.** The price fits my estimate, but I want two quarters of margins back above 8%, and collections to stop slipping, before buying."],
        tagline: "Delhi-based building contractor for housing towers, offices, hospitals, airports, stations and government buildings, for private developers and the government.",
        revenue: '₹4,565cr (FY26, consolidated)',
        products: [
            { name: 'Housing towers', text: "Large residential towers for developers such as DLF (Dahlias, ₹2,000cr-plus), Signature Global and Whiteland, mostly in Gurgaon; about 40% of the order book." },
            { name: 'Infrastructure: stations and airports', text: "Mumbai's CSMT station redevelopment (₹2,076cr), airports at Varanasi, Darbhanga and Kota, and metro depots; about 30% of the book." },
            { name: 'Offices and government buildings', text: "Central Vista Division 12 in Delhi (about ₹3,070cr including tax), a design-and-build job for government offices; DLF Downtown offices (about ₹1,600–1,700cr); India Jewellery Park in Navi Mumbai." },
            { name: 'Hospitals, institutions and hotels', text: "Hospitals (such as AIIMS-type projects), university and institutional buildings, and a few hotels; about 13% of the book together." },
        ],
        revenueText: "FY26 revenue was **₹4,565cr, up 11.4%**, at a 9.52% margin (company figure). The company does not split revenue by segment; its **order book** (signed work not yet done) was **₹20,664cr at June 2026, about 4.5 years of revenue**, and it is 61% private, 38% government. **About half the book is in the Delhi region (NCR)**. The book has doubled in two years, yet revenue grew only about 9–11% a year because sites were handed over late and labour was short. Management now guides FY27 revenue growth of 12–15% (cut from 15–20%) and new orders of ₹4,000–5,000cr (cut from about ₹8,000cr).",
        mixes: [
            { caption: 'Order book by type of building, March 2026 (annual report)', parts: [{ label: 'Housing', share: 40 }, { label: 'Infrastructure', share: 30 }, { label: 'Commercial', share: 18 }, { label: 'Hospitals', share: 6 }, { label: 'Institutions', share: 6 }], note: 'Hotels were 0.6%.' },
            { caption: 'Order book by client, March 2026 (annual report)', parts: [{ label: 'Private', share: 61 }, { label: 'Central government', share: 29 }, { label: 'State government', share: 10 }], note: 'By region: North 54%, West 22%, East 16%, South 8%.' },
        ],
        customers: ["**Large private developers**: DLF, Godrej, Signature Global, Brigade and Whiteland, mostly for housing and offices around Delhi.", "**Central government bodies**: the Central Public Works Department (Central Vista), the Airports Authority and Indian Railways; some pay late, such as a central university unpaid for five months.", "**State governments** such as Assam, whose payments stalled before elections."],
        difficulty: { level: 'Medium', text: "Building towers and offices is open to many contractors, but large government jobs need a long record and big **bank guarantees** (a bank's promise to pay the client if the builder fails), which only strong balance sheets can give. Running 10,000–12,000 site workers is the day-to-day challenge." },
        moat: "The balance sheet is the moat: net cash for years and bank limits barely used let it survive slow payers and take jobs that need large guarantees. The weakness is labour: many big private Delhi-area contracts have no clause to pass on wage rises.",
        salesDrivers: ["**Big jobs ramping up**: Central Vista billing is now expected at about ₹700cr in FY27 (was ₹1,000cr) and CSMT about ₹500cr (was ₹600cr).", "**Site handovers and labour**: Delhi-area sites ran at 40–50% labour strength for two months in 2026, and winter pollution rules and a Haryana ready-mix concrete shutdown stop work.", "**Housing launches around Delhi**: about 40% of the book is housing, and developers have 'slowed down the launches'.", "**New orders**: only ₹513cr won in Q1 FY27 against ₹10,257cr in FY26; it is lowest bidder on a ₹500cr RML hospital job and is now 'not very aggressive' on bids.", "**Machines instead of workers**: FY27 capex of ₹220–250cr on tower cranes, hoists and batching plants."],
        inputs: "**Steel, cement and bought-in building materials**, plus subcontractors and site labour. Materials were 42% of sales in FY26; site, subcontract and running costs 38%; staff 10%. Project-staff costs have risen above 5% of revenue and safety spending to about 3%.",
        costEffect: "**Partly passed on.** Only 10.34% of the book is fixed-price; about 89% has material escalation clauses, with steel and cement passed on within about 30 days on private jobs and through quarterly price-index escalation on government jobs. Wages are the gap: many private contracts have no labour clause. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (10% to 6%). **What happened:** there is no single input price chart for this group. The margin fell from 9% in Q1 FY26 to 4% in Q1 FY27 (company: 8.59% to 4.29%), not because of steel or cement but because of the Haryana and UP wage rise (about 1.5 points) and a ₹29cr cut to the AIIMS Jammu final bill (about 2.6 points), which it is taking to arbitration.",
        competitors: [{ name: 'L&T (buildings and factories)', note: "The biggest builder in India, named by Ahluwalia as a rival for large public and private buildings." }, { name: 'Shapoorji Pallonji and Tata Projects', note: "Large private builders competing for the same government and developer jobs." }, { name: 'NCC and Kalpataru', note: "Diversified contractors also named as competitors for buildings." }, { name: 'Capacite and PSP', note: "Listed building contractors, stronger in Mumbai and Gujarat respectively." }],
        position: "**One of India's largest listed pure building contractors** and the one with the strongest balance sheet; it has survived downturns in which several peers failed.",
        money: "Net cash of **₹744cr** (Screener, March); the company gave cash of ₹920cr and gross debt of about ₹2.3cr at June, though ₹924cr of client advances (about 31% interest-bearing) and ₹221cr of deposits pledged for guarantees sit against it. It carries ₹946cr of unbilled work and ₹401cr of **retention money** (part of each bill that clients hold back until the job is finished). Bank guarantees total about ₹2,413cr and surety bonds ₹573.7cr. Capex ₹220–250cr in FY27. It has refused buybacks and pays about 2% of profit as dividends. Promoters hold **55.32%**, unchanged over three years, with no pledge.",
        watch: ["Q2 and Q3 margins back above 8%.", "Central Vista billing reaching about ₹700cr in FY27.", "Delhi-area clients compensating for the wage rise.", "Working-capital days coming back down from 119, and old receivables being collected."],
        charts: constructionCharts['Ahluwalia Contr.'],
    },
    {
        company: 'Capacite Infraproj.',
        inShort: ["**A Mumbai builder of high-rise and super-high-rise towers and mass housing**, using special aluminium and tunnel moulds (formwork) to build tall towers fast, for developers and public housing agencies.", "**Good:** a steady 15–17% margin, a ₹13,535cr order book and a rating upgrade to BBB+. **Bad:** the auditor has qualified its accounts since 2023, only 22% of operating profit has turned into cash over five years, Q1 revenue grew 7% against 20% guided, the promoter stake is 31.7% with a pledge, and the CEO resigned in August.", "**Verdict: wait.** Cheap for its margin, but it needs a clean audit and faster growth first."],
        tagline: "Mumbai-based building contractor specialising in high-rise and super-high-rise towers, mass housing and public buildings.",
        revenue: '₹2,623cr (FY26, consolidated)',
        products: [
            { name: 'High-rise and super-high-rise towers', text: "Residential and commercial towers for developers such as Mahindra Lifespace (a ₹741cr order in August), Raymond and Signature Global, built with aluminium and tunnel formwork that speeds up each floor." },
            { name: 'Public mass housing', text: "CIDCO mass housing in Navi Mumbai (about ₹2,000cr still to be handed over; completion extended to March 2028)." },
            { name: 'Redevelopment with Tata Projects', text: "A 35% share of MHADA's ₹17,000cr BDD Worli chawl redevelopment in Mumbai, through a joint venture with Tata Projects." },
            { name: 'Institutional buildings', text: "IIT Bombay (₹550cr, started only in Q2 FY27 after tree-cutting permissions) and buildings for NBCC." },
        ],
        revenueText: "FY26 revenue was **₹2,623cr, up 12%**, at a 16.3% margin (company figure); Q1 FY27 was ₹629cr, up only 7%. In FY26 (standalone) **government work was ₹785cr and private ₹1,450cr**, and two customers each gave more than 10% (₹525cr and ₹332cr). The **order book** (signed work not yet done) was **₹13,535cr at June 2026, about five years of revenue, 55% public-sector**. But management says only ₹8,000–9,000cr of it could actually be worked on, because sites were handed over late. It still guides 20% growth, which needs ₹850cr-plus a quarter in the second half.",
        mixes: [
            { caption: 'Revenue by client, FY26 (standalone, annual report)', parts: [{ label: 'Private', share: 65 }, { label: 'Government', share: 35 }] },
            { caption: 'Order book by client, June 2026 (Q1 FY27 call)', parts: [{ label: 'Public sector', share: 55 }, { label: 'Private', share: 45 }] },
        ],
        customers: ["**Maharashtra public agencies**: CIDCO (mass housing), MHADA through the Tata Projects joint venture, and IIT Bombay; NBCC for buildings.", "**Private developers**: Mahindra Lifespace, Raymond (Wadala) and Signature Global.", "**Concentrated**: two customers gave ₹525cr and ₹332cr of FY26 revenue, and most work is in the Mumbai region."],
        difficulty: { level: 'High', text: "Super-high-rise towers need specialised formwork, cranes and engineers that most general builders lack; that skill is why it earns 15–17% against 6–10% for general contractors. Mass housing and ordinary buildings are open to many rivals." },
        moat: "Formwork know-how and repeat developer clients give it a real margin edge, and the Tata Projects partnership gives years of work. But the niche is narrow and concentrated in one city, and its escalation clauses follow published indices that lag real costs.",
        salesDrivers: ["**Sites being handed over on time**: IIT Bombay, CIDCO and other sites came late, leaving much of the order book idle.", "**Mumbai redevelopment and public housing**: the BDD Worli programme and CIDCO housing are multi-year.", "**Developer orders**: the Mahindra Lifespace win lifted FY27 orders to ₹1,071cr by August against a ₹4,500–5,000cr target.", "**Labour**: the workforce dipped to about 50% in May with a 30% shortfall in June; management says it is now fully in place.", "**Equipment**: FY27 capex of ₹193cr on formwork, towers and cranes."],
        inputs: "**Steel, cement, aluminium (for formwork) and electrical items**, plus subcontractors and site labour. Materials were 34% of sales in FY26; site, subcontract and running costs 37%; staff 7%.",
        costEffect: "**Partly passed on, with a lag.** Price escalation follows published indices that catch up over one or two quarters; on the CIDCO contract it is running at about 28%. In 2026 aluminium rose 35–40% and electrical items 18–20% against an 8% move in the wholesale price index, so it provided ₹10cr in each of Q4 FY26 and Q1 FY27, which it hopes to reverse. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3 points (16% to 13%). **What happened:** there is no single input price chart for this group. The margin was 17% in Q1 FY26 and 16% in Q1 FY27: steady, apart from the two ₹10cr provisions; steel fell about 20% and then rose about 3%.",
        competitors: [{ name: 'Tata Projects', note: "Its partner on BDD Worli and a large rival for Mumbai public and private buildings." }, { name: 'L&T and Shapoorji Pallonji', note: "Large builders able to take the biggest Mumbai towers." }, { name: 'Ahluwalia and PSP', note: "Listed building contractors, stronger in Delhi and Gujarat; neither specialises in super-high-rise to the same degree." }],
        position: "**A specialist in high-rise towers in the Mumbai region**, with a partnership in one of the city's largest redevelopment programmes; small by national standards.",
        money: "Net debt of **₹319cr** (Screener); gross debt was ₹522cr at June as about ₹150cr of collections slipped. Management targets net debt-free within eight quarters, with ₹50cr of non-core asset sales this year and ₹193cr of capex. Debtor days are 151 on Screener. Guarantees given were about ₹214cr plus a further ₹331cr category. No dividend. Promoters hold **31.69%**, down from 35.66% in September 2023, with 50 lakh shares still pledged (from 85.5 lakh); full release is targeted by end-FY27.",
        watch: ["Q3 and Q4 revenue above ₹850cr each.", "The audit qualification over ₹11.56cr of written-back receivables being cleared.", "The remaining promoter pledge released and the new management settling in."],
        charts: constructionCharts['Capacite Infraproj.'],
    },
    {
        company: 'Man Infra',
        inShort: ["**Now mainly a Mumbai housing developer**: it redevelops old housing societies and builds and sells flats, through joint ventures and fee-based deals, using its own construction arm; it also has luxury projects in Florida.", "**Good:** ₹768cr of cash with little debt, a CARE A+ rating, main projects 60–90% sold, and Q1 attributable profit up 29%. **Bad:** reported revenue fell 43% in FY26, Q1 pre-sales were only ₹290cr against about ₹2,500cr a year targeted, its key launch slipped again and was then handed to Godrej for a revenue share, about ₹1,461cr is lent to its own project companies, and management deferred most data questions.", "**Verdict: wait.** A net-cash developer whose price now fits, but disclosure is thin and Q2 pre-sales must show what the pipeline earns without Marine Lines."],
        tagline: "Mumbai residential developer (redevelopment, joint ventures and development-management deals) with an in-house construction arm and a small outside order book.",
        revenue: '₹630cr (FY26, consolidated)',
        products: [
            { name: 'Mumbai housing projects', text: "Projects worth more than ₹17,500cr by sale value (about ₹13,300cr unsold) in Tardeo, Marine Lines, Bandra (BKC, Pali Hill, Mount Mary), Vile Parle, Mulund, Ghatkopar and Dahisar, under the Aaradhya brand and a new ultra-luxury 'MS Collection'." },
            { name: 'Development-management and joint ventures', text: "Equity stakes of 30–70% in project companies, and deals where the landowner carries the cost and Man Infra earns fees plus a share of profit; it says these return 2.5–3 times the money it puts in. It also earns interest on about ₹1,461cr lent to project companies." },
            { name: 'Construction (EPC)', text: "Builds its own projects in-house, and has a small outside order book of ₹392cr, including port work at Vadhvan." },
            { name: 'Florida projects', text: "Luxury projects worth about $1.4 billion by sale value, including the Ritz-Carlton Residences in Fort Lauderdale; about $35 million sent so far." },
        ],
        revenueText: "A developer books revenue only when flats are completed and handed over, so **reported revenue lags sales**: FY26 revenue fell to ₹630cr (from ₹1,108cr) while it sold about ₹1,800cr of homes (pre-sales) and collected about ₹990cr. Much of its profit comes from **associates, development fees and interest** on loans to projects, which barely show in revenue. The company does not split revenue by segment and deferred questions on it. It targets ₹5,000cr of pre-sales over FY27–FY28, launches of about ₹6,600cr in FY27, and more than 25% profit growth in FY27.",
        mixes: [
            { caption: 'Project sale value, March 2026 (Q4 FY26 call)', parts: [{ label: 'Still to be sold', share: 76 }, { label: 'Already sold', share: 24 }], note: 'Of more than ₹17,500cr of ongoing and upcoming projects, about ₹13,300cr was unsold.' },
        ],
        customers: ["**Homebuyers in Mumbai**, mostly at the premium and luxury end (Pali Hill, Mount Mary, Tardeo, Marine Lines), plus gated communities in the suburbs.", "**Housing societies and landowners** who hand it redevelopment rights or development-management mandates.", "**Luxury buyers in Florida**, through its US arm and a local partner."],
        difficulty: { level: 'High', text: "Mumbai redevelopment needs society consent, many approvals, capital and a record of finishing on time; it builds fast in-house (a 38-storey tower in under two and a half years). But approvals make every launch date uncertain." },
        moat: "A record of Mumbai redevelopment, fast in-house building and conservative planning (every project assumes no price increase) have produced quick sell-outs. It is a developer's advantage and should be judged against Mumbai developers, not contractors.",
        salesDrivers: ["**Launches**: Marine Lines slipped from Diwali 2026 to 'by this March', then on 28 September 2026 its development rights went to Godrej Properties, which will build and sell it; Man Infra recoups more than ₹300cr and gets a revenue share on its more than ₹6,000cr of sale value. Tardeo's second phase came forward; Mount Mary received approval.", "**Mumbai luxury demand**: projects have sold quickly, but housing sales in the top seven cities fell to their lowest since January 2023 in Q2 2026 (ANAROCK).", "**Completions**: revenue should rise 35–40% in FY27 as Ghatkopar (March 2027), Dahisar and Mulund Tower G (December 2027) are handed over.", "**New deals**: a Goregaon slum-redevelopment project could add about ₹10,000cr of sale value; it wants a pipeline above ₹35,000cr by 2031.", "**Florida**: a new, dollar-based source of sales with currency and tax questions."],
        inputs: "**Land and redevelopment rights, and construction costs** inside its projects. On Screener's split, site, subcontract and running costs were 48% of sales, staff 12% and other costs 19%; materials booked directly were only 1% of sales in FY26. Management says marble, tile and steel costs rose 13–15% on the war.",
        costEffect: "**Mostly insulated.** As a developer it sets its own selling prices and plans every project with no price increase and a 10–15% discount to market prices, targeting a net margin above 20%; management expects cost rises to be passed into flat prices. **Rule of thumb:** with materials booked directly at 1% of sales, a 10% rise not passed on would barely move the 20% margin; the real exposure is construction cost inside its projects. **What happened:** there is no input price chart for a developer. The margin went from 22% in Q1 FY26 to 33% in Q1 FY27, and swings with which projects are completed each quarter, not with material prices.",
        competitors: [{ name: 'Other Mumbai redevelopment developers', note: "Compete for society mandates and buyers; the company does not name them." }, { name: 'Luxury developers in Bandra and South Mumbai', note: "Its new ultra-luxury projects compete for a small pool of buyers at the top of the market." }, { name: 'Building contractors', note: "Only relevant to its small outside EPC book (₹392cr)." }],
        position: "**A mid-sized Mumbai redevelopment developer** with a fast-selling record and one of the strongest balance sheets among its peers; small next to the city's large developers.",
        money: "Net cash of **₹371cr** (Screener); the company gave cash of ₹768cr and borrowings of about ₹78cr at June 2026. It has lent about ₹1,461cr to project companies and guarantees about ₹341cr (up from ₹167cr). Capital goes into land and deals, not machines. It raised up to ₹543cr through warrants, taken partly by promoters and directors, and has bought back 87.25 lakh shares (of up to 99 lakh, at up to ₹171) by 12 October 2026. Promoters hold **62.52%**, down from 67.15% in September 2023, with no pledge flagged.",
        watch: ["Pre-sales towards ₹2,500cr in FY27 as Tardeo and Mount Mary launch, now without Marine Lines.", "What its revenue share from Godrej's Marine Lines project is worth.", "Ghatkopar completed by March 2027.", "How much money goes to Florida."],
        charts: constructionCharts['Man Infra'],
    },
    {
        company: 'PSP Projects',
        inShort: ["**An Ahmedabad building contractor** for factories, offices, housing, temples and government buildings, now 34.41% owned by the Adani group, which supplies about 70% of its work.", "**Good:** the order book doubled to ₹13,245cr, Q1 revenue rose 65%, and interest-free Adani advances repaired its cash flow. **Bad:** the margin has fallen from 15% in FY22 to 6%, return on equity is about 5%, CARE cut its short-term rating in December, about ₹190cr of old dues are uncollected, and the terms of most of its work are set by its co-owner.", "**Verdict: pass.** Volume without margin, and the price needs more growth than I expect."],
        tagline: "Gujarat-based building contractor for industrial, institutional, government, residential and religious buildings, with its own precast plant; co-promoted by the Adani group.",
        revenue: '₹3,149cr (FY26, consolidated)',
        products: [
            { name: 'Industrial buildings', text: "Factories, port and airport buildings, mostly for the Adani group (Mundra port buildings, Ahmedabad airport development); 39% of the order book." },
            { name: 'Housing and redevelopment', text: "About ₹3,000cr of Dharavi rehabilitation work for Adani in Mumbai, with first refusal on later phases of a programme of about 2 lakh homes; 37% of the book." },
            { name: 'Government and religious buildings', text: "Ambaji Mata temple (₹962cr), a Surat Municipal high-rise (₹693cr), GIFT City and Science City buildings; earlier the Kashi Vishwanath corridor and Surat Diamond Bourse; 23% of the book." },
            { name: 'Precast and fast building', text: "Its own precast plant lets it erect buildings quickly: a 3-basement, 18-storey building in 148 days." },
        ],
        revenueText: "FY26 revenue was **₹3,149cr, up 25%**, at a 6.0% margin; Q1 FY27 was ₹853cr, up 65%. The company does not split revenue by segment. The **order book** (signed work not yet done) was **₹13,245cr at June 2026, up 103% in a year**; **about 70% is Adani group work** and the group supplied 85% of FY26's record ₹10,925cr of orders and 93% of Q1's ₹630cr. It guides FY27 revenue of ₹4,400–4,500cr and a 7–8% margin, now only from the second half.",
        mixes: [
            { caption: 'Order book by type, June 2026 (Q1 FY27 call)', parts: [{ label: 'Industrial', share: 39 }, { label: 'Housing', share: 37 }, { label: 'Government', share: 23 }, { label: 'Institutional', share: 1 }] },
            { caption: 'Order book by client, June 2026 (Q1 FY27 call)', parts: [{ label: 'Adani group', share: 70 }, { label: 'Other clients', share: 30 }], note: 'Adani group work was about 45% of Q1 FY27 revenue.' },
        ],
        customers: ["**The Adani group**, its co-owner: airports, ports, offices, a hospital and Dharavi rehabilitation. Its work is priced as pass-through cost and comes with interest-free advances.", "**Gujarat government and municipal bodies**: temples, the Sabarmati Riverfront, Surat Municipal Corporation and Science City.", "**Other private clients**, including Surat Diamond Bourse (about ₹90cr still owed) and UP medical projects (about ₹100cr pending)."],
        difficulty: { level: 'Medium', text: "Buildings are open to many contractors; its edge is speed through precast and a record on complex religious and public projects. The Adani pipeline, not skill, is what now sets it apart." },
        moat: "A captive pipeline from its co-owner, with advances and first refusal on Dharavi, gives it the most secure order book in this group. But the terms are related-party, the margin has halved, and the pipeline lasts only as long as the Adani group wants it to.",
        salesDrivers: ["**The Adani group's building programme**: airports, ports, offices and Dharavi; management wants Adani to stay 70–75% of the book.", "**Order inflow**: eased to about ₹4,000–5,000cr for FY27 after only ₹630cr in Q1; the bid pipeline is ₹6,200cr-plus (61% group).", "**Labour**: April and May revenue fell to about ₹270cr a month on labour shortages; it plans to add 3,000–4,000 workers.", "**Staying in buildings**: factories, data centres, offices, hotels and hospitals, mainly in Gujarat and Mumbai.", "**Collecting old dues** from Surat Diamond Bourse and UP."],
        inputs: "**Steel, cement and building materials**, subcontractors and about 16,000 site workers. Materials were 38% of sales in FY26; site, subcontract and running costs 49%; staff 5%.",
        costEffect: "**Passed on for Adani work, partly elsewhere.** The founder says 'all Adani projects are passthrough cost', so commodity moves barely touch that work; aluminium and copper rises did hit some outside jobs. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (6% to 2%). **What happened:** there is no single input price chart for this group. The margin was about 5% in Q1 FY26 and 6% in Q1 FY27, but down from 15% in FY22: the fall came from the shift to low-margin pass-through group work, out-of-scope work on a UP project and a ₹30cr provision in Q4 FY26, not from material prices.",
        competitors: [{ name: 'Ahluwalia and Capacite', note: "Listed building contractors with more spread-out clients; Capacite earns far higher margins on towers." }, { name: 'L&T, Shapoorji Pallonji and Tata Projects', note: "Large builders that compete for big factory, airport and public buildings." }, { name: 'Steel-building makers', note: "Pre-engineered steel structures compete for factory and warehouse work with less site labour." }],
        position: "**Effectively the Adani group's in-house building contractor**, and one of Gujarat's leading builders of public and religious buildings.",
        money: "Net cash of **₹86cr** (Screener). At June it held ₹836cr of interest-free Adani advances, short-term debt of ₹217cr (down from ₹274cr) and deposits of ₹324cr (₹139cr free of liens); it expects to be net debt-free in two to three quarters. Bank guarantees were ₹735.4cr. CARE cut its short-term rating to A1 in December 2025. Capex is 3–4% of revenue. No dividend in three years. Promoters hold **68.82%**, up from 66.22% in September 2023 after the Adani group bought in (the founder sold it 23.09%).",
        watch: ["The margin reaching 7–8% in the second half.", "The share of new orders from outside the Adani group.", "Collection of the Surat Diamond Bourse and UP dues."],
        charts: constructionCharts['PSP Projects'],
    },
];

export const constructionBuildingsBusinesses = { intro, profiles };
