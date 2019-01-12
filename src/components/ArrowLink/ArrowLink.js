import React from "react";
import {Link} from "react-router-dom";
import "./ArrowLink.css";

const ArrowLink = ({url, direction, disabled, title}) => {
   const directions = {
      up: "↑",
      down: "↓",
      left: "←",
      right: "→"
   };

   return (
      <div className={`ArrowContainer ${disabled ? "DisabledArrow" : direction}`}>
         <Link to={url} className="ArrowLink" title={title}>
            {directions[direction]}
         </Link>
      </div>
   )
}

export default ArrowLink;