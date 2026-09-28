import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const healthProductsCharts: Record<string, ProfileCharts> = {
    "Poly Medicure": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 26
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 24
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
                27.1,
                24.9,
                26.5,
                25.4,
                27.0,
                27.4,
                26.9,
                27.0,
                26.3,
                25.9,
                22.5,
                20.6,
                23.8
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
                215.0,
                267.0,
                361.0,
                456.0,
                446.0
            ],
            "ocf": [
                123.0,
                191.0,
                266.0,
                233.0,
                246.0
            ],
            "fcf": [
                -33.0,
                -48.0,
                -11.0,
                -98.0,
                -62.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "54.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹489cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                82,
                103
            ],
            "inventoryDays": [
                218,
                323
            ],
            "payableDays": [
                115,
                91
            ],
            "cycleDays": [
                185,
                335
            ],
            "absorbed5y": -458,
            "receivables5y": -300,
            "inventory5y": -196,
            "payables5y": 38
        }
    },
    "Tarsons Products": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 29
                },
                {
                    "label": "Power and factory costs",
                    "share": 14
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 33
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
                34.0,
                38.3,
                37.0,
                39.1,
                26.2,
                29.3,
                36.7,
                39.7,
                31.2,
                32.5,
                34.7,
                33.5,
                28.1
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
                153.0,
                130.0,
                103.0,
                105.0,
                110.0
            ],
            "ocf": [
                83.0,
                76.0,
                105.0,
                110.0,
                112.0
            ],
            "fcf": [
                -49.0,
                -114.0,
                -79.0,
                -42.0,
                -14.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "86.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹269cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "81%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "33%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                79,
                85
            ],
            "inventoryDays": [
                478,
                387
            ],
            "payableDays": [
                75,
                48
            ],
            "cycleDays": [
                482,
                423
            ],
            "absorbed5y": -81,
            "receivables5y": -28,
            "inventory5y": -62,
            "payables5y": 5
        }
    },
    "Laxmi Denta": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 21
                },
                {
                    "label": "Power and factory costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 37
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Dental materials price",
            "periods": [
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
                21.8,
                23.3,
                15.8,
                16.1,
                16.4,
                18.2,
                15.3,
                10.6,
                18.9,
                18.7
            ],
            "index": [
                100,
                100,
                100,
                99,
                99,
                99,
                100,
                100,
                99,
                100,
                100
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
                7.0,
                9.0,
                24.0,
                43.0,
                44.0
            ],
            "ocf": [
                -2.0,
                14.0,
                8.0,
                44.0,
                -5.0
            ],
            "fcf": [
                -12.0,
                4.0,
                -7.0,
                28.0,
                -23.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "31.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹24cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "46%",
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
                54,
                60
            ],
            "inventoryDays": [
                272,
                156
            ],
            "payableDays": [
                245,
                68
            ],
            "cycleDays": [
                81,
                147
            ],
            "absorbed5y": -61,
            "receivables5y": -34,
            "inventory5y": 1,
            "payables5y": -13
        }
    },
    "Vasa Denticity": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 17
                },
                {
                    "label": "Operating profit",
                    "share": 4
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Dental materials price",
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
                8.8,
                9.4,
                14.3,
                8.6,
                10.8,
                8.8,
                9.0,
                5.3,
                8.3,
                2.6,
                0.3,
                6.2
            ],
            "index": [
                100,
                99,
                100,
                100,
                99,
                99,
                99,
                98,
                100,
                100,
                99,
                100,
                100
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
                6.0,
                10.0,
                19.0,
                23.0,
                11.0
            ],
            "ocf": [
                0.0,
                2.0,
                -11.0,
                -5.0,
                -27.0
            ],
            "fcf": [
                -1.0,
                0.0,
                -13.0,
                -23.0,
                -32.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "51.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹48cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-59%",
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
                6,
                15
            ],
            "inventoryDays": [
                63,
                150
            ],
            "payableDays": [
                32,
                26
            ],
            "cycleDays": [
                37,
                139
            ],
            "absorbed5y": -95,
            "receivables5y": -11,
            "inventory5y": -78,
            "payables5y": 14
        }
    },
    "OSEL Devices": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 2
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
            "input": "Circuit boards price",
            "periods": [
                "H1 FY24",
                "H2 FY24",
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                17.6,
                17.1,
                14.9,
                20.2,
                17.0,
                19.9
            ],
            "index": [
                100,
                97,
                98,
                99,
                98,
                97
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
                4.0,
                9.0,
                22.0,
                33.0,
                53.0
            ],
            "ocf": [
                3.0,
                -11.0,
                13.0,
                -69.0,
                -20.0
            ],
            "fcf": [
                2.76,
                -12.72,
                0.17999999999999972,
                -69.15,
                -33.01
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹45cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-69%",
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
                63,
                134
            ],
            "inventoryDays": [
                63,
                94
            ],
            "payableDays": [
                94,
                56
            ],
            "cycleDays": [
                33,
                172
            ],
            "absorbed5y": -189,
            "receivables5y": -110,
            "inventory5y": -53,
            "payables5y": 29
        }
    },
    "Prevest Denpro": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 23
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 36
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Dental materials price",
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
                37.0,
                34.1,
                32.8,
                36.2,
                33.7,
                35.7,
                34.4,
                35.8,
                35.2,
                35.9,
                33.9,
                37.5,
                35.4
            ],
            "index": [
                100,
                99,
                100,
                100,
                99,
                99,
                99,
                98,
                100,
                100,
                99,
                100,
                100
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
                15.0,
                20.0,
                20.0,
                22.0,
                26.0
            ],
            "ocf": [
                7.0,
                10.0,
                11.0,
                15.0,
                16.0
            ],
            "fcf": [
                2.1100000000000003,
                -3.5299999999999994,
                7.27,
                13.05,
                14.23
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹82cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "36%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                22,
                45
            ],
            "inventoryDays": [
                122,
                235
            ],
            "payableDays": [
                61,
                54
            ],
            "cycleDays": [
                83,
                227
            ],
            "absorbed5y": -18,
            "receivables5y": -5,
            "inventory5y": -9,
            "payables5y": -1
        }
    },
    "Anondita Medicare": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 37
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Natural rubber price",
            "periods": [
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                32.3,
                34.8,
                35.2,
                37.3
            ],
            "index": [
                100,
                93,
                96,
                95
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY25",
                "FY26"
            ],
            "ebitda": [
                26.0,
                51.0
            ],
            "ocf": [
                -7.0,
                11.0
            ],
            "fcf": [
                -27.0,
                -52.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "63.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "43.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹21cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "37%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                127,
                138
            ],
            "inventoryDays": [
                128,
                125
            ],
            "payableDays": [
                36,
                48
            ],
            "cycleDays": [
                218,
                214
            ],
            "absorbed5y": -70,
            "receivables5y": -36,
            "inventory5y": -10,
            "payables5y": -1
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const healthProductsValuationInputs: Record<string, ValuationInput> = {
    "Poly Medicure": {
        "netDebt": -489,
        "ttmEbitda": 461.0,
        "mcapAtWriting": 17532.0,
        "peAtWriting": 54.8
    },
    "Tarsons Products": {
        "netDebt": 269,
        "ttmEbitda": 112.0,
        "mcapAtWriting": 1787.0,
        "peAtWriting": 86.7
    },
    "Laxmi Denta": {
        "netDebt": -24,
        "ttmEbitda": 46.0,
        "mcapAtWriting": 1077.0,
        "peAtWriting": 31.0
    },
    "Vasa Denticity": {
        "netDebt": -48,
        "ttmEbitda": 13.0,
        "mcapAtWriting": 720.0,
        "peAtWriting": 59.5
    },
    "OSEL Devices": {
        "netDebt": 45,
        "ttmEbitda": 54.0,
        "mcapAtWriting": 712.0,
        "peAtWriting": 24.3
    },
    "Prevest Denpro": {
        "netDebt": -82,
        "ttmEbitda": 27.0,
        "mcapAtWriting": 456.0,
        "peAtWriting": 20.2
    },
    "Anondita Medicare": {
        "netDebt": 21,
        "ttmEbitda": 50.0,
        "mcapAtWriting": 2131.0,
        "peAtWriting": 63.7
    }
};
