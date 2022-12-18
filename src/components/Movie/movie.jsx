import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import useStyles from "./styles";

function Movie({ movie, index }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={index} timeout={(index + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          {/* {
              movie.poster_path 
              ? <img alt={movie.title} className={classes.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              : <img alt={movie.title} className={classes.image} src={"https://fillmurray.com/200/300"}/>
            } */}
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://fillmurray.com/200/300"
            }
            alt={movie.title}
            className={classes.image}
          />
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip
            disableTouchListener
            title={movie.vote_average+ "/10 IMDB Rating"}
            placement="bottom"
            arrow>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
