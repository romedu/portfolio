import React, {Component, Fragment} from "react";
import firebaseDB from "../../firebaseInstance";
import AppsList from "../../components/AppsList/AppsList";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import Loader from "../../components/Loader/Loader";
import "./AppsPage.css";

class AppsPage extends Component {
   state = {
      isLoading: true,
      appsList: []
   }

   componentDidMount(){
      const {history, match} = this.props,
            {appType} = match.params;

      if(appType !== "mpa" && appType !== "spa") return history.push("/");
      this.getAppsData();      
   }

   componentDidUpdate(prevProps, prevState){
      const {location} = this.props,
            {isLoading, appsList} = this.state;

      if(location !== prevProps.location) this.setState({isLoading: true}, this.getAppsData);
      else if(isLoading && prevState.appsList !== appsList) this.setState({isLoading: false});
   }

   getAppsData = () => {
      const {appType} = this.props.match.params;

      firebaseDB.collection("apps").where("type", "==", appType).get()
      .then(querySnapshot => {
         const appsList = [];
         querySnapshot.forEach(doc => appsList.push({id: doc.id, data: doc.data()}));
         this.setState({appsList});
      })
      .catch(error => console.log(error));
   }

   render(){
      const {availWidth: width} = window.screen,
            {isLoading, appsList} = this.state,
            {appType} = this.props.match.params,
            title = appType === "spa" ? "Single Page Apps" : "Multiple Page Apps",
            mobileArrowLinks = appType === "spa" ? <Fragment>
                                                      <ArrowLink url="/my-projects/mpa" direction="up" title="Multiple Page Apps" />
                                                      <ArrowLink url="/contact" direction="down" title="Contact" />
                                                   </Fragment>
                                                 : <Fragment>
                                                      <ArrowLink url="/tech" direction="up" disabled={isLoading} title="My Stack" />
                                                      <ArrowLink url="/my-projects/spa" direction="down" title="Single Page Apps" /> 
                                                   </Fragment>;

      window.scrollTo(0,0);

      return (
         <div className="AppsPage Container" style={{height: (appsList.length === 0 || isLoading) && "100vh"}}>
            <h2 className="animated fadeInDown">
               {title}
            </h2>
            {isLoading ? <Loader /> : <AppsList list={appsList} />}
            {width > 849 && <ArrowLink url="/tech" direction={appType === "spa" ? "left" : "right"} disabled={isLoading} title="My Stack" />}
            {width < 849 && mobileArrowLinks}
         </div>
      )
   }
}

export default AppsPage;