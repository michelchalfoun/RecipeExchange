import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import SinglePost from "../../components/Posts/single-post.component"

function ViewPost() {
    return (
        <Jumbotron>
            <SinglePost></SinglePost>
            <Button href="/Dashboard">Back to Dashboard</Button>
        </Jumbotron>
    );
}

export default ViewPost;