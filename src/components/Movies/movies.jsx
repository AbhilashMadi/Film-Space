import React from "react";
import {useState, useEffect} from "react";
import {Box, CircularProgress, useMediaQuery, Typography} from "@mui/material";
import {useSelector} from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../exports";

function Movies() {
  const {data, error, isFetching} = useGetMoviesQuery();

  if(isFetching){
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem"/>
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
      <MovieList movies={data}/>
    </div>
  );
}

export default Movies;
