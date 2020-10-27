import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

function Donate() {
    return (
        <div >
            <Jumbotron>
                <h1>Donate Page.</h1>
                <p>This is where you will see all the nearby charities.</p>
                <Button href="/Home" variant="primary">Go back home</Button>
            </Jumbotron>
        </div>
    );
}

export default Donate;
