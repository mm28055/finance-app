import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const pumpsCompEngCharts: Record<string, ProfileCharts> = {
    "Elgi Equipments": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 20
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 15
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
                12.3,
                17.7,
                15.7,
                14.4,
                14.2,
                16.3,
                14.0,
                15.1,
                14.0,
                14.5,
                14.4,
                15.5,
                14.6
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
                298.0,
                437.0,
                491.0,
                529.0,
                583.0
            ],
            "ocf": [
                69.0,
                166.0,
                285.0,
                391.0,
                454.0
            ],
            "fcf": [
                28.0,
                97.0,
                236.0,
                296.0,
                300.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "41.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "31.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹185cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "58%",
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
                68,
                67
            ],
            "inventoryDays": [
                130,
                134
            ],
            "payableDays": [
                86,
                87
            ],
            "cycleDays": [
                112,
                114
            ],
            "absorbed5y": -479,
            "receivables5y": -366,
            "inventory5y": -367,
            "payables5y": 171
        }
    },
    "Kirloskar Pneumatic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 50
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 21
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel forgings price",
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
                11.3,
                17.2,
                18.8,
                14.2,
                21.8,
                14.1,
                18.9,
                13.2,
                15.3,
                20.0,
                26.3,
                15.3
            ],
            "index": [
                100,
                94,
                94,
                90,
                96,
                90,
                89,
                90,
                92,
                86,
                84,
                92,
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
                141.0,
                168.0,
                205.0,
                294.0,
                363.0
            ],
            "ocf": [
                109.0,
                40.0,
                183.0,
                215.0,
                228.0
            ],
            "fcf": [
                17.0,
                -2.0,
                111.0,
                137.0,
                162.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹595cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                107,
                108
            ],
            "inventoryDays": [
                132,
                88
            ],
            "payableDays": [
                111,
                106
            ],
            "cycleDays": [
                128,
                90
            ],
            "absorbed5y": -153,
            "receivables5y": -230,
            "inventory5y": -96,
            "payables5y": 109
        }
    },
    "Kirloskar Brothers": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and factory costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 12
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
                12.2,
                10.4,
                12.8,
                15.6,
                10.9,
                13.7,
                14.5,
                14.8,
                11.4,
                10.5,
                12.7,
                12.9,
                10.5
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
                206.0,
                400.0,
                520.0,
                609.0,
                545.0
            ],
            "ocf": [
                114.0,
                329.0,
                370.0,
                386.0,
                334.0
            ],
            "fcf": [
                32.0,
                196.0,
                258.0,
                296.0,
                199.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹155cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                62,
                53
            ],
            "inventoryDays": [
                140,
                142
            ],
            "payableDays": [
                128,
                128
            ],
            "cycleDays": [
                73,
                68
            ],
            "absorbed5y": -377,
            "receivables5y": -339,
            "inventory5y": -269,
            "payables5y": 251
        }
    },
    "KSB": {
        "costSplit": {
            "year": "CY25",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
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
                    "share": 13
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
                14.4,
                12.4,
                13.4,
                11.2,
                14.1,
                14.3,
                13.5,
                11.4,
                13.6,
                13.1,
                16.6,
                8.5,
                11.9
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
                "CY21",
                "CY22",
                "CY23",
                "CY24",
                "CY25"
            ],
            "ebitda": [
                210.0,
                247.0,
                294.0,
                340.0,
                377.0
            ],
            "ocf": [
                62.0,
                38.0,
                142.0,
                187.0,
                93.0
            ],
            "fcf": [
                24.0,
                -69.0,
                49.0,
                86.0,
                -1.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "53.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹278cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "36%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY25",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "CY21",
            "toYear": "CY25",
            "debtorDays": [
                68,
                118
            ],
            "inventoryDays": [
                195,
                197
            ],
            "payableDays": [
                129,
                111
            ],
            "cycleDays": [
                134,
                204
            ],
            "absorbed5y": -615,
            "receivables5y": -579,
            "inventory5y": -425,
            "payables5y": 184
        }
    },
    "Kirloskar Oil": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 65
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                12.2,
                9.3,
                11.7,
                12.9,
                14.8,
                13.8,
                10.1,
                12.1,
                13.5,
                13.3,
                12.1,
                12.6,
                11.2
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
                269.0,
                427.0,
                565.0,
                590.0,
                735.0
            ],
            "ocf": [
                194.0,
                260.0,
                434.0,
                489.0,
                511.0
            ],
            "fcf": [
                113.0,
                139.0,
                158.0,
                245.0,
                194.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "67.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "41.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹422cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                44,
                51
            ],
            "inventoryDays": [
                48,
                60
            ],
            "payableDays": [
                81,
                76
            ],
            "cycleDays": [
                11,
                34
            ],
            "absorbed5y": -281,
            "receivables5y": -398,
            "inventory5y": -426,
            "payables5y": 413
        }
    },
    "Powerica": {
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
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                11.6,
                9.4,
                13.8,
                15.5,
                10.2,
                10.5,
                13.6
            ],
            "index": [
                100,
                102,
                107,
                109,
                116,
                130,
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
                186.0,
                347.0,
                362.0,
                336.0,
                376.0
            ],
            "ocf": [
                214.0,
                257.0,
                283.0,
                249.0,
                453.0
            ],
            "fcf": [
                133.0,
                195.0,
                30.0,
                -84.0,
                -123.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹389cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
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
                63,
                41
            ],
            "inventoryDays": [
                54,
                60
            ],
            "payableDays": [
                95,
                72
            ],
            "cycleDays": [
                21,
                29
            ],
            "absorbed5y": -30,
            "receivables5y": -210,
            "inventory5y": -231,
            "payables5y": 269
        }
    },
    "Greaves Cotton": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 67
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 7
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
                -2.5,
                6.3,
                5.3,
                3.5,
                4.3,
                3.3,
                5.3,
                5.6,
                7.6,
                6.4,
                7.1,
                6.8,
                5.8
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
                25.0,
                127.0,
                91.0,
                137.0,
                239.0
            ],
            "ocf": [
                -56.0,
                -135.0,
                -153.0,
                -23.0,
                33.0
            ],
            "fcf": [
                -122.0,
                -214.0,
                -312.0,
                -105.0,
                -63.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "46.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹170cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-54%",
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
                40,
                37
            ],
            "inventoryDays": [
                56,
                50
            ],
            "payableDays": [
                110,
                92
            ],
            "cycleDays": [
                -14,
                -6
            ],
            "absorbed5y": -717,
            "receivables5y": -144,
            "inventory5y": -82,
            "payables5y": 132
        }
    },
    "Shakti Pumps": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
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
                    "share": 15
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
                9.8,
                14.3,
                21.5,
                23.9,
                23.5,
                23.7,
                24.7,
                23.2,
                20.4,
                10.7,
                9.7,
                9.7
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
                110.0,
                67.0,
                225.0,
                603.0,
                422.0
            ],
            "ocf": [
                17.0,
                39.0,
                50.0,
                20.0,
                124.0
            ],
            "fcf": [
                -5.0,
                15.0,
                -10.0,
                -88.0,
                -56.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹179cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "18%",
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
                119,
                173
            ],
            "inventoryDays": [
                87,
                90
            ],
            "payableDays": [
                115,
                129
            ],
            "cycleDays": [
                91,
                134
            ],
            "absorbed5y": -867,
            "receivables5y": -1065,
            "inventory5y": -321,
            "payables5y": 491
        }
    },
    "Oswal Pumps": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 25
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
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
                19.6,
                26.9,
                32.6,
                31.1,
                27.1,
                27.4,
                23.7,
                25.3,
                23.1,
                15.6
            ],
            "index": [
                100,
                112,
                110,
                109,
                112,
                116,
                120,
                127,
                142,
                152
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
                39.0,
                58.0,
                153.0,
                420.0,
                514.0
            ],
            "ocf": [
                65.0,
                50.0,
                17.0,
                -151.0,
                -77.0
            ],
            "fcf": [
                30.0,
                25.0,
                -8.0,
                -200.0,
                -214.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "9.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹154cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-8%",
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
                38,
                199
            ],
            "inventoryDays": [
                108,
                64
            ],
            "payableDays": [
                78,
                46
            ],
            "cycleDays": [
                69,
                218
            ],
            "absorbed5y": -1054,
            "receivables5y": -1203,
            "inventory5y": -155,
            "payables5y": 302
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const pumpsCompEngValuationInputs: Record<string, ValuationInput> = {
    "Elgi Equipments": {
        "netDebt": -185,
        "ttmEbitda": 612.0,
        "mcapAtWriting": 19433.0,
        "peAtWriting": 41.9
    },
    "Kirloskar Pneumatic": {
        "netDebt": -595,
        "ttmEbitda": 371.0,
        "mcapAtWriting": 9290.0,
        "peAtWriting": 34.0
    },
    "Kirloskar Brothers": {
        "netDebt": -155,
        "ttmEbitda": 548.0,
        "mcapAtWriting": 14204.0,
        "peAtWriting": 35.1
    },
    "KSB": {
        "netDebt": -278,
        "ttmEbitda": 347.0,
        "mcapAtWriting": 13955.0,
        "peAtWriting": 53.2
    },
    "Kirloskar Oil": {
        "netDebt": -422,
        "ttmEbitda": 739.0,
        "mcapAtWriting": 31039.0,
        "peAtWriting": 67.8
    },
    "Powerica": {
        "netDebt": -389,
        "ttmEbitda": 397.0,
        "mcapAtWriting": 7250.0,
        "peAtWriting": 25.8
    },
    "Greaves Cotton": {
        "netDebt": -170,
        "ttmEbitda": 238.0,
        "mcapAtWriting": 4626.0,
        "peAtWriting": 46.4
    },
    "Shakti Pumps": {
        "netDebt": -179,
        "ttmEbitda": 361.0,
        "mcapAtWriting": 5815.0,
        "peAtWriting": 27.4
    },
    "Oswal Pumps": {
        "netDebt": -154,
        "ttmEbitda": 447.0,
        "mcapAtWriting": 3138.0,
        "peAtWriting": 9.29
    }
};
