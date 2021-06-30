import React, {useState} from "react";
import {SearchButton} from "./components/SearchButton/SearchButton";
import Genres from "./components/Genres/Genres";
import MovieCard from "./components/MovieCard/MovieCard";
import AddMoviePage from "../addMoviePage/AddMoviePage";
import RaM from "../../images/RickAndMorty.jpg";
import Man from "../../images/TheMandalorian.jpg";
import Game from "../../images/GameOfThrones.jpg";
import "./Home.css";



const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
      <div className="container">
        <div className="addMovieContainer">
          <button type="button" className="addMovie" onClick={() => setModalActive(true)}>
            + Add Movie
          </button>
        </div>
        <div className="searchContainer">
          <input type="text" className="searchInput" placeholder="What do you want to watch?"/>
          <SearchButton/>
        </div>
        <div className="genresContainer">
          <Genres name="All"/>
          <Genres name="Documentary"/>
          <Genres name="Comedy"/>
          <Genres name="Horror"/>
          <Genres name="Crime"/>
        </div>
        <div className="movieContainer">
          <MovieCard img={RaM} title="Rick and Morty" year="2013" description="Action & Adventure"/>
          <MovieCard img={Man} title="The Mandalorian" year="2019" description="Action & Adventure"/>
          <MovieCard img={Game} title="Game of Thrones" year="2011" description="Drama, Fantasy"/>
        </div>
        <AddMoviePage active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

export default Home;