import React from "react";

/* Components */
import { CircularProgress } from "@mui/material";
import { SwiperTheatre } from "../../../common/swipers";
import { SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";

const TheatreMovies = ({ data, loading, error }) => {
  return (
    <section>
      <div className="py-4">
        <div>
          <div className="container_x_md">
            <h1 className="title-2 font-heading text-white">In Theatres</h1>
          </div>

          {loading && (
            <div className="h-[400px] w-full flex justify-center items-center">
              <CircularProgress />
            </div>
          )}
          {data && (
            <div className="w-full mx-auto my-8 lg:w-[60%] 2xl:w1/2">
              <SwiperTheatre>
                {data?.results.slice(0, 10).map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <SlideItem
                        id={item.id}
                        title={item.title}
                        backdrop_path={item.backdrop_path}
                        media_type={item.media_type}
                        overview={item.overview}
                      />
                    </SwiperSlide>
                  );
                })}
              </SwiperTheatre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TheatreMovies;
