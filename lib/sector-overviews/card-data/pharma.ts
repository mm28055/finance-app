import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const pharmaCharts: Record<string, ProfileCharts> = {
    "Emcure Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 17
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
                19.0,
                19.8,
                17.6,
                17.6,
                18.5,
                19.0,
                18.1,
                19.0,
                19.8,
                20.9,
                20.9,
                19.4,
                20.6
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
                1330.0,
                1182.0,
                1230.0,
                1469.0,
                1746.0
            ],
            "ocf": [
                768.0,
                747.0,
                1097.0,
                852.0,
                944.0
            ],
            "fcf": [
                346.0,
                344.0,
                790.0,
                445.0,
                396.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,373cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                82,
                102
            ],
            "inventoryDays": [
                237,
                239
            ],
            "payableDays": [
                184,
                180
            ],
            "cycleDays": [
                135,
                161
            ],
            "absorbed5y": -1487,
            "receivables5y": -1233,
            "inventory5y": -1059,
            "payables5y": 878
        }
    },
    "Corona Remedies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 19
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 29
                },
                {
                    "label": "Other costs",
                    "share": 31
                },
                {
                    "label": "Operating profit",
                    "share": 21
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
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
                21.3,
                23.2,
                18.4,
                20.2,
                21.6,
                24.3,
                17.6,
                22.0
            ],
            "index": [
                100,
                97,
                99,
                98,
                94,
                93,
                101,
                114
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
                18.0,
                128.0,
                156.0,
                241.0,
                294.0
            ],
            "ocf": [
                98.0,
                103.0,
                157.0,
                190.0,
                229.0
            ],
            "fcf": [
                64.0,
                8.0,
                -129.0,
                98.0,
                55.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "62.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "42.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹121cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "93%",
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
                44,
                38
            ],
            "inventoryDays": [
                184,
                175
            ],
            "payableDays": [
                211,
                206
            ],
            "cycleDays": [
                17,
                7
            ],
            "absorbed5y": 61,
            "receivables5y": 63,
            "inventory5y": -96,
            "payables5y": 76
        }
    },
    "RPG Life Sciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 36
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
                    "share": 16
                },
                {
                    "label": "Operating profit",
                    "share": 21
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
                21.6,
                24.0,
                24.7,
                16.5,
                23.6,
                26.7,
                28.3,
                17.5,
                20.7,
                21.4,
                22.2,
                18.6,
                22.4
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
                87.0,
                104.0,
                129.0,
                161.0,
                148.0
            ],
            "ocf": [
                65.0,
                91.0,
                94.0,
                78.0,
                56.0
            ],
            "fcf": [
                41.0,
                58.0,
                25.0,
                42.0,
                -9.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹257cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                27,
                60
            ],
            "inventoryDays": [
                214,
                179
            ],
            "payableDays": [
                117,
                141
            ],
            "cycleDays": [
                124,
                99
            ],
            "absorbed5y": -68,
            "receivables5y": -60,
            "inventory5y": -68,
            "payables5y": 51
        }
    },
    "Jagsonpal Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 36
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 25
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                15.0,
                13.8,
                6.4,
                7.0,
                16.4,
                21.3,
                21.6,
                15.3,
                18.4,
                21.6,
                21.9,
                17.2,
                20.7
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
                26.0,
                34.0,
                23.0,
                51.0,
                58.0
            ],
            "ocf": [
                7.0,
                47.0,
                35.0,
                55.0,
                47.0
            ],
            "fcf": [
                5.95,
                46.68,
                34.75,
                54.65,
                46.85
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "31.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹98cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "99%",
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
                26,
                22
            ],
            "inventoryDays": [
                122,
                51
            ],
            "payableDays": [
                76,
                40
            ],
            "cycleDays": [
                72,
                33
            ],
            "absorbed5y": 8,
            "receivables5y": -6,
            "inventory5y": 15,
            "payables5y": -8
        }
    },
    "Eris Lifesciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 25
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
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 36
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
                36.4,
                35.8,
                36.2,
                26.9,
                34.7,
                35.8,
                34.4,
                35.7,
                35.8,
                36.4,
                34.9,
                35.9,
                33.9
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
                489.0,
                539.0,
                677.0,
                1018.0,
                1120.0
            ],
            "ocf": [
                378.0,
                292.0,
                486.0,
                1065.0,
                538.0
            ],
            "fcf": [
                257.0,
                -549.0,
                357.0,
                910.0,
                241.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,292cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
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
                44,
                79
            ],
            "inventoryDays": [
                166,
                200
            ],
            "payableDays": [
                166,
                151
            ],
            "cycleDays": [
                44,
                129
            ],
            "absorbed5y": -637,
            "receivables5y": -413,
            "inventory5y": -230,
            "payables5y": 161
        }
    },
    "Sanofi India": {
        "costSplit": {
            "year": "CY25",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 27
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
                23.7,
                23.2,
                21.3,
                26.8,
                25.0,
                22.9,
                22.9,
                32.1,
                23.4,
                28.2,
                21.4,
                30.3,
                26.3
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
                "CY21",
                "CY22",
                "CY23",
                "CY24",
                "CY25"
            ],
            "ebitda": [
                762.0,
                704.0,
                804.0,
                491.0,
                491.0
            ],
            "ocf": [
                559.0,
                399.0,
                231.0,
                462.0,
                438.0
            ],
            "fcf": [
                536.0,
                376.8,
                196.7,
                425.6,
                412.3
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹257cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "64%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin CY25",
                "value": "27%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "CY21",
            "toYear": "CY25",
            "debtorDays": [
                18,
                35
            ],
            "inventoryDays": [
                110,
                127
            ],
            "payableDays": [
                105,
                79
            ],
            "cycleDays": [
                22,
                83
            ],
            "absorbed5y": -284,
            "receivables5y": -51,
            "inventory5y": -64,
            "payables5y": -77
        }
    },
    "Indoco Remedies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 29
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 30
                },
                {
                    "label": "Operating profit",
                    "share": 8
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
                14.3,
                14.7,
                13.7,
                10.9,
                11.1,
                9.2,
                2.9,
                -0.3,
                4.1,
                8.9,
                7.2,
                10.5,
                8.8
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
                328.0,
                288.0,
                245.0,
                100.0,
                142.0
            ],
            "ocf": [
                174.0,
                179.0,
                157.0,
                95.0,
                192.0
            ],
            "fcf": [
                49.0,
                -28.0,
                -270.0,
                -261.0,
                44.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,057cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
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
                70,
                97
            ],
            "inventoryDays": [
                248,
                273
            ],
            "payableDays": [
                107,
                208
            ],
            "cycleDays": [
                212,
                162
            ],
            "absorbed5y": -211,
            "receivables5y": -289,
            "inventory5y": -167,
            "payables5y": 203
        }
    },
    "Zydus Lifesciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 27
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 21
                },
                {
                    "label": "Operating profit",
                    "share": 31
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
                29.3,
                26.2,
                24.5,
                29.5,
                33.6,
                27.9,
                26.3,
                32.6,
                31.8,
                32.9,
                26.5,
                33.7,
                24.1
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
                3342.0,
                3860.0,
                5384.0,
                7058.0,
                8475.0
            ],
            "ocf": [
                2104.0,
                2689.0,
                3228.0,
                6781.0,
                2117.0
            ],
            "fcf": [
                901.0,
                1658.0,
                2321.0,
                5087.0,
                -555.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "23.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹11,079cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
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
                80,
                73
            ],
            "inventoryDays": [
                245,
                282
            ],
            "payableDays": [
                141,
                142
            ],
            "cycleDays": [
                184,
                212
            ],
            "absorbed5y": -2547,
            "receivables5y": -1439,
            "inventory5y": -944,
            "payables5y": -1057
        }
    },
    "Ajanta Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 22
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 24
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 28
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
                26.5,
                28.3,
                28.4,
                26.4,
                28.8,
                26.2,
                28.0,
                25.4,
                26.9,
                24.2,
                27.8,
                23.4,
                26.1
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
                933.0,
                808.0,
                1172.0,
                1269.0,
                1500.0
            ],
            "ocf": [
                562.0,
                792.0,
                785.0,
                1157.0,
                529.0
            ],
            "fcf": [
                413.0,
                618.0,
                633.0,
                839.0,
                164.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹433cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                111,
                124
            ],
            "inventoryDays": [
                347,
                289
            ],
            "payableDays": [
                143,
                168
            ],
            "cycleDays": [
                315,
                246
            ],
            "absorbed5y": -707,
            "receivables5y": -971,
            "inventory5y": -166,
            "payables5y": 173
        }
    },
    "Ipca Laboratories": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 29
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 21
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
                19.4,
                17.7,
                16.1,
                15.8,
                18.8,
                18.7,
                20.6,
                19.1,
                18.0,
                21.3,
                22.3,
                20.3,
                24.0
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
                1325.0,
                932.0,
                1324.0,
                1731.0,
                1990.0
            ],
            "ocf": [
                856.0,
                806.0,
                945.0,
                1321.0,
                1142.0
            ],
            "fcf": [
                377.0,
                312.0,
                534.0,
                545.0,
                486.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹244cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
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
                57,
                77
            ],
            "inventoryDays": [
                337,
                353
            ],
            "payableDays": [
                101,
                122
            ],
            "cycleDays": [
                293,
                308
            ],
            "absorbed5y": -786,
            "receivables5y": -491,
            "inventory5y": -492,
            "payables5y": 19
        }
    },
    "Alembic Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 27
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 24
                },
                {
                    "label": "Other costs",
                    "share": 25
                },
                {
                    "label": "Operating profit",
                    "share": 15
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
                13.4,
                13.0,
                16.3,
                17.1,
                15.2,
                14.5,
                15.4,
                15.3,
                16.4,
                16.5,
                15.6,
                12.3,
                15.4
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
                874.0,
                682.0,
                932.0,
                1008.0,
                1121.0
            ],
            "ocf": [
                552.0,
                724.0,
                803.0,
                88.0,
                783.0
            ],
            "fcf": [
                126.0,
                281.0,
                476.0,
                -476.0,
                288.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,227cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "64%",
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
                56,
                73
            ],
            "inventoryDays": [
                406,
                462
            ],
            "payableDays": [
                178,
                154
            ],
            "cycleDays": [
                283,
                381
            ],
            "absorbed5y": -1699,
            "receivables5y": -1041,
            "inventory5y": -1025,
            "payables5y": 162
        }
    },
    "Marksans Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 43
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                20.4,
                21.5,
                22.7,
                19.6,
                21.7,
                22.9,
                20.4,
                17.9,
                16.1,
                20.0,
                21.4,
                22.8,
                25.3
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
                259.0,
                340.0,
                459.0,
                533.0,
                601.0
            ],
            "ocf": [
                99.0,
                237.0,
                230.0,
                207.0,
                458.0
            ],
            "fcf": [
                53.0,
                183.0,
                21.0,
                34.0,
                327.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "30.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹647cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "56%",
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
                97,
                80
            ],
            "inventoryDays": [
                216,
                278
            ],
            "payableDays": [
                102,
                96
            ],
            "cycleDays": [
                211,
                261
            ],
            "absorbed5y": -651,
            "receivables5y": -278,
            "inventory5y": -410,
            "payables5y": 50
        }
    },
    "Caplin Point Labs": {
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
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 35
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
                32.2,
                33.4,
                32.6,
                32.0,
                33.1,
                34.2,
                32.9,
                33.5,
                34.9,
                35.4,
                35.0,
                34.0,
                34.9
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
                395.0,
                442.0,
                552.0,
                651.0,
                765.0
            ],
            "ocf": [
                337.0,
                271.0,
                318.0,
                432.0,
                523.0
            ],
            "fcf": [
                246.0,
                78.0,
                172.0,
                240.0,
                275.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,259cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                91,
                138
            ],
            "inventoryDays": [
                149,
                181
            ],
            "payableDays": [
                102,
                125
            ],
            "cycleDays": [
                138,
                194
            ],
            "absorbed5y": -472,
            "receivables5y": -534,
            "inventory5y": -250,
            "payables5y": 230
        }
    },
    "Granules India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 35
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 22
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
                13.9,
                17.9,
                21.6,
                21.8,
                21.9,
                21.0,
                20.2,
                21.1,
                20.4,
                21.4,
                22.2,
                23.9,
                23.0
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
                727.0,
                915.0,
                858.0,
                948.0,
                1188.0
            ],
            "ocf": [
                332.0,
                739.0,
                439.0,
                867.0,
                793.0
            ],
            "fcf": [
                -66.0,
                328.0,
                58.0,
                295.0,
                235.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹563cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                90,
                62
            ],
            "inventoryDays": [
                190,
                326
            ],
            "payableDays": [
                124,
                131
            ],
            "cycleDays": [
                156,
                256
            ],
            "absorbed5y": -649,
            "receivables5y": 19,
            "inventory5y": -620,
            "payables5y": 17
        }
    },
    "Rubicon Research": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 28
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 25
                },
                {
                    "label": "Operating profit",
                    "share": 23
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
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
                20.9,
                22.4,
                20.1,
                22.4,
                22.8,
                22.7,
                23.2,
                24.2
            ],
            "index": [
                100,
                97,
                99,
                98,
                94,
                93,
                101,
                114
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
                -39.0,
                18.0,
                155.0,
                264.0,
                400.0
            ],
            "ocf": [
                -63.0,
                -75.0,
                21.0,
                159.0,
                205.0
            ],
            "fcf": [
                -117.0,
                -119.0,
                -35.0,
                89.0,
                -24.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "95.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "61.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹35cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "31%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "23%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                162,
                106
            ],
            "inventoryDays": [
                502,
                550
            ],
            "payableDays": [
                320,
                285
            ],
            "cycleDays": [
                345,
                371
            ],
            "absorbed5y": -464,
            "receivables5y": -341,
            "inventory5y": -660,
            "payables5y": 332
        }
    },
    "Natco Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 17
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
                    "share": 21
                },
                {
                    "label": "Operating profit",
                    "share": 36
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
                46.3,
                44.4,
                35.3,
                46.5,
                59.1,
                58.6,
                8.2,
                44.9,
                43.0,
                42.5,
                24.6,
                17.3,
                25.3
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
                264.0,
                936.0,
                1754.0,
                2196.0,
                1462.0
            ],
            "ocf": [
                46.0,
                849.0,
                1212.0,
                1697.0,
                1768.0
            ],
            "fcf": [
                -197.0,
                643.0,
                853.0,
                1185.0,
                1377.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,964cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                116,
                79
            ],
            "inventoryDays": [
                496,
                480
            ],
            "payableDays": [
                105,
                216
            ],
            "cycleDays": [
                507,
                343
            ],
            "absorbed5y": -31,
            "receivables5y": -475,
            "inventory5y": -91,
            "payables5y": 254
        }
    },
    "Strides Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
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
                    "share": 12
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
                14.4,
                11.1,
                12.8,
                16.2,
                17.8,
                15.8,
                18.2,
                18.3,
                19.5,
                18.9,
                19.7,
                18.1,
                18.0
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
                -131.0,
                145.0,
                528.0,
                803.0,
                925.0
            ],
            "ocf": [
                -258.0,
                44.0,
                701.0,
                684.0,
                703.0
            ],
            "fcf": [
                -401.0,
                -51.0,
                583.0,
                436.0,
                285.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,545cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
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
                144,
                97
            ],
            "inventoryDays": [
                285,
                305
            ],
            "payableDays": [
                260,
                244
            ],
            "cycleDays": [
                168,
                157
            ],
            "absorbed5y": -1001,
            "receivables5y": -528,
            "inventory5y": -478,
            "payables5y": 6
        }
    },
    "Sai Parenterals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
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
                    "share": 9
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
            "periods": [
                "Q1 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                14.2,
                -3.7,
                13.2,
                13.2
            ],
            "index": [
                100,
                94,
                103,
                116
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
                19.0,
                32.0,
                39.0,
                39.0
            ],
            "ocf": [
                -13.0,
                -30.0,
                33.0,
                93.0
            ],
            "fcf": [
                -30.0,
                -74.0,
                33.0,
                27.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "109.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "45.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹52cr",
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
                231,
                173
            ],
            "inventoryDays": [
                83,
                259
            ],
            "payableDays": [
                140,
                224
            ],
            "cycleDays": [
                174,
                208
            ],
            "absorbed5y": -43,
            "receivables5y": -150,
            "inventory5y": -169,
            "payables5y": 133
        }
    },
    "Wockhardt": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 34
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 16
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
                2.5,
                9.6,
                5.3,
                -8.4,
                12.3,
                13.6,
                17.8,
                8.6,
                9.8,
                22.8,
                19.9,
                23.3,
                20.7
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
                298.0,
                102.0,
                91.0,
                393.0,
                652.0
            ],
            "ocf": [
                413.0,
                153.0,
                219.0,
                -22.0,
                390.0
            ],
            "fcf": [
                201.0,
                -56.0,
                3.0,
                -387.0,
                26.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "94.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "51.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,983cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "75%",
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
                104,
                64
            ],
            "inventoryDays": [
                222,
                286
            ],
            "payableDays": [
                265,
                182
            ],
            "cycleDays": [
                60,
                168
            ],
            "absorbed5y": -262,
            "receivables5y": 303,
            "inventory5y": -2,
            "payables5y": 0
        }
    },
    "Sakar Healthcare": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 27
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
                23.1,
                26.5,
                24.3,
                25.6,
                26.8,
                27.9,
                27.9,
                32.0,
                24.5,
                19.0,
                27.1,
                36.6,
                28.8
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
                29.0,
                33.0,
                38.0,
                50.0,
                69.0
            ],
            "ocf": [
                36.0,
                33.0,
                24.0,
                34.0,
                49.0
            ],
            "fcf": [
                -61.53,
                -49.2,
                -35.56,
                1.7199999999999989,
                20.65
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "71.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹71cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "80%",
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
                40,
                73
            ],
            "inventoryDays": [
                69,
                207
            ],
            "payableDays": [
                149,
                153
            ],
            "cycleDays": [
                -39,
                127
            ],
            "absorbed5y": -39,
            "receivables5y": -38,
            "inventory5y": -53,
            "payables5y": 32
        }
    },
    "Gufic Biosciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 16
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
                17.9,
                18.1,
                17.8,
                17.4,
                17.7,
                19.1,
                16.3,
                13.2,
                14.1,
                15.7,
                15.6,
                18.3,
                18.0
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
                148.0,
                135.0,
                150.0,
                136.0,
                150.0
            ],
            "ocf": [
                106.0,
                -27.0,
                -7.0,
                123.0,
                44.0
            ],
            "fcf": [
                18.549999999999997,
                -214.6,
                -119.69,
                47.480000000000004,
                12.82
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹331cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "33%",
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
                71,
                115
            ],
            "inventoryDays": [
                102,
                281
            ],
            "payableDays": [
                125,
                173
            ],
            "cycleDays": [
                48,
                224
            ],
            "absorbed5y": -364,
            "receivables5y": -248,
            "inventory5y": -230,
            "payables5y": 114
        }
    },
    "Beta Drugs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
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
                20.5,
                18.1,
                20.0,
                20.4,
                19.5,
                19.1,
                21.4
            ],
            "index": [
                100,
                102,
                101,
                97,
                96,
                104,
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
                43.0,
                53.0,
                60.0,
                75.0,
                76.0
            ],
            "ocf": [
                30.0,
                23.0,
                31.0,
                36.0,
                37.0
            ],
            "fcf": [
                11.0,
                5.0,
                19.0,
                -1.0,
                -16.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "53.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹23cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                90,
                113
            ],
            "inventoryDays": [
                87,
                159
            ],
            "payableDays": [
                123,
                172
            ],
            "cycleDays": [
                53,
                100
            ],
            "absorbed5y": -90,
            "receivables5y": -86,
            "inventory5y": -58,
            "payables5y": 59
        }
    },
    "Fredun Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 14
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
                12.9,
                12.2,
                12.6,
                9.3,
                12.7,
                13.1,
                12.6,
                10.2,
                14.2,
                15.2,
                16.1,
                13.6,
                14.5
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
                14.0,
                28.0,
                38.0,
                53.0,
                91.0
            ],
            "ocf": [
                -2.0,
                -14.0,
                -0.0,
                -21.0,
                16.0
            ],
            "fcf": [
                -6.0,
                -23.0,
                -8.0,
                -27.0,
                -58.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "51.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹157cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-9%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                148,
                53
            ],
            "inventoryDays": [
                96,
                219
            ],
            "payableDays": [
                101,
                71
            ],
            "cycleDays": [
                144,
                201
            ],
            "absorbed5y": -245,
            "receivables5y": -51,
            "inventory5y": -203,
            "payables5y": 29
        }
    },
    "Orchid Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
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
                    "share": 5
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
                12.1,
                11.7,
                16.0,
                13.3,
                13.3,
                13.6,
                12.1,
                11.8,
                -2.1,
                -0.8,
                0.8,
                8.2,
                4.6
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
                55.0,
                84.0,
                111.0,
                151.0,
                48.0
            ],
            "ocf": [
                92.0,
                18.0,
                126.0,
                51.0,
                126.0
            ],
            "fcf": [
                78.0,
                -67.0,
                61.0,
                -103.0,
                -264.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "365.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "155.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹223cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "92%",
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
                111,
                113
            ],
            "inventoryDays": [
                201,
                161
            ],
            "payableDays": [
                195,
                150
            ],
            "cycleDays": [
                117,
                124
            ],
            "absorbed5y": -51,
            "receivables5y": -104,
            "inventory5y": -64,
            "payables5y": 112
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const pharmaValuationInputs: Record<string, ValuationInput> = {
    "Emcure Pharma": {
        "netDebt": 1373,
        "ttmEbitda": 1980.0,
        "mcapAtWriting": 37463.0,
        "peAtWriting": 36.3
    },
    "Corona Remedies": {
        "netDebt": 121,
        "ttmEbitda": 317.0,
        "mcapAtWriting": 13206.0,
        "peAtWriting": 62.4
    },
    "RPG Life Sciences": {
        "netDebt": -257,
        "ttmEbitda": 155.0,
        "mcapAtWriting": 4968.0,
        "peAtWriting": 42.6
    },
    "Jagsonpal Pharma": {
        "netDebt": -98,
        "ttmEbitda": 61.0,
        "mcapAtWriting": 1482.0,
        "peAtWriting": 31.5
    },
    "Eris Lifesciences": {
        "netDebt": 2292,
        "ttmEbitda": 1138.0,
        "mcapAtWriting": 17600.0,
        "peAtWriting": 26.8
    },
    "Sanofi India": {
        "netDebt": -257,
        "ttmEbitda": 483.0,
        "mcapAtWriting": 7047.0,
        "peAtWriting": 20.6
    },
    "Indoco Remedies": {
        "netDebt": 1057,
        "ttmEbitda": 165.0,
        "mcapAtWriting": 2312.0,
        "peAtWriting": null
    },
    "Zydus Lifesciences": {
        "netDebt": 11079,
        "ttmEbitda": 8316.0,
        "mcapAtWriting": 116523.0,
        "peAtWriting": 23.9
    },
    "Ajanta Pharma": {
        "netDebt": -433,
        "ttmEbitda": 1467.0,
        "mcapAtWriting": 44610.0,
        "peAtWriting": 39.3
    },
    "Ipca Laboratories": {
        "netDebt": 244,
        "ttmEbitda": 2232.0,
        "mcapAtWriting": 49812.0,
        "peAtWriting": 36.3
    },
    "Alembic Pharma": {
        "netDebt": 1227,
        "ttmEbitda": 1167.0,
        "mcapAtWriting": 16557.0,
        "peAtWriting": 22.2
    },
    "Marksans Pharma": {
        "netDebt": -647,
        "ttmEbitda": 714.0,
        "mcapAtWriting": 15707.0,
        "peAtWriting": 30.4
    },
    "Caplin Point Labs": {
        "netDebt": -1259,
        "ttmEbitda": 797.0,
        "mcapAtWriting": 21268.0,
        "peAtWriting": 32.0
    },
    "Granules India": {
        "netDebt": 563,
        "ttmEbitda": 1277.0,
        "mcapAtWriting": 23548.0,
        "peAtWriting": 36.2
    },
    "Rubicon Research": {
        "netDebt": -35,
        "ttmEbitda": 450.0,
        "mcapAtWriting": 27561.0,
        "peAtWriting": 95.6
    },
    "Natco Pharma": {
        "netDebt": -3964,
        "ttmEbitda": 1052.0,
        "mcapAtWriting": 14974.0,
        "peAtWriting": 13.1
    },
    "Strides Pharma": {
        "netDebt": 1545,
        "ttmEbitda": 935.0,
        "mcapAtWriting": 11295.0,
        "peAtWriting": 19.5
    },
    "Sai Parenterals": {
        "netDebt": 52,
        "ttmEbitda": 50.8,
        "mcapAtWriting": 2257.0,
        "peAtWriting": 109.0
    },
    "Wockhardt": {
        "netDebt": 1983,
        "ttmEbitda": 772.0,
        "mcapAtWriting": 37747.0,
        "peAtWriting": 94.7
    },
    "Sakar Healthcare": {
        "netDebt": 71,
        "ttmEbitda": 77.0,
        "mcapAtWriting": 2585.0,
        "peAtWriting": 71.6
    },
    "Gufic Biosciences": {
        "netDebt": 331,
        "ttmEbitda": 165.0,
        "mcapAtWriting": 4366.0,
        "peAtWriting": 59.4
    },
    "Beta Drugs": {
        "netDebt": 23,
        "ttmEbitda": 83.0,
        "mcapAtWriting": 2438.0,
        "peAtWriting": 53.5
    },
    "Fredun Pharma": {
        "netDebt": 157,
        "ttmEbitda": 111.0,
        "mcapAtWriting": 2306.0,
        "peAtWriting": 51.9
    },
    "Orchid Pharma": {
        "netDebt": 223,
        "ttmEbitda": 44.0,
        "mcapAtWriting": 6599.0,
        "peAtWriting": 365.0
    }
};
