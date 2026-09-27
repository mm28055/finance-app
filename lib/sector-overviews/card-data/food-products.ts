import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const foodProductsCharts: Record<string, ProfileCharts> = {
    "Zydus Wellness": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 40
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 36
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
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                345.0,
                337.0,
                308.0,
                380.0,
                510.0
            ],
            "ocf": [
                237.0,
                92.0,
                246.0,
                380.0,
                226.0
            ],
            "fcf": [
                162.0,
                47.0,
                218.0,
                314.0,
                124.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "74.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "33.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,087cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                26,
                35
            ],
            "inventoryDays": [
                135,
                178
            ],
            "payableDays": [
                136,
                107
            ],
            "cycleDays": [
                25,
                106
            ],
            "absorbed5y": -628,
            "receivables5y": -252,
            "inventory5y": -218,
            "payables5y": -83
        }
    },
    "LT Foods": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 65
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Basmati rice price",
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
                12.0,
                12.1,
                12.3,
                11.8,
                11.6,
                10.9,
                11.0,
                11.6,
                10.8,
                11.2,
                11.2,
                9.2,
                11.2
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                96,
                95,
                94,
                90,
                89,
                90,
                93,
                99
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
                592.0,
                701.0,
                938.0,
                979.0,
                1159.0
            ],
            "ocf": [
                517.0,
                258.0,
                757.0,
                462.0,
                910.0
            ],
            "fcf": [
                359.0,
                104.0,
                554.0,
                223.0,
                550.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,273cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                41,
                29
            ],
            "inventoryDays": [
                247,
                256
            ],
            "payableDays": [
                74,
                104
            ],
            "cycleDays": [
                215,
                180
            ],
            "absorbed5y": -852,
            "receivables5y": -345,
            "inventory5y": -2622,
            "payables5y": 1466
        }
    },
    "Bikaji Foods": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 56
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 14
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
                140.0,
                214.0,
                392.0,
                330.0,
                411.0
            ],
            "ocf": [
                57.0,
                171.0,
                245.0,
                193.0,
                304.0
            ],
            "fcf": [
                -52.0,
                80.0,
                117.0,
                70.0,
                126.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "55.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹17cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "65%",
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
                17,
                13
            ],
            "inventoryDays": [
                27,
                25
            ],
            "payableDays": [
                16,
                14
            ],
            "cycleDays": [
                28,
                24
            ],
            "absorbed5y": -264,
            "receivables5y": -54,
            "inventory5y": -47,
            "payables5y": -6
        }
    },
    "CCL Products": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 65
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Coffee price",
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
                16.2,
                18.1,
                16.7,
                16.2,
                16.8,
                18.6,
                16.4,
                19.5,
                15.1,
                17.5,
                17.6,
                15.7,
                16.2
            ],
            "index": [
                100,
                100,
                92,
                108,
                131,
                132,
                143,
                187,
                186,
                186,
                189,
                164,
                156
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
                400.0,
                445.0,
                555.0,
                734.0
            ],
            "ocf": [
                116.0,
                173.0,
                55.0,
                290.0,
                858.0
            ],
            "fcf": [
                -74.0,
                -159.0,
                -458.0,
                -128.0,
                788.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,103cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                80,
                67
            ],
            "inventoryDays": [
                262,
                131
            ],
            "payableDays": [
                23,
                32
            ],
            "cycleDays": [
                319,
                166
            ],
            "absorbed5y": -730,
            "receivables5y": -392,
            "inventory5y": -722,
            "payables5y": 232
        }
    },
    "Godrej Agrovet": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 74
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 9
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Maize (animal feed) price",
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
                7.7,
                7.8,
                6.8,
                6.9,
                9.6,
                9.1,
                9.0,
                6.9,
                10.3,
                8.3,
                8.9,
                6.0,
                8.4
            ],
            "index": [
                100,
                100,
                102,
                106,
                108,
                115,
                114,
                117,
                114,
                113,
                107,
                103,
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
                669.0,
                523.0,
                704.0,
                821.0,
                864.0
            ],
            "ocf": [
                -120.0,
                874.0,
                678.0,
                969.0,
                1281.0
            ],
            "fcf": [
                -391.0,
                515.0,
                294.0,
                744.0,
                984.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,272cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "103%",
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
                42,
                24
            ],
            "inventoryDays": [
                83,
                65
            ],
            "payableDays": [
                40,
                80
            ],
            "cycleDays": [
                84,
                10
            ],
            "absorbed5y": 545,
            "receivables5y": 40,
            "inventory5y": -379,
            "payables5y": 888
        }
    },
    "Manorama Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 53
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 8
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
                "FY25",
                "FY26"
            ],
            "ebitda": [
                186.0,
                361.0
            ],
            "ocf": [
                -57.0,
                250.0
            ],
            "fcf": [
                -89.0,
                195.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "45.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹262cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
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
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                48,
                17
            ],
            "inventoryDays": [
                518,
                369
            ],
            "payableDays": [
                14,
                46
            ],
            "cycleDays": [
                552,
                340
            ],
            "absorbed5y": -278,
            "receivables5y": -21,
            "inventory5y": -338,
            "payables5y": 50
        }
    },
    "Avanti Feeds": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 71
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 5
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                314.0,
                395.0,
                460.0,
                634.0,
                750.0
            ],
            "ocf": [
                -212.0,
                451.0,
                260.0,
                584.0,
                505.0
            ],
            "fcf": [
                -267.0,
                291.0,
                129.0,
                431.0,
                424.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,687cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "62%",
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
                8,
                9
            ],
            "inventoryDays": [
                85,
                79
            ],
            "payableDays": [
                26,
                20
            ],
            "cycleDays": [
                67,
                67
            ],
            "absorbed5y": -294,
            "receivables5y": -77,
            "inventory5y": -386,
            "payables5y": 159
        }
    },
    "KRBL": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 68
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Basmati rice price",
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
                17.8,
                16.1,
                12.4,
                13.5,
                9.8,
                9.7,
                11.6,
                15.5,
                12.2,
                15.0,
                15.5,
                15.0,
                20.6
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                96,
                95,
                94,
                90,
                89,
                90,
                93,
                99
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
                662.0,
                939.0,
                802.0,
                674.0,
                902.0
            ],
            "ocf": [
                561.0,
                -360.0,
                224.0,
                961.0,
                933.0
            ],
            "fcf": [
                519.0,
                -419.0,
                141.0,
                865.0,
                865.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹812cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
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
                25,
                28
            ],
            "inventoryDays": [
                336,
                329
            ],
            "payableDays": [
                22,
                12
            ],
            "cycleDays": [
                339,
                344
            ],
            "absorbed5y": -777,
            "receivables5y": -320,
            "inventory5y": -749,
            "payables5y": -73
        }
    },
    "Hindustan Foods": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 63
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 20
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
                    "share": 9
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
                113.0,
                173.0,
                222.0,
                300.0,
                363.0
            ],
            "ocf": [
                36.0,
                99.0,
                87.0,
                118.0,
                100.0
            ],
            "fcf": [
                -104.0,
                -67.0,
                -46.0,
                -160.0,
                -241.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "45.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,036cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "38%",
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
                13,
                22
            ],
            "inventoryDays": [
                56,
                131
            ],
            "payableDays": [
                64,
                86
            ],
            "cycleDays": [
                5,
                68
            ],
            "absorbed5y": -621,
            "receivables5y": -119,
            "inventory5y": -687,
            "payables5y": 305
        }
    },
    "Mrs Bectors Food": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 55
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Wheat flour price",
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
                15.5,
                15.7,
                14.2,
                14.5,
                14.6,
                14.1,
                12.4,
                12.6,
                12.3,
                12.5,
                12.8,
                12.8,
                13.1
            ],
            "index": [
                100,
                105,
                110,
                108,
                106,
                113,
                122,
                124,
                113,
                118,
                117,
                116,
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
                123.0,
                175.0,
                243.0,
                251.0,
                258.0
            ],
            "ocf": [
                84.0,
                164.0,
                153.0,
                161.0,
                218.0
            ],
            "fcf": [
                24.0,
                55.0,
                -62.0,
                -98.0,
                4.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "44.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹40cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                28,
                31
            ],
            "inventoryDays": [
                52,
                41
            ],
            "payableDays": [
                38,
                38
            ],
            "cycleDays": [
                42,
                34
            ],
            "absorbed5y": -114,
            "receivables5y": -99,
            "inventory5y": -70,
            "payables5y": 61
        }
    },
    "Kaveri Seed Company": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 52
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 24
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
                252.0,
                286.0,
                291.0,
                337.0
            ],
            "ocf": [
                110.0,
                297.0,
                389.0,
                197.0,
                -6.0
            ],
            "fcf": [
                63.0,
                187.0,
                289.0,
                108.0,
                -155.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹443cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "24%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                42,
                29
            ],
            "inventoryDays": [
                517,
                608
            ],
            "payableDays": [
                156,
                241
            ],
            "cycleDays": [
                403,
                396
            ],
            "absorbed5y": -304,
            "receivables5y": -26,
            "inventory5y": -541,
            "payables5y": 121
        }
    },
    "Gopal Snacks": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 73
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 7
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
                95.0,
                196.0,
                168.0,
                105.0,
                101.0
            ],
            "ocf": [
                59.0,
                122.0,
                69.0,
                68.0,
                46.0
            ],
            "fcf": [
                -16.0,
                97.0,
                38.0,
                -17.0,
                -107.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹153cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "55%",
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
                4,
                14
            ],
            "inventoryDays": [
                30,
                64
            ],
            "payableDays": [
                2,
                11
            ],
            "cycleDays": [
                31,
                66
            ],
            "absorbed5y": -204,
            "receivables5y": -51,
            "inventory5y": -123,
            "payables5y": 17
        }
    },
    "ADF Foods": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 31
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 24
                },
                {
                    "label": "Operating profit",
                    "share": 19
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
                81.0,
                105.0,
                98.0,
                131.0
            ],
            "ocf": [
                34.0,
                51.0,
                70.0,
                37.0,
                58.0
            ],
            "fcf": [
                -1.0,
                24.0,
                55.0,
                -4.0,
                -25.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "30.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹32cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "52%",
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
                61,
                77
            ],
            "inventoryDays": [
                156,
                205
            ],
            "payableDays": [
                65,
                120
            ],
            "cycleDays": [
                153,
                162
            ],
            "absorbed5y": -137,
            "receivables5y": -72,
            "inventory5y": -47,
            "payables5y": 35
        }
    },
    "Vintage Coffee": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 73
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Coffee price",
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
                23.8,
                20.0,
                18.4,
                16.7,
                18.2,
                13.9,
                18.2,
                18.1,
                17.6,
                16.2,
                19.2,
                18.8,
                19.9
            ],
            "index": [
                100,
                100,
                92,
                108,
                131,
                132,
                143,
                187,
                186,
                186,
                189,
                164,
                156
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
                -4.0,
                15.0,
                25.0,
                53.0,
                100.0
            ],
            "ocf": [
                -27.0,
                11.0,
                -36.0,
                -23.0,
                15.0
            ],
            "fcf": [
                -184.0,
                11.0,
                -38.0,
                -30.0,
                -142.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹38cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-32%",
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
                124,
                88
            ],
            "inventoryDays": [
                676,
                94
            ],
            "payableDays": [
                127,
                3
            ],
            "cycleDays": [
                608,
                178
            ],
            "absorbed5y": -223,
            "receivables5y": -133,
            "inventory5y": -104,
            "payables5y": 1
        }
    },
    "Venkys India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 75
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 5
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Maize (poultry feed) price",
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
                3.2,
                5.5,
                -0.7,
                5.6,
                12.7,
                1.8,
                3.3,
                3.0,
                2.8,
                -3.9,
                7.3,
                11.8,
                6.2
            ],
            "index": [
                100,
                100,
                102,
                106,
                108,
                115,
                114,
                117,
                114,
                113,
                107,
                103,
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
                246.0,
                112.0,
                123.0,
                172.0,
                192.0
            ],
            "ocf": [
                5.0,
                86.0,
                82.0,
                66.0,
                191.0
            ],
            "fcf": [
                -25.0,
                44.0,
                32.0,
                20.0,
                150.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹76cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                53,
                53
            ],
            "inventoryDays": [
                19,
                43
            ],
            "payableDays": [
                41,
                43
            ],
            "cycleDays": [
                31,
                53
            ],
            "absorbed5y": -266,
            "receivables5y": -217,
            "inventory5y": -110,
            "payables5y": 28
        }
    },
    "Apex Frozen Foods": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 62
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 6
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
                86.0,
                83.0,
                40.0,
                25.0,
                56.0
            ],
            "ocf": [
                36.0,
                121.0,
                11.0,
                54.0,
                96.0
            ],
            "fcf": [
                25.36,
                98.32,
                -1.1999999999999993,
                44.68,
                89.36
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹13cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "110%",
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
                52,
                43
            ],
            "inventoryDays": [
                120,
                105
            ],
            "payableDays": [
                12,
                18
            ],
            "cycleDays": [
                160,
                129
            ],
            "absorbed5y": 20,
            "receivables5y": 31,
            "inventory5y": -7,
            "payables5y": -9
        }
    },
    "Freshara Agro": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 54
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 23
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
                -2.0,
                17.0,
                12.0,
                40.0,
                47.0
            ],
            "ocf": [
                null,
                null,
                -98.0,
                -2.0,
                -21.0
            ],
            "fcf": [
                null,
                null,
                -102.89,
                -24.41,
                -43.34
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹122cr",
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
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                396,
                142
            ],
            "inventoryDays": [
                262,
                224
            ],
            "payableDays": [
                172,
                98
            ],
            "cycleDays": [
                486,
                268
            ],
            "absorbed5y": -222,
            "receivables5y": -136,
            "inventory5y": -105,
            "payables5y": 46
        }
    },
    "Ganesh Consumer Prod": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials and packaging",
                    "share": 75
                },
                {
                    "label": "Power, fuel and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 9
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Wheat flour price",
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
                12.7,
                8.5,
                7.8,
                5.9,
                10.3,
                10.0,
                10.8,
                8.3,
                11.1
            ],
            "index": [
                100,
                107,
                114,
                116,
                106,
                111,
                110,
                109,
                104
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
                48.0,
                56.0,
                64.0,
                73.0,
                86.0
            ],
            "ocf": [
                58.0,
                -13.0,
                88.0,
                46.0,
                80.0
            ],
            "fcf": [
                8.380000000000003,
                -39.35,
                61.93,
                28.27,
                35.3
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹104cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "79%",
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
                5,
                5
            ],
            "inventoryDays": [
                51,
                45
            ],
            "payableDays": [
                22,
                22
            ],
            "cycleDays": [
                34,
                29
            ],
            "absorbed5y": -12,
            "receivables5y": -8,
            "inventory5y": -18,
            "payables5y": 21
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const foodProductsValuationInputs: Record<string, ValuationInput> = {
    "Zydus Wellness": {
        "netDebt": 3087,
        "ttmEbitda": 596.0,
        "mcapAtWriting": 16563.0,
        "peAtWriting": 74.8
    },
    "LT Foods": {
        "netDebt": 1273,
        "ttmEbitda": 1245.0,
        "mcapAtWriting": 14666.0,
        "peAtWriting": 22.9
    },
    "Bikaji Foods": {
        "netDebt": -17,
        "ttmEbitda": 413.0,
        "mcapAtWriting": 14391.0,
        "peAtWriting": 55.0
    },
    "CCL Products": {
        "netDebt": 1103,
        "ttmEbitda": 767.0,
        "mcapAtWriting": 13946.0,
        "peAtWriting": 32.2
    },
    "Godrej Agrovet": {
        "netDebt": 1272,
        "ttmEbitda": 834.0,
        "mcapAtWriting": 12657.0,
        "peAtWriting": 27.0
    },
    "Manorama Industries": {
        "netDebt": 262,
        "ttmEbitda": 393.0,
        "mcapAtWriting": 11822.0,
        "peAtWriting": 45.8
    },
    "Avanti Feeds": {
        "netDebt": -1687,
        "ttmEbitda": 640.0,
        "mcapAtWriting": 10261.0,
        "peAtWriting": 19.1
    },
    "KRBL": {
        "netDebt": -812,
        "ttmEbitda": 992.0,
        "mcapAtWriting": 9125.0,
        "peAtWriting": 12.0
    },
    "Hindustan Foods": {
        "netDebt": 1036,
        "ttmEbitda": 380.0,
        "mcapAtWriting": 7428.0,
        "peAtWriting": 45.9
    },
    "Mrs Bectors Food": {
        "netDebt": -40,
        "ttmEbitda": 271.0,
        "mcapAtWriting": 6618.0,
        "peAtWriting": 44.5
    },
    "Kaveri Seed Company": {
        "netDebt": -443,
        "ttmEbitda": 293.0,
        "mcapAtWriting": 4139.0,
        "peAtWriting": 16.6
    },
    "Gopal Snacks": {
        "netDebt": 153,
        "ttmEbitda": 118.0,
        "mcapAtWriting": 3253.0,
        "peAtWriting": 59.2
    },
    "ADF Foods": {
        "netDebt": -32,
        "ttmEbitda": 137.0,
        "mcapAtWriting": 2973.0,
        "peAtWriting": 30.7
    },
    "Vintage Coffee": {
        "netDebt": 38,
        "ttmEbitda": 113.0,
        "mcapAtWriting": 2698.0,
        "peAtWriting": 34.3
    },
    "Venkys India": {
        "netDebt": 76,
        "ttmEbitda": 238.0,
        "mcapAtWriting": 2328.0,
        "peAtWriting": 13.4
    },
    "Apex Frozen Foods": {
        "netDebt": -13,
        "ttmEbitda": 68.0,
        "mcapAtWriting": 1086.0,
        "peAtWriting": 21.9
    },
    "Freshara Agro": {
        "netDebt": 122,
        "ttmEbitda": 47.0,
        "mcapAtWriting": 963.0,
        "peAtWriting": 26.9
    },
    "Ganesh Consumer Prod": {
        "netDebt": -104,
        "ttmEbitda": 85.0,
        "mcapAtWriting": 646.0,
        "peAtWriting": 14.2
    }
};
