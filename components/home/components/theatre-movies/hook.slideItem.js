import { getMovieDetail } from "../../../../intensions";

/* Constants */
import { TMDB_IMG, TMDB_IMG_RES } from '../../../../constants/common';

const Hook = (id, backdrop_path) => {

    const {gmd_data  , gmd_error , gmd_loading} = getMovieDetail(id);

    const tagline = gmd_data?.tagline;
    const poster_path = `${TMDB_IMG}${TMDB_IMG_RES.poster_sizes[4]}/${gmd_data?.poster_path}`;
    const rating = gmd_data?.vote_average;
    const imdbRating = gmd_data?.imdb_id;
    const backgroundImg = `${TMDB_IMG}${TMDB_IMG_RES.backdrop_sizes[2]}/${backdrop_path}`;

    let trailer, trailer_official;
    if (gmd_data?.videos.results.length > 0) {
        trailer_official = gmd_data?.videos.results.filter(item => {
            return (item.type === 'Trailer' && item.official === true)
        });

        // trailer = trailer_official[0].key;
        if(trailer_official.length > 0) {
            if (trailer_official[0]) {
                trailer = trailer_official[0].key;
            } 
        }else {
            trailer = null;
        }

    } else {
        trailer = null;
    }

    return {
        tagline,
        poster_path,
        rating,
        imdbRating,
        trailer,
        trailer_official,
        backgroundImg
    }
}

export default Hook;
