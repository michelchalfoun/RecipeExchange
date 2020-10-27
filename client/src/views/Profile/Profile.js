import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Jumbotron, Button } from 'react-bootstrap'

function Profile() {
    return (
        <div >
            <Jumbotron>
                <h1>Hello, user!</h1>
                <p>
                    You are currently logged in and this is your profile page.
  </p>
                <p>
                    <Button href="/Home" variant="primary">Go back home</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default Profile;
