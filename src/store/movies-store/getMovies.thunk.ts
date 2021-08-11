import {Pagination} from "../../api/shared/models/pagination.model";
import {moviesSlice} from "./movies.slice";
import {moviesService} from "../../api/movies-api/movies.service";

export const getMoviesThunk = (pagination: Pagination) => {
  return async (dispatch: any) => {
    dispatch(moviesSlice.actions.getMovies())

    try {
      const { data } = await moviesService.getMovies(pagination);

      dispatch(moviesSlice.actions.getMoviesSuccess(data))
    } catch (e) {
      dispatch(moviesSlice.actions.getMoviesFailed())
    }
  }
}
