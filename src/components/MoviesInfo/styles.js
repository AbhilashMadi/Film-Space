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

  posterDiv: {
    borderRadius: "20px",
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    width: "80%",
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
  },

  poster: {
    display: "block",
    width:"100%",
    transition: "all .3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
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
  },

  
}));
