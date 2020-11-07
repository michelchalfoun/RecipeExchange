import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

class SimpleMap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            charities: [],
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        console.log('LMAO')
        axios.get('http://localhost:5000/charity/getCharities')
            .then((res) => {
                this.setState({ charities: res.data })
                this.setState({ isLoading: false })
                console.log('success')
            }).catch((error) => {
                console.log(error)
                console.log('error')
            });
    }

    static defaultProps = {
        center: {
            lat: 29.6345,
            lng: -82.3371
        },
        zoom: 15
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                {!this.state.isLoading && (
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDOH-pA2icLq8Lcwmqr0gqtUDCvRkc3LVw' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        {this.state.charities.map(item => <MapMarker key={item.place_id} place_id={item.place_id} lat={item.geometry.location.lat} lng={item.geometry.location.lng} text={item.name} />)}
                    </GoogleMapReact>
                )}
                {this.state.isLoading && (
                    <h1>Loading</h1>
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