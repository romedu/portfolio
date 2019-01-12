import React from "react";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import IconLink from "../../components/IconLink/IconLink";
import "./ContactPage.css";

const ContactPage = props => {
   const {availWidth: width} = window.screen;

   return (
      <div className="ContactPage Container">
         <ArrowLink url={width > 849 ? "/tech" : "/my-projects/spa"} direction="up" title={width > 849 ? "My Stack" : "Multiple Page Apps"} />
         <h2 style={{fontSize: "2em"}}>
            Let's get in touch
         </h2>
         <div className="BigIconList">
            <IconLink url="mailto:romedu1@hotmail.com" iconName="mail" bigIcon />
            <IconLink url="https://github.com/romedu" iconName="github" bigIcon />
            <IconLink url="https://www.linkedin.com/in/roberto-meran-duverge-68622b109/" iconName="linkedin" bigIcon />
         </div>
      </div>
   );
}

export default ContactPage;