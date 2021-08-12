import { putMoviesThunk } from './putMovies.thunk';
import { moviesSlice } from './movies.slice';
import { moviesService } from '../../api/movies-api/movies.service';

jest.mock('../../api/movies-api/movies.service', () => ({
  moviesService: {
    putMovies: jest.fn(),
  },
}));

describe('putMoviesThunk', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();

    moviesService.putMovies = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
  });

  it('should dispatch action with movie id which should be deleted', () => {
    putMoviesThunk({ name: 'Hello' })(dispatchMock);

    expect(dispatchMock).toBeCalledWith(moviesSlice.actions.putMoviesById({ name: 'Hello' }));
  });

  it('should call service to make http request and delete movie with specific id', () => {
    putMoviesThunk({ name: 'Hello' })(dispatchMock);

    expect(moviesService.putMovies).toBeCalledWith({ name: 'Hello' });
  });
});
