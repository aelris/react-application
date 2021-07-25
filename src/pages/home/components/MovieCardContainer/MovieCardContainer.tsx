import MovieCard from "../MovieCard/MovieCard";
import React, {useCallback} from "react";
import {Movie} from "./MovieList";

type Props = {
  movieCardList: Movie[];
  onClick: (movie: Movie) => void
}

export const MovieCardContainer = ({ movieCardList, onClick }: Props) => {

  const onClickHandler = useCallback((movie: Movie) => {
    onClick(movie);
  }, []);

  const movieList = movieCardList.map((movie, index) => <MovieCard key={movie.title} movie={movie} onClick={onClickHandler} />)

  return (
    <div className="movieContainer">
      { movieList }
    </div>
  )
}
