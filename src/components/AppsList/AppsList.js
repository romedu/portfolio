import React from "react";
import AppThumbnail from "../AppThumbnail/AppThumbnail";

const AppsList = ({list}) => {
   const appThumbails = list.map(({id, data}) => <AppThumbnail key={id} title={data.title} logo={data.logo} color={data.color} url={data.url} repos={data.repos} />),
         appListWidth = 22 * (list.length <= 3 ? list.length : 3);

   return (
      <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: `${appListWidth}%`, margin: "8vh auto 0"}} >
         {appThumbails}
      </ul>
   )
};

export default AppsList;