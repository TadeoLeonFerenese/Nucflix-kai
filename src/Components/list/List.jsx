import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import ListItem from "../listitem/ListItem";
import "./list.scss";
import axios from "axios";

export default function List({ page }) {
  const [slideNumber, setSlideNumber] = useState(0); //este useState sirve para que el carousel tenga como  limite la ultima "listitem"
  const [isMoved, setIsMoved] = useState(false); // este useState sirve para borrar los arrowIcons cuando estas en un extremo

  const [loading, setLoading] = useState(false);
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState(null);

  const catalogo = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=80ffb51d008e9d3f313dba4cb7fa9100&language=es-ES&page=${page}`
      );
      setPeliculas(response.data.results);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    catalogo();
  }, []);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  // if (loading) {
  //   return <h1>loading</h1>;
  // }
  console.log(peliculas && peliculas);
  return (
    <div className="list">
      <span className="listTitle"> Page {page} </span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          styel={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {peliculas?.length > 0 &&
            !error &&
            peliculas.map((pelicula, index, resultadosBusqeda) => {
              return (
                <ListItem
                  resultadosBusqeda={resultadosBusqeda}
                  key={pelicula.id}
                  pelicula={pelicula}
                  index={index}
                />
              );
            })}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
