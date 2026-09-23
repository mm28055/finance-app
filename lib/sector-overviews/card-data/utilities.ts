import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const utilitiesCharts: Record<string, ProfileCharts> = {
    "Va Tech Wabag": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 76
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel pipes and tubes price",
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
                10.1,
                12.9,
                13.9,
                12.4,
                12.6,
                13.4,
                12.1,
                12.2,
                13.1,
                10.7,
                12.7,
                11.0,
                9.0
            ],
            "index": [
                100,
                98,
                98,
                96,
                96,
                95,
                94,
                95,
                94,
                94,
                91,
                93,
                96
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
                234.0,
                318.0,
                366.0,
                422.0,
                478.0
            ],
            "ocf": [
                12.0,
                85.0,
                134.0,
                355.0,
                207.0
            ],
            "fcf": [
                6.48,
                79.8,
                122.1,
                350.5,
                201.8
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹903cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "44%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "12%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                162,
                234
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
                162,
                234
            ],
            "absorbed5y": -798,
            "receivables5y": -1385,
            "inventory5y": -6,
            "payables5y": 244
        }
    },
    "ION Exchage": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel pipes and tubes price",
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
                10.2,
                11.3,
                12.7,
                11.8,
                11.3,
                10.6,
                10.9,
                10.3,
                10.7,
                9.3,
                8.1,
                2.3,
                4.5
            ],
            "index": [
                100,
                98,
                98,
                96,
                96,
                95,
                94,
                95,
                94,
                94,
                91,
                93,
                96
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
                216.0,
                258.0,
                275.0,
                297.0,
                214.0
            ],
            "ocf": [
                91.0,
                63.0,
                130.0,
                32.0,
                -28.0
            ],
            "fcf": [
                41.0,
                3.0,
                10.0,
                -288.0,
                -282.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "57.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "36.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹163cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "23%",
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
                118,
                135
            ],
            "inventoryDays": [
                70,
                87
            ],
            "payableDays": [
                202,
                177
            ],
            "cycleDays": [
                -14,
                44
            ],
            "absorbed5y": -702,
            "receivables5y": -637,
            "inventory5y": -295,
            "payables5y": 330
        }
    },
    "Enviro Infra Engine.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 47
                },
                {
                    "label": "Power and factory costs",
                    "share": 19
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 24
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel pipes and tubes price",
            "periods": [
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
                18.3,
                18.7,
                28.7,
                24.9,
                26.3,
                21.9,
                25.2,
                26.6,
                28.6,
                27.2,
                18.7,
                21.2
            ],
            "index": [
                100,
                99,
                97,
                97,
                96,
                96,
                97,
                96,
                96,
                92,
                95,
                98
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
                50.0,
                82.0,
                166.0,
                268.0,
                277.0
            ],
            "ocf": [
                42.0,
                101.0,
                -102.0,
                -59.0,
                -63.0
            ],
            "fcf": [
                38.0,
                90.0,
                -135.0,
                -106.0,
                -245.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹20cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-10%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "24%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                64,
                53
            ],
            "inventoryDays": [
                34,
                23
            ],
            "payableDays": [
                145,
                163
            ],
            "cycleDays": [
                -46,
                -88
            ],
            "absorbed5y": -753,
            "receivables5y": -311,
            "inventory5y": -30,
            "payables5y": 212
        }
    },
    "EMS Limited": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel pipes and tubes price",
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
                23.2,
                27.0,
                23.5,
                27.8,
                24.3,
                29.6,
                29.0,
                24.1,
                22.6,
                21.4,
                15.5,
                15.0,
                16.6
            ],
            "index": [
                100,
                98,
                98,
                96,
                96,
                95,
                94,
                95,
                94,
                94,
                91,
                93,
                96
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
                113.0,
                150.0,
                204.0,
                261.0,
                143.0
            ],
            "ocf": [
                23.0,
                4.0,
                -116.0,
                36.0,
                -15.0
            ],
            "fcf": [
                9.0,
                -5.0,
                -149.0,
                30.0,
                -88.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹95cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-8%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "20%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                160,
                193
            ],
            "inventoryDays": [
                27,
                163
            ],
            "payableDays": [
                8,
                24
            ],
            "cycleDays": [
                160,
                333
            ],
            "absorbed5y": -747,
            "receivables5y": -256,
            "inventory5y": -191,
            "payables5y": -7
        }
    },
    "Antony Waste Hand": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 1
                },
                {
                    "label": "Power and factory costs",
                    "share": 26
                },
                {
                    "label": "Staff",
                    "share": 33
                },
                {
                    "label": "Other costs",
                    "share": 21
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                21.1,
                22.8,
                20.3,
                17.2,
                21.8,
                19.3,
                21.4,
                21.0,
                22.3,
                19.7,
                16.3,
                19.9,
                14.3
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
                148.0,
                148.0,
                173.0,
                195.0,
                206.0
            ],
            "ocf": [
                105.0,
                90.0,
                140.0,
                188.0,
                143.0
            ],
            "fcf": [
                -4.0,
                -178.0,
                -13.0,
                -12.0,
                83.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹336cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "77%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "20%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                100,
                112
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
                100,
                112
            ],
            "absorbed5y": -150,
            "receivables5y": -293,
            "inventory5y": 0,
            "payables5y": 73
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const utilitiesValuationInputs: Record<string, ValuationInput> = {
    "Va Tech Wabag": {
        "netDebt": -903,
        "ttmEbitda": 446.0,
        "mcapAtWriting": 12788.0,
        "peAtWriting": 32.1
    },
    "ION Exchage": {
        "netDebt": 163,
        "ttmEbitda": 179.0,
        "mcapAtWriting": 6310.0,
        "peAtWriting": 57.4
    },
    "Enviro Infra Engine.": {
        "netDebt": 20,
        "ttmEbitda": 288.0,
        "mcapAtWriting": 3578.0,
        "peAtWriting": 19.5
    },
    "EMS Limited": {
        "netDebt": 95,
        "ttmEbitda": 112.0,
        "mcapAtWriting": 2035.0,
        "peAtWriting": 29.9
    },
    "Antony Waste Hand": {
        "netDebt": 336,
        "ttmEbitda": 188.0,
        "mcapAtWriting": 1094.0,
        "peAtWriting": 18.7
    }
};
