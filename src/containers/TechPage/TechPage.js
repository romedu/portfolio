import React from "react";
import ContentsTable from "../../components/ContentsTable/ContentsTable";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import "./TechPage.css";

const TechPage = props => {
   const technologies = ["Javascript", "NodeJS", "CSS", "HTML", "MongoDB", "Java", "Firebase"],
         libraries = ["React", "Redux", "Express", "Jquery", "Bootstrap", "SemanticUI"],
         futurePlans = ["Spring", "GraphQL", "Relational Databases", "Mobile Development (React Native)", "Progressive Web Apps", "Webpack", "Elasticsearch"];

   return (
      <div className="CenterPage TechPage">
         <h2>
            This is how my tech stack looks like:
         </h2>
         <div>
            <ContentsTable title="Technologies" items={technologies} />
            <ContentsTable title="Frameworks & Libraries" items={libraries} />
            <ContentsTable title="Future Plans / Work in progress" items={futurePlans} />
         </div>
         <ArrowLink url="/" direction="up" title="About Page" />
         <ArrowLink url="/my-projects/mpa" direction="left" title="Multiple Page Apps" />
         <ArrowLink url="/my-projects/spa" direction="right" title="Single Page Apps" />
         <ArrowLink url="/contact" direction="down" title="Contact" />
      </div>
   )
}

export default TechPage;