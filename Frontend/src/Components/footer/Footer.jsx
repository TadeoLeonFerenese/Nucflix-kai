import "./footer.scss";
import { YouTube, Instagram,  Twitter, Facebook }  from "@mui/icons-material"

export default function Footer() {
  return ( 
  <div className="footerInfo">
     <div className="icons">
     <Instagram />
      <Twitter />
      <Facebook />
      <YouTube />
     </div>
     <div className="infoMid">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse rem voluptatibus corporis nemo vel facilis
     </div>
     <div className="infoBot">
        <span>@ 2020-2021 powered by Nucba</span>
     </div>
  </div>
  
  )
}
