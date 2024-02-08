import React, { useEffect, useState } from "react";
import { getOrders } from "../../sdk/orders/orders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      if (response.status === 200) {
        setOrders(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const navigateToOrder = (id) => {
    navigate(`/dashboard/orders/${id}`);
  };
  return (
    <div>
      <p className="mb-[10px] text-[16px] font-bold">All Orders</p>
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
              onClick={() => navigateToOrder(order?.order_id)}
              key={order?.order_id}
              className="flex items-center cursor-pointer min-h-[50px] bg-white text-[#000] px-[10px]"
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

export default AllOrders;
