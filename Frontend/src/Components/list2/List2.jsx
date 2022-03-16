// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "./List2.scss";
import "swiper/swiper-bundle.css";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default () => {
  return (
    <div className="container">
      <button class="custom_prev">
        <ArrowBackIosOutlined />
      </button>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={15}
        slidesPerView={4.4}
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
      </Swiper>
      <button class="custom_next">
        <ArrowForwardIosOutlined />
      </button>
    </div>
  );
};
