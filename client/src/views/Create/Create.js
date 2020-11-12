import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap'
import "./Create.css"
import CreatePost from "../../components/Posts/create-post.component"
import { useAuth0 } from "@auth0/auth0-react"

function Create() {
    return (
        // <div className="Create">
        //     <Jumbotron>
        //         <h1>Create Page</h1>
        //         <p>This is where you will create your recipes.</p>
        //         <form method="POST" action="/Create" id="recipeinput">
        //             <label>Title:</label>
        //             <br></br>
        //             <input type="text" name="title" required></input>
        //             <br></br>
        //             <label>Description:</label>
        //             <br></br>
        //                 <textarea type="text" name="body"></textarea>
        //             <br></br>
        //             <label>Estimated Cook Time:</label>
        //             <br></br>
        //             <select id="cooktime" form="recipeinput" type="number" name="cooktime">
        //                 <option value="30" label="30 Minutes or Less"></option>
        //                 <option value="60" label="30 Minutes to 1 Hour"></option>
        //                 <option value="120" label="One to Two Hours"></option>
        //                 <option value="500" label="Over Two Hours"></option>
        //                 <option value="10000" label="One Day or Longer"></option>
        //             </select>
        //             <br></br>
        //             <label>Ingredients:</label>
        //             <br></br>
        //                 <textarea type="text" name="ingredients"></textarea>
        //             <br></br>
        //             <label>Instructions:</label>
        //             <br></br>
        //                 <textarea type="text" name="instructions"></textarea>
        //             <br></br>
        //             <input type="submit" value="Post Recipe" className="submitButton"></input>
        //         </form>
        //         <br></br>
        //         <Button href="/Home" variant="primary">Go back home</Button>
        //     </Jumbotron>
        // </div>
        <div className = "App2">
            <div className="Header" >
                <p>
                    Create a Recipe Post
                </p>
                 <p>
                    Fill in the details of your recipe below! 
                </p>     
           </div>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

            <CreatePost>
            </CreatePost>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>
        </div>


    );
}

export default Create;