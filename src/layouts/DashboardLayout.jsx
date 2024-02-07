import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../pages/footer/Footer";
import LeftBar from "../components/sidebar/LeftBar";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="flex w-[95%] mx-auto mt-[140px]">
        <div className="w-[20%]">
          <LeftBar />
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
