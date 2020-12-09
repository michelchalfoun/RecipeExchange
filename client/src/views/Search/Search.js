import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import DisplaySearch from "../../components/Posts/display-search.component"
import "./Search.css"


function Search() {
    return (
        <div className = "App3" >
            <div className="Header">
                <h1>Search Page.</h1>
                <p>This is where you will be able to search for recipes.</p>
            </div>
            <div className="Border">
                <p>
                aaaa
                </p>
            </div>
            <DisplaySearch></DisplaySearch>
        </div>
    );
}

export default Search;
