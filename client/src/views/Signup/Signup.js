import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';
import CreateUser from '../../components/Users/create-user.component'

function Signup() {
    const { user, isAuthenticated } = useAuth0();
    const emailString = user.email
    return (
        <div >
            {/* <form method="POST" action="/Signup" id="userinput">
                <label>Email:</label>
                <br></br>
                <input type="text" name="email" value="testemail" readOnly></input>
                <label>Username:</label>
                <br></br>
                <input type="text" name="username" required></input>
                <br></br>
                <input type="submit" value="SetUsername" className="submitButton"></input>
            </form>*/}
            <Jumbotron>
            <h1>
                    Signup Page
            </h1>
                <CreateUser></CreateUser>
            </Jumbotron>
        </div> 
    );
}

export default Signup;
