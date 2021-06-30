import React from "react";
import cross from "./../../images/x.svg"
import AddMovieInput from "./components/AddMovieInput";
import "./addMoviePage.css"


const AddMoviePage = ({active, setActive}: {active: boolean; setActive: (status: boolean) => void}) => {
  return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
       <div className="addMoviePageContainer" onClick={e => e.stopPropagation()}>
        <img className="crossImg" src={cross} onClick={() => setActive(false)}/>
        <AddMovieInput type="text" placeholder="Title" label="Title"/>
        <AddMovieInput type="date" placeholder="Select Date" label="Release Date"/>
        <AddMovieInput type="text" placeholder="Movie URL" label="Movie URL here"/>
        <AddMovieInput type="text" placeholder="Genre" label="Select Genre"/>
        <AddMovieInput type="text" placeholder="Overview" label="Overview here"/>
        <AddMovieInput type="text" placeholder="Runtime" label="Runtime here"/>
       </div>
      </div>
  )
}

export default AddMoviePage;