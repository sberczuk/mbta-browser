
//  MBTA API to use
// https://api-v3.mbta.com/lines
// data: display  each  line  and  some info
 export const line_data = {
    "data": [
        {
            "attributes": {
                "color": "DA291C",
                "long_name": "Red Line",
                "short_name": "",
                "sort_order": 10010,
                "text_color": "FFFFFF"
            },
            "id": "line-Red",
            "links": {
                "self": "/lines/line-Red"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "DA291C",
                "long_name": "Mattapan Trolley",
                "short_name": "",
                "sort_order": 10011,
                "text_color": "FFFFFF"
            },
            "id": "line-Mattapan",
            "links": {
                "self": "/lines/line-Mattapan"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "ED8B00",
                "long_name": "Orange Line",
                "short_name": "",
                "sort_order": 10020,
                "text_color": "FFFFFF"
            },
            "id": "line-Orange",
            "links": {
                "self": "/lines/line-Orange"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "00843D",
                "long_name": "Green Line",
                "short_name": "",
                "sort_order": 10032,
                "text_color": "FFFFFF"
            },
            "id": "line-Green",
            "links": {
                "self": "/lines/line-Green"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "003DA5",
                "long_name": "Blue Line",
                "short_name": "",
                "sort_order": 10040,
                "text_color": "FFFFFF"
            },
            "id": "line-Blue",
            "links": {
                "self": "/lines/line-Blue"
            },
            "type": "line"
        }
    ]
};

