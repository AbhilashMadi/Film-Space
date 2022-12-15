import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route,Link } from "react-router-dom";

import { Actors, MoviesInformation, Movies, Navbar, Profile } from "./exports";

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route path="/movie/:id" element={ <h1>Hello world</h1> } />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
