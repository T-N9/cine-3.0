import { useGetTrendingMoviesDayQuery} from '../services/services.home'

const IntGetTrendingMoviesDay = () => {

    const { data, error , isLoading} = useGetTrendingMoviesDayQuery();

    /* root values */
    const gtm_data = data;
    const gtm_error = error;
    const gtm_loading = isLoading;

    /* extended values */

    return {
        gtm_data,
        gtm_error,
        gtm_loading,
    }
}

export default IntGetTrendingMoviesDay;
