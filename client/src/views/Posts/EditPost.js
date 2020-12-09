import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import EditView from "../../components/Posts/edit-post.component.js"

function EditPost() {
    return (
        <div className = "App2">
            <div className="Header" >
                <p>
                    Modify your Recipe Post below!
                </p>
           </div>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>

            <EditView></EditView>

            <div className="Border">
                <p>
                aaaa
                </p>
            </div>
        </div>
    );
}

export default EditPost;