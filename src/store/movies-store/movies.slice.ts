import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Movie} from "../../api/movies-api/models/movie.model";
import {Pagination} from "../../api/shared/models/pagination.model";
import {PaginatedResult} from "../../api/shared/models/paginated-result.model";

export type MoviesState = {
  entities: Movie[];
  loading: boolean;
  pagination: Pagination;
}

const initialState: MoviesState = {
  entities: [],
  loading: false,
  pagination: {
    limit: 0,
    offset: 0
  }
}

export const moviesSlice = createSlice({
  name: 'Movies Slice',
  initialState,
  reducers: {
    getMovies: (state: MoviesState) => {
      return {
        ...state,
        loading: true
      }
    },
    getMoviesSuccess: (state: MoviesState, action: PayloadAction<PaginatedResult<Movie>>) => {
      return {
        ...state,
        loading: false,
        pagination: {
          ...state.pagination,
          limit: action.payload.limit,
          offset: action.payload.offset
        },
        entities: [...action.payload.data]
      }
    },
    getMoviesFailed: (state: MoviesState) => {
      return {
        ...state,
        loading: false
      }
    },
    deleteMoviesById: (state: MoviesState, action: PayloadAction<Movie>) => {
      return {
        ...state,
        entities: state.entities.filter(item => item.id !== action.payload.id),
        loading: false
      }
    },
    putMoviesById: (state: MoviesState, action: PayloadAction<Movie>) => {
      return {
        ...state,
        entities: state.entities.map((item) => {
          if (item.id !== action.payload.id){
            return item
          }
          return {
            ...item,
            ...action.payload
          }
        }),
        loading: false
      }
    },
    addMovie: (state: MoviesState, action: PayloadAction<Movie>) => {
      return {
        ...state,
        entities: [
          ...state.entities,
          action.payload
          ],
        loading: false
      }
    }
  }
})