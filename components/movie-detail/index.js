import React from "react";

/* Components */
import {
  DetailHero,
  YTPopUp,
  CastsCrews,
  DetailImages,
  DetailVideos,
  DetailInfo,
  DetailRecommend,
} from "../common";

import Hook from "./hook.movieDetail";

const MovieDetail = ({ movieId }) => {
  const {
    //#region - getMovieDetail
    gmd_data,
    gmd_error,
    gmd_loading,

    title,
    heroBackground,
    poster,
    releasedYear,
    contentRating,
    genres,
    runtime,
    status,
    tagline,
    overview,
    rating,
    popularity,
    imdbID,
    trailer,
    isYTPopUp,

    /* actions */
    open_YTPopUp,
    close_YTPopUp,
    //#endregion
  } = Hook(movieId);

  return (
    <>
      <DetailHero
        data={gmd_data}
        error={gmd_error}
        loading={gmd_loading}
        title={title}
        backgroundImage={heroBackground}
        poster={poster}
        releasedYear={releasedYear}
        contentRating={contentRating}
        genres={genres}
        runtime={runtime}
        status={status}
        tagline={tagline}
        overview={overview}
        rating={rating}
        popularity={popularity}
        imdbID={imdbID}
        isYTPopUp={isYTPopUp}
        /* actions */
        open_YTPopUp={open_YTPopUp}
      />
      <YTPopUp
        trailer={trailer}
        isYTPopUp={isYTPopUp}
        close_YTPopUp={close_YTPopUp}
      />

      <CastsCrews media_type={"movie"} id={movieId} />

      <div className="flex flex-col lg:flex-row justify-between container_x_md my-16">
        <div className="lg:w-[70%] w-[100%] sticky top-20 self-start h-auto mb-5 lg:mb-0">
          <DetailImages media_type={"movie"} id={movieId} />

          <DetailVideos media_type={"movie"} id={movieId} />
        </div>
        <DetailInfo media_type={"movie"} id={movieId} />
      </div>

      <DetailRecommend media_type={"movie"} id={movieId} />
    </>
  );
};

export default MovieDetail;
