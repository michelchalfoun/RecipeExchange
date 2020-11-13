import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import EditUser from '../../components/Users/edit-user.component'
import './EditProfile.css'


function EditProfile() {
  return (
    <div className = "App2">
        <div className="Header" >
            <p>
              Edit Your Profile Information
            </p>    
        </div>

        <div className="Border">
            <p>
              aaaa
            </p>
        </div>

        <EditUser></EditUser>

        <div className="Border">
            <p>
              aaaa
            </p>
        </div>
    </div>
  );
}

export default EditProfile;
