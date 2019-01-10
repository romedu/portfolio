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
      <Link to={url} className={`ArrowLink ${disabled ? "DisabledArrow" : direction}`} title={title}>
         {directions[direction]}
      </Link>
   )
}

export default ArrowLink;