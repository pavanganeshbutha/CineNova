import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_VITE_ACCESS_TOKEN}`,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHeroSectionBanner: builder.query({
      query: () => '/trending/all/day',
    }),
    getTrendingMovies: builder.query({
      query: () => '/trending/movie/day',
    }),
    getTrendingTvShows: builder.query({
      query: () => '/trending/tv/day',
    }),
    getPopularMovies: builder.query({
      query: () => '/movie/popular',
    }),
    getPopularTvShows: builder.query({
      query: () => '/tv/popular',
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `/movie/${movieId}`,
    }),
  }),
});

export const {
  useGetHeroSectionBannerQuery,
  useGetTrendingMoviesQuery,
  useGetTrendingTvShowsQuery,
  useGetPopularMoviesQuery,
  useGetPopularTvShowsQuery,
  useGetMovieDetailsQuery,
} = tmdbApi;
