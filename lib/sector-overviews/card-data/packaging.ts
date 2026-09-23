import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const packagingCharts: Record<string, ProfileCharts> = {
    "EPL": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 20
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                17.5,
                18.1,
                18.8,
                18.6,
                18.5,
                20.2,
                19.9,
                20.6,
                20.5,
                20.9,
                20.0,
                19.7,
                18.8
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
                569.0,
                575.0,
                715.0,
                837.0,
                965.0
            ],
            "ocf": [
                312.0,
                602.0,
                586.0,
                795.0,
                723.0
            ],
            "fcf": [
                36.0,
                215.0,
                211.0,
                432.0,
                241.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹758cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "82%",
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
                68,
                67
            ],
            "inventoryDays": [
                143,
                177
            ],
            "payableDays": [
                109,
                147
            ],
            "cycleDays": [
                102,
                97
            ],
            "absorbed5y": -548,
            "receivables5y": -305,
            "inventory5y": -556,
            "payables5y": 312
        }
    },
    "AGI Greenpac": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 29
                },
                {
                    "label": "Power and factory costs",
                    "share": 34
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
                    "share": 22
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Soda ash price",
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
                23.7,
                21.8,
                24.2,
                23.5,
                24.0,
                25.7,
                25.7,
                21.8,
                20.6,
                24.9,
                23.7,
                20.6,
                22.3
            ],
            "index": [
                100,
                88,
                86,
                80,
                79,
                79,
                80,
                80,
                79,
                78,
                76,
                76,
                80
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
                265.0,
                462.0,
                561.0,
                614.0,
                595.0
            ],
            "ocf": [
                181.0,
                523.0,
                588.0,
                429.0,
                572.0
            ],
            "fcf": [
                -286.0,
                242.0,
                316.0,
                175.0,
                175.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹157cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "92%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                78,
                54
            ],
            "inventoryDays": [
                279,
                216
            ],
            "payableDays": [
                201,
                81
            ],
            "cycleDays": [
                156,
                189
            ],
            "absorbed5y": -22,
            "receivables5y": -51,
            "inventory5y": -321,
            "payables5y": 345
        }
    },
    "TCPL Packaging": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 58
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Paperboard price",
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
                16.4,
                16.0,
                15.1,
                17.5,
                17.5,
                16.6,
                14.8,
                17.1,
                17.2,
                15.0,
                17.2,
                15.2,
                17.4
            ],
            "index": [
                100,
                90,
                89,
                89,
                88,
                89,
                88,
                89,
                90,
                93,
                93,
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
                155.0,
                236.0,
                252.0,
                294.0,
                292.0
            ],
            "ocf": [
                97.0,
                109.0,
                234.0,
                133.0,
                271.0
            ],
            "fcf": [
                -92.0,
                9.0,
                88.0,
                -26.0,
                117.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹614cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
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
                77,
                93
            ],
            "inventoryDays": [
                102,
                85
            ],
            "payableDays": [
                93,
                80
            ],
            "cycleDays": [
                86,
                98
            ],
            "absorbed5y": -224,
            "receivables5y": -242,
            "inventory5y": -98,
            "payables5y": 87
        }
    },
    "Knack Packaging": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 58
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Polyethylene (HDPE) price",
            "periods": [
                "Q1 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                19.7,
                15.2,
                20.6
            ],
            "index": [
                100,
                113,
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
                52.0,
                57.0,
                95.0,
                130.0,
                146.0
            ],
            "ocf": [
                21.0,
                26.0,
                33.0,
                92.0,
                null
            ],
            "fcf": [
                7.0,
                -11.0,
                -37.0,
                34.0,
                null
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "—",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
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
                null,
                null
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
                null,
                null
            ],
            "absorbed5y": -146,
            "receivables5y": -100,
            "inventory5y": -50,
            "payables5y": 8
        }
    },
    "Cosmo First": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 65
                },
                {
                    "label": "Power and factory costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 10
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
                5.3,
                9.2,
                6.7,
                6.9,
                9.9,
                11.5,
                9.0,
                9.4,
                11.5,
                11.2,
                7.6,
                11.9,
                11.7
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
                572.0,
                383.0,
                183.0,
                288.0,
                384.0
            ],
            "ocf": [
                481.0,
                465.0,
                245.0,
                166.0,
                397.0
            ],
            "fcf": [
                198.0,
                85.0,
                -53.0,
                -336.0,
                -15.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,621cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "97%",
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
                26,
                40
            ],
            "inventoryDays": [
                108,
                110
            ],
            "payableDays": [
                71,
                140
            ],
            "cycleDays": [
                63,
                10
            ],
            "absorbed5y": 162,
            "receivables5y": -214,
            "inventory5y": -328,
            "payables5y": 731
        }
    },
    "Mold-Tek Pack.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
                },
                {
                    "label": "Power and factory costs",
                    "share": 23
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                18.8,
                18.8,
                18.2,
                20.3,
                18.3,
                17.8,
                17.8,
                18.7,
                19.5,
                18.6,
                19.2,
                20.2,
                18.7
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
                121.0,
                136.0,
                133.0,
                142.0,
                173.0
            ],
            "ocf": [
                3.0,
                152.0,
                79.0,
                110.0,
                125.0
            ],
            "fcf": [
                -47.0,
                7.0,
                -62.0,
                -14.0,
                -14.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹214cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                83,
                72
            ],
            "inventoryDays": [
                108,
                148
            ],
            "payableDays": [
                36,
                77
            ],
            "cycleDays": [
                155,
                144
            ],
            "absorbed5y": -146,
            "receivables5y": -88,
            "inventory5y": -85,
            "payables5y": 47
        }
    },
    "Huhtamaki India": {
        "costSplit": {
            "year": "CY25",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
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
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 7
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
                6.4,
                6.9,
                9.6,
                6.7,
                5.0,
                2.8,
                4.2,
                6.4,
                7.0,
                8.8,
                8.7,
                6.5,
                10.0
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
                "CY21",
                "CY22",
                "CY23",
                "CY24",
                "CY25"
            ],
            "ebitda": [
                110.0,
                158.0,
                195.0,
                118.0,
                192.0
            ],
            "ocf": [
                -28.0,
                133.0,
                274.0,
                142.0,
                238.0
            ],
            "fcf": [
                -107.0,
                37.0,
                179.0,
                76.0,
                183.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹349cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "98%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY25",
                "value": "8%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "CY21",
            "toYear": "CY25",
            "debtorDays": [
                88,
                82
            ],
            "inventoryDays": [
                68,
                46
            ],
            "payableDays": [
                112,
                102
            ],
            "cycleDays": [
                43,
                26
            ],
            "absorbed5y": 5,
            "receivables5y": -21,
            "inventory5y": -3,
            "payables5y": 42
        }
    },
    "Ester Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 23
                },
                {
                    "label": "Operating profit",
                    "share": 7
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "PTA (polyester raw material) price",
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
                0.0,
                -3.8,
                -7.5,
                2.2,
                3.8,
                12.1,
                17.3,
                11.3,
                5.9,
                4.0,
                4.7,
                12.2,
                11.3
            ],
            "index": [
                100,
                103,
                102,
                98,
                100,
                97,
                85,
                89,
                84,
                89,
                83,
                97,
                118
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
                171.0,
                93.0,
                -23.0,
                147.0,
                93.0
            ],
            "ocf": [
                62.0,
                58.0,
                44.0,
                112.0,
                89.0
            ],
            "fcf": [
                -352.0,
                -199.0,
                -29.0,
                81.0,
                28.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹624cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "76%",
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
                64,
                49
            ],
            "inventoryDays": [
                110,
                86
            ],
            "payableDays": [
                34,
                27
            ],
            "cycleDays": [
                139,
                108
            ],
            "absorbed5y": -177,
            "receivables5y": -91,
            "inventory5y": -111,
            "payables5y": 55
        }
    },
    "Kanpur Plastipack": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 9
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
                7.0,
                6.7,
                -3.2,
                5.2,
                2.3,
                6.6,
                9.3,
                10.1,
                7.2,
                9.1,
                7.8,
                11.1,
                8.3
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
                49.0,
                23.0,
                20.0,
                43.0,
                65.0
            ],
            "ocf": [
                29.0,
                69.0,
                -5.0,
                37.0,
                51.0
            ],
            "fcf": [
                -11.0,
                27.0,
                -47.0,
                30.0,
                24.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹101cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "90%",
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
                36,
                48
            ],
            "inventoryDays": [
                113,
                86
            ],
            "payableDays": [
                15,
                18
            ],
            "cycleDays": [
                134,
                116
            ],
            "absorbed5y": -44,
            "receivables5y": -41,
            "inventory5y": -5,
            "payables5y": 4
        }
    },
    "Pyramid Technoplast": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 8
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
                8.6,
                8.3,
                7.0,
                9.0,
                8.2,
                6.8,
                7.2,
                6.4,
                7.9,
                7.5,
                6.8,
                10.3,
                9.0
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
                42.0,
                50.0,
                44.0,
                43.0,
                56.0
            ],
            "ocf": [
                -6.0,
                39.0,
                -4.0,
                35.0,
                -41.0
            ],
            "fcf": [
                -11.0,
                17.0,
                -48.0,
                -34.0,
                -117.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹178cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "10%",
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
                68,
                77
            ],
            "inventoryDays": [
                46,
                79
            ],
            "payableDays": [
                39,
                31
            ],
            "cycleDays": [
                76,
                124
            ],
            "absorbed5y": -179,
            "receivables5y": -79,
            "inventory5y": -85,
            "payables5y": 1
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const packagingValuationInputs: Record<string, ValuationInput> = {
    "EPL": {
        "netDebt": 758,
        "ttmEbitda": 999.0,
        "mcapAtWriting": 7595.0,
        "peAtWriting": 18.5
    },
    "AGI Greenpac": {
        "netDebt": 157,
        "ttmEbitda": 628.0,
        "mcapAtWriting": 5360.0,
        "peAtWriting": 14.6
    },
    "TCPL Packaging": {
        "netDebt": 614,
        "ttmEbitda": 306.0,
        "mcapAtWriting": 3650.0,
        "peAtWriting": 29.3
    },
    "Knack Packaging": {
        "netDebt": null,
        "ttmEbitda": 146.0,
        "mcapAtWriting": 2264.0,
        "peAtWriting": 22.3
    },
    "Cosmo First": {
        "netDebt": 1621,
        "ttmEbitda": 428.0,
        "mcapAtWriting": 2284.0,
        "peAtWriting": 13.3
    },
    "Mold-Tek Pack.": {
        "netDebt": 214,
        "ttmEbitda": 181.0,
        "mcapAtWriting": 2243.0,
        "peAtWriting": 29.5
    },
    "Huhtamaki India": {
        "netDebt": -349,
        "ttmEbitda": 225.0,
        "mcapAtWriting": 1887.0,
        "peAtWriting": 13.8
    },
    "Ester Industries": {
        "netDebt": 624,
        "ttmEbitda": 122.0,
        "mcapAtWriting": 919.0,
        "peAtWriting": null
    },
    "Kanpur Plastipack": {
        "netDebt": 101,
        "ttmEbitda": 67.0,
        "mcapAtWriting": 633.0,
        "peAtWriting": 14.0
    },
    "Pyramid Technoplast": {
        "netDebt": 178,
        "ttmEbitda": 63.0,
        "mcapAtWriting": 582.0,
        "peAtWriting": 18.6
    }
};
