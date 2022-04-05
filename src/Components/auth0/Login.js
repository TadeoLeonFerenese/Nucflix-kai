import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { axios } from "axios";

export const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
  }

  return (
    <button className="LBTN" onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
};

export default LoginButton;
