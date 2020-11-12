import React from 'react';
import { Link } from 'react-router-dom';
import macncheese from '../../assets/macncheese.jpg';
import './Card.css';

const Card = () => {
    return (
        <div className='Recipe'>

            {/* Recipe, top */}

            <img src={macncheese} id = "cheese" />

            <div id = "Recipeinfo">
                <h1 id="Title"> Recipe Name</h1>  
                <p id="Diff"> Difficulty: </p>
                <p id="Time"> Time: </p>
                <p id = "Description"> Small info about recipe. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>    

            

        </div>
    )
}

export default Card;
