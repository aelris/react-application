import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice, MoviesState } from "./movies-store/movies.slice";
import thunk from "redux-thunk";

export type Store = {
  movies: MoviesState;
};

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
  middleware: [thunk],
  devTools: true,
});
