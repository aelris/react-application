import React from "react";
import './moviecard.css'
import Kebab from "../Kebab/Kebab";

type Props = {
  img: string;
  title: string;
  year: string;
  description: string;
}

export default function MovieCard({img, title, year, description}: Props){
    return (
        <>
            <div className="MovieCard">
                <Kebab/>
                <img className='movieImg' src={img} alt={title}/>
                <h3>{title}</h3>
                <h3>{year}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}
