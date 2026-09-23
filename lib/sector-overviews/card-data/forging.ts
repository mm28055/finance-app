import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const forgingCharts: Record<string, ProfileCharts> = {
    "AIA Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 38
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 28
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Ferrochrome price",
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
                27.7,
                29.5,
                26.6,
                25.8,
                28.3,
                26.4,
                26.5,
                26.1,
                29.5,
                28.3,
                27.2,
                28.7,
                26.4
            ],
            "index": [
                100,
                94,
                93,
                94,
                93,
                92,
                89,
                85,
                90,
                93,
                98,
                100,
                107
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
                726.0,
                1245.0,
                1340.0,
                1154.0,
                1261.0
            ],
            "ocf": [
                -40.0,
                868.0,
                903.0,
                1162.0,
                592.0
            ],
            "fcf": [
                -165.0,
                673.0,
                692.0,
                1025.0,
                488.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,516cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "29%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                82,
                97
            ],
            "inventoryDays": [
                304,
                270
            ],
            "payableDays": [
                49,
                47
            ],
            "cycleDays": [
                337,
                320
            ],
            "absorbed5y": -1199,
            "receivables5y": -500,
            "inventory5y": -501,
            "payables5y": 55
        }
    },
    "Happy Forgings": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 41
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 30
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy steel billets price",
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
                30.3,
                27.4,
                27.8,
                28.3,
                28.7,
                29.1,
                28.5,
                29.0,
                28.5,
                30.8,
                30.7,
                31.4,
                31.4
            ],
            "index": [
                100,
                95,
                93,
                89,
                95,
                88,
                88,
                89,
                90,
                85,
                83,
                90,
                92
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
                231.0,
                341.0,
                388.0,
                407.0,
                471.0
            ],
            "ocf": [
                80.0,
                209.0,
                189.0,
                292.0,
                445.0
            ],
            "fcf": [
                -111.0,
                34.0,
                -5.0,
                11.0,
                -16.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "60.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "38.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹40cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "30%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                94,
                93
            ],
            "inventoryDays": [
                173,
                134
            ],
            "payableDays": [
                42,
                34
            ],
            "cycleDays": [
                226,
                193
            ],
            "absorbed5y": -300,
            "receivables5y": -219,
            "inventory5y": -111,
            "payables5y": 21
        }
    },
    "Steelcast": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 21
                },
                {
                    "label": "Power and factory costs",
                    "share": 36
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 27
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel scrap price",
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
                26.9,
                28.4,
                30.0,
                29.6,
                26.0,
                25.3,
                27.5,
                31.7,
                25.2,
                28.0,
                28.9,
                25.9,
                25.6
            ],
            "index": [
                100,
                95,
                94,
                91,
                92,
                89,
                86,
                83,
                85,
                81,
                80,
                86,
                87
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
                64.0,
                114.0,
                117.0,
                103.0,
                114.0
            ],
            "ocf": [
                -0.0,
                107.0,
                82.0,
                75.0,
                86.0
            ],
            "fcf": [
                -33.0,
                60.0,
                64.0,
                56.0,
                53.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹96cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "27%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                91,
                93
            ],
            "inventoryDays": [
                330,
                171
            ],
            "payableDays": [
                192,
                106
            ],
            "cycleDays": [
                230,
                158
            ],
            "absorbed5y": -59,
            "receivables5y": -56,
            "inventory5y": -15,
            "payables5y": 7
        }
    },
    "MM Forgings": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 19
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy steel billets price",
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
                17.6,
                18.9,
                18.8,
                19.6,
                19.1,
                19.3,
                19.5,
                19.7,
                17.4,
                17.4,
                16.7,
                18.8,
                17.9
            ],
            "index": [
                100,
                95,
                93,
                89,
                95,
                88,
                88,
                89,
                90,
                85,
                83,
                90,
                92
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
                209.0,
                273.0,
                293.0,
                296.0,
                280.0
            ],
            "ocf": [
                150.0,
                160.0,
                149.0,
                182.0,
                228.0
            ],
            "fcf": [
                37.0,
                -41.0,
                -105.0,
                -221.0,
                38.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,010cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "64%",
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
                50,
                96
            ],
            "inventoryDays": [
                147,
                171
            ],
            "payableDays": [
                79,
                103
            ],
            "cycleDays": [
                118,
                165
            ],
            "absorbed5y": -328,
            "receivables5y": -171,
            "inventory5y": -154,
            "payables5y": -32
        }
    },
    "Synergy Green": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 38
                },
                {
                    "label": "Power and factory costs",
                    "share": 37
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pig iron price",
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
                10.7,
                13.9,
                11.4,
                12.2,
                12.7,
                14.6,
                14.4,
                15.5,
                13.1,
                12.5,
                8.7,
                8.4,
                6.7
            ],
            "index": [
                100,
                97,
                95,
                95,
                98,
                91,
                89,
                85,
                86,
                83,
                82,
                88,
                94
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
                24.0,
                26.0,
                39.0,
                52.0,
                39.0
            ],
            "ocf": [
                28.0,
                26.0,
                38.0,
                -16.0,
                19.0
            ],
            "fcf": [
                2.0,
                16.0,
                19.0,
                -103.0,
                -120.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "38.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹238cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "53%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                42,
                65
            ],
            "inventoryDays": [
                189,
                164
            ],
            "payableDays": [
                202,
                186
            ],
            "cycleDays": [
                29,
                43
            ],
            "absorbed5y": -84,
            "receivables5y": -37,
            "inventory5y": -10,
            "payables5y": 14
        }
    },
    "Nelcast": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
                },
                {
                    "label": "Power and factory costs",
                    "share": 33
                },
                {
                    "label": "Staff",
                    "share": 7
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
            "input": "Pig iron price",
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
                6.6,
                8.9,
                8.0,
                5.3,
                6.7,
                6.5,
                5.9,
                9.0,
                8.5,
                5.7,
                10.1,
                8.7,
                4.6
            ],
            "index": [
                100,
                97,
                95,
                95,
                98,
                91,
                89,
                85,
                86,
                83,
                82,
                88,
                94
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
                80.0,
                92.0,
                89.0,
                111.0
            ],
            "ocf": [
                -13.0,
                80.0,
                20.0,
                105.0,
                92.0
            ],
            "fcf": [
                -54.34,
                60.53,
                -0.8399999999999999,
                24.239999999999995,
                74.26
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹172cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                95,
                98
            ],
            "inventoryDays": [
                128,
                120
            ],
            "payableDays": [
                145,
                167
            ],
            "cycleDays": [
                77,
                51
            ],
            "absorbed5y": -153,
            "receivables5y": -178,
            "inventory5y": -72,
            "payables5y": 123
        }
    },
    "Neetu Yoshi": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 50
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 31
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel scrap price",
            "periods": [
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                31.4,
                34.3,
                31.8,
                31.5
            ],
            "index": [
                100,
                93,
                92,
                92
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
                1.0,
                17.0,
                23.0,
                31.0
            ],
            "ocf": [
                -2.0,
                8.0,
                12.0,
                4.0
            ],
            "fcf": [
                -9.0,
                -7.0,
                -3.0,
                -49.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹9cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "32%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                73,
                118
            ],
            "inventoryDays": [
                16,
                41
            ],
            "payableDays": [
                12,
                7
            ],
            "cycleDays": [
                76,
                152
            ],
            "absorbed5y": -42,
            "receivables5y": -31,
            "inventory5y": -5,
            "payables5y": 1
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const forgingValuationInputs: Record<string, ValuationInput> = {
    "AIA Engineering": {
        "netDebt": -4516,
        "ttmEbitda": 1258.0,
        "mcapAtWriting": 37058.0,
        "peAtWriting": 29.2
    },
    "Happy Forgings": {
        "netDebt": 40,
        "ttmEbitda": 510.0,
        "mcapAtWriting": 19796.0,
        "peAtWriting": 60.5
    },
    "Steelcast": {
        "netDebt": -96,
        "ttmEbitda": 119.0,
        "mcapAtWriting": 3643.0,
        "peAtWriting": 40.2
    },
    "MM Forgings": {
        "netDebt": 1010,
        "ttmEbitda": 292.0,
        "mcapAtWriting": 2961.0,
        "peAtWriting": 26.3
    },
    "Synergy Green": {
        "netDebt": 238,
        "ttmEbitda": 33.0,
        "mcapAtWriting": 1047.0,
        "peAtWriting": null
    },
    "Nelcast": {
        "netDebt": 172,
        "ttmEbitda": 98.0,
        "mcapAtWriting": 934.0,
        "peAtWriting": 22.7
    },
    "Neetu Yoshi": {
        "netDebt": -9,
        "ttmEbitda": 31.0,
        "mcapAtWriting": 859.0,
        "peAtWriting": 34.3
    }
};
