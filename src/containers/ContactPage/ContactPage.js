import React from "react";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import IconLink from "../../components/IconLink/IconLink";
import "./ContactPage.css";
import cv from "../../assets/files/roberto-meran-cv-english.docx";

const ContactPage = props => {
   const {availWidth: width} = window.screen;
   window.scrollTo(0,0);

   return (
      <div className="ContactPage">
         <ArrowLink url={width > 849 ? "/tech" : "/my-projects/spa"} direction="up" title={width > 849 ? "My Stack" : "Multiple Page Apps"} />
         <h2 className="animated rotateInDownLeft">
            Let's get in touch
         </h2>
         <div className="BigIconList">
            <IconLink url="mailto:romedu1@hotmail.com" iconName="mail" bigIcon />
            <IconLink url="https://github.com/romedu" iconName="github" bigIcon />
            <IconLink url="https://www.linkedin.com/in/roberto-meran-duverge-68622b109/" iconName="linkedin" bigIcon />
         </div>
         <a className="animated fadeIn DownloadButton" href={cv} download>
            Download Resume
         </a>
      </div>
   );
}

export default ContactPage;