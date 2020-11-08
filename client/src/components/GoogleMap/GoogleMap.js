import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Spinner } from 'react-bootstrap'
import axios from 'axios';

class SimpleMap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            charities: [],
            coordinates: {
                lat: 0,
                lng: 0
            }
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        navigator.geolocation.getCurrentPosition(function (position) {
            this.setState({
                coordinates: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            })
            axios.get('http://localhost:5000/charity/getCharities',
                {
                    params: {
                        coordinates: String(position.coords.latitude) + ',' + String(position.coords.longitude)
                    }
                })
                .then((res) => {
                    this.setState({
                        charities: res.data,
                        isLoading: false
                    })
                }).catch((error) => {
                    console.log(error)
                });

        }.bind(this))
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                {!this.state.isLoading && (
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDOH-pA2icLq8Lcwmqr0gqtUDCvRkc3LVw' }}
                        defaultCenter={this.state.coordinates}
                        defaultZoom={15}
                    >
                        {this.state.charities.map(item => <MapMarker key={item.place_id} place_id={item.place_id} lat={item.geometry.location.lat} lng={item.geometry.location.lng} text={item.name} />)}
                    </GoogleMapReact>
                )}
                {this.state.isLoading && (
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Spinner animation="border" role="status" >
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                )}
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
                <i onClick={openCharity} class="blue large building icon"></i>
            </div>
        )
    }
}

export default SimpleMap;