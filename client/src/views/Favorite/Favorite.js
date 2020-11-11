import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import Card from "../../components/Card/Card"
import './Favorite.css';

function Favorite() {
    return (
        <div className = "App">

        {/*statement  at top*/}

 			<div className="Header" >
                <p id = "BigText">
                    Come back to your favourite recipes anytime.
                </p>
            </div>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

        </div>
    );
}

export default Favorite;
