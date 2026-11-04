import { BusinessProfile, OverviewSection } from './types';
import { realtyCharts } from './card-data/realty';

// Tab 2 of the Realty note: what each company actually does.
// Revenue totals are the filed figures (Screener, consolidated). Pre-sales, collections, land,
// debt and splits come from the companies' latest presentations, calls, annual reports and
// rating reports; where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures from Screener, all consolidated.",
            "**Why a developer's revenue is not its sales.** A developer sells a flat before or while it builds it. The buyer signs, pays a first instalment and then pays in stages as the floors go up. The value of flats signed up in a period is called **pre-sales** (or bookings), and the cash actually received is **collections**. Most of these companies book the sale as revenue, with its profit, only when the building is finished and the keys are handed over, often three to five years after the booking: this is **handover accounting**. Six (Sri Lotus, Raymond, Marathon, Ajmera, Suraj and Arihant), plus Keystone for newer projects, instead book revenue bit by bit as construction progresses, which brings profit forward before the cash arrives. Either way, a year's revenue mostly shows which buildings were finished, so each card also gives FY26 pre-sales and collections where the company discloses them.",
            "**Costs and charts.** Developers have no single raw material with a price index, so there is no cost-versus-input chart. The cost split comes from the filed accounts, where land and building spending is parked in stock until a project is handed over; for some companies (Mahindra Lifespace, Raymond, Arvind) project costs therefore run above 100% of sales in one year and are offset by stock added. Each card's rule of thumb uses land, construction and project costs, and the main cost risk is always the same: flats are sold at prices fixed years before they are built.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Twenty listed developers, almost all building homes in one or two cities, in five groups.",
        ],
        points: [
            {
                label: 'Large multi-city developers',
                text: "Brigade and Sobha (both Bengaluru-led), Mahindra Lifespace (the Mahindra group's developer) and Puravankara. They sell homes in several cities, carry large land banks and, at Brigade, own offices, malls and hotels that earn rent. **Scale and cheap borrowing are their edge**: Brigade, Sobha and Mahindra borrow at about 7.5–7.6%, while Puravankara pays about 11%.",
            },
            {
                label: 'Mumbai luxury and redevelopment specialists',
                text: "Sri Lotus, Keystone (Rustomjee), Sunteck, Raymond Realty, Suraj Estate and Marathon Nextgen. Most rebuild old Mumbai housing societies or tenanted buildings: residents get new flats free, and the developer sells the extra space. **This needs little money for land but a lot of trust and approvals**, so projects take years to start and selling prices are among the highest in India.",
            },
            {
                label: 'Mumbai suburbs and Navi Mumbai, mid-market',
                text: "Ajmera (the Wadala township), Arkade (suburban redevelopment plus two big bought sites) and Arihant (affordable homes and villas in Navi Mumbai). **Healthy project margins, but smaller balance sheets**: cash either goes into large land sites or is eaten by interest.",
            },
            {
                label: 'NCR and North India',
                text: "Signatureglobal and Max Estates (Gurugram and Noida), Ashiana (senior living and family homes in several northern and western cities) and Eldeco (Lucknow plots and apartments). **Moving upmarket**: Signatureglobal is leaving affordable housing, Max Estates has yet to hand over its first home, Ashiana is becoming a senior-living specialist and Eldeco earns most on plots.",
            },
            {
                label: 'West and South regional developers',
                text: "Arvind SmartSpaces (Ahmedabad, Bengaluru and now Mumbai), Shriram Properties (Bengaluru, Chennai, Kolkata and Pune) and Ganesh Housing (Ahmedabad land). **Very different models**: Arvind and Shriram build through joint developments with landowners, while Ganesh mostly sells land it bought decades ago.",
            },
        ],
    },
    {
        heading: 'Five ways of earning',
        body: [
            "How each company earns decides what its margin means and how quickly sales turn into cash. Most use more than one.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**Selling homes, booked at handover**', 'Brigade, Sobha, Mahindra Lifespace, Puravankara, Sunteck, Ashiana, Signatureglobal, Max Estates, Eldeco, Arvind, Shriram, Arkade, Keystone (older projects)', 'The price of each flat, booked as revenue only when the building is finished', 'Buyers pay in instalments as the building rises, years before revenue is booked; some plans leave most of the payment until possession'],
                    ['**Selling homes, booked as they are built**', 'Sri Lotus, Raymond, Marathon, Ajmera, Suraj, Arihant, Keystone (newer projects)', 'The same flat price, booked in stages as construction progresses', 'Profit shows before the cash: Sri Lotus collected ₹376cr against ₹769cr of FY26 revenue'],
                    ['**Redevelopment and joint development**', 'Keystone, Sri Lotus, Suraj, Arkade, Marathon, Raymond, Mahindra Lifespace, Arvind, Shriram, Ashiana', 'Its share of sales after giving residents new flats or landowners a share of revenue or profit', 'Little land money up front (about 10% of GDV at Keystone and Sri Lotus), but approval premiums are paid early and approvals take years'],
                    ['**Selling land and plots**', 'Ganesh, Eldeco, Arvind, Puravankara (Purva Land), Shriram (Kolkata), Keystone (Igatpuri), Mahindra Lifespace (industrial land)', 'The price of land or plots with little building; 35–85% margins on old land', 'Fast once a plot is sold, but lumpy from year to year'],
                    ['**Rent from offices, malls and hotels**', 'Brigade, Max Estates, Sunteck, Ganesh (Million Minds); Mahindra Lifespace and Arihant planned', 'Monthly rent and hotel room charges; Brigade earned a 70% operating margin on leasing in Q1 FY27', 'Steady once let, after years of building costs usually funded by rent-backed loans'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Arvind SmartSpaces',
        inShort: ["**The Lalbhai group's developer**: plotted land, villas and flats in Ahmedabad and Bengaluru, now adding Mumbai redevelopment; 9.8 mn sq ft delivered, with revenue booked on completion.", "**Good:** FY26 bookings rose 22% to a record ₹1,550cr as guided, Q1 FY27 bookings rose 147% without a launch, and India Ratings upgraded it to AA-. **Watch:** debt is rising on purpose towards ₹800–850cr of net debt, its Mumbai projects have no delivery record yet, and Q1's 49% margin came from one unusually profitable handover (the guide for new sales is 22–25%).", "**Verdict: follow.** Operating cash was −₹164cr against ₹326cr of profit over FY22–FY26 (−₹170cr in FY26), because land buying counts as operating spending; strong bookings and a fair price, but own it only once filed operating cash turns positive and net debt stays within India Ratings' band."],
        tagline: "A three-city developer of plotted land, villas and apartments for middle- and high-income buyers, backed by the Lalbhai (Arvind) group and HDFC Capital.",
        revenue: '₹564cr (FY26, consolidated)',
        products: [
            { name: 'Plotted land and villas (Ahmedabad)', text: "A leader in plotted developments in Ahmedabad and Gujarat, led by Aqua City; fast sales have kept operating cash at 36–37% of collections." },
            { name: 'Bengaluru apartments and villas', text: "About ₹3,000cr of stock; Skycrest sold 53% in a week and Sylva took more than ₹500cr of bookings in 30 days in September 2026. Forest Trails villas are more than half unsold." },
            { name: 'Mumbai redevelopment and plots', text: "More than ₹4,000cr of GDV: Pen-Khopoli plots (about ₹1,500cr), a Santacruz redevelopment and a Goregaon MHADA redevelopment with Oxford Sigma (44% profit share)." },
        ],
        revenueText: "Revenue is booked only when a project gets its completion certificate, so FY26 revenue fell 21% to ₹564cr while **bookings rose 22% to ₹1,550cr** (about ₹930cr from launches and more than ₹600cr from earlier projects) and **collections were ₹1,100cr**. In Q1 FY27 bookings were ₹432cr (+147%) and collections ₹336cr (+76%), and one Bengaluru handover lifted revenue to ₹318cr. **Bengaluru was 31% of FY26 bookings** (₹485cr); ₹3,825cr of sold homes are still to be booked.",
        mixes: [
            { caption: 'Bookings by source, FY26 (company call)', parts: [{ label: 'New launches', share: 60 }, { label: 'Earlier projects', share: 40 }] },
            { caption: 'Bookings by city, FY26 (company call)', parts: [{ label: 'Gujarat and other', share: 69 }, { label: 'Bengaluru', share: 31 }] },
        ],
        customers: ["**Middle- and high-income families** buying plots, villas and flats in Ahmedabad and Bengaluru, many in Bengaluru working in tech.", "**Weekend-home and plot buyers** in Gujarat and at Pen-Khopoli near Mumbai.", "**Mumbai housing societies and MHADA**, whose buildings it redevelops."],
        difficulty: { level: 'Medium', text: "Plotted land is simple to develop; the hard parts are buying land well, getting approvals on time (FY26 revenue fell on delayed certificates) and learning Mumbai redevelopment, where it has no delivery yet." },
        moat: "Group backing, a long-standing capital partner in HDFC Capital and a leading plotted-development position in Ahmedabad; launches sell 42–60% within days. The weakness is small scale and a thin management bench (about half the CEO's direct reports joined in the past year).",
        salesDrivers: ["**Launches**: six projects worth ₹3,000–3,500cr in FY27, weighted to H2: Vastrapur in Ahmedabad, three in Bengaluru (Sylva done) and two in Mumbai (Pen-Khopoli first, then Goregaon).", "**Pre-sales**: FY27 bookings guided up 35–40% to ₹2,100–2,200cr, and 25–30% a year for four to five years.", "**Pricing**: management expects price growth to moderate and underwrites land without large price rises.", "**Land**: ₹4,000–5,000cr of new GDV targeted in FY27, ₹2,600cr done in Q1 (Goregaon and a South Ahmedabad joint development); ₹600–900cr of land spending.", "**Sales from earlier projects**: these carried all of Q1 and more than ₹600cr of FY26, reducing dependence on launch timing."],
        inputs: "**Land, construction (cement, steel, labour) and approvals.** On the filed FY26 split, project and site costs were 161% of sales, largely offset by work added to stock as certificates slipped, so net project costs were about 35% of sales; staff were 19% and other costs 19%.",
        costEffect: "**Partly protected.** Costs rose about 4% after the West Asia war, covered by budget contingencies without price rises ‘if this is not very, very long drawn’; labour costs are rising slowly. Plots need little construction, which limits exposure. **Rule of thumb:** a 10% rise in net land, construction and project costs not passed on would cut the margin by about 4 points (27% to 23%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin rose from 19% in FY22 to 27% in FY26 and 49% in Q1 FY27 because one Bengaluru project was handed over at an unusually high margin; the guide for new sales is 22–25%, lower on joint developments and higher on owned land.",
        competitors: [{ name: 'Goyal & Co, Shivalik and other Ahmedabad developers', note: 'Local rivals in Gujarat housing and plots.' }, { name: 'Prestige, Brigade and Sobha', note: 'Larger Bengaluru developers competing for the same buyers.' }, { name: 'Godrej Properties and Mahindra Lifespace', note: 'Compete for Mumbai redevelopment and plotted projects.' }],
        position: "**A leader in plotted developments in Ahmedabad** and a growing mid-sized player in Bengaluru, with 57.9 mn sq ft under construction on India Ratings' figures.",
        money: "Screener shows **₹409cr of net debt** at March 2026; the company put net debt at ₹167cr (0.26 times equity; 0.29 times at June), while India Ratings, counting HDFC platform debentures, puts it at ₹330cr and expects ₹800–850cr in the medium term, with debt peaking at about ₹1,050cr. Gross debt doubled to ₹577cr in FY26. Its own operating cash was ₹417cr in FY26 (guided ₹400–500cr in FY27), with land shown separately; Screener shows −₹170cr. It collected ₹1,100cr against ₹1,550cr of bookings. It uses joint developments, joint ventures and a ₹600cr HDFC Capital platform (₹350cr used). Rated AA- by India Ratings. Promoters hold **53.8%**, up from 50.5% in September 2023.",
        watch: ["FY27 bookings reaching ₹2,100–2,200cr.", "Filed operating cash turning positive.", "The first Mumbai launch (Pen-Khopoli or Goregaon).", "Net debt staying within India Ratings' ₹800–850cr band.", "Margins on new sales holding at the guided 22–25%."],
        charts: realtyCharts['Arvind SmartSpaces'],
    },
    {
        company: 'Keystone Realtors',
        inShort: ["**Rustomjee's flagship**: Mumbai-region homes built mostly through housing-society and cluster redevelopment, from Thane townships to super-luxury in Bandra; more than 29 mn sq ft completed.", "**Good:** it met or beat every FY26 target, ICRA upgraded it to AA-, and its margin is rising as low-price legacy projects roll off. **Bad:** Q1 FY27 pre-sales were only 12% of the ₹5,000cr target, the big cluster launches need government committees, and Crown's flat owners seek damages reported at ₹1,000cr.", "**Verdict: follow.** The cleanest record in Mumbai, but operating cash was −₹141cr against ₹610cr of profit over FY22–FY26 (−₹509cr in FY26, where land and approvals count as operating; its own figure was +₹715cr); follow it until the Crown suit is clearer and FY27 operating cash nears the guided ₹1,000cr."],
        tagline: "A Mumbai redevelopment specialist that rebuilds old society buildings and clusters into premium and luxury towers, investing about 10% of GDV before launch.",
        revenue: '₹2,635cr (FY26, consolidated)',
        products: [
            { name: 'Society and cluster redevelopment', text: "Rebuilding old Mumbai buildings for their residents and selling the extra flats; 21 of the 27 projects added since FY23 (GDV ₹31,079cr) are redevelopments, including clusters at GTB Nagar (11.5 acres) and Dindoshi." },
            { name: 'Premium and luxury homes', text: "Emerging premium (₹1–3cr, such as Thane's Urbania township), premium (₹3–7cr, its ‘sweet spot’) and super-premium towers up to ₹150cr in Pali Hill, Versova, Bandra and Prabhadevi." },
            { name: 'Plots and offices', text: "Plotted land at Igatpuri (about 62 acres, target ₹500–750cr of sales a year) and offices at 33Fifteen, 28 HQ Prabhadevi and Thane, targeting about ₹100cr of rent by 2030." },
            { name: 'Precast plant', text: "A captive precast-concrete plant with a Singapore partner, expected to cut material wastage by about 30% and labour needs by about 40%." },
        ],
        revenueText: "Revenue mixes old projects booked at handover and newer ones booked as construction progresses (from April 2025). **Low-price legacy projects (Crown in Prabhadevi and Virar affordable homes) were 62% of FY26 revenue**, falling to 12–15% in FY27. **FY26 pre-sales were ₹4,022cr** (+33%) and **collections ₹2,622cr** (+13%); Q1 FY27 pre-sales were ₹617cr with no launches and collections ₹599cr, 97% of pre-sales. About ₹6,300cr of sold homes are still to be booked.",
        mixes: [
            { caption: 'Revenue by project type, FY26 (company call)', parts: [{ label: 'Legacy low-margin projects', share: 62 }, { label: 'Newer projects', share: 38 }] },
        ],
        customers: ["**Housing societies and their members**, who choose a redeveloper on trust; it has rehoused more than 2,500 families.", "**Premium Mumbai buyers** of ₹3–7cr flats and luxury buyers of ₹8–150cr homes; up to about 30% choose plans paying 10% now and 90% at possession, with banks funding construction in between.", "**Government housing bodies (MHADA)** and committees that approve cluster schemes."],
        difficulty: { level: 'High', text: "Redevelopment needs 25 years of trust with residents and a long chain of Mumbai approvals; cluster projects wait on high-power committee hearings. Building itself is done in-house with its own precast plant." },
        moat: "A 25-year redevelopment record, dual AA- ratings and a guidance record it calls ‘met or surpassed every single guidance metric’ win it societies and buyers. The weakness is small scale (about 2% of Mumbai-region sales) and dependence on approvals.",
        salesDrivers: ["**Launches**: about ₹8,000cr planned for FY27; more than ₹2,000cr (28 HQ, Ozone Skye) launched in July, with GTB Nagar Phase 1 in Q2–Q3 and Dindoshi after its committee hearing.", "**Pre-sales**: ₹5,000cr guided for FY27 (+25%) and ₹10,000cr by FY30; about ₹4,300–4,400cr is needed in nine months.", "**Pricing**: unsold stock can be repriced to cover cost inflation, and 94% of the pipeline is premium or above.", "**Land**: about ₹8,000cr or more of new GDV targeted in FY27, after ₹10,400cr in FY26; it invests about 10% of GDV before launch and underwrites about 35% gross margin.", "**New lines**: Igatpuri plots and Virar floor-area rights sold to other developers at about 60% margin."],
        inputs: "**Construction (cement, steel, labour), approval premiums and rent and corpus paid to societies.** It spent ₹299cr on construction and ₹232cr on land and approvals in Q1 FY27. On the filed FY26 split, land, construction and materials were 14% of sales and project and site costs 67%; staff 10% and other costs 4%.",
        costEffect: "**Mostly protected on unsold stock, not on legacy sales.** It reprices unsold flats to cover inflation and its precast plant cuts waste and labour, but the legacy projects were sold years ago at low prices. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 8 points (5% to −3%). **What happened:** there is no single price index for a developer's costs, so no input chart. The filed operating margin fell from 14% in FY22 to about 5% in FY26 because legacy projects dominated handovers, not because of input prices; it rose to 17% in Q1 FY27 (21.3% on the company's figure) as they rolled off.",
        competitors: [{ name: 'Lodha, Godrej Properties, Oberoi', note: 'Larger Mumbai developers bidding for the same societies and buyers.' }, { name: 'Mahindra Lifespace and Raymond Realty', note: 'Listed redevelopment and joint-development rivals.' }, { name: 'Sri Lotus and Suraj Estate', note: 'Smaller listed redevelopers in luxury and central Mumbai.' }],
        position: "**One of Mumbai's best-known redevelopment specialists**, with about 2% of Mumbai-region sales and a 5% target.",
        money: "Screener shows **₹602cr of net debt** at March 2026; the company reports gross debt of ₹876cr and free cash of about ₹803cr at June, net debt to equity 0.02, and says net debt ‘is bound to go into the positive territory’. Its own operating cash was ₹715cr in FY26 (guided about ₹1,000cr in FY27); Screener shows −₹509cr because land and approval spending counts as operating. It invests about 10% of GDV before launch and has tightened its gross debt cap to 0.75 times equity. Rated AA- by ICRA and CRISIL. Promoters hold **74.6%**, down from 86.7% in September 2023 as they sold to meet the public-holding rule; no pledges.",
        watch: ["GTB Nagar and Dindoshi launching in H2.", "FY27 operating cash near ₹1,000cr.", "The Bombay High Court's handling of the Crown suit."],
        charts: realtyCharts['Keystone Realtors'],
    },
    {
        company: 'Sunteck Realty',
        inShort: ["**A Mumbai luxury developer**, from BKC and Nepean Sea Road to large townships at Naigaon and Vasai, with two rented office buildings and a half-share in a Downtown Dubai plot.", "**Good:** pre-sales grew 25% in FY26 and 19% in H1 FY27 (₹1,611cr), new sales carry 35–40% margins and India Ratings rates it AA. **Bad:** it collected under half of FY26 pre-sales and only ₹780cr in H1, borrowings rose to ₹940cr to buy land, Nepean Sea Road is now promised by March 2027 and Dubai has been taken out of the launch list.", "**Verdict: follow.** Steady growth, slow cash: ₹122cr of operating cash against ₹449cr of profit over FY22–FY26 (27%), and −₹432cr in FY26 as it bought land; follow it until collections catch up with sales."],
        tagline: "A Mumbai-region developer selling across three luxury bands, from ultra-luxury in BKC to low-cost townships at Naigaon, with a growing rental plan.",
        revenue: '₹1,124cr (FY26, consolidated)',
        products: [
            { name: 'Uber luxury', text: "Signature Island and Signia at BKC and a Nepean Sea Road project in south Mumbai; BKC and Nepean Sea sold about ₹1,500cr in FY26." },
            { name: 'Premium luxury', text: "Oshiwara District Centre in Goregaon (Sunteck City, 5th Avenue), Sky Park in Mira Road and Beach Residences in Vasai: half of Q1 FY27 pre-sales." },
            { name: 'Aspirational townships', text: "Large low-cost townships at Naigaon (Sunteck World, One World) and Kalyan: 21% of Q1 FY27 pre-sales." },
            { name: 'Rent and Dubai', text: "Two debt-free office buildings earning ₹60–70cr a year, a commercial cluster at Oshiwara targeting about ₹450cr of rent by FY29, and 50% of a Downtown Dubai plot (GDV about ₹9,000cr), deferred by the West Asia war." },
        ],
        revenueText: "Revenue is mostly booked at possession. **FY26 pre-sales were ₹3,157cr** (+25%) and **collections only ₹1,433cr**, under half; in Q1 FY27 pre-sales were ₹787cr (+20%) and collections ₹409cr (+17%), against filed revenue of ₹192cr for the quarter. By band, Q1 pre-sales were **uber luxury 29%, premium 50% and aspirational 21%**. Its ₹42,700cr GDV is about half joint developments, 26% owned land and the rest joint ventures.",
        mixes: [
            { caption: 'Pre-sales by band, Q1 FY27 (company call)', parts: [{ label: 'Premium luxury', share: 50 }, { label: 'Uber luxury', share: 29 }, { label: 'Aspirational', share: 21 }] },
            { caption: 'GDV by ownership model, June 2026 (company call)', parts: [{ label: 'Joint developments', share: 50 }, { label: 'Owned land', share: 26 }, { label: 'Joint ventures', share: 24 }] },
        ],
        customers: ["**Rich Mumbai families** buying at BKC and Nepean Sea Road at well above ₹25,000–30,000 per sq ft.", "**Upper-middle-class buyers** in Goregaon, Mira Road and Vasai, and first-time buyers in the Naigaon townships.", "**Office tenants** in its two rented buildings, and future retail and office tenants at Oshiwara."],
        difficulty: { level: 'Medium', text: "Contractors do the building; the hard parts are winning prime Mumbai land and getting approvals, which is where Nepean Sea Road has stalled." },
        moat: "Trophy addresses at BKC and Nepean Sea Road and unsold stock of under 12 months' sales let it avoid discounts. The weakness is concentration in Mumbai and in two flagship projects that keep slipping.",
        salesDrivers: ["**Launches**: about ₹7,000cr in FY27, including a 5th Avenue tower, an Andheri redevelopment, Sky Park 2, Vasai and Naigaon towers and Sunteck City Tower 2.", "**Pre-sales**: FY27 guidance raised from about 25% to 25–30% growth.", "**Pricing**: management expects ‘stable’ prices, with margins rising from a richer mix rather than price increases.", "**Land**: ₹810cr spent in FY26 (₹180cr in FY25) on three projects worth about ₹5,000cr of GDV; FY27 spending will be ‘much more’.", "**Flagships**: Nepean Sea Road's RERA registration and construction start would lift collections; the Dubai launch timing has been ‘recalibrated’."],
        inputs: "**Construction (cement, steel, ready-mix concrete, tiles and imported finishes, labour), land and approvals.** On the filed FY26 split, project and site costs were 50% of sales; staff 11% and other costs 12%.",
        costEffect: "**Mostly insulated at the top end.** Luxury homes sell at more than ₹25,000–30,000 per sq ft, so a 2–3% cost rise barely moves margins; tiles and imported finishes rose, but cement and steel were not short. The townships at Naigaon are more exposed. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 5 points (27% to 22%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin rose from 19% in FY22 to 27% in FY26 and 35% in Q1 FY27 as luxury projects were handed over; new sales carry 35–40%.",
        competitors: [{ name: 'Lodha and Oberoi', note: 'Luxury leaders in south and western Mumbai.' }, { name: 'Godrej Properties', note: 'Large rival in the Mumbai suburbs.' }, { name: 'Keystone and Sri Lotus', note: 'Listed Mumbai redevelopment and luxury peers.' }],
        position: "**A mid-sized Mumbai luxury developer** with trophy projects at BKC and Nepean Sea Road and a large low-cost township book.",
        money: "Screener shows **₹679cr of net debt** at March 2026; the company puts net debt at 0.06–0.07 times equity. Gross debt doubled to ₹774cr in FY26 to buy land, India Ratings expects a peak of ₹1,100–1,200cr, and filed operating cash was −₹432cr; collections lag pre-sales badly. Promoters are putting ₹500cr back in through warrants, ₹375cr of it still due by about mid-2027. Dubai has taken no more than ₹200–225cr. Rated AA by India Ratings. Promoters hold **63.1%**, down from 67.2% in September 2023; no pledges.",
        watch: ["Nepean Sea Road RERA before the end of FY27, as now promised.", "FY27 collections above ₹1,800cr (₹780cr in H1).", "Gross debt staying under ₹1,100–1,200cr (₹940cr at September)."],
        charts: realtyCharts['Sunteck Realty'],
    },
    {
        company: 'Mahindra Life. Dev',
        inShort: ["**Mahindra & Mahindra's developer** (52.41% owned): homes in Mumbai, Pune and Bengaluru plus industrial parks in Chennai and Jaipur, mostly through joint ventures with partners such as Mitsui Fudosan and Sumitomo.", "**Good:** net cash after a ₹1,500cr rights issue, an AA rating, a pipeline of about ₹50,000cr and H1 FY27 pre-sales up 66% to ₹1,988cr. **Watch:** most profit arrives through joint ventures, about ₹35,000cr of the pipeline is slow Mumbai work, and its CEO says ‘we have seen the best of the current cycle’.", "**Verdict: follow.** A strong parent and a big pipeline, but filed operating cash was −₹1,948cr against ₹722cr of profit over FY22–FY26 (−₹545cr in FY26), partly because joint-venture cash is not consolidated and land counts as operating (its own figure was +₹840cr in FY26); follow it through FY27's sales target."],
        tagline: "The Mahindra group's property arm, building mid-premium homes in three cities and leasing industrial land in integrated business cities.",
        revenue: '₹1,178cr (FY26, consolidated)',
        products: [
            { name: 'Mid-premium homes', text: "Homes in the Mumbai region, Pune and Bengaluru, moving away from affordable housing; it avoids luxury above about ₹60,000–70,000 per sq ft. Big projects include Rainforest in Bhandup (GDV above ₹12,000cr), Thane (about ₹7,500cr) and K2 Kandivali (₹5,600cr)." },
            { name: 'Mumbai redevelopment', text: "Much of the Mumbai pipeline is rebuilding old society buildings; it says it has cut the approval cycle from about two years to about 400 days." },
            { name: 'Industrial parks and business cities', text: "Mahindra World City in Chennai and Jaipur and Origins parks in Chennai, Ahmedabad and Pune, where it leases land to factories, often Japanese companies introduced by Sumitomo; guided at ₹400–500cr of business a year." },
            { name: 'Rent (planned)', text: "Offices it will keep at Bhandup, Thane and Pune, targeting ₹150–200cr of rent within four to five years." },
        ],
        revenueText: "Filed revenue understates the business because **most projects sit in joint ventures** whose profit arrives below operating profit (₹349cr share of JV profit in FY26). Residential **pre-sales were ₹3,405cr in FY26** (+21%) and **₹1,988cr in H1 FY27** (+66%; ₹925cr in Q1), 40% of it from projects already on sale, against FY26 filed revenue of ₹1,178cr; combined with industrial leasing, FY26 business was about ₹4,120cr. **Collections** were above ₹2,100cr in FY26 including industrial, and ₹1,152cr for homes in H1 FY27, with milestone bills bunched at the end of September. The company does not split revenue by city.",
        mixes: [
            { caption: 'Housing pipeline by region, GDV, June 2026 (company call)', parts: [{ label: 'Mumbai region', share: 70 }, { label: 'Pune', share: 10 }, { label: 'Bengaluru', share: 10 }, { label: 'Other', share: 10 }], note: 'Approximate, from rounded figures: about ₹35,000cr in Mumbai and about ₹5,000cr each in Pune and Bengaluru of a ₹50,000cr pipeline.' },
        ],
        customers: ["**Middle-class and upper-middle-class families** buying mid-premium homes, drawn by the Mahindra name; cancellations are below 1%.", "**Housing societies** in Mumbai whose buildings it redevelops.", "**Manufacturers leasing industrial land**, especially Japanese companies; the top three Origins Chennai customers are Japanese."],
        difficulty: { level: 'Medium', text: "Homes are built by contractors; the hard parts are winning Mumbai societies and approvals and finding anchor tenants for industrial parks (Origins Ahmedabad is still waiting for one)." },
        moat: "The Mahindra brand and parent support give it an AA rating, cheap money (7.5%) and partners like Mitsui and Sumitomo; launches sell fast (Blossom 60% in a week). The weakness is that most of its pipeline is in slow Mumbai redevelopment, where unsold stock is 16–16.5 months of sales.",
        salesDrivers: ["**Launches**: Rainforest, BeaconHill, Citadel Phase 3 and Lakewoods sold in H1; Mahalunge Rivenza has its RERA approval and launches in early December, and two or three more (including WestEra) are hoped for in H2.", "**Pre-sales**: FY27 guidance of ₹4,500–5,000cr (up 32–47%) kept, with a target of ₹10,000cr by FY30.", "**Pricing**: management now expects only 4–6% a year for two years, against 7–8% earlier.", "**Land**: ₹10,000–20,000cr of GDV to be added in FY27, now expected at the higher end; ₹7,100cr added in H1 (K2 Kandivali ₹5,600cr plus Borivali and Chembur societies). It spent about ₹900cr on land in FY26 and about ₹750cr so far in FY27, including K2.", "**Industrial leasing**: lumpy deals at Origins Chennai and Jaipur; H1 FY27 was muted and management expects committed deals to close in Q3."],
        inputs: "**Construction contracts (cement, steel, aluminium formwork, labour), approvals and land.** Aluminium and formwork, about 10% of cost, are up; steel is down. On the filed FY26 split, project and site costs were 191% of sales, largely offset by homes added to stock, so net project costs were about 90% of sales; staff were 16% and other costs 5%.",
        costEffect: "**Partly protected.** It awards contracts in roughly 20% slices a year, which spreads price spikes, adds just under 1% contingency and says it ‘underprices and over-costs’ when it buys land; it expects 4–6% price growth to act as a rough hedge against 8–10% wage inflation. **Rule of thumb:** a 10% rise in net land, construction and project costs not passed on would cut the margin by about 9 points (−10% to −19%). **What happened:** there is no single price index for a developer's costs, so no input chart. The filed operating margin was −22% in FY22 and −10% in FY26 because most profit sits in joint ventures and consolidated revenue was tiny; Q1 FY27 was the first positive quarter (10%) as two wholly owned projects were handed over. Old affordable projects at single-digit or negative margins will still drag FY27.",
        competitors: [{ name: 'Godrej Properties and Lodha', note: 'Much larger Mumbai-region developers competing for land and societies.' }, { name: 'Keystone (Rustomjee) and Raymond Realty', note: 'Listed Mumbai redevelopment rivals.' }, { name: 'Industrial park developers', note: 'State industrial corporations and private parks compete for factory tenants.' }],
        position: "**A mid-sized national developer with a blue-chip parent**, with about ₹50,000cr of pipeline and a presence in both housing and industrial parks.",
        money: "Screener shows **₹127cr of net debt** at March 2026; the company reports net cash (net debt to equity −0.20 at June; gross debt ₹383cr against ₹1,127cr of cash at March) after a ₹1,500cr rights issue, with debt mostly Mahindra group deposits and commercial paper at 7.5%. Net debt to equity was −0.28 at September 2026, with borrowings steady at about ₹600cr and ₹1,036cr of cash system-wide. On its own definition operating cash was ₹840cr in FY26 and ₹341cr in H1 FY27; Screener shows −₹545cr because joint-venture cash is not consolidated and land counts as operating spending. It spent about ₹900cr on land in FY26 and projects ₹15,300cr of cash from current projects. Rated AA by CRISIL and India Ratings. Promoters hold **52.4%**, up from 51.2% in September 2023; no pledges.",
        watch: ["FY27 pre-sales reaching ₹4,500–5,000cr (₹1,988cr in H1).", "Mahalunge Rivenza in December and the other H2 launches.", "Industrial land deals closing in Q3, and home collections picking up."],
        charts: realtyCharts['Mahindra Life. Dev'],
    },
    {
        company: 'Ashiana Housing',
        inShort: ["**A 40-year-old developer of senior-living communities and family homes** in Jaipur, Bhiwadi, Gurugram, Pune, Chennai and Jamshedpur, funded mostly by buyers' advances.", "**Good:** about ₹785cr of net cash (company figure), senior-living bookings up 55% to ₹570cr, and ₹2,040cr of booked homes due for handover in FY27. **Bad:** Q1 FY27 bookings fell to ₹358cr from ₹431cr, and it warns pre-sales may dip for a year or two while it spends ₹800–1,000cr on land.", "**Verdict: follow.** Conservative and cash-rich; follow it as senior living grows."],
        tagline: "A conservative North and West India developer becoming a senior-living specialist, building large, amenity-heavy communities mostly on revenue-share land.",
        revenue: '₹1,143cr (FY26, consolidated)',
        products: [
            { name: 'Senior living', text: "Active-adult communities of 12–15 acres with healthcare and services, in Jaipur, Bhiwadi, Pune, Chennai and new sites in Maharashtra and Bengaluru; bookings of ₹570cr in FY26, targeting above ₹700cr in FY27 and about ₹1,500cr by FY29–FY30." },
            { name: 'Premium and family homes', text: "Premium and ‘kid-centric’ projects such as Aaroham in Gurugram (₹833cr booked at launch) and Oma in Jaipur, launched in July." },
            { name: 'Maintenance services', text: "It runs maintenance for its delivered communities, a small, steady income on top of home sales (97.4% of standalone revenue)." },
        ],
        revenueText: "Revenue is booked on handover, so it jumps: ₹1,143cr in FY26 but ₹107cr in Q1 FY27. **FY26 bookings were a record ₹2,421cr** (+25%) and **collections a record ₹1,762cr**; Q1 FY27 bookings were ₹358cr and collections ₹409cr (+6%). **Senior living was about 24% of FY26 bookings** (₹570cr). Homes worth ₹2,040cr are due for handover in FY27, including ₹532cr whose certificates arrived in July.",
        mixes: [
            { caption: 'Bookings by product, FY26 (company call)', parts: [{ label: 'Family and premium homes', share: 76 }, { label: 'Senior living', share: 24 }] },
        ],
        customers: ["**Retired and older buyers and their children**, often buying from another city (40% of Pune senior-living buyers are from Mumbai).", "**Middle-class families** in Jaipur, Bhiwadi and Jamshedpur, where prices are now above ₹7,000 per sq ft, and upper-middle buyers in Gurugram.", "**Landowners** who contribute land for a share of revenue or profit."],
        difficulty: { level: 'Medium', text: "Homes are straightforward to build, but running senior-living communities well takes years of know-how; most rivals build 2–4-acre projects, not 12–15-acre ones. Entering new cities is harder: it admits it has not ‘figured out’ Pune premium housing." },
        moat: "An early lead in senior living, a conservative name and 85% of ongoing homes sold before completion. The weakness is thin regular-housing stock, lower standing in Gurugram (‘bottom of the top tier’) and bigger land bets in new cities.",
        salesDrivers: ["**Launches**: Oma (July), Tattvam and Aaranya in Q4 FY27, Aaroham Phase 3 moved to Q3–Q4; Vadgaon, Wavarle and Bengaluru in FY28.", "**Pre-sales**: about ₹2,200cr guided for FY27; ₹859cr booked by 31 July; management warns of a dip for a year or two.", "**Pricing**: blended realisation heading to about ₹10,000 per sq ft; Q1 FY27 was ₹9,923, up 37% on mix.", "**Land**: about ₹800cr in FY27 (₹180cr in Q1), including its largest deal, 28.55 acres at Vadgaon near Pune (GDV about ₹1,800–2,000cr), paid partly with debentures to landowners plus a 6% revenue share.", "**Senior-living demand**: bookings rose from about ₹100cr five years ago to ₹570cr in FY26."],
        inputs: "**Construction (cement, steel, labour) at 40–50% of revenue, land at 10–20% and soft costs about 5%**, per management. On the filed FY26 split, land, construction and materials were 3% of sales and project and site costs 69%; staff 8% and other costs 9%.",
        costEffect: "**Partly protected.** Construction costs are expected to rise 8–10% in FY27 on war-linked inflation; management relies on locked-in prices on low-cost land and faster building, and underwrites land with no inflation, assuming price rises after launch. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 7 points (11% to 4%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin rose from −4% in FY22 to 11% in FY26 as handovers grew and prices rose; quarters swing between 4% and 19% with handover mix, and the July handovers carry a blended gross margin in the mid-20s.",
        competitors: [{ name: 'Antara (Max India) and Columbia Pacific', note: 'Senior-living specialists, mostly with smaller communities.' }, { name: 'Signatureglobal, DLF and Godrej Properties', note: 'Larger rivals for Gurugram buyers.' }, { name: 'Local developers in Jaipur and Bhiwadi', note: 'Compete for mid-market family buyers.' }],
        position: "**An early leader in Indian senior-living housing**, with more than 323 lakh sq ft built in 40 years.",
        money: "Screener shows **₹302cr of net cash** at March 2026; the company puts net cash at about ₹785cr. Debt of ₹323cr is mostly debentures, including ₹100cr from IFC; construction is funded largely from buyers' advances, and committed receivables of more than ₹2,200cr cover remaining costs and debt. Filed operating cash was ₹342cr in FY26. Land spending of about ₹800cr in FY27 (the press reported ₹1,000cr) will use part of the cash; many deals are revenue- or profit-share arrangements with landowners. Rated A by CARE. Promoters hold **61.1%**, unchanged; no pledges.",
        watch: ["Aaroham Phase 3 launching in Q3–Q4.", "FY27 profit as ₹2,040cr of handovers land.", "How much net cash the land plan uses."],
        charts: realtyCharts['Ashiana Housing'],
    },
    {
        company: 'Brigade Enterprises',
        inShort: ["**A Bengaluru-led developer that also owns offices, Orion malls and nine hotels**; homes and other property for sale were 60% of Q1 FY27 revenue, rent 28% and hotels 12%.", "**Good:** rent-earning offices carry 86% of its debt, and the residential margin recovered from 12% to 21% as promised. **Bad:** pre-sales have fallen year on year for six quarters (Q2 FY27 −10%, though prices rose 29%), the FY27 launch plan was cut by about a fifth and H1 pre-sales were ₹2,888cr against a ₹9,000cr year, and the space Amazon vacated at WTC Bengaluru will take 3–4 quarters to re-let.", "**Verdict: follow.** A sound business in a slow patch; buy when launches start arriving on time and pre-sales grow again."],
        tagline: "A Bengaluru developer of homes and offices, with about 9.4 mn sq ft of rented offices and malls and nine hotels, selling homes in Bengaluru, Chennai and Hyderabad.",
        revenue: '₹5,697cr (FY26, consolidated)',
        products: [
            { name: 'Homes for sale', text: "Apartments and villas, mostly mid-market to premium, with 25.39 mn sq ft under construction. FY26 pre-sales were ₹7,424cr at an average ₹12,107 per sq ft; revenue is booked only when a building is handed over." },
            { name: 'Offices and malls for rent', text: "9.36 mn sq ft of leasable space, 8.31 mn sq ft let, including Brigade Tech Gardens (3.0 mn sq ft), WTC Chennai and Orion Mall at Brigade Gateway. Leasing earned a 70% operating margin in Q1 FY27, and 7.15 mn sq ft more is being built." },
            { name: 'Hotels', text: "Nine hotels run through its listed subsidiary Brigade Hotel Ventures; average room rate ₹7,241 and occupancy 76% in Q1 FY27, with a target of 3,300 rooms by FY31." },
            { name: 'Land bank', text: "543 acres with 57 mn sq ft of potential (Brigade's share 43 mn sq ft), 45 mn sq ft of it residential: 29 mn sq ft in Bengaluru, 16 in Chennai and 6 in Hyderabad." },
        ],
        revenueText: "On the company's Q1 FY27 total of ₹1,179cr (which includes other income), **real estate was 60%** (₹707cr), **leasing 28%** (₹328cr) and **hotels 12%** (₹144cr). Home revenue follows handovers, not sales: **FY26 pre-sales were ₹7,424cr** (down 5%) and **collections ₹7,476cr** (flat), against filed revenue of ₹5,697cr. In Q1 FY27 pre-sales were ₹1,061cr (down 5%) while collections rose 7% to ₹1,856cr. About 65% of FY26 pre-sales came from Bengaluru, 20% from Chennai and 15% from Hyderabad.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company presentation)', parts: [{ label: 'Real estate', share: 60 }, { label: 'Leasing', share: 28 }, { label: 'Hotels', share: 12 }] },
            { caption: 'Residential pre-sales by city, FY26 (company call)', parts: [{ label: 'Bengaluru', share: 65 }, { label: 'Chennai', share: 20 }, { label: 'Hyderabad', share: 15 }] },
        ],
        customers: ["**Home buyers in Bengaluru, Chennai and Hyderabad**, about 55% of them in Bengaluru working for global capability centres (GCCs) or IT companies, most paying through home loans in instalments as the building rises.", "**Office tenants**: GCCs are 58% of its leased portfolio and IT companies 26%; tenants taking more than 1 lakh sq ft make up 65% of it. Rent collections run at 99%.", "**Hotel guests and mall shoppers**, a smaller, steadier income stream."],
        difficulty: { level: 'Medium', text: "Building flats is routine; getting land with clean title and Bengaluru approvals on time is not, and approval delays caused its FY26 miss. Offices need years of capital and a tenant base, which few regional developers have." },
        moat: "A 40-year Bengaluru name with 12–13% of the city's housing market and more than 100 mn sq ft delivered lets it raise like-for-like prices 8–9% a year, and rent gives it a steady base few housing developers have. The weakness is dependence on Bengaluru approvals and on tech-sector jobs.",
        salesDrivers: ["**Launches**: FY27's plan was cut from 11.6 to 9.36 mn sq ft, with about 7 mn sq ft in H2, including Neopolis 2 in Hyderabad and Whitefield–Hoskote in Bengaluru; FY26 managed 8.3 of 12 mn sq ft planned.", "**Pre-sales**: guided at least 20% growth to about ₹9,000cr in FY27, after ₹1,061cr in Q1; that leaves about ₹7,900cr for nine months.", "**Pricing**: like-for-like prices rise 8–9% a year and 7–9% after each launch; the Q1 average of ₹14,256 per sq ft was up 21%, mostly from a dearer mix.", "**Land**: ₹15,000cr of new GDV added in FY26 and ₹2,400cr in Q1 FY27, some with partners GIC and Bain Capital; ₹938cr of land cost is still to be paid.", "**Rent**: it targets about 20% a year of leasing growth for five to six years, but re-letting the space Amazon vacated at WTC Bengaluru is now expected to take 3–4 quarters."],
        inputs: "**Land, construction (cement, steel, labour) and approval costs.** In Q1 FY27 it spent ₹763cr on construction and ₹207cr on payments to landowners. On the filed FY26 split, land, construction and materials were 16% of sales and other project and site costs 36%; staff were 9% and other costs 14%.",
        costEffect: "**Partly protected.** A flat's price is fixed when it is booked, years before it is finished, so cost rises in between come out of the margin; Brigade offsets this by raising prices after each launch, and once built its offices and hotels carry no building-cost risk. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 5 points (25% to 20%). **What happened:** there is no single price index for a developer's costs, so no input chart. The filed operating margin was 26% in FY22 and 25% in FY26; within that, the residential margin fell to 12% as older, cheaper sales were handed over, then recovered to 21% in Q1 FY27 as newer sales earning ‘higher 20s’ margins arrived. Management did not discuss cement or steel inflation on either call.",
        competitors: [{ name: 'Prestige Estates', note: 'The largest Bengaluru rival in homes, offices, malls and hotels.' }, { name: 'Sobha and Puravankara', note: 'Bengaluru-led housing developers competing for the same buyers and land.' }, { name: 'Godrej Properties', note: 'National developer growing fast in Bengaluru.' }, { name: 'Office REITs (Embassy, Bagmane and others)', note: 'Set the rents and values against which its offices are judged.' }],
        position: "**About 12–13% of the Bengaluru housing market** (CRISIL), and one of the few mid-sized developers with a large rent-earning office and mall portfolio.",
        money: "Screener shows **₹3,659cr of net debt** at March 2026; the company puts net debt at ₹2,218cr at June (Brigade's share ₹1,541cr, 0.26 times equity), 86% of it in leasing and secured on rent, at 7.61%. About ₹1,400cr of its ₹2,900cr March cash sat in RERA project accounts. Collections of ₹7,476cr paid for construction, but filed operating cash was −₹137cr in FY26 after land and building spending. It has ₹938cr of land still to pay, ₹578cr of deposits with joint-development landowners, and ₹3,598cr of committed office spending left, funded from rent and rent-backed loans. Rated AA by ICRA. Promoters hold **41.1%**, down from 43.8% in September 2023; only 0.08% of shares are pledged.",
        watch: ["The two large Bengaluru townships launching in Q3 FY27, as planned.", "FY27 pre-sales reaching the guided ₹9,000cr (₹2,888cr in H1).", "WTC Bengaluru re-let after Amazon's exit."],
        charts: realtyCharts['Brigade Enterprises'],
    },
    {
        company: 'Sobha',
        inShort: ["**A Bengaluru-led developer that builds almost everything itself**, from concrete and glazing to interiors, now selling heavily in Gurugram and Greater Noida too.", "**Good:** record Q1 FY27 pre-sales of ₹3,656cr (up 76%), net cash and ₹20,553cr of sold homes still to book. **Bad:** the operating margin has been 3–8% for five quarters and the promised recovery keeps moving out; an Enforcement Directorate attachment of ₹201.6cr of land, tied to a land advance to promoter-linked Technobuild, is under appeal.", "**Verdict: follow.** Sales and balance sheet are strong; buy once the margin actually recovers."],
        tagline: "A backward-integrated home builder with its own plants and 10,300 technicians, selling premium and luxury homes in Bengaluru, NCR and Kerala, plus a construction business for outside clients.",
        revenue: '₹5,190cr (FY26, consolidated)',
        products: [
            { name: 'Homes for sale', text: "Premium and luxury apartments and villas; FY26 pre-sales were ₹8,136cr at ₹14,675 per sq ft. Homes above ₹5cr were 42% of Q1 FY27 sales, led by Sobha Crescent in Gurugram at ₹4.8–7.9cr a home." },
            { name: 'Contracts and manufacturing', text: "Building and glazing for outside clients, plus interiors, concrete products and mattresses from its own plants on more than 45 acres: ₹1,028cr of FY26 segment revenue." },
            { name: 'Pipeline and land', text: "33.64 mn sq ft under construction, 20.77 mn sq ft of forthcoming launches worth ₹29,557cr, and 361 acres of land with another 1,749 acres being pieced together." },
            { name: 'Rent', text: "A small commercial rental income of about ₹52cr a year; a 6 lakh sq ft Gurugram project is being studied for leasing." },
        ],
        revenueText: "In FY26 **real estate brought ₹4,420cr and contracts and manufacturing ₹1,028cr** of segment revenue (before removing sales between segments). Revenue follows handovers: **FY26 pre-sales were ₹8,136cr** (about +30%) and **collections ₹7,798cr** (+26%), well above the ₹5,190cr booked. In Q1 FY27 pre-sales reached a record ₹3,656cr, of which **Bengaluru was 56.5% and NCR 37.9%**, and collections ₹1,924cr (+8%).",
        mixes: [
            { caption: 'Segment revenue, FY26 (annual report)', parts: [{ label: 'Real estate', share: 81 }, { label: 'Contracts and manufacturing', share: 19 }] },
            { caption: 'Pre-sales by region, Q1 FY27 (company presentation)', parts: [{ label: 'Bengaluru', share: 57 }, { label: 'NCR', share: 38 }, { label: 'Kerala', share: 4 }, { label: 'Other', share: 1 }] },
        ],
        customers: ["**Upper-middle-class and rich home buyers** in Bengaluru (average ₹12,780 per sq ft in Q1 FY27) and Gurugram and Greater Noida (₹24,667 per sq ft), mostly salaried professionals and business owners.", "**Companies that hire it to build or glaze** offices, campuses and other buildings, and buyers of its interiors and concrete products.", "**Investors in luxury homes**, a growing share as sales above ₹5cr rose 324% in Q1 FY27."],
        difficulty: { level: 'High', text: "It makes its own concrete, glazing, metal work and interiors and employs its technicians, which takes decades and a lot of capital to copy. The hard part for anyone is land and approvals; Bengaluru's e-Khata changes delayed its launches in FY26." },
        moat: "Build quality and delivery control: about 7 mn sq ft a year for a decade and only 0.26 mn sq ft of finished homes unsold. Launches sell fast (Crescent about 60% in a quarter). The weakness is that in-house building does not protect margins from homes sold years ago at low prices.",
        salesDrivers: ["**Launches**: Q1 FY27 launched 6.89 mn sq ft, and 8.2 mn sq ft more is planned in nine projects, effectively raising the year's target to about 15 mn sq ft.", "**Pre-sales**: guided at least 30% growth in FY27, after Q1 alone delivered 36% of FY26's total.", "**Pricing**: realisations rose 9.4% in FY26, but management says prices have been stable for 3–4 quarters and growth will come ‘more from volume’.", "**Land**: FY27 land spending raised to ₹1,500–1,600cr, including its first Mumbai plot (₹180cr) and a Greater Noida joint development; 1,749 acres are being aggregated.", "**Handovers**: 5.4 mn sq ft completed in FY26 and 6–6.5 mn sq ft targeted in FY27, which decides when the ₹20,553cr of sold homes turns into revenue."],
        inputs: "**Land, subcontractors, cement, steel and other building materials, and labour.** In FY26 its real estate segment spent ₹2,023cr on land, ₹1,157cr on project materials and ₹1,153cr on subcontractors. On the filed FY26 split, land, construction and materials were 16% of sales and project and site costs 54%; staff 10% and other costs 14%.",
        costEffect: "**Not protected on homes already sold.** Prices were fixed at booking, so inflation shows up as lower margins at handover; escalation buffers are built into budgets, and management is ‘wait-and-watch’ on passing new costs to buyers. Karnataka's minimum wage rose about 60% in May 2026, which it expects to absorb. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 7 points (6% to −1%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin fell from 21% in FY22 to 6% in FY26 because homes sold cheaply in FY22–FY23 were handed over after costs had risen; management now guides 17–20% by Q4 FY27, with Q2 about flat; in May it had said projects booked over the next 12 months would earn 24–26%.",
        competitors: [{ name: 'Prestige Estates and Brigade', note: 'Bengaluru rivals for premium buyers and land.' }, { name: 'DLF and Godrej Properties', note: 'The luxury leaders in Gurugram, where Sobha now sells about 38% of its homes.' }, { name: 'Puravankara', note: 'Bengaluru mid-market and premium rival with higher debt.' }],
        position: "**One of the few fully backward-integrated developers in India**, with 154 mn sq ft completed, and a fast-selling new luxury presence in Gurugram through Crescent.",
        money: "Screener shows **₹447cr of net cash** at March 2026; the company reports ₹659cr of net cash at June (gross debt ₹1,110cr at 7.62%). Collections of ₹7,798cr gave ₹1,637cr of operating cash in FY26 on the company's definition. It expects net debt near zero by March 2027 as it spends ₹1,500–1,600cr on land, and the board approved up to ₹1,000cr of debentures. A ₹1,984cr rights issue in FY25 cut debt from ₹3,052cr (March 2021). Its land advance to promoter-linked Technobuild is tied to the Enforcement Directorate's ₹201.6cr land attachment, under appeal. Rated AA- by ICRA. Promoters hold **52.9%**, up slightly from 52.3% in September 2023; no pledges.",
        watch: ["Operating margin of 15% or more by Q4 FY27.", "FY27 pre-sales above ₹10,500cr.", "The appeal against the ED land attachment."],
        charts: realtyCharts['Sobha'],
    },
    {
        company: 'Raymond Realty',
        inShort: ["**The Raymond group's developer**: a 100-acre Thane township on the group's old factory land plus eight joint developments in Bandra, BKC, Wadala, Sion, Mahim, Kandivali and Parel; listed in July 2025.", "**Good:** Q1 FY27 bookings rose 129%, joint developments now bring 64% of them, and CARE rates it A+. **Bad:** operating cash was −₹910cr in FY26, it expects two more cash-negative years, interest cut Q1 profit to ₹13cr, and Thane, its cash engine, sells less each year.", "**Verdict: wait.** Growing fast on borrowed time; the cash burn has to end first."],
        tagline: "A Mumbai-region developer moving from one paid-for Thane township to capital-light joint developments in prime Mumbai.",
        revenue: '₹2,991cr (FY26, consolidated)',
        products: [
            { name: 'Thane township (own land)', text: "100 acres at Pokhran Road with GDV about ₹25,000cr; ₹9,400cr sold and 11 towers (about 4,000 homes) delivered, selling at about ₹23,000–25,000 per sq ft. It earns 25–26% at the operating level." },
            { name: 'Joint developments', text: "Eight projects with landowners and societies, GDV about ₹27,000cr: Bandra East, BKC, Wadala and Sion launched (₹2,900cr sold); two in Mahim, Kandivali and an ₹8,500cr slum redevelopment in Parel to come. These start at single-digit margins and build towards about 20%." },
            { name: 'Brands', text: "TenX (aspirational), Address by GS (premium) and Invictus by GS (luxury), across a total GDV of ₹52,000cr, of which ₹15,700cr of launched stock is unsold." },
        ],
        revenueText: "It books revenue **as construction progresses**, so ₹2,991cr in FY26 reflects building work on sold flats. **Q1 FY27 bookings were ₹700cr** (+129%) and **collections ₹550cr** (+47%); joint developments were **64% of Q1 bookings** (54% in FY26, 22% in FY25). Thane pre-sales are shrinking, from about ₹1,950cr in FY24 to about ₹1,360–1,400cr in FY26. The company did not give one FY26 pre-sales total in the material read.",
        mixes: [
            { caption: 'Bookings by source, Q1 FY27 (company call)', parts: [{ label: 'Joint developments', share: 64 }, { label: 'Thane own land', share: 36 }] },
        ],
        customers: ["**Middle-class and upper-middle-class Thane families**, many upgrading within the city, in a market where management says ‘most people in Thane don't have pricing power’.", "**Premium Mumbai buyers** in Bandra, BKC, Wadala and Mahim.", "**Landowners, societies and slum dwellers** who contribute land in return for new homes or a revenue share."],
        difficulty: { level: 'Medium', text: "Building in Thane is routine, but society and slum redevelopments take years: the Mahim deal signed in 2023 has taken about 2.5 years to reach launch, and CARE notes a ‘limited track record in large-scale real estate development’." },
        moat: "Paid-for, cheaply held Thane land and the Raymond name gave it a cash engine; over 85% of earlier launches are sold. The weakness is that Thane is crowded (Lodha, Adani, Oberoi, Kalpataru, Piramal) and the new joint developments earn far less.",
        salesDrivers: ["**Launches**: two Mahim projects (about ₹2,500cr and ₹2,000–2,200cr) between November and March; Kandivali in FY28 and Parel about 18 months away.", "**Pre-sales**: at least 20% growth guided for FY27, driven by joint developments as Thane settles at ₹1,300–1,500cr a year.", "**Pricing**: little room in Thane, where price rises are ‘very marginal’; prime Mumbai projects carry higher prices.", "**Land**: FY26 added about ₹3,000cr of GDV against a ₹5,000–10,000cr target; FY27 has added Parel and Kandivali.", "**Construction pace**: with revenue booked as building progresses, construction speed on launched projects sets reported growth."],
        inputs: "**Construction (cement, steel, ceramics, labour), government approval premiums and landowner deposits.** Each ₹2,000cr joint development needs ₹300–350cr, mostly approval costs plus a 10–15% landowner deposit. On the filed FY26 split, project and site costs were 163% of sales, largely offset by work added to stock, so net project costs were about 72% of sales; staff 5% and other costs 8%.",
        costEffect: "**Partly protected.** Management sees war-related cost pressure as temporary, puts the prolonged impact at 3–4% and expects to pass it on; suppliers are holding contracted rates. Flats already sold are at fixed prices, and the thin early margins on joint developments leave little cushion. **Rule of thumb:** a 10% rise in net land, construction and project costs not passed on would cut the margin by about 7 points (15% to 8%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin rose from 11% in FY25 to 15% in FY26 (8% in Q1 FY26, 20% in Q4 when the Thane mix was richer), then fell to 12% in Q1 FY27 as lower-margin joint developments grew; the margin guide moved from 16–18% to 17–19% without explanation.",
        competitors: [{ name: 'Lodha, Adani, Oberoi, Kalpataru, Piramal', note: 'Large developers crowding the Thane market.' }, { name: 'Keystone (Rustomjee) and Mahindra Lifespace', note: 'Listed rivals for Mumbai society and joint-development deals.' }, { name: 'Godrej Properties', note: 'Aggressive bidder for Mumbai joint developments.' }],
        position: "**One of the larger sellers in Thane** through its township, now building a ₹52,000cr pipeline across prime Mumbai through joint developments.",
        money: "Screener shows **₹659cr of net debt** at March 2026; the company puts it at ₹824cr at June, 0.7 times equity against an internal cap of 1 times, at 9.6%. Filed operating cash was −₹910cr in FY26 as it paid approval premiums and landowner deposits for joint developments; Thane releases about ₹450–500cr a year, and management says the company will stay cash-negative for two more years. Interest of ₹100–120cr is guided for FY27, including interest on approval-premium instalments. Project-level fund money is an option. Management called new equity the ‘last resort’, but on 11 September 2026 the board approved up to ₹409cr of warrants at ₹614 for promoter-group company J K Investors (Bombay), and holders approved them on 8 October; full conversion adds 10% more shares (about 9% dilution) and raises the promoter stake. Rated A+ by CARE; an income-tax survey in September 2025 is being monitored. Promoters hold **50.9%**, up from 48.9% in June 2025; no pledges.",
        watch: ["The two Mahim launches between November and March.", "Operating margin reaching 17%.", "Net debt staying below one times equity.", "Thane bookings holding at ₹1,300–1,500cr a year."],
        charts: realtyCharts['Raymond Realty'],
    },
    {
        company: 'Puravankara',
        inShort: ["**A 50-year-old Bengaluru developer** selling under three brands (Puravankara premium, Provident mid-market, Purva Land plots) in Bengaluru, Chennai, Kochi, Pune and Mumbai, and now Greater Noida.", "**Good:** record FY26 pre-sales of ₹7,407cr (+55%) and Q1 FY27 up 28%, with prices up 18–21%. **Bad:** net debt is 1.57 times equity at 11.12%, so interest roughly equals operating profit, and it keeps buying land while promising to cut debt; it has missed RERA deadlines on 2.1 mn sq ft, and its auditor flags legal cases including a Benami Act notice.", "**Verdict: wait.** Sales are strong; wait until debt actually falls."],
        tagline: "A multi-city home builder with its own construction arm and a growing Mumbai redevelopment book, carrying some of the highest-cost debt among listed developers.",
        revenue: '₹3,740cr (FY26, consolidated)',
        products: [
            { name: 'Premium homes (Puravankara)', text: "Premium and luxury projects such as Northern Lights in Bengaluru (about ₹10,700 per sq ft, 20–21% gross margin) and Mumbai redevelopments from Lokhandwala to Breach Candy and Malabar Hill." },
            { name: 'Mid-market homes (Provident)', text: "Larger-volume projects for salaried buyers in Bengaluru, Chennai, Pune and Kochi." },
            { name: 'Plots (Purva Land)', text: "Plotted developments, its highest-margin line at 35–40% gross." },
            { name: 'Construction and offices', text: "Starworth, its in-house builder (order book above ₹2,000cr); Purva Aerocity offices in north Bengaluru (1.3 mn sq ft completed); and Purva Zentech, being sold to ICICI Prudential AMC for about ₹625cr." },
        ],
        revenueText: "Revenue follows handovers (3,747 homes in FY26). **FY26 pre-sales were a record ₹7,407cr** (7.25 mn sq ft at ₹10,213 per sq ft) and **collections ₹4,258cr** (+15%), against filed revenue of ₹3,740cr. In Q1 FY27 pre-sales were ₹1,439cr (+28%) and collections ₹1,199cr (+40%). By value of ongoing projects, **Bengaluru was 53%**, Mumbai and Pune 25%, Chennai 13% and Kochi 6% (H1 FY26).",
        mixes: [
            { caption: 'Ongoing projects by value, H1 FY26 (India Ratings)', parts: [{ label: 'Bengaluru', share: 53 }, { label: 'Mumbai and Pune', share: 25 }, { label: 'Chennai', share: 13 }, { label: 'Kochi', share: 6 }, { label: 'Other', share: 3 }] },
        ],
        customers: ["**Salaried and professional home buyers** in Bengaluru and the south, buying mid-market Provident flats or premium Puravankara homes, mostly with home loans.", "**Mumbai housing societies** whose buildings it redevelops, and buyers of the new flats.", "**Office tenants** at Aerocity, and investors such as ICICI Prudential AMC buying its finished offices."],
        difficulty: { level: 'Medium', text: "It builds through its own contractor, Starworth, but approvals are the bottleneck: Bengaluru's e-Khata changes and a new state government delayed launches, and four projects missed RERA completion deadlines on 2.1 mn sq ft." },
        moat: "A 50-year name, three brands across price points and a 56 mn sq ft land bank give it a large pipeline, and launches sell (Northern Lights about 30% at launch). The weakness is money: at 11%+ it borrows 3–4 points dearer than AA-rated rivals.",
        salesDrivers: ["**Launches**: 20.48 mn sq ft (GDV about ₹27,300cr) planned; Hennur Road, Kochi and several Q1 launches have slipped, and management says Q2 launches ‘may go to Q3’.", "**Pre-sales**: FY27 guidance of ₹11,200cr (+51%) kept, about 52% from new launches; Q1 delivered about 13% of it.", "**Pricing**: realisations up 21% in FY26 and 18% in Q1 FY27 to ₹10,589 per sq ft, partly from a richer Mumbai mix.", "**Land**: four Bengaluru deals in Q1 (GDV ₹5,200cr, ₹574cr paid), six deals in FY26 (GDV about ₹15,200cr) and a Greater Noida entry in September (GDV about ₹5,200cr).", "**Mumbai redevelopment**: about ₹25,000cr of GDV, including Pali Hill in October–November and Deonar Baug in Q4."],
        inputs: "**Construction (cement, steel, diesel, labour), land and approvals.** Building costs rose 6–7% on higher diesel prices, covered by contingencies. On the filed FY26 split, land, construction and materials were 2% of sales and project and site costs 56%; staff 8% and other costs 15%.",
        costEffect: "**Partly protected.** Contingencies absorbed the latest 6–7% rise, but redevelopment and joint-development projects earn only about 20%, leaving limited room, and flats are sold at fixed prices years ahead. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 6 points (18% to 12%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin was 22% in FY22, dipped to 14% in FY25 and recovered to 18% in FY26 and 22% in Q1 FY27 as higher-priced sales were handed over; the bigger drag is interest of ₹679cr in FY26, about equal to operating profit.",
        competitors: [{ name: 'Prestige, Brigade and Sobha', note: 'Larger, lower-cost Bengaluru rivals.' }, { name: 'Godrej Properties', note: 'National developer competing in Bengaluru, Pune and Mumbai.' }, { name: 'Mumbai redevelopers (Keystone, Mahindra Lifespace)', note: 'Compete for the same society projects.' }],
        position: "**One of the older and larger Bengaluru developers**, with a 56.48 mn sq ft land bank and a portfolio of about ₹58,500cr.",
        money: "Screener shows **₹4,110cr of net debt** at March 2026; the company puts it at ₹2,836cr at June, 1.57 times equity, up about ₹515cr in the quarter after ₹574cr of land payments, at an average 11.12%. About ₹1,400cr of project debentures are repaid from project profits. Collections of ₹4,258cr in FY26 were well below ₹7,407cr of pre-sales. It targets a ₹700cr debt cut (was ₹750cr), helped by the Zentech sale, which repays about ₹250cr; management says ‘debt is an important part of the business’. It also uses joint developments with landowners (for example with KVN in north Bengaluru). Rated A- by India Ratings. No dividend for two years. Promoters hold **75.0%**, unchanged; no pledges.",
        watch: ["FY27 pre-sales against ₹11,200cr.", "Net debt actually falling after the Zentech sale.", "The Benami Act notice on 43.5 acres."],
        charts: realtyCharts['Puravankara'],
    },
    {
        company: 'Sri Lotus',
        inShort: ["**A Mumbai luxury developer that rebuilds old housing societies** in Juhu, Versova, Bandra and Prabhadevi, selling at about ₹86,000 per sq ft; listed in August 2025.", "**Good:** H1 FY27 pre-sales rose 176% to ₹879cr, the Q2 operating margin was 40%, it kept its ₹1,800–2,000cr FY27 guide and it holds net cash. **Bad:** it books profit as it builds but collected only ₹209cr in H1 (₹376cr against ₹769cr of FY26 revenue); launches keep slipping (Lotus Monarch by a year), and the promoter must sell more shares.", "**Verdict: wait.** High margins, but collections and launches need to catch up first."],
        tagline: "An asset-light Mumbai developer of sea-facing luxury homes and offices, built mostly by redeveloping old society buildings rather than buying land.",
        revenue: '₹769cr (FY26, consolidated)',
        products: [
            { name: 'Luxury residential redevelopment', text: "17 residential projects, most of them old societies in Juhu, Versova, Andheri West and Bandra rebuilt as luxury towers: Amalfi, The Arcadian, Varun and Celestia (GDV ₹1,400–1,500cr) launched in FY26." },
            { name: 'South Mumbai expansion', text: "Lotus Aquaria in Prabhadevi (from about ₹85,000 per sq ft) and Lotus Trident in Andheri West launched in Q1 FY27, with a combined GDV of ₹1,350cr; Napean Sea Road is in the pipeline." },
            { name: 'Commercial', text: "Five commercial projects, including a Juhu commercial redevelopment (GDV ₹1,600cr) signed in FY27 and a GIFT City mixed-use project (GDV ₹2,000–2,200cr) awaiting zoning." },
        ],
        revenueText: "Unlike most developers, it books revenue **as construction progresses**, so ₹769cr of FY26 revenue reflects building work, not handovers. **FY26 pre-sales were ₹1,157cr** (+137%) and **collections only ₹376cr**; in Q1 FY27 pre-sales were ₹409cr (+567%) and collections ₹150cr, and in Q2 ₹470cr (+83%) and ₹60cr. The pipeline of 24 projects is worth about ₹20,000cr after three were added in Q2. The company does not split revenue by project or area.",
        customers: ["**Rich Indian families and non-resident Indians** buying homes costing more than ₹10–12cr, who management says are not swayed by ‘external forces’.", "**Housing societies and their members**, who hand over old buildings in return for new, larger flats; they are partners as much as customers.", "**Business owners** buying or leasing its commercial redevelopments."],
        difficulty: { level: 'High', text: "Redevelopment needs the trust of every society member, tenant and bungalow owner, plus a long chain of Mumbai approvals; one Ghatkopar project is stuck in the Supreme Court. Three projects are already 3–4 quarters late." },
        moat: "Scarce sea-facing and garden-facing plots and the founder's reputation in Juhu let it claim a 10–25% price premium over neighbours; projects sell 38–62% within a year. The weakness is its small scale and dependence on one founder and a narrow set of luxury buyers.",
        salesDrivers: ["**Launches**: six were planned for FY27 (GDV ₹5,000–5,500cr); only Aquaria and Trident happened, with Sky Plaza (about ₹1,500cr) moved to Q3, Odyssey to Q4 and Aurelia undated.", "**Pre-sales**: FY27 guidance of ₹1,800–2,000cr was kept, although only about ₹25cr of Q1 came from the new launches.", "**Pricing**: prices rose 5–10% in the past year, with an average of about ₹86,000 per sq ft in Q1 FY27.", "**New society deals**: it plans 4–6 new projects in FY27, investing about 10% of GDV each; the Juhu commercial project is the first.", "**Construction progress**: under its accounting, revenue rises as Arcadian and Varun near 90% completion by March 2027."],
        inputs: "**Payments to societies (rent, corpus and new flats for members), approval premiums and construction.** Construction is only about 20% of the selling price. On the filed FY26 split, land, construction and materials (including society costs) were 55% of sales; staff 2% and other costs 7%.",
        costEffect: "**Mostly insulated.** Management said input costs rose about 7% and labour about 5% after the West Asia conflict, which adds only 1.5–2.5% to total cost because construction is a fifth of the price; it uses no imported materials. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 6 points (37% to 31%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin rose from 14% in FY22 to 53% in FY25 and settled at 36% in FY26 as high-priced launches moved into construction; the Q1 FY27 call spoke of 33–36% against a 35–40% guide.",
        competitors: [{ name: 'Keystone (Rustomjee) and Sunteck', note: 'Larger Mumbai redevelopment and luxury developers.' }, { name: 'Lodha, Oberoi, Godrej Properties', note: 'Big-brand luxury developers bidding for the same societies and buyers.' }, { name: 'Suraj Estate and Marathon', note: 'Smaller listed Mumbai redevelopers.' }],
        position: "**A small but fast-growing niche player in Mumbai's western-suburb luxury redevelopment**, with one of the highest selling prices among listed developers.",
        money: "Screener shows **₹718cr of net cash** at March 2026; the company reports ₹494cr at September 2026 (₹623cr at June), largely from its ₹792cr IPO, of which ₹271cr of the ₹550cr earmarked for projects had been used by June. Collections lag badly: filed operating cash was −₹326cr in FY26 while ₹718cr went into projects. It invests about 10% of GDV before launch through society development agreements rather than buying land. It owed its promoter ₹75cr at March and has no credit rating. Promoters held **81.9%** at June; the founder sold 2% on 10 September, leaving 79.87%, and must reach 75%.",
        watch: ["Collections picking up in H2 as projects clear the basement (₹209cr in H1 against about ₹1,000cr hoped for in FY27).", "Aurelia, Sky Plaza, Portofino and Odyssey launching in H2 (₹3,500–4,000cr of GDV).", "The pace of further promoter share sales."],
        charts: realtyCharts['Sri Lotus'],
    },
    {
        company: 'Max Estates',
        inShort: ["**The Max Group's developer in Noida, Gurugram and Delhi**: fully let Grade-A offices that bring in all of today's revenue, plus premium homes that will be booked from FY28; New York Life owns about 20.4%.", "**Good:** about ₹13,500cr of sold homes still to book, fully let offices and a first rating of ICRA A+. **Bad:** it missed FY26 pre-sales guidance and then dropped guidance, has delivered only about 2 mn sq ft of homes, pays sister company Antara about 9–9.5% of senior-living sales, and is buying 84.7 acres of Delhi land from its promoter group for new shares.", "**Verdict: wait.** Real value, but wait for handovers and cleaner related-party dealings."],
        tagline: "A Delhi NCR developer of rented offices and premium ‘LiveWell’ housing communities, some with senior-living homes run by its sister company Antara.",
        revenue: '₹199cr (FY26, consolidated)',
        products: [
            { name: 'Offices for rent', text: "Max Towers and Max Square in Noida and Max House in Delhi, about 1.2 mn sq ft, 100% let, earning ₹150–155cr of rent in FY26. Max Square Two (about 1 mn sq ft) and Max District in Gurugram (1.6 mn sq ft) are being built; peak rent is put at about ₹350cr a year as its share." },
            { name: 'Premium homes', text: "Estate 128 (sold out, ₹2,700cr) and Estate 105 in Noida, Estate 360 and Estate 361 in Gurugram, and Max One in Noida, sold at about ₹23,000 per sq ft on average in FY26 and ₹37,000 at Max One." },
            { name: 'Senior-living homes', text: "Parts of Estates 360 and 361 are branded Antara and run by sister company Max India, which takes a fee of about 9–9.5% of sales; management says they sell at a 7–10% premium." },
            { name: 'New land', text: "Sector 59 on Golf Course Extension Road (GDV ₹3,500–3,900cr) to launch in Q3 FY27, 84.7 acres at Najafgarh under Delhi's land-pooling policy, and a 9.76-acre joint development in Ghaziabad under a binding MoU." },
        ],
        revenueText: "All of today's revenue is **office rent, maintenance fees and other income**: no home has been handed over yet, and the first handover (Estate 128) is due in FY28. The housing business shows up only in **pre-sales (₹5,305cr in FY26, flat, including ₹1,221cr of inherited Max One buyers; about ₹1,093cr in Q1 FY27)** and **collections (₹1,578cr in FY26; about ₹575cr in Q1)**. About ₹13,500cr of sold homes are still to be booked, with an estimated ₹4,500–5,500cr of pre-tax profit.",
        mixes: [
            { caption: 'Office rent by building, FY26 (company call)', parts: [{ label: 'Max Square', share: 38 }, { label: 'Max Towers', share: 34 }, { label: 'Max House', share: 28 }] },
        ],
        customers: ["**Affluent NCR home buyers**, many paying on back-loaded plans that bring in only 20–25% of the sale value each year; cancellations are ‘negligible’.", "**Office tenants** paying premium rents: the latest Max Towers lease was ₹156 per sq ft a month against a portfolio average of ₹132, with pre-leases at 25–35% above local rents.", "**Older buyers** choosing the Antara senior-living homes inside its communities."],
        difficulty: { level: 'High', text: "It has delivered only about 2 mn sq ft of homes and is building several large residential and office projects at once. Its new Delhi land depends on the land-pooling policy, which has a long history of delay." },
        moat: "The Max name, design-led communities and a partner in New York Life let it sell launches fast (Estate 105 took about ₹1,800cr in 10 days) and let offices at premium rents. The weakness is its thin delivery record and its dealings with promoter-group companies.",
        salesDrivers: ["**Launches**: ₹11,900cr of GDV is planned across Gurugram and Noida in FY27, including Sector 59 in Q3 and Estate 105 Phase 2, pulled forward from FY28.", "**Pre-sales**: no guidance for FY27, after missing FY26's ₹6,000–6,500cr; Q1 sold about ₹1,093cr, five times a year earlier.", "**Pricing**: average realisations rose from ₹18,410 per sq ft in FY24 to about ₹23,000 in FY26.", "**Land**: Najafgarh (84.7 acres, bought from the promoter group for ₹420.2cr of shares) and a Ghaziabad joint development; it does not borrow to buy land.", "**Rent**: Max Square Two (about ₹125cr a year) and Max District (₹200–225cr) are due from FY28–FY29, underwritten at a 12–14% yield on cost."],
        inputs: "**Construction of homes and offices (cement, steel, aluminium, labour), approvals and land.** It manages projects in-house and buys materials direct from manufacturers rather than using turnkey contractors. On the filed FY26 split, land, construction and materials were 2% of sales and project and site costs 7%, because almost all housing spending is held in inventory until handover; staff were 17% and other costs 61%.",
        costEffect: "**Partly protected.** Project budgets include escalation and contingency buffers and inflation has so far been absorbed, but homes are sold at fixed prices; Estates 360 and 361, at 20–25% project margins, have the least room. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the filed margin by only about 1 point (12% to 11%), because today's filed costs are mostly office running costs; the real exposure sits in the housing projects not yet booked. **What happened:** there is no single price index for a developer's costs, so no input chart. The filed operating margin fell from 45% in FY22 to 12% in FY26 as staff and overheads for the housing business grew while revenue was still only office income (rent, maintenance fees and other income).",
        competitors: [{ name: 'DLF and Godrej Properties', note: 'Large rivals for premium Gurugram and Noida buyers.' }, { name: 'Signatureglobal and Sobha', note: 'Listed peers selling premium towers in Gurugram.' }, { name: 'Office REITs', note: 'Embassy, Brookfield and others set the rents and yields its offices are judged against.' }],
        position: "**A small but premium-priced NCR developer**: Max One sold at about ₹37,000 per sq ft, the highest in Noida, and its offices are fully let.",
        money: "Screener shows **₹1,797cr of net debt** at March 2026; the company puts net debt at ₹234cr at June (gross ₹1,960cr, of which ₹934cr is rent-backed, against ₹1,727cr of cash), with about ₹1,200cr of surplus in RERA accounts. It spends ₹1,500–1,800cr more on offices, funded by equity from itself and New York Life and construction loans that convert to rent-backed loans. Land is paid from its own cash or promoter money, never debt. Filed operating cash was −₹616cr in FY26. FY27 collections are guided at ₹2,500–2,700cr, with ₹10,000cr still to collect on homes sold. The Najafgarh deal, approved by shareholders on 24 September, issues up to 70.3 lakh new shares to the promoter group, 4.3% more shares, at ₹597.50 each, above the ₹540–560 market price when it was announced in August. Promoters hold **45.3%**, down from 49.5% in December 2023; no pledges.",
        watch: ["Estate 128 handed over on time in FY28.", "FY27 collections of ₹2,500–2,700cr.", "No further related-party land deals."],
        charts: realtyCharts['Max Estates'],
    },
    {
        company: 'Ajmera Realty',
        inShort: ["**A five-decade Mumbai developer** centred on the Wadala township (Manhattan and Greenfinity), with projects in Bhandup, Vikhroli, Bandra, Versova and Bengaluru and land at Kanjurmarg.", "**Good:** FY26 pre-sales rose 57% to ₹1,701cr, beating guidance, with debt at 0.53 times equity against 0.85 allowed. **Bad:** Q1 FY27 pre-sales were only ₹146cr, management did not repeat its ₹2,200cr target, 95% of FY27 launch value sits in H2 and its debt costs 11%.", "**Verdict: wait.** A strong year followed by an empty quarter; wait for the H2 launches and Kanjurmarg."],
        tagline: "A Mumbai developer whose value rests on a car-free township at Wadala, moving to asset-light redevelopment and joint development.",
        revenue: '₹1,090cr (FY26, consolidated)',
        products: [
            { name: 'Wadala township', text: "Manhattan 1 (93% sold, about ₹37,000 per sq ft), Manhattan 2 (over 50% sold) and Greenfinity (94% sold); remaining GDV about ₹18,000cr after extra building rights, including a ₹3,600cr boutique-office phase planned for Q3 FY27." },
            { name: 'Other Mumbai projects', text: "Vihara in Bhandup, Solis in Vikhroli (86% sold), 33Fifteen offices in Bandra and Vann luxury homes in Versova, which sold nothing in Q1 FY27." },
            { name: 'Bengaluru', text: "Iris and Marina, plus a new Whitefield project (₹389cr) and plots at Yelahanka and Doddaballapur." },
            { name: 'Kanjurmarg land', text: "11 plus 7 acres awaiting conversion from leasehold to freehold, promised ‘next quarter’ since May 2026; the 7 acres may be sold or developed in a joint venture." },
        ],
        revenueText: "It books revenue **as construction progresses**, once a project is 25% built and 10% collected. **FY26 pre-sales were ₹1,701cr** (+57%, four launches were 82% of it) at ₹25,770 per sq ft, and **collections ₹1,103cr** (+71%); in Q1 FY27 pre-sales fell to ₹146cr and collections were ₹173cr. It has ₹1,661cr of sold homes still to book and ₹2,185cr of unsold stock. The company does not split revenue by project.",
        customers: ["**Upper-middle-class Mumbai families** buying at Wadala, most through repeat and referral sales, per CRISIL; buyers now take 50–60 days to decide instead of 30–45.", "**Housing societies** whose buildings it redevelops in the suburbs.", "**Bengaluru home and plot buyers**, and future office buyers at Wadala."],
        difficulty: { level: 'Medium', text: "Building is routine for a company with about 155 projects delivered; the difficulty is approvals and land titles, above all the Kanjurmarg conversion, and the size of the ₹3,600cr office launch, its largest ever." },
        moat: "A five-decade name and a car-free township at Wadala that lets it raise prices 10–15% a year; launches sell (Manhattan 2 about 40% in 15–20 days). The weakness is dependence on one township and dearer money than larger rivals.",
        salesDrivers: ["**Launches**: ₹6,508cr planned for FY27, 95% in H2: the Q3 boutique office (₹3,650cr) and Q4 launches in Borivali, Pune, Whitefield and Doddaballapur, some already delayed.", "**Pre-sales**: ₹2,200cr was guided in May but not restated in August after a ₹146cr quarter; Q2 brought ₹224cr (down 69% on the year), so H1 was about ₹370cr.", "**Pricing**: Manhattan prices are expected to rise 10–15% a year despite Raymond's competition nearby.", "**Land**: ₹1,500–1,800cr of new GDV targeted in FY27 (₹389cr done), mostly redevelopment and joint development; Kanjurmarg's conversion is due by December.", "**Asset sales**: ₹330cr of asset monetisation guided, ₹89cr received in Q1."],
        inputs: "**Construction (cement, steel, aluminium formwork, labour), approvals and land.** It doubled its fixed assets to over ₹60cr on aluminium formwork. On the filed FY26 split, project and site costs were 58% of sales; staff 6% and other costs 12%.",
        costEffect: "**Partly protected.** Management cited cost escalation from West Asia supply disruption without numbers; strong Wadala pricing gives room, but homes are sold at fixed prices and booked as they are built. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 6 points (27% to 21%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin rose from 24% in FY22 to 27% in FY26 and has held at 25–30% for five quarters on Wadala; interest, not input costs, is the bigger drag, with Q1 FY27 interest jumping to ₹30cr as capitalised private-equity debt on Solis was expensed.",
        competitors: [{ name: 'Raymond Realty and Lodha', note: 'Compete near Wadala and in central Mumbai.' }, { name: 'Godrej Properties and Mahindra Lifespace', note: 'Compete in Vikhroli, Bhandup and Kanjurmarg.' }, { name: 'Bengaluru mid-sized developers', note: 'Compete for its smaller Bengaluru projects.' }],
        position: "**A mid-sized Mumbai developer** with about 155 projects (20.7 mn sq ft) delivered and a dominant position at Wadala.",
        money: "Screener shows **₹624cr of net debt** at March 2026. Debt was ₹680cr at June (0.47 times equity) at 11.01%, with cash of about ₹87cr; management now expects debt to stay ‘much lower’ than the 1 times it allowed in May. CRISIL (A-) expects about ₹1,465cr of new debt over the life of FY27's launches. It guarantees about ₹446cr of loans for group project companies. Filed operating cash was ₹69cr in FY26; collections were 65% of pre-sales. Promoters hold **68.6%**, down from 69.7% in September 2023.",
        watch: ["The Q3 boutique-office launch.", "The Kanjurmarg freehold conversion by December.", "H2 FY27 pre-sales from the delayed launches, after only about ₹370cr in H1."],
        charts: realtyCharts['Ajmera Realty'],
    },
    {
        company: 'Shriram Properties',
        inShort: ["**A mid-market developer in Bengaluru, Chennai, Kolkata and Pune**, mostly through joint developments; its promoters own only 27.89%.", "**Good:** record Q1 FY27 sales of ₹484cr, net debt of 0.29 times equity, a positive CRISIL outlook and Kolkata land that could release ₹1,200–1,400cr of cash. **Bad:** it missed FY26 sales guidance, none of its nine remaining FY27 launches had approval at June, contested tax claims of about ₹628cr are roughly two-fifths of its net worth, and its auditor flags an Enforcement Directorate search.", "**Verdict: wait.** Cheap for reasons; wait for the approvals and the tax cases."],
        tagline: "An asset-light South India developer of mid-market and affordable homes, plots and villas, part of the Shriram group.",
        revenue: '₹1,267cr (FY26, consolidated)',
        products: [
            { name: 'Mid-market homes', text: "Apartments in Bengaluru, Chennai and Pune at an average of about ₹7,600–7,700 per sq ft (about ₹5,000 before COVID); Spectrum in Pune sold 300-plus units in under a year." },
            { name: 'Legacy affordable projects', text: "Low-price Kolkata and Chennai homes (₹18–24 lakh tickets at Grand One and Sunshine One) still being handed over; about 40% of Q1 FY27 revenue." },
            { name: 'Plots and villas', text: "‘Branded land’ plots and villas, including Southbrook (about 55% sold in 30 days) and the Kolkata Uttarpara land, where about 105–110 acres were freed in a settlement with the state." },
        ],
        revenueText: "Revenue is booked mainly on completion. **FY26 sales (pre-sales) were ₹2,354cr**, roughly flat, and **collections ₹1,661cr** (+12%), against filed revenue of ₹1,267cr; Screener leaves out the ‘other operating income’ from joint ventures and selling development rights that the company counts in its ₹1,357cr. In Q1 FY27 sales were a record ₹484cr (+10%) and collections ₹365cr (+8%). **About 40% of Q1 revenue came from low-margin Kolkata legacy projects.**",
        mixes: [
            { caption: 'Revenue by project type, Q1 FY27 (company call)', parts: [{ label: 'Newer projects', share: 60 }, { label: 'Kolkata legacy', share: 40 }] },
        ],
        customers: ["**Salaried middle-class buyers** in Bengaluru, Chennai and Pune, mostly first homes bought with loans.", "**Buyers of low-cost homes** in Kolkata and Chennai from its older projects.", "**Landowners and partners** in joint ventures, joint developments and development-management deals, over 60% of its portfolio."],
        difficulty: { level: 'Medium', text: "Mid-market building is routine; the bottleneck is approvals. Bengaluru's e-Khata and Kaveri portal problems and Maharashtra RERA timing delayed FY26 and have held up all nine remaining FY27 launches." },
        moat: "The Shriram name, a low-capital joint-development model and fast-selling launches in chosen micro-markets. The weakness is thin margins, reliance on joint-venture income and a small promoter stake.",
        salesDrivers: ["**Launches**: about 6 mn sq ft (GDV about ₹6,000cr) in FY27, mostly in Q3–Q4: Gateway in Chennai, Manjari and Hinjewadi in Pune, and Bannerghatta, Yelahanka, Doddagubbi and Sarjapura in Bengaluru.", "**Pre-sales**: FY27 guidance of ₹3,300–3,500cr kept, with ₹1,400–1,500cr from earlier projects; about ₹2,850cr is needed in nine months.", "**Pricing**: sustenance prices rise only 4–5% a year, so management expects ‘margin protection’, not expansion.", "**Land**: ₹372cr invested across seven projects in FY26 and ₹88cr in Q1 FY27, adding a Doddagubbi joint development (GDV about ₹650cr).", "**Kolkata land**: plots and villas earn about ₹6.5–7.5cr per acre against ₹3.5–4.5cr from a bulk sale, with ₹1,200–1,400cr of cash potential over about five years."],
        inputs: "**Construction (cement, steel, labour), landowner shares and approvals.** Construction costs are rising 8–10%. On the filed FY26 split, land, construction and materials were 5% of sales and project and site costs 67%; staff 8% and other costs 13%.",
        costEffect: "**Not well protected.** Costs are rising 8–10% while sustenance prices rise 4–5%, and legacy homes were sold years ago at low prices. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 7 points (7% to 0%). **What happened:** there is no single price index for a developer's costs, so no input chart. The filed operating margin fell from 17% in FY22 to 7% in FY26; on the company's own definition, which adds joint-venture and development-rights income, it fell from 22.5% in FY23 to about 13.5% in FY26, as low-price legacy projects dominated handovers.",
        competitors: [{ name: 'Puravankara (Provident) and Brigade', note: 'Mid-market rivals in Bengaluru and Chennai.' }, { name: 'Casagrand', note: 'Large private Chennai mid-market developer.' }, { name: 'Local Kolkata and Pune developers', note: 'Compete for plotted and mid-market buyers.' }],
        position: "**A mid-sized South India mid-market developer**, with a pipeline of about ₹13,530cr and eight projects (about 4 mn sq ft) delivered in FY26.",
        money: "Screener shows **₹465cr of net debt** at March 2026; the company puts it at ₹432cr at June (gross ₹651cr, cash ₹219cr), 0.29 times equity, at about 11%, and says gearing may rise in FY27 against a long-term comfort level of 0.5 times. Its own operating cash was ₹271cr in FY26, before land deals; Screener shows −₹16cr. About 80% of four years' operating cash has gone back into land and joint developments, and it is committed to fund two loss-making joint ventures. Rated A-/Positive by CRISIL. An ED search (October 2024) and about ₹628cr of contested income-tax claims at the parent sit in the annual report. No dividend. Promoters hold **27.9%**, unchanged.",
        watch: ["Approvals for the Q3 launches (Manjari, Bannerghatta, Yelahanka).", "FY27 sales against ₹3,300–3,500cr.", "Any finding from the ED search."],
        charts: realtyCharts['Shriram Properties'],
    },
    {
        company: 'Eldeco Housing & Ind',
        inShort: ["**The Eldeco group's listed Lucknow developer**: plotted townships, villas, apartments and small commercial projects; FY26 revenue ₹165cr.", "**Good:** FY26 bookings more than doubled to ₹744cr on Solano Gardens, Q1 FY27 margins beat guidance on plots at about 60% gross, and a ₹52.3cr loan to a promoter company was repaid. **Bad:** it gives no bookings guidance, its four new parcels still await approvals, and its accounts say balances are ‘subject to reconciliation and confirmation’.", "**Verdict: wait.** High margins, vague plans; wait for the new parcels to launch."],
        tagline: "A small, high-margin Lucknow developer of plotted townships and group housing, buying land at government auctions.",
        revenue: '₹165cr (FY26, consolidated)',
        products: [
            { name: 'Plots and villas', text: "Plotted phases such as Imperia at Eldeco City, earning 50–60% gross margins; Imperia Phase 2 was about 85% of Q1 FY27 revenue." },
            { name: 'Group housing', text: "Apartment projects such as Solano Gardens (343 of 433 units sold, more than ₹384cr booked), Latitude 27 (₹270–300cr), Trinity and Twin Towers, at lower margins." },
            { name: 'Commercial', text: "A commercial strip in Eldeco City (Imperia Avenue and City Courtyard)." },
            { name: 'New parcels', text: "3.39 mn sq ft of forthcoming projects, including two Lucknow Development Authority plots, Shaheed Path and a 50.3-acre site under contract; land bank 95.5 acres." },
        ],
        revenueText: "Revenue is booked on possession, so it lags bookings badly: **FY26 bookings were ₹744cr** (+120%) and **collections ₹352cr** (+39%), against revenue of ₹165cr. In Q1 FY27 bookings were ₹106cr and collections ₹131cr (+68%). **About 85% of Q1 revenue came from plotted Imperia Phase 2.** Unsold and to-launch GDV is about ₹4,000cr, to be sold over five to seven years.",
        mixes: [
            { caption: 'Revenue by project, Q1 FY27 (company call)', parts: [{ label: 'Imperia Phase 2 plots', share: 85 }, { label: 'Other projects', share: 15 }] },
        ],
        customers: ["**Lucknow families buying plots and villas** to build their own homes, the highest-margin sales.", "**Middle-class apartment buyers** in its group-housing projects, at about ₹8,000–11,000 per sq ft on new projects.", "**Shop and office buyers** in its township commercial strips."],
        difficulty: { level: 'Low', text: "Plotted development needs roads and services, not towers, and group housing in Lucknow is routine; the hard part is winning government auctions and approvals on time." },
        moat: "A known name in Lucknow and low-cost land from government auctions; Solano Gardens sold 79% at launch. The weakness is a single city, small scale (under 10% of a Lucknow market of about ₹5,000cr a year) and some slow-selling towers.",
        salesDrivers: ["**Launches**: management now says ‘almost all’ of four forthcoming projects (about 26.8 lakh sq ft) will launch in FY27, after saying in May they would come at year-end ‘if at all’.", "**Pre-sales**: no guidance; FY27 bookings are to show ‘strong growth’ on ₹744cr, and FY28 is called ‘pivotal’.", "**Pricing**: new projects sell at about ₹8,000–11,000 per sq ft, above the portfolio average.", "**Land**: about ₹2,000cr of GDV added in FY26 through two LDA auctions and Shaheed Path, plus a 50.3-acre contract in Q1 FY27.", "**Handovers**: Imperia Phase 2 (about ₹140cr) drives FY27 profit; part of Latitude 27 slips into FY28."],
        inputs: "**Land (mostly bought at government auctions), construction (cement, steel, labour) and approvals.** On the filed FY26 split, land, construction and materials were 44% of sales; staff 9% and other costs 28%.",
        costEffect: "**Partly protected.** Plots need little construction, so their 50–60% gross margins leave a large cushion; apartments are more exposed. The West Asia war disrupted materials and labour in April–May 2026 and every project got a four-month RERA extension, but the cost impact was not quantified. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 4 points (19% to 15%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin fell from 47% in FY22 to 19% in FY26 as fewer plots were handed over, then rose to 36% in Q1 FY27 on Imperia Phase 2 plots; guidance is 30–35%.",
        competitors: [{ name: 'Omaxe, Shalimar and other Lucknow developers', note: 'Local rivals for plots and apartments.' }, { name: 'Godrej Properties and other national developers', note: 'Entering Lucknow as it grows.' }, { name: 'Lucknow Development Authority schemes', note: 'Government housing competes at the low end.' }],
        position: "**A long-standing Lucknow developer** with under 10% of the city's market and 95.5 acres of land.",
        money: "Screener shows **₹107cr of net cash** at March 2026, though borrowings rose from about ₹3cr in FY23 to ₹154cr to fund land. Buyers' advances rose to ₹499cr on Solano bookings, and filed operating cash turned positive at ₹104cr in FY26 after two negative years. The ₹52.3cr promoter-company loan was fully repaid in FY26, a dividend of ₹9 a share was approved and a buyback is ‘under active consideration’. It has no current credit rating. Promoters hold **54.8%**, unchanged.",
        watch: ["Approvals and launches on the four new parcels by March.", "Bookings above FY26's ₹744cr.", "The buyback decision."],
        charts: realtyCharts['Eldeco Housing & Ind'],
    },
    {
        company: 'Signatureglobal Ind.',
        inShort: ["**A Gurugram developer that grew on affordable housing** and is moving to mid-income and luxury towers, branded residences and a commercial joint venture with RMZ.", "**Good:** selling prices rose from ₹11,762 to ₹17,093 per sq ft in two years, and it has 93 licensed acres on the Southern Peripheral Road. **Bad:** pre-sales fell 19% in FY26 and 25% in Q1 FY27, collections came in a third below guidance, net debt nearly doubled to ₹390cr in a quarter, and FY26 profit was almost all a one-off ₹1,267cr gain.", "**Verdict: wait.** The move upmarket is working on price, but sales, cash and core profit are shrinking."],
        tagline: "A Gurugram and Sohna home builder that outsources construction, moving from government-policy affordable housing to premium high-rise towers.",
        revenue: '₹2,596cr (FY26, consolidated)',
        products: [
            { name: 'Mid-income and premium towers', text: "High-rise group housing on the Southern Peripheral Road (about ₹22,000 per sq ft), Dwarka Expressway (about ₹16,500) and Sohna (about ₹15,000). Mid-income Gurugram projects are 64% of the 9.2 mn sq ft under construction." },
            { name: 'Affordable homes and floors', text: "Homes under Haryana's Affordable Housing Policy and low-rise DDJAY floors, sold at under ₹6,000–6,900 per sq ft; they are 30% of ongoing area and most of what is being handed over now." },
            { name: 'Branded and luxury', text: "Tonino Lamborghini branded residences (more than 300 of about 400 units sold in Q1 FY27) and, from September 2026, ultra-luxury farmhouse villas at Farrukhnagar." },
            { name: 'Commercial joint venture', text: "Half of Gurugram Commercity with RMZ: about 17 acres and 5.6 mn sq ft on the Southern Peripheral Road, indicative value ₹14,000–15,000cr, with debt kept inside the joint venture." },
        ],
        revenueText: "Revenue is booked on completion: ₹2,600cr in FY26 on 3.75 mn sq ft completed, mostly **old affordable stock**, with ₹7,340cr still to be booked on ongoing projects. The business itself is measured by **pre-sales (₹8,250cr in FY26, down 19%; ₹1,970cr in Q1 FY27, down 25%)** and **collections (₹4,022cr, down 8%; ₹670cr in Q1, down 28%)**. The company does not split revenue by micro-market.",
        mixes: [
            { caption: 'Ongoing area by type, June 2026 (company presentation)', parts: [{ label: 'Mid-income, Gurugram', share: 64 }, { label: 'Affordable', share: 30 }, { label: 'Other', share: 6 }] },
        ],
        customers: ["**Middle-income and affluent Gurugram buyers**, now paying about ₹5–5.5cr a home for SPR towers, many of them working in the city's offices.", "**First-time buyers** of affordable flats under the state policy, allotted by draw at fixed prices.", "**Luxury and branded-home buyers**, a new segment since the Lamborghini launch."],
        difficulty: { level: 'Medium', text: "It outsources building to contractors such as Ahluwalia, Capacit'e and Arabian Construction, so the skill is in buying licensed land and getting approvals in Gurugram. Construction bans for air quality regularly halt work and slow handovers." },
        moat: "Licensed, paid-for land in a market that built almost no group housing between 2014 and 2022 makes its SPR land scarce, and launches still sell 40% or more. There is no cost advantage: construction is outsourced and almost everything is in one city.",
        salesDrivers: ["**Launches**: more than ₹15,000cr planned in FY27; Lamborghini (about ₹4,400cr) is done, with a second SPR tower around Diwali and a 2 mn sq ft SPR launch in Q4.", "**Pre-sales**: about ₹10,000cr guided for FY27, after ₹1,970cr in Q1 and ₹1,830cr in Q2 (company update, 10 October 2026), so H2 needs about ₹6,200cr; management's own warning is ‘once bitten, twice shy’. Q2 collections rose to ₹1,010cr.", "**Pricing and mix**: realisations up about 45% in two years to ₹17,093 per sq ft, mostly from moving upmarket.", "**Land**: FY27 land budget raised to ₹1,500–1,800cr; in September it bought 25 acres and signed a collaboration for 169.22 acres at Farrukhnagar, adding GDV of ₹5,500–6,000cr.", "**Completions**: ₹5,000cr of FY27 revenue needs ₹6,000–6,500cr of completions, which heavy rain and construction bans have delayed before."],
        inputs: "**Construction by outside contractors (cement, steel, labour), approval fees and land.** Land is largely paid for and approvals bought upfront. On the filed FY26 split, land, construction and materials were 4% of sales and project and site costs 72%; staff 12% and other costs 14%.",
        costEffect: "**Partly protected.** Construction inflation has run at 7–8% a year for a decade and is budgeted; because land is paid for and homes are sold early, rising building costs are the main margin risk on fixed-price sales. Management says development and overhead costs are under 30–35% of sale value on current projects. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 8 points (−2% to −10%). **What happened:** there is no single price index for a developer's costs, so no input chart. The filed operating margin has stayed between −9% and +2% for five years (−9% in FY22, −2% in FY26) because handovers are affordable stock sold at under ₹6,000–6,900 per sq ft; the company's adjusted margin, adding back interest inside cost of sales, was 9–10% for FY26. No unusual cost spike was seen in Q1 FY27.",
        competitors: [{ name: 'DLF', note: 'The dominant Gurugram luxury developer with a vast paid-for land bank.' }, { name: 'Godrej Properties, M3M, Smartworld', note: 'Large launch-heavy rivals on the same Gurugram corridors.' }, { name: 'Max Estates and Sobha', note: 'Listed peers selling premium homes in Gurugram and Noida.' }],
        position: "**A Gurugram specialist**: every completed project is in Gurugram or Sohna, with 19.2 mn sq ft delivered and 50.2 mn sq ft in its portfolio.",
        money: "Screener shows **₹242cr of net debt** at March 2026; the company puts net debt at ₹390cr at June (₹200cr at March), with an internal cap of half the year's operating surplus. It held ₹2,522cr of cash, but about ₹1,700cr sits in RERA and escrow accounts; gross debt is above ₹2,900cr and CARE (A+) calls its cost ‘elevated’. Collections of ₹670cr in Q1 left an operating surplus of only ₹30cr before land. FY26 operating cash (company figure about ₹2,100cr) went a third each to land, debt and approvals and interest; RMZ paid about ₹1,250cr for its half of the joint venture. Committed receivables exceed ₹19,600cr. No dividends. Promoters hold **69.5%**, unchanged; no pledges.",
        watch: ["Collections back above about ₹1,100cr a quarter.", "₹5,000cr of FY27 revenue actually booked.", "The H2 SPR launches selling 40% at launch."],
        charts: realtyCharts['Signatureglobal Ind.'],
    },
    {
        company: 'Arkade',
        inShort: ["**A Mumbai developer of mid-premium homes through society redevelopment**, now also building on two large bought sites at Thane and Filmistan in Goregaon; listed in September 2024.", "**Good:** net debt is only ₹5cr and it sells about 95% of its stock before completion. **Bad:** it wrote off ₹182cr on Filmistan tenancy rights (its auditor added an emphasis of matter), cut its FY27 growth and margin guides within a quarter, and moved the Filmistan launch to FY28.", "**Verdict: wait.** A small company stretching; wait for Thane to launch and guidance to hold."],
        tagline: "A Mumbai suburban developer that grew on low-capital society redevelopments and used its IPO money to buy two big greenfield sites.",
        revenue: '₹816cr (FY26, consolidated)',
        products: [
            { name: 'Society redevelopment', text: "Premium and aspirational homes in Mumbai's western and eastern suburbs, built by rebuilding old society buildings; a nine-society cluster at Kandivali (GDV ₹1,100cr) was signed in May 2026." },
            { name: 'Greenfield land', text: "Thane Kasarvadavali (6.28 acres, ₹172.5cr, launch in Q4 FY27, ₹1,900cr), Filmistan in Goregaon (GDV ₹3,500cr, launch moved to FY28) and Woollen Mills in Bhandup (3.55 acres, ₹148cr by MoU)." },
            { name: 'Services', text: "Arkade Finroot (home-loan help, earning commissions) and Assist360 (facility management); a rent-earning commercial line is planned." },
        ],
        revenueText: "Revenue follows completion and handover of projects. **FY26 pre-sales were ₹901cr** (+17%) and **collections ₹728cr** (+2%); Q1 FY27 pre-sales were ₹155cr (+9%) and collections ₹164cr, flat. Eight ongoing projects have a GDV of ₹2,300cr and 12 upcoming ones ₹12,785cr (a September release put the upcoming pipeline at ₹18,000cr). The company does not split revenue by project.",
        customers: ["**Mid-premium Mumbai families** upgrading within the suburbs, many helped to home loans by its own Finroot arm.", "**Housing societies** choosing a redeveloper on trust and delivery record.", "**Buyers at its first big greenfield projects** in Thane and Goregaon, a new customer base for it."],
        difficulty: { level: 'Medium', text: "Redevelopment of a few societies at a time is familiar work; Thane and Filmistan are far larger than anything it has built (past annual launches were at most about ₹1,500cr), and Dahisar waits on a wireless station moving." },
        moat: "Relationships with societies, an on-time record and selling about 95% before completion keep it lean. The weakness is small scale and a sudden shift to big bought sites, where the Filmistan write-off shows the risk.",
        salesDrivers: ["**Launches**: about ₹3,000cr in FY27 (Santacruz ₹210cr in Q2, Malad ₹740cr in Q3, Thane ₹1,900cr in Q4) and more than ₹5,000cr in FY28.", "**Pre-sales**: about ₹1,000cr guided for FY27 (+11%), cut from 20–25% growth in May.", "**Pricing**: management says the ‘incremental rate’ absorbs construction inflation; May sales were ‘a little slow’ on war and fuel prices.", "**Land**: land costs run from 15–20% of GDV in the northern suburbs to about 50% in South Mumbai, with an IRR hurdle of about 20%.", "**Approvals**: Filmistan's approvals and Dahisar's height clearance set FY28–FY29 growth."],
        inputs: "**Construction (cement, steel, labour), payments to societies and land.** On the filed FY26 split, project and site costs were 70% of sales; staff 4% and other costs 4%.",
        costEffect: "**Partly protected.** Management says construction inflation is ‘absorbed by the incremental rate’ on new sales, but gave no numbers, and flats already sold are at fixed prices. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 7 points (23% to 16%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin was 24% in FY22 and 23% in FY26, falling to 19% in the last two quarters as staff grew about 30% and interest income on IPO cash dried up; the margin guide was trimmed from 27–28% to 25–26%.",
        competitors: [{ name: 'Keystone (Rustomjee) and Sri Lotus', note: 'Larger Mumbai redevelopment specialists.' }, { name: 'Godrej Properties and Lodha', note: 'Big developers bidding for Thane and Goregaon land.' }, { name: 'Local suburban redevelopers', note: 'Many small firms compete for the same societies.' }],
        position: "**A small Mumbai redevelopment specialist**, about ₹900cr of pre-sales a year, with 5.48 mn sq ft completed.",
        money: "Screener shows **₹74cr of net debt** at March 2026; the company reported ₹5cr at June, after spending its ₹381cr of IPO money on construction and land. Filed operating cash was −₹119cr in FY26 (−₹218cr in FY25) as it paid for Thane, Filmistan (₹165cr of land plus ₹170cr for the company holding tenancy rights, ₹182cr of which was written off) and Bhandup. Collections average 89% of pre-sales (India Ratings). It will use construction loans if needed, with no equity plan. Dividends were 345% of FY26's small profit. Rated BBB+ by India Ratings. Promoters hold **71.2%**, up from 70.8% in September 2024.",
        watch: ["The Thane launch in Q4 FY27.", "FY27 pre-sales of about ₹1,000cr.", "Filmistan approvals."],
        charts: realtyCharts['Arkade'],
    },
    {
        company: 'Suraj Estate',
        inShort: ["**A South Central Mumbai developer that rebuilds old tenanted buildings** in Mahim, Dadar and Prabhadevi and now sells offices at Suraj One Business Bay; listed in December 2023.", "**Good:** a real niche (it claims 61% of its market), FY26 pre-sales guidance met at ₹615cr and 37–40% margins on legacy land. **Bad:** its auditor reports ₹16.5cr of income tax paid more than six months late, Q1 FY27 collections fell 25%, and net debt reached ₹614cr with no credit rating.", "**Verdict: pass.** A real niche with early liquidity warnings."],
        tagline: "A Mumbai redevelopment specialist in cessed, tenant-occupied buildings, shifting towards commercial offices on bought land.",
        revenue: '₹556cr (FY26, consolidated)',
        products: [
            { name: 'Tenant-building redevelopment', text: "Rebuilding old cessed buildings in Mahim, Dadar, Prabhadevi, Shivaji Park and Parel, with more than 1,011 tenant homes rebuilt free; 14 of 18 upcoming projects are redevelopments." },
            { name: 'Commercial offices', text: "Suraj One Business Bay in Mahim, about 33% sold at about ₹50,000 per sq ft; Phase 2 (₹800cr) is planned for Q3 FY27, taking combined GDV above ₹2,000cr." },
            { name: 'Value luxury and luxury homes', text: "Small residential projects such as Suraj Nova and Madonna, and a planned Bandra project on 2.5–2.8 lakh sq ft for FY28." },
        ],
        revenueText: "It books revenue **as construction progresses**. **FY26 pre-sales were ₹615cr** (+23%) and **collections ₹421cr** (+9%); in Q1 FY27 pre-sales rose 74% to ₹141cr but collections fell to ₹86cr from ₹115cr. About ₹1,060cr is still receivable on ongoing projects. **Commercial space is 89% of its unsold stock** (₹841cr of about ₹950cr), so FY27 sales depend on office buyers.",
        mixes: [
            { caption: 'Unsold stock in ongoing projects, June 2026 (company call)', parts: [{ label: 'Commercial', share: 89 }, { label: 'Residential', share: 11 }] },
        ],
        customers: ["**Tenants of old buildings**, who get new homes free in return for the extra space the developer sells.", "**Businesses and investors buying offices** at Business Bay in Mahim.", "**Upper-middle-class and affluent Mumbai families** buying its value-luxury and luxury flats."],
        difficulty: { level: 'High', text: "Cessed-building redevelopment needs tenants' consent, landlord deals and special approvals built over decades in one neighbourhood; Business Bay Phase 2 still needs a RERA amendment." },
        moat: "Local know-how in a scarce-land neighbourhood where societies prefer an ‘area-known’ builder, and cheap legacy land. The weakness is thin residential stock and a shift to dearer bought land that earns only 25–30%.",
        salesDrivers: ["**Launches**: ₹1,600cr planned for FY27 (cut from about ₹2,000cr): about ₹240cr in Q2, ₹880cr in Q3 led by Business Bay Phase 2, and ₹480cr in Q4.", "**Pre-sales**: about ₹700cr guided for FY27 (+14%), first given on the Q1 call.", "**Pricing**: realisations fell from ₹54,586 to about ₹45,775 per sq ft in FY26 as the mix moved to value luxury.", "**Land**: Prabhadevi (Hally Pacific, ₹30.4cr), Dadar West (₹18cr) and Mahim development rights (about ₹75cr); Bandra needs ₹300–350cr of approval premiums.", "**Commercial demand**: at least another 1 lakh sq ft of Business Bay to be sold in FY27."],
        inputs: "**Payments to tenants and landlords, approval premiums, land and construction.** Management did not quantify input costs; bought commercial land raises land cost as a share of revenue. On the filed FY26 split, other costs, which include land and construction, were 64% of sales and staff 4%.",
        costEffect: "**Partly protected by old land, not by contracts.** Legacy land keeps margins high, but new commercial land is bought at today's prices and flats and offices are sold at fixed prices. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 6 points (39% to 33%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin moved from 48% in FY22 to 39% in FY26, swinging between 30% and 51% by quarter with the project mix; management guides 35–37% for two years as lower-margin commercial projects grow.",
        competitors: [{ name: 'Sri Lotus and Keystone (Rustomjee)', note: 'Listed Mumbai redevelopers in nearby markets.' }, { name: 'Lodha and Piramal', note: 'Large developers in Worli, Parel and Prabhadevi.' }, { name: 'Local cessed-building redevelopers', note: 'Small firms competing for the same tenants and landlords.' }],
        position: "**A niche leader in South Central Mumbai cessed-building redevelopment**, by its own claim of a 61% share.",
        money: "Screener shows **₹595cr of net debt** at March 2026; the company puts it at ₹614cr at June (gross ₹646.9cr, cash ₹33cr), about 0.6 times equity, and now says debt will go ‘up temporarily’. FY26 interest was ₹92cr against pre-tax profit of ₹126cr, and filed operating cash was −₹306cr in FY25 and −₹54cr in FY26. Its auditor reports ₹16.5cr of FY25 income tax paid more than six months late (settled on 30 May 2026) and ₹10.4cr of advance tax unpaid. Bandra's ₹300–350cr of premiums will come from internal cash, then construction loans. No credit rating and no dividend. Promoters hold **69.8%**, down from 75.0% in December 2023.",
        watch: ["Statutory dues paid on time.", "Collections recovering.", "The Business Bay Phase 2 launch in Q3."],
        charts: realtyCharts['Suraj Estate'],
    },
    {
        company: 'Arihant Superstruct.',
        inShort: ["**A Navi Mumbai developer of affordable, mid-income and villa projects** in Panvel, Kharghar, Shilphata and Chowk, plus Jodhpur, now adding hotels with ITC and Radisson.", "**Good:** early, cheap land in Navi Mumbai's growth corridor and 1,721 homes delivered in FY26. **Bad:** net debt is about 1.8 times equity, including about ₹400cr of promoter loans at 13–13.5%, FY26 interest exceeded pre-tax profit, and it cut FY27 growth guidance within a quarter while starting a ₹500cr hotel programme; it also changed auditors in September.", "**Verdict: pass.** Too much debt for the returns."],
        tagline: "A Navi Mumbai home builder moving from affordable flats to premium villas and hotels, funded heavily by debt, including promoter loans.",
        revenue: '₹551cr (FY26, consolidated)',
        products: [
            { name: 'Affordable and mid-income homes', text: "Flats in Panvel, Kharghar, Vashi, Shilphata and Jodhpur at an average of ₹7,500–7,769 per sq ft and a ticket of about ₹78 lakh; affordable projects earn about 9–10% after tax." },
            { name: 'Premium villas', text: "World Villas at Chowk (77 acres, 362 villas) and Town Villas, underwritten at 45–47% operating margins; only four villas sold in Q4 FY26. Their areas were restated from carpet to saleable, enlarging GDV." },
            { name: 'Hotels and club', text: "A 227-room ‘Mementos by ITC Hotels’ at World Villas (agreement signed September 2026), a second hotel near Imagicaa and a 10.5-acre gymkhana; Radisson runs its existing hotels." },
        ],
        revenueText: "It books revenue **as construction progresses**. **FY26 bookings were ₹977cr** (+10%; 1,155 units) and **collections ₹539cr**, against revenue of ₹551cr; in Q1 FY27 bookings were ₹173cr (+15%) and collections ₹161cr (+28%). Its portfolio GDV of about ₹14,000cr is 41% luxury. The company does not split revenue by segment.",
        mixes: [
            { caption: 'Project portfolio by segment, GDV (company call)', parts: [{ label: 'Mid-income and affordable', share: 59 }, { label: 'Luxury and villas', share: 41 }] },
        ],
        customers: ["**First-time and mid-income buyers** in Navi Mumbai and nearby towns, attracted by the Atal Setu and the new airport.", "**Affluent weekend-home buyers** for villas at Chowk.", "**Hotel guests**, through ITC and Radisson-run properties from about FY29–FY30."],
        difficulty: { level: 'Medium', text: "Affordable flats are simple to build, and it delivers steadily; villas, a gymkhana and hotels are new businesses for it, and management calls its sales speed ‘mediocre’." },
        moat: "Land bought early (2023–24) ahead of Navi Mumbai's infrastructure, which management says has roughly tripled in value. The weakness is expensive debt, a single region and small scale against a large GDV claim.",
        salesDrivers: ["**Launches**: another tower at Aspire, Avanti in Shilphata and Town Villas in Q4 FY27.", "**Pre-sales**: FY27 guide cut from 25–30% growth to ‘a little higher’ than FY26.", "**Pricing**: mid-income realisations expected to rise about 10%, with tickets heading to ₹95 lakh–1cr.", "**Land**: no new land buying planned in FY27; about ₹700cr already invested in land and approvals.", "**Handovers**: 2,500 deliveries targeted in FY27 after occupancy certificates for 1,495 units in Q1."],
        inputs: "**Construction (cement, steel, labour), land and approvals.** Costs are up 3–5% on the war and the rupee, with labour shortages. On the filed FY26 split, land, construction and materials were 60% of sales; staff 6% and other costs 10%.",
        costEffect: "**Partly passed on.** Management says price rises on remaining stock will offset the 3–5% cost increase, but homes already sold are at fixed prices and affordable projects have thin margins. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 6 points (23% to 17%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin was 21% in FY22 and 23% in FY26, swinging between 14% and 31% by quarter with the project mix; the bigger drain is interest, which rose from ₹21cr in FY22 to ₹68cr in FY26.",
        competitors: [{ name: 'Marathon, Godrej Properties and Hiranandani', note: 'Compete for Panvel and Navi Mumbai buyers.' }, { name: 'Ajmera and Arkade', note: 'Listed Mumbai-suburb mid-market peers.' }, { name: 'Local Navi Mumbai builders', note: 'Many small developers in the same corridor.' }],
        position: "**A small Navi Mumbai developer** that has grown its stated GDV from about ₹6,000cr to about ₹14,000cr in five years.",
        money: "Screener shows **₹854cr of net debt** at March 2026; the company puts it at ₹818cr at June, about 1.8 times net worth, including about ₹400cr of unsecured promoter loans at 13–13.5% (₹361cr in March) and secured debt at about 12.5%. FY26 interest of ₹67.7cr exceeded pre-tax profit of ₹61cr, operating cash has been negative for four years, and Acuite (BBB-) puts debt-service cover at 1.00. It plans ₹500cr on hotels and a club over three years, ‘by debt or by internal resources’. New auditors were appointed in September 2026. Promoters hold **71.1%**, down from 74.7% in September 2023 after a warrant conversion.",
        watch: ["Cash from the 1,495 certified homes repaying debt.", "World Villas sales.", "Borrowing for the hotels."],
        charts: realtyCharts['Arihant Superstruct.'],
    },
    {
        company: 'Ganesh Housing',
        inShort: ["**An Ahmedabad land owner** with about 510 acres, fully paid, that earns mostly by selling land, plus one office campus (Million Minds) and one housing project.", "**Good:** cheap, paid-for land and FY27 guidance of ₹1,000–1,200cr of revenue. **Bad:** ₹385cr is lent to related parties and ₹519cr advanced for land ‘on behalf of the Group’, with the auditor flagging recovery risk, it sold a plot it had promised to develop to an unnamed buyer at an undisclosed price, and launch and leasing dates keep slipping.", "**Verdict: avoid.** Valuable land, but promoter dealings come before shareholders."],
        tagline: "An Ahmedabad developer whose profits come mainly from selling land bought decades ago, now building its first large office campus.",
        revenue: '₹511cr (FY26, consolidated)',
        products: [
            { name: 'Land sales', text: "Plots sold from about 510 acres held at old cost, mainly at Godhavi (411 acres, ‘Smile City’, past sales averaging ₹14.1cr an acre) and Thaltej; the One 91 Thaltej plot was sold in Q1 FY27." },
            { name: 'Million Minds offices', text: "Phase 1 of an IT campus on 65 acres, about 0.85 mn sq ft of Grade-A offices built with Tishman Speyer; 43% signed as letters of intent, with rent now expected from Q4 FY27 and ₹70–75cr a year in FY28." },
            { name: 'Housing', text: "Malabar Retreat (sale value about ₹450cr, 83% built, about 45% sold) is its only ongoing housing project; a Million Minds residential launch is planned for Q4 FY27." },
        ],
        revenueText: "Most revenue is **land sold in lumps**, so it swings: ₹959cr in FY25, ₹511cr in FY26 as fewer deals closed, and ₹280cr in Q1 FY27 mostly from the Thaltej sale. The company gives **no pre-sales or collections figures** (promised ‘from Q3’). FY27 guidance splits into about ₹550–600cr from land and about ₹470cr from handing over Malabar Retreat.",
        mixes: [
            { caption: 'FY27 revenue guidance by source (company call)', parts: [{ label: 'Land sales', share: 55 }, { label: 'Housing project handover', share: 45 }], note: 'Guidance, not actual revenue; midpoints of the ranges given.' },
        ],
        customers: ["**Other developers and institutions buying land**, including the unnamed listed buyer of One 91 Thaltej.", "**Office tenants** at Million Minds: global capability centres, tech companies and co-working operators.", "**Ahmedabad home buyers** at Malabar Retreat, in one of India's most affordable big housing markets."],
        difficulty: { level: 'Low', text: "Selling old land takes no building skill; what is scarce is the land itself. Building and letting a large office campus is harder, and its slow record (no launches in recent years) shows it." },
        moat: "Land bought decades ago in Ahmedabad's growth corridors, fully paid, is the whole advantage: it earned 75–85% margins on land sales in FY26. The weakness is that land sales are one-offs, not a repeatable business, and governance undermines the value.",
        salesDrivers: ["**Land deals**: the timing and price of each plot sale decide the year; the company calls land sales ‘part of our capital allocation strategy’.", "**Launches**: Million Minds Phase 2 (commercial) moved to Q3 and the residential phase to Q4 FY27, each one quarter later than promised.", "**Office leasing**: Million Minds Phase 1 went from ‘60–65% leased or in final stages’ to 43% signed in one quarter.", "**Pricing**: its free-cash projection of ₹9,950cr uses ‘conservative’ prices of about ₹5,300 per sq ft.", "**Handovers**: Malabar Retreat's handover in FY27 would add about ₹470cr of revenue."],
        inputs: "**The old book cost of land sold, and construction for Million Minds and Malabar Retreat**, most of which is already spent. On the filed FY26 split, project and site costs were 17% of sales; staff 5% and other costs 4%.",
        costEffect: "**Mostly insulated.** Land sold at today's prices against decades-old cost carries almost no cost risk; management flagged ‘emerging cost pressures’ after the West Asia crisis without numbers, which matter only for its building projects. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 2 points (83% to 81%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin rose from 35% in FY22 to 83% in FY26 as land sales replaced housing; it fell to 39% in Q1 FY27 because the Thaltej plot carried a higher book cost from a 2020 merger.",
        competitors: [{ name: 'Arvind SmartSpaces', note: 'Listed Ahmedabad developer launching far more projects.' }, { name: 'GIFT City and SG Highway office developers', note: 'Compete for the same GCC and tech tenants.' }, { name: 'Other Ahmedabad land owners', note: 'Set the price at which its plots can be sold.' }],
        position: "**A large land holder in Ahmedabad's western growth corridors**, but a minor developer by launches.",
        money: "Screener shows **₹467cr of net debt** at March 2026. Borrowings rose to ₹526cr, including about ₹150cr of rent-backed loans on Million Minds and ₹149cr of short-term loans from promoter-group companies. Loans and advances are ₹957cr, a third of its assets: ₹385cr to related parties and ₹519cr ‘for purchase of land on behalf of the Group’, with the auditor highlighting uncertainty over recovery. Operating cash was ₹213cr in FY26 and free cash only ₹30cr after spending on offices; the dividend was cut from 50% to 15% to conserve cash for land. No current credit rating. Promoters hold **73.1%**, unchanged; no pledges.",
        watch: ["Related-party advances coming down.", "The Thaltej buyer and price disclosed.", "Million Minds rent starting in Q4 FY27."],
        charts: realtyCharts['Ganesh Housing'],
    },
    {
        company: 'Marathon NextgenReal',
        inShort: ["**The listed arm of Mumbai's Marathon group**: Monte South (Byculla), Nexzone (Panvel), the Neo projects (Bhandup) and Futurex offices, with a merger of promoter entities pending.", "**Good:** a ₹900cr QIP cleared its bank debt, and the merger would bring in about 418 acres. **Bad:** it has lent ₹822.9cr on demand to its promoter's holding company, shareholders were asked to allow up to ₹1,000cr, and other income was 57% of FY26 pre-tax profit.", "**Verdict: avoid.** The listed company is financing its promoter."],
        tagline: "A Mumbai-region developer of luxury, mid-income and affordable homes and offices, much of whose balance sheet is lent to its promoter company.",
        revenue: '₹496cr (FY26, consolidated)',
        products: [
            { name: 'Monte South, Byculla', text: "A luxury joint venture in which it takes a 40% revenue share: four 65-storey residential towers plus a commercial tower (GDV about ₹3,400cr) to launch in 12–18 months." },
            { name: 'Futurex offices', text: "Ready offices in Lower Parel, sold and leased to more than 300 companies such as Nykaa, ZEE and SBI; prices up about 15% a year." },
            { name: 'Mid-income and affordable homes', text: "Nexzone in Panvel (25 acres, 19 towers) and the Neo projects in Bhandup (GDV about ₹2,800cr)." },
            { name: 'New lines', text: "Kanjurmarg projects (GDV above ₹840cr), transit housing sold to other developers for extra building rights, and redevelopments in Versova and Sewri (about ₹900cr)." },
        ],
        revenueText: "It books revenue **as construction progresses**. **FY26 bookings were ₹576cr** on its own share (₹832cr including the entities to be merged) and **collections ₹781cr**; Q1 FY27 bookings were only ₹86cr and collections ₹118cr. By project, FY26 bookings including the merged portfolio were **Futurex ₹466cr, Monte South ₹391cr**, Nexzone ₹104cr and Neo ₹65cr. Other income of ₹140cr, including interest on promoter loans, sits outside revenue.",
        mixes: [
            { caption: 'Bookings by project, FY26, including merged entities (company call)', parts: [{ label: 'Futurex offices', share: 46 }, { label: 'Monte South', share: 38 }, { label: 'Nexzone', share: 10 }, { label: 'Neo series', share: 6 }] },
        ],
        customers: ["**Companies buying or leasing offices** at Futurex, from media to banks.", "**Luxury buyers** at Monte South in central Mumbai.", "**Middle-income and first-time buyers** at Panvel and Bhandup, helped by the Atal Setu, the new Navi Mumbai airport and new rail links."],
        difficulty: { level: 'Medium', text: "Contractors build its towers; the hard parts are approvals for 65-storey towers and redevelopment, where it warns that ‘when the offers are very high… projects… get stuck later on’." },
        moat: "Scarce central Mumbai addresses (Monte South, Futurex) and a large promoter land bank that the merger would bring in. The weakness is thin sales volumes and a governance structure that puts the promoter's needs first.",
        salesDrivers: ["**Launches**: Monte South's commercial tower in 12–18 months, Kanjurmarg projects (more than ₹225cr) within a year, and Versova and Sewri redevelopments.", "**Pre-sales**: no guidance at all; management declined to give ‘future-looking’ numbers.", "**Pricing**: Futurex prices up about 15% a year and 50–60% over five to six years.", "**Land**: about ₹200cr of QIP money left for acquisitions; the merger would add 400–418 acres at Panvel, Bhandup and Dombivli.", "**Construction**: Monte South Tower B's occupancy certificate this year and Tower C (28th floor in August) drive booked revenue."],
        inputs: "**Construction (cement, steel, labour), approvals and revenue shares paid to landowners.** Management did not discuss input costs in detail; it uses cost to complete of about 60% of revenue for unlaunched projects. On the filed FY26 split, project and site costs were 64% of sales; staff 5% and other costs 7%.",
        costEffect: "**Not disclosed.** Neither call discussed cement, steel or labour costs; flats are sold at fixed prices and booked as construction progresses, so cost overruns would reduce booked profit directly. **Rule of thumb:** a 10% rise in land, construction and project costs not passed on would cut the margin by about 6 points (24% to 18%). **What happened:** there is no single price index for a developer's costs, so no input chart. The operating margin was 24% in both FY22 and FY26, moving between 20% and 36% by quarter with the project mix; profit growth came from other income, which rose from ₹38cr to ₹140cr.",
        competitors: [{ name: 'Lodha, Oberoi and Piramal', note: 'Luxury developers in central Mumbai near Monte South.' }, { name: 'Lower Parel office developers and REITs', note: 'Compete for Futurex tenants and buyers.' }, { name: 'Arihant and other Navi Mumbai developers', note: 'Compete at Panvel for mid-income buyers.' }],
        position: "**A small Mumbai developer by sales** (₹86cr of bookings in Q1 FY27), whose value rests largely on the promoter land the merger would bring in.",
        money: "Screener shows **₹36cr of net cash** at March 2026, and management calls the company ‘debt-free’ after a ₹900cr QIP repaid about ₹340cr of debt. But it has lent **₹822.9cr on demand** to its promoter's holding company at 12–13.5% (₹605.9cr a year earlier), gives it a corporate guarantee, and asked shareholders to allow up to ₹1,000cr; its auditor notes loans given ‘without specifying terms or period of repayment’. Filed operating cash was −₹54cr in FY26. It has no active credit rating (Infomerics withdrew in 2025). Promoters hold **56.4%**, down from 73.5% in September 2023 after the QIP.",
        watch: ["The promoter loans repaid or settled in the merger.", "NCLT approval and the swap terms.", "Operating cash turning positive."],
        charts: realtyCharts['Marathon NextgenReal'],
    },
    {
        "company": "Horizon Industrial Parks",
        "inShort": [
            "**India's largest owner of rented warehouses and factory sheds**, built by Blackstone since 2020: 46 parks and city centres in 10 markets, about 29.5 mn sq ft operating and as much again on land it already owns; listed in August 2026.",
            "**Good:** rent-like income with an 80–81% operating margin, 5% yearly rent increases, 7-year average leases, and contracted rent above ₹1,000cr a year; the IPO cut net debt to ₹2,765cr at September 2026. **Bad:** its first reported profit, ₹14cr in Q2 FY27, came only because ₹39cr of other income exceeded the ₹11cr pre-tax profit (FY26 loss ₹204cr; FY26 interest of ₹539cr exceeded operating profit of ₹531cr), top-10 tenants pay 43% of revenue, much of the network was bought from the promoter and others, and Blackstone, at 75.4%, will sell one day.",
            "**Verdict: follow.** A real, growing rent business at a sensible price after a 24% fall from the IPO price, but wait to see reported profit and how Blackstone exits."
        ],
        "tagline": "A Blackstone-owned developer, owner and landlord of Grade A warehouses, factory buildings and in-city logistics centres across 10 Indian markets.",
        "revenue": "₹691cr (FY26, consolidated)",
        "products": [
            {
                "name": "Fulfilment centres (warehouses)",
                "text": "Large modern warehouses of 50,000 to over 500,000 sq ft for e-commerce, FMCG, retail and logistics firms: 16.3 mn sq ft, 57% of the operating area in May 2026, 91.6% let. Typical rent is about ₹24 per sq ft a month."
            },
            {
                "name": "Industrial facilities",
                "text": "Ready-made or built-to-order factory buildings for assembly and light manufacturing (renewables, EVs, auto parts, electronics, packaging): 11.4 mn sq ft, 40% of operating area, 96% let. Rents run about ₹29 per sq ft, roughly 20% above warehouses, and leases often run 9–15 years. Three-quarters of Q1 FY27 leasing came from this segment."
            },
            {
                "name": "In-city centres",
                "text": "Multi-storey logistics buildings inside cities for quick commerce, dark stores and last-mile delivery: 17 sites (6.9 mn sq ft) in seven cities, only 0.79 mn sq ft operating. 13 of the sites are on Central Warehousing Corporation land under a 45-year revenue-share concession. Expected rents are ₹70–75 per sq ft, 2.5–3 times a big-box warehouse."
            },
            {
                "name": "Add-on services",
                "text": "Rooftop solar sold to tenants (about 21 MW running, 17 MW being added), worker hostels (6,000–7,000 beds being built), a 115-room hotel at Dobbaspet (Bengaluru), cold storage and fit-outs; management hopes these reach 5–10% of revenue in 4–5 years."
            }
        ],
        "revenueText": "**Almost all revenue is rent and maintenance charges** from about 120 tenants on leases with ~5% yearly increases and an average 7.1 years left. **Contracted annual rent was ₹967cr at June 2026**, against FY26 revenue of ₹691cr, so revenue should keep rising as signed space starts paying. Q1 FY27 revenue was ₹201cr (Screener), up 56% on filed numbers and 23% on the company's pro forma basis, which includes assets bought during the year. **Top-10 tenants were 42.6% of FY26 pro forma revenue**, and Delhi-NCR, Chennai, Bengaluru and Pune together 79%. About 1.4 mn sq ft of leases expire in the rest of FY27 and 2.2 mn sq ft in FY28; Q1's renewals were re-let 12% higher. **Q2 FY27 revenue was ₹215cr (Screener), up 30% on the company's basis**, with 2.5 mn sq ft leased in the quarter and 4.4 mn sq ft in H1, two-thirds of the 6.5 mn sq ft FY27 target; 1.2 mn sq ft was re-let at 12% higher rents in H1, and stabilised occupancy was 94% (Q2 call, 29 October 2026).",
        "mixes": [
            {
                "caption": "Operating area by format, May 2026 (RHP)",
                "parts": [
                    {
                        "label": "Fulfilment centres",
                        "share": 57
                    },
                    {
                        "label": "Industrial facilities",
                        "share": 40
                    },
                    {
                        "label": "In-city centres",
                        "share": 3
                    }
                ],
                "note": "Share of 28.55 mn sq ft of operating space, not of revenue; the company does not split revenue by format."
            },
            {
                "caption": "Revenue by market, FY26 pro forma (RHP)",
                "parts": [
                    {
                        "label": "Delhi-NCR, Chennai, Bengaluru, Pune",
                        "share": 79
                    },
                    {
                        "label": "Other markets",
                        "share": 21
                    }
                ]
            }
        ],
        "customers": [
            "**E-commerce, retail and FMCG**: Amazon, Unilever, Colgate and Zara among others named on the call.",
            "**Manufacturers**: Schneider Electric (0.73 mn sq ft at Hosur), Vestas (1.01 mn sq ft at Oragadam), Lumax, SIG, Fosroc, Tata group firms and TD Connex.",
            "**Concentration**: 54% of let space is with Fortune 500 companies; top-10 tenants were 42.6% of FY26 pro forma revenue (54% in FY24)."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Building warehouses is not technically hard; the hard parts are assembling 50–100-acre land parcels with clear title and approvals near big cities, and finding in-city land at all. Horizon already owns about 2,300 acres, fully paid, enough for roughly 30 mn sq ft more."
        },
        "moat": "Scale, paid-for land in the best logistics clusters and the hard-to-copy in-city sites give it an edge in winning large multi-site tenants. But warehouses are a commodity product, rival institutional landlords (many also foreign-funded) compete for the same tenants and land, and tenants can move at lease end.",
        "salesDrivers": [
            "**Built-in rent growth**: about 5% a year in leases (some 15% every three years) plus re-letting gains of 12–15% on expiring leases.",
            "**New buildings**: FY27 targets of 6.5 mn sq ft leased and 6 mn sq ft delivered, of which 4.4 mn sq ft and 2.7 mn sq ft were done in H1, taking the network to about 35 mn sq ft by March 2027; the land bank allows the large-park footprint to double in 4–5 years.",
            "**In-city centres**: about 6 mn sq ft over three years at 2.5–3 times big-box rents; management says they could reach about 25% of revenue when complete, though 13 sites face a Delhi High Court challenge to the CWC tender (no hearing since January 2026, when the court let building continue); the first, in Pune, is due in Q4 FY27.",
            "**Demand**: e-commerce and quick commerce, plus factories moving to India under PLI schemes; JLL expects Grade A stock to grow about 25% a year to 2030.",
            "**Yield on new spending**: management guides 13–14% on incremental capex (11–12% on big parks historically)."
        ],
        "inputs": "**Land, steel structures, concrete, roofing and labour** for new buildings, which are capitalised rather than expensed. Running costs are small: in FY26 operating and maintenance costs were 8% of sales, staff 4% and other costs 11%. Construction costs about ₹4,500 per sq ft for the in-city buildings.",
        "costEffect": "**Well protected on the running business.** Rent is fixed by lease with yearly increases, and maintenance costs are largely charged back to tenants, so input prices barely touch the operating margin. **Rule of thumb:** a 10% rise in all running costs would cut the margin by only about 2 points (77% to 75%). The real exposures are building costs on new projects (management says rents are rising faster than construction costs) and **interest rates**: FY26 interest of ₹539cr was larger than operating profit, so the cost of debt matters far more than steel or cement. **What happened:** the filed operating margin rose from 13% in FY23 to 77% in FY26 and 80% in Q1 FY27 as the leased area grew; there is no single input index to chart.",
        "competitors": [
            {
                "name": "IndoSpace, ESR, Welspun One, Embassy Industrial Parks and other institutional landlords",
                "note": "Unlisted, mostly foreign-funded warehouse platforms; JLL says Horizon is the largest by total network. No listed pure-play peer exists in India."
            },
            {
                "name": "Mahindra Lifespace Developers",
                "note": "Develops industrial parks in Chennai and Jaipur but sells plots rather than renting buildings."
            },
            {
                "name": "Local developers of older Grade B and C sheds",
                "note": "Hold over 90% of India's warehouse stock; Horizon's pitch is that tenants are moving to compliant Grade A buildings."
            }
        ],
        "position": "**India's largest industrial and logistics park platform** by total network (about 61 mn sq ft including undeveloped land, per the RHP and JLL), with 28.55 mn sq ft operating at **93.6% committed occupancy** in May 2026 and the largest in-city network.",
        "money": "Screener shows **₹6,904cr of borrowings** at March 2026 (net external debt ₹4,242cr in the RHP). It raised about ₹4,250cr of new equity between December 2025 and August 2026, including the **₹2,600cr IPO at ₹60**, and says net debt was **₹2,765cr at September 2026** (₹4,967cr at June, before the repayments), at an 8.2% average cost that it hopes to cut by 40–50 basis points; in Q2 it refinanced ₹635cr at 0.71 points less, and finance cost fell to ₹116cr from ₹131cr in Q1. It has reported **net losses of ₹151–204cr in each of FY23–FY26** and ₹12cr in Q1 FY27, because depreciation (₹266cr) and interest (₹539cr) exceeded FY26 operating profit of ₹531cr. Operating cash was **₹917cr over FY23–FY26, about 94% of operating profit**, but investing (land, buildings and acquisitions) took ₹7,523cr, funded by debt and equity. Planned capex is ₹1,500–2,000cr over three years, a third from internal cash and two-thirds new debt; new buildings are usually 80–90% financed by construction loans that convert to rent-backed loans. One subsidiary (Embassy Industrial Park Hosur) was rated CRISIL BBB+ in August 2025; the parent's rating is not disclosed. 31.6 acres of land held by the Hoskote subsidiary has been marked for acquisition by the Karnataka government. Promoters (Blackstone) hold **75.40%**, unpledged; the shares trade at about ₹45.8, 24% below the IPO price.",
        "watch": [
            "Reported net profit staying positive without other income (Q2 FY27: ₹14cr, helped by ₹39cr of other income).",
            "FY27 leasing of 6.5 mn sq ft and the Pimpri in-city centre delivered and let in Q4.",
            "How and when Blackstone sells down, and any further asset purchases from Blackstone-linked sellers."
        ],
        charts: realtyCharts["Horizon Industrial Parks"],
    },
    {
        "company": "Kalpataru",
        "inShort": [
            "**A Mumbai and Thane home builder** from the five-decade-old Kalpataru group, best known for the Kalpataru Parkcity township in Thane, luxury towers such as Vian at Lokhandwala, and housing-society redevelopments; listed in July 2025.",
            "**Good:** an old brand with about 18.4 mn sq ft delivered, about 15 mn sq ft due for completion over FY27–FY29, and refinancing has cut its borrowing cost to about 11%. **Bad:** **₹8,229cr of net debt (2.0 times equity)**, pre-sales were flat in H1 FY27 against a 23% growth target, CRISIL cut its rating to BBB in September, and five years of filed operating cash plus about ₹3,000cr of new equity barely dented borrowings.",
            "**Verdict: pass.** Too much costly debt for a business whose sales have stalled; the handover profits that could fix it are an FY28–FY29 story, and FY27 net debt is guided flat."
        ],
        "tagline": "A Mumbai-region developer of premium homes, townships and society redevelopments, carrying one of the heaviest debt loads among listed developers.",
        "revenue": "₹3,436cr (FY26, consolidated)",
        "products": [
            {
                "name": "Townships",
                "text": "Kalpataru Parkcity in Thane, where more than 2,000 families already live; its Q1 FY27 pre-sales rose about 350% on a weak base, and Tower C of Estella was launched there. With K. One in Worli it made up about 47% of the sales value of ongoing projects in March 2025 (ICRA)."
            },
            {
                "name": "Premium and luxury towers",
                "text": "Projects such as Kalpataru Vian at Lokhandwala (3, 4 and 4.5-bedroom homes on a private four-acre plot, launched June 2026) and Kalpataru Elitus in Mulund."
            },
            {
                "name": "Society redevelopment",
                "text": "Rebuilding old housing societies, such as five in Ashok Nagar, Kandivali (2.8 acres, about ₹1,250cr of sale value, signed in Q1 FY27) and Elaara in Goregaon West (2.37 acres); it has delivered six projects in Kandivali before."
            },
            {
                "name": "Offices and other cities",
                "text": "A few office and retail assets that it is selling to raise cash (Kalpataru Infinia in Pune went for about ₹119cr in Q1 FY27), plus projects in Pune and earlier in Hyderabad, Noida and Nagpur."
            }
        ],
        "revenueText": "Revenue is booked only when a project gets its occupation certificate (the completion method), so filed revenue jumps around: **₹1,694cr of FY26's ₹3,436cr came in Q4 alone**, and Q1 FY27 showed a ₹29cr loss. Sales signed are the better guide: **FY26 pre-sales were ₹5,280cr** (+17%) and **collections ₹4,960cr** (+34%); H1 FY27 pre-sales were ₹2,587cr, flat, with Q2 down 5% to ₹1,258cr, while H1 collections rose 9% to ₹2,554cr. In Q1 the area sold rose 48% but value only 6%, which management put down to project mix. About 85% of FY25 collections came from the Mumbai region (CRISIL). The company reports an 'adjusted' FY26 EBITDA of ₹1,022cr (29.8%), against Screener's operating profit of ₹119cr (3.5%); the gap is mainly interest that is charged into project costs.",
        "mixes": [
            {
                "caption": "Sales value of ongoing projects, March 2025 (ICRA)",
                "parts": [
                    {
                        "label": "Parkcity Thane and K. One Worli",
                        "share": 47
                    },
                    {
                        "label": "Other ongoing projects",
                        "share": 53
                    }
                ]
            },
            {
                "caption": "FY27 pre-sales by source, approximate (management, August 2026)",
                "parts": [
                    {
                        "label": "Existing projects",
                        "share": 75
                    },
                    {
                        "label": "New launches",
                        "share": 25
                    }
                ]
            }
        ],
        "customers": [
            "**Well-off Mumbai and Thane families** upgrading to larger homes in gated projects with amenities, the buyers management says are driving demand.",
            "**Housing societies** that pick a redeveloper on trust and track record, as in Kandivali and Goregaon.",
            "**Land owners and partners** in joint developments; the company says it will add projects this way rather than by buying land."
        ],
        "difficulty": {
            "level": "High",
            "text": "Mumbai projects need long chains of approvals; CRISIL says delayed environmental approvals for key projects held back FY26 sales and collections. Redevelopment needs the trust of every society member. Building itself is contracted out."
        },
        "moat": "A 50-year name, about 18.4 mn sq ft delivered and a top-five position in organised Mumbai housing (CRISIL) win it societies and buyers. The weakness is money: at about 11% it borrows far dearer than AA-rated rivals, and two projects carry much of the book.",
        "salesDrivers": [
            "**Launches**: about 5 mn sq ft worth about ₹7,800cr in FY27, spread over the year; Estella and Hari Niketan were due in Q2, Blossom, Ardene and Suman Nagar later.",
            "**Pre-sales target**: about ₹6,500cr in FY27 (+23%), against a flat H1.",
            "**Completions**: about 5.5 mn sq ft in FY27 and about 15 mn sq ft over FY27–FY29, which is when profit gets booked.",
            "**Pricing**: management called prices 'stable and strong' and plans increases as projects progress.",
            "**Interest rates**: about ₹5,300cr refinanced since the IPO saves about ₹180cr a year; lower rates would help further."
        ],
        "inputs": "**Construction (cement, steel, labour, contractors), approval premiums, rent and corpus paid to societies, and interest on project loans.** In FY26, project and construction costs were about 80% of revenue and staff and other costs about 16%.",
        "costEffect": "**Partly protected on unsold flats, not on interest.** Unsold homes can be repriced, but flats sold years ago are fixed, and interest on about ₹9,200cr of borrowing is the biggest swing cost. **Rule of thumb:** a 10% rise in project costs not passed on would cut the filed margin by about 8 points (3.5% to about −4.5%). **What happened:** there is no single price index for a developer's costs, so no input chart. The filed operating margin went from −7% in FY24 to 3.5% in FY26 as projects were handed over; it is low mainly because interest charged into project costs sits inside expenses.",
        "competitors": [
            {
                "name": "Lodha, Godrej Properties, Oberoi",
                "note": "Larger, better-rated Mumbai developers bidding for the same buyers and land."
            },
            {
                "name": "Keystone Realtors (Rustomjee), Sunteck",
                "note": "Listed Mumbai developers with redevelopment and luxury books and far less debt."
            },
            {
                "name": "Puravankara, Mahindra Lifespace, Raymond Realty",
                "note": "Rivals in Mumbai redevelopment and the Thane market."
            }
        ],
        "position": "**One of the top five organised residential developers in Mumbai** (CRISIL), with 77 projects and about 18.4 mn sq ft delivered and 25 projects (about 25.1 mn sq ft) under way at March 2025 (ICRA).",
        "money": "Screener shows **₹9,168cr of borrowings** at March 2026; the company put net debt at **₹8,106cr (2.0 times equity)**, rising to ₹8,229cr at June (gross ₹9,189cr, cash ₹959cr), and expects FY27 to end about flat. The FY26 profit and loss shows only ₹70cr of interest because most is charged into project costs. **Over FY22–FY26 it generated ₹4,253cr of filed operating cash and raised about ₹3,030cr of equity (₹1,440cr from promoters, ₹1,590cr in the IPO, ~75% of it used to repay debt), yet borrowings ended above the ₹7,374cr of March 2021**; most of the cash went on interest. CRISIL cut its rating to BBB in September 2026 and expects debt to stay above 3.5 times yearly operating cash through FY28; ICRA's BBB was withdrawn at the company's request. Filed return on equity is 2.7%. No dividend. The share trades at about ₹252, against the ₹414 IPO price and the promoters' ₹517.25. Promoters hold **81.34%**, unchanged since listing, with no pledge.",
        "watch": [
            "Q2 results (due by 14 November) and H2 pre-sales reaching about ₹3,900cr.",
            "Occupation certificates in H2 for the 5.5 mn sq ft completion target.",
            "Net debt at March 2027 against the ₹8,106cr ceiling, and the next rating actions."
        ],
        charts: realtyCharts["Kalpataru"],
    },
];

export const realtyBusinesses = { intro, profiles };
