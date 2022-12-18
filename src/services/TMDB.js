import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3`,
  }),

  endpoints: (builder) => ({
    //GET_GENRES
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //GET_MOVIES_BY[TYPE]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName,page}) =>
        {
          //GET_MOVIES_BY_CATEGORY
          if(genreIdOrCategoryName && typeof genreIdOrCategoryName=== "string"){
            return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
          }

          //GET_MOVIES_BY_GENRE
          if(genreIdOrCategoryName && typeof genreIdOrCategoryName=== "number"){
            return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
          }

          //GET_MOVIES_BY_GENRE
          return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
        }
    }),
  }),
});

export const {
    useGetGenresQuery,
    useGetMoviesQuery,
} = tmdbApi;