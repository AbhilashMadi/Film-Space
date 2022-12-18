import React from "react";
import { useState, useEffect } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useStyles from "./styles";
import { searchMovie } from "../../features/currentGenreOrCategory";
import { InputAdornment, TextField } from "@mui/material";

function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function handleKeyPress(event) {
    if(event.key === "Enter"){
        dispatch(searchMovie(query));
    }
  }

  return (
    <div className={classes.searchContainer}>
      <TextField
        placeholder="Search"
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}></TextField>
    </div>
  );
}

export default Search;
