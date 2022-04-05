import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss";
import ReactPlayer from 'react-player'


export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <ReactPlayer
        className="react-player"
        playing
        controls
          url="https://www.youtube.com/watch?v=75UFiOuOWBo&t=1826s"
      />
    </div>
  );
}