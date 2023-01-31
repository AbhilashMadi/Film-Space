import { useContext, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleColorMode";
import { useDispatch } from "react-redux";
import {
  selectGenreOrCategory,
  searchMovie,
} from "../features/currentGenreOrCategory";
import { fetchToken } from "../utils";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: `${process.env.REACT_APP_ALENAI_KEY}/stage`,
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );

          if (foundGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            navigate("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          navigate("/");
        } else if (command === "search") {
          dispatch(searchMovie(query));
        } else if (command === "reload") {
          navigate("/");
        } else if (command === "home") {
          navigate("/");
        }
      },
    });
  }, [dispatch, setMode]);
};

export default useAlan;
