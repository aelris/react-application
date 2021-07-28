import {moviesSlice} from "./movies.slice";
import {moviesService} from "../../api/movies-api/movies.service";

export const deleteMoviesByIdThunk = (movieId: number) => {
  return async (dispatch: any) => {
    dispatch(moviesSlice.actions.deleteMoviesById())

    try {
      const { data } = await moviesService.deleteMoviesById(movieId);

      dispatch(moviesSlice.actions.getMoviesSuccess(data))

    } catch (e) {

      dispatch(moviesSlice.actions.getMoviesFailed())
    }
  }
}