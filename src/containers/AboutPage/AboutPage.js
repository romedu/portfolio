import React, {Component} from "react";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import Loader from "../../components/Loader/Loader";
import {multipleIncludes} from "../../helpers";
import "./AboutPage.css";

class AboutPage extends Component {
   state = {
      isLoading: true,
      randomJoke: null
   }

   componentDidMount(){
      fetch("https://geek-jokes.sameerkumar.website/api")
         .then(response => response.json())
         .then(randomJoke => this.setState({randomJoke: multipleIncludes(randomJoke, "Chuck", "Norris", "&", "sex", "l41d") ? undefined : randomJoke}))
         .catch(error => {});
   }

   componentDidUpdate(prevProps, prevState){
      const {isLoading, randomJoke} = this.state;
      if(isLoading && (randomJoke !== prevState.randomJoke)) this.setState({isLoading: false});
   }

   render(){
      const {isLoading, randomJoke} = this.state,
            randomJokeBlock = randomJoke && (
               <div className="JokeBlock animated fadeInUp">
                  <h3> Random joke: </h3>
                  {randomJoke}
               </div>
            );

      return (
         <div className="AboutPage Container" style={{height: !isLoading && !randomJoke ? "64vh" : "fit-content"}}>
            <h1 className="animated fadeInDown">
               Hello, my name is Roberto Meran
            </h1>
            <h2 className="animated zoomIn">
               I'm a Software Engineer student
               <br />
               and a Full Stack Web Developer
            </h2>
            {isLoading ? <Loader /> : randomJokeBlock}
            <ArrowLink url="/tech" direction="down" disabled={isLoading} title="My Stack" />
         </div>
      );
   }
}

export default AboutPage;