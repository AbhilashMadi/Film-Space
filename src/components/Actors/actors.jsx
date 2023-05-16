import React, { useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

import {
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import useStyles from "./styeles";
import {MovieList, Pagination} from "../exports"

function Actors() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({page,id})

  const navigate = useNavigate();
  const classes = useStyles();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary">
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <div className={classes.actorImage}>
            <img
              className={classes.image}
              src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
              alt={data.name}
            />
          </div>
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Typography variant="h2" sx={{ fontFamily: "Inter" }} gutterBottom>
            {data?.name}
          </Typography>
          <span className={classes.nameDeco}></span>
          <Typography variant="h5" sx={{ fontFamily: "Inter" }} gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography
            variant="body2"
            align="justify"
            sx={{ fontFamily: "Inter" }}
            gutterBottom>
            {data?.biography || "Sorry, no bioGraphy yet..."}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button
              className={classes.button}
              startIcon={<ArrowBack />}
              variant="outlined"
              onClick={() => navigate(-1)}>
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={movies?.total_pages}
        />
      </Box>
    </React.Fragment>
  );
}

export default Actors;
