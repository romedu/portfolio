import React from "react";
import AppThumbnail from "../AppThumbnail/AppThumbnail";
import "./AppsList.css";

const AppsList = ({list}) => {
   const {availWidth: screenWidth} = window.screen,
         appThumbails = list.map(({id, data}) => <AppThumbnail key={id} title={data.title} logo={data.logo} color={data.color} url={data.url} repos={data.repos} />),
         appListWidth = 22 * (list.length <= 3 ? list.length : 3);

   return (
      <ul className="AppsList" style={{ width: `${screenWidth > 849 && appListWidth}%`}} >
         {appThumbails}
      </ul>
   )
};

export default AppsList;