import "./navbar.scss";
import { useState } from "react";
import { Notifications, ArrowDropDown, Search } from "@mui/icons-material";
import { LoginButton } from "../auth0/Login";
import { LogoutButton } from "../auth0/Logout";
import { Profile } from "../auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { element } from "prop-types";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const [isScrolled, setIsScrolled] = useState(false);

  // const [busqueda, setBusqueda] = useState("");

  // const handleChange = (e) => {
  //   setBusqueda(e.target.value);
  //   filtrar(e.target.value);
  // };

  // const filtrar = (terminoBusqueda) => {
  //   var resultadosBusqeda = peliculas.filter((elemento) => {
  //     if (
  //       elemento.original_title
  //         .toString()
  //         .toLoweCase()
  //         .includes(terminoBusqueda.toLowerCase()) ||
  //       elemento.title
  //         .toString()
  //         .toLoweCase()
  //         .includes(terminoBusqueda.toLowerCase())
  //     ) {
  //       return elemento;
  //     }
  //   });
  //   peliculas(resultadosBusqeda);
  // };

  
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
          <button className="buttonSearch">
            <input element={element}  type="text" placeholder="Busqueda" />
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
