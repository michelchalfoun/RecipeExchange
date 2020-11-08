import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
//import { useAuth0 } from "@auth0/auth0-react";

function EditProfile() {

      //const { user, isAuthenticated } = useAuth0();

      // let email;
      // if (isAuthenticated) {
      //   email = user.email;
      // }


  return (
    <div>
      <Jumbotron>
        <h1>Edit Profile Info:</h1>
        
        <Button href="/Profile" variant="primary">
            Cancel
        </Button>
      </Jumbotron>
    </div>
  );
}

export default EditProfile;
