import React from "react";

/* api call */
import { useGetTrendingAllDayQuery } from "../../../../services/services.home";

/* Components */
import SwiperHero from "../../../common/swipers/swiper.hero";
import { SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";
import { CircularProgress } from "@mui/material";

const Hero = ({ data, error, loading, slideItemData }) => {
  // const { data, error, isLoading } = useGetTrendingAllDayQuery();

  let slideItems;
  if (data) {
    slideItems = slideItemData.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <SlideItem
            id={item.id}
            index={data.results.indexOf(item)}
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
            title={item.title}
            overview={item.overview}
            name={item.name}
            media_type={item.media_type}
          />
        </SwiperSlide>
      );
    });
  }

  return (
    <section className="">
      <div className="pt-20 bg-dark h-[700px] lg:h-[700px] flex justify-center items-center">
        {loading && <CircularProgress />}

        {data && <SwiperHero>{slideItems}</SwiperHero>}
      </div>
    </section>
  );
};

export default Hero;
