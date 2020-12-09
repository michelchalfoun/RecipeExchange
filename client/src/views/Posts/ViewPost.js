import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import SinglePost from "../../components/Posts/single-post.component"
import "./ViewPost.css"

function ViewPost() {
    return (
        <div class = "App3">
            <SinglePost></SinglePost>
            <Button href="/Dashboard">Back to Dashboard</Button>
        </div>
    );
}

export default ViewPost;