import React, { useState } from "react";

export default function ListItem2({ index, pelicula }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="ListItem2"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`}
        alt="img"
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
        </>
      )}
    </div>
  );
}
