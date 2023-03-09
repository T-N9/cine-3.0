import React from 'react';
import { useGetTrendingAllDayQuery } from '../services/services.home';

const IntGetTrendingAllDay = () => {

    const { data, error , isLoading} = useGetTrendingAllDayQuery();

    /* root values */
    const gta_data = data;
    const gta_error = error;
    const gta_loading = isLoading;

    /* extended values */
    const homeHeroSlideItemData = gta_data?.results?.slice(0,5)

    return {
        gta_data,
        gta_error,
        gta_loading,

        homeHeroSlideItemData
    }
}

export default IntGetTrendingAllDay;
