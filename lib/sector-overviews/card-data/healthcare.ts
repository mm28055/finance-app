import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const healthcareCharts: Record<string, ProfileCharts> = {
    "Dr Lal PathLabs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 19
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 19
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
                    "share": 28
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
                561.0,
                490.0,
                609.0,
                698.0,
                783.0
            ],
            "ocf": [
                447.0,
                456.0,
                535.0,
                569.0,
                636.0
            ],
            "fcf": [
                -29.0,
                411.0,
                478.0,
                515.0,
                463.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "57.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,134cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                15,
                15
            ],
            "inventoryDays": [
                38,
                30
            ],
            "payableDays": [
                107,
                123
            ],
            "cycleDays": [
                -54,
                -79
            ],
            "absorbed5y": 82,
            "receivables5y": -64,
            "inventory5y": -2,
            "payables5y": 68
        }
    },
    "Vijaya Diagnostic Centre": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 12
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 41
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
                204.0,
                182.0,
                221.0,
                273.0,
                337.0
            ],
            "ocf": [
                158.0,
                165.0,
                183.0,
                224.0,
                271.0
            ],
            "fcf": [
                36.0,
                40.0,
                95.0,
                128.0,
                88.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "86.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "45.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹370cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "82%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "41%"
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
                22,
                19
            ],
            "payableDays": [
                110,
                145
            ],
            "cycleDays": [
                -81,
                -117
            ],
            "absorbed5y": -23,
            "receivables5y": -15,
            "inventory5y": -2,
            "payables5y": 14
        }
    },
    "Syngene International": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 25
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 30
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 25
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
                743.0,
                942.0,
                1017.0,
                1045.0,
                921.0
            ],
            "ocf": [
                581.0,
                824.0,
                1042.0,
                1168.0,
                915.0
            ],
            "fcf": [
                105.0,
                306.0,
                531.0,
                398.0,
                547.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "52.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,116cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "97%",
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
                71,
                50
            ],
            "inventoryDays": [
                87,
                56
            ],
            "payableDays": [
                113,
                138
            ],
            "cycleDays": [
                45,
                -32
            ],
            "absorbed5y": 168,
            "receivables5y": -56,
            "inventory5y": -107,
            "payables5y": 559
        }
    },
    "Molbio Diagnostics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 40
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 23
                },
                {
                    "label": "Operating profit",
                    "share": 22
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
                234.0,
                260.0,
                320.0
            ],
            "ocf": [
                10.0,
                287.0,
                50.0
            ],
            "fcf": [
                -6.0,
                232.0,
                0.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "60.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "47.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹83cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                186,
                103
            ],
            "inventoryDays": [
                338,
                285
            ],
            "payableDays": [
                101,
                126
            ],
            "cycleDays": [
                423,
                261
            ],
            "absorbed5y": -502,
            "receivables5y": -239,
            "inventory5y": -210,
            "payables5y": 111
        }
    },
    "Indegene": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Lab, clinic and running costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 63
                },
                {
                    "label": "Other costs",
                    "share": 9
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
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                287.0,
                396.0,
                505.0,
                548.0,
                619.0
            ],
            "ocf": [
                297.0,
                130.0,
                508.0,
                442.0,
                651.0
            ],
            "fcf": [
                272.0,
                111.0,
                497.0,
                412.0,
                607.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,338cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "86%",
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
                97,
                102
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
                97,
                102
            ],
            "absorbed5y": 104,
            "receivables5y": -314,
            "inventory5y": null,
            "payables5y": null
        }
    },
    "Metropolis Health.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 20
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 27
                },
                {
                    "label": "Operating profit",
                    "share": 25
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
                348.0,
                293.0,
                288.0,
                308.0,
                406.0
            ],
            "ocf": [
                253.0,
                247.0,
                264.0,
                263.0,
                351.0
            ],
            "fcf": [
                222.0,
                194.0,
                200.0,
                194.0,
                300.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "58.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹170cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                40,
                38
            ],
            "inventoryDays": [
                68,
                51
            ],
            "payableDays": [
                136,
                146
            ],
            "cycleDays": [
                -29,
                -57
            ],
            "absorbed5y": -73,
            "receivables5y": -45,
            "inventory5y": 10,
            "payables5y": -13
        }
    },
    "Thyrocare Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 26
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 32
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
                236.0,
                123.0,
                140.0,
                190.0,
                263.0
            ],
            "ocf": [
                113.0,
                129.0,
                168.0,
                191.0,
                213.0
            ],
            "fcf": [
                75.17,
                85.35,
                106.42,
                146.11,
                192.12
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "31.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹194cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "86%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "32%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                58,
                33
            ],
            "inventoryDays": [
                53,
                81
            ],
            "payableDays": [
                36,
                109
            ],
            "cycleDays": [
                75,
                4
            ],
            "absorbed5y": -38,
            "receivables5y": -59,
            "inventory5y": -25,
            "payables5y": 40
        }
    },
    "Nephrocare Health": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Lab, clinic and running costs",
                    "share": 28
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 32
                },
                {
                    "label": "Operating profit",
                    "share": 22
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
                16.0,
                49.0,
                101.0,
                167.0,
                225.0
            ],
            "ocf": [
                14.0,
                11.0,
                72.0,
                135.0,
                233.0
            ],
            "fcf": [
                -65.0,
                -63.0,
                -8.0,
                34.0,
                114.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "87.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹353cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
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
                123,
                116
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
                103,
                116
            ],
            "absorbed5y": -154,
            "receivables5y": -277,
            "inventory5y": -12,
            "payables5y": 97
        }
    },
    "Vimta Labs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 13
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 28
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                80.0,
                94.0,
                94.0,
                122.0,
                142.0
            ],
            "ocf": [
                59.0,
                87.0,
                61.0,
                94.0,
                147.0
            ],
            "fcf": [
                20.0,
                37.0,
                -16.0,
                15.0,
                47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹62cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                102,
                95
            ],
            "inventoryDays": [
                154,
                203
            ],
            "payableDays": [
                108,
                79
            ],
            "cycleDays": [
                147,
                219
            ],
            "absorbed5y": -22,
            "receivables5y": -54,
            "inventory5y": -15,
            "payables5y": -3
        }
    },
    "Suraksha Diagnostic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 12
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 34
                },
                {
                    "label": "Operating profit",
                    "share": 31
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
                49.0,
                47.0,
                73.0,
                82.0,
                96.0
            ],
            "ocf": [
                42.0,
                44.0,
                60.0,
                63.0,
                82.0
            ],
            "fcf": [
                23.0,
                31.0,
                15.0,
                21.0,
                15.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "51.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹104cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                12,
                27
            ],
            "inventoryDays": [
                38,
                81
            ],
            "payableDays": [
                84,
                209
            ],
            "cycleDays": [
                -34,
                -101
            ],
            "absorbed5y": -13,
            "receivables5y": -20,
            "inventory5y": -4,
            "payables5y": 7
        }
    },
    "Krsnaa Diagnostics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Lab, clinic and running costs",
                    "share": 29
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 26
                },
                {
                    "label": "Operating profit",
                    "share": 27
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
                132.0,
                122.0,
                144.0,
                190.0,
                212.0
            ],
            "ocf": [
                128.0,
                76.0,
                24.0,
                87.0,
                143.0
            ],
            "fcf": [
                -4.0,
                -65.0,
                -170.0,
                -40.0,
                -76.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹173cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                46,
                140
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
                46,
                140
            ],
            "absorbed5y": -274,
            "receivables5y": -222,
            "inventory5y": -20,
            "payables5y": -32
        }
    },
    "GPT Healthcare (Agilus)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 19
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 34
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 11
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
                74.0,
                74.0,
                88.0,
                83.0,
                85.0
            ],
            "ocf": [
                66.0,
                66.0,
                69.0,
                67.0,
                81.0
            ],
            "fcf": [
                58.7,
                56.05,
                49.629999999999995,
                17.07,
                39.18
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹87cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "86%",
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
                15,
                16
            ],
            "inventoryDays": [
                30,
                43
            ],
            "payableDays": [
                121,
                170
            ],
            "cycleDays": [
                -76,
                -112
            ],
            "absorbed5y": 3,
            "receivables5y": -13,
            "inventory5y": -5,
            "payables5y": 18
        }
    },
    "3B Blackbio Diagnostics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 25
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
                    "share": 40
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
                37.0,
                29.0,
                33.0,
                50.0,
                57.0
            ],
            "ocf": [
                37.0,
                20.0,
                27.0,
                43.0,
                52.0
            ],
            "fcf": [
                34.74,
                17.98,
                26.49,
                42.1,
                26.49
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹256cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "87%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "40%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                136,
                129
            ],
            "inventoryDays": [
                164,
                187
            ],
            "payableDays": [
                69,
                70
            ],
            "cycleDays": [
                136,
                245
            ],
            "absorbed5y": -15,
            "receivables5y": 0,
            "inventory5y": -14,
            "payables5y": -2
        }
    },
    "Sastasundar Ventures": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 92
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
                    "label": "Operating loss",
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
                1114.0,
                -107.0,
                -24.0,
                -19.0,
                -52.0
            ],
            "ocf": [
                -207.0,
                -112.0,
                36.0,
                -17.0,
                -74.0
            ],
            "fcf": [
                -212.0,
                -131.0,
                22.0,
                -27.0,
                -89.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹523cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-41%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-4%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                4,
                2
            ],
            "inventoryDays": [
                71,
                44
            ],
            "payableDays": [
                21,
                26
            ],
            "cycleDays": [
                55,
                20
            ],
            "absorbed5y": -42,
            "receivables5y": -14,
            "inventory5y": -66,
            "payables5y": 61
        }
    },
    "Hemant Surgical Inds": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 77
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                9.0,
                24.0
            ],
            "ocf": [
                5.0,
                -32.0
            ],
            "fcf": [
                -33.74,
                -43.91
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "53.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹6cr",
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
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                70,
                106
            ],
            "inventoryDays": [
                208,
                121
            ],
            "payableDays": [
                188,
                146
            ],
            "cycleDays": [
                90,
                81
            ],
            "absorbed5y": -62,
            "receivables5y": -46,
            "inventory5y": -37,
            "payables5y": 46
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const healthcareValuationInputs: Record<string, ValuationInput> = {
    "Dr Lal PathLabs": {
        "netDebt": -1134,
        "ttmEbitda": 838.0,
        "mcapAtWriting": 32299.0,
        "peAtWriting": 57.4
    },
    "Vijaya Diagnostic Centre": {
        "netDebt": 370,
        "ttmEbitda": 362.0,
        "mcapAtWriting": 16178.0,
        "peAtWriting": 86.3
    },
    "Syngene International": {
        "netDebt": -1116,
        "ttmEbitda": 803.0,
        "mcapAtWriting": 15414.0,
        "peAtWriting": 52.0
    },
    "Molbio Diagnostics": {
        "netDebt": 83,
        "ttmEbitda": 320.0,
        "mcapAtWriting": 15133.0,
        "peAtWriting": 60.6
    },
    "Indegene": {
        "netDebt": -1338,
        "ttmEbitda": 638.0,
        "mcapAtWriting": 14417.0,
        "peAtWriting": 34.6
    },
    "Metropolis Health.": {
        "netDebt": 170,
        "ttmEbitda": 422.0,
        "mcapAtWriting": 12146.0,
        "peAtWriting": 58.4
    },
    "Thyrocare Technologies": {
        "netDebt": -194,
        "ttmEbitda": 282.0,
        "mcapAtWriting": 9132.0,
        "peAtWriting": 50.5
    },
    "Nephrocare Health": {
        "netDebt": -353,
        "ttmEbitda": 236.0,
        "mcapAtWriting": 7460.0,
        "peAtWriting": 87.7
    },
    "Vimta Labs": {
        "netDebt": -62,
        "ttmEbitda": 145.0,
        "mcapAtWriting": 2730.0,
        "peAtWriting": 33.8
    },
    "Suraksha Diagnostic": {
        "netDebt": 104,
        "ttmEbitda": 102.0,
        "mcapAtWriting": 1851.0,
        "peAtWriting": 51.7
    },
    "Krsnaa Diagnostics": {
        "netDebt": 173,
        "ttmEbitda": 218.0,
        "mcapAtWriting": 1817.0,
        "peAtWriting": 18.6
    },
    "GPT Healthcare (Agilus)": {
        "netDebt": 87,
        "ttmEbitda": 91.0,
        "mcapAtWriting": 1325.0,
        "peAtWriting": 28.0
    },
    "3B Blackbio Diagnostics": {
        "netDebt": -256,
        "ttmEbitda": 53.0,
        "mcapAtWriting": 1229.0,
        "peAtWriting": 22.1
    },
    "Sastasundar Ventures": {
        "netDebt": -523,
        "ttmEbitda": -67.0,
        "mcapAtWriting": 933.0,
        "peAtWriting": null
    },
    "Hemant Surgical Inds": {
        "netDebt": 6,
        "ttmEbitda": 24.0,
        "mcapAtWriting": 894.0,
        "peAtWriting": 53.0
    }
};
