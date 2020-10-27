import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

function Favorite() {
    return (
        <div >
            <Jumbotron>
                <h1>Favorite Page</h1>
                <p>This is where you will see the recipes you saved.</p>
                <Button href="/Home" variant="primary">Go back home</Button>
            </Jumbotron>
        </div>
    );
}

export default Favorite;
