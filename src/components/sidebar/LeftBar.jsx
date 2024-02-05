import React from "react";
import { NavLink } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="h-[70vh] flex flex-col gap-[20px]">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/create-order">Create Order</NavLink>
      <NavLink to="/dashboard/all-orders">All orders</NavLink>
      <NavLink to="/dashboard/completed-orders">Completed Orders</NavLink>
      <NavLink to="/dashboard/revisions">Revisions</NavLink>
    </div>
  );
};

export default LeftBar;
