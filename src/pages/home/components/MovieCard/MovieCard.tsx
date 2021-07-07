import React, {useCallback} from "react";
import './moviecard.css'
import Kebab from "../Kebab/Kebab";
import {Movie} from "../MovieCardContainer/MovieList";

type Props = {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export default function MovieCard({ movie, onClick}: Props){
    const { imageUrl, title, year, genre } = movie;

    const onClickHandler = useCallback(() => {
      onClick(movie)
    }, [])

    return (
        <>
            <div className="MovieCard">
                <Kebab/>
                <img className='movieImg' src={imageUrl} alt={title} onClick={onClickHandler}/>
                <h3>{title}</h3>
                <h3>{year}</h3>
                <p>{genre}</p>
            </div>
        </>
    )
}
