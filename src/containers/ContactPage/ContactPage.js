import React from "react";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import IconLink from "../../components/IconLink/IconLink";

const ContactPage = props => {
   return (
      <div>
         <ArrowLink url="/tech" direction="up" title="My Stack" />
         <h2 style={{fontSize: "2em"}}>
            Let's get in touch
         </h2>
         <div style={{margin: "13vh auto 0", width: "50%", display: "flex", justifyContent: "space-around"}}>
            <IconLink url="mailto:romedu1@hotmail.com" iconName="mail" bigIcon />
            <IconLink url="https://github.com/romedu" iconName="github" bigIcon />
            <IconLink url="https://www.linkedin.com/in/roberto-meran-duverge-68622b109/" iconName="linkedin" bigIcon />
         </div>
      </div>
   );
}

export default ContactPage;