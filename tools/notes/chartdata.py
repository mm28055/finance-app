"""Turn cards/*.json (from card.py) plus WPI price indices into:
  1. lib/sector-overviews/card-data/<slug>.ts   — chart figures for each company card (Tab 2)
  2. printed TS for the new Tab 1 metric series and the valuation columns.

Usage: python chartdata.py <slug>   (config below)
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
CARDS = os.path.join(HERE, 'cards')
WPI = json.load(open(os.path.join(HERE, 'wpi.json')))
REPO = os.path.join(HERE, '..', '..', 'lib', 'sector-overviews', 'card-data')

STEEL_FORGE = ('Steel forging', 'Steel forgings')
CASTING = ('Casting of Iron/Steel', 'Iron and steel castings')
HR = ('Hot Rolled Steel Coils/Sheets/Strips', 'Hot-rolled steel')
COPPER = ('Copper wire bars', 'Copper')
ALU = ('Aluminium Semi-Finished Products (Ingots, Billets, and Wire Bars)', 'Aluminium')
PETCOKE = ('Petroleum Coke', 'Petroleum coke')
ALUMINA = ('Alumina/Aluminium oxide', 'Alumina')
ALLOYSTEEL = ('Bars and Rods of Alloy and stainless steel', 'Alloy and stainless steel bars')
SODA = ('Soda ash / washing soda', 'Soda ash')
LEAD = ('Lead & lead alloy', 'Lead')
PE = ('High Density Polyethylene (HDPE)', 'Polyethylene (HDPE)')
PP = ('Polypropylene incl. co-polymer', 'Polypropylene')
BOARD = ('Paper board/ duplex board', 'Paperboard')
PTA = ('Purified Terephthalic Acid (PTA)', 'PTA (polyester raw material)')
ACETIC = ('Acetic acid and Its Derivatives', 'Acetic acid (a common chemical input)')
RUBBER = ('Raw Rubber', 'Natural rubber')
HSD = ('High Speed Diesel (HSD)', 'Diesel')
ATF = ('ATF', 'Jet fuel')
PVCPIPE = ('Pipes, tubes & conduits of plastic/ PVC', 'Plastic and PVC pipes')
STEELPIPE = ('Pipes, tubes & casing of steel/iron', 'Steel pipes and tubes')
SSPIPE = ('Tubes, pipes of stainless steel', 'Stainless-steel tubes')
SYNRUBBER = ('Synthetic & Processed Rubber', 'Synthetic rubber')
RECLAIM = ('Reclaimed rubber', 'Reclaimed rubber')
CRUMB = ('Rubber Crumb', 'Rubber crumb')
PETFILM = ('Polyester Film (Metallised/Non-Metallised)', 'Polyester film')
DENTAL = ('Dental Restorative Materials incl. Artificial Teeth, Dental Cement, Dental Fillings.', 'Dental materials')
FERROCHROME = ('Ferrochrome', 'Ferrochrome')
ALLOYBILLET = ('Alloy steel billets', 'Alloy steel billets')
SCRAP = ('Scrap Iron/Steel', 'Steel scrap')
PIG = ('Pig iron', 'Pig iron')
IRONORE = ('Iron Ore', 'Iron ore')
BAUXITE = ('Bauxite', 'Bauxite')
LIMESTONE = ('Limestone', 'Limestone')
CRUDE = ('Crude Petroleum', 'Crude oil')
LIION = ('Electric accumulators, rechargeable incl. lithium ion cells', 'Rechargeable (lithium-ion) batteries')
AMMONIA = ('Liquid Ammonia', 'Ammonia')
PHOSACID = ('Nitric Acid/Phosphoric Acid', 'Phosphoric and nitric acid')
ROCK = ('Phosphorite', 'Rock phosphate')
SULPHUR = ('Sulphur', 'Sulphur')
PEST = ('Insecticide & Pesticide', 'Pesticides (technical and formulated)')
PCB = ('Printed Circuit Boards (whether or not mounted with IC chips /components)', 'Circuit boards')

# company name → (card file for annual/valuation, card file for quarterly chart, WPI input, investments count as cash?)
CONFIG = {
    'electrical-equipment': {
        'Elecon Engg.Co': ('ELECON', None, STEEL_FORGE, True),
        'TD Power Systems': ('TDPOWERSYS', None, COPPER, False),
        'Triveni Turbine': ('TRITURBINE', None, STEEL_FORGE, True),
        'GE Power': ('GVPIL', None, CASTING, False),
        'Apar Inds.': ('APARINDS', None, ALU, False),
        'Genus Power': ('GENUSPOWER', None, PCB, False),
        'Salzer Electronics': ('SALZERELEC', None, COPPER, False),
        'RMC Switchgears': ('RMC', None, HR, False),
        'Inox Wind': ('INOXWIND', None, HR, False),
        'KP Green Engg.': ('544150', None, HR, False),
        'Exicom Tele-Sys.': ('EXICOM', None, PCB, False),
        'Servotech Renew': ('SERVOTECH', None, PCB, False),
        'RIR Power Electr': ('RIR', 'RIR_s', None, False),
    },
    'electrical-transformers': {
        'Atlanta Electricals': ('ATLANTAELE', None, COPPER, False),
        'Shilchar Tech.': ('SHILCTECH_s', None, COPPER, True),
        'Voltamp Transformers': ('VOLTAMP_s', None, COPPER, True),
        'Supreme Power': ('SUPREMEPWR_s', None, COPPER, False),
        'Yash Highvoltage': ('544310_s', None, COPPER, False),
        'Quality Power El': ('QPOWER', None, ALU, False),
        'Transformers & Rect': ('TARIL', None, COPPER, False),
        'Rishabh Instruments': ('RISHABH', None, PCB, False),
        'Schneider Ele. Infra': ('SCHNEIDER_s', None, COPPER, False),
    },
    'ems-electronics': {
        'Avalon Tech': ('AVALON', None, PCB, False),
        'Cyient DLM': ('CYIENTDLM', None, PCB, False),
        'Centum Electronics': ('CENTUM_s', None, PCB, False),
        'Vinyas Innovativ': ('VINYAS_s', None, PCB, False),
        'Aimtron': ('AIMTRON_s', None, PCB, False),
        'Syrma SGS Tech.': ('SYRMA', None, PCB, False),
        'Kaynes Technology': ('KAYNES', None, PCB, False),
        'Sahasra Electronic': ('SAHASRA_s', None, PCB, False),
        'Amber Enterprises': ('AMBER', None, COPPER, False),
        'PG Electroplast': ('PGEL', None, COPPER, False),
        'Virtuoso Optoelectro': ('VOEPL_s', None, COPPER, False),
        'IKIO Technologies': ('IKIO', None, PCB, False),
    },
    'pumps-comp-eng': {
        'Elgi Equipments': ('ELGIEQUIP', None, CASTING, False),
        'Kirloskar Pneumatic': ('KIRLPNU_s', None, STEEL_FORGE, True),
        'Kirloskar Brothers': ('KIRLOSBROS', None, CASTING, False),
        'KSB': ('KSB', None, CASTING, False),
        'Kirloskar Oil': ('KIRLOSENG_s', None, CASTING, False),
        'Powerica': ('POWERICA', None, COPPER, False),
        'Greaves Cotton': ('GREAVESCOT', None, CASTING, False),
        'Shakti Pumps': ('SHAKTIPUMP', None, COPPER, False),
        'Oswal Pumps': ('OSWALPUMPS', None, COPPER, False),
    },
    'elect-and-refrac': {
        'HEG': ('HEGAM', None, PETCOKE, False),
        'RHI Magnesita': ('RHIM', None, ALUMINA, True),
        'IFGL Refractories': ('IFGLEXPOR', None, ALUMINA, True),
    },
    'aerospace-defence': {
        'Sansera Engineering': ('SANSERA', None, STEEL_FORGE, False),
        'Data Patterns (India)': ('DATAPATTNS_s', None, PCB, True),
        'MTAR Technologies': ('MTARTECH', None, ALLOYSTEEL, False),
        'Azad Engineering': ('AZAD', None, ALLOYSTEEL, False),
        'Aequs': ('AEQUS', None, ALU, False),
        'Astra Microwave Products': ('ASTRAMICRO', None, PCB, False),
        'Zen Technologies': ('ZENTEC', None, PCB, True),
        'Apollo Micro Systems': ('APOLLO', None, PCB, False),
        'Unimech Aerospace': ('UNIMECH', None, ALLOYSTEEL, True),
        'AXISCADES Technologies': ('AXISCADES', None, PCB, False),
        'Mishra Dhatu Nigam (MIDHANI)': ('MIDHANI', None, ALLOYSTEEL, False),
        'Raymond': ('RAYMOND', None, STEEL_FORGE, False),
        'Rossell Techsys': ('ROSSTECH', None, COPPER, False),
        'Avantel': ('AVANTEL', None, PCB, False),
        'ideaForge Technology': ('IDEAFORGE', None, PCB, True),
        'Krishna Defence & Allied Industries': ('KRISHNADEF', None, HR, False),
        'Digilogic Systems': ('544684_s', None, PCB, False),
        'Aartech Solonics': ('AARTECH', None, PCB, False),
    },
    'bearings': {
        'Timken India': ('TIMKEN_s', None, ALLOYSTEEL, True),
        'SKF India (Industrial)': ('SKFINDUS_s', None, ALLOYSTEEL, True),
        'SKF India': ('SKFINDIA', None, ALLOYSTEEL, True),
        'Harsha Engineers Int': ('HARSHA', None, COPPER, True),
        'NRB Bearing': ('NRBBEARING', None, ALLOYSTEEL, False),
    },
    'cables': {
        'RR Kabel Ltd.': ('RRKABEL', None, COPPER, True),
        'Finolex Cables': ('FINCABLES', None, COPPER, True),
        'KSH International': ('KSHINTL_s', None, COPPER, False),
        'Laser Power & Infra': ('LASERPOWER', None, ALU, False),
        'Dynamic Cables': ('DYCL_s', None, ALU, False),
        'Advait Energy': ('ADVAIT', None, ALU, False),
        'Paramount Communications': ('PARACABLES', None, COPPER, False),
        'JD Cables': ('544524_s', None, ALU, False),
    },
    'industrial-railway': {
        'Hind Rectifiers': ('HIRECT_s', None, COPPER, False),
        'Titagarh Railsystems': ('TITAGARH', None, HR, False),
        'Jupiter Wagons': ('JWL', None, HR, False),
        'Texmaco Rail': ('TEXRAIL', None, HR, False),
        'MV Electrosystems': ('MVELECTRO_s', None, PCB, False),
        'Concord Control': ('543619', None, PCB, False),
    },
    'industrial-machinery': {
        'Jyoti CNC Auto.': ('JYOTICNC', None, CASTING, False),
        'LMW': ('LMW', None, CASTING, True),
        'Macpower CNC': ('MACPOWER_s', None, CASTING, False),
        'Mamata Machinery': ('MAMATA', None, HR, False),
    },
    'industrial-manufacturing': {
        'Pitti Engineering': ('PITTIENG', None, HR, False),
        'Gala Precision Engi.': ('GALAPREC', None, ALLOYSTEEL, False),
        'Tega Industries': ('TEGA', None, HR, False),
        'GMM Pfaudler': ('GMMPFAUDLR', None, HR, False),
        'HLE Glascoat': ('HLEGLAS', None, HR, False),
        'Praj Industries': ('PRAJIND', None, ALLOYSTEEL, True),
        'Kilburn Engg.': ('KLBRENG-B', None, HR, False),
        'Jash Engineering': ('JASH', None, CASTING, False),
        'Standard Glass': ('SETL', None, HR, False),
        'The Anup Enginee': ('ANUP', None, ALLOYSTEEL, False),
        'JNK': ('JNKINDIA', None, ALLOYSTEEL, False),
        'DEE Development': ('DEEDEV', None, ALLOYSTEEL, False),
        'John Cockerill': ('COCKERILL_s', None, HR, False),
        'Everest Kanto Cylind': ('EKC', None, ALLOYSTEEL, False),
        'Aditya Infotech': ('CPPLUS', None, PCB, False),
        'HPL Electric': ('HPL', None, PCB, False),
        'Shree Refrigrations': ('544458', None, COPPER, False),
        'WPIL': ('WPIL', None, CASTING, False),
        'ICE Make Refrig.': ('ICEMAKE', None, COPPER, False),
    },
    'industrial-products': {
        'Ador Welding': ('ADOR', None, HR, True),
        'Diffusion Engineers': ('DIFFNKG', None, ALLOYSTEEL, True),
        'Carborundum Univer.': ('CARBORUNIV', None, ALUMINA, True),
        'Tempsens Instruments': ('TEMPSENS', None, COPPER, False),
        'Subros': ('SUBROS', None, ALU, True),
        'Vilas Transcore': ('VILAS_s', None, COPPER, False),
        'KRN Heat Exchan': ('KRN', None, COPPER, False),
        'Omnitech Engineering': ('OMNI', None, STEEL_FORGE, False),
        'Inox India': ('INOXINDIA', None, ALLOYSTEEL, True),
        'Borosil Renewables': ('BORORENEW', None, SODA, True),
        'HBL Engineering': ('HBLENGINE', None, LEAD, True),
        'Patil Automation': ('PATILAUTOM_s', None, HR, False),
        'Airfloa Rail Techno.': ('544516_s', None, HR, False),
    },
    'packaging': {
        'EPL': ('EPL', None, PE, False),
        'AGI Greenpac': ('AGI_s', None, SODA, False),
        'TCPL Packaging': ('TCPLPACK', None, BOARD, False),
        'Knack Packaging': ('KNACK_s', None, PE, False),
        'Cosmo First': ('COSMOFIRST', None, PP, False),
        'Mold-Tek Pack.': ('MOLDTKPAC_s', None, PP, False),
        'Huhtamaki India': ('HUHTAMAKI_s', None, PE, True),
        'Ester Industries': ('ESTER', None, PTA, False),
        'Kanpur Plastipack': ('KANPRPLA', None, PP, False),
        'Pyramid Technoplast': ('PYRAMID_s', None, PE, False),
    },
    'pharma-api': {
        'Alivus Life Sciences': ('ALIVUS', None, ACETIC, True),
        'Concord Biotech': ('CONCORDBIO', None, ACETIC, True),
        'Supriya Lifescience': ('SUPRIYA', None, ACETIC, True),
        'Shilpa Medicare': ('SHILPAMED', None, ACETIC, False),
        'NGL Fine-Chem': ('NGLFINE', None, ACETIC, False),
        'Acutaas Chemicals': ('ACUTAAS', None, ACETIC, True),
        'Blue Jet Healthcare': ('BLUEJET', None, ACETIC, True),
        'Shree Ganesh Remed.': ('SGRL', None, ACETIC, False),
        'Aarti Drugs': ('AARTIDRUGS', None, ACETIC, False),
        'IOL Chem & Pharma': ('IOLCP', None, ACETIC, True),
        'Solara Active Pharma': ('SOLARA', None, ACETIC, False),
        'SMS Pharmaceuticals': ('SMSPHARMA', None, ACETIC, False),
    },
    'pharma-cdmo': {
        'Anthem Biosciences': ('ANTHEM', None, ACETIC, True),
        'Sai Life Sciences': ('SAILIFE', None, ACETIC, False),
        'Neuland Laboratories': ('NEULANDLAB', None, ACETIC, False),
        'Piramal Pharma': ('PPLPHARMA', None, ACETIC, False),
        'Cohance Lifesciences': ('COHANCE', None, ACETIC, True),
        'Dishman Carbogen (Carbogen Amcis)': ('DCAL', None, ACETIC, False),
        'Gland Pharma': ('GLAND', None, ACETIC, False),
        'Onesource Specialty': ('ONESOURCE', None, ACETIC, False),
        'Jubilant Pharmova': ('JUBLPHARMA', None, ACETIC, False),
        'Akums Drugs': ('AKUMS', None, ACETIC, False),
        'Innova Captab': ('INNOVACAP', None, ACETIC, False),
        'Windlas Biotech': ('WINDLAS', 'WINDLAS_s', ACETIC, True),
        'Senores Pharmaceutic': ('SENORES', None, ACETIC, False),
        'Aether Industries': ('AETHER', None, ACETIC, False),
        'Jubilant Ingrevia': ('JUBLINGREA', None, ACETIC, False),
        'Aarti Pharmalabs': ('AARTIPHARM', None, ACETIC, False),
    },
    'rubber': {
        'Apcotex Inds': ('APCOTEXIND_s', None, SYNRUBBER, True),
        'Tinna Rubber': ('TINNARUBR', None, CRUMB, False),
        'GRP': ('GRPLTD', None, RECLAIM, False),
    },
    'logistics': {
        'Aegis Logistics': ('AEGISLOG', None, HSD, False),
        'Delhivery': ('DELHIVERY', None, HSD, True),
        'Shadowfax Tech.': ('SHADOWFAX', None, HSD, True),
        'TVS Supply Chain Sol': ('TVSSCS', None, HSD, False),
    },
    'travel': {
        'BLS International': ('BLS', None, ATF, True),
        'Le Travenues Techno': ('IXIGO', None, ATF, True),
        'Thomas Cook India': ('THOMASCOOK', None, ATF, True),
        'Yatra Online': ('YATRA', None, ATF, True),
    },
    'hardware': {
        'GNG Electronics': ('EBGNG', None, PCB, False),
        'Rashi Peripheral': ('RPTECH', None, PCB, False),
        'Control Print': ('CONTROLPR', None, PCB, True),
        'TVS Electronics': ('TVSELECT_s', None, PCB, False),
    },
    'construction-power': {
        'Kalpataru Proj.': ('KPIL', None, HR, False),
        'Techno Electric &Eng': ('TECHNOE', None, COPPER, True),
        'KEC International': ('KEC', None, HR, False),
        'Transrail Lighting': ('TRANSRAILL', None, HR, False),
        'Skipper': ('SKIPPER', None, HR, False),
    },
    'iron-steel': {
        'Aeroflex Industries': ('AEROFLEX', None, ALLOYSTEEL, False),
        'Man Industries (I)': ('MANINDS', None, HR, True),
        'Venus Pipes & Tubes': ('VENUSPIPES_s', None, ALLOYSTEEL, False),
        'Manaksia Coated Metals': ('MANAKCOAT', None, HR, False),
        'Scoda Tubes': ('SCODATUBES_s', None, ALLOYSTEEL, False),
        'Shyam Metalics': ('SHYAMMETL', None, IRONORE, False),
        'Sambhv Steel Tubes': ('SAMBHV', None, HR, False),
    },
    'utilities': {
        'Va Tech Wabag': ('WABAG', None, STEELPIPE, True),
        'ION Exchage': ('IONEXCHANG', None, STEELPIPE, False),
        'Enviro Infra Engine.': ('EIEL', None, STEELPIPE, True),
        'EMS Limited': ('EMSLIMITED', None, STEELPIPE, False),
        'Antony Waste Hand': ('AWHCL', None, HSD, False),
    },
    'plastics': {
        'Garware Hi-Tech': ('GRWRHITECH', None, PETFILM, True),
        'Shaily Engg. Plastic': ('SHAILY', None, PP, False),
        'Finolex Inds': ('FINPIPE', None, PVCPIPE, True),
        'Time Technoplast': ('TIMETECHNO', None, PE, False),
        'Prince Pipes': ('PRINCEPIPE_s', None, PVCPIPE, True),
        'Apollo Pipes': ('APOLLOPIPE_s', None, PVCPIPE, False),
    },
    'health-products': {
        'Poly Medicure': ('POLYMED', None, PP, True),
        'Tarsons Products': ('TARSONS_s', None, PP, False),
        'Laxmi Denta': ('LAXMIDENTL', None, DENTAL, True),
        'Vasa Denticity': ('DENTALKART_s', None, DENTAL, True),
        'OSEL Devices': ('OSELDEVICE_s', None, PCB, True),
        'Prevest Denpro': ('543363_s', None, DENTAL, True),
    },
    'forging': {
        'AIA Engineering': ('AIAENG', None, FERROCHROME, True),
        'Happy Forgings': ('HAPPYFORGE', None, ALLOYBILLET, True),
        'Steelcast': ('STEELCAS_s', None, SCRAP, True),
        'MM Forgings': ('MMFL', None, ALLOYBILLET, False),
        'Synergy Green': ('SGIL_s', None, PIG, False),
        'Nelcast': ('NELCAST_s', None, PIG, False),
        'Neetu Yoshi': ('544434_s', None, SCRAP, True),
    },
    'platform': {
        'Swiggy': ('SWIGGY', None, None, True),
        'Urban Company': ('URBANCO', None, None, True),
        'Pine Labs': ('PINELABS', None, None, True),
        'TBO Tek': ('TBOTEK', None, ATF, True),
        'Cartrade Tech': ('CARTRADE', None, None, True),
        'BlackBuck': ('BLACKBUCK', None, HSD, True),
        'Macfos': ('543787_s', None, PCB, False),
        'Matrimony.com': ('MATRIMONY', None, None, True),
    },
    'mining': {
        'Godavari Power': ('GPIL', None, IRONORE, True),
        'Gravita India': ('GRAVITA', None, LEAD, False),
        'Ashapura Minechem': ('ASHAPURMIN', None, BAUXITE, False),
        'CMR Green Tech': ('CMRGREEN', None, ALU, False),
        'Pondy Oxides & Chem.': ('POCL', None, LEAD, False),
        'Caliber Mining & Log': ('CMLL', None, HSD, False),
        'Ardee Industries': ('ARDEE_s', None, LEAD, False),
        '20 Microns': ('20MICRONS', None, LIMESTONE, False),
    },
    'hospitals': {
        'Narayana Hrudayalaya': ('NH', None, None, True),
        'Global Health (Medanta)': ('MEDANTA', None, None, True),
        'Krishna Inst.Medi': ('KIMS', None, None, True),
        "Dr Agarwal's Health Care": ('AGARWALEYE', None, None, True),
        "Rainbow Children's Medicare": ('RAINBOW', None, None, True),
        'Yatharth Hospital': ('YATHARTH', None, None, True),
        'Jupiter Life Line Hospitals': ('JLHL', None, None, True),
        'Artemis Medicare': ('ARTEMISMED', None, None, True),
        'Shalby': ('SHALBY', None, None, True),
    },
    'oil': {
        'Aegis Vopak Terminals': ('AEGISVOPAK', None, None, False),
        'Chennai Petroleum Corporation': ('CHENNPETRO', None, CRUDE, False),
        'Gulf Oil Lubricant': ('GULFOILLUB', None, CRUDE, True),
        'Deep Industries': ('DEEPINDS', None, None, False),
        'Gandhar Oil Refinery (India)': ('GANDHAR', None, CRUDE, False),
        'Asian Energy Services': ('ASIANENE', None, None, True),
        'Jindal Drilling and Industries': ('JINDRILL', None, None, True),
        'Ganesh Benzoplast': ('GANESHBE', None, None, True),
        'South West Pinnacle': ('SOUTHWEST', None, None, False),
    },
    'vehicles': {
        'Ather Energy': ('ATHERENERG_s', None, LIION, True),
        'Ola Electric': ('OLAELEC', None, LIION, True),
        'Olectra Greentech': ('OLECTRA', None, LIION, False),
        'Ajax Engineering': ('AJAXENGG_s', None, HR, True),
        'VST Tillers Tractors': ('VSTTILLERS', None, HR, True),
        'TIL': ('TIL', None, HR, False),
        'Zelio E-Mobility': ('544563_s', None, LIION, True),
        'Indo Farm': ('INDOFARM', None, HR, False),
        'Action Const.Eq.': ('ACE', None, HR, True),
    },
    'solar': {
        'Waaree Renewables': ('WAAREERTL', None, None, True),
        'Emmvee Photovoltaic Power Ltd': ('EMMVEE', None, None, True),
        'Vikram Solar': ('VIKRAMSOLR', None, None, True),
        'Saatvik Green': ('SAATVIKGL', None, None, True),
        'Websol Energy System Ltd': ('WEBELSOLAR', None, None, True),
        'Oriana Power': ('ORIANA', None, None, False),
        'Alpex Solar': ('ALPEXSOLAR', None, None, False),
        'Insolation Energy': ('INA', None, None, False),
        'Solex Energy': ('SOLEX', None, None, False),
        'Australian Prem': ('APS', None, None, False),
    },
    'pharma-others': {
        'Sudeep Pharma': ('SUDEEPPHRM', None, None, True),
        'Sequent Scientific': ('VIYASH', None, ACETIC, False),
        'Jeena Sikho Lifecare': ('JSLL', None, None, True),
        'Zota Health Care': ('ZOTA', None, None, True),
        'Advanced Enzyme': ('ADVENZYMES', None, None, True),
        'Hester Biosciences': ('HESTERBIO', None, None, False),
        'Accent Microcell': ('ACCENTMIC_s', None, None, True),
        'Q-Line Biotech': ('QLINE', None, None, False),
        'Sigachi Industries': ('SIGACHI', None, None, False),
        'Hexagon Nutrition': ('HEXAGON', None, None, True),
    },
    'hotels': {
        'Chalet Hotels': ('CHALET', None, None, True),
        'EIH': ('EIHOTEL', None, None, True),
        'Leela Palaces Hotels': ('THELEELA', None, None, True),
        'Ventive Hospitality': ('VENTIVE', None, None, True),
        'Lemon Tree Hotels': ('LEMONTREE', None, None, True),
        'Juniper Hotels': ('JUNIPER', None, None, True),
        'Mahindra Holi.&Resor': ('MHRIL', None, None, True),
        'Samhi Hotels': ('SAMHI', None, None, True),
        'Brigade Hotel Ven.': ('BRIGHOTEL', None, None, True),
        'Viceroy Hotels': ('VHLTD', None, None, True),
        'Royal Orchid Hotels': ('ROHLTD', None, None, True),
    },
    'agro': {
        'Sumitomo Chemical India': ('SUMICHEM', None, PEST, True),
        'Chambal Fert & Chem': ('CHAMBLFERT', None, AMMONIA, True),
        'Paradeep Phosphates': ('PARADEEP', None, PHOSACID, False),
        'Madhya Bharat Agro Products': ('MBAPL_s', None, SULPHUR, False),
        'Sharda Cropchem': ('SHARDACROP', None, PEST, True),
        'GSFC': ('GSFC', None, AMMONIA, True),
        'Krishana Phoschem': ('KRISHANA_s', None, ROCK, False),
        'Dhanuka Agritech': ('DHANUKA_s', None, PEST, True),
        'Rallis India': ('RALLIS_s', None, PEST, True),
        'Insecticides (India)': ('INSECTICID', None, PEST, True),
        'Meghmani Organics': ('MOL', None, PEST, False),
        'India Pesticides': ('IPL', None, PEST, True),
        'Punjab Chem. & Corp': ('PUNJABCHEM', None, PEST, False),
        'Dharmaj Crop Guard': ('DHARMAJ', None, PEST, False),
    },
    'commercial': {
        'Redington': ('REDINGTON', None, None, False),
        'WeWork India': ('WEWORK', None, None, True),
        'Smartworks Coworking': ('SMARTWORKS', None, None, True),
        'Nirlon': ('NIRLON_s', None, None, True),
        'Quess Corp': ('QUESS', None, None, True),
        'MSTC': ('MSTCLTD', None, None, True),
        'Indiqube Spaces': ('INDIQUBE_s', None, None, True),
        'Sanghvi Movers': ('SANGHVIMOV', None, None, False),
        'CMS Info Systems': ('CMSINFO', None, None, True),
        'EFC (I)': ('EFCIL', None, None, False),
        'Awfis Space Solutions': ('AWFIS', None, None, True),
        'TeamLease Services': ('TEAMLEASE', None, None, True),
        'Updater Services': ('UDS', None, None, True),
        'Krystal Integrated Services': ('KRYSTAL', None, None, True),
    },
    'healthcare': {
        'Dr Lal PathLabs': ('LALPATHLAB', None, None, True),
        'Vijaya Diagnostic Centre': ('VIJAYA', None, None, False),
        'Syngene International': ('SYNGENE', None, None, True),
        'Molbio Diagnostics': ('MOLBIO', None, None, False),
        'Indegene': ('INDGN', None, None, True),
        'Metropolis Health.': ('METROPOLIS', None, None, False),
        'Thyrocare Technologies': ('THYROCARE', None, None, True),
        'Nephrocare Health': ('NEPHROPLUS', None, None, True),
        'Vimta Labs': ('VIMTALABS_s', None, None, False),
        'Suraksha Diagnostic': ('SURAKSHA', None, None, False),
        'Krsnaa Diagnostics': ('KRSNAA', None, None, False),
        'GPT Healthcare (Agilus)': ('GPTHEALTH_s', None, None, False),
        '3B Blackbio Diagnostics': ('3BBLACKBIO', None, None, True),
        'Sastasundar Ventures': ('533259', None, None, True),
        'Hemant Surgical Inds': ('543916', None, None, False),
    },
    'retail': {
        'Vedant Fashions (Manyavar)': ('MANYAVAR_s', None, None, True),
        'Indiamart Intermesh': ('INDIAMART', None, None, True),
        'Aditya Birla Lifesty': ('ABLBL', None, None, False),
        'Brainbees Solutions': ('FIRSTCRY', None, None, True),
        'SG Mart': ('SGMART', None, None, False),
        'Aditya Vision': ('AVL_s', None, None, False),
        'Entero': ('ENTERO', None, None, False),
        'Medplus': ('MEDPLUS', None, None, True),
        'V2 Retail': ('V2RETAIL', None, None, False),
        'Electronics Mart Ind': ('EMIL', None, None, False),
        'V-Mart Retail': ('VMART_s', None, None, False),
        'Aditya Birla Fashion & Retail': ('ABFRL', None, None, True),
        'Arvind Fashions': ('ARVINDFASN', None, None, False),
        'Shoppers Stop': ('SHOPERSTOP', None, None, False),
        'Crizac': ('CRIZAC', None, None, True),
        'Landmark Cars': ('LANDMARK', None, None, False),
        'Go Fashion (India) (GoColors)': ('GOCOLORS_s', None, None, True),
        'Sai Silks (Kalamandir)': ('KALAMANDIR_s', None, None, False),
    },
    'food-products': {
        'Zydus Wellness': ('ZYDUSWELL', None, None, True),
        'LT Foods': ('LTFOODS', None, ('Rice(Basmati)', 'Basmati rice'), False),
        'Bikaji Foods': ('BIKAJI', None, None, False),
        'CCL Products': ('CCL', None, ('Coffee', 'Coffee'), True),
        'Godrej Agrovet': ('GODREJAGRO', None, ('Maize', 'Maize (animal feed)'), False),
        'Manorama Industries': ('MANORAMA', None, None, True),
        'Avanti Feeds': ('AVANTIFEED', None, None, True),
        'KRBL': ('KRBL', None, ('Rice(Basmati)', 'Basmati rice'), True),
        'Hindustan Foods': ('HNDFDS', None, None, False),
        'Mrs Bectors Food': ('BECTORFOOD', None, ('Wheat Flour - Atta/Maida', 'Wheat flour'), False),
        'Kaveri Seed Company': ('KSCL', None, None, True),
        'Gopal Snacks': ('GOPAL_s', None, None, False),
        'ADF Foods': ('ADFFOODS', None, None, True),
        'Vintage Coffee': ('VINCOFE', None, ('Coffee', 'Coffee'), False),
        'Venkys India': ('VENKEYS_s', None, ('Maize', 'Maize (poultry feed)'), False),
        'Apex Frozen Foods': ('APEX_s', None, None, False),
        'Freshara Agro': ('FRESHARA_s', None, None, False),
        'Ganesh Consumer Prod': ('GANESHCP_s', None, ('Wheat Flour - Atta/Maida', 'Wheat flour'), False),
    },
    'realty': {
        'Brigade Enterprises': ('BRIGADE', None, None, False),
        'Sobha': ('SOBHA', None, None, False),
        'Signatureglobal Ind.': ('SIGNATURE', None, None, False),
        'Sri Lotus': ('LOTUSDEV', None, None, False),
        'Max Estates': ('MAXESTATES', None, None, False),
        'Mahindra Life. Dev': ('MAHLIFE', None, None, False),
        'Ganesh Housing': ('GANESHHOU', None, None, False),
        'Puravankara': ('PURVA', None, None, False),
        'Raymond Realty': ('RAYMONDREL', None, None, False),
        'Keystone Realtors': ('RUSTOMJEE', None, None, False),
        'Sunteck Realty': ('SUNTECK', None, None, False),
        'Ashiana Housing': ('ASHIANA', None, None, False),
        'Arvind SmartSpaces': ('ARVSMART', None, None, False),
        'Marathon NextgenReal': ('MARATHON', None, None, False),
        'Ajmera Realty': ('AJMERA', None, None, False),
        'Arkade': ('ARKADE', None, None, False),
        'Shriram Properties': ('SHRIRAMPPS', None, None, False),
        'Arihant Superstruct.': ('ARIHANTSUP', None, None, False),
        'Suraj Estate': ('SURAJEST', None, None, False),
        'Eldeco Housing & Ind': ('ELDEHSG', None, None, False),
    },
    'construction': {
        'NBCC': ('NBCC', None, None, True),
        'Cemindia Projects': ('CEMPRO', None, None, False),
        'IRB Infra.Devl.': ('IRB', None, ('Bitumen', 'Bitumen'), False),
        'Engineers India': ('ENGINERSIN', None, None, True),
        'Welspun Enterp': ('WELENT', None, ('Bitumen', 'Bitumen'), True),
        'Ircon Intl.': ('IRCON', None, None, True),
        'Rites': ('RITES', None, None, True),
        'Afcons Infra': ('AFCONS', None, None, False),
        'NCC': ('NCC', None, None, False),
        'GR Infraprojects': ('GRINFRA', None, ('Bitumen', 'Bitumen'), False),
        'Power Mech Proj.': ('POWERMECH', None, None, False),
        'Dilip Buildcon': ('DBL', None, ('Bitumen', 'Bitumen'), False),
        'Ceigall India': ('CEIGALL', None, ('Bitumen', 'Bitumen'), False),
        'Man Infra': ('MANINFRA', None, None, False),
        'Sterling and Wilson': ('SWSOLAR', None, None, False),
        'Ahluwalia Contr.': ('AHLUCONT', None, None, False),
        'J Kumar Infra': ('JKIL', None, None, False),
        'PNC Infratech': ('PNCINFRA', None, ('Bitumen', 'Bitumen'), False),
        'KNR Constructions': ('KNRCON', None, ('Bitumen', 'Bitumen'), False),
        'Ashoka Buildcon': ('ASHOKA', None, ('Bitumen', 'Bitumen'), False),
        'PSP Projects': ('PSPPROJECT', None, None, False),
        'H.G. Infra Engg.': ('HGINFRA', None, ('Bitumen', 'Bitumen'), False),
        'Interarch Building': ('INTERARCH_s', None, HR, False),
        'Patel Engineering': ('PATELENG', None, None, False),
        'GK Energy': ('GKENERGY', None, None, False),
        'EPack Prefab Techno.': ('EPACKPEB', None, HR, False),
        'Pennar Industries': ('PENIND', None, HR, False),
        'Capacite Infraproj.': ('CAPACITE', None, None, False),
        'M & B Engineer.': ('MBEL', None, HR, False),
        'GPT Infraprojects': ('GPTINFRA', None, None, False),
        'SPML Infra': ('SPMLINFRA', None, None, False),
        'Solarworld Energy So': ('SOLARWORLD', None, None, False),
    },
    'software': {
        'Inventurus Knowledge Solutions': ('IKS', None, None, True),
        'Tata Technologies': ('TATATECH', None, None, True),
        'Netweb Technologies': ('NETWEB_s', None, None, True),
        'Affle 3i': ('AFFLE', None, None, True),
        'Sagility': ('SAGILITY', None, None, True),
        'KPIT Technologies': ('KPITTECH', None, None, True),
        'Black Box': ('BBOX', None, None, True),
        'E2E Networks': ('E2E', None, None, True),
        'Fractal Analytics': ('FRACTAL', None, None, True),
        'Amagi Media Labs': ('AMAGI', None, None, True),
        'Cyient': ('CYIENT', None, None, True),
        'RateGain Travel Tech': ('RATEGAIN', None, None, True),
        'Zensar Technologies': ('ZENSARTECH', None, None, True),
        'Intellect Design Arena': ('INTELLECT', None, None, True),
        'Birlasoft': ('BSOFT', None, None, True),
        'Sonata Software': ('SONATSOFTW', None, None, True),
        'Newgen Software': ('NEWGEN', None, None, True),
        'Tanla Platforms': ('TANLA', None, None, True),
        'eMudhra': ('EMUDHRA', None, None, True),
        'Latent View Analytic': ('LATENTVIEW', None, None, True),
        'CE Info Systems': ('MAPMYINDIA', None, None, True),
        'Mastek': ('MASTEK', None, None, True),
        'Happiest Minds': ('HAPPSTMNDS', None, None, True),
        'Datamatic Global Ser': ('DATAMATICS', None, None, True),
        'Capillary Technologies': ('CAPILLARY', None, None, True),
        'Aurionpro Solutions': ('AURIONPRO', None, None, True),
        'Network People Services': ('NPST', None, None, True),
        'Route Mobile': ('ROUTE', None, None, True),
        'R Systems International': ('RSYSTEMS', None, None, True),
        'Protean eGov': ('PROTEAN', None, None, True),
        'Zaggle Prepaid': ('ZAGGLE', None, None, True),
        'Mobavenue Ai Tech': ('539682', None, None, True),
        'Saksoft': ('SAKSOFT', None, None, True),
        'Nucleus Software': ('NUCLEUS', None, None, True),
        'Xtranet Technologies': ('XTRANET', None, None, True),
        'Aurum Proptech': ('AURUM', None, None, True),
        'Ceinsys Tech': ('CEINSYS', None, None, True),
        'InfoBeans Technologies': ('INFOBEAN', None, None, True),
        'Expleo Solutions': ('EXPLEOSOL', None, None, True),
        'IZMO': ('IZMO', None, None, True),
        'Digitide Solutions': ('DIGITIDE', None, None, True),
        'TAC Security (Tac Infosec)': ('TAC', None, None, True),
        'Unicomm. eSolutions': ('UNIECOM', None, None, True),
        'Onward Technologies': ('ONWARDTEC', None, None, True),
    },
    'chemicals': {
        'Gujarat Fluorochemic': ('FLUOROCHEM', None, None, True),
        'Navin Fluorine Intl': ('NAVINFLUOR', None, None, True),
        'Himadri Speciality': ('HSCL', None, None, True),
        'Deepak Nitrite': ('DEEPAKNTR', None, None, True),
        'Aarti Industries': ('AARTIIND', None, None, True),
        'Deepak Fert & Petro': ('DEEPAKFERT', None, None, True),
        'Tata Chemicals': ('TATACHEM', None, None, True),
        'Supreme Petrochem': ('SPLPETRO', None, None, True),
        'BASF India': ('BASF', None, None, True),
        'Privi Speciality Che': ('PRIVISCL', None, None, True),
        'Anupam Rasayan': ('ANURAS', None, None, True),
        'PCBL Chemical': ('PCBL', None, None, True),
        'Alkyl Amines': ('ALKYLAMINE_s', None, ('Ethanol', 'Ethanol (a key amine input)'), True),
        'GNFC': ('GNFC', None, None, True),
        'Clean Science': ('CLEAN', None, None, True),
        'Galaxy Surfactants': ('GALAXYSURF', None, None, True),
        'Tanfac Industries': ('TANFACIND_s', None, None, True),
        'Balaji Amines': ('BALAMINES', None, ('Ethanol', 'Ethanol (a key amine input)'), True),
        'Neogen Chemicals': ('NEOGEN', None, None, True),
        'Fineotex Chemical': ('FCL', None, None, True),
        'Archean Chemical Industries': ('ACI', None, None, True),
        'Ellen. Indl. Gas': ('ELLEN_s', None, None, True),
        'Laxmi Organic': ('LXCHEM', None, None, True),
        'Yasho Industries': ('YASHO', None, None, True),
        'Vishnu Chemicals': ('VISHNU', None, None, True),
        'Epigral': ('EPIGRAL', None, None, True),
        'Tatva Chintan': ('TATVA', None, None, True),
        'Refex Industries': ('REFEX', None, None, True),
        'GHCL': ('GHCL', None, None, True),
        'Styrenix Performance': ('STYRENIX', None, None, True),
        'Premier Explosives': ('PREMEXPLN', None, None, True),
        'Kiri Industries': ('KIRIINDUS', None, None, True),
        'Nocil': ('NOCIL', None, ('Aniline incl. PNA, ONA, OCPNA', 'Aniline'), True),
        'Chemplast Sanmar': ('CHEMPLASTS', None, None, True),
        'DDev Plastiks': ('DDEVPLSTIK_s', None, None, True),
        'Stallion India Fluor': ('STALLION_s', None, None, True),
        'Rossari Biotech': ('ROSSARI', None, None, True),
        'JG Chemicals': ('JGCHEM', None, None, True),
        'SH Kelkar & Co': ('SHK', None, None, True),
        'Camlin Fine': ('CAMLINFINE', None, None, True),
        'IG Petrochem.': ('IGPL', None, None, True),
        'Oriental Aromatics': ('OAL', None, None, True),
        'Sh. Pushkar Chem.': ('SHREEPUSHK', None, None, True),
        'DCW': ('DCW_s', None, None, True),
        'Excel Industries': ('EXCELINDUS', None, None, True),
        'Sudarshan Chemicals': ('SUDARSCHEM', None, None, True),
        'Fairchem Organics': ('FAIRCHEMOR_s', None, None, True),
        'Chembond Chemicals': ('CHEMBONDCH', None, None, True),
    },
    'consumer-durables': {
        'Voltas': ('VOLTAS', None, COPPER, True),
        'Blue Star': ('BLUESTARCO', None, COPPER, True),
        'Metro Brands': ('METROBRAND', None, None, True),
        'Kajaria Ceramics': ('KAJARIACER', None, None, True),
        'Century Plyboards(I)': ('CENTURYPLY', None, None, True),
        'Honasa Consumer (Mamaearth)': ('HONASA', None, None, True),
        'Kansai Nerolac': ('KANSAINER', None, None, True),
        'Akzo Nobel': ('JSWDULUX', None, None, True),
        'Crompt.Greaves Cons.': ('CROMPTON', None, COPPER, True),
        'V-Guard Industri': ('VGUARD', None, COPPER, True),
        'Whirlpool India': ('WHIRLPOOL', None, COPPER, True),
        'Bata India': ('BATAINDIA', None, None, True),
        'Cello World': ('CELLO', None, PP, True),
        'Relaxo Footwears': ('RELAXO_s', None, None, True),
        'Eureka Forbes': ('EUREKAFORB', None, None, True),
        'TTK Prestige': ('TTKPRESTIG', None, ALU, True),
        'Jyothy Labs': ('JYOTHYLAB_s', None, None, True),
        'Cera Sanitaryware': ('CERA_s', None, None, True),
        'Sheela Foam': ('SFL', None, None, True),
        'Borosil': ('BOROLTD', None, None, True),
        'Campus Activewear': ('CAMPUS_s', None, None, True),
        'Stylam Industrie': ('STYLAMIND', None, None, True),
        'Greenlam Industries': ('GREENLAM', None, None, True),
        'Indigo Paints': ('INDIGOPNTS', None, None, True),
        'IFB Industries': ('IFBIND', None, None, True),
        'Wakefit Innovations': ('WAKEFIT_s', None, None, True),
        'Symphony': ('SYMPHONY', None, None, True),
        'Bajaj Electricals': ('BAJAJELEC', None, COPPER, True),
        'Greenply Industries': ('GREENPLY', None, None, True),
        'Orient Electric': ('ORIENTELEC_s', None, COPPER, True),
        'Mayur Uniquoters': ('MAYURUNIQ', None, None, True),
        'Carysil': ('CARYSIL', None, None, True),
        'Stove Kraft': ('STOVEKRAFT_s', None, ALU, True),
        'Somany Ceramics': ('SOMANYCERA', None, None, True),
        'Epack Durable': ('EPACK', None, COPPER, True),
        'Eveready Industries India': ('EVEREADY', None, None, True),
        'Sirca Paints': ('SIRCA', None, None, True),
        'Greenpanel Inds.': ('GREENPANEL_s', None, None, True),
        'Hindware Home Innov.': ('HINDWAREAP', None, None, True),
        'All Time Plastic': ('ALLTIME', None, PP, True),
        'Orient Bell': ('ORIENTBELL', None, None, True),
        'Rushil Decor': ('RUSHIL', None, None, True),
    },
    'auto-related': {
        'Shriram Pistons': ('SHRIPISTON', None, ALU, True),
        'Sona BLW Precision': ('SONACOMS', None, None, True),
        'Exide Industries': ('EXIDEIND', None, LEAD, True),
        'Dhoot Transmission': ('DHOOTTRANS', None, None, True),
        'Craftsman Automation': ('CRAFTSMAN', None, ALU, True),
        'ZF Comm Vehic Contr': ('ZFCVINDIA', None, None, True),
        'Sundram Fasteners': ('SUNDRMFAST', None, ALLOYSTEEL, True),
        'Gabriel India': ('GABRIEL', None, None, True),
        'Belrise Industries': ('BELRISE', None, None, True),
        'Motherson Sumi Wirin': ('MSUMI_s', None, COPPER, True),
        'Tenneco Clean Air': ('TENNIND', None, None, True),
        'Minda Corp': ('MINDACORP', None, None, True),
        'Sedemac Mechatronics': ('SEDEMAC_s', None, None, True),
        'CIE Automotive': ('CIEINDIA', None, STEEL_FORGE, True),
        'Amara Raja Energy': ('ARE&M', None, LEAD, True),
        'Lumax Auto Tech': ('LUMAXTECH', None, None, True),
        'Ramkrishna Forgings': ('RKFORGE', None, STEEL_FORGE, True),
        'Varroc Engineering': ('VARROC', None, None, True),
        'ASK Automotive': ('ASKAUTOLTD', None, ALU, True),
        'Pricol': ('PRICOLLTD', None, None, True),
        'SJS Enterprises': ('SJS', None, None, True),
        'Suprajit Engineering': ('SUPRAJIT', None, None, True),
        'Steel Strips Wheels': ('SSWL', None, HR, True),
        'Wheels India': ('WHEELS', None, HR, True),
        'Sharda Motor': ('SHARDAMOTR', None, None, True),
        'Lumax Industries': ('LUMAXIND', None, None, True),
        'Fiem Industries': ('FIEMIND', None, None, True),
        'Rolex Rings': ('ROLEXRINGS_s', None, STEEL_FORGE, True),
        'Uniparts India': ('UNIPARTS', None, None, True),
        'Rane (Madras)': ('RML', None, None, True),
        'Divgi Torqtransfer': ('DIVGIITTS_s', None, None, True),
        'Sandhar Technologies': ('SANDHAR', None, None, True),
        'JTEKT India': ('JTEKTINDIA_s', None, None, True),
        'Carraro India': ('CARRARO', None, None, True),
        'Talbros Auto Compont': ('TALBROAUTO', None, None, True),
        'Auto.Axle': ('AUTOAXLES_s', None, STEEL_FORGE, True),
        'OBSC Perfection': ('OBSCP_s', None, ALLOYSTEEL, True),
        'Rajratan Global': ('RAJRATAN', None, HR, True),
        'RACL Geartech': ('RACLGEAR', None, STEEL_FORGE, True),
        'Rico Auto Industries': ('RICOAUTO', None, ALU, True),
        'NDR Auto Components': ('NDRAUTO', None, None, True),
        'Kross': ('KROSS_s', None, None, True),
        'Frontier Springs': ('FRONTSP_s', None, ALLOYSTEEL, True),
        'Menon Bearings': ('MENONBE', None, None, True),
        'Poojaa Precision Engg': ('544844_s', None, None, True),
        'Studds Accessories': ('STUDDS', None, PP, True),
        'Alicon Castalloy': ('ALICON', None, ALU, True),
        'Precision Camshafts': ('PRECAM', None, CASTING, True),
        'Sterling Tools': ('STERTOOLS', None, ALLOYSTEEL, True),
        'Remsons Industries': ('REMSONSIND', None, None, True),
    },
    'tyres': {
        'Apollo Tyres': ('APOLLOTYRE', None, RUBBER, False),
        'CEAT': ('CEATLTD', None, RUBBER, False),
        'JK Tyre & Indust': ('JKTYRE', None, RUBBER, False),
    },
    'pharma': {
        'Emcure Pharma': ('EMCURE', None, ACETIC, False),
        'Corona Remedies': ('CORONA_s', None, ACETIC, False),
        'RPG Life Sciences': ('RPGLIFE_s', None, ACETIC, True),
        'Jagsonpal Pharma': ('JAGSNPHARM_s', None, ACETIC, False),
        'Eris Lifesciences': ('ERIS', None, ACETIC, False),
        'Sanofi India': ('SANOFI_s', None, ACETIC, False),
        'Indoco Remedies': ('INDOCO', None, ACETIC, False),
        'Zydus Lifesciences': ('ZYDUSLIFE', None, ACETIC, False),
        'Ajanta Pharma': ('AJANTPHARM', None, ACETIC, True),
        'Ipca Laboratories': ('IPCALAB', None, ACETIC, False),
        'Alembic Pharma': ('APLLTD', None, ACETIC, False),
        'Marksans Pharma': ('MARKSANS', None, ACETIC, False),
        'Caplin Point Labs': ('CAPLIPOINT', None, ACETIC, True),
        'Granules India': ('GRANULES', None, ACETIC, False),
        'Rubicon Research': ('RUBICON', None, ACETIC, False),
        'Natco Pharma': ('NATCOPHARM', None, ACETIC, True),
        'Strides Pharma': ('STAR', None, ACETIC, False),
        'Sai Parenterals': ('SAIPARENT', None, ACETIC, False),
        'Wockhardt': ('WOCKPHARMA', None, ACETIC, False),
        'Sakar Healthcare': ('SAKAR', None, ACETIC, False),
        'Gufic Biosciences': ('GUFICBIO_s', None, ACETIC, False),
        'Beta Drugs': ('BETA', None, ACETIC, False),
        'Fredun Pharma': ('FREDUN_s', None, ACETIC, False),
        'Orchid Pharma': ('ORCHPHARMA', None, ACETIC, False),
    },
}

MON = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12}


def fy_label(screener_q, half=False):
    m, y = screener_q.split()
    m, y = MON[m], int(y)
    fy = y + 1 if m >= 4 else y
    if half:
        return f"{'H1' if m == 9 else 'H2'} FY{fy % 100:02d}"
    q = {6: 1, 9: 2, 12: 3, 3: 4}.get(m)
    return f'Q{q} FY{fy % 100:02d}' if q else screener_q


def period_months(screener_q, half=False):
    m, y = screener_q.split(); m, y = MON[m], int(y)
    span = 6 if half else 3
    out = []
    for k in range(span):
        mm, yy = m - k, y
        while mm <= 0: mm += 12; yy -= 1
        out.append(f'{yy}-{mm:02d}')
    return out


def load(code):
    return json.load(open(os.path.join(CARDS, code + '.json')))


def r1(v): return None if v is None else round(v, 1)


def ttm_ebitda(d):
    if d.get('ttmEbitda') is not None: return d['ttmEbitda']
    qs, q = d['quarters'], d['qEbitda']
    half = is_half(qs)
    n = 2 if half else 4
    vals = [v for v in q[-n:] if v is not None]
    return sum(vals) if len(vals) == n else d['ebitda'][-1]


def is_half(qs):
    return len(qs) >= 3 and all(x.split()[0] in ('Mar', 'Sep') for x in qs[-3:])


def main(slug):
    cfg = CONFIG[slug]
    charts, metrics, val = {}, {k: {} for k in ('fcf', 'lev', 'capex', 'turn')}, {}
    for name, (code, qcode, inp, invcash) in cfg.items():
        d = load(code)
        qd = load(qcode) if qcode else d
        yrs = ['FY' + y.split()[1][2:] for y in d['years']]
        # net debt, optionally counting investments as cash
        nd = []
        for b, c, i in zip(d['borrowings'], d['cash'], d['investments']):
            nd.append(None if b is None else b - (c or 0) - ((i or 0) if invcash else 0))
        # ── charts ──
        cp = {k: v[-1] for k, v in d['costPct'].items() if v and v[-1] is not None}
        mat = cp.get('material', 0); mfg = cp.get('manufacturing', 0); emp = cp.get('employee', 0); oth = max(0, cp.get('other', 0))
        prof = round(100 - mat - mfg - emp - oth, 1)
        parts = [{'label': 'Materials', 'share': round(mat)}, {'label': 'Power and factory costs', 'share': round(mfg)},
                 {'label': 'Staff', 'share': round(emp)}, {'label': 'Other costs', 'share': round(oth)},
                 {'label': 'Operating profit' if prof >= 0 else 'Operating loss', 'share': round(abs(prof))}]
        parts = [p for p in parts if p['share'] > 0]
        c = {'costSplit': {'year': yrs[-1], 'parts': parts,
                           'note': 'Filed expense split (Screener). Materials include changes in stock.'}}
        if inp:
            half = is_half(qd['quarters'])
            qs = qd['quarters'][-(7 if half else 13):]
            idx = WPI.get(inp[0], {})
            raw = []
            for q in qs:
                ms = [idx.get(m) for m in period_months(q, half)]
                ms = [v for v in ms if v is not None]
                raw.append(sum(ms) / len(ms) if len(ms) == (6 if half else 3) else None)
            opm = qd['qOpm'][-len(qs):]
            # Drop leading periods before the price index starts.
            k0 = next((i for i, v in enumerate(raw) if v), len(raw))
            qs, raw, opm = qs[k0:], raw[k0:], opm[k0:]
            base = next((v for v in raw if v), None)
            c['marginVsInput'] = {
                'input': inp[1] + ' price',
                'periods': [fy_label(q, half) for q in qs],
                'margin': [r1(v) for v in opm],
                'index': [round(v / base * 100) if v and base else None for v in raw],
                'note': 'Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average.',
            }
        c['profitVsCash'] = {'years': yrs, 'ebitda': d['ebitda'], 'ocf': d['ocf'], 'fcf': d['fcf']}
        charts[name] = c
        # ── Tab 1 metrics ──
        s = d['sales']
        metrics['fcf'][name] = [r1(f / sv * 100) if f is not None and sv else None for f, sv in zip(d['fcf'], s)]
        tf = [f for f in d['fcf'] if f is not None]; ts = [v for f, v in zip(d['fcf'], s) if f is not None and v]
        metrics['fcf'][name].append(r1(sum(tf) / sum(ts) * 100) if tf and ts and len(tf) == len(ts) else None)
        metrics['lev'][name] = [r1(n / e) if n is not None and e and e > 0 else None for n, e in zip(nd, d['ebitda'])]
        metrics['capex'][name] = [r1(cx / sv * 100) if cx is not None and sv else None for cx, sv in zip(d['capex'], s)]
        tc = [x for x in d['capex'] if x is not None]; tcs = [v for x, v in zip(d['capex'], s) if x is not None and v]
        metrics['capex'][name].append(r1(sum(tc) / sum(tcs) * 100) if tc and len(tc) == len(tcs) else None)
        metrics['turn'][name] = [r1(sv / nb) if sv and nb else None for sv, nb in zip(s, d['netBlock'])]
        te = ttm_ebitda(d)
        ev = d['mcap'] + (nd[-1] or 0) if d['mcap'] is not None else None
        # key numbers strip
        eb5 = [e for e in d['ebitda'] if e is not None]; oc5 = [o for o in d['ocf'] if o is not None]
        conv = round(sum(oc5) / sum(eb5) * 100) if len(eb5) == len(oc5) == 5 and sum(eb5) > 0 else None
        opm = round(d['ebitda'][-1] / d['sales'][-1] * 100) if d['ebitda'][-1] is not None and d['sales'][-1] else None
        evx = ev / te if ev and te and te > 0 else None
        ndv = nd[-1]
        c['stats'] = [
            {'label': 'P/E', 'value': f"{d['pe']:.1f}x" if d['pe'] else 'Loss-making'},
            {'label': 'EV/EBITDA', 'value': f'{evx:.1f}x' if evx else 'n/m',
             'note': 'Market value plus net debt, ÷ operating profit over the last year.'},
            {'label': 'Net debt', 'value': ('—' if ndv is None else f'₹{abs(ndv):,.0f}cr net cash' if ndv < 0 else f'₹{ndv:,.0f}cr'),
             'note': 'Borrowings including leases, minus cash' + (' and mutual-fund investments' if invcash else '') + ', latest year end.'},
            {'label': 'Cash conversion, 5 yrs', 'value': f'{conv}%' if conv is not None else 'n/m',
             'note': 'Operating cash ÷ operating profit over five years; 70–80% is healthy.'},
            {'label': f'Operating margin {yrs[-1]}', 'value': f'{opm}%' if opm is not None else '—'},
        ]
        c['statsAsOf'] = '23 Sep 2026'
        wc = d.get('wc')
        if wc:
            dy = wc['days']
            fy = ['FY' + y.split()[1][2:] for y in wc['years']]

            def pair(k):
                # Screener measures stock days against material cost, which explodes when materials are a
                # small share of sales; figures above 900 days are not meaningful, so leave them blank.
                v = [x if x is None or abs(x) <= 900 else None for x in dy[k]]
                first = next((x for x in v if x is not None), None)
                return (round(first) if first is not None and v[-1] is not None else None, round(v[-1]) if v[-1] is not None else None)
            fi = next((i for i, x in enumerate(dy['Debtor Days']) if x is not None), 0)
            c['workingCapital'] = {
                'fromYear': fy[fi], 'toYear': fy[-1],
                'debtorDays': pair('Debtor Days'), 'inventoryDays': pair('Inventory Days'),
                'payableDays': pair('Days Payable'), 'cycleDays': pair('Cash Conversion Cycle'),
                'absorbed5y': wc['cash']['Working capital changes']['sum5'],
                'receivables5y': wc['cash']['Receivables']['sum5'],
                'inventory5y': wc['cash']['Inventory']['sum5'],
                'payables5y': wc['cash']['Payables']['sum5'],
            }
        val[name] = dict(pe=d['pe'], mcap=d['mcap'], netDebt=nd[-1], ttmEbitda=te,
                         evEbitda=r1(ev / te) if ev and te and te > 0 else None,
                         ndEbitda=r1(nd[-1] / te) if nd[-1] is not None and te and te > 0 else None,
                         promoter=d.get('promoter'))
    # write chart file
    os.makedirs(REPO, exist_ok=True)
    var = ''.join(w.capitalize() if i else w for i, w in enumerate(slug.split('-'))) + 'Charts'
    with open(os.path.join(REPO, slug + '.ts'), 'w', encoding='utf-8') as fh:
        fh.write("import { ProfileCharts, ValuationInput } from '../types';\n\n")
        fh.write('// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.\n')
        fh.write(f'export const {var}: Record<string, ProfileCharts> = ')
        fh.write(json.dumps(charts, indent=4, ensure_ascii=False))
        fh.write(';\n\n')
        vin = {n: {'netDebt': None if v['netDebt'] is None else round(v['netDebt']),
                   'ttmEbitda': None if v['ttmEbitda'] is None else round(v['ttmEbitda'], 1),
                   'mcapAtWriting': v['mcap'], 'peAtWriting': v['pe']} for n, v in val.items()}
        fh.write('// Fixed valuation inputs as of the note date; market value and P/E are live on the page.\n')
        fh.write(f"export const {var[:-len('Charts')]}ValuationInputs: Record<string, ValuationInput> = ")
        fh.write(json.dumps(vin, indent=4, ensure_ascii=False))
        fh.write(';\n')
    print('wrote', var)
    for k, v in metrics.items():
        print(f'\n// {k}')
        for n, arr in v.items():
            print(f"                '{n}': {json.dumps(arr)},")
    print('\n// valuation')
    for n, v in val.items():
        print(f"{n:22} P/E {v['pe']}  mcap {v['mcap']}  netDebt {v['netDebt']}  ttmEBITDA {v['ttmEbitda']}  EV/EBITDA {v['evEbitda']}  ND/EBITDA {v['ndEbitda']}  promoter {v['promoter']}")


if __name__ == '__main__':
    main(sys.argv[1])
