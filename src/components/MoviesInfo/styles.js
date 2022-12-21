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
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
}));
