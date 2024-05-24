import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeMovies: (state, action) => {
        return null;
    }, 
    addTrailerVideo: (state, action) =>{
      state.trailerVideo = action.payload;
    }
  },
});

export const {addMovies, removeMovies, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;