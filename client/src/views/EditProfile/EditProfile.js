import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import EditUser from '../../components/Users/edit-user.component'


function EditProfile() {
  return (
    <div>
      <Jumbotron>
        <h1>Edit Profile Info:</h1>
        <EditUser></EditUser>
        <Button href="/Profile" variant="primary">
            Cancel
        </Button>
      </Jumbotron>
    </div>
  );
}

export default EditProfile;
