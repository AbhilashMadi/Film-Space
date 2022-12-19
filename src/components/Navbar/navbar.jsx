import React from "react";
import { useState, useEffect } from "react";
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
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setUser, userSelector } from "../../features/auth";
import { fetchToken, createSessionId, moviesApi } from "../../utils/index.js";
import useStyles from "./styles.js";
import { Sidebar, Search } from "../exports.jsx";

function Navbar() {
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
  }, [token]);

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
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
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
                onClick={() => {}}>
                {!isMobile && (
                  <React.Fragment> My Movies &nbsp; </React.Fragment>
                )}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://img2.freepng.es/20190704/xaa/kisspng-logo-portable-network-graphics-clip-art-image-tran-user-logo-search-result-8-cliparts-for-user-log-5d1e8b8841fe58.8142007815622828882703.jpg"
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
