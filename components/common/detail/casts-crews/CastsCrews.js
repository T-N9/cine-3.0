import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper";

/* Icons */
import { ArrowCircleRight } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

/* Hook */
import Hook from "./hook.castsCrews";

/* Components */
import CastsCard from "../../cards/CastsCard";
import CrewsCard from "../../cards/CrewsCard";

const CastsCrews = ({ media_type, id }) => {
  const { data, error, castsToShow, crewsToShow } = Hook(media_type, id);

  return (
    <>
      <section className="-mt-[120px] relative z-50">
        <div className="container_x_md">
          <h1 className="title-2 text-wah mb-4">Top Casts</h1>

          {!data ? (
            <div className="h-[200px] flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
              breakpoints={{
                1366: {
                  slidesPerView: 9,
                  spaceBetween: -20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {castsToShow?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CastsCard
                      name={item.name}
                      profile_path={item.profile_path}
                      image={`https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`}
                      character={item.character}
                    />
                  </SwiperSlide>
                );
              })}

              <SwiperSlide>
                <div className=" min-h-[250px] w-[6.875rem] lg:w-auto lg:min-h-[280px] bg-black rounded border-light flex flex-col justify-center items-center  border border-solid text-white">
                  <p className="text-center">View all credits</p>

                  <ArrowCircleRight />
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </section>

      <section className="mt-5">
        <div className="container_x_md py-4">
          <h1 className="title-2 text-wah mb-4">Top Crews</h1>

          {!data ? (
            <div className="h-[100px] flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <Swiper
              slidesPerView={1.5}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
              breakpoints={{
                1366: {
                  slidesPerView: 6,
                  // "spaceBetween" : ,
                },
                1024: {
                  slidesPerView: 5,
                  // "spaceBetween" : 10,
                },
                768: {
                  slidesPerView: 3,
                  // "spaceBetween" : 10,
                },
              }}
            >
              {crewsToShow?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CrewsCard
                      image={item.profile_path}
                      name={item.name}
                      department={item.department}
                      job={item.job}
                    />
                  </SwiperSlide>
                );
              })}
              <SwiperSlide>
                <div className="h-full bg-black rounded border border-solid border-light flex justify-center items-center gap-x-2 text-wah min-h-[76px]">
                  <p>View all credits</p>

                  <ArrowCircleRight />
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
};

export default CastsCrews;
