import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Signin />
        <Signup />
      </div>
    </Router>
  );
}

export default App;
