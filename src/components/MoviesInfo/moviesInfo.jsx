import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import genreIcons from '../../assets/genres';
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import MovieList from "../MovieList/movieList"
import {selectGenreOrCategory} from "../../features/currentGenreOrCategory"
import useStyles from "./styles"
import {
  useGetListQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../services/TMDB";
import { userSelector } from "../../features/auth";
import { findDOMNode } from "react-dom";


function MoviesInformation() {
  const { user } = useSelector((state) => state.user);
  const {id} = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  
  const {data, isFetching, error} = useGetMovieQuery(id);
  const {data:recommendations, isFetching:isRecommendationsFetching} = useGetRecommendationsQuery({list:"/recommendations",movie_id:id});
  const {data:watchlistMovies} = useGetListQuery({listName: "watchlist/moives",accountId:user.id,sessionId:localStorage.getItem("session_id"),page:1});
  const {data:favoriteMovies} = useGetListQuery({listName: "favorite/moives",accountId:user.id,sessionId:localStorage.getItem("session_id"),page:1});
  
  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);
  useEffect(()=>{
    setIsMovieFavorited(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id));
  },[favoriteMovies, data])
  
  useEffect(()=>{
    setIsMovieWatchlisted(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id));
  },[watchlistMovies, data])


  const addToFavorites = async () => {
   await axios.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: 'movie',
      media_id: id,
      favorite: !isMovieFavorited,
    });

    setIsMovieFavorited((preState) => !preState)
  };
  const addToWatchList = async () => {
    await axios.post(`https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: 'movie',
      media_id: id,
      watchlist: !isMovieWatchlisted,
    });

    setIsMovieWatchlisted((preState) => !preState );
  };

  if (isFetching) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link to="/">Something has gone wrong go back </Link>
      </Box>
    );
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4} style={{ marginBottom: "15px" }}>
        <div className={classes.posterDiv} style={{ marginBottom: "15px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            className={classes.poster}
            alt={data?.title}
          />
        </div>
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data?.release_date.split("-")[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data?.vote_average / 2} />
            <Typography
              gutterBottom
              variant="subtitle1"
              style={{ marginLeft: "10px" }}>
              {data?.vote_average} / 10
            </Typography>
          </Box>
          {data?.budget > 0 && (
            <Typography>Budget: {data?.budget} USD</Typography>
          )}
          <Typography gutterBottom variant="h6" align="center">
            {data?.runtime}min
            {data?.spoken_languages.length > 0 &&
              `/${data?.spoken_languages[0].name}`}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              className={classes.links}
              key={genre.name}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                height={30}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "2rem" }}>
          {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {data &&
            data?.credits?.cast
              ?.map(
                (character, i) =>
                  character.profile_path && (
                    <Grid
                      key={i}
                      item
                      xs={4}
                      md={2}
                      component={Link}
                      to={`/actors/${character.id}`}
                      style={{ textDecoration: "none" }}>
                      <img
                        className={classes.castImage}
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt={character.name}
                      />
                      <Typography
                        className={classes.characterName}
                        color="textPrimary"
                        align="center">
                        {character?.name}
                      </Typography>
                      <Typography
                        className={classes.actorName}
                        color="textSecondary"
                        align="center"
                        style={{
                          fontFamily: "Caveat",
                          fontWeight: "600",
                          fontSize: "20px",
                          wordWrap: "break-word",
                        }}>
                        {character.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
              )
              .slice(0, 12)}
        </Grid>
        <Grid item container style={{ marginTop: "2rem" }}>
          <div className={classes.buttonContainer}>
            <Grid item xs={12} sm={6} className={classes.buttonContainer}>
              <div>
                <Button
                  className={classes.buttonsRight}
                  // variant="outlined"
                  // style={{
                  //   margin: "10px",
                  // }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  endIcon={<Language />}>
                  Website
                </Button>
                <Button
                  className={classes.buttonsRight}
                  // variant="outlined"
                  // style={{
                  //   margin: "10px",
                  // }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}>
                  IMDB
                </Button>
                <Button
                  className={classes.buttonsRight}
                  // variant="outlined"
                  // style={{
                  //   margin: "10px",
                  // }}
                  onClick={() => setOpen(true)}
                  href="#"
                  endIcon={<Theaters />}>
                  Trailer
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.buttonContainer}>
              <div>
                <Button
                  className={classes.buttonsLeft}
                  // style={{ margin: "10px" }}
                  variant="contained"
                  onClick={addToFavorites}
                  endIcon={
                    isMovieFavorited ? (
                      <FavoriteBorderOutlined />
                    ) : (
                      <Favorite/>
                    )
                  }>
                  {isMovieFavorited ? "Unfavorite" : "Favorite"}
                </Button>
                <Button
                  variant="contained"
                  // style={{ margin: "10px" }}
                  className={classes.buttonsLeft}
                  onClick={addToWatchList}
                  endIcon={
                    isMovieWatchlisted ? (
                      <RemoveCircleOutlineIcon />
                    ) : (
                      <ControlPointIcon />
                    )
                  }>
                  Watchlist
                </Button>
                <Button
                  variant="contained"
                  className={classes.buttonsLeft}
                  // style={{ margin: "10px" }}
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: "primary.main" }}>
                  <Typography
                    variant="subtitle2"
                    component={Link}
                    to="/"
                    color="inherit"
                    sx={{ textDecoration: "none" }}>
                    Back
                  </Typography>
                </Button>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h4" gutterBottom align="center">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )}
      </Box>
      <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}>
        {data?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className={classes.video}
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </Modal>
    </Grid>
  );
}

export default MoviesInformation;
