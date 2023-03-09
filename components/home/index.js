import React from "react";

/* Components */
import Hero from "./components/hero";
import SearchInput from "./components/search-input/SearchInput";
import PopularNow from "./components/popular-now/PopularNow";
import TheatreMovies from "./components/theatre-movies/TheatreMovies";
import UpComingMovies from "./components/upcoming-movies/UpcomingMovies";

/* Hook */
import Hook from "./hook.home";

const HomePage = () => {
  const {
    //#region - getTrendingAllDay
    gta_data,
    gta_error,
    gta_loading,

    homeHeroSlideItemData,
    //#endregion

    //#region - getTrendingMoves in a day
    gtm_data,
    gtm_error,
    gtm_loading,
    //#endregion

    //#region - getTrendingSeries in a day
    gts_data,
    gts_loading,
    gts_error,
    //#endregion

    //#region - getTheatreMovies
    tm_data,
    tm_loading,
    tm_error,
    //#endregion

    //#region - getUpcomingMovies
    gum_data,
    gum_loading,
    gum_error,
    //#endregion
  } = Hook();

  return (
    <>
      <Hero
        //#region - getTrendingAllDay
        data={gta_data}
        error={gta_error}
        loading={gta_loading}
        slideItemData={homeHeroSlideItemData}
        //#endregion
      />

      <SearchInput />

      <PopularNow
        moviesData={gtm_data}
        moviesLoading={gtm_loading}
        moviesError={gtm_error}
        seriesData={gts_data}
        seriesLoading={gts_loading}
        seriesError={gts_error}
      />

      <TheatreMovies data={tm_data} loading={tm_loading} error={tm_error} />

      <UpComingMovies data={gum_data} loading={gum_loading} error={gum_error} />
    </>
  );
};

export default HomePage;
