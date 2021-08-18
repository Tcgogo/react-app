import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/about">首页</Link>
      <Link to="/home">我的</Link>
      <Route component={About}></Route>
      <Route component={Home}></Route>
    </div>
  );
}

export default App;
