import React from "react";
import { Fragment } from "react";
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

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import { useGetGenresQuery } from "../../services/TMDB";
import genreIcons from "../../assets/genres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const blueLogo =
  "https://fontmeme.com/permalink/221216/551e201de3cf56736b10942d949f207f.png";
const redLogo =
  "https://fontmeme.com/permalink/221216/fff8d845674880ec6d5fd60ad3a3abab.png";

const Categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

function Sidebar({ setMobileOpen }) {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          alt="Film-Space Logo"
        />
      </Link>
      {/* <Divider /> */}
      <Divider display="flex" flexDirection="row">
        <a
          href="https://twitter.com/abhilash_madi"
          title="Abhilash Kumar"
          target="_blank"
          className={classes.developer}>
          <TwitterIcon style={{fontSize:"16px"}}/>
        </a>
        <a
          title="Abhilash Kumar"
          href="https://github.com/AbhilashMadi"
          target="_blank"
          className={classes.developer}>
          <GitHubIcon style={{fontSize:"16px"}}/>
        </a>
      </Divider>
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              onClick={() => {
                dispatch(selectGenreOrCategory(value));
              }}
              button>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem
                onClick={() => {
                  dispatch(selectGenreOrCategory(id));
                }}
                button>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImage}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </Fragment>
  );
}

export default Sidebar;
