import React from 'react'
import { Grid } from '@mui/material';
import useStyles from "./styles"
import { Movie } from '../exports';

function MovieList({movies}) {
  const classes = useStyles();
    console.log("Movie List")
  return (
    <Grid container className={classes.moviesContainer}>
      {
        movies.results.map((movie,index) => (
          <Movie key={index} movie={movie} index={index}/>
        ) )
      }
    </Grid>
  )
}

export default MovieList;
