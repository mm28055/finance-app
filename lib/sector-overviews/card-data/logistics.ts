import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const logisticsCharts: Record<string, ProfileCharts> = {
    "Aegis Logistics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                9.3,
                16.8,
                11.3,
                16.7,
                14.5,
                12.8,
                13.6,
                24.0,
                14.0,
                12.7,
                17.2,
                24.1,
                30.3
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                98,
                97,
                97,
                94,
                95,
                95,
                96,
                119
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                535.0,
                672.0,
                923.0,
                1098.0,
                1452.0
            ],
            "ocf": [
                280.0,
                358.0,
                656.0,
                558.0,
                2028.0
            ],
            "fcf": [
                -113.0,
                -180.0,
                40.0,
                -387.0,
                1207.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹45cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                58,
                21
            ],
            "inventoryDays": [
                9,
                7
            ],
            "payableDays": [
                63,
                40
            ],
            "cycleDays": [
                3,
                -12
            ],
            "absorbed5y": 381,
            "receivables5y": -395,
            "inventory5y": -75,
            "payables5y": 642
        }
    },
    "Delhivery": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 75
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 6
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                -0.7,
                -0.8,
                4.8,
                2.2,
                4.4,
                2.3,
                4.2,
                5.4,
                6.1,
                2.7,
                7.5,
                7.5,
                4.7
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                98,
                97,
                97,
                94,
                95,
                95,
                96,
                119
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                -475.0,
                -452.0,
                127.0,
                376.0,
                640.0
            ],
            "ocf": [
                -241.0,
                -30.0,
                472.0,
                567.0,
                911.0
            ],
            "fcf": [
                -785.0,
                -631.0,
                -93.0,
                84.0,
                489.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "272.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "48.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,742cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "6%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                53,
                48
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                53,
                48
            ],
            "absorbed5y": -406,
            "receivables5y": -594,
            "inventory5y": 2,
            "payables5y": 382
        }
    },
    "Shadowfax Tech.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 27
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 58
                },
                {
                    "label": "Operating profit",
                    "share": 6
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                3.0,
                1.7,
                3.0,
                4.0,
                5.7,
                6.5,
                6.8
            ],
            "index": [
                100,
                101,
                97,
                98,
                98,
                100,
                123
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                -107.0,
                19.0,
                63.0,
                221.0
            ],
            "ocf": [
                -73.0,
                132.0,
                50.0,
                350.0
            ],
            "fcf": [
                -120.0,
                79.0,
                -36.0,
                165.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "99.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "57.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹786cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                40,
                45
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                40,
                45
            ],
            "absorbed5y": 199,
            "receivables5y": -327,
            "inventory5y": null,
            "payables5y": 265
        }
    },
    "TVS Supply Chain Sol": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 19
                },
                {
                    "label": "Power and factory costs",
                    "share": 47
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 7
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                7.4,
                8.2,
                7.3,
                6.8,
                7.2,
                7.6,
                6.2,
                6.8,
                6.8,
                6.8,
                7.6,
                7.2,
                6.7
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                98,
                97,
                97,
                94,
                95,
                95,
                96,
                119
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                621.0,
                672.0,
                705.0,
                673.0,
                778.0
            ],
            "ocf": [
                601.0,
                734.0,
                128.0,
                672.0,
                746.0
            ],
            "fcf": [
                485.0,
                589.0,
                4.0,
                497.0,
                468.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "82.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,031cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "7%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                52,
                55
            ],
            "inventoryDays": [
                92,
                95
            ],
            "payableDays": [
                458,
                320
            ],
            "cycleDays": [
                -314,
                -170
            ],
            "absorbed5y": -516,
            "receivables5y": -449,
            "inventory5y": -218,
            "payables5y": 261
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const logisticsValuationInputs: Record<string, ValuationInput> = {
    "Aegis Logistics": {
        "netDebt": -45,
        "ttmEbitda": 1926.0,
        "mcapAtWriting": 49335.0,
        "peAtWriting": 39.4
    },
    "Delhivery": {
        "netDebt": -1742,
        "ttmEbitda": 630.0,
        "mcapAtWriting": 32414.0,
        "peAtWriting": 272.0
    },
    "Shadowfax Tech.": {
        "netDebt": -786,
        "ttmEbitda": 278.0,
        "mcapAtWriting": 16770.0,
        "peAtWriting": 99.2
    },
    "TVS Supply Chain Sol": {
        "netDebt": 2031,
        "ttmEbitda": 830.0,
        "mcapAtWriting": 5837.0,
        "peAtWriting": 82.4
    }
};
