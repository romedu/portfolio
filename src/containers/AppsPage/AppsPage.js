import React, {Component} from "react";
import FirebaseDB from "../../firebaseInstance";
import AppsList from "../../components/AppsList/AppsList";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import Loader from "../../components/Loader/Loader";

class AppsPage extends Component {
   state = {
      isLoading: true,
      appsList: []
   }

   componentDidMount(){
      const {history, match} = this.props,
            {appType} = match.params;

      if(appType !== "mpa" && appType !== "spa") return history.push("/");

      FirebaseDB.collection("apps").where("type", "==", appType).get()
      .then(querySnapshot => {
         const appsList = [];
         querySnapshot.forEach(doc => appsList.push({id: doc.id, data: doc.data()}));
         this.setState({appsList});
      })
      .catch(error => console.log(error));
   }

   componentDidUpdate(prevProps, prevState){
      const {isLoading, appsList} = this.state;

      if(isLoading && prevState.appsList !== appsList) this.setState({isLoading: false});
   }

   render(){
      const {isLoading, appsList} = this.state,
            {appType} = this.props.match.params,
            title = appType === "spa" ? "Single Page Apps" : "Multiple Page Apps";

      return (
         <div>
            <h2 style={{marginTop: "0", fontSize: "2em"}}>
               {title}
            </h2>
            {isLoading ? <Loader /> : <AppsList list={appsList} />}
            <ArrowLink url="/tech" direction={appType === "spa" ? "left" : "right"} disabled={isLoading} title="My Stack" />
         </div>
      )
   }
}

export default AppsPage;