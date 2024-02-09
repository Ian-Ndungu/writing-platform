import React, { useState } from "react";
import Calculator from "./Calculator";

function Home() {
  
  return (
   <>
    <div >
      <div className="w-full   flex justify-between mt-[140px] mb-[24px] px-[20px]">
        <div className="w-[50%]">
          <img src="/character2.3a302aa5.svg" alt="screen" />
        </div>
       <div className="w-[40%]">
        <Calculator/>
       </div>
      </div>
    </div>
    <div className="bg-[#1565c0] px-20 text-white ">
      <div className=" w-[60%] ">
        <h1>Essay Writing Service Ready to Help Online 24/7</h1>
        <p>Hire a professional essay writer at $13.40 per page and get qualified and unique paper help. Use our essay services and save more time for yourself.</p>
        <div className="flex items-center py-3 gap-5">
          <div className="flex items-center bg-[#3772d0] hover:bg-[#004695] rounded-md p-2 gap-2">
            <img src="/new-rating-widget__cash.svg" alt="cash" />
            <img src="/new-rating-widget__safe-payment.svg" alt="safe-payment" />
          </div>
          <div className="flex items-center bg-[#3772d0] hover:bg-[#004695] rounded-md p-2">
            <img src="/new-rating-widget__plagfree.svg" alt="palgfree" />
            <p>Plagarism Free</p>
          </div>
          <div className="flex items-center bg-[#3772d0] hover:bg-[#004695] rounded-md p-2">
            <img src="/new-rating-widget__money-back.svg" alt="palgfree" />
            <p>Money Back Guarantee</p>
          </div>
        </div>
      </div>

      <div className="flex items-center py-3 gap-5">
        <div>
          <div className="flex items-center gap-2">
            <img src="/new-rating-widget__plagfree.svg" alt="logo" />
            <span className="font-bold">9.5/10</span>
            <img src="/new-rating-widget__star.svg" alt="star" />
          </div>
          <a href="https://example.com" className="text-white hover:bg-white"><p>TopRatedWriters.com</p></a>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <img src="/new-logo-jabber.svg" alt="jabber" />
            <span className="font-bold">4.5/5</span>
            <img src="/new-rating-widget__star.svg" alt="star" />
          </div>
          <a href="https://example.com" className="text-white"><p>Sitejabber</p></a>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <img src="/new-reviews-logo.svg" alt="reviews" />
            <span className="font-bold">4.5/5</span>
            <img src="/new-rating-widget__star.svg" alt="star" />
          </div>
          <a href="https://example.com" className="text-white"><p>Reviews.io</p></a>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
