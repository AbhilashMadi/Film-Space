import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "490px",
    width: "96%",
    textDecoration: "none",
    borderRadius: "10px",
    boxShadow:
      theme.palette.mode === "light"
        ? "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        : "0 0 20px rgba(0,0,0,07)",
    border: theme.palette.mode === "dark" && "2px solid rgba(257,257,257,0.3)",
  },

  card: {
    borderRadius: "10px !important",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    position: "relative",
  },

  cardMedia: {
    borderRadius: "10px !important",
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.575)",
    // backgroundBlendMode: "darken",

    "&:hover": {
      transform: "scale(1.05)",
    },
    transition: "all .4s ease-in-out",
    backgroundPosition: "center",

    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      backgroundImage:
        "linear-gradient(to bottom,transparent, rgba(0,0,0,0), rgba(0,0,0,1))",

      width: "100%",
      height: "100%",
    },
  },

  CardContent: {
    color: "#fff",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    position: "relative",
    backgroundColor: "transparent",
  },
}));
