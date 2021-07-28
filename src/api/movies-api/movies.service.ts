import axios, {AxiosResponse} from 'axios';
import {Pagination} from "../shared/models/pagination.model";
import {PaginatedResult} from "../shared/models/paginated-result.model";
import {Movie} from "./models/movie.model";

class MoviesService {
  getMovies(pagination: Pagination): Promise<AxiosResponse<PaginatedResult<Movie>>> {
    return axios.get('/movies');
  }
  getMoviesById(movieId: number): Promise<AxiosResponse<PaginatedResult<Movie>>> {
    return axios.get(`/movies/${movieId}`);
  }
  deleteMoviesById(movieId: number): Promise<AxiosResponse<PaginatedResult<Movie>>> {
    return axios.delete(`/movies/${movieId}`);
  }
  putMovies(movie: Movie): Promise<AxiosResponse<PaginatedResult<Movie>>> {
    return axios.put('/movies');
  }
  postMovies(movie: Movie): Promise<AxiosResponse<PaginatedResult<Movie>>> {
    return axios.post('/movies');
  }
}

export const moviesService = new MoviesService();