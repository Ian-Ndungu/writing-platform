import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrderById } from "../../sdk/orders/orders";
import { toast } from "react-toastify";

const Order = () => {
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
      <div className="w-full flex items-center justify-between">
        <p className="text-[16px] font-bold">Order Details</p>
        <div className="flex items-center gap-[20px]">
          <Link
            to={`/dashboard/orders/${order?.order_id}/order-message`}
            className="!text-[#0177d5]"
          >
            Order Messages
          </Link>
          <Link
            to={`/dashboard/orders/${order?.order_id}/order-files`}
            className="!text-[#0177d5]"
          >
            Order Files
          </Link>
          <Link
            to={`/dashboard/orders/${order?.order_id}/order-revision`}
            className="!text-[#0177d5]"
          >
            Order Revision
          </Link>
        </div>
        <div className="flex items-center gap-[10px]">
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
            <p>Edit Order</p>
          </div>
          <p className="mb-[10px] text-[16px] p-0 font-bold">Order Amount:</p>
          <p className="mb-[10px] text-[16px] p-0 font-bold text-[#0177d5]">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(order?.order_amount)}
          </p>
        </div>
      </div>
      <div className="border-2 w-full h-[700px] shadow-md p-[20px]">
        <div className="flex border-b-2">
          <div className="flex flex-col gap-[20px] w-[50%] flex-wrap mb-[20px]">
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order Id:</p>
              <p>{order?.order_id}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order Type:</p>
              <p>{order?.order_type?.order_type_name}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order Language:</p>
              <p>{order?.order_language}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order Category:</p>
              <p>{order?.order_category?.order_category_name}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order Deadline:</p>
              <p>{order?.order_deadline?.order_urgency_name}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Number of references/sources:</p>
              <p>{order?.order_references?.reference_description}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Client mobile number:</p>
              <p>{order?.phone_number}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order status</p>
              <p>{order?.order_status}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-full w-[50%] flex-wrap">
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order Subject:</p>
              <p>{order?.order_subject?.order_subject_name}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order Academic Level:</p>
              <p>{order?.academic_level?.academic_level_name}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Number of pages:</p>
              <p>{order?.order_pages?.pages_description}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Citation Style:</p>
              <p>
                ({order?.order_style?.style_code}){" "}
                {order?.order_style?.style_name}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Order page spacing:</p>
              <p>{order?.order_spacing}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="font-bold">Date created:</p>
              <p>{order?.created_at}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <Link
                to={`/dashboard/orders/${order?.order_id}/additional-information`}
                className="!text-[#0177d5] !underline"
              >
                Additional information
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex items-center justify-between">
            <p className="text-[16px] font-bold mt-[10px] mb-[10px]">
              Order Instructions
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
              <p>Edit Instructions</p>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: order?.order_instructions }}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
