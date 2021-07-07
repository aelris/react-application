import React, {useCallback, useState} from "react";
import {SearchButton} from "./components/SearchButton/SearchButton";
import Genres from "./components/Genres/Genres";
import AddMoviePage from "../addMoviePage/AddMoviePage";
import "./Home.css";
import {MovieCardContainer} from "./components/MovieCardContainer/MovieCardContainer";
import {movieCardList} from "./components/MovieCardContainer/MovieList";



const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const onClickModalActive = useCallback(() => {setModalActive(true)}, []);
  return (
      <div className="container">
        <div className="header">
          <div className="addMovieContainer">
            <button type="button" className="addMovie" onClick={onClickModalActive} >
              + Add Movie
            </button>
          </div>
          <div className="searchContainer">
            <input type="text" className="searchInput" placeholder="What do you want to watch?"/>
            <SearchButton/>
          </div>
        </div>
        <div className="genresContainer">
          <Genres name="All"/>
          <Genres name="Documentary"/>
          <Genres name="Comedy"/>
          <Genres name="Horror"/>
          <Genres name="Crime"/>
        </div>
        <MovieCardContainer  movieCardList={movieCardList}/>
        <AddMoviePage active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

export default Home;