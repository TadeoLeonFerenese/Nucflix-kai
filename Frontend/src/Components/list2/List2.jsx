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
    <div class="Swiper-container">
      <div class="swiper-wrapper">
        <button class="custom_prev">
          <ArrowBackIosOutlined />
        </button>
        <Swiper
          className="swiper"
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={5.5}
          slide
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
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
        <button class="custom_next">
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </div>
  );
};
