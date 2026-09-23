import { BusinessProfile, OverviewSection } from './types';

// Tab 2 of the EMS & Electronics note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations and calls; where a split is not disclosed,
// the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each covers what it sells, where the revenue comes from, who buys and how, how hard the product is to make, and why customers stay. Revenue totals are filed figures; splits are from each company's latest presentation or call, and some are my calculations from figures on the call (marked).",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "Nearly every electronic product contains the same building blocks. These companies make some or all of them for other people's brands.",
        ],
        points: [
            {
                label: 'Circuit board (PCB) and assembled board (PCBA)',
                text: "A **bare circuit board** is the green board with copper tracks. Placing chips and parts on it with automated lines (called **SMT lines**) makes an **assembled board**, the 'brain' of any device. Most EMS work starts here.",
            },
            {
                label: 'Box-build',
                text: "Putting assembled boards, cables, metal and plastic parts into a finished, tested unit: a train's braking controller, a battery-storage cabinet, a medical monitor. Box-build earns more than boards alone because it takes more skill and more approvals.",
            },
            {
                label: 'Build-to-print, ODM and build-to-spec',
                text: "**Build-to-print**: the customer supplies the design and owns it. **ODM** (original design manufacturer): the maker designs the product and the brand sells it. **Build-to-spec**: the customer gives only a requirement, and the maker designs and builds the whole system (common in defence). The further along this list, the higher the margin and the harder it is to replace the supplier.",
            },
            {
                label: 'Appliances and their parts',
                text: "Air conditioners, washing machines, refrigerators and coolers made for brands such as Voltas, and increasingly their key parts: **compressors** (the pump inside every AC and fridge), heat exchangers, motors and plastic bodies.",
            },
            {
                label: 'Chip packaging (OSAT)',
                text: "A bare silicon chip must be cut, mounted, wired and sealed in a package before it can be used. **OSAT** (outsourced semiconductor assembly and test) companies do this. India is only starting: Kaynes has a plant, and Sahasra packages memory chips.",
            },
            {
                label: 'High-reliability electronics',
                text: "Electronics for aircraft, satellites, radar, trains and medical devices must work for decades without failure. Suppliers need special approvals (AS9100, Nadcap, ISO 13485, rail approvals) that take years to win, which is why customers rarely switch.",
            },
        ],
    },
    {
        heading: 'Four ways of selling',
        body: [
            "Who the customer is decides the margin and how long cash is tied up.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Global aerospace, industrial and medical makers**', 'Avalon, Cyient DLM, Centum, Vinyas, Aimtron, Syrma (exports)', 'Negotiated per programme, cost-plus', 'Slow: long build cycles and big stocks'],
                    ['**Indian defence, space and railways**', 'Centum, Vinyas, Avalon (Kavach), Amber (Sidwal)', 'Negotiated or tendered, often protected against input costs', 'Slow; milestone payments'],
                    ['**Consumer brands**', 'Amber, PG Electroplast, Virtuoso, IKIO, Syrma (consumer)', 'Fixed fee per unit, reset each season', 'Fast: brands pay quickly'],
                    ['**State utilities (smart meters)**', 'Kaynes', 'Fixed-price tenders; paid over years', 'Very slow: ₹1,311cr outstanding'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    // ── High-reliability EMS ──────────────────────────────────────────────────
    {
        company: 'Avalon Tech',
        tagline: "Chennai-based maker of complex electronic boxes and boards for rail, aerospace, industrial, clean-energy and semiconductor-equipment customers, with plants in India and the US.",
        revenue: '₹1,603cr (FY26, consolidated)',
        products: [
            { name: 'Box-build systems', text: "Complete units such as train interlocking and braking controls, battery-storage systems and industrial controls; 60% of revenue, up from 45% in FY22." },
            { name: 'Circuit boards, cables, metal and plastic parts', text: "Made in-house so it can supply the whole box." },
            { name: 'New programmes', text: "Assemblies for a leading wafer-fabrication equipment maker, HVDC power systems, locomotive engine subsystems and the Kavach train anti-collision system." },
        ],
        revenueText: "In Q1 FY27, **exports were 59% of revenue** and India 41%. By sector, industrial was 32%, clean energy 29% and mobility 25% (rail 15%, aerospace 8%); medical and communications made up the rest. US plants produced 28% of revenue.",
        mixes: [
            { caption: 'Revenue by sector, Q1 FY27', parts: [{ label: 'Industrial', share: 32 }, { label: 'Clean energy', share: 29 }, { label: 'Mobility (rail, aerospace)', share: 25 }, { label: 'Medical, communications, other', share: 14 }] },
            { caption: 'Revenue by market, Q1 FY27', parts: [{ label: 'Exports', share: 59 }, { label: 'India', share: 41 }] },
        ],
        customers: [
            "**Global industrial, aerospace and semiconductor-equipment makers** in the US, Europe and Southeast Asia; new customers often start at its US plant, then move to India.",
            "**Indian Railways programmes** such as Kavach, and energy-storage makers selling into the US.",
        ],
        difficulty: { level: 'High', text: "High-mix, low-volume boxes with many parts and strict quality requirements. Programmes last years, sometimes decades." },
        moat: "Long programmes with approved suppliers and the ability to build the whole box. It builds to customers' designs, so it does not own the product.",
    },
    {
        company: 'Cyient DLM',
        tagline: "Hyderabad and Mysuru contract manufacturer for aerospace, defence, medical and industrial customers, 94% exported; part of the Cyient engineering group.",
        revenue: '₹1,261cr (FY26, consolidated)',
        products: [
            { name: 'Assembled circuit boards', text: "48% of Q1 FY27 revenue." },
            { name: 'Box-build', text: "21% of revenue, growing 85% a year." },
            { name: 'Cables, mechanical parts and build-to-spec products', text: "Its own designs built to a customer's requirement, which it says add 2.5–3 points of margin." },
        ],
        revenueText: "In Q1 FY27, **aerospace was 42%** of revenue, industrial 32%, medical 16% and defence 9%. **94% came from outside India.** The order book is a record ₹2,599cr.",
        mixes: [
            { caption: 'Revenue by sector, Q1 FY27', parts: [{ label: 'Aerospace', share: 42 }, { label: 'Industrial', share: 32 }, { label: 'Medical', share: 16 }, { label: 'Defence', share: 9 }, { label: 'Auto and other', share: 1 }] },
        ],
        customers: [
            "**Aerospace and defence primes** such as Honeywell and Thales, plus European and Israeli defence customers.",
            "**Industrial, semiconductor-equipment and medical makers**, mostly in North America and Europe; it has an ITAR-certified US unit for defence work.",
        ],
        difficulty: { level: 'High', text: "Aerospace-grade boards and harnesses need Nadcap and aerospace approvals and near-zero defects." },
        moat: "Aerospace approvals are 'very difficult to get into, but once you are in, you are in' (the company's words). Concentrated in a few large customers.",
    },
    {
        company: 'Centum Electronics',
        tagline: "Bengaluru maker of defence, space and radar systems to its own designs, plus contract manufacturing for global industrial and semiconductor-equipment customers.",
        revenue: '₹973cr (FY26, standalone)',
        products: [
            { name: 'Build-to-spec (BTS) defence and space systems', text: "Satellite payloads, radar and electronic-warfare subsystems, sonar and air-traffic electronics, designed in-house; 28% of FY26 revenue." },
            { name: 'Contract manufacturing (EMS)', text: "Boards and boxes for industrial, energy, transport, medical and semiconductor-equipment customers; 72% of revenue." },
            { name: 'Exited', text: "Its loss-making French engineering subsidiary was sold and deconsolidated in June 2026." },
        ],
        revenueText: "In FY26, **EMS was 72% of revenue and build-to-spec 28%**. Exports are about 50–55%. Semiconductor-equipment sales went from nothing in FY25 to over ₹100cr in FY26.",
        mixes: [
            { caption: 'Revenue by business, FY26', parts: [{ label: 'EMS', share: 72 }, { label: 'Build-to-spec', share: 28 }] },
        ],
        customers: [
            "**DRDO, ISRO, HAL, Garden Reach Shipbuilders** and other defence and space agencies.",
            "**Global industrial and energy groups** and a leading semiconductor-equipment maker, for which it is the first major Indian supplier.",
        ],
        difficulty: { level: 'Very high', text: "Designing space- and defence-grade systems from scratch takes decades of experience and multi-year development programmes." },
        moat: "Own designs and a 25-year space and defence record. Defence programmes are lumpy and partly tendered.",
    },
    {
        company: 'Vinyas Innovativ',
        tagline: "Bengaluru contract manufacturer of boards, cables and systems for defence, aerospace, medical and industrial customers; listed on the NSE SME platform.",
        revenue: '₹514cr (FY26, standalone)',
        products: [
            { name: 'Assembled circuit boards', text: "The core business, for defence and aerospace programmes." },
            { name: 'Cables, electro-mechanical assemblies and system integration', text: "A growing share as it moves toward complete systems; a new 25,000 sq ft area is being added." },
            { name: 'Medical', text: "A small, new line targeted at about 5% of FY27 revenue." },
        ],
        revenueText: "**Exports were about 50% of FY26 revenue**, mainly Europe and then the US. **Defence is 85–90% of the ₹1,309cr order book.** It does not publish a revenue split by sector.",
        mixes: [
            { caption: 'Revenue by market, FY26 (company estimate)', parts: [{ label: 'Exports', share: 50 }, { label: 'India', share: 50 }] },
        ],
        customers: [
            "**Defence and aerospace companies** in Israel, Europe and India, including a new joint venture with an Israeli defence prime.",
            "**Industrial and medical makers**; it has set up a US subsidiary after being shortlisted for two US programmes.",
        ],
        difficulty: { level: 'High', text: "Defence-grade assembly needs Nadcap accreditation and customer approvals of each production line." },
        moat: "Defence approvals and long programmes. Few large customers, and about 10–15% of its materials come from Israel.",
    },
    {
        company: 'Aimtron',
        tagline: "Vadodara design-led electronics maker for industrial, telecom, power, data-centre, rail and defence customers, with a US subsidiary; listed on the NSE SME platform.",
        revenue: '₹301cr (FY26, consolidated)',
        products: [
            { name: 'Box-build and design-led products', text: "About 69% of revenue: data-centre UPS units, AI dashboard cameras, rail signalling systems, power electronics." },
            { name: 'Assembled circuit boards', text: "About 31% of revenue, including boards for military drones." },
            { name: 'Aimtron International Controls (US)', text: "A rugged-electronics maker in Illinois (farm and mining equipment), bought in early 2026." },
        ],
        revenueText: "In FY26, **box-build was about 69% of revenue** and circuit boards 31% (presentation). About **70% of work is for Indian customers**, and exports are 20–25%.",
        mixes: [
            { caption: 'Revenue by product, FY26', parts: [{ label: 'Box-build', share: 69 }, { label: 'Circuit boards', share: 31 }] },
        ],
        customers: [
            "**A Fortune 500 US power company** for data-centre UPS units (a ₹100cr order), plus telecom, industrial and robotics customers.",
            "**Railways, defence PSUs** and **US farm and mining equipment makers** through its acquisition.",
        ],
        difficulty: { level: 'Medium', text: "Designs its own power electronics and products on about 80 ready platforms; volumes are small." },
        moat: "Design capability and customer approvals. Small and early; the customer usually owns the design.",
    },
    // ── Scale EMS ─────────────────────────────────────────────────────────────
    {
        company: 'Syrma SGS Tech.',
        tagline: "One of India's larger EMS companies, building electronics for consumer, automotive, industrial, medical, IT and rail customers, with a growing own-design business.",
        revenue: '₹4,819cr (FY26, consolidated)',
        products: [
            { name: 'Contract manufacturing', text: "Assembled boards and boxes across sectors, from EV and charging electronics to smart meters and water purifiers." },
            { name: 'Own designs (ODM)', text: "17% of Q1 FY27 revenue, doubled year on year; target 25% long term." },
            { name: 'RFID and medical devices', text: "Tags and medical devices through its subsidiary Syrma Johari MedTech." },
            { name: 'Coming', text: "A multi-layer circuit-board plant (₹400cr first phase) from April 2027, a joint venture with Japan's Kaga, and defence through Elcom." },
        ],
        revenueText: "In Q1 FY27, **consumer was 34%** of revenue, automotive 25%, industrial 24%, IT and railways 9% and healthcare 8%. **Exports were 24%.** The top 10 customers are 51% of revenue.",
        mixes: [
            { caption: 'Revenue by sector, Q1 FY27', parts: [{ label: 'Consumer', share: 34 }, { label: 'Automotive', share: 25 }, { label: 'Industrial', share: 24 }, { label: 'IT and railways', share: 9 }, { label: 'Healthcare', share: 8 }] },
            { caption: 'Revenue by market, Q1 FY27', parts: [{ label: 'India', share: 76 }, { label: 'Exports', share: 24 }] },
        ],
        customers: [
            "**Indian and global brands** in consumer products, cars and EVs, industrial equipment and medical devices; 18 new clients in Q1 alone.",
            "**Export customers** in Europe (about 40% of exports) and North America.",
        ],
        difficulty: { level: 'Medium', text: "Broad, high-volume assembly with growing design work. Circuit-board making is new and harder." },
        moat: "Scale, many customers and a rising share of its own designs. Consumer work is price-driven.",
    },
    {
        company: 'Kaynes Technology',
        tagline: "Mysuru-based EMS company for automotive, rail, aerospace, defence and industrial customers, with a smart-meter business and new chip-packaging and circuit-board plants.",
        revenue: '₹3,626cr (FY26, consolidated)',
        products: [
            { name: 'Contract manufacturing', text: "Boards and boxes for EVs, cars, rail, aerospace, defence, medical and industrial customers." },
            { name: 'Smart meters', text: "Makes, installs and services electricity meters for state utilities, paid over eight years." },
            { name: 'Overseas', text: "August Electronics in North America, bought in 2025." },
            { name: 'New businesses', text: "Kaynes Semicon (chip packaging) and Kaynes Circuits (circuit boards), about ₹1,200cr invested, revenue expected from Q3 FY27. Also satellite electronics." },
        ],
        revenueText: "In Q1 FY27, **Indian EMS was about 68% of revenue, smart meters 22% and overseas 11%** (my calculation from figures on the call).",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (my calculation)', parts: [{ label: 'Indian EMS', share: 68 }, { label: 'Smart meters', share: 22 }, { label: 'Overseas', share: 11 }] },
        ],
        customers: [
            "**Automotive and EV makers** (including Mahindra and a large two-wheeler EV maker), **Siemens**, Honeywell, Otis, Eaton, aerospace and defence customers.",
            "**State electricity utilities** for smart meters, which owe it ₹1,311cr.",
        ],
        difficulty: { level: 'Very high', text: "Core EMS is established; chip packaging and advanced circuit boards are new to India and hard to make at good yields." },
        moat: "Breadth of approvals and scale. The metering business ties up cash and has fixed prices.",
    },
    {
        company: 'Sahasra Electronic',
        tagline: "Small maker of assembled circuit boards, memory cards and USB drives, with a memory-chip packaging unit near Noida; listed on the NSE SME platform.",
        revenue: '₹139cr (FY26, consolidated)',
        products: [
            { name: 'Contract manufacturing', text: "Boards for IoT, industrial, metering, EV and GPS products; eight production lines." },
            { name: 'Memory products', text: "MicroSD cards and USB drives sold through distributors in Europe and Nepal." },
            { name: 'Chip packaging', text: "Assembles and tests memory chips; aims to break even in FY27." },
            { name: 'IT hardware', text: "A small line; a European brand partner exited." },
        ],
        revenueText: "In FY26, **contract manufacturing was 66% of revenue**, memory products 19%, chip packaging 11% and IT hardware 4%. Revenue is about half India, half exports.",
        mixes: [
            { caption: 'Revenue by business, FY26', parts: [{ label: 'Contract manufacturing', share: 66 }, { label: 'Memory products', share: 19 }, { label: 'Chip packaging', share: 11 }, { label: 'IT hardware', share: 4 }] },
        ],
        customers: [
            "**About 110 EMS customers** in India, Europe and the US, with 92% repeat business.",
            "**About 25 memory customers**, mostly consumer distributors.",
        ],
        difficulty: { level: 'High', text: "Board assembly is standard; memory packaging needs clean rooms and qualification, and prices swing widely." },
        moat: "Little so far: small scale and volatile memory prices. The promoter plans to merge its unlisted companies into it.",
    },
    // ── Consumer durables and lighting ────────────────────────────────────────
    {
        company: 'Amber Enterprises',
        tagline: "India's largest contract maker of room air conditioners and their parts, with an electronics division and railway subsystems; entering phones with Oppo.",
        revenue: '₹12,186cr (FY26, consolidated)',
        products: [
            { name: 'Consumer durables', text: "Room air conditioners (finished units and parts, about 75% of the division), plus parts for fridges and washing machines." },
            { name: 'Electronics', text: "Assembled boards (Iljin), bare circuit boards (Ascent Circuits), and industrial electronics (Unitronics, Power-One); large board plants planned at Jewar and Hosur." },
            { name: 'Railway and defence (Sidwal)', text: "Train air conditioning, doors and pantry equipment for Vande Bharat and metros." },
            { name: 'Phones', text: "A manufacturing agreement with Oppo (Oppo, OnePlus, Realme); trial production in Q4 FY27." },
        ],
        revenueText: "In Q1 FY27, **consumer durables were 71% of revenue**, electronics 25% and railway and defence 4%.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27', parts: [{ label: 'Consumer durables', share: 71 }, { label: 'Electronics', share: 25 }, { label: 'Railway and defence', share: 4 }] },
        ],
        customers: [
            "**Air-conditioner brands** in India, for both finished units and parts.",
            "**Electronics customers** in consumer, telecom, auto and industrial; **Indian Railways and metros** through Sidwal; **Oppo** from FY28.",
        ],
        difficulty: { level: 'Medium', text: "High-volume appliance making is established; circuit boards and phones are new and capital-heavy." },
        moat: "Scale as the largest AC contract maker, and a growing electronics business. Brands can and do split orders.",
    },
    {
        company: 'PG Electroplast',
        tagline: "Contract maker of air conditioners, washing machines, coolers and plastic parts for Indian appliance brands; adding refrigerators and compressors.",
        revenue: '₹5,288cr (FY26, consolidated)',
        products: [
            { name: 'Air conditioners', text: "Room ACs for brands; 69% of Q1 FY27 revenue." },
            { name: 'Washing machines and coolers', text: "Semi- and fully automatic washing machines (a new 1.8 million-unit plant), and air coolers." },
            { name: 'Plastic parts and electronics', text: "Moulded plastic parts and job-work electronics; LED TVs through a joint venture (Goodworth)." },
            { name: 'Coming', text: "Refrigerators (1.2 million units) and compressors (2 million units) from late 2026." },
        ],
        revenueText: "In Q1 FY27, **air conditioners were 69% of revenue**, plastic parts 14%, washing machines 10%, electronics 5% and coolers 1% (my calculation from figures on the call).",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (my calculation)', parts: [{ label: 'Air conditioners', share: 69 }, { label: 'Plastic parts', share: 14 }, { label: 'Washing machines', share: 10 }, { label: 'Electronics', share: 5 }, { label: 'Coolers', share: 1 }] },
        ],
        customers: [
            "**Indian and global appliance brands** that outsource entry-level and mid-range models; it does not name them.",
            "Customers give seasonal forecasts rather than firm order books.",
        ],
        difficulty: { level: 'Medium', text: "Appliance assembly with its own designs; compressors are harder and new for the company." },
        moat: "Scale and a full range of appliances under one roof. Brands shop on price and pay a fixed fee per unit.",
    },
    {
        company: 'Virtuoso Optoelectro',
        tagline: "Nashik contract maker of air conditioners, deep freezers, refrigeration compressors, lighting and circuit boards for appliance brands.",
        revenue: '₹835cr (FY26, standalone)',
        products: [
            { name: 'Air conditioners', text: "Room ACs, mainly for Voltas and three other brands; capacity rising from 1 to 1.8 million." },
            { name: 'Commercial refrigeration', text: "Deep freezers and medical refrigerators; visi-coolers coming." },
            { name: 'Compressors', text: "Refrigeration compressors (not AC compressors) through a subsidiary, running above 50% utilisation." },
            { name: 'Circuit boards and components', text: "EMS and plastic parts, partly for its own products." },
        ],
        revenueText: "In Q1 FY27, **air conditioners were about 70% of revenue**, with compressors, circuit boards and deep freezers each about 7–8% and components the rest (management's approximate figures).",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (approximate)', parts: [{ label: 'Air conditioners', share: 70 }, { label: 'Compressors', share: 8 }, { label: 'Circuit boards', share: 8 }, { label: 'Deep freezers', share: 8 }, { label: 'Components', share: 6 }] },
        ],
        customers: [
            "**Voltas** (about 40% of AC sales now, over 60% last year) and three other AC brands.",
            "**8–9 refrigeration makers** buying compressors, and three main deep-freezer customers.",
        ],
        difficulty: { level: 'Medium', text: "Appliance assembly; compressors add engineering, but margins are 5–7%." },
        moat: "Little: few customers, fixed fees and a 2.5–3% net margin.",
    },
    {
        company: 'IKIO Technologies',
        tagline: "Noida maker of LED lighting and electronics, designed in-house for brands in India and abroad, with new wearables and car-lighting lines.",
        revenue: '₹595cr (FY26, consolidated)',
        products: [
            { name: 'Home lighting (ODM)', text: "LED bulbs and fittings designed and made for lighting brands; once 95% for one customer, now 3–4." },
            { name: 'Retail and refrigeration lighting', text: "Shop and commercial-fridge lighting in India and the Middle East." },
            { name: 'Hearables and wearables', text: "Earphones and similar devices, 15–17% of revenue." },
            { name: 'New lines', text: "Car LED lamps for aftermarket brands, Honeywell fire-alarm and PA products, solar inverters." },
        ],
        revenueText: "In Q1 FY27, **home-lighting ODM was 27% of revenue** and the other businesses 73%, up from under half a few years ago.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27', parts: [{ label: 'Other businesses', share: 73 }, { label: 'Home lighting (ODM)', share: 27 }] },
        ],
        customers: [
            "**Lighting brands** (Signify was once dominant), **retail chains and fridge makers**, **audio brands**, **Honeywell**, and five large car-lighting brands.",
            "Customers in 20+ countries, including the Middle East.",
        ],
        difficulty: { level: 'Medium', text: "Designs its own products (3,000+ SKUs) and redesigns them around scarce chips; the products themselves are simple." },
        moat: "Design and fast redesign skills. Lighting and earphones are competitive, price-driven markets.",
    },
];

export const emsElectronicsBusinesses = { intro, profiles };
