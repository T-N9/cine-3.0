import { useGetTheatreMoviesQuery } from '../services/services.home';

const IntGetTheatreMovies = () => {

    const { data, error , loading } = useGetTheatreMoviesQuery();

    /* root values */
    const tm_data = data;
    const tm_error = error;
    const tm_loading = loading;

    return {
        tm_data,
        tm_error,
        tm_loading
    }
}

export default IntGetTheatreMovies;
