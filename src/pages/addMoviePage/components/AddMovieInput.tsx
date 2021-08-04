import React from "react";

type Props = {
  name: string,
  type?: string,
  placeholder?: string,
  label: string,
  field: any;
}
const AddMovieInput = ({ label, name, type, placeholder, field }: Props) => {
  return (
    <div className="addMovieInput">
    <label>{label}</label>
      <input
        name={name}
        type={type}
        {...field}
        placeholder={placeholder}/>
    </div>
  )
}

export default AddMovieInput;
