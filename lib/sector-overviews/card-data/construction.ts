import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const constructionCharts: Record<string, ProfileCharts> = {
    "NBCC": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Site, subcontract and running costs",
                    "share": 90
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
                    "share": 5
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
                207.0,
                345.0,
                517.0,
                635.0,
                619.0
            ],
            "ocf": [
                80.0,
                -374.0,
                -6.0,
                661.0,
                439.0
            ],
            "fcf": [
                74.0,
                -385.0,
                -51.0,
                341.0,
                402.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹6,535cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "34%",
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
                96,
                144
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
                96,
                144
            ],
            "absorbed5y": -809,
            "receivables5y": -3640,
            "inventory5y": -52,
            "payables5y": 3752
        }
    },
    "Cemindia Projects": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 33
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 42
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
                    "share": 10
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
                293.0,
                400.0,
                745.0,
                860.0,
                1016.0
            ],
            "ocf": [
                339.0,
                471.0,
                704.0,
                184.0,
                500.0
            ],
            "fcf": [
                228.0,
                53.0,
                348.0,
                -44.0,
                236.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹52cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                60,
                47
            ],
            "inventoryDays": [
                118,
                82
            ],
            "payableDays": [
                276,
                238
            ],
            "cycleDays": [
                -99,
                -110
            ],
            "absorbed5y": -837,
            "receivables5y": -1324,
            "inventory5y": -410,
            "payables5y": 1500
        }
    },
    "IRB Infra.Devl.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 9
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 29
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 52
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Bitumen price",
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
                44.3,
                41.2,
                41.6,
                36.6,
                43.4,
                43.1,
                48.6,
                46.4,
                45.4,
                52.8,
                54.6,
                56.2,
                54.0
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                2575.0,
                3130.0,
                3022.0,
                3472.0,
                4008.0
            ],
            "ocf": [
                364.0,
                1764.0,
                4054.0,
                1971.0,
                2098.0
            ],
            "fcf": [
                -1026.0,
                1333.0,
                3815.0,
                1772.0,
                1366.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹18,116cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "52%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                62,
                7
            ],
            "inventoryDays": [
                246,
                199
            ],
            "payableDays": [
                296,
                139
            ],
            "cycleDays": [
                13,
                67
            ],
            "absorbed5y": -4291,
            "receivables5y": 167,
            "inventory5y": -46,
            "payables5y": -410
        }
    },
    "Engineers India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Site, subcontract and running costs",
                    "share": 48
                },
                {
                    "label": "Staff",
                    "share": 27
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                346.0,
                310.0,
                299.0,
                514.0,
                699.0
            ],
            "ocf": [
                48.0,
                -113.0,
                222.0,
                117.0,
                319.0
            ],
            "fcf": [
                22.0,
                -148.0,
                188.0,
                75.0,
                250.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,953cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "27%",
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
                48,
                45
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
                48,
                45
            ],
            "absorbed5y": -891,
            "receivables5y": -993,
            "inventory5y": 2,
            "payables5y": 99
        }
    },
    "Welspun Enterp": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 17
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 51
                },
                {
                    "label": "Staff",
                    "share": 6
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
            "input": "Bitumen price",
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
                12.8,
                17.8,
                13.5,
                17.5,
                15.6,
                17.5,
                17.4,
                21.4,
                21.9,
                19.6,
                19.9,
                19.5
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                147.0,
                247.0,
                427.0,
                631.0,
                746.0
            ],
            "ocf": [
                287.0,
                345.0,
                -344.0,
                -273.0,
                112.0
            ],
            "fcf": [
                -149.0,
                188.0,
                -415.0,
                -325.0,
                78.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "6%",
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
                37,
                51
            ],
            "inventoryDays": [
                81,
                101
            ],
            "payableDays": [
                451,
                575
            ],
            "cycleDays": [
                37,
                -422
            ],
            "absorbed5y": -1444,
            "receivables5y": -2607,
            "inventory5y": -75,
            "payables5y": 1238
        }
    },
    "Ircon Intl.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 9
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 79
                },
                {
                    "label": "Staff",
                    "share": 3
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                585.0,
                704.0,
                1108.0,
                847.0,
                768.0
            ],
            "ocf": [
                1414.0,
                -278.0,
                -79.0,
                -1110.0,
                -618.0
            ],
            "fcf": [
                1373.0,
                -378.0,
                -927.0,
                -2162.0,
                -1151.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹515cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-17%",
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
                34,
                56
            ],
            "inventoryDays": [
                50,
                6
            ],
            "payableDays": [
                687,
                530
            ],
            "cycleDays": [
                34,
                -468
            ],
            "absorbed5y": -3361,
            "receivables5y": -768,
            "inventory5y": 92,
            "payables5y": 443
        }
    },
    "Rites": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 9
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 38
                },
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 7
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
                729.0,
                759.0,
                661.0,
                543.0,
                583.0
            ],
            "ocf": [
                310.0,
                560.0,
                432.0,
                637.0,
                327.0
            ],
            "fcf": [
                168.0,
                424.0,
                295.0,
                504.0,
                265.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "23.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,043cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
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
                101,
                141
            ],
            "inventoryDays": [
                81,
                63
            ],
            "payableDays": [
                105,
                520
            ],
            "cycleDays": [
                77,
                -317
            ],
            "absorbed5y": -267,
            "receivables5y": -382,
            "inventory5y": 251,
            "payables5y": 23
        }
    },
    "Afcons Infra": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 24
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 43
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 10
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
                943.0,
                1333.0,
                1377.0,
                1361.0,
                1241.0
            ],
            "ocf": [
                610.0,
                1215.0,
                707.0,
                -132.0,
                -127.0
            ],
            "fcf": [
                253.0,
                296.0,
                -9.0,
                -476.0,
                -499.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "45.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,741cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "36%",
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
                76,
                105
            ],
            "inventoryDays": [
                146,
                130
            ],
            "payableDays": [
                310,
                519
            ],
            "cycleDays": [
                -88,
                -283
            ],
            "absorbed5y": -4270,
            "receivables5y": -1134,
            "inventory5y": -79,
            "payables5y": 1173
        }
    },
    "NCC": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 33
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 52
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
                1028.0,
                1459.0,
                1769.0,
                1918.0,
                1836.0
            ],
            "ocf": [
                1416.0,
                1100.0,
                1359.0,
                742.0,
                -459.0
            ],
            "fcf": [
                1197.0,
                753.0,
                1074.0,
                422.0,
                -1414.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,168cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "52%",
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
                83,
                66
            ],
            "inventoryDays": [
                117,
                129
            ],
            "payableDays": [
                447,
                478
            ],
            "cycleDays": [
                -246,
                -283
            ],
            "absorbed5y": -3139,
            "receivables5y": -1189,
            "inventory5y": -1557,
            "payables5y": 5228
        }
    },
    "GR Infraprojects": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 5
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 65
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Bitumen price",
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
                24.5,
                24.8,
                23.8,
                21.7,
                18.1,
                25.3,
                21.8,
                23.9,
                20.0,
                24.2,
                20.3,
                14.7,
                16.8
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                1735.0,
                2554.0,
                2122.0,
                1636.0,
                1622.0
            ],
            "ocf": [
                166.0,
                -363.0,
                -1590.0,
                -2042.0,
                -2811.0
            ],
            "fcf": [
                -269.0,
                -660.0,
                -1710.0,
                -2198.0,
                -3044.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,660cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-69%",
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
                24,
                32
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
                24,
                32
            ],
            "absorbed5y": -15809,
            "receivables5y": -542,
            "inventory5y": 74,
            "payables5y": 430
        }
    },
    "Power Mech Proj.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 14
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 60
                },
                {
                    "label": "Staff",
                    "share": 12
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
                287.0,
                395.0,
                493.0,
                602.0,
                702.0
            ],
            "ocf": [
                175.0,
                182.0,
                205.0,
                1.0,
                387.0
            ],
            "fcf": [
                131.0,
                128.0,
                113.0,
                -162.0,
                52.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹171cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "38%",
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
                90,
                93
            ],
            "inventoryDays": [
                90,
                111
            ],
            "payableDays": [
                423,
                493
            ],
            "cycleDays": [
                90,
                -289
            ],
            "absorbed5y": -1009,
            "receivables5y": -1014,
            "inventory5y": -149,
            "payables5y": 661
        }
    },
    "Dilip Buildcon": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 29
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 46
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Bitumen price",
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
                12.0,
                12.4,
                9.8,
                15.3,
                21.4,
                18.4,
                21.4,
                19.9,
                24.5,
                17.9,
                17.0,
                18.0
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                776.0,
                957.0,
                1421.0,
                2159.0,
                1766.0
            ],
            "ocf": [
                1624.0,
                2845.0,
                1080.0,
                131.0,
                1204.0
            ],
            "fcf": [
                -2360.0,
                -1071.0,
                -4474.0,
                -4134.0,
                -2034.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹7,713cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "97%",
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
                37,
                67
            ],
            "inventoryDays": [
                378,
                474
            ],
            "payableDays": [
                249,
                355
            ],
            "cycleDays": [
                165,
                187
            ],
            "absorbed5y": -688,
            "receivables5y": -597,
            "inventory5y": 38,
            "payables5y": -319
        }
    },
    "Ceigall India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 81
                },
                {
                    "label": "Staff",
                    "share": 1
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
            "input": "Bitumen price",
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
                17.1,
                20.1,
                17.4,
                17.5,
                15.9,
                14.8,
                12.6,
                13.0,
                14.1,
                14.0,
                16.1,
                14.7
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                296.0,
                518.0,
                518.0,
                585.0
            ],
            "ocf": [
                -135.0,
                -73.0,
                -211.0,
                -520.0,
                -91.0
            ],
            "fcf": [
                -220.0,
                -244.0,
                -377.0,
                -688.0,
                -169.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹932cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-49%",
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
                31,
                58
            ],
            "inventoryDays": [
                34,
                11
            ],
            "payableDays": [
                50,
                164
            ],
            "cycleDays": [
                15,
                -95
            ],
            "absorbed5y": -2708,
            "receivables5y": -550,
            "inventory5y": -70,
            "payables5y": 1391
        }
    },
    "Man Infra": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 1
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 48
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 19
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                248.0,
                414.0,
                326.0,
                301.0,
                129.0
            ],
            "ocf": [
                187.0,
                448.0,
                573.0,
                133.0,
                -50.0
            ],
            "fcf": [
                187.0,
                441.0,
                573.0,
                130.0,
                -55.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹371cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
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
                48,
                41
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
                690,
                41
            ],
            "absorbed5y": 222,
            "receivables5y": 346,
            "inventory5y": -329,
            "payables5y": 198
        }
    },
    "Sterling and Wilson": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Site, subcontract and running costs",
                    "share": 91
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 4
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
                -903.0,
                -1124.0,
                -7.0,
                264.0,
                314.0
            ],
            "ocf": [
                -1690.0,
                -1829.0,
                538.0,
                38.0,
                -257.0
            ],
            "fcf": [
                -1703.0,
                -1838.0,
                537.0,
                34.0,
                -268.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹657cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
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
                55,
                87
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
                55,
                87
            ],
            "absorbed5y": -1913,
            "receivables5y": -941,
            "inventory5y": 0,
            "payables5y": 809
        }
    },
    "Ahluwalia Contr.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 42
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 38
                },
                {
                    "label": "Staff",
                    "share": 10
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                257.0,
                304.0,
                388.0,
                342.0,
                435.0
            ],
            "ocf": [
                66.0,
                301.0,
                257.0,
                359.0,
                281.0
            ],
            "fcf": [
                38.0,
                195.0,
                143.0,
                170.0,
                15.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹744cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                60,
                59
            ],
            "inventoryDays": [
                72,
                66
            ],
            "payableDays": [
                183,
                157
            ],
            "cycleDays": [
                -52,
                -32
            ],
            "absorbed5y": 14,
            "receivables5y": -158,
            "inventory5y": -45,
            "payables5y": 1015
        }
    },
    "J Kumar Infra": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 66
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 1
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
                "FY17",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                249.0,
                597.0,
                704.0,
                826.0,
                823.0
            ],
            "ocf": [
                268.0,
                220.0,
                339.0,
                376.0,
                1128.0
            ],
            "fcf": [
                130.0,
                -25.0,
                121.0,
                141.0,
                659.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "9.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "4.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹72cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY17",
            "toYear": "FY26",
            "debtorDays": [
                118,
                95
            ],
            "inventoryDays": [
                250,
                32
            ],
            "payableDays": [
                68,
                83
            ],
            "cycleDays": [
                300,
                44
            ],
            "absorbed5y": -280,
            "receivables5y": -895,
            "inventory5y": -33,
            "payables5y": 310
        }
    },
    "PNC Infratech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 38
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 30
                },
                {
                    "label": "Staff",
                    "share": 7
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
            "input": "Bitumen price",
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
                20.8,
                20.9,
                21.1,
                28.3,
                44.7,
                24.9,
                25.8,
                21.2,
                25.8,
                22.4,
                19.9,
                17.1,
                31.0
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                1534.0,
                1600.0,
                2005.0,
                2066.0,
                1137.0
            ],
            "ocf": [
                -499.0,
                -1454.0,
                -231.0,
                -56.0,
                4593.0
            ],
            "fcf": [
                -580.0,
                -1517.0,
                -282.0,
                -91.0,
                4267.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "5.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,932cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "28%",
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
                34,
                103
            ],
            "inventoryDays": [
                55,
                138
            ],
            "payableDays": [
                59,
                143
            ],
            "cycleDays": [
                30,
                97
            ],
            "absorbed5y": -4707,
            "receivables5y": -2454,
            "inventory5y": -408,
            "payables5y": -359
        }
    },
    "KNR Constructions": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 28
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 35
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
                    "share": 26
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Bitumen price",
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
                22.0,
                22.4,
                22.7,
                26.5,
                28.3,
                44.7,
                30.2,
                22.7,
                29.9,
                29.9,
                22.5,
                24.3,
                16.3
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                802.0,
                918.0,
                1049.0,
                1610.0,
                712.0
            ],
            "ocf": [
                -336.0,
                1194.0,
                -297.0,
                -567.0,
                -149.0
            ],
            "fcf": [
                -693.0,
                1040.0,
                -380.0,
                -595.0,
                -163.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "9.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,067cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-3%",
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
                61,
                109
            ],
            "inventoryDays": [
                70,
                63
            ],
            "payableDays": [
                95,
                135
            ],
            "cycleDays": [
                36,
                38
            ],
            "absorbed5y": -3178,
            "receivables5y": -2661,
            "inventory5y": 15,
            "payables5y": -533
        }
    },
    "Ashoka Buildcon": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 25
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 41
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
                    "share": 25
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Bitumen price",
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
                24.4,
                25.3,
                22.1,
                20.5,
                24.3,
                36.4,
                26.8,
                28.8,
                31.7,
                31.6,
                23.8,
                13.2,
                17.2
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                1789.0,
                1969.0,
                2235.0,
                2920.0,
                1879.0
            ],
            "ocf": [
                353.0,
                492.0,
                749.0,
                1673.0,
                655.0
            ],
            "fcf": [
                208.0,
                313.0,
                603.0,
                1554.0,
                538.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "4.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "2.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹945cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "36%",
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
                46,
                78
            ],
            "inventoryDays": [
                108,
                87
            ],
            "payableDays": [
                206,
                234
            ],
            "cycleDays": [
                -52,
                -68
            ],
            "absorbed5y": -3524,
            "receivables5y": -3850,
            "inventory5y": -8,
            "payables5y": 774
        }
    },
    "PSP Projects": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 38
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 49
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
                258.0,
                230.0,
                261.0,
                183.0,
                190.0
            ],
            "ocf": [
                147.0,
                45.0,
                -224.0,
                53.0,
                323.0
            ],
            "fcf": [
                70.0,
                -35.0,
                -366.0,
                -15.0,
                130.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "43.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹86cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "31%",
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
                65,
                108
            ],
            "inventoryDays": [
                60,
                107
            ],
            "payableDays": [
                189,
                143
            ],
            "cycleDays": [
                -64,
                71
            ],
            "absorbed5y": -505,
            "receivables5y": -743,
            "inventory5y": -259,
            "payables5y": 117
        }
    },
    "H.G. Infra Engg.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 36
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 36
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
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Bitumen price",
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
                20.8,
                23.0,
                16.7,
                19.5,
                20.4,
                24.4,
                22.7,
                17.6,
                17.5,
                22.8,
                21.7,
                16.6,
                27.6
            ],
            "index": [
                100,
                92,
                96,
                87,
                88,
                91,
                96,
                103,
                104,
                99,
                93,
                103,
                153
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
                711.0,
                895.0,
                1064.0,
                1058.0,
                1014.0
            ],
            "ocf": [
                -322.0,
                -139.0,
                -311.0,
                -878.0,
                250.0
            ],
            "fcf": [
                -390.0,
                -478.0,
                -544.0,
                -2439.0,
                -704.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,775cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-30%",
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
                62,
                55
            ],
            "inventoryDays": [
                37,
                73
            ],
            "payableDays": [
                88,
                299
            ],
            "cycleDays": [
                11,
                -171
            ],
            "absorbed5y": -5350,
            "receivables5y": -253,
            "inventory5y": -208,
            "payables5y": 1282
        }
    },
    "Interarch Building": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 60
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 16
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
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                8.5,
                6.4,
                8.9,
                9.9,
                8.9,
                7.7,
                9.6,
                10.6,
                8.4,
                8.6,
                9.6,
                10.5,
                8.5
            ],
            "index": [
                100,
                98,
                97,
                93,
                93,
                90,
                87,
                86,
                89,
                87,
                84,
                89,
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
                37.0,
                111.0,
                120.0,
                144.0,
                184.0
            ],
            "ocf": [
                26.0,
                31.0,
                82.0,
                53.0,
                -19.0
            ],
            "fcf": [
                22.0,
                17.0,
                57.0,
                -23.0,
                -138.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹63cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "29%",
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
                37,
                55
            ],
            "inventoryDays": [
                87,
                69
            ],
            "payableDays": [
                52,
                51
            ],
            "cycleDays": [
                72,
                73
            ],
            "absorbed5y": -296,
            "receivables5y": -305,
            "inventory5y": -117,
            "payables5y": 93
        }
    },
    "Patel Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Site, subcontract and running costs",
                    "share": 74
                },
                {
                    "label": "Staff",
                    "share": 8
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                530.0,
                562.0,
                690.0,
                749.0,
                686.0
            ],
            "ocf": [
                514.0,
                702.0,
                688.0,
                279.0,
                560.0
            ],
            "fcf": [
                356.0,
                534.0,
                529.0,
                189.0,
                450.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "7.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "4.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹676cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "85%",
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
                43
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
                61,
                43
            ],
            "absorbed5y": -572,
            "receivables5y": -1150,
            "inventory5y": -439,
            "payables5y": 1016
        }
    },
    "GK Energy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 69
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 11
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
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                54.0,
                200.0,
                309.0
            ],
            "ocf": [
                -5.0,
                -99.0,
                50.0
            ],
            "fcf": [
                -10.0,
                -104.0,
                -49.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹237cr net cash",
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
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                135,
                125
            ],
            "inventoryDays": [
                23,
                18
            ],
            "payableDays": [
                78,
                42
            ],
            "cycleDays": [
                80,
                102
            ],
            "absorbed5y": -501,
            "receivables5y": -481,
            "inventory5y": -46,
            "payables5y": 58
        }
    },
    "EPack Prefab Techno.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 67
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                9.7,
                10.1,
                10.2,
                10.6,
                10.5,
                11.5,
                10.2,
                9.8,
                9.3
            ],
            "index": [
                100,
                96,
                93,
                92,
                95,
                93,
                90,
                95,
                101
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
                36.0,
                52.0,
                87.0,
                116.0,
                160.0
            ],
            "ocf": [
                29.0,
                2.0,
                72.0,
                62.0,
                136.0
            ],
            "fcf": [
                -48.0,
                -27.0,
                -24.0,
                -25.0,
                3.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹171cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                53,
                74
            ],
            "inventoryDays": [
                64,
                96
            ],
            "payableDays": [
                96,
                143
            ],
            "cycleDays": [
                22,
                26
            ],
            "absorbed5y": -94,
            "receivables5y": -265,
            "inventory5y": -243,
            "payables5y": 360
        }
    },
    "Pennar Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 58
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                8.6,
                10.2,
                7.9,
                9.8,
                10.0,
                8.6,
                10.2,
                10.2,
                8.9,
                8.8,
                11.4,
                10.7
            ],
            "index": [
                100,
                98,
                97,
                93,
                93,
                90,
                87,
                86,
                89,
                87,
                84,
                89,
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
                171.0,
                221.0,
                273.0,
                311.0,
                356.0
            ],
            "ocf": [
                195.0,
                244.0,
                225.0,
                256.0,
                202.0
            ],
            "fcf": [
                138.0,
                173.0,
                -22.0,
                130.0,
                -126.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹892cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                68,
                74
            ],
            "inventoryDays": [
                167,
                176
            ],
            "payableDays": [
                142,
                157
            ],
            "cycleDays": [
                94,
                93
            ],
            "absorbed5y": -252,
            "receivables5y": -321,
            "inventory5y": -523,
            "payables5y": 516
        }
    },
    "Capacite Infraproj.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 34
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 37
                },
                {
                    "label": "Staff",
                    "share": 7
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                218.0,
                357.0,
                334.0,
                379.0,
                427.0
            ],
            "ocf": [
                34.0,
                101.0,
                -39.0,
                52.0,
                223.0
            ],
            "fcf": [
                -68.0,
                9.0,
                -124.0,
                -51.0,
                48.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "4.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹319cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "22%",
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
                108,
                151
            ],
            "inventoryDays": [
                73,
                53
            ],
            "payableDays": [
                348,
                377
            ],
            "cycleDays": [
                -167,
                -173
            ],
            "absorbed5y": -1554,
            "receivables5y": -1159,
            "inventory5y": -29,
            "payables5y": 496
        }
    },
    "M & B Engineer.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 58
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 12
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
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                9.3,
                18.8,
                10.1,
                13.4,
                12.2,
                11.1,
                11.4,
                10.4,
                10.7
            ],
            "index": [
                100,
                96,
                93,
                92,
                95,
                93,
                90,
                95,
                101
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
                45.0,
                67.0,
                80.0,
                127.0,
                142.0
            ],
            "ocf": [
                41.0,
                29.0,
                5.0,
                33.0,
                -31.0
            ],
            "fcf": [
                30.85,
                10.8,
                -73.08,
                -6.93,
                -64.45
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹195cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "17%",
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
                64,
                69
            ],
            "inventoryDays": [
                150,
                175
            ],
            "payableDays": [
                149,
                107
            ],
            "cycleDays": [
                65,
                137
            ],
            "absorbed5y": -295,
            "receivables5y": -301,
            "inventory5y": -222,
            "payables5y": 134
        }
    },
    "GPT Infraprojects": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 5
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 70
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
                84.0,
                87.0,
                120.0,
                136.0,
                175.0
            ],
            "ocf": [
                72.0,
                119.0,
                113.0,
                29.0,
                64.0
            ],
            "fcf": [
                59.0,
                60.0,
                96.0,
                -32.0,
                9.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹254cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                32,
                36
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
                -10,
                36
            ],
            "absorbed5y": -145,
            "receivables5y": -33,
            "inventory5y": -73,
            "payables5y": 163
        }
    },
    "SPML Infra": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 13
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 70
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
                5.0,
                29.0,
                18.0,
                49.0,
                65.0
            ],
            "ocf": [
                -19.0,
                20.0,
                594.0,
                -85.0,
                -113.0
            ],
            "fcf": [
                -20.0,
                20.0,
                527.0,
                -86.0,
                -179.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹191cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "239%",
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
                468,
                216
            ],
            "inventoryDays": [
                153,
                414
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                null,
                null
            ],
            "absorbed5y": -165,
            "receivables5y": -276,
            "inventory5y": -63,
            "payables5y": 336
        }
    },
    "Solarworld Energy So": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials (steel, cement, bitumen and parts)",
                    "share": 79
                },
                {
                    "label": "Site, subcontract and running costs",
                    "share": 8
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
                21.0,
                69.0,
                107.0,
                147.0
            ],
            "ocf": [
                -4.0,
                -7.0,
                7.0,
                54.0,
                -50.0
            ],
            "fcf": [
                -4.0,
                -8.0,
                7.0,
                -98.0,
                -110.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "10.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹317cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "0%",
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
                140,
                92
            ],
            "inventoryDays": [
                30,
                36
            ],
            "payableDays": [
                65,
                150
            ],
            "cycleDays": [
                105,
                -22
            ],
            "absorbed5y": -278,
            "receivables5y": -371,
            "inventory5y": -104,
            "payables5y": 455
        }
    },
    "JSW Cement": {
        "stats": [
            {
                "label": "P/E",
                "value": "19.6x",
                "note": "Last year's profit includes a large tax credit in Q4 FY26."
            },
            {
                "label": "EV/EBITDA",
                "value": "15.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,856cr",
                "note": "Company figure, 30 June 2026; 2.95 times EBITDA."
            },
            {
                "label": "Operating margin FY26",
                "value": "19%",
                "note": "16% in Q1 FY27."
            },
            {
                "label": "EBITDA per tonne",
                "value": "₹784",
                "note": "Q1 FY27; ₹979 excluding the North."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                60,
                48
            ],
            "inventoryDays": [
                143,
                132
            ],
            "payableDays": [
                336,
                317
            ],
            "cycleDays": [
                -133,
                -136
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
                756,
                663,
                853,
                617,
                1242
            ],
            "ocf": [
                339,
                653,
                1408,
                737,
                1170
            ],
            "fcf": [
                -715,
                -979,
                476,
                -409,
                -791
            ],
            "note": "Screener consolidated."
        }
    },
    "E to E Transportation": {
        "stats": [
            {
                "label": "P/E",
                "value": "29.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.3x",
                "note": "Market value plus gross borrowings (cash not available), ÷ FY26 operating profit."
            },
            {
                "label": "Borrowings",
                "value": "₹164cr",
                "note": "March 2026, up from ₹66cr; cash not available."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            },
            {
                "label": "Order book",
                "value": "₹860cr",
                "note": "Executable incl. L1, excluding GST, May 2026; 2.3 times FY26 revenue."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                152,
                220
            ],
            "inventoryDays": [
                7,
                7
            ],
            "payableDays": [
                190,
                248
            ],
            "cycleDays": [
                -31,
                -21
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
                7,
                15,
                19,
                29,
                38
            ],
            "ocf": [
                -11,
                -1,
                7,
                -9,
                -102
            ],
            "fcf": [
                -11,
                -2,
                5,
                -14,
                -112
            ],
            "note": "Screener consolidated."
        }
    },
    "Pace Digitek": {
        "stats": [
            {
                "label": "P/E",
                "value": "11.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹212cr",
                "note": "Borrowings including leases (₹981cr) minus cash (₹270cr) and other bank deposits (₹499cr), March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "−56%",
                "note": "Operating cash ÷ operating profit, FY22–FY26; 70–80% is healthy."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials and project costs",
                    "share": 74
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Materials and staff from the FY26 annual report; other costs are the rest of Screener's filed expenses."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                301,
                286
            ],
            "inventoryDays": [
                158,
                182
            ],
            "payableDays": [
                800,
                603
            ],
            "cycleDays": [
                -340,
                -136
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
                29,
                29,
                403,
                485,
                459
            ],
            "ocf": [
                57,
                -44,
                214,
                -176,
                -842
            ],
            "fcf": [
                54,
                -50,
                208,
                -212,
                -932
            ]
        }
    },
    "Glass Wall Systems": {
        "stats": [
            {
                "label": "P/E",
                "value": "24.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.9x",
                "note": "Market value minus net cash, ÷ operating profit over the last year."
            },
            {
                "label": "Net cash",
                "value": "₹78cr",
                "note": "Cash and bank balances minus borrowings, March 2026, before the IPO's ₹60cr of new money (RHP)."
            },
            {
                "label": "Operating margin FY26",
                "value": "23%"
            },
            {
                "label": "Order book ÷ FY26 sales",
                "value": "2.1x",
                "note": "₹982cr at July 2026."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 48
                },
                {
                    "label": "Subcontracting",
                    "share": 12
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
                    "share": 23
                }
            ],
            "note": "From the RHP's restated FY26 accounts; other costs are the rest of Screener's filed expenses."
        },
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                76,
                87
            ],
            "inventoryDays": [
                70,
                65
            ],
            "payableDays": [
                90,
                108
            ],
            "cycleDays": [
                56,
                44
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                55,
                73,
                105
            ],
            "ocf": [
                43,
                73,
                73
            ],
            "fcf": [
                38,
                69,
                50
            ],
            "note": "Only three years are filed on a consolidated basis, restated to include Yes Systems."
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const constructionValuationInputs: Record<string, ValuationInput> = {
    "NBCC": {
        "netDebt": -6535,
        "ttmEbitda": 660.0,
        "mcapAtWriting": 22372.0,
        "peAtWriting": 32.7
    },
    "Cemindia Projects": {
        "netDebt": 52,
        "ttmEbitda": 1056.0,
        "mcapAtWriting": 21597.0,
        "peAtWriting": 35.9
    },
    "IRB Infra.Devl.": {
        "netDebt": 18116,
        "ttmEbitda": 4182.0,
        "mcapAtWriting": 21354.0,
        "peAtWriting": 21.7
    },
    "Engineers India": {
        "netDebt": -2953,
        "ttmEbitda": 750.0,
        "mcapAtWriting": 17741.0,
        "peAtWriting": 22.6
    },
    "Welspun Enterp": {
        "netDebt": -1,
        "ttmEbitda": 716.0,
        "mcapAtWriting": 10443.0,
        "peAtWriting": 29.5
    },
    "Ircon Intl.": {
        "netDebt": -515,
        "ttmEbitda": 758.0,
        "mcapAtWriting": 9965.0,
        "peAtWriting": 19.0
    },
    "Rites": {
        "netDebt": -3043,
        "ttmEbitda": 555.0,
        "mcapAtWriting": 9579.0,
        "peAtWriting": 23.0
    },
    "Afcons Infra": {
        "netDebt": 2741,
        "ttmEbitda": 1033.0,
        "mcapAtWriting": 9287.0,
        "peAtWriting": 45.3
    },
    "NCC": {
        "netDebt": 2168,
        "ttmEbitda": 1925.0,
        "mcapAtWriting": 8339.0,
        "peAtWriting": 11.6
    },
    "GR Infraprojects": {
        "netDebt": 3660,
        "ttmEbitda": 1691.0,
        "mcapAtWriting": 7861.0,
        "peAtWriting": 8.37
    },
    "Power Mech Proj.": {
        "netDebt": 171,
        "ttmEbitda": 699.0,
        "mcapAtWriting": 7611.0,
        "peAtWriting": 19.4
    },
    "Dilip Buildcon": {
        "netDebt": 7713,
        "ttmEbitda": 1674.0,
        "mcapAtWriting": 6700.0,
        "peAtWriting": 12.0
    },
    "Ceigall India": {
        "netDebt": 932,
        "ttmEbitda": 620.0,
        "mcapAtWriting": 6691.0,
        "peAtWriting": 20.8
    },
    "Man Infra": {
        "netDebt": -371,
        "ttmEbitda": 160.0,
        "mcapAtWriting": 5246.0,
        "peAtWriting": 24.2
    },
    "Sterling and Wilson": {
        "netDebt": 657,
        "ttmEbitda": 295.0,
        "mcapAtWriting": 4126.0,
        "peAtWriting": 13.2
    },
    "Ahluwalia Contr.": {
        "netDebt": -744,
        "ttmEbitda": 395.0,
        "mcapAtWriting": 3922.0,
        "peAtWriting": 17.4
    },
    "J Kumar Infra": {
        "netDebt": -72,
        "ttmEbitda": 821.0,
        "mcapAtWriting": 3583.0,
        "peAtWriting": 9.21
    },
    "PNC Infratech": {
        "netDebt": 2932,
        "ttmEbitda": 1293.0,
        "mcapAtWriting": 3475.0,
        "peAtWriting": 5.73
    },
    "KNR Constructions": {
        "netDebt": 2067,
        "ttmEbitda": 625.0,
        "mcapAtWriting": 3382.0,
        "peAtWriting": 9.9
    },
    "Ashoka Buildcon": {
        "netDebt": 945,
        "ttmEbitda": 1536.0,
        "mcapAtWriting": 3176.0,
        "peAtWriting": 4.69
    },
    "PSP Projects": {
        "netDebt": -86,
        "ttmEbitda": 219.0,
        "mcapAtWriting": 3198.0,
        "peAtWriting": 43.6
    },
    "H.G. Infra Engg.": {
        "netDebt": 4775,
        "ttmEbitda": 1055.0,
        "mcapAtWriting": 2953.0,
        "peAtWriting": 11.4
    },
    "Interarch Building": {
        "netDebt": -63,
        "ttmEbitda": 184.0,
        "mcapAtWriting": 2892.0,
        "peAtWriting": 21.1
    },
    "Patel Engineering": {
        "netDebt": 676,
        "ttmEbitda": 698.0,
        "mcapAtWriting": 2739.0,
        "peAtWriting": 6.98
    },
    "GK Energy": {
        "netDebt": -237,
        "ttmEbitda": 334.0,
        "mcapAtWriting": 2508.0,
        "peAtWriting": 11.1
    },
    "EPack Prefab Techno.": {
        "netDebt": -171,
        "ttmEbitda": 163.0,
        "mcapAtWriting": 2469.0,
        "peAtWriting": 26.0
    },
    "Pennar Industries": {
        "netDebt": 892,
        "ttmEbitda": 362.0,
        "mcapAtWriting": 2505.0,
        "peAtWriting": 17.6
    },
    "Capacite Infraproj.": {
        "netDebt": 319,
        "ttmEbitda": 424.0,
        "mcapAtWriting": 1617.0,
        "peAtWriting": 8.73
    },
    "M & B Engineer.": {
        "netDebt": -195,
        "ttmEbitda": 143.0,
        "mcapAtWriting": 1473.0,
        "peAtWriting": 15.1
    },
    "GPT Infraprojects": {
        "netDebt": 254,
        "ttmEbitda": 185.0,
        "mcapAtWriting": 1446.0,
        "peAtWriting": 14.7
    },
    "SPML Infra": {
        "netDebt": 191,
        "ttmEbitda": 83.0,
        "mcapAtWriting": 1407.0,
        "peAtWriting": 16.5
    },
    "Solarworld Energy So": {
        "netDebt": -317,
        "ttmEbitda": 149.0,
        "mcapAtWriting": 1168.0,
        "peAtWriting": 9.98
    },
    "JSW Cement": {
        "netDebt": 3856,
        "ttmEbitda": 1217,
        "mcapAtWriting": 15474,
        "peAtWriting": 19.6
    },
    "E to E Transportation": {
        "netDebt": null,
        "ttmEbitda": 38,
        "mcapAtWriting": 492,
        "peAtWriting": 29.3
    },
    "Pace Digitek": {
        "netDebt": 212,
        "ttmEbitda": 461,
        "mcapAtWriting": 3276,
        "peAtWriting": 11
    },
    "Glass Wall Systems": {
        "netDebt": -78,
        "ttmEbitda": 107,
        "mcapAtWriting": 1997,
        "peAtWriting": 24.9
    }
};
