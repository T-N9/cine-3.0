import { useGetMovieDetailQuery } from "../services/services.detail";
import { TMDB_IMG, TMDB_IMG_RES } from "../constants/common";

/* Utils */
import { timeConvert } from '../util/timeConvert'

const IntGetMovieDetail = (id) => {
  const { data, error, isLoading } = useGetMovieDetailQuery(id);

  /* root values */
  const gmd_data = data;
  const gmd_error = error;
  const gmd_loading = isLoading;

  /* extended values */
  //#region 
  /* constants */
  const title = gmd_data?.original_title;
  const heroBackground = `${TMDB_IMG}${TMDB_IMG_RES.backdrop_sizes[1]}${gmd_data?.backdrop_path}`;
  const poster = `${TMDB_IMG}${TMDB_IMG_RES.poster_sizes[4]}${gmd_data?.poster_path}`;

  const releasedDate = gmd_data?.release_date;
  const releasedYear =
    releasedDate !== "" ? releasedDate?.substring(0, 4) : "Unknown";

  const getRating = gmd_data?.releases.countries;
  const genres = gmd_data?.genres;
  const runtime = gmd_data?.runtime && timeConvert(gmd_data?.runtime);
  const status = gmd_data?.status;
  const tagline = gmd_data?.tagline;
  const overview = gmd_data?.overview;
  const rating = gmd_data?.vote_average;
  const popularity = gmd_data?.popularity;
  const imdbID = gmd_data?.imdb_id;

  //#endregion

  /*  ----------------------------------------------------
   *  Computed Values
   ---------------------------------------------------- */ 

  /**
   * Get Content Rating
   */
  //#region
  let contentRating, contentRating_US;
  const findOtherRatings_movie = () => {
    let i = 1;
    if (getRating === []) {
      do {
        contentRating = getRating[getRating?.length - i].certification;
        i++;
      } while (contentRating === "");
    } else {
      contentRating = "";
    }
  };

  function checkMovieRating() {
    let rating_arr = [];

    contentRating_US = getRating?.filter((item) => {
      return item.iso_3166_1 === "US";
    });

    // console.log({contentRating_US})

    contentRating_US?.map((item) => rating_arr.push(item.certification));

    let check = (list) => list.every((item) => list.indexOf(item) === 0);

    if (contentRating_US?.length === 0) {
      findOtherRatings_movie();
    } else {
      if (contentRating_US?.length === 1) {
        contentRating = contentRating_US[0].certification;
      } else {
        if (check(rating_arr) && rating_arr[0] === "") {
          contentRating = "";
        } else {
          let i = 1;
          do {
            contentRating =
              contentRating_US && contentRating_US[contentRating_US?.length - i].certification;
            i++;
          } while (contentRating === "");
        }
      }
    }
  }
  getRating !== [] ? checkMovieRating() : (contentRating = "");
  //#endregion

  /**
   * Get Trailer Official 
   */
  //#region 
   let trailer_official, trailer;
   if (gmd_data?.videos?.results.length > 0) {
       trailer_official = data.videos.results.filter(item => {
           return (item.type === 'Trailer' && item.official === true)
       });

       if (trailer_official.length === 0) {
           trailer_official = data.videos.results.filter(item => {
               if (item.type === 'Trailer') {
                   return (item.type === 'Trailer')
               }
               else {
                   return (item);
               }

           });
       }

       if (trailer_official[0]) {
           trailer = trailer_official[0].key;
       } else {
           trailer = null;
       }

   } else {
       trailer = null;
   }
   //#endregion

  return {
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
  };
};

export default IntGetMovieDetail;
