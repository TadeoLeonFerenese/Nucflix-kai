import {  InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

export default function Featured() {
    return (
        <div className="featured">
            <img  src="https://i0.wp.com/zoomf7.net/wp-content/uploads/2019/08/fight-club-1.jpg" alt="slider" />
            <div className="info">
                <img src="/img/FClogo.com.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aspernatur voluptate dolor tempora soluta sed distinctio repudiandae, maxime nam mollitia eum dolorem molestias dicta nihil delectus labore aperiam ab incidunt.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
            </div>
        </div>
    )
}
