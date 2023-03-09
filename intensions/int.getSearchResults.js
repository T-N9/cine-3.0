import React from 'react';

/* Service */
import { useGetSearchQueryResultQuery } from '../services/services.search';

const IntGetSearchResults = ({type, query, pageNo}) => {
    const { data, error, isLoading } = useGetSearchQueryResultQuery({type, query, pageNo});

    return {
        data,
        error,
        isLoading
    }
}

export default IntGetSearchResults;
