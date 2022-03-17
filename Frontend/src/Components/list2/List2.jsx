// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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

export default () => {
  return (
    <div className="container">
      <button class="custom_prev">
        <ArrowBackIosOutlined />
      </button>
      <Swiper
        className="swiper"
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={5.5}
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide class="swiper-slide">Slide 1</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 5</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 6</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 7</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 8</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 9</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 10</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 11</SwiperSlide>
        <SwiperSlide class="swiper-slide">Slide 12</SwiperSlide>
      </Swiper>
      <button class="custom_next">
        <ArrowForwardIosOutlined />
      </button>
    </div>
  );
};
