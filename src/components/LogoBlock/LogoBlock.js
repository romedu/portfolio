import React from "react";
import {Link} from "react-router-dom";

const LogoBlock = ({url, color, logo}) => {
   return (
      <Link to={url} style={{backgroundColor: color || "inherit", width: "50px", height: "50px"}}>
         <img src={`../../assets/images/${logo}`} alt="" style={{width: "50px", height: "50px"}} />
      </Link>
   );
}

export default LogoBlock;