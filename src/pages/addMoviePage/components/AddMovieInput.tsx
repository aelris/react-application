import React from "react";

type Props = {
  type: string,
  placeholder: string,
  label: string,
}
const AddMovieInput = (props: Props) => {
  return (
    <div>
    <div>{props.label}</div>
    <input type={props.type} className="input" placeholder={props.placeholder}/>
    </div>
  )
}

export default AddMovieInput;
