import { useGetTrendingSeriesDayQuery} from '../services/services.home'

const IntGetTrendingSeriesDay = () => {

    const { data, error , isLoading} = useGetTrendingSeriesDayQuery();

    /* root values */
    const gts_data = data;
    const gts_error = error;
    const gts_loading = isLoading;

    /* extended values */

    return {
        gts_data,
        gts_error,
        gts_loading,
    }
}

export default IntGetTrendingSeriesDay;
