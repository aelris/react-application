import { deleteMoviesByIdThunk } from './deleteMoviesById.thunk';
import { moviesSlice } from './movies.slice';
import { moviesService } from '../../api/movies-api/movies.service';

jest.mock('../../api/movies-api/movies.service', () => ({
  moviesService: {
    deleteMoviesById: jest.fn(),
  },
}));

describe('deleteMoviesByIdThunk', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();

    moviesService.deleteMoviesById = jest.fn().mockImplementation(() => Promise.resolve());
  });

  it('should dispatch action with movie id which should be deleted', () => {
    deleteMoviesByIdThunk({ id: 1 })(dispatchMock);

    expect(dispatchMock).toBeCalledWith(moviesSlice.actions.deleteMoviesById({ id: 1 }));
  });

  it('should call service to make http request and delete movie with specific id', () => {
    deleteMoviesByIdThunk({ id: 2 })(dispatchMock);

    expect(moviesService.deleteMoviesById).toBeCalledWith(2);
  });
});
