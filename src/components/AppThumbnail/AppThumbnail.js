import React from "react";
import IconLink from "../IconLink/IconLink";
import images from "../../images";
import "./AppThumbnail.css";

const AppThumbnail = ({title, logo, color, url, repos}) => {
   const reposLink = repos && repos.map(repo => <IconLink key={repo + 1} url={repo} iconName="github" />);
   
   return (
      <div className="AppThumbnail animated flipInX">
         <a href={url} target="_blank" rel="noopener noreferrer" className="AppLink" style={{backgroundColor: color}} >
            <h3>
               {title}
            </h3>
            <img src={images[logo]} alt="" className="AppLogo" />
         </a>
         {reposLink}
      </div>
   )
}

export default AppThumbnail;