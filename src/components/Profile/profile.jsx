import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

import { ExitToApp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useGetListQuery } from "../../services/TMDB";
import RatedCards from "../RatedCards/ratedCards";

import useStyles from "./styles"

const Profile = () => {
  const { user } = useSelector(userSelector);
  const classes = useStyles();

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlisted } =
    useGetListQuery({
      listName: "watchlist/movies",
      accountId: user.id,
      sessionId: localStorage.getItem("session_id"),
      page: 1,
    });

  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, [refetchFavorites, refetchWatchlisted]);

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Box className={classes.profile}>
      <Box display={"flex"} justifyContent="flex-end">
        <Button onClick={logOut} className={classes.logOut}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
