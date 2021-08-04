import {moviesSlice} from "./movies.slice";
import {moviesService} from "../../api/movies-api/movies.service";
import {Movie} from "../../api/movies-api/models/movie.model";

export const deleteMoviesByIdThunk = (movieId: Movie) => {
  return async (dispatch: any) => {
    dispatch(moviesSlice.actions.deleteMoviesById(movieId))

    try {
      const { data } = await moviesService.deleteMoviesById(movieId.id);

      dispatch(moviesSlice.actions.getMoviesSuccess(data))

    } catch (e) {

      dispatch(moviesSlice.actions.getMoviesFailed())
    }
  }
}