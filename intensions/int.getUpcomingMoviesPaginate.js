import React from 'react';
import { useGetUpcomingMoviesPaginateQuery } from '../services/services.upcoming';

const IntGetUpcomingMoviesPaginate = (pageNo) => {

    const { data, error, isLoading } = useGetUpcomingMoviesPaginateQuery(pageNo);

    const gump_data = data;
    const gump_error = error;
    const gump_loading = isLoading;

    return {
        gump_data,
        gump_error,
        gump_loading
    }
}

export default IntGetUpcomingMoviesPaginate;
