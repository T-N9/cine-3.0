import React from "react";

import { Swiper } from "swiper/react";
import "swiper/css/navigation";

const SwiperPopular = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={0}
        centeredSlides={true}
        className="mySwiper"
        breakpoints={{
          1366: {
            slidesPerView: 5,
            spaceBetween: -50,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
          },
          360: {
            spaceBetween: 30,
          },
        }}
      >
        {props.children}
      </Swiper>
    </>
  );
};

export default SwiperPopular;
