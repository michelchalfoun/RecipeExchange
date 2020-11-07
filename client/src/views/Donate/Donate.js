import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import SimpleMap from'../../components/GoogleMap/GoogleMap'

function Donate() {
    return (
        <div >
            <Jumbotron>
                <h1>Have some leftover ingredients?.</h1>
                <p>Check out the map below to find nearby charities to donate to.</p>
                <p>Clikc on the building icons to find out more information about each charity.</p>
            </Jumbotron>
            <SimpleMap></SimpleMap>
        </div>
    );
}

export default Donate;
