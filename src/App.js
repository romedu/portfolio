import React, { Component } from 'react';
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import AboutPage from "./containers/AboutPage/AboutPage";
import TechPage from "./containers/TechPage/TechPage";
import AppsPage from "./containers/AppsPage/AppsPage";
import ContactPage from "./containers/ContactPage/ContactPage";
import './App.css';

class App extends Component {
   render() {
      return (
      <BrowserRouter>
         <div className="App">
            <Switch>
               <Route exact path="/" component={AboutPage} />
               <Route path="/tech" component={TechPage} />
               <Route path="/my-projects/:appType" component={AppsPage} />
               <Route path="/contact" component={ContactPage} />
               <Redirect from="*" to="/" />
            </Switch>
         </div>
      </BrowserRouter>
      );
   }
}

export default App;
