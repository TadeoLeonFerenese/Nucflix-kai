import "./App.scss";
import { LoginButton } from "./Components/auth0/Login";
import { LogoutButton } from "./Components/auth0/Logout";
import { Profile } from "./Components/auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import  Home   from "./Components/home/Home"

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div >
      <header>
        <Home />
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
