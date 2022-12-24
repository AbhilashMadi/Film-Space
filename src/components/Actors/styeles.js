import { makeStyles } from "@mui/styles";
import { border, borderRadius, maxWidth } from "@mui/system";

export default makeStyles((theme) => ({
  image: {
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
      filter: "grayscale(125%)",
    },
  },

  actorImage: {
    // boxShadow:
    //   "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
  nameDeco: {
    width: "30px",
    height: "4px",
    background: "#1976d2;",
    marginTop: "0px",
    borderRadius: "50px",
    transition: "all .3s ease-in-out",
    // backgroundImage: "linear-gradient(90deg,#0052D4,#4364F7,#6FB1FC)",
    "&:hover": {
      width: "40px",
    },
  },
}));