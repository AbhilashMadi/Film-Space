import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },

  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("sx")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  image: {
    borderRadius: "20px",
    marginBottom: "10px",
    height: "300px",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "12",
    },
  },

  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "0",
    textAlign: "center",
  },
}));