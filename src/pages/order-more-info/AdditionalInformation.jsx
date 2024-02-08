import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../sdk/orders/orders";

const AdditionalInformation = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  const fetchOrder = async () => {
    try {
      const response = await getOrderById(id);
      if (response.status === 200) {
        setOrder(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);
  return (
    <div>
      <div className="flex items-center w-full justify-between mb-[10px]">
        <p className="text-[16px] font-bold">
          Order - #{order?.order_id} - Order additional information
        </p>
        <div className="flex items-center gap-[5px] text-[#0177d5] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M9.533 11.15A1.823 1.823 0 0 0 9 12.438V15h2.578c.483 0 .947-.192 1.289-.534l7.6-7.604a1.822 1.822 0 0 0 0-2.577l-.751-.751a1.822 1.822 0 0 0-2.578 0z" />
              <path d="M21 12c0 4.243 0 6.364-1.318 7.682C18.364 21 16.242 21 12 21c-4.243 0-6.364 0-7.682-1.318C3 18.364 3 16.242 3 12c0-4.243 0-6.364 1.318-7.682C5.636 3 7.758 3 12 3" />
            </g>
          </svg>
          <p>Edit Info</p>
        </div>
      </div>
      <div className="border-2 w-full h-[700px] shadow-md p-[20px]">
        <p className="font-bold my-[10px]">{order?.order_topic}</p>
        <p>{order?.order_additional_information}</p>
      </div>
    </div>
  );
};

export default AdditionalInformation;
