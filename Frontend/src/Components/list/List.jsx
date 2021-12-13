import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listitem/ListItem";
import "./list.scss";

export default function List() {
  var catalogo = [];
  var contador = 0;

  const obtenerPeliculas = () => {
    return new Promise((resolve) => {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=80ffb51d008e9d3f313dba4cb7fa9100&language=es-ES&page=1"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            resolve(result.results);
          },
          // Nota: es importante manejar errores aquí y no en
          // un bloque catch() para que no interceptemos errores
          // de errores reales en los componentes.
          (error) => {
            console.log(error);
          }
        );
    });
  };
  const cargarCatalogo = async () => {
    catalogo = await obtenerPeliculas();
    console.log(catalogo);
  };
  cargarCatalogo();

  const [slideNumber, setSlideNumber] = useState(0); //este useState sirve para que el carousel tenga como  limite la ultima "listitem"
  const [isMoved, setIsMoved] = useState(false); // este useState sirve para borrar los arrowIcons cuando estas en un extremo

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

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          styel={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {setTimeout(() => {
            catalogo.forEach((element) => {
              <ListItem index={contador} />;
              contador++;
              console.log(contador);
            });
          }, 2000)}
          {/* <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} /> */}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
