import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import User from '../../components/Users/display-user.component'

function Profile() {
    return (
        <div >
            <Jumbotron>
                <User></User>
                <Button href="/EditProfile" variant="primary">Edit Profile</Button>
                <Button href="/Home" variant="primary">Go back home</Button>
            </Jumbotron>

        </div>
    );
}

export default Profile;
