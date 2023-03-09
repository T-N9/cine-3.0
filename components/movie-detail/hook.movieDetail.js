import { useEffect } from "react";
import { getMovieDetail } from "../../intensions";
import { useDispatch, useSelector } from "react-redux";

/* Action */
import { activeNavItem } from "../../modules/reducer.nav";
import { openYTPopUp, closeYTPopUp } from '../../modules/reducer.popUp';

/* Constant */
import { navItems } from "../../constants/uiData";

const Hook = (id) => {
  const dispatch = useDispatch();
  const { isYTPopUp } = useSelector((state) => state.popUp)

  useEffect(() => {
    dispatch(activeNavItem(navItems[1]));
  }, []);

  const open_YTPopUp = () => {
    dispatch(openYTPopUp())
  };
  const close_YTPopUp = () => {
    dispatch(closeYTPopUp());
  }

  const {
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
    trailer
  } = getMovieDetail(id);

  return {
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
    close_YTPopUp
    //#endregion
  };
};

export default Hook;
