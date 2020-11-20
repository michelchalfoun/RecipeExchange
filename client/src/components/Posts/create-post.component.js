import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './create-post.component.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";



function CreatePost() {

    const { user } = useAuth0();
    const [postInfo, setPostInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [successMsg, setSuccessMsg] = useState(false);
    const [failMsg, setFailMsg] = useState(false);
    const history = useHistory();

    useEffect(() => { 
        setPostInfo({...postInfo, estimateTime: "5-10 Minutes"})
        axios.get('/users/' + user.email) 
            .then((res) => {
                if(res.data != null) {
                    setUserInfo(res.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [user.email]);


    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('/posts/create', postInfo)
            .then((res) => {
                console.log(res.data)
                setSuccessMsg(true)
                setFailMsg(false)
                setTimeout( () => history.push('Dashboard/' + res.data._id), 2000)
            }).catch((error) => {
                console.log(error)
                setFailMsg(true)
                setSuccessMsg(false)
            });

    }

    return (
        <div className="wrapper">
            <form onSubmit={onSubmit}>

            {/*title and cook time*/}

                <div className="form-group">
                    <label className = "label">Title: *</label>
                    <input type="text" value={postInfo.title} onChange={e => setPostInfo({...postInfo, title: e.target.value, author: user.name, authorUsername: userInfo.username})} className="titlebox" required />
                    <label className = "label">Estimated Prep/Cook Time: *</label>
                    <div>
                        <select className="dropdown" id="cooktime" form="recipeinput" type="number" name="cooktime" value={postInfo.estimateTime} onChange={e => setPostInfo({...postInfo, estimateTime: e.target.value})}>
                            <option value="5-10 Minutes" label="5-10 Minutes"></option>
                            <option value="10-15 Minutes" label="10-15 Minutes"></option>
                            <option value="20-30 Minutes" label="20-30 Minutes"></option>
                            <option value="30-60 Minutes" label="30-60 Minutes"></option>
                            <option value="1+ Hour" label="1+ Hour"></option>
                        </select>
                    </div>
                </div>

            {/*Description*/}

                <div className="form-group2">
                    <label>Description: *</label>
                    <textarea value={postInfo.description} onChange={e => setPostInfo({...postInfo, description: e.target.value})} className="longtextbox" required/>
                </div>

            {/*Ingredients*/}
                <div className="form-group2">
                    <label>Ingredients: *</label>
                    <textarea value={postInfo.ingredient} onChange={e => setPostInfo({...postInfo, ingredients: e.target.value})} className="longtextbox" required/>
                </div>

            {/*Instructions*/}
                <div className="form-group2">
                    <label>Instructions: *</label>
                    <textarea value={postInfo.instructions} onChange={e => setPostInfo({...postInfo, instructions: e.target.value})} className="longtextbox" required/>
                </div>

            {/*Submit*/}
                <div className="form-group">
                    <input type="submit" value="Create Recipe" className="bttn" />
                </div>
            </form>
            {successMsg &&
                 <a class="ui green label">Your recipe was successfully posted!</a>
            }
            {failMsg &&
                <a class="ui red label">Your recipe has already been posted!</a>
            }
        </div>

    )
}

export default CreatePost
