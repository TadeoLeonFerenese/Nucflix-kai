import "./App.scss";
import { useAuth0 } from "@auth0/auth0-react";
import  Home   from "./Components/home/Home"

function App() {
 

  return (
    <div >
      <header>
        <Home />
      </header>
    </div>
  );
}

export default App;
