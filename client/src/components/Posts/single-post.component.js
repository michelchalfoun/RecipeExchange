import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";
import './single-post.component.css'


function SinglePost() {

    //Post and User Related Boolean/Data Hooks
    const { postID } = useParams();
    const { user, isLoading } = useAuth0();
    const history = useHistory();
    const [postData, setPostData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [isAuthor, setIsAuthor] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [deleteFail, setDeleteFail] = useState(false);

    //Favorite Button Hooks
    const [hasFavorited, setHasFavorited] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [favorites, setFavorites] = useState(0);

    //Perform these actions upon loading the page
    useEffect(() => {

        //Retrieve Post details
        axios.get('/posts/' + postID)
            .then(res => {
                if (res.data != null) {
                    setPostData(res.data);
                    setFavorites(res.data.favorited);
                }
                if (user.email == res.data.author) {
                    setIsAuthor(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            })

        //Retrieve user details to update favorites list
        axios.get('/users/' + user.email)
            .then(res => {
                if (res.data != null) {
                    setUserData(res.data);
                    //If user has previously favorited, set the favorited and updated variables to true to reflect that clicking favorite now will unfavorite 
                    if (res.data.favorites.includes(postID)) {
                        setHasFavorited(true);
                        setUpdated(true);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [postID, user.email]);


    const deletePost = (e) => {
        e.preventDefault()

        axios.delete('/posts/delete/' + postData._id)
            .then(res => {
                setDeleteSuccess(true);
                setTimeout(() => history.push('/Dashboard'), 2000)
            })
            .catch(function (error) {
                console.log(error)
                setDeleteFail(true);
            })

    }

    const updateFavorites = (e) => {
        e.preventDefault()

        //Code for toggling between favorite and unfavorite
        if (!updated) {
            postData.favorited = postData.favorited + 1;
            setHasFavorited(true);
            setUpdated(true);
            //Add the post's ID to the favorites array of the user
            if (!userData.favorites.includes(postData._id)) {
                userData.favorites.push(postData._id);
            }
        } else {
            postData.favorited = postData.favorited - 1;
            setHasFavorited(false);
            setUpdated(false);
            //Delete the post's ID from the favorites array of the user
            if (userData.favorites.includes(postData._id)) {
                var index = userData.favorites.indexOf(postData._id)
                userData.favorites.splice(index, 1);
            }
        }


        //Update the post to reflect the new number of times it has been favorited
        axios.put('/posts/update/' + postData._id, postData)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });


        //Update the user that contains the updated favorites array to reflect a newly favorited/unfavorited post
        axios.put('/users/update/' + userData._id, userData)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    }


    return (
        <div className="wrapper-users2">
            <div className="Header">
                 <p>
                    <p id = "pagetitle">{postData.title}</p>
                </p>    
           </div>

            <div className="Border">
                <p>
                     
                </p>
            </div>

            <div className="container2">

                {/* All relevant post details that need to be formatted */}
                
                <div id = "green">
                    <p id = "created"><b>Created by: </b><a href={'/Profile/' + postData.author}>{postData.authorUsername}</a></p>
                    
                </div>
                <div id = "important_info">
                    <p class = "mini_text"><b>Cook Time: </b>{postData.estimateTime}</p>
                    <p class = "mini_text"><b>Favorited by: </b> {postData.favorited + " Users"}</p>
                    {/* Filled star for when user has favorited */}
                    <div id = "star">
                    <p class = "mini_text"> <b> Favorite </b></p>
                        {hasFavorited &&
                            <i class="star icon" onClick={e => updateFavorites(e)}></i>
                        }

                        {/* Empty Star for before user has favorited the post */}
                        {!hasFavorited &&
                            <i class="star outline icon" onClick={e => updateFavorites(e)}></i>
                        }
                    </div>
                </div>
                <p class = "description">{postData.description}</p>
                <h2>Ingredients</h2>
                <p class = "description">{postData.ingredients}</p>

                <h2>Instructions</h2>
                <p class = "description">{postData.instructions}</p>

                {/* If the user created the viewed post, they will be able to see and click a delete button. */}
                {isAuthor &&
                    <button class="ui red basic button" onClick={e => deletePost(e)}>Delete Post</button>
                }




                {/* Status reporting messages for deleting posts. Only appear if user is the author or an admin andcan see delete button*/}
                {deleteSuccess &&
                    <a class="ui green label">Your post was successfully deleted!</a>
                }

                {deleteFail &&
                    <a class="ui red label">Your post failed to delete properly!</a>
                }
            </div>

            <div className="Border">
                <p>
                     
                </p>
            </div>
        </div>
    )


}

export default SinglePost;