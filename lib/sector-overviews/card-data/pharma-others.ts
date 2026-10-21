import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const pharmaOthersCharts: Record<string, ProfileCharts> = {
    "Sudeep Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 35
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 16
                },
                {
                    "label": "Operating profit",
                    "share": 35
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                67.0,
                90.0,
                183.0,
                192.0,
                223.0
            ],
            "ocf": [
                -3.0,
                48.0,
                66.0,
                49.0,
                70.0
            ],
            "fcf": [
                -77.0,
                1.0,
                14.0,
                -15.0,
                -48.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "74.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "58.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹35cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "30%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "35%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                114,
                129
            ],
            "inventoryDays": [
                104,
                356
            ],
            "payableDays": [
                76,
                113
            ],
            "cycleDays": [
                142,
                372
            ],
            "absorbed5y": -391,
            "receivables5y": -173,
            "inventory5y": -191,
            "payables5y": 58
        }
    },
    "Sequent Scientific": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 46
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
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
                -2.4,
                4.3,
                6.7,
                8.9,
                10.8,
                10.6,
                12.9,
                11.4,
                15.0,
                20.4,
                20.5,
                20.0,
                18.8
            ],
            "index": [
                100,
                101,
                104,
                104,
                98,
                94,
                91,
                93,
                92,
                88,
                87,
                94,
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
                109.0,
                12.0,
                61.0,
                387.0,
                653.0
            ],
            "ocf": [
                31.0,
                17.0,
                31.0,
                345.0,
                323.0
            ],
            "fcf": [
                -1.0,
                -69.0,
                0.0,
                237.0,
                188.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹220cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "19%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                85,
                112
            ],
            "inventoryDays": [
                160,
                188
            ],
            "payableDays": [
                119,
                140
            ],
            "cycleDays": [
                126,
                160
            ],
            "absorbed5y": -590,
            "receivables5y": -567,
            "inventory5y": -206,
            "payables5y": 179
        }
    },
    "Jeena Sikho Lifecare": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 11
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 24
                },
                {
                    "label": "Operating profit",
                    "share": 44
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                18.0,
                46.0,
                141.0,
                351.0
            ],
            "ocf": [
                16.0,
                15.0,
                84.0,
                254.0
            ],
            "fcf": [
                -6.0,
                -22.0,
                42.0,
                220.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹92cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "44%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                23,
                32
            ],
            "inventoryDays": [
                149,
                81
            ],
            "payableDays": [
                109,
                92
            ],
            "cycleDays": [
                62,
                20
            ],
            "absorbed5y": -84,
            "receivables5y": -62,
            "inventory5y": -8,
            "payables5y": 16
        }
    },
    "Zota Health Care": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
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
                    "share": 3
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                7.0,
                8.0,
                -6.0,
                19.0
            ],
            "ocf": [
                13.0,
                -2.0,
                -6.0,
                -50.0,
                -82.0
            ],
            "fcf": [
                10.0,
                -14.0,
                -23.0,
                -96.0,
                -208.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "1575.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹90cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-295%",
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
                102,
                50
            ],
            "inventoryDays": [
                121,
                324
            ],
            "payableDays": [
                78,
                176
            ],
            "cycleDays": [
                145,
                198
            ],
            "absorbed5y": -145,
            "receivables5y": -90,
            "inventory5y": -165,
            "payables5y": 136
        }
    },
    "Advanced Enzyme": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 26
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
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
                    "share": 31
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                203.0,
                158.0,
                206.0,
                196.0,
                230.0
            ],
            "ocf": [
                122.0,
                140.0,
                141.0,
                142.0,
                157.0
            ],
            "fcf": [
                94.0,
                102.0,
                94.0,
                107.0,
                105.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹668cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "31%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                61,
                71
            ],
            "inventoryDays": [
                402,
                335
            ],
            "payableDays": [
                60,
                76
            ],
            "cycleDays": [
                404,
                331
            ],
            "absorbed5y": -80,
            "receivables5y": -54,
            "inventory5y": -73,
            "payables5y": 27
        }
    },
    "Hester Biosciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 25
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 21
                },
                {
                    "label": "Operating profit",
                    "share": 26
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                51.0,
                54.0,
                62.0,
                87.0
            ],
            "ocf": [
                9.0,
                24.0,
                48.0,
                65.0,
                64.0
            ],
            "fcf": [
                -86.71,
                -53.760000000000005,
                23.6,
                44.41,
                46.17
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹188cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "26%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                86,
                105
            ],
            "inventoryDays": [
                424,
                323
            ],
            "payableDays": [
                101,
                110
            ],
            "cycleDays": [
                409,
                318
            ],
            "absorbed5y": -77,
            "receivables5y": -61,
            "inventory5y": -12,
            "payables5y": -1
        }
    },
    "Accent Microcell": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                13.0,
                19.0,
                39.0,
                42.0,
                57.0
            ],
            "ocf": [
                15.0,
                8.0,
                11.0,
                25.0,
                19.0
            ],
            "fcf": [
                11.0,
                4.0,
                -2.0,
                -12.0,
                -69.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹19cr net cash",
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
                38,
                95
            ],
            "inventoryDays": [
                128,
                55
            ],
            "payableDays": [
                97,
                33
            ],
            "cycleDays": [
                68,
                117
            ],
            "absorbed5y": -73,
            "receivables5y": -65,
            "inventory5y": -13,
            "payables5y": 1
        }
    },
    "Q-Line Biotech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 39
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 20
                },
                {
                    "label": "Operating profit",
                    "share": 29
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                34.0,
                38.0,
                75.0,
                98.0
            ],
            "ocf": [
                25.0,
                -24.0,
                -1.0,
                16.0
            ],
            "fcf": [
                -4.609999999999999,
                -72.9,
                -57.26,
                -19.909999999999997
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹149cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "29%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                66,
                134
            ],
            "inventoryDays": [
                180,
                258
            ],
            "payableDays": [
                164,
                142
            ],
            "cycleDays": [
                82,
                251
            ],
            "absorbed5y": -183,
            "receivables5y": -84,
            "inventory5y": -60,
            "payables5y": 17
        }
    },
    "Sigachi Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                53.0,
                59.0,
                77.0,
                100.0,
                54.0
            ],
            "ocf": [
                6.0,
                29.0,
                13.0,
                27.0,
                -43.0
            ],
            "fcf": [
                -18.0,
                -72.0,
                -72.0,
                -16.0,
                -88.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "53.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹136cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "9%",
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
                88,
                171
            ],
            "inventoryDays": [
                94,
                108
            ],
            "payableDays": [
                33,
                87
            ],
            "cycleDays": [
                149,
                193
            ],
            "absorbed5y": -152,
            "receivables5y": -184,
            "inventory5y": -32,
            "payables5y": 48
        }
    },
    "Hexagon Nutrition": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 53
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY21",
                "FY22",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                34.0,
                36.0,
                25.0,
                41.0,
                53.0
            ],
            "ocf": [
                29.0,
                11.0,
                23.0,
                38.0,
                6.0
            ],
            "fcf": [
                21.67,
                -5.57,
                8.01,
                28.810000000000002,
                -1.3899999999999997
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹22cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY21",
            "toYear": "FY26",
            "debtorDays": [
                70,
                79
            ],
            "inventoryDays": [
                192,
                153
            ],
            "payableDays": [
                114,
                53
            ],
            "cycleDays": [
                148,
                179
            ],
            "absorbed5y": -79,
            "receivables5y": -41,
            "inventory5y": -25,
            "payables5y": -8
        }
    },
    "KRM Ayurveda": {
        "stats": [
            {
                "label": "P/E",
                "value": "20.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.1x",
                "note": "Market value minus investments (no debt), ÷ operating profit over the last year."
            },
            {
                "label": "Net cash",
                "value": "₹38cr",
                "note": "No borrowings; ₹38cr of investments at March 2026. Cash balance not shown separately."
            },
            {
                "label": "Operating margin FY26",
                "value": "30%"
            },
            {
                "label": "Bed occupancy",
                "value": "69%",
                "note": "About 223 beds, FY26 (company call); older hospitals above 90%."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                32,
                82
            ],
            "inventoryDays": [
                13,
                225
            ],
            "payableDays": [
                100,
                80
            ],
            "cycleDays": [
                -55,
                227
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                11,
                8,
                19,
                30
            ],
            "ocf": [
                4,
                -1,
                3,
                1
            ],
            "fcf": [
                -20,
                -1,
                -1,
                0
            ],
            "note": "Only four years are filed."
        }
    },
    "Amanta Healthcare": {
        "stats": [
            {
                "label": "P/E",
                "value": "40.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹151cr",
                "note": "Borrowings minus cash and fixed deposits, March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            },
            {
                "label": "Capacity use",
                "value": "96%",
                "note": "Across LVP, SVP and SteriPort lines, FY26 (annual report)."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 34
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs (incl. power)",
                    "share": 30
                },
                {
                    "label": "Operating profit",
                    "share": 21
                }
            ],
            "note": "From the FY26 P&L in the Q1 FY27 investor presentation; materials include bought-in goods and changes in stock."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                73,
                55
            ],
            "inventoryDays": [
                338,
                530
            ],
            "payableDays": [
                185,
                230
            ],
            "cycleDays": [
                226,
                354
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
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
                52,
                53,
                58,
                60,
                60
            ],
            "ocf": [
                62,
                43,
                58,
                47,
                48
            ],
            "fcf": [
                52,
                36,
                46,
                26,
                -32
            ],
            "note": "FY26 free cash is negative because of the new SteriPort, SVP and solar capex."
        }
    },
    "Influx Healthtech": {
        "stats": [
            {
                "label": "P/E",
                "value": "32.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.8x",
                "note": "Market value minus net cash, ÷ operating profit over the last two half-years."
            },
            {
                "label": "Net cash",
                "value": "₹25cr",
                "note": "No borrowings; cash as stated by the company for March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "20%"
            },
            {
                "label": "Top 10 clients",
                "value": "49%",
                "note": "Share of revenue per the investor presentation, as an analyst quoted it on the call; the MD put his top 10–20 clients at 30–40%."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 59
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "FY26 P&L, annual report. Materials include changes in stock."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                64,
                84
            ],
            "inventoryDays": [
                14,
                98
            ],
            "payableDays": [
                88,
                118
            ],
            "cycleDays": [
                -10,
                64
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
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
                6,
                11,
                17,
                21,
                30
            ],
            "ocf": [
                4,
                7,
                9,
                7,
                4
            ],
            "fcf": [
                1,
                2,
                1,
                -1,
                -21
            ]
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const pharmaOthersValuationInputs: Record<string, ValuationInput> = {
    "Sudeep Pharma": {
        "netDebt": 35,
        "ttmEbitda": 233.0,
        "mcapAtWriting": 13530.0,
        "peAtWriting": 74.1
    },
    "Sequent Scientific": {
        "netDebt": 220,
        "ttmEbitda": 711.0,
        "mcapAtWriting": 11257.0,
        "peAtWriting": 50.8
    },
    "Jeena Sikho Lifecare": {
        "netDebt": -92,
        "ttmEbitda": 363.0,
        "mcapAtWriting": 6518.0,
        "peAtWriting": 27.6
    },
    "Zota Health Care": {
        "lossMaking": true,
        "netDebt": -90,
        "ttmEbitda": 3.0,
        "mcapAtWriting": 4816.0,
        "peAtWriting": null
    },
    "Advanced Enzyme": {
        "netDebt": -668,
        "ttmEbitda": 224.0,
        "mcapAtWriting": 3323.0,
        "peAtWriting": 21.1
    },
    "Hester Biosciences": {
        "netDebt": 188,
        "ttmEbitda": 87.0,
        "mcapAtWriting": 1904.0,
        "peAtWriting": 35.8
    },
    "Accent Microcell": {
        "netDebt": -19,
        "ttmEbitda": 57.0,
        "mcapAtWriting": 1608.0,
        "peAtWriting": 36.7
    },
    "Q-Line Biotech": {
        "netDebt": 149,
        "ttmEbitda": 98.0,
        "mcapAtWriting": 1632.0,
        "peAtWriting": 28.9
    },
    "Sigachi Industries": {
        "netDebt": 136,
        "ttmEbitda": 46.0,
        "mcapAtWriting": 1199.0,
        "peAtWriting": 53.3
    },
    "Hexagon Nutrition": {
        "netDebt": -22,
        "ttmEbitda": 52.1,
        "mcapAtWriting": 803.0,
        "peAtWriting": 21.6
    },
    "KRM Ayurveda": {
        "netDebt": -38,
        "ttmEbitda": 36,
        "mcapAtWriting": 510,
        "peAtWriting": 20.3
    },
    "Amanta Healthcare": {
        "netDebt": 151,
        "ttmEbitda": 59.5,
        "mcapAtWriting": 624,
        "peAtWriting": 40.7
    },
    "Influx Healthtech": {
        "netDebt": -25,
        "ttmEbitda": 29.9,
        "mcapAtWriting": 616,
        "peAtWriting": 32.2
    }
};
