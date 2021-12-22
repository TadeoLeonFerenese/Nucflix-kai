import "./lobby.scss";
import LoginButton from "../../Components/auth0/Login";

export default function Lobby() {
  return (
    <div className="container">
      <div className="logo">
        <img className="imgLogo" src="/img/nucflix.png" alt="logo" />
      </div>

      <div className="info">
        <ul>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <LoginButton /> 
          {/*  EN EL BTN DE LOGIN TENGO QUE DARLE ESTILOS SEPARADO DEL DE LOGOUT PERO UNA VEZ HECHA LA RUTA  */}
        </ul>
      </div>
    </div>
  );
}
