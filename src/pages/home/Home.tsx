import React, {useCallback, useState} from "react";
import {SearchButton} from "./components/SearchButton/SearchButton";
import Genres from "./components/Genres/Genres";
import AddMoviePage from "../addMoviePage/AddMoviePage";
import "./Home.css";
import {MovieCardContainer} from "./components/MovieCardContainer/MovieCardContainer";
import {Movie, movieCardList,} from "./components/MovieCardContainer/MovieList";
import MovieInfo from "./components/MovieInfo";



const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const onClickModalActive = useCallback(() => {
    setModalActive(true)
  }, []);
  const onMovieClick = useCallback((movie) => {
    setSelectedMovie(movie);
  }, []);
  const onClickMovieHide = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  return (
      <div className="container">
        <div className="header">

          { selectedMovie === null ?
            (
              <>
                <div className="addMovieContainer">
                  <button type="button" className="addMovie" onClick={onClickModalActive} >
                    + Add Movie
                  </button>
                </div>
                <div className="searchContainer">
                  <input type="text" className="searchInput" placeholder="What do you want to watch?"/>
                  <SearchButton/>
                </div>
              </>
            ) :
            (
              <MovieInfo movie={selectedMovie} onClick={onClickMovieHide}/>
            )
          }


        </div>
        <div className="genresContainer">
          <Genres name="All"/>
          <Genres name="Documentary"/>
          <Genres name="Comedy"/>
          <Genres name="Horror"/>
          <Genres name="Crime"/>
        </div>
        <MovieCardContainer onClick={onMovieClick} movieCardList={movieCardList}/>
        <AddMoviePage active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

export default Home;