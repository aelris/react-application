import React, { useCallback } from "react";
import "./moviecard.css";
import Kebab from "../Kebab/Kebab";
import { Movie } from "../../../../api/movies-api/models/movie.model";

type Props = {
  movie: Movie;
  onClick: (movie: Movie) => void;
};

export default function MovieCard({ movie, onClick }: Props) {
  const { poster_path, title, release_date, genres } = movie;

  const onClickHandler = useCallback(() => {
    onClick(movie);
  }, []);

  return (
    <>
      <div className="MovieCard">
        <Kebab />
        <img
          className="movieImg"
          src={poster_path}
          alt={title}
          onClick={onClickHandler}
        />
        <h3>{title}</h3>
        <h3>{new Date(release_date).getFullYear()}</h3>
        <p>{genres.join(" & ")}</p>
      </div>
    </>
  );
}
