import React from "react";
import {useState, useEffect} from "react";
import {Box,CircularProgress, useMediaQuery, Typography} from "@mui/material";
import {useSelector} from "react-redux";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList, Pagination } from "../exports";

function Movies() {
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  const numberOfMovies = lg ? 16 : 18
  const [page, setPage] = useState(1)
  const { genreIdOrCategoryName, searchQuery  } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if(isFetching){
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="2rem"/>
      </Box>
    )
  }

  if(!data.results.length){
    <Box display="flex" alignItem="center" mt="20px">
      <Typography variant="h4">
        No Movies that match that name. <br/>
        Please search for something else.
      </Typography>
    </Box>
  }

  if(error) {
    return "An error occured.";
  }
  
  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
}

export default Movies;
