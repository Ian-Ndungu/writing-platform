import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/auth/Login";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateOrder from "./pages/create-order/CreateOrder";
import About from "./pages/about/About";
import Writers from "./pages/Writers/Writers";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/writers" element={<Writers/>} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/create-order" element={<CreateOrder />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
