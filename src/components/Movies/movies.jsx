import React from "react";
import {useState, useEffect} from "react";
import {Box, CircularProgress, useMediaQuery, Typography} from "@mui/material";
import {useSelector} from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";

function Movies() {
  const {data} = useGetMoviesQuery();

  console.log(data);

  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
}

export default Movies;
