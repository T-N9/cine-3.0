
/* Constants */
import { TMDB_IMG, TMDB_IMG_RES } from "../../../../../constants/common";

const Hook = (vote_avg, media_type) => {

    let vote_border;
    if (vote_avg >= 7.5) {
        vote_border = '#21E6C1';
    } else if (vote_avg >= 6) {
        vote_border = '#f1d900';
    } else if (vote_avg > 0) {
        vote_border = '#FF304F';
    } else {
        vote_border = '#ffffffb4';
    }

    let route_type = media_type === 'tv' ? 'series' : 'movies';

    let poster_path = `${TMDB_IMG}${TMDB_IMG_RES.poster_sizes[4]}`

    return {
        vote_border,
        route_type,
        poster_path
    }
}

export default Hook;
