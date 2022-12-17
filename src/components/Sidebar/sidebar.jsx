import React from "react";
import { useEffect, Fragment } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

import useStyles from "./styles";

const blueLogo =
  "https://fontmeme.com/permalink/221216/551e201de3cf56736b10942d949f207f.png";
const redLogo =
  "https://fontmeme.com/permalink/221216/fff8d845674880ec6d5fd60ad3a3abab.png";

const Categories = [
  { label: "Popular", value: "poular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comdey", value: "poular" },
  { label: "Action", value: "top_rated" },
  { label: "Horror", value: "upcoming" },
  { label: "Animation", value: "animation" },
  { label: "Romantic", value: "romantic" },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Fragment>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={
            theme.palette.mode === "light"
              ? blueLogo
              : redLogo
          }
          alt="Film-Space Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem button onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Fragment>
  );
}

export default Sidebar;
