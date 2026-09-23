import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const emsElectronicsCharts: Record<string, ProfileCharts> = {
    "Avalon Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 18
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
                6.8,
                6.5,
                7.9,
                7.8,
                2.0,
                10.9,
                12.5,
                12.0,
                9.3,
                10.2,
                11.5,
                11.9,
                12.0
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
                98.0,
                113.0,
                63.0,
                115.0,
                173.0
            ],
            "ocf": [
                16.0,
                -13.0,
                17.0,
                25.0,
                57.0
            ],
            "fcf": [
                -2.0,
                -40.0,
                -19.0,
                -21.0,
                3.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "124.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "82.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹142cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "18%",
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
                77,
                87
            ],
            "inventoryDays": [
                153,
                161
            ],
            "payableDays": [
                78,
                87
            ],
            "cycleDays": [
                152,
                160
            ],
            "absorbed5y": -427,
            "receivables5y": -168,
            "inventory5y": -301,
            "payables5y": 96
        }
    },
    "Cyient DLM": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 9
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
                8.2,
                9.0,
                10.5,
                7.8,
                8.2,
                6.3,
                13.3,
                9.0,
                10.0,
                9.2,
                11.7,
                10.4
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
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                88.0,
                111.0,
                137.0,
                127.0
            ],
            "ocf": [
                54.0,
                -71.0,
                -62.0,
                54.0
            ],
            "fcf": [
                46.0,
                -105.0,
                -112.0,
                9.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "89.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "52.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹46cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                71,
                89
            ],
            "inventoryDays": [
                240,
                314
            ],
            "payableDays": [
                161,
                133
            ],
            "cycleDays": [
                150,
                270
            ],
            "absorbed5y": -438,
            "receivables5y": -114,
            "inventory5y": -272,
            "payables5y": 41
        }
    },
    "Centum Electronics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 14
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
                13.3,
                13.1,
                12.5,
                10.1,
                9.8,
                12.0,
                10.7,
                15.7,
                14.1,
                12.1,
                10.5,
                13.1,
                11.2
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
                43.0,
                54.0,
                79.0,
                102.0,
                121.0
            ],
            "ocf": [
                68.0,
                21.0,
                84.0,
                -20.0,
                28.0
            ],
            "fcf": [
                58.44,
                11.07,
                61.45,
                -34.92,
                -11.5
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "88.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "61.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "45%",
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
                94,
                115
            ],
            "inventoryDays": [
                357,
                254
            ],
            "payableDays": [
                130,
                142
            ],
            "cycleDays": [
                320,
                227
            ],
            "absorbed5y": -184,
            "receivables5y": -243,
            "inventory5y": -310,
            "payables5y": 402
        }
    },
    "Vinyas Innovativ": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 80
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
                    "share": 12
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
                10.2,
                10.6,
                11.3,
                9.7,
                9.9,
                13.2
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
                12.0,
                21.0,
                33.0,
                41.0,
                61.0
            ],
            "ocf": [
                12.0,
                12.0,
                -29.0,
                9.0,
                -32.0
            ],
            "fcf": [
                11.03,
                11.54,
                -60.05,
                6.79,
                -62.89
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "65.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "35.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹113cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-17%",
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
                100,
                161
            ],
            "inventoryDays": [
                247,
                114
            ],
            "payableDays": [
                130,
                43
            ],
            "cycleDays": [
                217,
                232
            ],
            "absorbed5y": -181,
            "receivables5y": -200,
            "inventory5y": 21,
            "payables5y": 10
        }
    },
    "Aimtron": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 72
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
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
                    "share": 21
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
                25.6,
                24.0,
                25.9,
                18.8,
                26.0,
                20.4
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
                -1.0,
                22.0,
                24.0,
                32.0,
                55.0
            ],
            "ocf": [
                8.0,
                -8.0,
                7.0,
                -18.0,
                -2.0
            ],
            "fcf": [
                -13.989999999999998,
                -9.82,
                3.03,
                -30.96,
                -6.36
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "100.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "67.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹9cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-10%",
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
                77,
                167
            ],
            "inventoryDays": [
                341,
                159
            ],
            "payableDays": [
                224,
                85
            ],
            "cycleDays": [
                194,
                241
            ],
            "absorbed5y": -116,
            "receivables5y": -106,
            "inventory5y": -69,
            "payables5y": 39
        }
    },
    "Syrma SGS Tech.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 74
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                6.2,
                6.9,
                5.5,
                7.3,
                3.9,
                8.5,
                9.2,
                11.7,
                9.2,
                10.0,
                12.6,
                11.9,
                10.2
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
                129.0,
                192.0,
                203.0,
                323.0,
                546.0
            ],
            "ocf": [
                -13.0,
                -70.0,
                -109.0,
                176.0,
                290.0
            ],
            "fcf": [
                -103.0,
                -188.0,
                -447.0,
                -69.0,
                98.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "89.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "54.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹101cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "20%",
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
                78,
                139
            ],
            "inventoryDays": [
                119,
                108
            ],
            "payableDays": [
                98,
                199
            ],
            "cycleDays": [
                99,
                48
            ],
            "absorbed5y": -914,
            "receivables5y": -1514,
            "inventory5y": -769,
            "payables5y": 1757
        }
    },
    "Kaynes Technology": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
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
                    "share": 15
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
                13.5,
                13.6,
                13.8,
                14.9,
                13.3,
                14.3,
                14.2,
                17.1,
                16.8,
                16.3,
                14.8,
                15.6,
                15.6
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
                95.0,
                170.0,
                257.0,
                416.0,
                578.0
            ],
            "ocf": [
                21.0,
                -42.0,
                88.0,
                -82.0,
                -600.0
            ],
            "fcf": [
                -21.0,
                -100.0,
                -295.0,
                -1031.0,
                -1840.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "66.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "38.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹114cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-41%",
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
                102,
                154
            ],
            "inventoryDays": [
                167,
                169
            ],
            "payableDays": [
                121,
                131
            ],
            "cycleDays": [
                148,
                193
            ],
            "absorbed5y": -1956,
            "receivables5y": -1490,
            "inventory5y": -940,
            "payables5y": 1081
        }
    },
    "Sahasra Electronic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 65
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 9
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
            "input": "Circuit boards price",
            "periods": [
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                22.0,
                0.0,
                15.5,
                13.8
            ],
            "index": [
                100,
                102,
                100,
                99
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
                2.0,
                36.0,
                10.0,
                19.0
            ],
            "ocf": [
                null,
                5.0,
                0.0,
                -14.0
            ],
            "fcf": [
                null,
                0.9400000000000004,
                -17.5,
                -17.39
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "49.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "54.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹7cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "15%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                618,
                112
            ],
            "inventoryDays": [
                413,
                182
            ],
            "payableDays": [
                667,
                95
            ],
            "cycleDays": [
                365,
                199
            ],
            "absorbed5y": -68,
            "receivables5y": -21,
            "inventory5y": -32,
            "payables5y": 9
        }
    },
    "Amber Enterprises": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 82
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
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
                    "share": 7
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
                7.8,
                6.4,
                6.1,
                7.8,
                7.9,
                6.6,
                7.0,
                7.5,
                7.2,
                5.1,
                8.1,
                7.0,
                8.0
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
                278.0,
                422.0,
                491.0,
                736.0,
                865.0
            ],
            "ocf": [
                241.0,
                321.0,
                965.0,
                711.0,
                240.0
            ],
            "fcf": [
                -173.0,
                -341.0,
                553.0,
                136.0,
                -1055.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "121.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,236cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "89%",
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
                114,
                67
            ],
            "inventoryDays": [
                87,
                90
            ],
            "payableDays": [
                176,
                104
            ],
            "cycleDays": [
                25,
                53
            ],
            "absorbed5y": -234,
            "receivables5y": -871,
            "inventory5y": -1406,
            "payables5y": 1707
        }
    },
    "PG Electroplast": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 82
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 7
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
                9.7,
                8.3,
                7.9,
                10.8,
                9.9,
                8.3,
                8.8,
                11.1,
                8.0,
                4.6,
                8.3,
                6.9,
                7.3
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
                75.0,
                177.0,
                262.0,
                484.0,
                387.0
            ],
            "ocf": [
                -79.0,
                46.0,
                188.0,
                -77.0,
                70.0
            ],
            "fcf": [
                -236.0,
                -109.0,
                -39.0,
                -565.0,
                -715.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "73.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "36.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹208cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "11%",
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
                71,
                82
            ],
            "inventoryDays": [
                118,
                134
            ],
            "payableDays": [
                111,
                147
            ],
            "cycleDays": [
                78,
                69
            ],
            "absorbed5y": -1148,
            "receivables5y": -1045,
            "inventory5y": -1515,
            "payables5y": 1605
        }
    },
    "Virtuoso Optoelectro": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 85
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
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                7.8,
                9.7,
                11.2,
                11.1,
                8.5,
                8.5
            ],
            "index": [
                100,
                104,
                107,
                113,
                127,
                136
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
                34.0,
                51.0,
                55.0,
                81.0
            ],
            "ocf": [
                22.0,
                -10.0,
                14.0,
                91.0,
                3.0
            ],
            "fcf": [
                -7.0,
                -64.0,
                -47.0,
                10.0,
                -140.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "99.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹333cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "50%",
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
                16,
                43
            ],
            "inventoryDays": [
                134,
                112
            ],
            "payableDays": [
                64,
                86
            ],
            "cycleDays": [
                86,
                70
            ],
            "absorbed5y": -107,
            "receivables5y": -86,
            "inventory5y": -181,
            "payables5y": 156
        }
    },
    "IKIO Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                21.3,
                22.9,
                22.2,
                17.9,
                13.4,
                17.6,
                12.3,
                5.4,
                9.2,
                11.0,
                15.1,
                15.8,
                13.0
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
                77.0,
                78.0,
                93.0,
                60.0,
                78.0
            ],
            "ocf": [
                -15.0,
                57.0,
                -5.0,
                35.0,
                16.0
            ],
            "fcf": [
                -24.0,
                37.0,
                -89.0,
                -61.0,
                -66.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹12cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "23%",
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
                61,
                82
            ],
            "inventoryDays": [
                208,
                218
            ],
            "payableDays": [
                44,
                46
            ],
            "cycleDays": [
                226,
                253
            ],
            "absorbed5y": -226,
            "receivables5y": -65,
            "inventory5y": -139,
            "payables5y": 3
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const emsElectronicsValuationInputs: Record<string, ValuationInput> = {
    "Avalon Tech": {
        "netDebt": 142,
        "ttmEbitda": 201.0,
        "mcapAtWriting": 16525.0,
        "peAtWriting": 124.0
    },
    "Cyient DLM": {
        "netDebt": 46,
        "ttmEbitda": 141.0,
        "mcapAtWriting": 7382.0,
        "peAtWriting": 89.9
    },
    "Centum Electronics": {
        "netDebt": 3,
        "ttmEbitda": 118.0,
        "mcapAtWriting": 7204.0,
        "peAtWriting": 88.0
    },
    "Vinyas Innovativ": {
        "netDebt": 113,
        "ttmEbitda": 61.0,
        "mcapAtWriting": 2035.0,
        "peAtWriting": 65.9
    },
    "Aimtron": {
        "netDebt": -9,
        "ttmEbitda": 58.0,
        "mcapAtWriting": 3925.0,
        "peAtWriting": 100.0
    },
    "Syrma SGS Tech.": {
        "netDebt": 101,
        "ttmEbitda": 610.0,
        "mcapAtWriting": 33250.0,
        "peAtWriting": 89.5
    },
    "Kaynes Technology": {
        "netDebt": 114,
        "ttmEbitda": 609.0,
        "mcapAtWriting": 23192.0,
        "peAtWriting": 66.8
    },
    "Sahasra Electronic": {
        "netDebt": 7,
        "ttmEbitda": 18.0,
        "mcapAtWriting": 972.0,
        "peAtWriting": 49.4
    },
    "Amber Enterprises": {
        "netDebt": 2236,
        "ttmEbitda": 924.0,
        "mcapAtWriting": 24864.0,
        "peAtWriting": 121.0
    },
    "PG Electroplast": {
        "netDebt": 208,
        "ttmEbitda": 414.0,
        "mcapAtWriting": 15081.0,
        "peAtWriting": 73.3
    },
    "Virtuoso Optoelectro": {
        "netDebt": 333,
        "ttmEbitda": 94.0,
        "mcapAtWriting": 1747.0,
        "peAtWriting": 99.2
    },
    "IKIO Technologies": {
        "netDebt": 12,
        "ttmEbitda": 88.0,
        "mcapAtWriting": 1613.0,
        "peAtWriting": 34.7
    }
};
