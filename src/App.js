import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/haomepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import  { setCurrentUser } from './redux/user/user.actions' ;


// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );
class App extends Component {
componentDidMount(){
  const {setCurrentUser } = this.props;
  this.unsubscribeFormAuth =  auth.onAuthStateChanged( async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data
          });        
      });
      setCurrentUser( userAuth )
    }
  } )
}
componentWillUnmount () {
  this.unsubscribeFormAuth();  
}

  render(){
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.setCurrentUser ? (<Redirect to='/' />) : (<SignInSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App) ;
