import React from "react";
import ContentsTable from "../../components/ContentsTable/ContentsTable";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import "./TechPage.css";

const TechPage = props => {
   const {availWidth: width} = window.screen,
         technologies = ["Javascript", "NodeJS", "CSS", "HTML", "MongoDB", "Java", "Firebase", "MySQL"],
         libraries = ["React", "Redux", "Express", "Jquery", "Bootstrap", "SemanticUI"],
         futurePlans = ["Spring", "GraphQL", "Mobile Dev", "PWA", "Webpack", "Elasticsearch"];

   return (
      <div className="TechPage Container">
         <h2 className="animated fadeInDown">
            This is how my tech stack looks like:
         </h2>
         <div className="TableList">
            <ContentsTable title="Technologies" items={technologies} />
            <ContentsTable title="Frameworks & Libraries" items={libraries} />
            <ContentsTable title="Learning next" items={futurePlans} />
         </div>
         <ArrowLink url="/" direction="up" title="About Page" />
         <ArrowLink url="/my-projects/mpa" direction={width < 850 ? "down" : "left"} title="Multiple Page Apps" />
         {width > 849 && <ArrowLink url="/my-projects/spa" direction="right" title="Single Page Apps" />}
         {width > 849 && <ArrowLink url="/contact" direction="down" title="Contact" />}
      </div>
   )
}

export default TechPage;