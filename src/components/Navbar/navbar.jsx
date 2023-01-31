import React from "react";
import { useState, useEffect ,useContext} from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

import { ColorModeContext } from "../../utils/ToggleColorMode";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setUser, userSelector } from "../../features/auth";
import { fetchToken, createSessionId, moviesApi } from "../../utils/index.js";
import useStyles from "./styles.js";
import { Sidebar, Search } from "../exports.jsx";

function Navbar() {
  const colorMode = useContext(ColorModeContext);

  const { isAuthenticated, user } = useSelector(userSelector);

  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const dispatch = useDispatch();

  const token = localStorage.getItem("request_token");
  const sessionIdfromLocalStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdfromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdfromLocalStorage}`
          );

          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();

          const { token: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
        }
      }
    };

    logInUser();
  }, [token, dispatch, sessionIdfromLocalStorage]);

  const afterLogin = () =>{
    // setTimeout(()=>{window.location.reload()},500)
  }

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((preMobileOpen) => !preMobileOpen)}
              className={classes.menuButton}>
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() => {
                  fetchToken();
                }}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
                onClick={() => afterLogin()}>
                {!isMobile && (
                  <React.Fragment> My Movies &nbsp; </React.Fragment>
                )}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
                />
              </Button>
            )}
          </div> 
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((preMobileOpen) => !preMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{
                keepMounted: true,
              }}>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
