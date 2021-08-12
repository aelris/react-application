import { moviesSlice } from "./movies.slice";
import { moviesService } from "../../api/movies-api/movies.service";
import { Movie } from "../../api/movies-api/models/movie.model";
import { Dispatch } from "redux";

export const deleteMoviesByIdThunk = (movie: Movie) => {
  return async (dispatch: Dispatch) => {
    dispatch(moviesSlice.actions.deleteMoviesById(movie));

    await moviesService.deleteMoviesById(movie.id);
  };
};
