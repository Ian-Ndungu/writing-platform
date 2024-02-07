import React, { useEffect, useState } from "react";
import { getMyOrders } from "../../sdk/orders/orders";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { auth } = useAuth();

  const fetchMyOrders = async () => {
    try {
      const response = await getMyOrders(auth?.user?.userId);
      if (response?.status === 200) {
        setOrders(response?.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, [auth]);
  return (
    <div>
      <p className="mb-[10px] text-[16px] font-bold">My Orders</p>
      <div className="border-2 w-full h-[700px] shadow-md p-[20px]">
        <div className="flex items-center h-[60px] bg-[#0177d5] text-white px-[10px] font-bold">
          <p className="w-[7%]">#</p>
          <p className="w-[8%]">Order Number</p>
          <p className="w-[20%]">Topic</p>
          <p className="w-[15%]">Subject</p>
          <p className="w-[10%]">Type of paper</p>
          <p className="w-[18%]">Pages</p>
          <p className="w-[12%]">Amount</p>
          <p className="w-[10%]">Status</p>
        </div>
        {orders &&
          orders.map((order, index) => (
            <div
              key={order?.order_id}
              className="flex items-center min-h-[50px] bg-white text-[#000] px-[10px]"
            >
              <p className="w-[7%]">{index + 1}</p>
              <p className="w-[8%]">{order?.order_id}</p>
              <p className="w-[20%]">{order.order_topic}</p>
              <p className="w-[15%]">
                {order?.order_subject?.order_subject_name}
              </p>
              <p className="w-[10%]">{order?.order_type?.order_type_name}</p>
              <p className="w-[18%]">{order?.order_pages?.pages_description}</p>
              <p className="w-[12%]">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(order?.order_amount)}
              </p>
              <p className="w-[10%]">{order?.order_status}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
