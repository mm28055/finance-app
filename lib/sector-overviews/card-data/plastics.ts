import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const plasticsCharts: Record<string, ProfileCharts> = {
    "Garware Hi-Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Polyester film price",
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
                16.8,
                16.4,
                16.5,
                17.4,
                25.1,
                22.1,
                17.4,
                19.0,
                22.2,
                20.9,
                15.3,
                22.6,
                27.2
            ],
            "index": [
                100,
                99,
                94,
                95,
                97,
                116,
                114,
                109,
                99,
                98,
                95,
                106,
                115
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
                238.0,
                227.0,
                282.0,
                441.0,
                435.0
            ],
            "ocf": [
                172.0,
                218.0,
                172.0,
                330.0,
                275.0
            ],
            "fcf": [
                46.0,
                148.0,
                155.0,
                271.0,
                114.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹853cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                9,
                9
            ],
            "inventoryDays": [
                145,
                149
            ],
            "payableDays": [
                76,
                69
            ],
            "cycleDays": [
                79,
                89
            ],
            "absorbed5y": -206,
            "receivables5y": -3,
            "inventory5y": -266,
            "payables5y": 96
        }
    },
    "Shaily Engg. Plastic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 43
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 28
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Polypropylene price",
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
                17.2,
                15.2,
                20.3,
                20.5,
                19.6,
                20.8,
                23.2,
                24.8,
                27.5,
                30.7,
                26.4,
                27.8,
                29.5
            ],
            "index": [
                100,
                97,
                97,
                98,
                97,
                98,
                97,
                98,
                97,
                96,
                90,
                97,
                115
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
                82.0,
                93.0,
                118.0,
                177.0,
                280.0
            ],
            "ocf": [
                55.0,
                90.0,
                92.0,
                110.0,
                226.0
            ],
            "fcf": [
                -66.0,
                -22.0,
                -3.0,
                38.0,
                40.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "83.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "50.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹152cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "76%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "28%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                65,
                79
            ],
            "inventoryDays": [
                114,
                129
            ],
            "payableDays": [
                87,
                74
            ],
            "cycleDays": [
                92,
                135
            ],
            "absorbed5y": -120,
            "receivables5y": -180,
            "inventory5y": -94,
            "payables5y": 60
        }
    },
    "Finolex Inds": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 57
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Plastic and PVC pipes price",
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
                12.9,
                11.7,
                11.8,
                16.9,
                18.2,
                1.3,
                8.3,
                14.6,
                9.0,
                15.1,
                13.7,
                25.3,
                12.1
            ],
            "index": [
                100,
                99,
                99,
                97,
                100,
                100,
                98,
                96,
                96,
                96,
                93,
                93,
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
                1023.0,
                293.0,
                585.0,
                476.0,
                679.0
            ],
            "ocf": [
                622.0,
                308.0,
                353.0,
                383.0,
                192.0
            ],
            "fcf": [
                538.0,
                139.0,
                267.0,
                267.0,
                127.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,583cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                26,
                32
            ],
            "inventoryDays": [
                132,
                159
            ],
            "payableDays": [
                60,
                57
            ],
            "cycleDays": [
                98,
                134
            ],
            "absorbed5y": -339,
            "receivables5y": -214,
            "inventory5y": -108,
            "payables5y": -67
        }
    },
    "Time Technoplast": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Polyethylene (HDPE) price",
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
                13.6,
                14.0,
                14.4,
                13.3,
                14.1,
                14.3,
                14.5,
                14.6,
                14.4,
                14.8,
                15.0,
                14.4,
                13.2
            ],
            "index": [
                100,
                98,
                91,
                93,
                92,
                91,
                89,
                89,
                87,
                90,
                88,
                99,
                130
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
                506.0,
                577.0,
                691.0,
                785.0,
                892.0
            ],
            "ocf": [
                291.0,
                370.0,
                406.0,
                431.0,
                233.0
            ],
            "fcf": [
                103.0,
                145.0,
                225.0,
                235.0,
                -137.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹153cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "50%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "15%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                87,
                87
            ],
            "inventoryDays": [
                129,
                111
            ],
            "payableDays": [
                55,
                37
            ],
            "cycleDays": [
                161,
                161
            ],
            "absorbed5y": -1297,
            "receivables5y": -674,
            "inventory5y": -568,
            "payables5y": 129
        }
    },
    "Prince Pipes": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 9
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Plastic and PVC pipes price",
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
                8.1,
                14.3,
                12.3,
                12.4,
                9.6,
                7.4,
                0.9,
                7.6,
                6.9,
                9.2,
                4.9,
                12.9,
                12.6
            ],
            "index": [
                100,
                99,
                99,
                97,
                100,
                100,
                98,
                96,
                96,
                96,
                93,
                93,
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
                416.0,
                250.0,
                307.0,
                163.0,
                232.0
            ],
            "ocf": [
                -20.0,
                360.0,
                33.0,
                119.0,
                526.0
            ],
            "fcf": [
                -189.0,
                265.0,
                -161.0,
                -138.0,
                311.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹132cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "9%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                60,
                51
            ],
            "inventoryDays": [
                119,
                95
            ],
            "payableDays": [
                77,
                76
            ],
            "cycleDays": [
                102,
                71
            ],
            "absorbed5y": -176,
            "receivables5y": -68,
            "inventory5y": -268,
            "payables5y": 68
        }
    },
    "Apollo Pipes": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Plastic and PVC pipes price",
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
                9.7,
                9.1,
                10.1,
                10.1,
                9.0,
                8.6,
                9.0,
                8.5,
                8.9,
                6.9,
                6.9,
                3.2
            ],
            "index": [
                100,
                99,
                99,
                97,
                100,
                100,
                98,
                96,
                96,
                96,
                93,
                93,
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
                94.0,
                69.0,
                96.0,
                87.0,
                69.0
            ],
            "ocf": [
                36.0,
                69.0,
                123.0,
                70.0,
                38.0
            ],
            "fcf": [
                -6.0,
                -4.0,
                27.0,
                -29.0,
                -50.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "40.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹10cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "81%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "8%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                33,
                29
            ],
            "inventoryDays": [
                84,
                100
            ],
            "payableDays": [
                35,
                74
            ],
            "cycleDays": [
                82,
                54
            ],
            "absorbed5y": -19,
            "receivables5y": -8,
            "inventory5y": -94,
            "payables5y": 107
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const plasticsValuationInputs: Record<string, ValuationInput> = {
    "Garware Hi-Tech": {
        "netDebt": -853,
        "ttmEbitda": 497.0,
        "mcapAtWriting": 15235.0,
        "peAtWriting": 39.3
    },
    "Shaily Engg. Plastic": {
        "netDebt": 152,
        "ttmEbitda": 294.0,
        "mcapAtWriting": 14742.0,
        "peAtWriting": 83.4
    },
    "Finolex Inds": {
        "netDebt": -4583,
        "ttmEbitda": 692.0,
        "mcapAtWriting": 9580.0,
        "peAtWriting": 15.6
    },
    "Time Technoplast": {
        "netDebt": 153,
        "ttmEbitda": 922.0,
        "mcapAtWriting": 8974.0,
        "peAtWriting": 18.3
    },
    "Prince Pipes": {
        "netDebt": -132,
        "ttmEbitda": 270.0,
        "mcapAtWriting": 2938.0,
        "peAtWriting": 28.2
    },
    "Apollo Pipes": {
        "netDebt": 10,
        "ttmEbitda": 58.0,
        "mcapAtWriting": 2311.0,
        "peAtWriting": null
    }
};
