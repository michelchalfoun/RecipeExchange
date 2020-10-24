import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";


//This authentication wrapper basically acts as a switch. If you are logged in, all "log-in" buttons will be displayed as a "log-out" button 
// and vice versa. This makes it to where the site UI can recognize a user is logged in.

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;