import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "./App.css";
import Nav from "./Nav";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Nav/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
