import React, { useCallback, useEffect, useState } from "react";
import { SearchButton } from "./components/SearchButton/SearchButton";
import Genres from "./components/Genres/Genres";
import AddMoviePage from "../addMoviePage/AddMoviePage";
import "./Home.css";
import { MovieCardContainer } from "./components/MovieCardContainer/MovieCardContainer";
import MovieInfo from "./components/MovieInfo";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesThunk } from "../../store/movies-store/getMovies.thunk";
import { Store } from "../../store";
import { Movie } from "../../api/movies-api/models/movie.model";

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const onClickModalActive = useCallback(() => {
    setModalActive(true);
  }, []);
  const onMovieClick = useCallback((movie) => {
    setSelectedMovie(movie);
  }, []);
  const onClickMovieHide = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const dispatch = useDispatch();

  const movies = useSelector((store: Store) => store.movies.entities);

  useEffect(() => {
    dispatch(getMoviesThunk({ limit: 10, offset: 0 }));
  }, []);

  return (
    <div className="container">
      <div className="header">
        {!selectedMovie ? (
          <>
            <div className="addMovieContainer">
              <button
                type="button"
                className="addMovie"
                onClick={onClickModalActive}
              >
                + Add Movie
              </button>
            </div>
            <div className="searchContainer">
              <input
                type="text"
                className="searchInput"
                placeholder="What do you want to watch?"
              />
              <SearchButton />
            </div>
          </>
        ) : (
          <MovieInfo movie={selectedMovie} onClick={onClickMovieHide} />
        )}
      </div>
      <div className="genresContainer">
        <Genres name="All" />
        <Genres name="Documentary" />
        <Genres name="Comedy" />
        <Genres name="Horror" />
        <Genres name="Crime" />
      </div>
      <MovieCardContainer onClick={onMovieClick} movieCardList={movies} />
      <AddMoviePage active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Home;
