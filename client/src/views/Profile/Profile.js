import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import User from '../../components/Users/display-user.component'

import './Profile.css'

function Profile() {
    return (
        <div className = "App" >

                <User></User>
                {/*<Button href="/EditProfile" variant="primary">Edit Profile</Button>*/}

        </div>
    );
}

export default Profile;
