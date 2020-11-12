import React from 'react';
import fieldnfork from '../../assets/fieldnfork.jpeg';
import Card from "../../components/Card/Card"
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (


        <div className="App">

        {/*bar at top*/}

                <div className="Header" >
                    <p>
                        Thousands of recipes, just a few clicks away!
                    </p>
                     <p>
                        Welcome to Recipe Exchange. The world's simplest recipe sharing website.
                    </p>     
                </div>

        {/*just a border for aesthetics lol*/}
        
            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

        {/*charities*/}

            <div className="Charity">

                <p className = "BigText">
                    Charity of the Week
                </p>

                <p>
                    At RecipeExchange we strive to give back to the community.
                    Find out how you can do the same by visiting our charities page.
                </p>
                <p>
                    Alternatively, check back on the homepage every week to find out about
                    a new charity close to you.
                </p>

                <p className = "MidText">
                    This week's charity is:
                </p>

                <h2 className = "MidText">
                    Field and Fork Pantry
                </h2>

                <img src={fieldnfork} id = "fieldnfork" />


                <Link className= "Link" to="/Donate"> 
                    Find out more
                </Link>

            </div>

        {/*border*/}

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

        {/*Create recipe*/}

            <div className="Create">

                <p className = "BigText">
                    Create Your Own Recipes
                </p>
                <p>
                    Start cooking and sharing your meals now!
                </p>

                <Link className="Link" to='/CreateRecipe'>Create Now!</Link>
            </div>

        {/*border*/}

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

        {/*Feature Recipe*/}

            <div className="RecipeFeature">
                <h1 className = "BigText">
                    Featured Recipe:
                </h1>

                <Card>
                </Card>
            </div>

        {/*border*/}

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>
        </div>
    );
}

export default Home;
