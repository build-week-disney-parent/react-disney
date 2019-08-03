import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Switch>
            {/* <Route path="/" exact render={() => <Redirect to="/signin" />} /> */}
            <Route path="/signin" component={Signin} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
