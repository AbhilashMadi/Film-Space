import React from "react";
import {useState} from "react";
import {Box,CircularProgress, useMediaQuery, Typography} from "@mui/material";
import {useSelector} from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";
import { FeaturedMovie, MovieList, Pagination } from "../exports";

function Movies() {
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  const numberOfMovies = lg ? 17 : 19
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
    <div className="movies-scroll">
      <Box style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
        <FeaturedMovie movie={data.results[0] || data.results[1]} />
      </Box>
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst/>
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
}

export default Movies;
