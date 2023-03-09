import React from "react";
// Import Swiper React components
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperHero = (props) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full h-full"
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      speed={400}
      breakpoints={{
        1366: {
          speed: 800,
        },
      }}
    >
      {props.children}
    </Swiper>
  );
};

export default SwiperHero;
