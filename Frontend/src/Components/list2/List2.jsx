import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./List2.scss";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(9);
  const prependNumber = useRef(1);
  // Creo un array with x cantidad de slides
  const [slides, setSlides] = useState(
    Array.from({ length: 12 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };
  // const handleClick = (direction) => {
  //   if (direction === "left" && swiperNext > 0) {
  //     setSwiperNext(swiperNext - 1);
  //   }

  //   if (direction === "right" && swiperNext < 5.5) {
  //     setSwiperNext(swiperNext + 1);
  //   }
  // };
  return (
    <div className="container">
      <Swiper
        grabCursor={true}
        spaceBetween={15}
        slidesPerView={"5.5"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="swiper"
      >
        <div class="swiper-button-prev">
          <button onClick={() => handleClick("left")}></button>
        </div>
        <div class="swiper-button-next">
          <button onClick={() => handleClick("right")}></button>
        </div>

        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
