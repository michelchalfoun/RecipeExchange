import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

function Create() {
    return (
        <div >
            <Jumbotron>
                <h1>Create Page</h1>
                <p>This is where you will create your recipes.</p>
                <Button href="/Home" variant="primary">Go back home</Button>
            </Jumbotron>
        </div>
    );
}

export default Create;
