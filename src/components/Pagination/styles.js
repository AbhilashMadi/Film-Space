import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  button: {
    margin: "30px 2px",
    backgroundColor:
      theme.palette.mode === "light" ? "intial" : "#E3242D !important",
    color:
      theme.palette.mode === "light" ? "intial" : "#FFFFFF !important",
  },
  pageNumber: {
    margin: "0 20px !important",
    color: theme.palette.text.primary,
  },
}));