export const route_data ={
    "data": [
        {
            "attributes": {
                "color": "DA291C",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Ashmont/Braintree",
                    "Alewife"
                ],
                "direction_names": [
                    "South",
                    "North"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Red Line",
                "short_name": "",
                "sort_order": 10010,
                "text_color": "FFFFFF",
                "type": 1
            },
            "id": "Red",
            "links": {
                "self": "/routes/Red"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Red",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "DA291C",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Mattapan",
                    "Ashmont"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Mattapan Trolley",
                "short_name": "",
                "sort_order": 10011,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Mattapan",
            "links": {
                "self": "/routes/Mattapan"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Mattapan",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "ED8B00",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Forest Hills",
                    "Oak Grove"
                ],
                "direction_names": [
                    "South",
                    "North"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Orange Line",
                "short_name": "",
                "sort_order": 10020,
                "text_color": "FFFFFF",
                "type": 1
            },
            "id": "Orange",
            "links": {
                "self": "/routes/Orange"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Orange",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Boston College",
                    "Government Center"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line B",
                "short_name": "B",
                "sort_order": 10032,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-B",
            "links": {
                "self": "/routes/Green-B"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Cleveland Circle",
                    "Government Center"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line C",
                "short_name": "C",
                "sort_order": 10033,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-C",
            "links": {
                "self": "/routes/Green-C"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Riverside",
                    "Union Square"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line D",
                "short_name": "D",
                "sort_order": 10034,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-D",
            "links": {
                "self": "/routes/Green-D"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Heath Street",
                    "Medford/Tufts"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line E",
                "short_name": "E",
                "sort_order": 10035,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-E",
            "links": {
                "self": "/routes/Green-E"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "003DA5",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Bowdoin",
                    "Wonderland"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Blue Line",
                "short_name": "",
                "sort_order": 10040,
                "text_color": "FFFFFF",
                "type": 1
            },
            "id": "Blue",
            "links": {
                "self": "/routes/Blue"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Blue",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "7C878E",
                "description": "Key Bus",
                "direction_destinations": [
                    "Logan Airport Terminals",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Logan Airport Terminals - South Station",
                "short_name": "SL1",
                "sort_order": 10051,
                "text_color": "FFFFFF",
                "type": 3
            },
            "id": "741",
            "links": {
                "self": "/routes/741"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-SLWaterfront",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "7C878E",
                "description": "Key Bus",
                "direction_destinations": [
                    "Drydock Avenue",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Drydock Avenue - South Station",
                "short_name": "SL2",
                "sort_order": 10052,
                "text_color": "FFFFFF",
                "type": 3
            },
            "id": "742",
            "links": {
                "self": "/routes/742"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-SLWaterfront",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "7C878E",
                "description": "Key Bus",
                "direction_destinations": [
                    "Chelsea Station",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Chelsea Station - South Station",
                "short_name": "SL3",
                "sort_order": 10053,
                "text_color": "FFFFFF",
                "type": 3
            },
            "id": "743",
            "links": {
                "self": "/routes/743"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-SLWaterfront",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "7C878E",
                "description": "Key Bus",
                "direction_destinations": [
                    "Nubian Station",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Nubian Station - South Station",
                "short_name": "SL4",
                "sort_order": 10055,
                "text_color": "FFFFFF",
                "type": 3
            },
            "id": "751",
            "links": {
                "self": "/routes/751"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-SLWashington",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "7C878E",
                "description": "Key Bus",
                "direction_destinations": [
                    "Nubian Station",
                    "Temple Place"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Nubian Station - Temple Place",
                "short_name": "SL5",
                "sort_order": 10056,
                "text_color": "FFFFFF",
                "type": 3
            },
            "id": "749",
            "links": {
                "self": "/routes/749"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-SLWashington",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "7C878E",
                "description": "Key Bus",
                "direction_destinations": [
                    "Silver Line Way",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Silver Line Way - South Station",
                "short_name": "SLW",
                "sort_order": 10057,
                "text_color": "FFFFFF",
                "type": 3
            },
            "id": "746",
            "links": {
                "self": "/routes/746"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-SLWaterfront",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Fairmount",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Fairmount Line",
                "short_name": "",
                "sort_order": 20001,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Fairmount",
            "links": {
                "self": "/routes/CR-Fairmount"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Fairmount",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Wachusett",
                    "North Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Fitchburg Line",
                "short_name": "",
                "sort_order": 20002,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Fitchburg",
            "links": {
                "self": "/routes/CR-Fitchburg"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Fitchburg",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Worcester",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Framingham/Worcester Line",
                "short_name": "",
                "sort_order": 20003,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Worcester",
            "links": {
                "self": "/routes/CR-Worcester"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Worcester",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Forge Park/495 or Foxboro",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Franklin/Foxboro Line",
                "short_name": "",
                "sort_order": 20004,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Franklin",
            "links": {
                "self": "/routes/CR-Franklin"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Franklin",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Greenbush",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Greenbush Line",
                "short_name": "",
                "sort_order": 20005,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Greenbush",
            "links": {
                "self": "/routes/CR-Greenbush"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Greenbush",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Haverhill",
                    "North Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Haverhill Line",
                "short_name": "",
                "sort_order": 20006,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Haverhill",
            "links": {
                "self": "/routes/CR-Haverhill"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Haverhill",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Kingston",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Kingston Line",
                "short_name": "",
                "sort_order": 20007,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Kingston",
            "links": {
                "self": "/routes/CR-Kingston"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Kingston",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Lowell",
                    "North Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Lowell Line",
                "short_name": "",
                "sort_order": 20008,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Lowell",
            "links": {
                "self": "/routes/CR-Lowell"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Lowell",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Middleborough/Lakeville",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Middleborough/Lakeville Line",
                "short_name": "",
                "sort_order": 20009,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Middleborough",
            "links": {
                "self": "/routes/CR-Middleborough"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Middleborough",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Needham Heights",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Needham Line",
                "short_name": "",
                "sort_order": 20010,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Needham",
            "links": {
                "self": "/routes/CR-Needham"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Needham",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Newburyport or Rockport",
                    "North Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Newburyport/Rockport Line",
                "short_name": "",
                "sort_order": 20011,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Newburyport",
            "links": {
                "self": "/routes/CR-Newburyport"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Newburyport",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Stoughton or Wickford Junction",
                    "South Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Commuter Rail",
                "long_name": "Providence/Stoughton Line",
                "short_name": "",
                "sort_order": 20012,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Providence",
            "links": {
                "self": "/routes/CR-Providence"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Providence",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "80276C",
                "description": "Commuter Rail",
                "direction_destinations": [
                    "Foxboro or Providence",
                    "South Station or Foxboro"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Special",
                "long_name": "Foxboro Event Service",
                "short_name": "",
                "sort_order": 20013,
                "text_color": "FFFFFF",
                "type": 2
            },
            "id": "CR-Foxboro",
            "links": {
                "self": "/routes/CR-Foxboro"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Foxboro",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "008EAA",
                "description": "Ferry",
                "direction_destinations": [
                    "Charlestown",
                    "Long Wharf"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Ferry",
                "long_name": "Charlestown Ferry",
                "short_name": "",
                "sort_order": 30001,
                "text_color": "FFFFFF",
                "type": 4
            },
            "id": "Boat-F4",
            "links": {
                "self": "/routes/Boat-F4"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Boat-F4",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "008EAA",
                "description": "Ferry",
                "direction_destinations": [
                    "Hingham or Hull",
                    "Long Wharf or Rowes Wharf"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Ferry",
                "long_name": "Hingham/Hull Ferry",
                "short_name": "",
                "sort_order": 30002,
                "text_color": "FFFFFF",
                "type": 4
            },
            "id": "Boat-F1",
            "links": {
                "self": "/routes/Boat-F1"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Boat-F1",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "008EAA",
                "description": "Ferry",
                "direction_destinations": [
                    "Lewis Mall Wharf",
                    "Long Wharf"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Ferry",
                "long_name": "East Boston Ferry",
                "short_name": "",
                "sort_order": 30005,
                "text_color": "FFFFFF",
                "type": 4
            },
            "id": "Boat-EastBoston",
            "links": {
                "self": "/routes/Boat-EastBoston"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Boat-EastBoston",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "008EAA",
                "description": "Ferry",
                "direction_destinations": [
                    "Blossom Street Pier",
                    "Long Wharf"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Ferry",
                "long_name": "Lynn Ferry",
                "short_name": "",
                "sort_order": 30007,
                "text_color": "FFFFFF",
                "type": 4
            },
            "id": "Boat-Lynn",
            "links": {
                "self": "/routes/Boat-Lynn"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Boat-Lynn",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "008EAA",
                "description": "Ferry",
                "direction_destinations": [
                    "Winthrop",
                    "Central Wharf"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Ferry",
                "long_name": "Winthrop Ferry",
                "short_name": "",
                "sort_order": 30009,
                "text_color": "FFFFFF",
                "type": 4
            },
            "id": "Boat-F6",
            "links": {
                "self": "/routes/Boat-F6"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Boat-F6",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Sullivan Square Station",
                    "Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Sullivan Square Station - Ruggles Station",
                "short_name": "CT2",
                "sort_order": 40020,
                "text_color": "000000",
                "type": 3
            },
            "id": "747",
            "links": {
                "self": "/routes/747"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-747",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Beth Israel Deaconess Hospital",
                    "Andrew Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Beth Israel Deaconess Hospital - Andrew Station",
                "short_name": "CT3",
                "sort_order": 40030,
                "text_color": "000000",
                "type": 3
            },
            "id": "708",
            "links": {
                "self": "/routes/708"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-171708",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Harvard Square",
                    "Nubian Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Harvard Square - Nubian Station",
                "short_name": "1",
                "sort_order": 50010,
                "text_color": "000000",
                "type": 3
            },
            "id": "1",
            "links": {
                "self": "/routes/1"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-1",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "North Station",
                    "Tide Street"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "North Station - Tide Street",
                "short_name": "4",
                "sort_order": 50040,
                "text_color": "000000",
                "type": 3
            },
            "id": "4",
            "links": {
                "self": "/routes/4"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-4",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "City Point",
                    "Otis Street & Summer Street"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "City Point - Otis Street & Summer Street",
                "short_name": "7",
                "sort_order": 50070,
                "text_color": "000000",
                "type": 3
            },
            "id": "7",
            "links": {
                "self": "/routes/7"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-7",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Harbor Point",
                    "Kenmore Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Harbor Point - Kenmore Station",
                "short_name": "8",
                "sort_order": 50080,
                "text_color": "000000",
                "type": 3
            },
            "id": "8",
            "links": {
                "self": "/routes/8"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-8",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "City Point",
                    "Copley Square"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "City Point - Copley Square",
                "short_name": "9",
                "sort_order": 50090,
                "text_color": "000000",
                "type": 3
            },
            "id": "9",
            "links": {
                "self": "/routes/9"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-9",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "City Point",
                    "Copley Square"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "City Point - Copley Square",
                "short_name": "10",
                "sort_order": 50100,
                "text_color": "000000",
                "type": 3
            },
            "id": "10",
            "links": {
                "self": "/routes/10"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-10",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "City Point",
                    "Chauncy Street & Summer Street"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "City Point - Chauncy Street & Summer Street",
                "short_name": "11",
                "sort_order": 50110,
                "text_color": "000000",
                "type": 3
            },
            "id": "11",
            "links": {
                "self": "/routes/11"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-11",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Roslindale Square",
                    "Heath Street"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Roslindale Square - Heath Street",
                "short_name": "14",
                "sort_order": 50140,
                "text_color": "000000",
                "type": 3
            },
            "id": "14",
            "links": {
                "self": "/routes/14"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-14",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Fields Corner Station or Kane Square",
                    "Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Fields Corner Station or Kane Square - Ruggles Station",
                "short_name": "15",
                "sort_order": 50150,
                "text_color": "000000",
                "type": 3
            },
            "id": "15",
            "links": {
                "self": "/routes/15"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-15",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Forest Hills Station",
                    "Andrew Station or Harbor Point"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Forest Hills Station - Andrew Station or Harbor Point",
                "short_name": "16",
                "sort_order": 50160,
                "text_color": "000000",
                "type": 3
            },
            "id": "16",
            "links": {
                "self": "/routes/16"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-16",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Fields Corner Station",
                    "Andrew Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Fields Corner Station - Andrew Station",
                "short_name": "17",
                "sort_order": 50170,
                "text_color": "000000",
                "type": 3
            },
            "id": "17",
            "links": {
                "self": "/routes/17"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-1719",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Ashmont Station",
                    "Andrew Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Ashmont Station - Andrew Station",
                "short_name": "18",
                "sort_order": 50180,
                "text_color": "000000",
                "type": 3
            },
            "id": "18",
            "links": {
                "self": "/routes/18"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-18",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Fields Corner Station",
                    "Kenmore or Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Fields Corner Station - Kenmore or Ruggles Station",
                "short_name": "19",
                "sort_order": 50190,
                "text_color": "000000",
                "type": 3
            },
            "id": "19",
            "links": {
                "self": "/routes/19"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-1719",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Ashmont Station",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Ashmont Station - Forest Hills Station",
                "short_name": "21",
                "sort_order": 50210,
                "text_color": "000000",
                "type": 3
            },
            "id": "21",
            "links": {
                "self": "/routes/21"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-21",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Ashmont Station",
                    "Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Ashmont Station - Ruggles Station via Talbot Ave",
                "short_name": "22",
                "sort_order": 50220,
                "text_color": "000000",
                "type": 3
            },
            "id": "22",
            "links": {
                "self": "/routes/22"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-22",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Ashmont Station",
                    "Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Free",
                "long_name": "Ashmont Station - Ruggles Station via Washington Street",
                "short_name": "23",
                "sort_order": 50230,
                "text_color": "000000",
                "type": 3
            },
            "id": "23",
            "links": {
                "self": "/routes/23"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-23",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Wakefield Avenue & Truman Parkway",
                    "Ashmont Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wakefield Avenue & Truman Parkway - Ashmont Station",
                "short_name": "24",
                "sort_order": 50240,
                "text_color": "000000",
                "type": 3
            },
            "id": "24",
            "links": {
                "self": "/routes/24"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-242733",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Ashmont Station",
                    "Norfolk Street Loop"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Ashmont Station - Norfolk Street Loop",
                "short_name": "26",
                "sort_order": 50260,
                "text_color": "000000",
                "type": 3
            },
            "id": "26",
            "links": {
                "self": "/routes/26"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-26",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Mattapan Station",
                    "Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Free",
                "long_name": "Mattapan Station - Ruggles Station",
                "short_name": "28",
                "sort_order": 50280,
                "text_color": "000000",
                "type": 3
            },
            "id": "28",
            "links": {
                "self": "/routes/28"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-28",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Mattapan Station",
                    "Jackson Square Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Free",
                "long_name": "Mattapan Station - Jackson Square Station",
                "short_name": "29",
                "sort_order": 50290,
                "text_color": "000000",
                "type": 3
            },
            "id": "29",
            "links": {
                "self": "/routes/29"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-29",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Mattapan Station",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Mattapan Station - Forest Hills Station via Cummins Highway and Roslindale Square",
                "short_name": "30",
                "sort_order": 50300,
                "text_color": "000000",
                "type": 3
            },
            "id": "30",
            "links": {
                "self": "/routes/30"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-30",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Mattapan Station",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Mattapan Station - Forest Hills Station via Morton Street",
                "short_name": "31",
                "sort_order": 50310,
                "text_color": "000000",
                "type": 3
            },
            "id": "31",
            "links": {
                "self": "/routes/31"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-31",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Wolcott or Cleary Square",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wolcott or Cleary Square - Forest Hills Station",
                "short_name": "32",
                "sort_order": 50320,
                "text_color": "000000",
                "type": 3
            },
            "id": "32",
            "links": {
                "self": "/routes/32"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-32",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "River Street & Milton Street",
                    "Mattapan Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "River Street & Milton Street - Mattapan Station",
                "short_name": "33",
                "sort_order": 50330,
                "text_color": "000000",
                "type": 3
            },
            "id": "33",
            "links": {
                "self": "/routes/33"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-242733",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Dedham Square",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Dedham Square - Forest Hills Station",
                "short_name": "34",
                "sort_order": 50340,
                "text_color": "000000",
                "type": 3
            },
            "id": "34",
            "links": {
                "self": "/routes/34"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-3434E",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Walpole Center",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Walpole Center - Forest Hills Station",
                "short_name": "34E",
                "sort_order": 50341,
                "text_color": "000000",
                "type": 3
            },
            "id": "34E",
            "links": {
                "self": "/routes/34E"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-3434E",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Dedham Mall or Stimson Street",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Dedham Mall or Stimson Street - Forest Hills Station",
                "short_name": "35",
                "sort_order": 50350,
                "text_color": "000000",
                "type": 3
            },
            "id": "35",
            "links": {
                "self": "/routes/35"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-35",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Millennium Park or VA Hospital",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Millennium Park or VA Hospital - Forest Hills Station",
                "short_name": "36",
                "sort_order": 50360,
                "text_color": "000000",
                "type": 3
            },
            "id": "36",
            "links": {
                "self": "/routes/36"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-36",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Baker Street & Vermont Street",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Baker Street & Vermont Street - Forest Hills Station",
                "short_name": "37",
                "sort_order": 50370,
                "text_color": "000000",
                "type": 3
            },
            "id": "37",
            "links": {
                "self": "/routes/37"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-37",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Wren Street",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wren Street - Forest Hills Station",
                "short_name": "38",
                "sort_order": 50380,
                "text_color": "000000",
                "type": 3
            },
            "id": "38",
            "links": {
                "self": "/routes/38"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-38",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Forest Hills Station",
                    "Back Bay Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Forest Hills Station - Back Bay Station",
                "short_name": "39",
                "sort_order": 50390,
                "text_color": "000000",
                "type": 3
            },
            "id": "39",
            "links": {
                "self": "/routes/39"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-39",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Georgetowne",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Georgetowne - Forest Hills Station",
                "short_name": "40",
                "sort_order": 50400,
                "text_color": "000000",
                "type": 3
            },
            "id": "40",
            "links": {
                "self": "/routes/40"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-4050",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Centre Street & Eliot Street",
                    "JFK/UMass Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Centre Street & Eliot Street - JFK/UMass Station",
                "short_name": "41",
                "sort_order": 50410,
                "text_color": "000000",
                "type": 3
            },
            "id": "41",
            "links": {
                "self": "/routes/41"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-41",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Forest Hills Station",
                    "Nubian Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Forest Hills Station - Nubian Station",
                "short_name": "42",
                "sort_order": 50420,
                "text_color": "000000",
                "type": 3
            },
            "id": "42",
            "links": {
                "self": "/routes/42"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-42",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Ruggles Station",
                    "Park Street Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Ruggles Station - Park Street Station",
                "short_name": "43",
                "sort_order": 50430,
                "text_color": "000000",
                "type": 3
            },
            "id": "43",
            "links": {
                "self": "/routes/43"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-43",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Jackson Square Station",
                    "Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Jackson Square Station - Ruggles Station",
                "short_name": "44",
                "sort_order": 50440,
                "text_color": "000000",
                "type": 3
            },
            "id": "44",
            "links": {
                "self": "/routes/44"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-44",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Franklin Park",
                    "Ruggles Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Franklin Park - Ruggles Station",
                "short_name": "45",
                "sort_order": 50450,
                "text_color": "000000",
                "type": 3
            },
            "id": "45",
            "links": {
                "self": "/routes/45"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-45",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Central Square, Cambridge",
                    "Broadway Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Central Square, Cambridge - Broadway Station",
                "short_name": "47",
                "sort_order": 50470,
                "text_color": "000000",
                "type": 3
            },
            "id": "47",
            "links": {
                "self": "/routes/47"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-47",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Cleary Square",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Cleary Square - Forest Hills Station",
                "short_name": "50",
                "sort_order": 50500,
                "text_color": "000000",
                "type": 3
            },
            "id": "50",
            "links": {
                "self": "/routes/50"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-4050",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Reservoir Station",
                    "Forest Hills Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Reservoir Station - Forest Hills Station",
                "short_name": "51",
                "sort_order": 50510,
                "text_color": "000000",
                "type": 3
            },
            "id": "51",
            "links": {
                "self": "/routes/51"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-51",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Dedham Mall",
                    "Watertown Yard"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Dedham Mall - Watertown Yard",
                "short_name": "52",
                "sort_order": 50520,
                "text_color": "000000",
                "type": 3
            },
            "id": "52",
            "links": {
                "self": "/routes/52"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-5259",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Fenway",
                    "Copley Square"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Fenway - Copley Square",
                "short_name": "55",
                "sort_order": 50550,
                "text_color": "000000",
                "type": 3
            },
            "id": "55",
            "links": {
                "self": "/routes/55"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-55",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Watertown Yard",
                    "Kenmore Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Watertown Yard - Kenmore Station",
                "short_name": "57",
                "sort_order": 50570,
                "text_color": "000000",
                "type": 3
            },
            "id": "57",
            "links": {
                "self": "/routes/57"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-5757A",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Needham Junction",
                    "Watertown Square"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Needham Junction - Watertown Square",
                "short_name": "59",
                "sort_order": 50590,
                "text_color": "000000",
                "type": 3
            },
            "id": "59",
            "links": {
                "self": "/routes/59"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-5259",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Chestnut Hill",
                    "Kenmore Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Chestnut Hill - Kenmore Station",
                "short_name": "60",
                "sort_order": 50600,
                "text_color": "000000",
                "type": 3
            },
            "id": "60",
            "links": {
                "self": "/routes/60"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6065",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "North Waltham",
                    "Waltham Center"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "North Waltham - Waltham Center",
                "short_name": "61",
                "sort_order": 50610,
                "text_color": "000000",
                "type": 3
            },
            "id": "61",
            "links": {
                "self": "/routes/61"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6170170",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Bedford VA Hospital",
                    "Alewife Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Bedford VA Hospital - Alewife Station",
                "short_name": "62",
                "sort_order": 50620,
                "text_color": "000000",
                "type": 3
            },
            "id": "62",
            "links": {
                "self": "/routes/62"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6276",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Bedford VA Hospital",
                    "Alewife Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Bedford VA Hospital - Alewife Station via Hanscom Airport",
                "short_name": "62/76",
                "sort_order": 50621,
                "text_color": "000000",
                "type": 3
            },
            "id": "627",
            "links": {
                "self": "/routes/627"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6276",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Oak Square",
                    "University Park or Kendall/MIT Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Oak Square - University Park or Kendall/MIT Station",
                "short_name": "64",
                "sort_order": 50640,
                "text_color": "000000",
                "type": 3
            },
            "id": "64",
            "links": {
                "self": "/routes/64"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6468",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Brighton Center",
                    "Kenmore Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Brighton Center - Kenmore Station",
                "short_name": "65",
                "sort_order": 50650,
                "text_color": "000000",
                "type": 3
            },
            "id": "65",
            "links": {
                "self": "/routes/65"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6065",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Harvard Square",
                    "Nubian Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Harvard Square - Nubian Station",
                "short_name": "66",
                "sort_order": 50660,
                "text_color": "000000",
                "type": 3
            },
            "id": "66",
            "links": {
                "self": "/routes/66"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-66",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Turkey Hill",
                    "Alewife Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Turkey Hill - Alewife Station",
                "short_name": "67",
                "sort_order": 50670,
                "text_color": "000000",
                "type": 3
            },
            "id": "67",
            "links": {
                "self": "/routes/67"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6779",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Harvard Square",
                    "Kendall/MIT Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Harvard Square - Kendall/MIT Station",
                "short_name": "68",
                "sort_order": 50680,
                "text_color": "000000",
                "type": 3
            },
            "id": "68",
            "links": {
                "self": "/routes/68"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6468",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Harvard Square",
                    "Lechmere Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Harvard Square - Lechmere Station",
                "short_name": "69",
                "sort_order": 50690,
                "text_color": "000000",
                "type": 3
            },
            "id": "69",
            "links": {
                "self": "/routes/69"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-69",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Market Place Drive or Waltham Center",
                    "University Park"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Market Place Drive or Waltham Center - University Park",
                "short_name": "70",
                "sort_order": 50700,
                "text_color": "000000",
                "type": 3
            },
            "id": "70",
            "links": {
                "self": "/routes/70"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6170170",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Watertown Square",
                    "Harvard Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Watertown Square - Harvard Station",
                "short_name": "71",
                "sort_order": 50710,
                "text_color": "000000",
                "type": 3
            },
            "id": "71",
            "links": {
                "self": "/routes/71"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-71",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Waverley Square",
                    "Harvard Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Waverley Square - Harvard Station",
                "short_name": "73",
                "sort_order": 50730,
                "text_color": "000000",
                "type": 3
            },
            "id": "73",
            "links": {
                "self": "/routes/73"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-73",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Belmont Center",
                    "Harvard"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Belmont Center - Harvard via Concord Avenue",
                "short_name": "74",
                "sort_order": 50740,
                "text_color": "000000",
                "type": 3
            },
            "id": "74",
            "links": {
                "self": "/routes/74"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-727475",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Belmont Center",
                    "Harvard"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Belmont Center - Harvard via Huron Avenue",
                "short_name": "75",
                "sort_order": 50750,
                "text_color": "000000",
                "type": 3
            },
            "id": "75",
            "links": {
                "self": "/routes/75"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-727475",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Lincoln Lab",
                    "Alewife Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Lincoln Lab - Alewife Station",
                "short_name": "76",
                "sort_order": 50760,
                "text_color": "000000",
                "type": 3
            },
            "id": "76",
            "links": {
                "self": "/routes/76"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-6276",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Arlington Heights",
                    "Harvard Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Arlington Heights - Harvard Station",
                "short_name": "77",
                "sort_order": 50770,
                "text_color": "000000",
                "type": 3
            },
            "id": "77",
            "links": {
                "self": "/routes/77"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-77",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Arlmont Village",
                    "Harvard Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Arlmont Village - Harvard Station",
                "short_name": "78",
                "sort_order": 50780,
                "text_color": "000000",
                "type": 3
            },
            "id": "78",
            "links": {
                "self": "/routes/78"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-7884",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Arlington Center",
                    "Lechmere Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Arlington Center - Lechmere Station",
                "short_name": "80",
                "sort_order": 50800,
                "text_color": "000000",
                "type": 3
            },
            "id": "80",
            "links": {
                "self": "/routes/80"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-80",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Rindge Avenue",
                    "Central Square, Cambridge"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Rindge Avenue - Central Square, Cambridge",
                "short_name": "83",
                "sort_order": 50830,
                "text_color": "000000",
                "type": 3
            },
            "id": "83",
            "links": {
                "self": "/routes/83"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-83",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Spring Hill",
                    "Kendall/MIT Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Spring Hill - Kendall/MIT Station",
                "short_name": "85",
                "sort_order": 50850,
                "text_color": "000000",
                "type": 3
            },
            "id": "85",
            "links": {
                "self": "/routes/85"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-85",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Sullivan Square Station",
                    "Reservoir Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Sullivan Square Station - Reservoir Station",
                "short_name": "86",
                "sort_order": 50860,
                "text_color": "000000",
                "type": 3
            },
            "id": "86",
            "links": {
                "self": "/routes/86"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-86",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Clarendon Hill or Arlington Center",
                    "Lechmere Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Clarendon Hill or Arlington Center - Lechmere Station",
                "short_name": "87",
                "sort_order": 50870,
                "text_color": "000000",
                "type": 3
            },
            "id": "87",
            "links": {
                "self": "/routes/87"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-87",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Clarendon Hill",
                    "Lechmere Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Clarendon Hill - Lechmere Station",
                "short_name": "88",
                "sort_order": 50880,
                "text_color": "000000",
                "type": 3
            },
            "id": "88",
            "links": {
                "self": "/routes/88"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-88",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Clarendon Hill or Davis Station",
                    "Sullivan Square Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Clarendon Hill or Davis Station - Sullivan Square Station",
                "short_name": "89",
                "sort_order": 50890,
                "text_color": "000000",
                "type": 3
            },
            "id": "89",
            "links": {
                "self": "/routes/89"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-89",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Davis Station",
                    "Assembly Row"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Davis Station - Assembly Row",
                "short_name": "90",
                "sort_order": 50900,
                "text_color": "000000",
                "type": 3
            },
            "id": "90",
            "links": {
                "self": "/routes/90"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-90",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Sullivan Square Station",
                    "Central Square, Cambridge"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Sullivan Square Station - Central Square, Cambridge",
                "short_name": "91",
                "sort_order": 50910,
                "text_color": "000000",
                "type": 3
            },
            "id": "91",
            "links": {
                "self": "/routes/91"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-91",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Sullivan Square Station",
                    "Downtown"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Sullivan Square Station - Downtown via Main Street",
                "short_name": "92",
                "sort_order": 50920,
                "text_color": "000000",
                "type": 3
            },
            "id": "92",
            "links": {
                "self": "/routes/92"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-92",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Sullivan Square Station",
                    "Downtown"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Sullivan Square Station - Downtown via Bunker Hill Street",
                "short_name": "93",
                "sort_order": 50930,
                "text_color": "000000",
                "type": 3
            },
            "id": "93",
            "links": {
                "self": "/routes/93"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-93",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Medford Square",
                    "Davis Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Medford Square - Davis Station",
                "short_name": "94",
                "sort_order": 50940,
                "text_color": "000000",
                "type": 3
            },
            "id": "94",
            "links": {
                "self": "/routes/94"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-94",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "West Medford or Arlington Center",
                    "Sullivan Square Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "West Medford or Arlington Center - Sullivan Square Station",
                "short_name": "95",
                "sort_order": 50950,
                "text_color": "000000",
                "type": 3
            },
            "id": "95",
            "links": {
                "self": "/routes/95"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-95",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Medford Square",
                    "Harvard Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Medford Square - Harvard Station",
                "short_name": "96",
                "sort_order": 50960,
                "text_color": "000000",
                "type": 3
            },
            "id": "96",
            "links": {
                "self": "/routes/96"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-96",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Malden Center Station",
                    "Wellington Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Malden Center Station - Wellington Station",
                "short_name": "97",
                "sort_order": 50970,
                "text_color": "000000",
                "type": 3
            },
            "id": "97",
            "links": {
                "self": "/routes/97"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-97",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Woodland Road",
                    "Wellington Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Woodland Road - Wellington Station",
                "short_name": "99",
                "sort_order": 50990,
                "text_color": "000000",
                "type": 3
            },
            "id": "99",
            "links": {
                "self": "/routes/99"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-99",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Elm Street",
                    "Wellington Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Elm Street - Wellington Station",
                "short_name": "100",
                "sort_order": 51000,
                "text_color": "000000",
                "type": 3
            },
            "id": "100",
            "links": {
                "self": "/routes/100"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-100",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Malden Center Station",
                    "Sullivan Square Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Malden Center Station - Sullivan Square Station via Winter Hill",
                "short_name": "101",
                "sort_order": 51010,
                "text_color": "000000",
                "type": 3
            },
            "id": "101",
            "links": {
                "self": "/routes/101"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-101",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Malden Center Station",
                    "Sullivan Square Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Malden Center Station - Sullivan Square Station via Ferry Street",
                "short_name": "104",
                "sort_order": 51040,
                "text_color": "000000",
                "type": 3
            },
            "id": "104",
            "links": {
                "self": "/routes/104"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-104109",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Malden Center Station",
                    "Sullivan Square Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Malden Center Station - Sullivan Square Station via Newland Street Housing",
                "short_name": "105",
                "sort_order": 51050,
                "text_color": "000000",
                "type": 3
            },
            "id": "105",
            "links": {
                "self": "/routes/105"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-105",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Lebanon Loop",
                    "Wellington Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Lebanon Loop - Wellington Station",
                "short_name": "106",
                "sort_order": 51060,
                "text_color": "000000",
                "type": 3
            },
            "id": "106",
            "links": {
                "self": "/routes/106"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-106",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Linden Square",
                    "Wellington Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Linden Square - Wellington Station",
                "short_name": "108",
                "sort_order": 51080,
                "text_color": "000000",
                "type": 3
            },
            "id": "108",
            "links": {
                "self": "/routes/108"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-108",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Linden Square",
                    "Sullivan Square Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Linden Square - Sullivan Square Station",
                "short_name": "109",
                "sort_order": 51090,
                "text_color": "000000",
                "type": 3
            },
            "id": "109",
            "links": {
                "self": "/routes/109"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-104109",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Wonderland Station",
                    "Wellington Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wonderland Station - Wellington Station",
                "short_name": "110",
                "sort_order": 51100,
                "text_color": "000000",
                "type": 3
            },
            "id": "110",
            "links": {
                "self": "/routes/110"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-110",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Woodlawn",
                    "Haymarket Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Woodlawn - Haymarket Station",
                "short_name": "111",
                "sort_order": 51110,
                "text_color": "000000",
                "type": 3
            },
            "id": "111",
            "links": {
                "self": "/routes/111"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-111",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Wellington Station",
                    "Wood Island Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wellington Station - Wood Island Station",
                "short_name": "112",
                "sort_order": 51120,
                "text_color": "000000",
                "type": 3
            },
            "id": "112",
            "links": {
                "self": "/routes/112"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-112",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Community Bus",
                "direction_destinations": [
                    "Market Basket",
                    "Maverick Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Market Basket - Maverick Station",
                "short_name": "114",
                "sort_order": 51140,
                "text_color": "000000",
                "type": 3
            },
            "id": "114",
            "links": {
                "self": "/routes/114"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-114116117",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Wonderland Station",
                    "Maverick Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wonderland Station - Maverick Station via Revere Street",
                "short_name": "116",
                "sort_order": 51160,
                "text_color": "000000",
                "type": 3
            },
            "id": "116",
            "links": {
                "self": "/routes/116"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-114116117",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Key Bus",
                "direction_destinations": [
                    "Wonderland Station",
                    "Maverick Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wonderland Station - Maverick Station via Beach Street",
                "short_name": "117",
                "sort_order": 51170,
                "text_color": "000000",
                "type": 3
            },
            "id": "117",
            "links": {
                "self": "/routes/117"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-114116117",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Northgate Shopping Center",
                    "Beachmont Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Northgate Shopping Center - Beachmont Station",
                "short_name": "119",
                "sort_order": 51190,
                "text_color": "000000",
                "type": 3
            },
            "id": "119",
            "links": {
                "self": "/routes/119"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-119",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Orient Heights Station",
                    "Jeffries Point"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Orient Heights Station - Jeffries Point",
                "short_name": "120",
                "sort_order": 51200,
                "text_color": "000000",
                "type": 3
            },
            "id": "120",
            "links": {
                "self": "/routes/120"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-120121",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Wood Island Station",
                    "Maverick Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Wood Island Station - Maverick Station",
                "short_name": "121",
                "sort_order": 51210,
                "text_color": "000000",
                "type": 3
            },
            "id": "121",
            "links": {
                "self": "/routes/121"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-120121",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Melrose Highlands",
                    "Malden Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Melrose Highlands - Malden Center Station",
                "short_name": "131",
                "sort_order": 51310,
                "text_color": "000000",
                "type": 3
            },
            "id": "131",
            "links": {
                "self": "/routes/131"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-131132",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Redstone Shopping Center",
                    "Malden Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Redstone Shopping Center - Malden Center Station",
                "short_name": "132",
                "sort_order": 51320,
                "text_color": "000000",
                "type": 3
            },
            "id": "132",
            "links": {
                "self": "/routes/132"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-131132",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "North Woburn",
                    "Wellington Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "North Woburn - Wellington Station",
                "short_name": "134",
                "sort_order": 51340,
                "text_color": "000000",
                "type": 3
            },
            "id": "134",
            "links": {
                "self": "/routes/134"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-134",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Reading Depot",
                    "Malden Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Reading Depot - Malden Center Station",
                "short_name": "137",
                "sort_order": 51370,
                "text_color": "000000",
                "type": 3
            },
            "id": "137",
            "links": {
                "self": "/routes/137"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-136137",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Supplemental Bus",
                "direction_destinations": [
                    "Logan Airport Terminals",
                    "Nubian Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Logan Airport Terminals - Nubian Station",
                "short_name": "171",
                "sort_order": 51710,
                "text_color": "000000",
                "type": 3
            },
            "id": "171",
            "links": {
                "self": "/routes/171"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-171708",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Fields Corner Loop",
                    "Fields Corner Loop"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Fields Corner Loop via Neponset Ave",
                "short_name": "201",
                "sort_order": 52010,
                "text_color": "000000",
                "type": 3
            },
            "id": "201",
            "links": {
                "self": "/routes/201"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-201202",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Fields Corner Loop",
                    "Fields Corner Loop"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Fields Corner Loop via Adams Street",
                "short_name": "202",
                "sort_order": 52020,
                "text_color": "000000",
                "type": 3
            },
            "id": "202",
            "links": {
                "self": "/routes/202"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-201202",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Quincy Center Station",
                    "Fields Corner Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Quincy Center Station - Fields Corner Station",
                "short_name": "210",
                "sort_order": 52100,
                "text_color": "000000",
                "type": 3
            },
            "id": "210",
            "links": {
                "self": "/routes/210"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-210211212",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Quincy Center Station",
                    "Squantum"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Quincy Center Station - Squantum",
                "short_name": "211",
                "sort_order": 52110,
                "text_color": "000000",
                "type": 3
            },
            "id": "211",
            "links": {
                "self": "/routes/211"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-210211212",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Quincy Center Station",
                    "Ashmont Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Quincy Center Station - Ashmont Station via West Quincy",
                "short_name": "215",
                "sort_order": 52150,
                "text_color": "000000",
                "type": 3
            },
            "id": "215",
            "links": {
                "self": "/routes/215"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-215",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Houghs Neck",
                    "Quincy Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Houghs Neck - Quincy Center Station via Germantown",
                "short_name": "216",
                "sort_order": 52160,
                "text_color": "000000",
                "type": 3
            },
            "id": "216",
            "links": {
                "self": "/routes/216"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-214216",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Quincy Center Station",
                    "Ashmont Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Quincy Center Station - Ashmont Station via Wollaston Station",
                "short_name": "217",
                "sort_order": 52170,
                "text_color": "000000",
                "type": 3
            },
            "id": "217",
            "links": {
                "self": "/routes/217"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-217245",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Hingham Depot",
                    "Quincy Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Hingham Depot - Quincy Center Station",
                "short_name": "220",
                "sort_order": 52200,
                "text_color": "000000",
                "type": 3
            },
            "id": "220",
            "links": {
                "self": "/routes/220"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-220221222",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "East Weymouth",
                    "Quincy Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "East Weymouth - Quincy Center Station",
                "short_name": "222",
                "sort_order": 52220,
                "text_color": "000000",
                "type": 3
            },
            "id": "222",
            "links": {
                "self": "/routes/222"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-220221222",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Weymouth Landing",
                    "Quincy Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Weymouth Landing - Quincy Center Station",
                "short_name": "225",
                "sort_order": 52250,
                "text_color": "000000",
                "type": 3
            },
            "id": "225",
            "links": {
                "self": "/routes/225"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-225226",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Columbian Square",
                    "Braintree Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Columbian Square - Braintree Station",
                "short_name": "226",
                "sort_order": 52260,
                "text_color": "000000",
                "type": 3
            },
            "id": "226",
            "links": {
                "self": "/routes/226"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-225226",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Montello Station",
                    "Quincy Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Montello Station - Quincy Center Station",
                "short_name": "230",
                "sort_order": 52300,
                "text_color": "000000",
                "type": 3
            },
            "id": "230",
            "links": {
                "self": "/routes/230"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-230",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "South Shore Plaza",
                    "Quincy Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "South Shore Plaza - Quincy Center Station",
                "short_name": "236",
                "sort_order": 52360,
                "text_color": "000000",
                "type": 3
            },
            "id": "236",
            "links": {
                "self": "/routes/236"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-236",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Holbrook/Randolph Station",
                    "Quincy Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Holbrook/Randolph Station - Quincy Center Station",
                "short_name": "238",
                "sort_order": 52380,
                "text_color": "000000",
                "type": 3
            },
            "id": "238",
            "links": {
                "self": "/routes/238"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-238",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Avon Square",
                    "Ashmont Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Avon Square - Ashmont Station",
                "short_name": "240",
                "sort_order": 52400,
                "text_color": "000000",
                "type": 3
            },
            "id": "240",
            "links": {
                "self": "/routes/240"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-240",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Quincy Center Station",
                    "Mattapan Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Quincy Center Station - Mattapan Station",
                "short_name": "245",
                "sort_order": 52450,
                "text_color": "000000",
                "type": 3
            },
            "id": "245",
            "links": {
                "self": "/routes/245"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-217245",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "North Burlington",
                    "Alewife Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "North Burlington - Alewife Station",
                "short_name": "350",
                "sort_order": 53500,
                "text_color": "000000",
                "type": 3
            },
            "id": "350",
            "links": {
                "self": "/routes/350"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-350351",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Bedford Woods Drive",
                    "Third Avenue"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Bedford Woods Drive - Third Avenue",
                "short_name": "351",
                "sort_order": 53510,
                "text_color": "000000",
                "type": 3
            },
            "id": "351",
            "links": {
                "self": "/routes/351"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-350351",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "North Burlington",
                    "State Street, Boston"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Inner Express",
                "long_name": "North Burlington - State Street, Boston",
                "short_name": "354",
                "sort_order": 53540,
                "text_color": "000000",
                "type": 3
            },
            "id": "354",
            "links": {
                "self": "/routes/354"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-354",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Kennedy Drive or Jack Satter House",
                    "Malden Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Kennedy Drive or Jack Satter House - Malden Center Station",
                "short_name": "411",
                "sort_order": 54110,
                "text_color": "000000",
                "type": 3
            },
            "id": "411",
            "links": {
                "self": "/routes/411"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-411430",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Eastern Avenue & Essex Street",
                    "Wonderland Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Eastern Avenue & Essex Street - Wonderland Station",
                "short_name": "424",
                "sort_order": 54240,
                "text_color": "000000",
                "type": 3
            },
            "id": "424",
            "links": {
                "self": "/routes/424"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-424450456",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Central Square, Lynn",
                    "Haymarket or Wonderland Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Inner Express",
                "long_name": "Central Square, Lynn - Haymarket or Wonderland Station",
                "short_name": "426",
                "sort_order": 54260,
                "text_color": "000000",
                "type": 3
            },
            "id": "426",
            "links": {
                "self": "/routes/426"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-426428",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Oaklandvale",
                    "Haymarket Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Inner Express",
                "long_name": "Oaklandvale - Haymarket Station",
                "short_name": "428",
                "sort_order": 54280,
                "text_color": "000000",
                "type": 3
            },
            "id": "428",
            "links": {
                "self": "/routes/428"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-426428",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Northgate Shopping Center",
                    "Central Square, Lynn"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Northgate Shopping Center - Central Square, Lynn",
                "short_name": "429",
                "sort_order": 54290,
                "text_color": "000000",
                "type": 3
            },
            "id": "429",
            "links": {
                "self": "/routes/429"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-429",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Saugus Center",
                    "Malden Center Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Saugus Center - Malden Center Station",
                "short_name": "430",
                "sort_order": 54300,
                "text_color": "000000",
                "type": 3
            },
            "id": "430",
            "links": {
                "self": "/routes/430"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-411430",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Liberty Tree Mall",
                    "Central Square, Lynn"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Liberty Tree Mall - Central Square, Lynn via Peabody Square",
                "short_name": "435",
                "sort_order": 54350,
                "text_color": "000000",
                "type": 3
            },
            "id": "435",
            "links": {
                "self": "/routes/435"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-434435436",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Liberty Tree Mall",
                    "Central Square, Lynn"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Liberty Tree Mall - Central Square, Lynn via Goodwin Circle",
                "short_name": "436",
                "sort_order": 54360,
                "text_color": "000000",
                "type": 3
            },
            "id": "436",
            "links": {
                "self": "/routes/436"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-434435436",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Nahant",
                    "Wonderland Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Nahant - Wonderland Station",
                "short_name": "439",
                "sort_order": 54390,
                "text_color": "000000",
                "type": 3
            },
            "id": "439",
            "links": {
                "self": "/routes/439"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-439441442",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Marblehead",
                    "Wonderland Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Marblehead - Wonderland Station via Paradise Road",
                "short_name": "441",
                "sort_order": 54410,
                "text_color": "000000",
                "type": 3
            },
            "id": "441",
            "links": {
                "self": "/routes/441"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-439441442",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Marblehead",
                    "Wonderland Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Marblehead - Wonderland Station via Humphrey Street",
                "short_name": "442",
                "sort_order": 54420,
                "text_color": "000000",
                "type": 3
            },
            "id": "442",
            "links": {
                "self": "/routes/442"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-439441442",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Salem Depot",
                    "Wonderland or Haymarket Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Inner Express",
                "long_name": "Salem Depot - Wonderland or Haymarket Station",
                "short_name": "450",
                "sort_order": 54500,
                "text_color": "000000",
                "type": 3
            },
            "id": "450",
            "links": {
                "self": "/routes/450"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-424450456",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "North Beverly Station",
                    "Salem Depot"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "North Beverly Station - Salem Depot",
                "short_name": "451",
                "sort_order": 54510,
                "text_color": "000000",
                "type": 3
            },
            "id": "451",
            "links": {
                "self": "/routes/451"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-451465",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Salem Depot",
                    "Wonderland Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Salem Depot - Wonderland Station",
                "short_name": "455",
                "sort_order": 54550,
                "text_color": "000000",
                "type": 3
            },
            "id": "455",
            "links": {
                "self": "/routes/455"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-455",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Salem Depot",
                    "Central Square, Lynn"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Salem Depot - Central Square, Lynn",
                "short_name": "456",
                "sort_order": 54560,
                "text_color": "000000",
                "type": 3
            },
            "id": "456",
            "links": {
                "self": "/routes/456"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-424450456",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Brighton Center",
                    "Federal Street & Franklin Street"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Inner Express",
                "long_name": "Brighton Center - Federal Street & Franklin Street",
                "short_name": "501",
                "sort_order": 55010,
                "text_color": "000000",
                "type": 3
            },
            "id": "501",
            "links": {
                "self": "/routes/501"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-501503",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Watertown Yard",
                    "Federal Street & Franklin Street"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Inner Express",
                "long_name": "Watertown Yard - Federal Street & Franklin Street",
                "short_name": "504",
                "sort_order": 55040,
                "text_color": "000000",
                "type": 3
            },
            "id": "504",
            "links": {
                "self": "/routes/504"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-502504",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Waltham Center",
                    "Federal Street & Franklin Street"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Inner Express",
                "long_name": "Waltham Center - Federal Street & Franklin Street",
                "short_name": "505",
                "sort_order": 55050,
                "text_color": "000000",
                "type": 3
            },
            "id": "505",
            "links": {
                "self": "/routes/505"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-505553554",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Roberts",
                    "Newton Corner"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Roberts - Newton Corner",
                "short_name": "553",
                "sort_order": 55530,
                "text_color": "000000",
                "type": 3
            },
            "id": "553",
            "links": {
                "self": "/routes/553"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-505553554",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Waverley Square",
                    "Newton Corner"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Waverley Square - Newton Corner",
                "short_name": "554",
                "sort_order": 55540,
                "text_color": "000000",
                "type": 3
            },
            "id": "554",
            "links": {
                "self": "/routes/554"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-505553554",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Waltham Highlands",
                    "Newton Corner"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Waltham Highlands - Newton Corner",
                "short_name": "556",
                "sort_order": 55560,
                "text_color": "000000",
                "type": 3
            },
            "id": "556",
            "links": {
                "self": "/routes/556"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-556558",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Commuter Bus",
                "direction_destinations": [
                    "Riverside Station",
                    "Newton Corner"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Riverside Station - Newton Corner",
                "short_name": "558",
                "sort_order": 55580,
                "text_color": "000000",
                "type": 3
            },
            "id": "558",
            "links": {
                "self": "/routes/558"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-556558",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Point Shirley",
                    "Orient Heights Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Point Shirley - Orient Heights Station via Revere Street",
                "short_name": "712",
                "sort_order": 57120,
                "text_color": "000000",
                "type": 3
            },
            "id": "712",
            "links": {
                "self": "/routes/712"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-712713",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Point Shirley",
                    "Orient Heights Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Point Shirley - Orient Heights Station via Winthrop Center",
                "short_name": "713",
                "sort_order": 57130,
                "text_color": "000000",
                "type": 3
            },
            "id": "713",
            "links": {
                "self": "/routes/713"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-712713",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Pemberton Point, Hull",
                    "Station Street, Hingham"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Pemberton Point, Hull - Station Street, Hingham",
                "short_name": "714",
                "sort_order": 57140,
                "text_color": "000000",
                "type": 3
            },
            "id": "714",
            "links": {
                "self": "/routes/714"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-714",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "FFC72C",
                "description": "Local Bus",
                "direction_destinations": [
                    "Cobbs Corner",
                    "Mattapan Station"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Local Bus",
                "long_name": "Cobbs Corner - Mattapan Station",
                "short_name": "716",
                "sort_order": 57160,
                "text_color": "000000",
                "type": 3
            },
            "id": "716",
            "links": {
                "self": "/routes/716"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-716",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        }
    ],
    "jsonapi": {
        "version": "1.0"
    }
};


export const stop_data = new Map();
stop_data.set("Red", {
    "data": [
        {
            "attributes": {
                "address": "Alewife Brook Pkwy and Cambridge Park Dr, Cambridge, MA 02140",
                "at_street": null,
                "description": null,
                "latitude": 42.39583,
                "location_type": 1,
                "longitude": -71.141287,
                "municipality": "Cambridge",
                "name": "Alewife",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-alfcl",
            "links": {
                "self": "/stops/place-alfcl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-alfcl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "College Ave and Elm St, Somerville, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.39674,
                "location_type": 1,
                "longitude": -71.121815,
                "municipality": "Somerville",
                "name": "Davis",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-davis",
            "links": {
                "self": "/stops/place-davis"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-davis"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "1899 Massachusetts Ave, Cambridge, MA 02140",
                "at_street": null,
                "description": null,
                "latitude": 42.3884,
                "location_type": 1,
                "longitude": -71.119149,
                "municipality": "Cambridge",
                "name": "Porter",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-portr",
            "links": {
                "self": "/stops/place-portr"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-portr"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1A",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "1400 Massachusetts Ave, Cambridge, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.373362,
                "location_type": 1,
                "longitude": -71.118956,
                "municipality": "Cambridge",
                "name": "Harvard",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-harsq",
            "links": {
                "self": "/stops/place-harsq"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-harsq"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Massachusetts Ave and Prospect St, Cambridge, MA 02139",
                "at_street": null,
                "description": null,
                "latitude": 42.365486,
                "location_type": 1,
                "longitude": -71.103802,
                "municipality": "Cambridge",
                "name": "Central",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-cntsq",
            "links": {
                "self": "/stops/place-cntsq"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-cntsq"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "300 Main St, Cambridge, MA 02142",
                "at_street": null,
                "description": null,
                "latitude": 42.362491,
                "location_type": 1,
                "longitude": -71.086176,
                "municipality": "Cambridge",
                "name": "Kendall/MIT",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-knncl",
            "links": {
                "self": "/stops/place-knncl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-knncl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Cambridge St and Charles St, Boston, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.361166,
                "location_type": 1,
                "longitude": -71.070628,
                "municipality": "Boston",
                "name": "Charles/MGH",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-chmnl",
            "links": {
                "self": "/stops/place-chmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-chmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Tremont St and Winter St, Boston, MA 02108",
                "at_street": null,
                "description": null,
                "latitude": 42.356395,
                "location_type": 1,
                "longitude": -71.062424,
                "municipality": "Boston",
                "name": "Park Street",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-pktrm",
            "links": {
                "self": "/stops/place-pktrm"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-pktrm"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Washington St and Summer St, Boston, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.355518,
                "location_type": 1,
                "longitude": -71.060225,
                "municipality": "Boston",
                "name": "Downtown Crossing",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-dwnxg",
            "links": {
                "self": "/stops/place-dwnxg"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-dwnxg"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "700 Atlantic Ave, Boston, MA 02110",
                "at_street": null,
                "description": null,
                "latitude": 42.352271,
                "location_type": 1,
                "longitude": -71.055242,
                "municipality": "Boston",
                "name": "South Station",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-sstat",
            "links": {
                "self": "/stops/place-sstat"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-sstat"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1A",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dorchester Ave and Broadway, Boston, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.342622,
                "location_type": 1,
                "longitude": -71.056967,
                "municipality": "Boston",
                "name": "Broadway",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-brdwy",
            "links": {
                "self": "/stops/place-brdwy"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-brdwy"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dorchester Ave and Southhampton St, South Boston, MA 02127",
                "at_street": null,
                "description": null,
                "latitude": 42.330154,
                "location_type": 1,
                "longitude": -71.057655,
                "municipality": "Boston",
                "name": "Andrew",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-andrw",
            "links": {
                "self": "/stops/place-andrw"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-andrw"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "599 Old Colony Ave, Boston, MA 02127-3805",
                "at_street": null,
                "description": null,
                "latitude": 42.320685,
                "location_type": 1,
                "longitude": -71.052391,
                "municipality": "Boston",
                "name": "JFK/UMass",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-jfk",
            "links": {
                "self": "/stops/place-jfk"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-jfk"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1A",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "125 Savin Hill Ave, Dorchester, MA 02124",
                "at_street": null,
                "description": null,
                "latitude": 42.31129,
                "location_type": 1,
                "longitude": -71.053331,
                "municipality": "Boston",
                "name": "Savin Hill",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-shmnl",
            "links": {
                "self": "/stops/place-shmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-shmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "50 Freeman St, Dorchester, MA 02122",
                "at_street": null,
                "description": null,
                "latitude": 42.300093,
                "location_type": 1,
                "longitude": -71.061667,
                "municipality": "Boston",
                "name": "Fields Corner",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-fldcr",
            "links": {
                "self": "/stops/place-fldcr"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-fldcr"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dayton St and Clementine Park, Dorchester, MA 02124",
                "at_street": null,
                "description": null,
                "latitude": 42.293126,
                "location_type": 1,
                "longitude": -71.065738,
                "municipality": "Boston",
                "name": "Shawmut",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-smmnl",
            "links": {
                "self": "/stops/place-smmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-smmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dorchester Ave and Ashmont St, Boston, MA 02124",
                "at_street": null,
                "description": null,
                "latitude": 42.28452,
                "location_type": 1,
                "longitude": -71.063777,
                "municipality": "Boston",
                "name": "Ashmont",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-asmnl",
            "links": {
                "self": "/stops/place-asmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-asmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Hancock St and Hunt St, Quincy, MA 02171",
                "at_street": null,
                "description": null,
                "latitude": 42.275275,
                "location_type": 1,
                "longitude": -71.029583,
                "municipality": "Quincy",
                "name": "North Quincy",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-nqncy",
            "links": {
                "self": "/stops/place-nqncy"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-nqncy"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "90 Woodbine St, Quincy, MA 02171",
                "at_street": null,
                "description": null,
                "latitude": 42.266514,
                "location_type": 1,
                "longitude": -71.020337,
                "municipality": "Quincy",
                "name": "Wollaston",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-wlsta",
            "links": {
                "self": "/stops/place-wlsta"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-wlsta"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "175 Thomas E Burgin Pkwy, Quincy, MA 02169",
                "at_street": null,
                "description": null,
                "latitude": 42.251809,
                "location_type": 1,
                "longitude": -71.005409,
                "municipality": "Quincy",
                "name": "Quincy Center",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-qnctr",
            "links": {
                "self": "/stops/place-qnctr"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-qnctr"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Burgin Pkwy and Centre St, Quincy, MA 02169",
                "at_street": null,
                "description": null,
                "latitude": 42.233391,
                "location_type": 1,
                "longitude": -71.007153,
                "municipality": "Quincy",
                "name": "Quincy Adams",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-qamnl",
            "links": {
                "self": "/stops/place-qamnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-qamnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "197 Ivory St, Braintree, MA 02184",
                "at_street": null,
                "description": null,
                "latitude": 42.207854,
                "location_type": 1,
                "longitude": -71.001138,
                "municipality": "Braintree",
                "name": "Braintree",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-brntn",
            "links": {
                "self": "/stops/place-brntn"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-brntn"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-2",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        }
    ],
    "jsonapi": {
        "version": "1.0"
    }
})