import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

function Search() {
    return (
        <div >
            <Jumbotron>
                <h1>Search Page.</h1>
                <p>This is where you will search for recipes.</p>
                <Button href="/Home" variant="primary">Go back home</Button>
            </Jumbotron>
        </div>
    );
}

export default Search;
