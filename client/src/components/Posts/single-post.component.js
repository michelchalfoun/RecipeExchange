import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


function SinglePost() {

    const { postID } = useParams();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        axios.get('/posts/' + postID)
            .then(res => {
                if (res.data != null) {
                    setPostData(res.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [postID]);
    

    
    return (
        <div className="wrapper-users">
            <div className="container">
                <h1>{postData.title}</h1>
                <h3>{postData.description}</h3>
                <h5>{"Cook Time: " + postData.estimateTime}</h5>
                <ul>
                    <li>{"Ingredients: " + postData.ingredients}</li>
                    <li>{"Instructions: " + postData.instructions}</li>
                </ul>
            </div>
        </div>
    )
    

}

export default SinglePost;