import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Badge } from 'react-bootstrap';
import {Icon, Label} from 'semantic-ui-react';
import charities from '../../assets/charities.json';
import * as fs from 'fs'

//const [selectedCenter, setSelectedCenter] = useState(null);

class SimpleMap extends Component {

    static defaultProps = {
        center: {
            lat: 29.6345,
            lng: -82.3371
        },
        zoom: 15
    };

    render() {
        var json = {
            "html_attributions" : [],
            "results" : [
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6508828,
                        "lng" : -82.3327446
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.65223107989272,
                           "lng" : -82.33124397010728
                        },
                        "southwest" : {
                           "lat" : 29.64953142010728,
                           "lng" : -82.33394362989272
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "Lupus Foundation of Gainesville",
                  "opening_hours" : {
                     "open_now" : false
                  },
                  "place_id" : "ChIJYZEoD4-j6IgRviRClnHjD18",
                  "plus_code" : {
                     "compound_code" : "MM28+9W Gainesville, Florida",
                     "global_code" : "76XVMM28+9W"
                  },
                  "rating" : 0,
                  "reference" : "ChIJYZEoD4-j6IgRviRClnHjD18",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 0,
                  "vicinity" : "720 SW 2nd Ave, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6507256,
                        "lng" : -82.323746
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.65223522989272,
                           "lng" : -82.32239592010728
                        },
                        "southwest" : {
                           "lat" : 29.64953557010728,
                           "lng" : -82.32509557989272
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "Gainesville Charity Car Donation",
                  "opening_hours" : {
                     "open_now" : false
                  },
                  "place_id" : "ChIJqzjALW6j6IgRiWzQW4wyd2g",
                  "plus_code" : {
                     "compound_code" : "MM2G+7G Gainesville, Florida",
                     "global_code" : "76XVMM2G+7G"
                  },
                  "rating" : 5,
                  "reference" : "ChIJqzjALW6j6IgRiWzQW4wyd2g",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 8,
                  "vicinity" : "101 SE 1st Ave, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6360119,
                        "lng" : -82.340887
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.63736382989272,
                           "lng" : -82.33946752010728
                        },
                        "southwest" : {
                           "lat" : 29.63466417010728,
                           "lng" : -82.34216717989271
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "Ronald Mc Donald House",
                  "opening_hours" : {
                     "open_now" : true
                  },
                  "photos" : [
                     {
                        "height" : 2988,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/117486866024097697057\"\u003eYaravi Coriano\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRZAAAAatcrn3Fa01rd0eT6fYZlndnyzirpREsC3WwF-AKi4SutzLm9N5KxXx1H6-mqYk9J7fakuIDVmE34C1LpYVULvq3zQl2ahUhgHcGXwZ0vRkeaPcrWtcPSpneWOUdGNJwPEhAbGtxL3AyFUtK_WThcMQstGhSnpHt-Czo7G22hufYyruIs9DMMFQ",
                        "width" : 5312
                     }
                  ],
                  "place_id" : "ChIJW6bt8KGj6IgRTldZPjE43lY",
                  "plus_code" : {
                     "compound_code" : "JMP5+CJ Gainesville, Florida",
                     "global_code" : "76XVJMP5+CJ"
                  },
                  "rating" : 4.7,
                  "reference" : "ChIJW6bt8KGj6IgRTldZPjE43lY",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 106,
                  "vicinity" : "1600 SW 14th St, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.633871,
                        "lng" : -82.3433632
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.63521937989272,
                           "lng" : -82.34199602010729
                        },
                        "southwest" : {
                           "lat" : 29.63251972010728,
                           "lng" : -82.34469567989272
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "American Cancer Society",
                  "opening_hours" : {
                     "open_now" : false
                  },
                  "photos" : [
                     {
                        "height" : 2560,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/110129614159560672553\"\u003eNicole Hallman\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAPwV9TtfNVaia7b3Qsydwzw5h_Hl6uW8wFD7fvc81E7FVByjDhPsSm4-JT7H_e7ipAC0CtiJxOM1lS5bU_G6DfqaEV7I4qppAzeyPwLvhV7MiFkDw1xpMQvEeT7TacB_vEhCpE8tLin4ZuEY6ktX45XXKGhQUqUTLqjNkNPjON6T5dgyxKbZDPw",
                        "width" : 1440
                     }
                  ],
                  "place_id" : "ChIJCe-v8aCj6IgRaNk4xNnfobk",
                  "plus_code" : {
                     "compound_code" : "JMM4+GM Gainesville, Florida",
                     "global_code" : "76XVJMM4+GM"
                  },
                  "rating" : 4.3,
                  "reference" : "ChIJCe-v8aCj6IgRaNk4xNnfobk",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 12,
                  "vicinity" : "2119 SW 16th St, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6328289,
                        "lng" : -82.3429199
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.63430007989272,
                           "lng" : -82.34147837010728
                        },
                        "southwest" : {
                           "lat" : 29.63160042010728,
                           "lng" : -82.34417802989272
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "American Cancer Society - Winn-Dixie Hope Lodge - Gainesville, FL",
                  "opening_hours" : {
                     "open_now" : true
                  },
                  "photos" : [
                     {
                        "height" : 3120,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/106266481734405573776\"\u003eCarolyn Powell\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAiT_z5_6aVVZozARqiplujdorpm40FDT60OU1r0FkSMnrxJqL3AobPOGhjnzB0lhuSzdjB7cXHevB9vsQI2-Vv0U-aqDe_64Tat-IrpeVy2vt8gaZVSX19KMNyfv70r4REhCc7CdIENsZziBx9JgCMOUpGhQbZw4_ekgWrPURANgeQSwdEBenpw",
                        "width" : 4160
                     }
                  ],
                  "place_id" : "ChIJ7TWn3qCj6IgRGotnx4x-i9s",
                  "plus_code" : {
                     "compound_code" : "JMM4+4R Gainesville, Florida",
                     "global_code" : "76XVJMM4+4R"
                  },
                  "rating" : 4.8,
                  "reference" : "ChIJ7TWn3qCj6IgRGotnx4x-i9s",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 32,
                  "vicinity" : "2121 SW 16th St, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6304943,
                        "lng" : -82.3387621
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.63176752989272,
                           "lng" : -82.33740942010728
                        },
                        "southwest" : {
                           "lat" : 29.62906787010728,
                           "lng" : -82.34010907989273
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
                  "name" : "Alachua Habitat for Humanity ReStore",
                  "opening_hours" : {
                     "open_now" : false
                  },
                  "photos" : [
                     {
                        "height" : 2268,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/104700872406660409688\"\u003eimac007\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAArQGBPEAIld8kyT3H1UQbpb6pL2MlW3hnJJJaH5f2rkFz4mLBuPxZKchYyjIzAx4NNaM3HorPvh9Dc4o7h3o6RgDgPi137OT7VO1GbReEutsdNxdr1iEdHOMpGGCj_VXREhDE30irS5IPmpa7BP5BzzqQGhQ4P0T-GuaKoL5IsLjjq6tqSh7VsA",
                        "width" : 4032
                     }
                  ],
                  "place_id" : "ChIJB4omEqSj6IgRTgnAtC4jy6k",
                  "plus_code" : {
                     "compound_code" : "JMJ6+5F Gainesville, Florida",
                     "global_code" : "76XVJMJ6+5F"
                  },
                  "rating" : 4.1,
                  "reference" : "ChIJB4omEqSj6IgRTgnAtC4jy6k",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "store", "establishment" ],
                  "user_ratings_total" : 141,
                  "vicinity" : "2317 SW 13th St, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6484206,
                        "lng" : -82.3278541
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.64989697989272,
                           "lng" : -82.32644347010728
                        },
                        "southwest" : {
                           "lat" : 29.64719732010727,
                           "lng" : -82.32914312989273
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "Gainesville Community Ministry",
                  "opening_hours" : {
                     "open_now" : false
                  },
                  "photos" : [
                     {
                        "height" : 747,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/104700872406660409688\"\u003eimac007\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAA7ehajCYn4Voa0cwsu1n2k_KznhXHPgGkdo1WlrwckWoHUnI77eyUWYBT4hxQwMk1Euavmd5FdyUDBf7ayhCJW3ZnqV4ZBp9wgi-eDReomwRvBhXNF-fHABpbzJlZJj9CEhDrndOZdBRHvqsFc4EAb2U5GhTtc0FIhrjIMaSbp7JGW5ex60cCBQ",
                        "width" : 1052
                     }
                  ],
                  "place_id" : "ChIJ81SF842j6IgRf_mMH46LYU0",
                  "plus_code" : {
                     "compound_code" : "JMXC+9V Gainesville, Florida",
                     "global_code" : "76XVJMXC+9V"
                  },
                  "rating" : 4.3,
                  "reference" : "ChIJ81SF842j6IgRf_mMH46LYU0",
                  "scope" : "GOOGLE",
                  "types" : [ "food", "point_of_interest", "store", "establishment" ],
                  "user_ratings_total" : 61,
                  "vicinity" : "238 SW 4th Ave, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6524639,
                        "lng" : -82.3459943
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.65364012989272,
                           "lng" : -82.34464557010728
                        },
                        "southwest" : {
                           "lat" : 29.65094047010728,
                           "lng" : -82.34734522989272
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "Knights of Columbus",
                  "place_id" : "ChIJyfmmj3ij6IgRIcNM9Zky5Uo",
                  "plus_code" : {
                     "compound_code" : "MM23+XJ Gainesville, Florida",
                     "global_code" : "76XVMM23+XJ"
                  },
                  "rating" : 0,
                  "reference" : "ChIJyfmmj3ij6IgRIcNM9Zky5Uo",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 0,
                  "vicinity" : "1738 W University Ave, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6491503,
                        "lng" : -82.3236656
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.65047767989272,
                           "lng" : -82.32222707010729
                        },
                        "southwest" : {
                           "lat" : 29.64777802010728,
                           "lng" : -82.32492672989272
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "Sustainable Cambodia, Inc.",
                  "place_id" : "ChIJTbgFM42j6IgRO0LvXioKBTo",
                  "plus_code" : {
                     "compound_code" : "JMXG+MG Gainesville, Florida",
                     "global_code" : "76XVJMXG+MG"
                  },
                  "rating" : 0,
                  "reference" : "ChIJTbgFM42j6IgRO0LvXioKBTo",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 0,
                  "vicinity" : "101 SE 2 Pl #201, Gainesville"
               },
               {
                  "business_status" : "OPERATIONAL",
                  "geometry" : {
                     "location" : {
                        "lat" : 29.6472641,
                        "lng" : -82.32451429999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 29.64862977989273,
                           "lng" : -82.32339462010727
                        },
                        "southwest" : {
                           "lat" : 29.64593012010728,
                           "lng" : -82.32609427989271
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                  "name" : "Facial Pain Association",
                  "opening_hours" : {
                     "open_now" : false
                  },
                  "place_id" : "ChIJ9frdmI6j6IgRv8pKk9aIQtk",
                  "plus_code" : {
                     "compound_code" : "JMWG+W5 Gainesville, Florida",
                     "global_code" : "76XVJMWG+W5"
                  },
                  "rating" : 0,
                  "reference" : "ChIJ9frdmI6j6IgRv8pKk9aIQtk",
                  "scope" : "GOOGLE",
                  "types" : [ "point_of_interest", "establishment" ],
                  "user_ratings_total" : 0,
                  "vicinity" : "22 SE 5th Ave Suite D, Gainesville"
               }
            ],
            "status" : "OK"
         }
        var charities = json.results;
        console.log(charities)
        // Object.keys(json.results).forEach(function (key) {
        //     charities.push(json.results[key]);
        // });
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDOH-pA2icLq8Lcwmqr0gqtUDCvRkc3LVw' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {charities.map(item => <MapMarker key={item.place_id} lat={item.geometry.location.lat} lng={item.geometry.location.lng} text={item.name} />)}
                </GoogleMapReact>
            </div>
        );
    }
}

class MapMarker extends React.Component {

    

    render() {

        const openCharity = () => {
            var win = window.open('www.google.com', '_blank');
            win.focus();
        }

        return (
            <div key={this.props.key}>
                <Label onClick={openCharity} color='orange'>
                    {this.props.text}
                </Label>
            </div>
        )
    }
}

export default SimpleMap;