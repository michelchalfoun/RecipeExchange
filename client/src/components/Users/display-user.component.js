import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import userImg from '../../assets/user_place.png'
import { useAuth0 } from '@auth0/auth0-react';
import './display-user.component.css';
import DataTable from '../Tables/recipe-cards.component';


export default function User() {

    const { user } = useAuth0();
    const { email } = useParams();
    const [isOwnProfile, setIsOwnProfile] = useState(false);
    const [postCollection, setPostCollection] = useState([]);
    const [userInfo, setUserInfo] = useState([])
    const [doneLoading, setDoneLoading] = useState(false);

    useEffect(() => {

        axios.get('/users/' + email)
            .then((res) => {
                if (res.data != null) {
                    setUserInfo(res.data)
                    if (res.data.email == user.email) {
                        setIsOwnProfile(true)
                    }
                    for (var index = 0; index < res.data.favorites.length; index++) {
                        console.log(res.data.favorites[index])
                        axios.get('/posts/' + res.data.favorites[index])
                            .then((res2) => {
                                setPostCollection(postCollection => [...postCollection, res2.data])
                            })
                            .catch((error2) => {
                                console.log(error2)
                            })
                    }
                    setDoneLoading(true)
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }, [user.email]);


    const recipeCards = () => {
        console.log(postCollection)
        return postCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    return (
        <div className>
            <div className="Sidebar">

                <img class="resize1" src={userInfo.img} />

                <h2>User Information</h2>
                <h1 className="SideText">
                    Username: {userInfo.username}
                </h1>
                <h1 className="SideText">
                    Email: {userInfo.email}
                </h1>
                <h1 className="SideText">
                    School: {userInfo.school}
                </h1>
                <h1 className="SideText">
                    Bio: {userInfo.bio}
                </h1>
                {isOwnProfile &&
                    <Link id="Edit" to='/EditProfile'>Edit Profile</Link>
                }


            </div>


            {isOwnProfile &&
                <div>
                    <div className="Main">
                        <div className="Header">
                            <h1>Hello, {userInfo.username}!</h1>
                            <p>You are currently logged in and this is your profile page.</p>
                            <p>Below are your favorited recipe posts that other users can see!</p>
                        </div>

                        <div className="Border">
                            <p>
                                aaaa
                    </p>


                        </div>
                    </div>

                    <div className="wrapper-users">
                        <div className="container">
                            {doneLoading &&
                                recipeCards()
                            }
                        </div>
                    </div>
                </div>

            }

            {!isOwnProfile &&
                <div>
                    <div className="Main">
                        <div className="Header">
                            <h1>Here are {userInfo.username}'s favorite recipes!</h1>
                        </div>

                        <div className="Border">
                            <p>
                                aaaa
                    </p>

                        </div>
                    </div>


                    <div className="wrapper-users">
                        <div className="container">
                            {doneLoading &&
                                recipeCards()
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
