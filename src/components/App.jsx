import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route,Link } from "react-router-dom";

import useStyles from "./styles"

import {Actors, Movies, MoivesInformation, Navbar, Profile} from "./exports"

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </main>
    </div>
  );
}
