import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },

  poster: {
    display: "block",
    width: "100%",
    transition: "all .3s ease-in-out",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto !imporatant",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto !imporatant",
      width: "100%",
      height: "350px",
      marginBottom: "30px",
    },
    "&:hover": {
      transform: "scale(1.1)",
      //   filter: "blur(2px)",
      filter: "contrast(125%)",
    },
  },

  posterDiv: {
    boxShadow:
      theme.palette.mode === "light"
        ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        : "0 0 20px rgba(0,0,0,07)",
    border:
      theme.palette.mode === "dark" ? "2px solid rgba(257,257,257, 0.3)" : "",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto !imporatant",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto !imporatant",
      width: "100%",
      height: "350px",
      marginBottom: "30px",
    },
    overflow: "hidden",
    borderRadius: "20px",
    backgroundPosition: "center",
  },

  genresContainer: {
    margin: "10px 0 !imaportant",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
    marginRight: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
  },
  castImage: {
    width: "100%",
    maxWidth: "7em",
    height: "8em",
    objectFit: "cover",
    borderRadius: "10px",
    "&:hover": {
      filter: "grayscale(1)",
    },
    // boxShadow:
    //   "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    boxShadow:
      theme.palette.mode === "light"
        ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        : "0 0 20px rgba(0,0,0,07)",
    border:
      theme.palette.mode === "dark" ? "2px solid rgba(257,257,257, 0.2)" : "",
  },
  characterName: {
    textIndent: "-30px",
  },
  actorName: {
    textIndent: "-20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
  buttonsRight: {
    border:
      theme.palette.mode === "light"
        ? "1px solid #1976d2 !important"
        : "1px solid #DB202C !important",
    margin: "10px !important",
    color: theme.palette.mode === "light" ? "intial" : "#E3242D !important",
  },

  buttonsLeft: {
    margin: "10px !important",
    color: !theme.palette.mode === "light" ? "intial" : "#FFF !important",
    backgroundColor:theme.palette.mode === "light" ? "intial" : "#E3242D !important"
  },
}));
