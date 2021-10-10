import logo from "./logo.svg";
import "./App.css";
import { LoguinButton } from "./Components/Login/Login";
import { LogoutButton } from "./Components/Login/Logout";
import { Profile } from "./Components/Login/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoguinButton />
        <LogoutButton />
        <Profile />
      </header>
    </div>
  );
}

export default App;
