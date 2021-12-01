import logo from "./logo.svg";
import "./App.css";
import { LoginButton } from "./Components/auth0/Login";
import { LogoutButton } from "./Components/auth0/Logout";
import { Profile } from "./Components/auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
