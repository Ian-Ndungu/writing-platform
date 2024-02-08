import React from "react";
import LeftBar from "../components/sidebar/LeftBar";
import Navigation from "../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

const UserDashboard = () => {
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

export default UserDashboard;
