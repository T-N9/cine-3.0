import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants/common";
import { UPCOMING_MOVIES_PAGINATE } from "../constants/apiLinks";

export const api_upcomingMoviesPaginate = createApi({
    reducerPath : "upcomingMoviesPaginate",
    baseQuery : fetchBaseQuery({
        baseUrl : UPCOMING_MOVIES_PAGINATE
    }),
    endpoints : (builder) => ({
        getUpcomingMoviesPaginate : builder.query({
            query : (pageNo) => `&page=${pageNo}`
        }),
    }),
});

export const { useGetUpcomingMoviesPaginateQuery } = api_upcomingMoviesPaginate;