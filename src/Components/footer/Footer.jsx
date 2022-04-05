import "./footer.scss";
import { YouTube, Instagram, Twitter, Facebook } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="footerInfo">
      <div className="icons">
        <Instagram className="iconoRSociales" />
        <Twitter className="iconoRSociales" />
        <Facebook className="iconoRSociales" />
        <YouTube className="iconoRSociales" />
      </div>
      <div className="infoMid">
        <div className="listas">
          <ul>
            <button>Audio y subtitulos</button>
            <button>Prensa</button>
            <button>Privacidad</button>
            <button>Contáctanos</button>
          </ul>
          <ul>
            <button>Audio descriptivo</button>
            <button>Relaciones con inversionistas</button>
            <button>Avisos Legales</button>
          </ul>
          <ul>
            <button>Centro de ayuda</button>
            <button>Empleo</button>
            <button>Preferencias de cookies</button>
          </ul>
          <ul>
            <button>Tarjetas de regao</button>
            <button>Término de uso</button>
            <button>Informacion corporativa</button>
          </ul>
        </div>
      </div>
      <div className="infoBot">
        <span>@ 2020-2021 powered by Nucba</span>
      </div>
    </div>
  );
}
