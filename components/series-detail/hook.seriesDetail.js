import { useEffect } from "react";
import { getSeriesDetail } from "../../intensions";
import { useDispatch, useSelector } from "react-redux";

/* Action */
import { activeNavItem } from "../../modules/reducer.nav";
import  {openYTPopUp, closeYTPopUp} from '../../modules/reducer.popUp';

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

  useEffect(() => {
    dispatch(activeNavItem(navItems[2]));
  }, []);

  const {
    gsd_data,
    gsd_error,
    gsd_loading,

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
  } = getSeriesDetail(id);

  return {
    //#region - getSeriesDetail
    gsd_data,
    gsd_error,
    gsd_loading,

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
