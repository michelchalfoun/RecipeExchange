import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';

function Signup() {
    const { user, isAuthenticated } = useAuth0();
    const emailString = user.email
    return (
        <div >
            <h1 >
                    Signup Page
            </h1>
            <form method="POST" action="/Signup" id="userinput">
                <label>Email:</label>
                <br></br>
                <input type="text" name="email" value="testemail" readOnly></input>
                <label>Username:</label>
                <br></br>
                <input type="text" name="username" required></input>
                <br></br>
                <input type="submit" value="SetUsername" className="submitButton"></input>
            </form>
        </div>
    );
}

export default Signup;
