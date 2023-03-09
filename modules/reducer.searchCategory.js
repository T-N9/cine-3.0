import { createSlice } from "@reduxjs/toolkit";

export const searchCategorySlice = createSlice({
  name: "searchCategory",
  initialState: {
    active: "movies",
    currentPage: 1,
    movies: 0,
    series: 0,
    crews: 0,
  },
  reducers: {
    setActiveSearchCategory: (state, action) => {
      state.active = action.payload;
    },
    setNextPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    setPrevPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    setMovieQty: (state, action) => {
      state.movies = action.payload;
    },
    setSerieQty: (state, action) => {
      state.series = action.payload;
    },
    setCrewsQty: (state, action) => {
      state.crews = action.payload;
    },
  },
});

export const {
  setActiveSearchCategory,
  setMovieQty,
  setSerieQty,
  setCrewsQty,
  setNextPage,
  setPrevPage,
} = searchCategorySlice.actions;
export default searchCategorySlice.reducer;
