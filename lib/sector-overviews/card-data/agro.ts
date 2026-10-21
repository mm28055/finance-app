import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const agroCharts: Record<string, ProfileCharts> = {
    "Sumitomo Chemical India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 21
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                11.2,
                20.8,
                12.2,
                20.8,
                19.2,
                24.8,
                16.5,
                17.7,
                20.7,
                23.4,
                17.4,
                19.6,
                21.9
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                602.0,
                667.0,
                475.0,
                633.0,
                671.0
            ],
            "ocf": [
                222.0,
                389.0,
                757.0,
                452.0,
                446.0
            ],
            "fcf": [
                108.0,
                269.0,
                693.0,
                423.0,
                402.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "32.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,211cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                101,
                83
            ],
            "inventoryDays": [
                198,
                166
            ],
            "payableDays": [
                109,
                86
            ],
            "cycleDays": [
                189,
                163
            ],
            "absorbed5y": -88,
            "receivables5y": 53,
            "inventory5y": -9,
            "payables5y": -204
        }
    },
    "Chambal Fert & Chem": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Ammonia price",
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
                11.3,
                11.4,
                14.4,
                6.3,
                15.2,
                18.2,
                15.8,
                6.7,
                13.4,
                13.1,
                13.9,
                9.2,
                16.4
            ],
            "index": [
                100,
                88,
                95,
                90,
                90,
                93,
                89,
                88,
                84,
                82,
                83,
                100,
                143
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
                2265.0,
                1822.0,
                2047.0,
                2501.0,
                2694.0
            ],
            "ocf": [
                -24.0,
                3239.0,
                3327.0,
                1394.0,
                138.0
            ],
            "fcf": [
                -203.0,
                3041.0,
                2715.0,
                821.0,
                -754.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹570cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
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
                49,
                36
            ],
            "inventoryDays": [
                119,
                63
            ],
            "payableDays": [
                57,
                26
            ],
            "cycleDays": [
                111,
                73
            ],
            "absorbed5y": -2297,
            "receivables5y": -1025,
            "inventory5y": -1526,
            "payables5y": 526
        }
    },
    "Paradeep Phosphates": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 74
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
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
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Phosphoric and nitric acid price",
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
                -1.3,
                7.0,
                10.9,
                6.6,
                6.1,
                11.0,
                8.8,
                9.1,
                12.9,
                9.6,
                8.2,
                9.4,
                11.8
            ],
            "index": [
                100,
                78,
                78,
                79,
                80,
                81,
                79,
                81,
                86,
                81,
                77,
                81,
                110
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
                684.0,
                816.0,
                672.0,
                1574.0,
                2208.0
            ],
            "ocf": [
                -44.0,
                -2377.0,
                1437.0,
                1648.0,
                -1012.0
            ],
            "fcf": [
                -664.0,
                -2813.0,
                1025.0,
                1190.0,
                -1880.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹6,514cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-6%",
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
                42,
                80
            ],
            "inventoryDays": [
                133,
                105
            ],
            "payableDays": [
                132,
                70
            ],
            "cycleDays": [
                43,
                115
            ],
            "absorbed5y": -5626,
            "receivables5y": -3076,
            "inventory5y": -3433,
            "payables5y": 1610
        }
    },
    "Madhya Bharat Agro Products": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 2
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
            "input": "Sulphur price",
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
                16.1,
                14.4,
                7.4,
                9.6,
                17.0,
                12.9,
                13.7,
                12.1,
                13.9,
                13.8,
                10.8,
                10.4,
                15.9
            ],
            "index": [
                100,
                84,
                99,
                81,
                86,
                98,
                127,
                158,
                232,
                231,
                326,
                434,
                691
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
                107.0,
                210.0,
                96.0,
                145.0,
                227.0
            ],
            "ocf": [
                -72.0,
                -70.0,
                148.0,
                96.0,
                -127.0
            ],
            "fcf": [
                -85.0,
                -140.0,
                43.0,
                -12.0,
                -526.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "47.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹831cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-3%",
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
                55,
                83
            ],
            "inventoryDays": [
                200,
                96
            ],
            "payableDays": [
                46,
                36
            ],
            "cycleDays": [
                210,
                144
            ],
            "absorbed5y": -721,
            "receivables5y": -399,
            "inventory5y": -306,
            "payables5y": 111
        }
    },
    "Sharda Cropchem": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 21
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                -9.2,
                3.6,
                10.9,
                19.4,
                9.8,
                11.6,
                12.4,
                16.6,
                21.8,
                14.3,
                18.7,
                23.6,
                17.3
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                696.0,
                659.0,
                303.0,
                615.0,
                1059.0
            ],
            "ocf": [
                267.0,
                328.0,
                341.0,
                604.0,
                656.0
            ],
            "fcf": [
                33.0,
                84.0,
                69.0,
                211.0,
                159.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "10.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹581cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                157,
                166
            ],
            "inventoryDays": [
                130,
                121
            ],
            "payableDays": [
                172,
                162
            ],
            "cycleDays": [
                115,
                125
            ],
            "absorbed5y": -1121,
            "receivables5y": -1180,
            "inventory5y": -594,
            "payables5y": 726
        }
    },
    "GSFC": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 7
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Ammonia price",
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
                6.9,
                7.6,
                5.4,
                1.3,
                5.1,
                10.8,
                5.6,
                4.2,
                8.8,
                10.6,
                6.1,
                3.2,
                6.5
            ],
            "index": [
                100,
                88,
                95,
                90,
                90,
                93,
                89,
                88,
                84,
                82,
                83,
                100,
                143
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
                1321.0,
                1588.0,
                514.0,
                636.0,
                790.0
            ],
            "ocf": [
                237.0,
                924.0,
                -268.0,
                83.0,
                136.0
            ],
            "fcf": [
                142.0,
                782.0,
                -508.0,
                -297.0,
                -172.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "1.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,783cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "23%",
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
                15,
                23
            ],
            "inventoryDays": [
                95,
                92
            ],
            "payableDays": [
                55,
                34
            ],
            "cycleDays": [
                55,
                81
            ],
            "absorbed5y": -2956,
            "receivables5y": -1748,
            "inventory5y": -882,
            "payables5y": -327
        }
    },
    "Krishana Phoschem": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 72
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Rock phosphate price",
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
                10.4,
                9.9,
                14.9,
                13.3,
                14.5,
                11.8,
                16.7,
                12.0,
                10.6,
                11.8,
                16.7
            ],
            "index": [
                100,
                106,
                102,
                98,
                95,
                88,
                86,
                84,
                83,
                83,
                84,
                87,
                88
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
                56.0,
                52.0,
                128.0,
                184.0,
                298.0
            ],
            "ocf": [
                -5.0,
                -33.0,
                -83.0,
                154.0,
                -191.0
            ],
            "fcf": [
                -91.0,
                -226.0,
                -121.0,
                116.0,
                -304.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹691cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-22%",
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
                60,
                108
            ],
            "inventoryDays": [
                103,
                65
            ],
            "payableDays": [
                39,
                47
            ],
            "cycleDays": [
                124,
                126
            ],
            "absorbed5y": -802,
            "receivables5y": -687,
            "inventory5y": -271,
            "payables5y": 213
        }
    },
    "Dhanuka Agritech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                11.9,
                23.0,
                15.4,
                21.7,
                14.6,
                24.5,
                17.1,
                24.9,
                15.7,
                22.9,
                14.4,
                25.9,
                11.9
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                279.0,
                327.0,
                417.0,
                404.0
            ],
            "ocf": [
                104.0,
                136.0,
                134.0,
                263.0,
                196.0
            ],
            "fcf": [
                44.0,
                12.0,
                45.0,
                69.0,
                168.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹360cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "49%",
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
                70,
                80
            ],
            "inventoryDays": [
                148,
                173
            ],
            "payableDays": [
                74,
                66
            ],
            "cycleDays": [
                143,
                187
            ],
            "absorbed5y": -500,
            "receivables5y": -206,
            "inventory5y": -261,
            "payables5y": 84
        }
    },
    "Rallis India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 56
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
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                16.0,
                10.4,
                1.4,
                12.3,
                17.9,
                8.4,
                -4.7,
                15.7,
                17.9,
                9.3,
                -0.2,
                18.1
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                281.0,
                221.0,
                313.0,
                288.0,
                362.0
            ],
            "ocf": [
                166.0,
                217.0,
                269.0,
                295.0,
                172.0
            ],
            "fcf": [
                -19.0,
                29.0,
                187.0,
                222.0,
                127.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹489cr net cash",
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
                63,
                78
            ],
            "inventoryDays": [
                227,
                217
            ],
            "payableDays": [
                182,
                164
            ],
            "cycleDays": [
                107,
                130
            ],
            "absorbed5y": -192,
            "receivables5y": -244,
            "inventory5y": -196,
            "payables5y": 131
        }
    },
    "Insecticides (India)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
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
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                7.2,
                11.8,
                7.3,
                3.3,
                11.0,
                14.4,
                8.7,
                7.8,
                12.3,
                13.9,
                7.0,
                5.9,
                11.1
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                122.0,
                162.0,
                221.0,
                227.0
            ],
            "ocf": [
                135.0,
                -11.0,
                187.0,
                93.0,
                100.0
            ],
            "fcf": [
                68.0,
                -98.0,
                138.0,
                56.0,
                5.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹41cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "56%",
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
                70,
                83
            ],
            "inventoryDays": [
                228,
                215
            ],
            "payableDays": [
                117,
                121
            ],
            "cycleDays": [
                181,
                177
            ],
            "absorbed5y": -251,
            "receivables5y": -244,
            "inventory5y": -120,
            "payables5y": 77
        }
    },
    "Meghmani Organics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                -5.2,
                2.1,
                -2.3,
                0.5,
                1.4,
                5.7,
                7.2,
                11.8,
                10.9,
                9.0,
                7.5,
                4.2,
                18.0
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                379.0,
                342.0,
                -19.0,
                144.0,
                178.0
            ],
            "ocf": [
                65.0,
                204.0,
                250.0,
                66.0,
                222.0
            ],
            "fcf": [
                -179.0,
                -261.0,
                -16.0,
                -23.0,
                177.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹701cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "79%",
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
                79,
                113
            ],
            "inventoryDays": [
                161,
                145
            ],
            "payableDays": [
                144,
                149
            ],
            "cycleDays": [
                96,
                110
            ],
            "absorbed5y": -250,
            "receivables5y": -230,
            "inventory5y": -116,
            "payables5y": 203
        }
    },
    "India Pesticides": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                11.4,
                13.4,
                21.9,
                3.2,
                12.7,
                14.8,
                15.7,
                15.5,
                16.4,
                16.9,
                16.9,
                15.8,
                13.9
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                197.0,
                87.0,
                120.0,
                174.0
            ],
            "ocf": [
                76.0,
                45.0,
                115.0,
                3.0,
                62.0
            ],
            "fcf": [
                -6.0,
                -31.0,
                38.0,
                -61.0,
                -29.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹26cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "38%",
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
                126,
                124
            ],
            "inventoryDays": [
                163,
                191
            ],
            "payableDays": [
                110,
                92
            ],
            "cycleDays": [
                179,
                224
            ],
            "absorbed5y": -350,
            "receivables5y": -159,
            "inventory5y": -218,
            "payables5y": 74
        }
    },
    "Punjab Chem. & Corp": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
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
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Pesticides (technical and formulated) price",
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
                14.5,
                12.1,
                6.6,
                11.6,
                10.7,
                8.9,
                12.9,
                10.6,
                10.2,
                12.1,
                13.4,
                11.8
            ],
            "index": [
                100,
                97,
                96,
                93,
                90,
                91,
                91,
                89,
                87,
                87,
                86,
                85,
                91
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
                140.0,
                123.0,
                113.0,
                99.0,
                118.0
            ],
            "ocf": [
                34.0,
                58.0,
                30.0,
                25.0,
                86.0
            ],
            "fcf": [
                1.3800000000000026,
                20.65,
                -3.240000000000002,
                -8.61,
                40.26
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹139cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "39%",
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
                44,
                72
            ],
            "inventoryDays": [
                99,
                145
            ],
            "payableDays": [
                85,
                102
            ],
            "cycleDays": [
                58,
                115
            ],
            "absorbed5y": -251,
            "receivables5y": -115,
            "inventory5y": -144,
            "payables5y": 28
        }
    },
    "Dharmaj Crop Guard": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
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
            "input": "Pesticides (technical and formulated) price",
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
                10.6,
                10.9,
                5.7,
                1.9,
                13.9,
                9.2,
                3.7,
                4.7,
                14.9
            ],
            "index": [
                100,
                101,
                101,
                99,
                97,
                97,
                96,
                95,
                101
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                63.0,
                75.0,
                102.0
            ],
            "ocf": [
                7.0,
                39.0,
                28.0
            ],
            "fcf": [
                -182.91,
                6.880000000000003,
                1.0799999999999983
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹126cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "9%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                66,
                90
            ],
            "inventoryDays": [
                66,
                86
            ],
            "payableDays": [
                47,
                89
            ],
            "cycleDays": [
                84,
                87
            ],
            "absorbed5y": -157,
            "receivables5y": -216,
            "inventory5y": -135,
            "payables5y": null
        }
    },
    "GSP Crop Science": {
        "stats": [
            {
                "label": "P/E",
                "value": "20.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.9x",
                "note": "Market value plus March 2026 net debt (₹109cr), ÷ operating profit over the last four quarters (₹185cr)."
            },
            {
                "label": "Net debt",
                "value": "₹109cr",
                "note": "Borrowings (₹262cr) minus cash and bank (about ₹153cr, per ICRA), March 2026; loans were repaid further in Q1 FY27."
            },
            {
                "label": "Operating margin FY26",
                "value": "12%"
            },
            {
                "label": "Debtor days FY26",
                "value": "133"
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Staff, power and other costs",
                    "share": 24
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Materials from FY26 gross profit (data provider); operating profit from Screener; the rest is the balance."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                125,
                133
            ],
            "inventoryDays": [
                182,
                146
            ],
            "payableDays": [
                165,
                158
            ],
            "cycleDays": [
                142,
                121
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
                129,
                79,
                124,
                150,
                185
            ],
            "ocf": [
                -44,
                104,
                207,
                38,
                59
            ],
            "fcf": [
                -93,
                70,
                179,
                -34,
                -17
            ]
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const agroValuationInputs: Record<string, ValuationInput> = {
    "Sumitomo Chemical India": {
        "netDebt": -1211,
        "ttmEbitda": 685.0,
        "mcapAtWriting": 23193.0,
        "peAtWriting": 40.6
    },
    "Chambal Fert & Chem": {
        "netDebt": -570,
        "ttmEbitda": 2743.0,
        "mcapAtWriting": 16825.0,
        "peAtWriting": 8.73
    },
    "Paradeep Phosphates": {
        "netDebt": 6514,
        "ttmEbitda": 2292.0,
        "mcapAtWriting": 16022.0,
        "peAtWriting": 14.7
    },
    "Madhya Bharat Agro Products": {
        "netDebt": 831,
        "ttmEbitda": 235.0,
        "mcapAtWriting": 7339.0,
        "peAtWriting": 47.4
    },
    "Sharda Cropchem": {
        "netDebt": -581,
        "ttmEbitda": 1047.0,
        "mcapAtWriting": 6828.0,
        "peAtWriting": 10.9
    },
    "GSFC": {
        "netDebt": -4783,
        "ttmEbitda": 830.0,
        "mcapAtWriting": 6198.0,
        "peAtWriting": 8.95
    },
    "Krishana Phoschem": {
        "netDebt": 691,
        "ttmEbitda": 322.0,
        "mcapAtWriting": 5816.0,
        "peAtWriting": 29.6
    },
    "Dhanuka Agritech": {
        "netDebt": -360,
        "ttmEbitda": 375.0,
        "mcapAtWriting": 4389.0,
        "peAtWriting": 16.4
    },
    "Rallis India": {
        "netDebt": -489,
        "ttmEbitda": 396.0,
        "mcapAtWriting": 3941.0,
        "peAtWriting": 17.3
    },
    "Insecticides (India)": {
        "netDebt": 41,
        "ttmEbitda": 210.0,
        "mcapAtWriting": 1771.0,
        "peAtWriting": 14.2
    },
    "Meghmani Organics": {
        "netDebt": 701,
        "ttmEbitda": 207.0,
        "mcapAtWriting": 1567.0,
        "peAtWriting": 24.4
    },
    "India Pesticides": {
        "netDebt": -26,
        "ttmEbitda": 164.0,
        "mcapAtWriting": 1537.0,
        "peAtWriting": 14.3
    },
    "Punjab Chem. & Corp": {
        "netDebt": 139,
        "ttmEbitda": 124.0,
        "mcapAtWriting": 1314.0,
        "peAtWriting": 19.6
    },
    "Dharmaj Crop Guard": {
        "netDebt": 126,
        "ttmEbitda": 107.0,
        "mcapAtWriting": 1014.0,
        "peAtWriting": 16.9
    },
    "GSP Crop Science": {
        "netDebt": 109,
        "ttmEbitda": 185,
        "mcapAtWriting": 2101,
        "peAtWriting": 20.1
    }
};
