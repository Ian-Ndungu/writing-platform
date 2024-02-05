import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import Home from "./pages/Home";
import Login from "./Login";


const App = () => {
  return (
    <BrowserRouter>
    
      <Nav/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
