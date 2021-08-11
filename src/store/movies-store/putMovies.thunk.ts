import {Pagination} from "../../api/shared/models/pagination.model";
import {moviesSlice} from "./movies.slice";
import {moviesService} from "../../api/movies-api/movies.service";
import {Movie} from "../../api/movies-api/models/movie.model";

export const putMoviesThunk = (movie: Movie) => {
  return async (dispatch: any) => {
    dispatch(moviesSlice.actions.putMoviesById(movie))

    try {
      const { data } = await moviesService.putMovies(movie);

      dispatch(moviesSlice.actions.getMoviesSuccess(data))
    } catch (e) {
      dispatch(moviesSlice.actions.getMoviesFailed())
    }
  }
}