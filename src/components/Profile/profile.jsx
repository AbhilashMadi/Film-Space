import React from "react";
import { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useSelector } from "react-redux";

import { RatedCards } from "../exports";
import { userSelector } from "../../features/auth";
import { useGetListQuery } from "../../services/TMDB";

function Profile() {
  const { user } = useSelector(userSelector);
  // const favoriteMovies = [];

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/moives",
    accountId: user.id, sessionId:localStorage.getItem('session_id'),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlisted } =
    useGetListQuery({
      listName: "watchlist/moives",
      accountId: user.id,
      sessionId: localStorage.getItem("session_id"),
      page: 1,
    });

    useEffect(() => {
      refetchFavorites(), refetchWatchlisted();
    },[])

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  console.log("Favorite",favoriteMovies);
  console.log("Watchlisted", watchlistMovies);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add some of your favourite plays or movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlisted Movies" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
}

export default Profile;
