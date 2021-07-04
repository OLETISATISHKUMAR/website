import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./compontes/Auth/SignIn/Presentation";
import DashBoard from "./compontes/Dashboard/Presentation";
import Header from "./compontes/Header/Presentation";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/home" component={DashBoard} />
          <Route path ="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
