import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/haomepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );
class App extends Component {
constructor(){
  super();
  this.state = {
    currentUser: null
  }
}
unsubscribeFormAuth = null;

componentDidMount(){
  this.unsubscribeFormAuth =  auth.onAuthStateChanged( async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        this.setState({
          currebtUser:{
            id: snapShot.id,
            ...snapShot.data
          }
        });

      });
      this.setState({ currentUser: userAuth })
    }
  } )
}
componentWillUnmount () {
  this.unsubscribeFormAuth();  
}

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}  />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
