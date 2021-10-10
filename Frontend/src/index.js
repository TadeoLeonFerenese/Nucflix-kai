import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ev3u556b.us.auth0.com"
    clientId="FAdIMNadCTsm4pVvxUK7rX6HTji9wVv9"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
