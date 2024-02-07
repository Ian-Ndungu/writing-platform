import React from "react";
import { NavLink } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="h-[70vh] flex flex-col gap-[20px]">
      <div className="flex items-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 11q-.425 0-.712-.288T3 10V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v6q0 .425-.288.713T10 11zm10 0q-.425 0-.712-.288T13 10V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11zM4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v6q0 .425-.288.713T10 21zm13 0q-.425 0-.712-.288T16 20v-2h-2.025q-.425 0-.7-.288T13 17q0-.425.288-.712T14 16h2v-2.025q0-.425.288-.7T17 13q.425 0 .713.288T18 14v2h2.025q.425 0 .7.288T21 17q0 .425-.288.713T20 18h-2v2.025q0 .425-.288.7T17 21"
          />
        </svg>
        <NavLink to="/dashboard" className="text-[16px] font-bold">
          Dashboard
        </NavLink>
      </div>
      <div className="flex items-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5v2H5v14h14v-5z"
          />
          <path fill="currentColor" d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4z" />
        </svg>
        <NavLink to="/dashboard/create-order" className="text-[16px] font-bold">
          Create Order
        </NavLink>
      </div>
      <div className="flex items-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M28 13h-2v-2c0-2.8-2.2-5-5-5h-3V4h3c3.9 0 7 3.1 7 7zm-6 7h3v2h-3zm0 4h3v2h-3z"
          />
          <path
            fill="currentColor"
            d="M27 30h-5v-2h5V18h-7v9c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h2v3c0 .6.4 1 1 1s1-.4 1-1V16h11v12c0 1.1-.9 2-2 2m-15-2h-1c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h1zm-1-18v2h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2.4l1.7 3l1.7-1l-2.3-4H4V4h10v6z"
          />
        </svg>
        <NavLink to="/dashboard/all-orders" className="text-[16px] font-bold">
          All orders
        </NavLink>
      </div>
      <div className="flex items-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"
          />
          <path
            fill="currentColor"
            d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v11h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
          />
        </svg>
        <NavLink
          to="/dashboard/completed-orders"
          className="text-[16px] font-bold"
        >
          Completed Orders
        </NavLink>
      </div>

      <div className="flex items-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.89 10.105a8.696 8.696 0 0 0-.789-1.456l-1.658 1.119a6.606 6.606 0 0 1 .987 2.345a6.659 6.659 0 0 1 0 2.648a6.495 6.495 0 0 1-.384 1.231a6.404 6.404 0 0 1-.603 1.112a6.654 6.654 0 0 1-1.776 1.775a6.606 6.606 0 0 1-2.343.987a6.734 6.734 0 0 1-2.646 0a6.55 6.55 0 0 1-3.317-1.788a6.605 6.605 0 0 1-1.408-2.088a6.613 6.613 0 0 1-.382-1.23a6.627 6.627 0 0 1 .382-3.877A6.551 6.551 0 0 1 7.36 8.797A6.628 6.628 0 0 1 9.446 7.39c.395-.167.81-.296 1.23-.382c.107-.022.216-.032.324-.049V10l5-4l-5-4v2.938a8.805 8.805 0 0 0-.725.111a8.512 8.512 0 0 0-3.063 1.29A8.566 8.566 0 0 0 4.11 16.77a8.535 8.535 0 0 0 1.835 2.724a8.614 8.614 0 0 0 2.721 1.833a8.55 8.55 0 0 0 5.061.499a8.576 8.576 0 0 0 6.162-5.056c.22-.52.389-1.061.5-1.608a8.643 8.643 0 0 0 0-3.45a8.684 8.684 0 0 0-.499-1.607"
          />
        </svg>
        <NavLink to="/dashboard/revisions" className="text-[16px] font-bold">
          Revisions
        </NavLink>
      </div>
      <div className="flex items-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.89 10.105a8.696 8.696 0 0 0-.789-1.456l-1.658 1.119a6.606 6.606 0 0 1 .987 2.345a6.659 6.659 0 0 1 0 2.648a6.495 6.495 0 0 1-.384 1.231a6.404 6.404 0 0 1-.603 1.112a6.654 6.654 0 0 1-1.776 1.775a6.606 6.606 0 0 1-2.343.987a6.734 6.734 0 0 1-2.646 0a6.55 6.55 0 0 1-3.317-1.788a6.605 6.605 0 0 1-1.408-2.088a6.613 6.613 0 0 1-.382-1.23a6.627 6.627 0 0 1 .382-3.877A6.551 6.551 0 0 1 7.36 8.797A6.628 6.628 0 0 1 9.446 7.39c.395-.167.81-.296 1.23-.382c.107-.022.216-.032.324-.049V10l5-4l-5-4v2.938a8.805 8.805 0 0 0-.725.111a8.512 8.512 0 0 0-3.063 1.29A8.566 8.566 0 0 0 4.11 16.77a8.535 8.535 0 0 0 1.835 2.724a8.614 8.614 0 0 0 2.721 1.833a8.55 8.55 0 0 0 5.061.499a8.576 8.576 0 0 0 6.162-5.056c.22-.52.389-1.061.5-1.608a8.643 8.643 0 0 0 0-3.45a8.684 8.684 0 0 0-.499-1.607"
          />
        </svg>
        <NavLink to="/dashboard/my-orders" className="text-[16px] font-bold">
          My Orders
        </NavLink>
      </div>
    </div>
  );
};

export default LeftBar;
