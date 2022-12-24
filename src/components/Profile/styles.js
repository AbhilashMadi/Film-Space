import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
prfile: {
  transform: "all 0.3s ease-out",
},
logOut: {
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#DB202C !important"
      : "#1976d2 !important",
  color: "#FFFFFF !important",
},
}));
