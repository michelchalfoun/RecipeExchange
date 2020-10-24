import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//This button takes the user straight to a sign-up page instead of the login page.

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

return <button onClick={() => loginWithRedirect({
      screen_hint: "signup",
  })
}>Sign Up</button>;
};

export default LoginButton;