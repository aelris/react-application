import './App.css';
import React from 'react';
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import RaM from "./images/RickAndMorty.jpg";
import Man from "./images/TheMandalorian.jpg";
import Game from "./images/GameOfThrones.jpg";
import {Router} from "react-router";
import { createBrowserHistory } from "history";
import { AddMovie } from "./components/AddMovie";
import { SearchButton } from "./components/SearchButton";
import Genres from "./components/Genres";


const history = createBrowserHistory();
function App() {
  return (
      <Router history={history}>
        <div className="App">
            <AddMovie/>
            <input type="text" className="input" placeholder="What do you want to watch?"/>
            <SearchButton/>
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
        </div>
      </Router>
  );
}

export default App;
