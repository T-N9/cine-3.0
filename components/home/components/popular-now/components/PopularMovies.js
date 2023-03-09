import React from "react";
import { SwiperSlide } from "swiper/react";

/* Components */
import SwiperPopular from "../../../../common/swipers/swiper.popular";
import SlideItem from "./SlideItem";
import { CircularProgress } from "@mui/material";

const PopularMovies = ({ data, error, loading }) => {
  return (
    <>
      {loading && (
        <div className="h-full w-full flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
      {data && (
        <SwiperPopular>
          {data?.results.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SlideItem
                  id={item.id}
                  title={item.title}
                  name={item.name}
                  image={item.poster_path}
                  vote_avg={item.vote_average}
                  release_date={item.release_date}
                  media_type={item.media_type}
                />
              </SwiperSlide>
            );
          })}
        </SwiperPopular>
      )}
    </>
  );
};

export default PopularMovies;
