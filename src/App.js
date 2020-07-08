import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/haomepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';


// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );
function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
