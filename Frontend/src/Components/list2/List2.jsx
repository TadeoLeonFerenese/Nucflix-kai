// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "./List2.scss";

// import required modules
import SwiperCore, { FreeMode, Pagination } from "swiper";

SwiperCore.use([FreeMode, Pagination]);

export const List2 = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide ">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 9</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 10</SwiperSlide>
        <SwiperSlide className="swiper-slide ">Slide 11</SwiperSlide>
      </Swiper>
    </div>
  );
};
