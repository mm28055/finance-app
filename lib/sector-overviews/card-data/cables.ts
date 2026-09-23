import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const cablesCharts: Record<string, ProfileCharts> = {
    "RR Kabel Ltd.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 82
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
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
                7.1,
                7.5,
                6.9,
                6.6,
                5.3,
                4.8,
                6.2,
                8.7,
                6.9,
                8.1,
                8.0,
                8.8,
                8.9
            ],
            "index": [
                100,
                98,
                96,
                98,
                109,
                108,
                107,
                110,
                114,
                117,
                124,
                140,
                149
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
                304.0,
                323.0,
                462.0,
                487.0,
                786.0
            ],
            "ocf": [
                98.0,
                454.0,
                339.0,
                494.0,
                295.0
            ],
            "fcf": [
                30.0,
                346.0,
                149.0,
                127.0,
                4.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "45.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹9cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
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
                43,
                37
            ],
            "inventoryDays": [
                72,
                81
            ],
            "payableDays": [
                17,
                63
            ],
            "cycleDays": [
                98,
                56
            ],
            "absorbed5y": -410,
            "receivables5y": -526,
            "inventory5y": -1167,
            "payables5y": 1218
        }
    },
    "Finolex Cables": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 81
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
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
                12.1,
                12.3,
                11.0,
                11.6,
                10.3,
                8.1,
                11.7,
                10.7,
                9.7,
                10.5,
                9.9,
                9.2,
                12.1
            ],
            "index": [
                100,
                98,
                96,
                98,
                109,
                108,
                107,
                110,
                114,
                117,
                124,
                140,
                149
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
                429.0,
                509.0,
                588.0,
                543.0,
                620.0
            ],
            "ocf": [
                473.0,
                356.0,
                577.0,
                207.0,
                49.0
            ],
            "fcf": [
                406.0,
                325.0,
                577.0,
                -29.0,
                -105.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,344cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "62%",
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
                17,
                21
            ],
            "inventoryDays": [
                80,
                73
            ],
            "payableDays": [
                23,
                16
            ],
            "cycleDays": [
                74,
                78
            ],
            "absorbed5y": -369,
            "receivables5y": -216,
            "inventory5y": -269,
            "payables5y": 43
        }
    },
    "KSH International": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 90
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 1
                },
                {
                    "label": "Operating profit",
                    "share": 5
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
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
                5.5,
                7.8,
                6.9,
                7.2,
                6.5,
                6.0,
                5.5,
                6.4
            ],
            "index": [
                100,
                99,
                102,
                106,
                109,
                115,
                129,
                138
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
                51.0,
                51.0,
                72.0,
                123.0,
                193.0
            ],
            "ocf": [
                -44.0,
                62.0,
                -17.0,
                -9.0,
                -65.0
            ],
            "fcf": [
                -44.0,
                40.0,
                -62.0,
                -129.0,
                -228.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "54.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "32.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹237cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-15%",
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
                54,
                39
            ],
            "inventoryDays": [
                49,
                56
            ],
            "payableDays": [
                15,
                14
            ],
            "cycleDays": [
                88,
                80
            ],
            "absorbed5y": -519,
            "receivables5y": -217,
            "inventory5y": -384,
            "payables5y": 97
        }
    },
    "Laser Power & Infra": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aluminium price",
            "periods": [
                "Q1 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                11.5,
                12.8,
                12.6
            ],
            "index": [
                100,
                120,
                139
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
                125.0,
                104.0,
                156.0,
                250.0,
                301.0
            ],
            "ocf": [
                -56.0,
                140.0,
                171.0,
                60.0,
                -119.0
            ],
            "fcf": [
                -73.0,
                81.0,
                136.0,
                41.0,
                -172.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹711cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "21%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "13%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                232,
                216
            ],
            "inventoryDays": [
                124,
                124
            ],
            "payableDays": [
                159,
                173
            ],
            "cycleDays": [
                -97,
                168
            ],
            "absorbed5y": -736,
            "receivables5y": -901,
            "inventory5y": -338,
            "payables5y": 572
        }
    },
    "Dynamic Cables": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 80
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aluminium price",
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
                11.0,
                8.4,
                9.4,
                10.4,
                10.5,
                10.3,
                10.3,
                10.3,
                10.3,
                11.0,
                11.4,
                10.7,
                10.9
            ],
            "index": [
                100,
                98,
                99,
                100,
                109,
                109,
                114,
                117,
                114,
                118,
                125,
                137,
                159
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
                60.0,
                63.0,
                77.0,
                105.0,
                130.0
            ],
            "ocf": [
                64.0,
                27.0,
                1.0,
                56.0,
                62.0
            ],
            "fcf": [
                58.0,
                14.0,
                -20.0,
                31.0,
                5.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹15cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "48%",
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
                103,
                88
            ],
            "inventoryDays": [
                75,
                65
            ],
            "payableDays": [
                96,
                60
            ],
            "cycleDays": [
                82,
                93
            ],
            "absorbed5y": -150,
            "receivables5y": -164,
            "inventory5y": -89,
            "payables5y": 107
        }
    },
    "Advait Energy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 56
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 30
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aluminium price",
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
                14.8,
                18.4,
                16.4,
                18.3,
                13.3,
                19.6,
                15.3,
                9.8,
                11.9,
                10.8,
                11.4,
                12.7,
                14.0
            ],
            "index": [
                100,
                98,
                99,
                100,
                109,
                109,
                114,
                117,
                114,
                118,
                125,
                137,
                159
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
                10.0,
                17.0,
                36.0,
                52.0,
                84.0
            ],
            "ocf": [
                12.0,
                13.0,
                -9.0,
                46.0,
                -10.0
            ],
            "fcf": [
                -2.0,
                5.0,
                -19.0,
                32.0,
                -123.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "37.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹21cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "26%",
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
                135,
                76
            ],
            "inventoryDays": [
                50,
                54
            ],
            "payableDays": [
                211,
                192
            ],
            "cycleDays": [
                -25,
                -62
            ],
            "absorbed5y": -120,
            "receivables5y": -169,
            "inventory5y": -55,
            "payables5y": 204
        }
    },
    "Paramount Communications": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 75
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 19
                },
                {
                    "label": "Operating profit",
                    "share": 4
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
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
                8.3,
                8.5,
                8.4,
                8.4,
                8.7,
                8.7,
                6.3,
                3.3,
                1.4,
                3.3,
                5.2,
                6.6
            ],
            "index": [
                100,
                98,
                96,
                98,
                109,
                108,
                107,
                110,
                114,
                117,
                124,
                140,
                149
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
                48.0,
                89.0,
                123.0,
                66.0
            ],
            "ocf": [
                15.0,
                11.0,
                -101.0,
                104.0,
                -38.0
            ],
            "fcf": [
                12.0,
                2.0,
                -154.0,
                44.0,
                -91.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹90cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-3%",
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
                109,
                79
            ],
            "inventoryDays": [
                92,
                72
            ],
            "payableDays": [
                67,
                50
            ],
            "cycleDays": [
                134,
                101
            ],
            "absorbed5y": -388,
            "receivables5y": -250,
            "inventory5y": -184,
            "payables5y": 129
        }
    },
    "JD Cables": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 79
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
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aluminium price",
            "periods": [
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                14.0,
                13.3,
                15.7,
                11.5
            ],
            "index": [
                100,
                106,
                107,
                120
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
                1.0,
                1.0,
                7.0,
                34.0,
                48.0
            ],
            "ocf": [
                0.0,
                1.0,
                -13.0,
                -18.0,
                -74.0
            ],
            "fcf": [
                -0.01,
                1.0,
                -14.629999999999999,
                -25.259999999999998,
                -92.06
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹56cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-114%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "13%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                66,
                96
            ],
            "inventoryDays": [
                26,
                101
            ],
            "payableDays": [
                24,
                29
            ],
            "cycleDays": [
                69,
                168
            ],
            "absorbed5y": -175,
            "receivables5y": -87,
            "inventory5y": -77,
            "payables5y": 16
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const cablesValuationInputs: Record<string, ValuationInput> = {
    "RR Kabel Ltd.": {
        "netDebt": -9,
        "ttmEbitda": 925.0,
        "mcapAtWriting": 27949.0,
        "peAtWriting": 45.7
    },
    "Finolex Cables": {
        "netDebt": -4344,
        "ttmEbitda": 727.0,
        "mcapAtWriting": 22214.0,
        "peAtWriting": 27.7
    },
    "KSH International": {
        "netDebt": 237,
        "ttmEbitda": 226.0,
        "mcapAtWriting": 7113.0,
        "peAtWriting": 54.3
    },
    "Laser Power & Infra": {
        "netDebt": 711,
        "ttmEbitda": 301.0,
        "mcapAtWriting": 4055.0,
        "peAtWriting": 36.9
    },
    "Dynamic Cables": {
        "netDebt": 15,
        "ttmEbitda": 141.0,
        "mcapAtWriting": 2222.0,
        "peAtWriting": 24.4
    },
    "Advait Energy": {
        "netDebt": -21,
        "ttmEbitda": 95.0,
        "mcapAtWriting": 2170.0,
        "peAtWriting": 37.6
    },
    "Paramount Communications": {
        "netDebt": 90,
        "ttmEbitda": 86.0,
        "mcapAtWriting": 2042.0,
        "peAtWriting": 33.5
    },
    "JD Cables": {
        "netDebt": 56,
        "ttmEbitda": 47.0,
        "mcapAtWriting": 428.0,
        "peAtWriting": 13.5
    }
};
