import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const hardwareCharts: Record<string, ProfileCharts> = {
    "GNG Electronics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Laptops bought and other costs",
                    "share": 84
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
            "periods": [
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
                9.3,
                8.9,
                6.1,
                10.3,
                10.7,
                11.1,
                9.7,
                11.9
            ],
            "index": [
                100,
                102,
                102,
                103,
                98,
                104,
                101,
                99,
                102
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
                31.0,
                45.0,
                79.0,
                117.0,
                196.0
            ],
            "ocf": [
                -17.0,
                1.0,
                97.0,
                25.0,
                -215.0
            ],
            "fcf": [
                -18.26,
                0.19999999999999996,
                72.97,
                15.01,
                -237.85
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "57.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹315cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-23%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                29,
                40
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
                110,
                40
            ],
            "absorbed5y": -609,
            "receivables5y": -167,
            "inventory5y": -649,
            "payables5y": -7
        }
    },
    "Rashi Peripheral": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 94
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 1
                },
                {
                    "label": "Operating profit",
                    "share": 4
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
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
                3.8,
                2.3,
                2.4,
                2.3,
                1.9,
                2.7,
                0.7,
                3.2,
                3.3,
                2.5,
                3.0,
                3.0,
                3.0
            ],
            "index": [
                100,
                97,
                99,
                94,
                95,
                98,
                97,
                99,
                94,
                99,
                97,
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
                301.0,
                256.0,
                297.0,
                305.0,
                464.0
            ],
            "ocf": [
                -315.0,
                -115.0,
                -102.0,
                -299.0,
                114.0
            ],
            "fcf": [
                -327.26,
                -126.32,
                -109.08,
                -307.02,
                105.75
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹910cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-44%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "3%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                45,
                50
            ],
            "inventoryDays": [
                50,
                62
            ],
            "payableDays": [
                47,
                53
            ],
            "cycleDays": [
                48,
                60
            ],
            "absorbed5y": -2106,
            "receivables5y": -1360,
            "inventory5y": -1988,
            "payables5y": 1541
        }
    },
    "Control Print": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
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
                24.8,
                23.7,
                24.6,
                22.9,
                20.9,
                19.9,
                16.7,
                18.1,
                16.7,
                23.2,
                15.0,
                18.8,
                13.2
            ],
            "index": [
                100,
                97,
                99,
                94,
                95,
                98,
                97,
                99,
                94,
                99,
                97,
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
                59.0,
                76.0,
                86.0,
                80.0,
                89.0
            ],
            "ocf": [
                50.0,
                55.0,
                50.0,
                50.0,
                50.0
            ],
            "fcf": [
                39.0,
                28.0,
                8.0,
                23.0,
                24.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹58cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "65%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "18%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                89,
                89
            ],
            "inventoryDays": [
                235,
                271
            ],
            "payableDays": [
                60,
                78
            ],
            "cycleDays": [
                265,
                283
            ],
            "absorbed5y": -74,
            "receivables5y": -61,
            "inventory5y": -78,
            "payables5y": 33
        }
    },
    "TVS Electronics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 24
                },
                {
                    "label": "Operating profit",
                    "share": 5
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
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
                2.8,
                4.2,
                0.6,
                2.7,
                2.8,
                2.5,
                3.0,
                2.3,
                1.3,
                3.7,
                5.7,
                6.0,
                -2.3
            ],
            "index": [
                100,
                97,
                99,
                94,
                95,
                98,
                97,
                99,
                94,
                99,
                97,
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
                27.0,
                20.0,
                10.0,
                11.0,
                20.0
            ],
            "ocf": [
                26.0,
                -8.0,
                14.0,
                7.0,
                6.0
            ],
            "fcf": [
                22.11,
                -23.64,
                -13.969999999999999,
                -1.8699999999999992,
                1.46
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "48.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹49cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "4%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                42,
                76
            ],
            "inventoryDays": [
                112,
                112
            ],
            "payableDays": [
                162,
                129
            ],
            "cycleDays": [
                -9,
                59
            ],
            "absorbed5y": -36,
            "receivables5y": -72,
            "inventory5y": -34,
            "payables5y": 35
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const hardwareValuationInputs: Record<string, ValuationInput> = {
    "GNG Electronics": {
        "netDebt": 315,
        "ttmEbitda": 213.0,
        "mcapAtWriting": 8153.0,
        "peAtWriting": 57.3
    },
    "Rashi Peripheral": {
        "netDebt": 910,
        "ttmEbitda": 510.0,
        "mcapAtWriting": 5949.0,
        "peAtWriting": 18.7
    },
    "Control Print": {
        "netDebt": -58,
        "ttmEbitda": 85.0,
        "mcapAtWriting": 936.0,
        "peAtWriting": 24.1
    },
    "TVS Electronics": {
        "netDebt": 49,
        "ttmEbitda": 16.0,
        "mcapAtWriting": 731.0,
        "peAtWriting": null
    }
};
