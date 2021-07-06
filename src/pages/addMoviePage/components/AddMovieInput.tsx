import React from "react";

type Props = {
  type: string,
  placeholder: string,
  label: string,
}
const AddMovieInput = ({ type, placeholder, label }: Props) => {
  return (
    <div>
    <div>{label}</div>
    <input type={type} className="input" placeholder={placeholder}/>
    </div>
  )
}

export default AddMovieInput;
