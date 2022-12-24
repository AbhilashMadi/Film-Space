import React from "react";
import { useState, useEffect } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useStyles from "./styles";
import { searchMovie } from "../../features/currentGenreOrCategory";
import { InputAdornment, TextField,useMediaQuery } from "@mui/material";

function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const isMobile = useMediaQuery("(max-width:600px)")
  // if(isMobile){
  //   console.log("isMobile")
  // } else {
  //   console.log("notMobile")
  // }

  function handleKeyPress(event) {
    if(event.key === "Enter"){
        dispatch(searchMovie(query));
    }
  }

  if(location.pathname !== "/"){
    return null;
  }

  return (
    <div className={classes.searchContainer}>
      <TextField
        placeholder="Search"
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant={!isMobile ? "outlined" : "standard"}
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
