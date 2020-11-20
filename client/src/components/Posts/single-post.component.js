import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";


function SinglePost() {

    const { postID } = useParams();
    const { user } = useAuth0();
    const history = useHistory();
    const [postData, setPostData] = useState([]);
    const [isAuthor, setIsAuthor] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [deleteFail, setDeleteFail] = useState(false);

    useEffect(() => {
        axios.get('/posts/' + postID)
            .then(res => {
                if (res.data != null) {
                    setPostData(res.data);
                }
                if (user.email == res.data.author) {
                    setIsAuthor(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [postID]);

   
    const deletePost = (e) => {
        e.preventDefault()

        axios.delete('/posts/delete/' + postData._id)
            .then(res => {
                setDeleteSuccess(true);
                setTimeout( () => history.push('/Dashboard'), 2000)
            })
            .catch(function (error){
                console.log(error)
                setDeleteFail(true);
            })

    }

    
    return (
        <div className="wrapper-users">
            <div className="container">
                <h1>{postData.title}</h1>
                <h2>Created by <a href={'/Profile/' + postData.author}>{postData.authorUsername}</a></h2>
                <h3>{postData.description}</h3>
                <h5>{"Cook Time: " + postData.estimateTime}</h5>
                <ul>
                    <li>{"Ingredients: " + postData.ingredients}</li>
                    <li>{"Instructions: " + postData.instructions}</li>
                </ul>
                {isAuthor &&
                    <button class="ui red basic button" onClick={e => deletePost(e)}>Delete Post</button>
                } 
                {deleteSuccess &&
                    <a class="ui green label">Your post was successfully deleted!</a>
                }
                {deleteFail &&
                    <a class="ui red label">Your post failed to delete properly!</a>
                }   
            </div>
        </div>
    )
    

}

export default SinglePost;