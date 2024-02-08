import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A2E44] h-[250px] w-full mt-[20px]">
      <div className="w-[80%] mx-auto p-[20px]">
        <div className="w-full flex items-center justify-between">
          <div className="border-2 rounded h-[80px] w-[40%] flex items-center justify-between px-[40px]">
            <p className="text-white text-[20px] font-bold">We accept</p>
            <div className="flex items-center gap-[10px]">
              <img src="/mastercard.svg" alt="mastercard" />
              <img src="/applepay.svg" alt="mastercard" />
              <img src="/discover.svg" alt="mastercard" />
              <img src="/visa.svg" alt="mastercard" />
              <img src="/amex.svg" alt="mastercard" />
            </div>
          </div>
          <div className="border-2 flex items-center rounded h-[80px] w-[40%] p-[20px] text-white">
            <div className="flex flex-col justify-center w-[25%]">
              <p className="text-center">Quality Score</p>
              <p className="text-center font-bold text-[22px]">9.6/10</p>
            </div>
            <div className="flex flex-col justify-center w-[25%]">
              <p className="text-center">Deadline Check</p>
              <p className="text-center font-bold text-[22px]">99.1%</p>
            </div>
            <div className="flex flex-col justify-center w-[25%]">
              <p className="text-center">Clients</p>
              <p className="text-center font-bold text-[22px]">24,000</p>
            </div>
            <div className="flex flex-col justify-center w-[25%]">
              <p className="text-center">Plagiarism Check</p>
              <p className="text-center font-bold text-[22px]">99%</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px] mt-[20px] !text-white">
          <Link className="!text-white">About us</Link>
          <Link className="!text-white">Terms & Conditions</Link>
          <Link className="!text-white">Free essay writing tools</Link>
          <Link className="!text-white">Plagiarism tools</Link>
          <Link className="!text-white">Samples</Link>
          <Link className="!text-white">Privacy policy</Link>
        </div>
        <div className="flex items-center gap-[20px] mt-[20px] !text-white">
          <Link className="!text-white">Essay</Link>
          <Link className="!text-white">Course work</Link>
          <Link className="!text-white">Case Study</Link>
          <Link className="!text-white">Dissertations</Link>
          <Link className="!text-white">Projects</Link>
          <Link className="!text-white">Thesis</Link>
        </div>
        <div className="flex items-center gap-[10px] mt-[10px] justify-center text-white">
          <p>Contact us:</p>
          <p>support@topratedwriters.com</p>
        </div>
        <div className="flex items-center justify-center text-white">
          <p>Copyright@topratedwriters.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
