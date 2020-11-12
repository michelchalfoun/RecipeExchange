import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";

export default function EditUser () {

    const history = useHistory();
    const { user } = useAuth0();
    const [userInfo, setUserInfo] = useState([])
    const [successMsg, setSuccessMsg] = useState(false)

    //Load userInfo right away
    useEffect(() => {
        axios.get('http://localhost:5000/users/' + user.name)
        .then(res =>{
            if(res.data != null) {setUserInfo(res.data)}})
            .catch(err => console.log(err));
        }, [user.name]);

    //Submit user updates
    const onSubmit = (e) => {
        e.preventDefault()

         axios.put('http://localhost:5000/users/edit/' + user.name, userInfo)
            .then((res) => {
                setSuccessMsg(true)
                setTimeout( () => history.push('/Profile'), 3000)
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

    }

    return (
        <div className="wrapper">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>School:</label>
                    <input type="text" value={userInfo.school} onChange={e => setUserInfo({...userInfo, school: e.target.value})} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Diet:</label>
                    <input type="text" value={userInfo.diet} onChange={e => setUserInfo({...userInfo, diet: e.target.value})} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Biography:</label>
                    <input type="text" value={userInfo.bio} onChange={e => setUserInfo({...userInfo, bio: e.target.value})} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Profile" className="btn btn-success btn-block" />
                </div>
            </form>
            {successMsg &&
                 <a class="ui green label">Your profile has been updated!</a>
            }
        </div>

    )
}
