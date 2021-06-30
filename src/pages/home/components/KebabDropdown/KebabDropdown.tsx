import React from "react";
import Cross from "./../../../../images/x.svg";
import "./KebabDropdown.css";

type Props = {
  onDropdownClose: () => void;
}

const KebabDropdown = ({ onDropdownClose }: Props) => {
  return (
    <div className="kebabDropdownContainer">
      <img className="crossImg" src={Cross} onClick={onDropdownClose}/>
      <button className="dropBtn">Edit</button>
      <button className="dropBtn">Delete</button>
    </div>
  )
}

export default KebabDropdown;