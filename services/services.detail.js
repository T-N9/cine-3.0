import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants/common";
import { MOVIE_DETAIL, SERIES_DETAIL } from "../constants/apiLinks";

export const api_movieDetail = createApi({
    reducerPath : "movieDetail",
    baseQuery : fetchBaseQuery({ baseUrl : MOVIE_DETAIL}),
    endpoints : (builder) => ({
        getMovieDetail : builder.query({
            query : (movieId) => `${movieId}?api_key=${API_KEY}&append_to_response=videos,releases,content_ratings`
        })
    })
});

export const api_seriesDetail = createApi({
    reducerPath : "seriesDetail",
    baseQuery : fetchBaseQuery({baseUrl : SERIES_DETAIL}),
    endpoints : (builder) => ({
        getSeriesDetail : builder.query({
            query : (seriesId) => `${seriesId}?api_key=${API_KEY}&append_to_response=videos,releases,content_ratings`
        })
    })
});

export const { useGetMovieDetailQuery } = api_movieDetail;
export const { useGetSeriesDetailQuery } = api_seriesDetail;