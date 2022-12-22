import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route,Link } from "react-router-dom";

import useStyles from "./styles"

import { Actors, Movies, MoviesInformation, Navbar, Profile } from "./exports";

export default function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>

      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MoviesInformation/>}/>
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
