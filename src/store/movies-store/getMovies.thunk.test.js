import { getMoviesThunk } from './getMovies.thunk';
import { moviesSlice } from './movies.slice';
import { moviesService } from '../../api/movies-api/movies.service';

jest.mock('../../api/movies-api/movies.service', () => ({
  moviesService: {
    getMovies: jest.fn(),
  },
}));

describe('getMoviesThunk', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();

    moviesService.getMovies = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
  });

  it('should dispatch action with pagination', () => {
    getMoviesThunk({ limit: 5, offset: 5 })(dispatchMock);

    expect(dispatchMock).toBeCalledWith(
      moviesSlice.actions.getMovies(),
    );
  });

  it('should call service to make http request and show movies', () => {
    getMoviesThunk({ limit: 5, offset: 5 })(dispatchMock);

    expect(moviesService.getMovies).toBeCalledWith({ limit: 5, offset: 5 });
  });
});
