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

          <span>Inicio</span>
          <span>Series</span>
          <span>Películas</span>
          <span>Novedades populares</span>
          <span>Mi Lista</span>
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

          <button className="buttonSearch">Niños</button>
          <Notifications className="icon" />
          <img
            src="https://i.pinimg.com/originals/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg"
            alt="avatar"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <button>Opciones</button>
              <button>Logout</button>
            </div>
          </div>
          {/* ESTO ES PARA UTILIZAR AUTH0 PARA EL LOGIN,LOGOUT y PROFILE  */}
          {/* {isAuthenticated ? (
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
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
