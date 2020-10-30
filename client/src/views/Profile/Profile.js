import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

function Profile() {
    return (
        <div >
            <Jumbotron>
                <h1>Hello, user!</h1>
                <p>You are currently logged in and this is your profile page.</p>
                <Button href="/EditProfile" variant="primary">Edit Profile</Button>
                <Button href="/Home" variant="primary">Go back home</Button>
            </Jumbotron>
        </div>
    );
}

export default Profile;
