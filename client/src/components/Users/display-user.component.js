import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap';
import user from '../../assets/user_place.png'
import { useAuth0 } from '@auth0/auth0-react';
import './display-user.component.css';


export default function User () {

    const { user } = useAuth0();
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        axios.get('/users/' + user.name)
        .then(res =>{
            if(res.data != null) {setUserInfo(res.data)}})
            .catch(err => console.log(err));
        }, [user.name]);


    return (
        <div className = "App">
            <div className = "Sidebar">

                <h2>User Information</h2>
                <h1 className = "SideText">
                    User Name: {userInfo.username}
                </h1>
                <h1 className = "SideText">
                    Email: {userInfo.email}
                </h1>
                <h1 className = "SideText">
                    School: {userInfo.school}
                </h1>
                <h1 className = "SideText">
                    Bio: {userInfo.bio}
                </h1>

            {/*<Button href="/EditProfile" variant="primary">Edit Profile</Button>*/}


            </div>



            <div className = "Main">
                <div className = "Header">
                    <h1>Hello, {userInfo.username}!</h1>
                    <p>You are currently logged in and this is your profile page.</p>
                </div>

                <div className="Border">
                    <p>
                    aaaa
                    </p>


                </div>

            </div>
        </div>
    )
}
