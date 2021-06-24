import React from "react";
import './moviecard.css'

export default function MovieCard(props: { img: string; title: string; year: string, description: string; }){
    return (
        <>
            <div className="MovieCard">
                <img className='movieImg' src={props.img} alt={props.title}/>
                <h3>{props.title}</h3>
                <h3>{props.year}</h3>
                <p>{props.description}</p>
            </div>
        </>
    )
}
