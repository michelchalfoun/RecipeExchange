import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

//Use a ProtectedRoute in the App.js whenever you want to create a component only accesible when logged in.


const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component)}
    {...args}
  />
);

export default ProtectedRoute;