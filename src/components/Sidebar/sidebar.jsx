import React from 'react'
import { useEffect,Fragment } from 'react'
import { Divider,List, ListItem, ListItemText,LIstSubheader,ListItemIcon, Box, CircularProgress } from '@mui/material'
import {Link} from "react-router-dom"
import { useTheme } from '@mui/styles'
import useStyles from "./styles"

function Sidebar({setMobileOpen}) {
    const theme = useTheme();
    const classes = useStyles();
  return (
    <Fragment>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={
            theme.palette.mode === "light"
              ? "/src/assets/film-space-red.png"
              : "/src/assets/film-space-black.png"
          }
          alt="Film-Space Logo"
        />
      </Link>
    </Fragment>
  );
}

export default Sidebar;