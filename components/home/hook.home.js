import { useEffect } from "react";
import { useDispatch } from "react-redux";

/* intensions */
import {
  getTrendingAllDay,
  getTrendingMoviesDay,
  getTrendingSeriesDay,
  getTheatreMovies,
  getUpcomingMovies
} from "../../intensions";

/* Actions */
import { activeNavItem } from "../../modules/reducer.nav";

/* Constants */
import { navItems } from "../../constants/uiData";

const Hook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeNavItem(navItems[0]));
  }, []);

  const {
    gta_data,
    gta_error,
    gta_loading,

    homeHeroSlideItemData,
  } = getTrendingAllDay();

  const {
    gtm_data,
    gtm_error,
    gtm_loading,
  } = getTrendingMoviesDay();

  const {
    gts_data,
    gts_loading,
    gts_error
  } = getTrendingSeriesDay();

  const {
    tm_data,
    tm_loading,
    tm_error,
  } = getTheatreMovies();

  const {
    gum_data,
    gum_loading,
    gum_error
  } = getUpcomingMovies();

  return {
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
  };
};

export default Hook;
