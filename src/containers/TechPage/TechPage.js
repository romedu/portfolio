import React, {Component} from "react";
import firebaseDB from "../../firebaseInstance";
import ContentsTable from "../../components/ContentsTable/ContentsTable";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import Loader from "../../components/Loader/Loader";
import "./TechPage.css";

class TechPage extends Component {
   state = {
      isLoading: true,
      technologies: [],
      libraries: [],
      learningNext: []
   }

   componentDidMount(){
      //GET THE DATA FROM FIREBASE
      firebaseDB.collection("mastery").get()
         .then(querySnapshot => {
            const techData = {};
            querySnapshot.forEach(doc => {
               let currentData = doc.data();
               console.log(currentData);
               for(let property in currentData) techData[property] = currentData[property];
            })
            this.setState({
               isLoading: false,
               technologies: techData.technologies,
               libraries: techData.libraries,
               learningNext: techData.learningNext
            });
         })
         .catch(error => console.log(error));
   }

   render(){
      const {isLoading, technologies, libraries, learningNext} = this.state,
            {availWidth: width} = window.screen,
            content = !isLoading ? (
                                    <div className="TableList">
                                       <ContentsTable title="Technologies" items={technologies} />
                                       <ContentsTable title="Frameworks & Libraries" items={libraries} />
                                       <ContentsTable title="Learning next" items={learningNext} />
                                    </div>
                                 ) : <Loader />

      return (
         <div className="TechPage Container" style={{height: isLoading && "100vh"}}>
            <h2 className="animated fadeInDown">
               This is how my tech stack looks like:
            </h2>
            {content}
            <ArrowLink url="/" direction="up" title="About Page" />
            <ArrowLink url="/my-projects/mpa" direction={width < 850 ? "down" : "left"} title="Multiple Page Apps" />
            {width > 849 && <ArrowLink url="/my-projects/spa" direction="right" title="Single Page Apps" />}
            {width > 849 && <ArrowLink url="/contact" direction="down" title="Contact" />}
         </div>
      )
   }
}

export default TechPage;