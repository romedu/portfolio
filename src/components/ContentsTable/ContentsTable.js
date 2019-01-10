import React from "react";

const ContentsTable = ({title, items}) => {
   const listItems = items.map((item, index) => <li key={index + item} style={{}}> {item} </li>);

   return (
      <div style={{width: "30vw"}}>
         <h3>
            {title}:
         </h3>
         <ul style={{width: "fit-content", margin: "0 auto", padding: "0"}}>
            {listItems}
         </ul>
      </div>
   );
}

export default ContentsTable;