import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
  },

  image: {
    width: "70%",
  },

  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },

  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  },

  bigText: {
    color: "primary",
    fontSize: "30",
  },

  developer: {
    textDecoration: "none",
    color: theme.palette.mode === "light" ? "#1976d2" : "#DB202C",
    margin:"4px",
  },
}));
