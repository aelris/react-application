import React, {useCallback} from "react";
import {Movie} from "./MovieCardContainer/MovieList";
import "./movieInfo.css"

type Props = {
  movie: Movie;
  onClick: () => void;
}

export default function MovieInfo({ movie, onClick}: Props){
  const { imageUrl, title, score, year, genre, desc } = movie;

  const onClickHandler = useCallback(() => {
    onClick()
  }, [])

  return (
    <>
      <div className="MovieInfo">
        <button onClick={onClickHandler}>HIDE</button>
        <img className='movieImg' src={imageUrl} alt={title}/>
        <div>
          <h3>{title}</h3>
          <h3>{score}</h3>
          <h3>{year}</h3>
          <p>{genre}</p>
          <p>{desc}</p>
        </div>
      </div>
    </>
  )
}