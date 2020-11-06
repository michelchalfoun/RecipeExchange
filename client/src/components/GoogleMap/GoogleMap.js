import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

class SimpleMap extends Component {

    static defaultProps = {
        center: {
            lat: 29.6345,
            lng: -82.3371
        },
        zoom: 15
    };

    render() {
        const params = {
            key: 'AIzaSyDOH-pA2icLq8Lcwmqr0gqtUDCvRkc3LVw',
            location: '29.6345,-82.3371',
            radius: '5000',
            keyword: 'charities'
        }
        const headers = {
            "Access-Control-Allow-Origin": "*"
        }
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?', 
        {params: params}, {headers: headers})
            .then((res) => {
                const charities = res.data
            }).catch((error) => {
                console.log(error)
            });
        console.log(charities)
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDOH-pA2icLq8Lcwmqr0gqtUDCvRkc3LVw' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {charities.results.map(item => <MapMarker key={item.place_id} place_id={item.place_id} lat={item.geometry.location.lat} lng={item.geometry.location.lng} text={item.name} />)}
                </GoogleMapReact>
            </div>
        );
    }
}

class MapMarker extends React.Component {

    render() {

        const openCharity = () => {
            var win = window.open('https://www.google.com/maps/place/?q=place_id:' + this.props.place_id, '_blank');
            win.focus();
        }

        return (
            <div style={{ cursor: "pointer" }} key={this.props.key}>
                <i onClick={openCharity} class="building icon" size="large"></i>
                {/* {this.props.text} */}

            </div>
        )
    }
}

export default SimpleMap;