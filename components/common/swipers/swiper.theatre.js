import React from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperTheatre = (props) => {
  return (
    <Swiper
      className="mySwiper"
      loop={true}
      pagination={{
        clickable: true,
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

export default SwiperTheatre;
