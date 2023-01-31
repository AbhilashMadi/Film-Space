import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const FeaturedMovie = ({ movie }) => {
  const classes = useStyles();

  if (!movie) {
    return null;
  }

  return (
    <Box
      component={Link}
      to={`/movie/${movie.id}`}
      className={classes.container}>
      <Card className={classes.card}>
        <CardMedia
          media="picture"
          alt={movie.title}
          title={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className={classes.cardMedia}/>
      <Box padding="20px">
        <CardContent className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {movie.title}
          </Typography>
          <Typography variant="body2" align="justify">
            {movie.overview}
          </Typography>
        </CardContent>
      </Box>
      </Card>
    </Box>
  );
};

export default FeaturedMovie;
