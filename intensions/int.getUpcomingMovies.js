import { useGetUpcomingMoviesQuery } from "../services/services.home";

const IntGetUpcomingMovies = () => {

    const { data, error , isLoading } = useGetUpcomingMoviesQuery();

    const gum_data = data;
    const gum_error = error;
    const gum_loading = isLoading;

    return {
        gum_data,
        gum_error,
        gum_loading
    }
}

export default IntGetUpcomingMovies;
