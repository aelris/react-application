import React, { useCallback } from "react";
import "./movieInfo.css";
import { Movie } from "../../../api/movies-api/models/movie.model";

type Props = {
  movie: Movie;
  onClick: () => void;
};

export default function MovieInfo({ movie, onClick }: Props) {
  const { poster_path, title, vote_average, release_date, genres, overview } =
    movie;

  const onClickHandler = useCallback(() => {
    onClick();
  }, []);

  return (
    <>
      <div className="MovieInfo">
        <button onClick={onClickHandler}>HIDE</button>
        <img className="movieImg" src={poster_path} alt={title} />
        <div>
          <h3>{title}</h3>
          <h3>{vote_average}</h3>
          <h3>{release_date}</h3>
          <p>{genres}</p>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
}
