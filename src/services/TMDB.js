import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3`,
  }),

  endpoints: (builder) => ({
    //GET_GENRES
    getGenres: builder.query({
      query: () =>
        `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //GET_MOVIES_BY[TYPE]
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
    useGetGenresQuery,
    useGetMoviesQuery,
} = tmdbApi;