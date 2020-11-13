import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap'
import CreateUser from '../../components/Users/create-user.component'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";
import './Signup.css'

function Signup() {

    const { user } = useAuth0();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('/users/' + user.name)
        .then(res =>{
            if(res.data != null) {history.push('/Profile')}})
        .catch(err =>console.log(err));
        }, [user.name]);

    return (
        <div className = "App2">
            <div className="Header" >
                <p>
                  Sign Up for an Account!
                </p>    
            </div>

            <div className="Border">
                <p>
                  aaaa
                </p>
            </div>

                <CreateUser></CreateUser>

            <div className="Border">
                <p>
                  aaaa
                </p>
            </div>
        </div> 
    );
}

export default Signup;
