import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../pages/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <div>
          <Navigation />
        </div>
        <div className="mt-[120px]">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
