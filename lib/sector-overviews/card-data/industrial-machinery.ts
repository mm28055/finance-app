import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const industrialMachineryCharts: Record<string, ProfileCharts> = {
    "Jyoti CNC Auto.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 25
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Iron and steel castings price",
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
                7.7,
                18.2,
                25.4,
                29.8,
                23.5,
                24.8,
                25.1,
                30.9,
                24.4,
                24.6,
                26.9,
                24.5,
                21.5
            ],
            "index": [
                100,
                98,
                97,
                98,
                97,
                96,
                96,
                95,
                97,
                99,
                100,
                100,
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
                73.0,
                77.0,
                301.0,
                491.0,
                527.0
            ],
            "ocf": [
                39.0,
                42.0,
                -48.0,
                -105.0,
                54.0
            ],
            "fcf": [
                -2.0,
                8.0,
                -162.0,
                -415.0,
                -269.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "78.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "48.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹716cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-1%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "25%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                98,
                104
            ],
            "inventoryDays": [
                551,
                453
            ],
            "payableDays": [
                257,
                198
            ],
            "cycleDays": [
                392,
                359
            ],
            "absorbed5y": -1274,
            "receivables5y": 16,
            "inventory5y": -501,
            "payables5y": -17
        }
    },
    "LMW": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 5
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Iron and steel castings price",
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
                9.2,
                10.3,
                9.6,
                7.6,
                1.9,
                4.2,
                4.7,
                7.2,
                2.0,
                5.4,
                5.5,
                7.5,
                7.4
            ],
            "index": [
                100,
                98,
                97,
                98,
                97,
                96,
                96,
                95,
                97,
                99,
                100,
                100,
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
                247.0,
                450.0,
                435.0,
                142.0,
                170.0
            ],
            "ocf": [
                485.0,
                364.0,
                141.0,
                29.0,
                177.0
            ],
            "fcf": [
                409.0,
                86.0,
                -10.0,
                -101.0,
                103.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "100.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "74.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,970cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                37,
                32
            ],
            "inventoryDays": [
                94,
                106
            ],
            "payableDays": [
                100,
                114
            ],
            "cycleDays": [
                31,
                23
            ],
            "absorbed5y": -8,
            "receivables5y": -101,
            "inventory5y": -231,
            "payables5y": 189
        }
    },
    "Macpower CNC": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Iron and steel castings price",
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
                8.3,
                14.3,
                15.3,
                18.0,
                13.1,
                17.9,
                12.9,
                17.9,
                13.0,
                16.5,
                18.1,
                16.2,
                16.2
            ],
            "index": [
                100,
                98,
                97,
                98,
                97,
                96,
                96,
                95,
                97,
                99,
                100,
                100,
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
                20.0,
                21.0,
                35.0,
                42.0,
                54.0
            ],
            "ocf": [
                -7.0,
                5.0,
                17.0,
                7.0,
                14.0
            ],
            "fcf": [
                -11.85,
                -1.9299999999999997,
                6.449999999999999,
                -8.98,
                3.0299999999999994
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "53.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹6cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "21%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "16%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                11,
                51
            ],
            "inventoryDays": [
                208,
                259
            ],
            "payableDays": [
                114,
                128
            ],
            "cycleDays": [
                105,
                182
            ],
            "absorbed5y": -96,
            "receivables5y": -43,
            "inventory5y": -84,
            "payables5y": 28
        }
    },
    "Mamata Machinery": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 21
                },
                {
                    "label": "Other costs",
                    "share": 17
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                39.6,
                24.9,
                29.3,
                -1.2,
                12.2,
                17.3,
                33.0,
                8.0,
                12.4,
                12.7,
                5.1,
                -13.0
            ],
            "index": [
                100,
                99,
                95,
                95,
                92,
                88,
                88,
                91,
                88,
                86,
                91,
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
                30.0,
                24.0,
                47.0,
                55.0,
                22.0
            ],
            "ocf": [
                37.0,
                17.0,
                40.0,
                72.0,
                2.0
            ],
            "fcf": [
                35.48,
                15.96,
                38.69,
                70.19,
                -5.02
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "92.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "71.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹15cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "94%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "9%"
            }
        ],
        "statsAsOf": "23 Sep 2026"
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const industrialMachineryValuationInputs: Record<string, ValuationInput> = {
    "Jyoti CNC Auto.": {
        "netDebt": 716,
        "ttmEbitda": 535.0,
        "mcapAtWriting": 25271.0,
        "peAtWriting": 78.5
    },
    "LMW": {
        "netDebt": -1970,
        "ttmEbitda": 219.0,
        "mcapAtWriting": 18259.0,
        "peAtWriting": 100.0
    },
    "Macpower CNC": {
        "netDebt": -6,
        "ttmEbitda": 61.0,
        "mcapAtWriting": 2091.0,
        "peAtWriting": 53.8
    },
    "Mamata Machinery": {
        "netDebt": -15,
        "ttmEbitda": 14.0,
        "mcapAtWriting": 1009.0,
        "peAtWriting": 92.0
    }
};
