import { useGetSeriesDetailQuery } from "../services/services.detail";
import { TMDB_IMG, TMDB_IMG_RES } from "../constants/common";

/* Utils */
import { timeConvert } from "../util/timeConvert";

const IntGetSeriesDetail = (id) => {
  const { data, error, isLoading } = useGetSeriesDetailQuery(id);

  /* root values */
  const gsd_data = data;
  const gsd_error = error;
  const gsd_loading = isLoading;

  /* extended values */
  //#region 
  /* constants */
  const title = gsd_data?.name;
  const heroBackground = `${TMDB_IMG}${TMDB_IMG_RES.backdrop_sizes[1]}${gsd_data?.backdrop_path}`;
  const poster = `${TMDB_IMG}${TMDB_IMG_RES.poster_sizes[4]}${gsd_data?.poster_path}`;

  const releasedDate = gsd_data?.first_air_date;
  const releasedYear =
    releasedDate !== "" ? releasedDate?.substring(0, 4) : "Unknown";

  const getRating = gsd_data?.content_ratings.results;
  const genres = gsd_data?.genres;
  const runtime = gsd_data?.episode_run_time && timeConvert(gsd_data?.episode_run_time);
  const status = gsd_data?.status;
  const tagline = gsd_data?.tagline;
  const overview = gsd_data?.overview;
  const rating = gsd_data?.vote_average;
  const popularity = gsd_data?.popularity;
  const imdbID = gsd_data?.imdb_id;
  //#endregion

  /**
   * Get Content Rating
   */
  //#region
  let contentRating, contentRating_US;
  const findOtherRatings_series = () => {
    let i = 1;
    if (getRating === []) {
      do {
        contentRating = getRating[getRating.length - i].rating;
        i++;
      } while (contentRating === "");
    } else {
      contentRating = "";
    }

    if(getRating?.length > 0 && getRating[0]?.rating !== '') {
      contentRating = getRating[0]?.rating;
    }
  };

  if (gsd_data?.content_ratings.results.length > 0) {
    contentRating_US = gsd_data?.content_ratings.results.filter((item) => {
      return item.iso_3166_1 === "US";
    });

    if (contentRating_US.length === 0) {
      findOtherRatings_series();
    } else {
      let i = 1;
      do {
        contentRating = contentRating_US[contentRating_US.length - i].rating;
        i++;
      } while (contentRating === "");
    }
  } else {
    contentRating = "";
  }
  //#endregion

    /**
   * Get Trailer Official 
   */
  //#region 
  let trailer_official, trailer;
  if (gsd_data?.videos?.results.length > 0) {
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
  };
};

export default IntGetSeriesDetail;
