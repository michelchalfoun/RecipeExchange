// ** create-user.component.js ** //

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";

function CreateUser() {

    const history = useHistory();
    const { user } = useAuth0();
    const [userInfo, setUserInfo] = useState([]);
    const [successMsg, setSuccessMsg] = useState(false);
    const [failMsg, setFailMsg] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('/users/create', userInfo)
            .then(function (res) {
                setFailMsg(false)
                setSuccessMsg(true)
                console.log(res.data)
                setTimeout( () => history.push('/Profile'), 3000)
            }).catch(function (error) {
                setSuccessMsg(false)
                setFailMsg(true)
                console.log(error)
            });


    }


    return (
        <div className="wrapper">
            <form onSubmit={onSubmit}>
                <div>
                    <h3>All fields marked with * are required.</h3>
                </div>
                <div className="form-group">
                    <label className = "label">Username: *</label>
                    <input type="text" placeholder="Please submit a username" value={userInfo.username} onChange={e => setUserInfo({ ...userInfo, username: e.target.value, email: user.email })} className="titlebox" required />
                </div>
                <div className="form-group">
                    <label className = "label">School: </label>
                    <input type="text" placeholder="Where do you go to school?" value={userInfo.school} onChange={e => setUserInfo({ ...userInfo, school: e.target.value })} className="titlebox" />
                </div>
                <div className="form-group">
                    <label className = "label" >Diet: </label>
                    <input type="text" placeholder="Do you have a specific diet? (e.g. vegan, vegetarian, etc.)" value={userInfo.diet} onChange={e => setUserInfo({ ...userInfo, diet: e.target.value })} className="titlebox" />
                </div>
                <div className="form-group">
                    <label className = "label">Bio: </label>
                    <input type="text" placeholder="Share a little bit about yourself!" value={userInfo.bio} onChange={e => setUserInfo({ ...userInfo, bio: e.target.value })} className="titlebox" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Account" className="bttn" />
                </div>
            </form>
            {successMsg &&
                 <a class="ui green label">Your account was successfully submitted!</a>
            }
            {failMsg &&
                <a class="ui red label">Your account has already been submitted!</a>
            }
        </div>
    )

}

export default CreateUser;