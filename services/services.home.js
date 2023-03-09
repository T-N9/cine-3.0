import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants/common";
import { TRENDING_ALL_DAY, DISCOVER_MOVIES_GENRES , TRENDING_MOVIES, TRENDING_SERIES, THEATRE_MOVIES, UPCOMING_MOVIES } from "../constants/apiLinks";

export const api_trendingAllDay = createApi({
  reducerPath: "trendingAllDay",
  baseQuery: fetchBaseQuery({ baseUrl: TRENDING_ALL_DAY }),
  endpoints: (builder) => ({
    getTrendingAllDay: builder.query({
      query: () => ``,
    }),
  }),
});

export const api_discoverMoviesGenres  = createApi({
  reducerPath: "discoverMoviesGenres",
  baseQuery : fetchBaseQuery({ baseUrl : DISCOVER_MOVIES_GENRES}),
  endpoints : (builder) => ({
    getDiscoverMoviesGenres : builder.query({
      query: (genreId) => `movie?api_key=${API_KEY}&with_genres=${genreId}`
    })
  })
});

export const api_trendingMoviesDay = createApi({
  reducerPath : "trendingMoviesDay",
  baseQuery : fetchBaseQuery({ baseUrl : TRENDING_MOVIES}),
  endpoints : (builder) => ({
    getTrendingMoviesDay : builder.query({
      query : () => ``,
    }),
  }),
});

export const api_trendingSeriesDay = createApi({
  reducerPath : "trendingSeriesDay",
  baseQuery : fetchBaseQuery({ baseUrl : TRENDING_SERIES}),
  endpoints : (builder) => ({
    getTrendingSeriesDay : builder.query({
      query : () => ``,
    }),
  }),
});

export const api_theatreMovies = createApi({
  reducerPath : "theatreMovies",
  baseQuery : fetchBaseQuery({ baseUrl : THEATRE_MOVIES }),
  endpoints : (builder) => ({
    getTheatreMovies : builder.query({
      query : () => ``,
    }),
  }),
});

export const api_upcomingMovies = createApi({
  reducerPath : "upcomingMovies",
  baseQuery : fetchBaseQuery({ baseUrl : UPCOMING_MOVIES }),
  endpoints : (builder) => ({
    getUpcomingMovies : builder.query({
      query : () => ``,
    }),
  }),
});

export const { useGetTrendingAllDayQuery } = api_trendingAllDay;
export const { useGetDiscoverMoviesGenresQuery } = api_discoverMoviesGenres;
export const { useGetTrendingMoviesDayQuery }  = api_trendingMoviesDay;
export const { useGetTrendingSeriesDayQuery } = api_trendingSeriesDay;
export const { useGetTheatreMoviesQuery } = api_theatreMovies;
export const { useGetUpcomingMoviesQuery } = api_upcomingMovies;
