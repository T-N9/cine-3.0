import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* Hook */
import Hook from "./hook.slideItem";

/* Icons */
import { PlayCircleOutlineRounded, StarRateRounded } from "@mui/icons-material";
import { SiImdb } from "@icons-pack/react-simple-icons/";

/* Components */
import TheatreTrailer from "./TheatreTrailer";

const SlideItem = ({ id, title, backdrop_path, media_type, overview }) => {
  const {
    tagline,
    poster_path,
    rating,
    imdbRating,
    trailer,
    trailer_official,
    backgroundImg,
  } = Hook(id, backdrop_path);
  const [showTrailer, setShowTrailer] = useState(false);
  const handleTrailer = () => {
    setShowTrailer((prev) => !prev);
  };
  return (
    <div className="bg-[#21282b] group group-trailer hover:bg-black pb-6 lg:pb-12 transition-all duration-300 ease-out select-none">
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="relative min-h-[200px] md:min-h-[400px] 2xl:min-h-[550px] bg-center bg-no-repeat bg-cover bg-scroll select-none flex items-end"
      >
        <TheatreTrailer
          trailer={trailer}
          showTrailer={showTrailer}
          handleTrailer={handleTrailer}
        />
        <div className="absolute group-hover:bg-transparent backdrop-trailer-grayscale w-full h-full flex justify-center items-center bg-black bg-opacity-50 transition-all duration-300 ease-out flex-col text-white p-7">
          <div
            onClick={handleTrailer}
            className="cursor-pointer transform duration-200 ease"
          >
            <PlayCircleOutlineRounded
              fontSize="large"
              className="group-hover:scale-150 transition-all"
            />
          </div>
          <p className="mt-4">Watch Trailer</p>
        </div>

        <div className="bottom-overlay w-full h-[100px]"></div>
      </div>

      <div className="relative flex flew-row items-end -mt-[80px] py-8 px-5 md:py-0 md:px-8">
        {poster_path !== undefined && (
          <div className="relative w-[100px] min-w-[100px] min-h-[150px] z-50 md:w-[160px] md:min-w-[160px] md:min-h-[240px] rounded-md">
            <Image
              layout="fill"
              quality="10"
              className="rounded-md poster-shadow"
              src={poster_path}
              alt={title}
            />
          </div>
        )}

        <div className="w-full ml-5 pb-0 md:pb-8 flex justify-between">
          <div>
            <Link href={`/movies/${id}`}>
              <h1 className="font-special cursor-pointer font-extrabold text-white special-text-shadow title-3">
                {title}
              </h1>
            </Link>
            <p className="text-white mt-2 font-heading font-bold text-sm md:text-[18px]">
              {tagline}
            </p>

            <div className="flex mt-3">
              <div className="flex justify-start items-center mr-8 text-warning">
                <span>
                  <StarRateRounded />
                </span>
                <h1 className="text-wah text-lg">{rating}</h1>
              </div>

              <a
                href={`https://www.imdb.com/title/${imdbRating}`}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <SiImdb color="#F5C518" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
