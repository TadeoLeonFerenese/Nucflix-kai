// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../listitem2/listitem2.scss";

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Navigation, A11y } from "swiper";

// Import Swiper styles
import "./List2.scss";
import "swiper/swiper-bundle.css";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

// install Swiper modules
SwiperCore.use([Navigation, A11y]);

export default (props) => {
  const btnBack = props.id + "back";
  const btnNext = props.id + "next";

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* <ButtonSwiper id={btnBack} /> */}
        <button className="custom_prev" id={btnBack}>
          <ArrowBackIosOutlined />
        </button>
        <Swiper
          className="swiper"
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={5.2}
          slide="true"
          navigation={{
            nextEl: "#" + btnNext,
            // prevEl: ".custom_prev",
            // !IMPORTANT: pongo un "#" para referenciar de que esto es un id,
            // "."  es para acceder al atributo de un obj
            prevEl: "#" + btnBack,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.quever.news/u/fotografias/m/2021/2/12/f1280x720-6654_138329_5050.jpg"
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
        <button className="custom_next" id={btnNext}>
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </div>
  );
};
