import React, { useState } from "react";
import KebabDropdown from "../KebabDropdown/KebabDropdown";
import kebabMenu from "../../../../images/kebabMenu.svg";
import './Kebab.css';

const Kebab = () => {
  const [visible, updateVisible] = useState(false);

  const onToggle = (status: boolean) => {
    updateVisible(status);
  };

  return (
    <div>
      <button className="kebab" onClick={() => onToggle(true)}>
        <img className="kebabImg" src={kebabMenu}/>
      </button>
      { visible && <KebabDropdown onDropdownClose={() => onToggle(false)}/> }
    </div>
  );
}

export default Kebab;