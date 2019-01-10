import React from "react";
import images from "../../images";
import "./IconLink.css";

const IconLink = ({url, iconName, bigIcon}) => (
   <a href={url} className={`IconLink ${bigIcon && "IconCircle"}`} target="_blank" rel="noopener noreferrer">
      <img className={`Icon ${bigIcon && "BigIcon"}`} src={images[iconName]} alt={iconName} />
   </a>
);

export default IconLink;