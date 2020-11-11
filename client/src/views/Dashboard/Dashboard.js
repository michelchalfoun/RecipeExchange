import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import DisplayPost from "../../components/Posts/display-post.component"
import "./Dashboard.scss"

function Dashboard() {
    return (
        <Jumbotron>
            <div className="Display">
                <h1>Posted Recipes</h1>
                <p>Scroll to view previously posted recipes!</p>
            </div>
            <hr></hr>
            <DisplayPost> </DisplayPost>
        </Jumbotron>
    );
}

export default Dashboard;