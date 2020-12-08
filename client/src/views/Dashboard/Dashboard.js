import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import DisplayPost from "../../components/Posts/display-post.component"
import "./Dashboard.scss"

function Dashboard() {
    return (
        <div className = "App2">
            <div className="Header">
                <p>Scroll to view posted recipes!</p>
                <p>Have a recipe to share?</p>
                <a href="/CreateRecipe">Create a Post!</a>
            </div>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

            <DisplayPost> </DisplayPost>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>
        </div>
    );
}

export default Dashboard;