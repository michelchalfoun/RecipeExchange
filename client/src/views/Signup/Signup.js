import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap'
import CreateUser from '../../components/Users/create-user.component'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";

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
        <div >
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
