// export const ListItem2 = ({ pelicula }) => {
//   return (

//     // <div className="lsititem">

//     //   <img
//     //     src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`}
//     //     alt="img"
//     //   />
//     //   <div className="desc">{pelicula.overview.substring(0, 180)}...</div>
//     // </div>
//   );
// };

import React from "react";

export default function ListItem2() {
  const imgPelis = () => {
    try {
      <img
        src="{`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}"
        alt=""
      />;
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
}
