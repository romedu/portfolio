import React from "react";
import "./ContentsTable.css";

const ContentsTable = ({title, items}) => {
   const listItems = items.map((item, index) => <li key={index + item} style={{}}> {item} </li>);

   return (
      <div className="ContentsTable animated fadeInUp">
         <h3>
            {title}:
         </h3>
         <ul>
            {listItems}
         </ul>
      </div>
   );
}

export default ContentsTable;