import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: "genreOrCategory",
    initialState : {
        genreOrCategory:"",
        page:1,
        searchQuary:"",
    },
    reducers: {
        selectGenreOrCategory : (state, action) => {
            // state.genreOrCategoryName = 
            console.log(action.payload);
        }
    }
})

export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer