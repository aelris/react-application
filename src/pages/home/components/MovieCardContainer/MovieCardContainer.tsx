import MovieCard from "../MovieCard/MovieCard";
import React from "react";

export const MovieCardContainer = ({movieCardList}:{movieCardList: {title: string, year: string, imageUrl: string, description: string}[]} ) => {
  return (
    <div className="movieContainer">
      {movieCardList.map((item, index) => (
        <MovieCard key={index} img={item.imageUrl} title={item.title} year={item.year} description={item.genre}/>
        ))}
    </div>
  )
}
