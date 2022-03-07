import "./navbar.scss";
import { useState } from "react";
import { Notifications, ArrowDropDown, Search } from "@mui/icons-material";
import { LoginButton } from "../auth0/Login";
import { LogoutButton } from "../auth0/Logout";
import { Profile } from "../auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const [isScrolled, setIsScrolled] = useState(false);

  const mostrarInput = () => {
    document.getElementById("input").style.display = "block";
  };
  const ocultarInput = () => {
    let busqueda = document.getElementById("input");
    if (busqueda.value == "") busqueda.style.display = "none";
  }; //PREGUNTAR COMO HACER PARA QUE CAMBIE EL DISPLAY SIN TENER QUE HACER ESTAS DOS FUNCTIONS;

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="/img/nucflix.png" alt="logo" />

          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <div className="inputbusqueda">
            <input
              id="input"
              type="text"
              placeholder="Busqueda"
              onBlur={ocultarInput}
            />
            <button className="buttonSearch" onClick={mostrarInput}>
              <Search className="icon" />
            </button>
          </div>

          <span>KIDS</span>
          <Notifications className="icon" />
          {isAuthenticated ? (
            <div className="profile">
              <Profile />
              <div className="options">
                <button>Options</button>
                <LogoutButton className="logout" />
              </div>
              <ArrowDropDown className="icon" />
            </div>
          ) : (
            <LoginButton className="login" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
