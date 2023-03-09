import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants/common";
import { SEARCH_QUERY } from "../constants/apiLinks";

export const api_searchQueryResult = createApi({
    reducerPath : "searchQueryResult",
    baseQuery : fetchBaseQuery({
        baseUrl : SEARCH_QUERY
    }),
    endpoints : (builder) => ({
        getSearchQueryResult : builder.query({
            query : ({type,query,pageNo}) => `${type}?api_key=${API_KEY}&query=${query}&page=${pageNo}`
        }),
    }),
});

export const { useGetSearchQueryResultQuery } = api_searchQueryResult;