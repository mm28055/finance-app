import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const pharmaCdmoCharts: Record<string, ProfileCharts> = {
    "Anthem Biosciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 38
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
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
                    "share": 39
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
            "periods": [
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
                35.7,
                37.1,
                32.1,
                40.4,
                35.4,
                39.6,
                37.1,
                43.7,
                36.1
            ],
            "index": [
                100,
                95,
                92,
                95,
                94,
                90,
                88,
                96,
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
                565.0,
                431.0,
                506.0,
                672.0,
                834.0
            ],
            "ocf": [
                333.0,
                306.0,
                140.0,
                271.0,
                844.0
            ],
            "fcf": [
                307.0,
                122.0,
                23.0,
                10.0,
                633.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "87.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "63.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,228cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "39%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                97,
                101
            ],
            "inventoryDays": [
                52,
                56
            ],
            "payableDays": [
                50,
                34
            ],
            "cycleDays": [
                99,
                124
            ],
            "absorbed5y": -666,
            "receivables5y": -329,
            "inventory5y": -89,
            "payables5y": -2
        }
    },
    "Sai Life Sciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 26
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 31
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 29
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Acetic acid (a common chemical input) price",
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
                25.0,
                28.5,
                9.3,
                25.8,
                27.3,
                27.2,
                24.4,
                27.2,
                33.8,
                29.4,
                26.7
            ],
            "index": [
                100,
                99,
                94,
                90,
                87,
                89,
                88,
                85,
                83,
                91,
                103
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
                126.0,
                169.0,
                287.0,
                410.0,
                634.0
            ],
            "ocf": [
                105.0,
                219.0,
                263.0,
                314.0,
                509.0
            ],
            "fcf": [
                -102.0,
                106.0,
                81.0,
                -55.0,
                -84.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "92.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "52.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹177cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "87%",
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
                102,
                62
            ],
            "inventoryDays": [
                179,
                97
            ],
            "payableDays": [
                279,
                182
            ],
            "cycleDays": [
                2,
                -24
            ],
            "absorbed5y": -234,
            "receivables5y": -174,
            "inventory5y": -75,
            "payables5y": 144
        }
    },
    "Neuland Laboratories": {
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
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 29
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
                26.7,
                32.8,
                30.8,
                27.8,
                28.0,
                19.9,
                21.9,
                15.5,
                11.6,
                30.4,
                17.5,
                39.6,
                34.7
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
                144.0,
                273.0,
                463.0,
                331.0,
                580.0
            ],
            "ocf": [
                60.0,
                237.0,
                261.0,
                317.0,
                347.0
            ],
            "fcf": [
                -38.0,
                171.0,
                117.0,
                111.0,
                -50.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "58.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹54cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                90,
                98
            ],
            "inventoryDays": [
                227,
                245
            ],
            "payableDays": [
                100,
                129
            ],
            "cycleDays": [
                216,
                214
            ],
            "absorbed5y": -255,
            "receivables5y": -329,
            "inventory5y": -263,
            "payables5y": 109
        }
    },
    "Piramal Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 37
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 27
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 10
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
                7.5,
                13.9,
                13.7,
                20.8,
                10.5,
                15.3,
                15.3,
                20.4,
                5.5,
                7.8,
                9.2,
                16.8,
                8.6
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
                950.0,
                629.0,
                1197.0,
                1445.0,
                922.0
            ],
            "ocf": [
                766.0,
                484.0,
                1005.0,
                892.0,
                1653.0
            ],
            "fcf": [
                -124.0,
                -481.0,
                293.0,
                228.0,
                763.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "32.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,451cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "93%",
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
                99,
                89
            ],
            "inventoryDays": [
                207,
                345
            ],
            "payableDays": [
                153,
                279
            ],
            "cycleDays": [
                153,
                155
            ],
            "absorbed5y": -789,
            "receivables5y": -503,
            "inventory5y": -1876,
            "payables5y": 1007
        }
    },
    "Cohance Lifesciences": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 29
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
                48.0,
                42.4,
                30.0,
                28.9,
                25.6,
                33.9,
                35.1,
                27.3,
                20.4,
                21.8,
                17.4,
                16.0,
                0.2
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
                582.0,
                574.0,
                406.0,
                797.0,
                427.0
            ],
            "ocf": [
                330.0,
                457.0,
                358.0,
                673.0,
                368.0
            ],
            "fcf": [
                255.0,
                171.0,
                306.0,
                356.0,
                148.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "164.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "55.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹189cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "78%",
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
                65,
                110
            ],
            "inventoryDays": [
                259,
                310
            ],
            "payableDays": [
                97,
                157
            ],
            "cycleDays": [
                228,
                263
            ],
            "absorbed5y": -121,
            "receivables5y": -67,
            "inventory5y": 17,
            "payables5y": -36
        }
    },
    "Dishman Carbogen (Carbogen Amcis)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 14
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 49
                },
                {
                    "label": "Other costs",
                    "share": 9
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
                16.9,
                10.4,
                6.3,
                9.6,
                5.5,
                18.6,
                20.5,
                21.4,
                19.9,
                22.8,
                15.7,
                19.2,
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
                331.0,
                332.0,
                286.0,
                469.0,
                566.0
            ],
            "ocf": [
                355.0,
                266.0,
                379.0,
                371.0,
                491.0
            ],
            "fcf": [
                -109.0,
                -354.0,
                76.0,
                154.0,
                224.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "147.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,085cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "94%",
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
                81,
                84
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                158,
                189
            ],
            "cycleDays": [
                449,
                805
            ],
            "absorbed5y": 66,
            "receivables5y": -208,
            "inventory5y": -534,
            "payables5y": 773
        }
    },
    "Gland Pharma": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 35
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 25
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 25
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
                24.3,
                23.6,
                23.0,
                23.4,
                18.8,
                21.1,
                26.0,
                24.4,
                24.4,
                21.1,
                25.7,
                29.4,
                27.2
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
                1510.0,
                1025.0,
                1333.0,
                1269.0,
                1630.0
            ],
            "ocf": [
                791.0,
                364.0,
                997.0,
                915.0,
                1031.0
            ],
            "fcf": [
                269.0,
                141.0,
                599.0,
                521.0,
                537.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,075cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                99,
                107
            ],
            "inventoryDays": [
                205,
                284
            ],
            "payableDays": [
                80,
                136
            ],
            "cycleDays": [
                225,
                255
            ],
            "absorbed5y": -1124,
            "receivables5y": -945,
            "inventory5y": -5,
            "payables5y": -220
        }
    },
    "Onesource Specialty": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 31
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 19
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
                -114.7,
                -17.9,
                -4.1,
                21.9,
                23.1,
                36.1,
                43.0,
                26.9,
                28.2,
                5.9,
                21.5,
                27.4
            ],
            "index": [
                100,
                103,
                102,
                97,
                93,
                90,
                92,
                91,
                87,
                86,
                93,
                106
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
                -97.0,
                -161.0,
                -82.0,
                467.0,
                304.0
            ],
            "ocf": [
                -416.0,
                -163.0,
                -107.0,
                -68.0,
                9.0
            ],
            "fcf": [
                -1071.0,
                -207.0,
                -171.0,
                -196.0,
                -560.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "58.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,406cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-173%",
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
                65,
                177
            ],
            "inventoryDays": [
                615,
                360
            ],
            "payableDays": [
                410,
                307
            ],
            "cycleDays": [
                232,
                230
            ],
            "absorbed5y": -1011,
            "receivables5y": -499,
            "inventory5y": -566,
            "payables5y": 102
        }
    },
    "Jubilant Pharmova": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 32
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 33
                },
                {
                    "label": "Other costs",
                    "share": 11
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
                10.6,
                14.4,
                13.0,
                15.4,
                14.5,
                16.5,
                15.8,
                17.9,
                15.3,
                17.3,
                13.6,
                14.8,
                11.1
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
                1150.0,
                779.0,
                901.0,
                1173.0,
                1260.0
            ],
            "ocf": [
                838.0,
                661.0,
                971.0,
                1072.0,
                1227.0
            ],
            "fcf": [
                238.0,
                -153.0,
                73.0,
                -44.0,
                -222.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "43.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,347cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
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
                55,
                47
            ],
            "inventoryDays": [
                308,
                170
            ],
            "payableDays": [
                139,
                170
            ],
            "cycleDays": [
                224,
                47
            ],
            "absorbed5y": 380,
            "receivables5y": -60,
            "inventory5y": -37,
            "payables5y": 398
        }
    },
    "Akums Drugs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 58
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
                -12.9,
                12.9,
                8.6,
                0.3,
                12.6,
                11.7,
                12.0,
                8.9,
                12.6,
                9.2,
                12.7,
                13.1,
                15.0
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
                -89.0,
                294.0,
                123.0,
                465.0,
                522.0
            ],
            "ocf": [
                32.0,
                177.0,
                498.0,
                465.0,
                1181.0
            ],
            "fcf": [
                -226.0,
                -152.0,
                187.0,
                193.0,
                950.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,524cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "179%",
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
                88,
                67
            ],
            "inventoryDays": [
                112,
                110
            ],
            "payableDays": [
                92,
                87
            ],
            "cycleDays": [
                109,
                89
            ],
            "absorbed5y": 419,
            "receivables5y": -358,
            "inventory5y": -342,
            "payables5y": 293
        }
    },
    "Innova Captab": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 21
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 3
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
                13.3,
                14.1,
                14.9,
                14.4,
                14.3,
                15.7,
                14.9,
                15.2,
                14.8,
                13.7,
                15.3,
                14.5,
                15.5
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
                96.0,
                114.0,
                154.0,
                186.0,
                243.0
            ],
            "ocf": [
                59.0,
                67.0,
                146.0,
                64.0,
                117.0
            ],
            "fcf": [
                -21.0,
                -12.0,
                -141.0,
                -108.0,
                49.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "44.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹340cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                97,
                98
            ],
            "inventoryDays": [
                76,
                125
            ],
            "payableDays": [
                86,
                141
            ],
            "cycleDays": [
                87,
                82
            ],
            "absorbed5y": -259,
            "receivables5y": -218,
            "inventory5y": -139,
            "payables5y": 175
        }
    },
    "Windlas Biotech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                11.7,
                12.4,
                12.3,
                12.9,
                12.0,
                12.3,
                12.8,
                12.8,
                12.9,
                13.1,
                10.3,
                10.5,
                10.9
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
                52.0,
                60.0,
                78.0,
                94.0,
                105.0
            ],
            "ocf": [
                9.0,
                61.0,
                109.0,
                68.0,
                105.0
            ],
            "fcf": [
                -6.0,
                -10.0,
                71.0,
                16.0,
                37.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹235cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "90%",
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
                87,
                92
            ],
            "inventoryDays": [
                71,
                40
            ],
            "payableDays": [
                76,
                156
            ],
            "cycleDays": [
                81,
                -24
            ],
            "absorbed5y": -1,
            "receivables5y": -152,
            "inventory5y": -19,
            "payables5y": 189
        }
    },
    "Senores Pharmaceutic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 16
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
                21.6,
                26.2,
                22.8,
                25.2,
                16.7,
                24.6,
                30.9,
                29.2,
                26.9,
                30.0
            ],
            "index": [
                100,
                99,
                94,
                90,
                87,
                89,
                88,
                85,
                83,
                91,
                103
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
                2.0,
                13.0,
                42.0,
                90.0,
                168.0
            ],
            "ocf": [
                -10.0,
                -1.0,
                -26.0,
                -46.0,
                62.0
            ],
            "fcf": [
                -21.0,
                -48.0,
                -78.0,
                -204.0,
                -203.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "51.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "33.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹182cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-7%",
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
                506,
                187
            ],
            "inventoryDays": [
                135,
                130
            ],
            "payableDays": [
                324,
                340
            ],
            "cycleDays": [
                317,
                -24
            ],
            "absorbed5y": -370,
            "receivables5y": -287,
            "inventory5y": -53,
            "payables5y": 179
        }
    },
    "Aether Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
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
                    "share": 4
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
                28.0,
                28.0,
                20.0,
                8.5,
                23.9,
                27.1,
                29.5,
                33.3,
                31.5,
                31.4,
                35.1,
                27.2,
                31.5
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
                168.0,
                186.0,
                132.0,
                243.0,
                364.0
            ],
            "ocf": [
                -5.0,
                -7.0,
                -16.0,
                100.0,
                142.0
            ],
            "fcf": [
                -58.0,
                -408.0,
                -264.0,
                -204.0,
                -333.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "90.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "57.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹452cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "20%",
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
                101,
                123
            ],
            "inventoryDays": [
                221,
                345
            ],
            "payableDays": [
                95,
                126
            ],
            "cycleDays": [
                227,
                341
            ],
            "absorbed5y": -703,
            "receivables5y": -271,
            "inventory5y": -460,
            "payables5y": 149
        }
    },
    "Jubilant Ingrevia": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 10
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
                10.9,
                11.6,
                9.9,
                8.5,
                10.7,
                11.9,
                13.1,
                14.0,
                13.7,
                12.0,
                12.0,
                13.8,
                15.3
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
                841.0,
                549.0,
                427.0,
                519.0,
                568.0
            ],
            "ocf": [
                453.0,
                462.0,
                430.0,
                508.0,
                524.0
            ],
            "fcf": [
                223.0,
                -19.0,
                -138.0,
                142.0,
                225.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "31.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹602cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "82%",
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
                43,
                65
            ],
            "inventoryDays": [
                117,
                140
            ],
            "payableDays": [
                103,
                150
            ],
            "cycleDays": [
                57,
                55
            ],
            "absorbed5y": -317,
            "receivables5y": -297,
            "inventory5y": -275,
            "payables5y": 228
        }
    },
    "Aarti Pharmalabs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 46
                },
                {
                    "label": "Power and factory costs",
                    "share": 17
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
                18.6,
                20.0,
                21.4,
                23.3,
                17.3,
                20.5,
                24.0,
                25.9,
                24.1,
                17.7,
                23.6,
                19.4,
                25.4
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
                207.0,
                342.0,
                386.0,
                466.0,
                369.0
            ],
            "ocf": [
                -44.0,
                250.0,
                216.0,
                330.0,
                262.0
            ],
            "fcf": [
                -185.0,
                130.0,
                17.0,
                -114.0,
                -186.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹744cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                115,
                117
            ],
            "inventoryDays": [
                272,
                280
            ],
            "payableDays": [
                123,
                146
            ],
            "cycleDays": [
                264,
                251
            ],
            "absorbed5y": -577,
            "receivables5y": -445,
            "inventory5y": -249,
            "payables5y": 114
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const pharmaCdmoValuationInputs: Record<string, ValuationInput> = {
    "Anthem Biosciences": {
        "netDebt": -1228,
        "ttmEbitda": 793.0,
        "mcapAtWriting": 51810.0,
        "peAtWriting": 87.3
    },
    "Sai Life Sciences": {
        "netDebt": 177,
        "ttmEbitda": 658.0,
        "mcapAtWriting": 34120.0,
        "peAtWriting": 92.7
    },
    "Neuland Laboratories": {
        "netDebt": -54,
        "ttmEbitda": 763.0,
        "mcapAtWriting": 28944.0,
        "peAtWriting": 58.1
    },
    "Piramal Pharma": {
        "netDebt": 4451,
        "ttmEbitda": 1010.0,
        "mcapAtWriting": 28577.0,
        "peAtWriting": null
    },
    "Cohance Lifesciences": {
        "netDebt": -189,
        "ttmEbitda": 316.0,
        "mcapAtWriting": 17685.0,
        "peAtWriting": 164.0
    },
    "Dishman Carbogen (Carbogen Amcis)": {
        "netDebt": 2085,
        "ttmEbitda": 485.0,
        "mcapAtWriting": 2668.0,
        "peAtWriting": 147.0
    },
    "Gland Pharma": {
        "netDebt": -3075,
        "ttmEbitda": 1751.0,
        "mcapAtWriting": 48565.0,
        "peAtWriting": 42.4
    },
    "Onesource Specialty": {
        "netDebt": 1406,
        "ttmEbitda": 339.0,
        "mcapAtWriting": 18348.0,
        "peAtWriting": null
    },
    "Jubilant Pharmova": {
        "netDebt": 2347,
        "ttmEbitda": 1218.0,
        "mcapAtWriting": 16794.0,
        "peAtWriting": 43.3
    },
    "Akums Drugs": {
        "netDebt": -1524,
        "ttmEbitda": 568.0,
        "mcapAtWriting": 12940.0,
        "peAtWriting": 42.4
    },
    "Innova Captab": {
        "netDebt": 340,
        "ttmEbitda": 259.0,
        "mcapAtWriting": 6864.0,
        "peAtWriting": 44.6
    },
    "Windlas Biotech": {
        "netDebt": -235,
        "ttmEbitda": 105.0,
        "mcapAtWriting": 2326.0,
        "peAtWriting": 35.0
    },
    "Senores Pharmaceutic": {
        "netDebt": 182,
        "ttmEbitda": 201.0,
        "mcapAtWriting": 6443.0,
        "peAtWriting": 51.0
    },
    "Aether Industries": {
        "netDebt": 452,
        "ttmEbitda": 386.0,
        "mcapAtWriting": 21810.0,
        "peAtWriting": 90.9
    },
    "Jubilant Ingrevia": {
        "netDebt": 602,
        "ttmEbitda": 624.0,
        "mcapAtWriting": 10016.0,
        "peAtWriting": 31.6
    },
    "Aarti Pharmalabs": {
        "netDebt": 744,
        "ttmEbitda": 426.0,
        "mcapAtWriting": 7662.0,
        "peAtWriting": 35.6
    }
};
