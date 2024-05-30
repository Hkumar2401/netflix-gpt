import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    gptSuggestions: null,
    suggestedMovies: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addGptSuggestions: (state, action) => {
      state.gptSuggestions = action.payload;
    },
    addSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload;
    },
  },
});

export const { toggleGptSearch, addSuggestedMovies, addGptSuggestions } = gptSlice.actions;

export default gptSlice.reducer;
