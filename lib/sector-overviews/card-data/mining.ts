import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const miningCharts: Record<string, ProfileCharts> = {
    "Godavari Power": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 24
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Iron ore price",
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
                23.2,
                28.0,
                25.3,
                21.5,
                30.4,
                19.5,
                17.0,
                21.7,
                24.5,
                19.9,
                19.1,
                27.3,
                19.1
            ],
            "index": [
                100,
                91,
                99,
                111,
                118,
                111,
                119,
                116,
                120,
                116,
                110,
                111,
                123
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
                1868.0,
                1134.0,
                1328.0,
                1194.0,
                1263.0
            ],
            "ocf": [
                1330.0,
                962.0,
                1044.0,
                898.0,
                1157.0
            ],
            "fcf": [
                717.0,
                506.0,
                621.0,
                360.0,
                68.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,093cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "79%",
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
                24,
                9
            ],
            "inventoryDays": [
                133,
                124
            ],
            "payableDays": [
                81,
                59
            ],
            "cycleDays": [
                76,
                73
            ],
            "absorbed5y": -5,
            "receivables5y": 139,
            "inventory5y": -431,
            "payables5y": 250
        }
    },
    "Gravita India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 80
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
            "input": "Lead price",
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
                8.3,
                8.7,
                10.6,
                8.3,
                9.7,
                6.8,
                8.1,
                8.9,
                9.7,
                9.8,
                11.8,
                9.6,
                7.5
            ],
            "index": [
                100,
                100,
                101,
                97,
                100,
                101,
                100,
                100,
                104,
                102,
                102,
                105,
                109
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
                217.0,
                207.0,
                287.0,
                328.0,
                439.0
            ],
            "ocf": [
                10.0,
                200.0,
                42.0,
                282.0,
                169.0
            ],
            "fcf": [
                -63.0,
                92.0,
                -56.0,
                175.0,
                -47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹534cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "48%",
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
                18,
                37
            ],
            "inventoryDays": [
                107,
                109
            ],
            "payableDays": [
                7,
                7
            ],
            "cycleDays": [
                119,
                139
            ],
            "absorbed5y": -820,
            "receivables5y": -232,
            "inventory5y": -414,
            "payables5y": -55
        }
    },
    "Ashapura Minechem": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 27
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 60
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Bauxite price",
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
                10.8,
                5.4,
                8.1,
                10.9,
                12.2,
                10.6,
                15.6,
                15.1,
                13.4,
                13.8,
                11.9,
                6.5,
                11.2
            ],
            "index": [
                100,
                97,
                98,
                100,
                100,
                107,
                109,
                112,
                118,
                110,
                118,
                110,
                119
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
                102.0,
                178.0,
                252.0,
                377.0,
                555.0
            ],
            "ocf": [
                114.0,
                97.0,
                148.0,
                188.0,
                463.0
            ],
            "fcf": [
                -34.0,
                -37.0,
                -184.0,
                -213.0,
                184.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,115cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
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
                89,
                70
            ],
            "inventoryDays": [
                453,
                153
            ],
            "payableDays": [
                387,
                245
            ],
            "cycleDays": [
                154,
                -22
            ],
            "absorbed5y": -608,
            "receivables5y": -800,
            "inventory5y": -295,
            "payables5y": 285
        }
    },
    "CMR Green Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 88
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
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
                    "share": 5
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aluminium price",
            "periods": [
                "Q4 FY25",
                "Q1 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                3.0,
                5.8,
                4.4,
                5.4,
                4.3
            ],
            "index": [
                100,
                98,
                107,
                117,
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
                515.0,
                209.0,
                220.0,
                302.0,
                452.0
            ],
            "ocf": [
                -206.0,
                614.0,
                74.0,
                -92.0,
                -410.0
            ],
            "fcf": [
                -307.0,
                493.0,
                -70.0,
                -332.0,
                -545.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,417cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-1%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                44,
                40
            ],
            "inventoryDays": [
                67,
                63
            ],
            "payableDays": [
                20,
                16
            ],
            "cycleDays": [
                91,
                87
            ],
            "absorbed5y": -1409,
            "receivables5y": -412,
            "inventory5y": -882,
            "payables5y": 123
        }
    },
    "Pondy Oxides & Chem.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 88
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
                    "share": 1
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Lead price",
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
                4.0,
                4.0,
                5.5,
                5.0,
                5.2,
                5.0,
                4.9,
                5.3,
                6.8,
                8.4,
                7.3,
                6.3,
                6.0
            ],
            "index": [
                100,
                100,
                101,
                97,
                100,
                101,
                100,
                100,
                104,
                102,
                102,
                105,
                109
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY14",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                14.0,
                79.0,
                71.0,
                106.0,
                212.0
            ],
            "ocf": [
                9.0,
                78.0,
                65.0,
                -81.0,
                -44.0
            ],
            "fcf": [
                8.0,
                -33.0,
                28.0,
                -170.0,
                -94.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹141cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "6%",
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
                39,
                33
            ],
            "inventoryDays": [
                38,
                38
            ],
            "payableDays": [
                16,
                2
            ],
            "cycleDays": [
                61,
                69
            ],
            "absorbed5y": -371,
            "receivables5y": -173,
            "inventory5y": -136,
            "payables5y": 7
        }
    },
    "Caliber Mining & Log": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 1
                },
                {
                    "label": "Power and factory costs",
                    "share": 60
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 26
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q1 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                24.2,
                28.0,
                16.7
            ],
            "index": [
                100,
                103,
                127
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
                86.0,
                184.0,
                248.0,
                350.0,
                438.0
            ],
            "ocf": [
                53.0,
                90.0,
                48.0,
                null,
                411.0
            ],
            "fcf": [
                -124.0,
                -108.0,
                -319.0,
                null,
                -224.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,022cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
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
                69,
                30
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
                -98,
                30
            ],
            "absorbed5y": -300,
            "receivables5y": 44,
            "inventory5y": -118,
            "payables5y": 185
        }
    },
    "Ardee Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
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
            "input": "Lead price",
            "periods": [
                "Q1 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                13.5,
                11.0,
                10.0
            ],
            "index": [
                100,
                101,
                104
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
                23.0,
                28.0,
                66.0,
                147.0
            ],
            "ocf": [
                -14.0,
                -25.0,
                8.0,
                30.0
            ],
            "fcf": [
                -36.03,
                -45.54,
                -17.3,
                17.560000000000002
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹161cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "13%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                19,
                8
            ],
            "inventoryDays": [
                25,
                47
            ],
            "payableDays": [
                4,
                6
            ],
            "cycleDays": [
                41,
                49
            ],
            "absorbed5y": -205,
            "receivables5y": -11,
            "inventory5y": -96,
            "payables5y": -2
        }
    },
    "20 Microns": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 53
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
                    "share": 17
                },
                {
                    "label": "Operating profit",
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Limestone price",
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
                15.0,
                12.6,
                12.7,
                13.0,
                12.9,
                12.1,
                12.8,
                13.0,
                13.9,
                13.0,
                12.3,
                13.1
            ],
            "index": [
                100,
                99,
                98,
                101,
                101,
                102,
                100,
                107,
                110,
                115,
                116,
                115,
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
                79.0,
                86.0,
                106.0,
                117.0,
                123.0
            ],
            "ocf": [
                35.0,
                63.0,
                54.0,
                32.0,
                104.0
            ],
            "fcf": [
                7.609999999999999,
                50.51,
                34.120000000000005,
                -44.68000000000001,
                77.64
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹74cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "56%",
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
                60,
                68
            ],
            "inventoryDays": [
                148,
                102
            ],
            "payableDays": [
                113,
                44
            ],
            "cycleDays": [
                94,
                126
            ],
            "absorbed5y": -142,
            "receivables5y": -86,
            "inventory5y": -41,
            "payables5y": -33
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const miningValuationInputs: Record<string, ValuationInput> = {
    "Godavari Power": {
        "netDebt": -1093,
        "ttmEbitda": 1251.0,
        "mcapAtWriting": 15854.0,
        "peAtWriting": 19.3
    },
    "Gravita India": {
        "netDebt": 534,
        "ttmEbitda": 444.0,
        "mcapAtWriting": 11520.0,
        "peAtWriting": 29.4
    },
    "Ashapura Minechem": {
        "netDebt": 1115,
        "ttmEbitda": 554.0,
        "mcapAtWriting": 5083.0,
        "peAtWriting": 12.4
    },
    "CMR Green Tech": {
        "netDebt": 1417,
        "ttmEbitda": 468.0,
        "mcapAtWriting": 4994.0,
        "peAtWriting": 21.0
    },
    "Pondy Oxides & Chem.": {
        "netDebt": 141,
        "ttmEbitda": 225.0,
        "mcapAtWriting": 3720.0,
        "peAtWriting": 26.0
    },
    "Caliber Mining & Log": {
        "netDebt": 1022,
        "ttmEbitda": 438.0,
        "mcapAtWriting": 3289.0,
        "peAtWriting": 21.1
    },
    "Ardee Industries": {
        "netDebt": 161,
        "ttmEbitda": 147.0,
        "mcapAtWriting": 1648.0,
        "peAtWriting": 19.2
    },
    "20 Microns": {
        "netDebt": 74,
        "ttmEbitda": 123.0,
        "mcapAtWriting": 772.0,
        "peAtWriting": 11.3
    }
};
