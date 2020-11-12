import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


export default function User () {

    const { user } = useAuth0();
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users/' + user.name)
        .then(res =>{
            if(res.data != null) {setUserInfo(res.data)}})
            .catch(err => console.log(err));
        }, [user.name]);


    return (
        <div>
            <h1>Hello, {userInfo.username}!</h1>
            <p>You are currently logged in and this is your profile page.</p>
            <div>
                <h2>User Information:</h2>
                <p><b>Username: </b>{userInfo.username}</p>
                <p><b>Email: </b>{userInfo.email}</p>
                <p><b>School: </b> {userInfo.school}</p>
                <p><b>Bio: </b> {userInfo.bio} </p>
            </div>
        </div>
    )
}
