import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/auth/Login";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateOrder from "./pages/create-order/CreateOrder";
import AuthLayout from "./layouts/AuthLayout";
import AllOrders from "./pages/all-orders/AllOrders";
import MyOrders from "./pages/my-orders/MyOrders";
import Order from "./pages/order/Order";
import OrderMessage from "./pages/order-message/OrderMessage";
import OrderFiles from "./pages/order-files/OrderFiles";
import OrderRevision from "./pages/order-revision/OrderRevision";
import AdditionalInformation from "./pages/order-more-info/AdditionalInformation";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/create-order" element={<CreateOrder />} />
          <Route path="/dashboard/all-orders" element={<AllOrders />} />
          <Route path="/dashboard/my-orders" element={<MyOrders />} />
          <Route path="/dashboard/orders/:id" element={<Order />} />

          <Route
            path="/dashboard/orders/:id/order-message"
            element={<OrderMessage />}
          />
          <Route
            path="/dashboard/orders/:id/order-files"
            element={<OrderFiles />}
          />
          <Route
            path="/dashboard/orders/:id/order-revision"
            element={<OrderRevision />}
          />
          <Route
            path="/dashboard/orders/:id/additional-information"
            element={<AdditionalInformation />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
