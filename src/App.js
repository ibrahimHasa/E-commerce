import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';

import HomePage from "./pages/haomepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
