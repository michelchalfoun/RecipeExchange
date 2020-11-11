import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import SimpleMap from'../../components/GoogleMap/GoogleMap'
import './Donate.css';

function Donate() {
    return (
        <div className = "App" >

        {/*statement  at top*/}

            <div className="Header" >
                <p>
                    Support your local community.
                </p>

                <p>
                    Have some leftover ingredients?
                </p>
            </div>

        {/*just a border for aesthetics lol*/}
        
            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

        {/*Map*/}

            <div className = "Map">

            <p className = "MidText">Click on the building icons to find out more information about each charity.</p>
                
            <SimpleMap id="Mapp"></SimpleMap>

            </div>
        

        <div className="Border">
                <p>
                aaaa
                </p>
        </div>
        </div>
    );
}

export default Donate;
