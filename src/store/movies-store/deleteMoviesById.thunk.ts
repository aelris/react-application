import { moviesSlice } from "./movies.slice";
import { moviesService } from "../../api/movies-api/movies.service";
import { Movie } from "../../api/movies-api/models/movie.model";
import { Dispatch } from "redux";

export const deleteMoviesByIdThunk = (movieId: Movie) => {
  return async (dispatch: Dispatch) => {
    dispatch(moviesSlice.actions.deleteMoviesById(movieId));

    try {
      const { data } = await moviesService.deleteMoviesById(movieId.id);

      dispatch(moviesSlice.actions.getMoviesSuccess(data));
    } catch {
      dispatch(moviesSlice.actions.getMoviesFailed());
    }
  };
};
