import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const pharmaApiCharts: Record<string, ProfileCharts> = {
    "Alivus Life Sciences": {
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
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 5
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
                33.4,
                28.1,
                30.2,
                26.3,
                27.0,
                26.4,
                29.6,
                30.5,
                28.6,
                30.4,
                34.3,
                31.2,
                33.1
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
                617.0,
                643.0,
                675.0,
                684.0,
                798.0
            ],
            "ocf": [
                598.0,
                306.0,
                414.0,
                392.0,
                565.0
            ],
            "fcf": [
                466.0,
                143.0,
                285.0,
                226.0,
                258.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹725cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                116,
                153
            ],
            "inventoryDays": [
                185,
                246
            ],
            "payableDays": [
                110,
                132
            ],
            "cycleDays": [
                190,
                267
            ],
            "absorbed5y": -557,
            "receivables5y": -489,
            "inventory5y": -289,
            "payables5y": 137
        }
    },
    "Concord Biotech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 23
                },
                {
                    "label": "Power and factory costs",
                    "share": 14
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 11
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
                36.9,
                44.3,
                44.0,
                41.4,
                37.5,
                43.2,
                40.2,
                44.0,
                29.9,
                35.6,
                35.3,
                36.2,
                31.9
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
                270.0,
                344.0,
                432.0,
                506.0,
                368.0
            ],
            "ocf": [
                207.0,
                246.0,
                265.0,
                245.0,
                267.0
            ],
            "fcf": [
                51.0,
                101.0,
                179.0,
                134.0,
                172.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "41.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹503cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "64%",
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
                119,
                159
            ],
            "inventoryDays": [
                434,
                485
            ],
            "payableDays": [
                185,
                151
            ],
            "cycleDays": [
                368,
                493
            ],
            "absorbed5y": -340,
            "receivables5y": -276,
            "inventory5y": -174,
            "payables5y": 49
        }
    },
    "Supriya Lifescience": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 31
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
                    "share": 9
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
                33.3,
                22.9,
                29.3,
                35.4,
                39.1,
                39.2,
                35.5,
                37.0,
                35.9,
                36.5,
                35.0,
                35.4,
                24.7
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
                214.0,
                129.0,
                176.0,
                261.0,
                295.0
            ],
            "ocf": [
                49.0,
                64.0,
                113.0,
                165.0,
                186.0
            ],
            "fcf": [
                -11.0,
                -44.0,
                -33.0,
                3.0,
                34.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "38.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹173cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
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
                79,
                97
            ],
            "inventoryDays": [
                172,
                229
            ],
            "payableDays": [
                91,
                159
            ],
            "cycleDays": [
                160,
                167
            ],
            "absorbed5y": -241,
            "receivables5y": -146,
            "inventory5y": -86,
            "payables5y": 59
        }
    },
    "Shilpa Medicare": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 30
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
                    "share": 11
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
                17.7,
                18.5,
                22.6,
                24.0,
                23.9,
                25.0,
                25.4,
                23.9,
                28.3,
                29.2,
                27.8,
                27.5,
                29.2
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
                202.0,
                99.0,
                239.0,
                319.0,
                435.0
            ],
            "ocf": [
                105.0,
                180.0,
                137.0,
                132.0,
                342.0
            ],
            "fcf": [
                -227.0,
                -47.0,
                -48.0,
                -112.0,
                -29.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "73.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "45.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹615cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
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
                124,
                123
            ],
            "inventoryDays": [
                338,
                291
            ],
            "payableDays": [
                139,
                113
            ],
            "cycleDays": [
                323,
                301
            ],
            "absorbed5y": -240,
            "receivables5y": -301,
            "inventory5y": -103,
            "payables5y": 81
        }
    },
    "NGL Fine-Chem": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 48
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 13
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
                14.1,
                17.5,
                15.9,
                16.0,
                9.9,
                12.9,
                5.6,
                6.3,
                10.6,
                14.2,
                17.2,
                14.1,
                16.5
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
                68.0,
                35.0,
                54.0,
                35.0,
                80.0
            ],
            "ocf": [
                14.0,
                35.0,
                20.0,
                32.0,
                43.0
            ],
            "fcf": [
                -42.0,
                4.0,
                -9.0,
                -42.0,
                -47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹118cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "53%",
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
                74,
                95
            ],
            "inventoryDays": [
                137,
                106
            ],
            "payableDays": [
                91,
                97
            ],
            "cycleDays": [
                120,
                104
            ],
            "absorbed5y": -110,
            "receivables5y": -93,
            "inventory5y": -32,
            "payables5y": 36
        }
    },
    "Acutaas Chemicals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 42
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
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
                22.1,
                14.5,
                16.3,
                19.1,
                16.9,
                19.8,
                25.1,
                27.6,
                24.6,
                31.0,
                38.4,
                42.5,
                34.2
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
                105.0,
                123.0,
                128.0,
                232.0,
                480.0
            ],
            "ocf": [
                -12.0,
                66.0,
                125.0,
                118.0,
                292.0
            ],
            "fcf": [
                -46.0,
                -30.0,
                -156.0,
                -77.0,
                -36.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "72.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "51.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹189cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "55%",
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
                115,
                99
            ],
            "inventoryDays": [
                150,
                149
            ],
            "payableDays": [
                158,
                99
            ],
            "cycleDays": [
                107,
                149
            ],
            "absorbed5y": -275,
            "receivables5y": -210,
            "inventory5y": -168,
            "payables5y": 100
        }
    },
    "Blue Jet Healthcare": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 46
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 7
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
                32.8,
                34.8,
                32.9,
                28.8,
                27.0,
                33.2,
                39.0,
                41.2,
                34.1,
                33.3,
                24.5,
                30.2,
                33.4
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
                249.0,
                219.0,
                231.0,
                378.0,
                294.0
            ],
            "ocf": [
                146.0,
                142.0,
                241.0,
                46.0,
                334.0
            ],
            "fcf": [
                123.0,
                83.0,
                67.0,
                -34.0,
                115.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "46.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹357cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                121,
                131
            ],
            "inventoryDays": [
                133,
                157
            ],
            "payableDays": [
                72,
                48
            ],
            "cycleDays": [
                183,
                240
            ],
            "absorbed5y": -250,
            "receivables5y": -154,
            "inventory5y": -69,
            "payables5y": 2
        }
    },
    "Shree Ganesh Remed.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 38
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 32
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
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
                45.4,
                32.8,
                35.0,
                36.6,
                40.4,
                29.6,
                31.7,
                31.9,
                34.3,
                23.3
            ],
            "index": [
                100,
                95,
                91,
                88,
                90,
                89,
                85,
                84,
                91,
                103
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY20",
                "FY21",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                13.0,
                14.0,
                42.0,
                39.0,
                35.0
            ],
            "ocf": [
                5.0,
                3.0,
                30.0,
                31.0,
                24.0
            ],
            "fcf": [
                4.96,
                2.99,
                -1.1400000000000006,
                7.800000000000001,
                7.399999999999999
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "61.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "31.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹18cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "65%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "32%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY20",
            "toYear": "FY26",
            "debtorDays": [
                101,
                109
            ],
            "inventoryDays": [
                61,
                209
            ],
            "payableDays": [
                43,
                82
            ],
            "cycleDays": [
                119,
                236
            ],
            "absorbed5y": -21,
            "receivables5y": -8,
            "inventory5y": -13,
            "payables5y": -3
        }
    },
    "Aarti Drugs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
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
                    "share": 13
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
                12.7,
                11.8,
                11.6,
                13.9,
                11.7,
                11.2,
                11.1,
                13.7,
                12.5,
                12.9,
                9.1,
                13.3,
                13.9
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
                333.0,
                309.0,
                321.0,
                290.0,
                312.0
            ],
            "ocf": [
                70.0,
                133.0,
                359.0,
                245.0,
                254.0
            ],
            "fcf": [
                -82.0,
                -32.0,
                133.0,
                68.0,
                81.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹568cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                110,
                118
            ],
            "inventoryDays": [
                115,
                112
            ],
            "payableDays": [
                103,
                109
            ],
            "cycleDays": [
                123,
                121
            ],
            "absorbed5y": -260,
            "receivables5y": -163,
            "inventory5y": -76,
            "payables5y": -24
        }
    },
    "IOL Chem & Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
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
                    "share": 12
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
                13.0,
                11.7,
                8.5,
                9.9,
                10.2,
                8.0,
                9.0,
                11.9,
                11.2,
                10.0,
                9.8,
                14.9,
                13.6
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
                226.0,
                231.0,
                202.0,
                270.0
            ],
            "ocf": [
                93.0,
                122.0,
                290.0,
                179.0,
                214.0
            ],
            "fcf": [
                -60.0,
                -90.0,
                16.0,
                -35.0,
                41.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹84cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "76%",
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
                79,
                95
            ],
            "inventoryDays": [
                95,
                91
            ],
            "payableDays": [
                95,
                118
            ],
            "cycleDays": [
                79,
                68
            ],
            "absorbed5y": -114,
            "receivables5y": -298,
            "inventory5y": -76,
            "payables5y": 261
        }
    },
    "Solara Active Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 50
                },
                {
                    "label": "Power and factory costs",
                    "share": 14
                },
                {
                    "label": "Staff",
                    "share": 16
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
                5.4,
                8.9,
                -76.4,
                3.3,
                11.6,
                17.6,
                19.3,
                16.5,
                17.9,
                11.1,
                10.6,
                15.0,
                16.2
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
                81.0,
                134.0,
                -95.0,
                206.0,
                187.0
            ],
            "ocf": [
                -242.0,
                156.0,
                109.0,
                213.0,
                153.0
            ],
            "fcf": [
                -451.0,
                45.0,
                68.0,
                173.0,
                100.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "857.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹637cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "76%",
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
                141,
                117
            ],
            "inventoryDays": [
                321,
                170
            ],
            "payableDays": [
                154,
                146
            ],
            "cycleDays": [
                308,
                140
            ],
            "absorbed5y": -157,
            "receivables5y": 19,
            "inventory5y": -209,
            "payables5y": -11
        }
    },
    "SMS Pharmaceuticals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 56
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 15
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
                19.3,
                16.8,
                18.0,
                13.8,
                20.7,
                15.7,
                19.1,
                16.5,
                19.9,
                19.8,
                21.0,
                16.8,
                19.8
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
                115.0,
                55.0,
                117.0,
                139.0,
                171.0
            ],
            "ocf": [
                45.0,
                22.0,
                50.0,
                82.0,
                59.0
            ],
            "fcf": [
                18.0,
                -8.0,
                -2.0,
                -41.0,
                -72.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹319cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "43%",
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
                34,
                89
            ],
            "inventoryDays": [
                333,
                260
            ],
            "payableDays": [
                97,
                89
            ],
            "cycleDays": [
                270,
                260
            ],
            "absorbed5y": -281,
            "receivables5y": -111,
            "inventory5y": -212,
            "payables5y": 63
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const pharmaApiValuationInputs: Record<string, ValuationInput> = {
    "Alivus Life Sciences": {
        "netDebt": -725,
        "ttmEbitda": 837.0,
        "mcapAtWriting": 17256.0,
        "peAtWriting": 27.7
    },
    "Concord Biotech": {
        "netDebt": -503,
        "ttmEbitda": 388.0,
        "mcapAtWriting": 16582.0,
        "peAtWriting": 59.7
    },
    "Supriya Lifescience": {
        "netDebt": -173,
        "ttmEbitda": 290.0,
        "mcapAtWriting": 7697.0,
        "peAtWriting": 38.8
    },
    "Shilpa Medicare": {
        "netDebt": 615,
        "ttmEbitda": 479.0,
        "mcapAtWriting": 20958.0,
        "peAtWriting": 73.7
    },
    "NGL Fine-Chem": {
        "netDebt": 118,
        "ttmEbitda": 84.0,
        "mcapAtWriting": 1687.0,
        "peAtWriting": 29.5
    },
    "Acutaas Chemicals": {
        "netDebt": -189,
        "ttmEbitda": 543.0,
        "mcapAtWriting": 28167.0,
        "peAtWriting": 72.9
    },
    "Blue Jet Healthcare": {
        "netDebt": -357,
        "ttmEbitda": 271.0,
        "mcapAtWriting": 10964.0,
        "peAtWriting": 46.7
    },
    "Shree Ganesh Remed.": {
        "netDebt": 18,
        "ttmEbitda": 31.0,
        "mcapAtWriting": 944.0,
        "peAtWriting": 61.1
    },
    "Aarti Drugs": {
        "netDebt": 568,
        "ttmEbitda": 333.0,
        "mcapAtWriting": 3973.0,
        "peAtWriting": 20.6
    },
    "IOL Chem & Pharma": {
        "netDebt": -84,
        "ttmEbitda": 310.0,
        "mcapAtWriting": 5986.0,
        "peAtWriting": 33.9
    },
    "Solara Active Pharma": {
        "netDebt": 479,
        "ttmEbitda": 192.0,
        "mcapAtWriting": 3660.0,
        "peAtWriting": 857.0
    },
    "SMS Pharmaceuticals": {
        "netDebt": 319,
        "ttmEbitda": 173.0,
        "mcapAtWriting": 4358.0,
        "peAtWriting": 42.6
    }
};
